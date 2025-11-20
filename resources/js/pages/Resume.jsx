import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
    Mail,
    Phone,
    MapPin,
    Github,
    Linkedin,
    Award,
    Briefcase,
    GraduationCap,
} from "lucide-react";

const Resume = () => {
    return (
        <div className="w-full pt-10 pb-20 bg-gradient-to-b from-background via-background to-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                {/* ===================== HEADER / HERO ===================== */}
                <div className="text-center space-y-4">
                    <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
                        Tarun Kumar
                    </h1>

                    <p className="text-sm sm:text-lg text-muted-foreground">
                        Full Stack Developer • React • Laravel • MERN Stack
                    </p>

                    {/* Contact Info */}
                    <div className="flex justify-center gap-6 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                            <Mail size={16} /> tarunkumar@example.com
                        </span>
                        <span className="flex items-center gap-1">
                            <Phone size={16} /> +91 98765 43210
                        </span>
                        <span className="flex items-center gap-1">
                            <MapPin size={16} /> India
                        </span>
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-6 mt-3">
                        <a
                            href="https://github.com/jbc007442"
                            target="_blank"
                            className="flex items-center gap-1 hover:text-primary transition-colors"
                        >
                            <Github size={20} /> GitHub
                        </a>

                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            className="flex items-center gap-1 hover:text-primary transition-colors"
                        >
                            <Linkedin size={20} /> LinkedIn
                        </a>
                    </div>
                </div>

                <Separator />

                {/* ===================== SKILLS ===================== */}
                <section className="space-y-6">
                    <div className="flex items-center gap-2">
                        <Award size={22} className="text-primary" />
                        <h2 className="text-3xl font-semibold">Skills</h2>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {[
                            "React",
                            "Next.js",
                            "JavaScript",
                            "TypeScript",
                            "Laravel",
                            "PHP",
                            "Node.js",
                            "Express",
                            "MySQL",
                            "MongoDB",
                            "Tailwind CSS",
                            "REST APIs",
                            "Git & GitHub",
                        ].map((skill) => (
                            <Badge
                                key={skill}
                                variant="secondary"
                                className="px-4 py-1.5 rounded bg-gray-50 hover:bg-gray-100 text-sm shadow-sm"
                            >
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </section>

                <Separator />

                {/* ===================== EXPERIENCE ===================== */}
                <section className="space-y-6">
                    <div className="flex items-center gap-2">
                        <Briefcase size={22} className="text-primary" />
                        <h2 className="text-3xl font-semibold">Experience</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <Card className="shadow-sm border-muted">
                            <CardHeader>
                                <CardTitle className="text-xl font-semibold">
                                    Full Stack Developer
                                </CardTitle>
                                <p className="text-muted-foreground text-sm">
                                    Freelancer • 2022 – Present
                                </p>
                            </CardHeader>

                            <CardContent className="text-sm text-muted-foreground leading-relaxed">
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>
                                        Built full-stack applications using
                                        React, Laravel & MERN.
                                    </li>
                                    <li>
                                        Developed admin panels, CRMs, booking
                                        systems and dashboards.
                                    </li>
                                    <li>
                                        Optimized performance, UX, and frontend
                                        architecture.
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="shadow-sm border-muted">
                            <CardHeader>
                                <CardTitle className="text-xl font-semibold">
                                    Frontend Developer
                                </CardTitle>
                                <p className="text-muted-foreground text-sm">
                                    Remote Projects • 2020 – 2022
                                </p>
                            </CardHeader>

                            <CardContent className="text-sm text-muted-foreground leading-relaxed">
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>
                                        Created modern UI with React, Tailwind,
                                        Framer Motion.
                                    </li>
                                    <li>
                                        Converted complex Figma designs into
                                        high-quality interfaces.
                                    </li>
                                    <li>
                                        Worked on SEO-friendly, responsive,
                                        high-performance websites.
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <Separator />

                {/* ===================== EDUCATION ===================== */}
                {/* ===================== PROJECTS ===================== */}
                <section className="space-y-6">
                    <div className="flex items-center gap-2">
                        <Briefcase size={22} className="text-primary" />
                        <h2 className="text-3xl font-semibold">Projects</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Project 1 */}
                        <Card className="shadow-sm border-muted">
                            <CardHeader>
                                <CardTitle className="text-xl font-semibold">
                                    CRM & Booking Management System
                                </CardTitle>
                                <p className="text-muted-foreground text-sm">
                                    React • Laravel • MySQL
                                </p>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground leading-relaxed space-y-2">
                                <p>
                                    A full CRM including booking, invoice
                                    generation, lead management, email
                                    automation, and admin dashboard.
                                </p>
                                <ul className="list-disc pl-5 text-sm space-y-1">
                                    <li>
                                        Advanced admin panel with role
                                        permissions
                                    </li>
                                    <li>
                                        Dynamic charts, analytics, and KPI
                                        metrics
                                    </li>
                                    <li>
                                        Automated email notifications &
                                        workflows
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Project 2 */}
                        <Card className="shadow-sm border-muted">
                            <CardHeader>
                                <CardTitle className="text-xl font-semibold">
                                    Flight Booking Form + Agreement System
                                </CardTitle>
                                <p className="text-muted-foreground text-sm">
                                    Laravel • React • Email OTP • Signature
                                    Capture
                                </p>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground leading-relaxed space-y-2">
                                <p>
                                    End-to-end booking workflow with form
                                    submission, email authorization, agreement
                                    signature, and PDF generation.
                                </p>
                                <ul className="list-disc pl-5 text-sm space-y-1">
                                    <li>Image signature capture & storage</li>
                                    <li>
                                        Dynamic flight parsing & pricing logic
                                    </li>
                                    <li>
                                        No DB write until signature submitted
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Project 3 */}
                        <Card className="shadow-sm border-muted">
                            <CardHeader>
                                <CardTitle className="text-xl font-semibold">
                                    Portfolio & Resume Builder Website
                                </CardTitle>
                                <p className="text-muted-foreground text-sm">
                                    React • Tailwind • shadcn/ui
                                </p>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground leading-relaxed space-y-2">
                                <p>
                                    A responsive portfolio builder with
                                    drag-and-drop sections, custom theming, and
                                    instant preview.
                                </p>
                                <ul className="list-disc pl-5 text-sm space-y-1">
                                    <li>Fully mobile-friendly</li>
                                    <li>
                                        Smooth UI animations with Framer Motion
                                    </li>
                                    <li>Supports exporting profiles as PDF</li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Project 4 */}
                        <Card className="shadow-sm border-muted">
                            <CardHeader>
                                <CardTitle className="text-xl font-semibold">
                                    Ecommerce API + Admin Dashboard
                                </CardTitle>
                                <p className="text-muted-foreground text-sm">
                                    Node.js • MongoDB • React Admin
                                </p>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground leading-relaxed space-y-2">
                                <p>
                                    A complete ecommerce backend with admin
                                    dashboard for order tracking, product
                                    management, and analytics.
                                </p>
                                <ul className="list-disc pl-5 text-sm space-y-1">
                                    <li>
                                        JWT authentication & role-based access
                                    </li>
                                    <li>Product search, filters, categories</li>
                                    <li>Sales analytics & reporting</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <Separator />

                {/* ===================== MORE / EXTRAS ===================== */}
                <section className="space-y-6 pb-10">
                    <h2 className="text-3xl font-semibold">More</h2>

                    <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                        <p>
                            ✔ Deep passion for building real-world applications.
                        </p>
                        <p>
                            ✔ Constantly improving and learning new
                            technologies.
                        </p>
                        <p>
                            ✔ Open to freelance, collaborations, and long-term
                            projects.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Resume;
