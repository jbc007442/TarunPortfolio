# ===========================================
# 1. Build Stage — Composer + Node + Vite Build
# ===========================================
FROM php:8.2-fpm AS builder

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git curl zip unzip libpng-dev libonig-dev libxml2-dev

# Install PHP extensions
RUN docker-php-ext-install pdo pdo_mysql mbstring exif pcntl bcmath gd

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

WORKDIR /var/www/html

# Copy app files
COPY . .

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Install Node + build assets
FROM node:18 AS node_builder
WORKDIR /var/www/html
COPY --from=builder /var/www/html /var/www/html
RUN npm install && npm run build

# ===========================================
# 2. Production Stage — NGINX + PHP-FPM
# ===========================================
FROM php:8.2-fpm

# Install system dependencies
RUN apt-get update && apt-get install -y nginx supervisor \
    zip unzip git curl libpng-dev libonig-dev libxml2-dev

# Install PHP extensions
RUN docker-php-ext-install pdo pdo_mysql mbstring exif pcntl bcmath gd

# Set working directory
WORKDIR /var/www/html

# Copy Laravel project from builder
COPY --from=builder /var/www/html /var/www/html

# Copy built Vite assets
COPY --from=node_builder /var/www/html/public/build /var/www/html/public/build

# Copy nginx config
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf

# Fix permissions
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Supervisor config
COPY <<EOF /etc/supervisor/conf.d/supervisord.conf
[supervisord]
nodaemon=true

[program:php-fpm]
command=/usr/local/sbin/php-fpm

[program:nginx]
command=/usr/sbin/nginx -g "daemon off;"
EOF

EXPOSE 80

CMD ["/usr/bin/supervisord"]
