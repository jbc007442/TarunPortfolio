// src/data/sidebar-portfolio.js

import {
    IconDashboard,
    IconUser,
    IconCode,
    IconBriefcase,
    IconFileCode,
    IconTool,
    IconNotebook,
    IconMail,
    IconBrandGithub,
} from "@tabler/icons-react";

export const sidebarData = {
    user: {
        name: "Tarun Kumar",
        email: "hello@tarunkumar.dev",
        avatar: "/avatars/profile.jpg",
    },

    navMain: [
        {
            title: "Overview",
            url: "/dashboard",
            icon: IconDashboard,
        },

        {
            title: "About Me",
            url: "/dashboard/about",
            icon: IconUser,
        },

        {
            title: "Projects",
            url: "/dashboard/projects",
            icon: IconCode,
            items: [
                { title: "All Projects", url: "/dashboard/projects" },
                { title: "Featured", url: "/projects/featured" },
                { title: "Open Source", url: "/projects/open-source" },
            ],
        },

        {
            title: "Experience",
            url: "/dashboard/experience",
            icon: IconBriefcase,
            items: [
                { title: "Work History", url: "/experience" },
                { title: "Freelance", url: "/experience/freelance" },
            ],
        },

        {
            title: "Tech Stack",
            url: "/dashboard/stack",
            icon: IconTool,
            items: [
                { title: "Frontend", url: "/stack/frontend" },
                { title: "Backend", url: "/stack/backend" },
                { title: "DevOps", url: "/stack/devops" },
            ],
        },

        {
            title: "Blog",
            url: "/dashboard/blog",
            icon: IconNotebook,
            items: [
                { title: "All Posts", url: "/blog" },
                { title: "Tutorials", url: "/blog/tutorials" },
                { title: "Personal Notes", url: "/blog/notes" },
            ],
        },

        {
            title: "Resume",
            url: "/dashboard/resume",
            icon: IconFileCode,
        },

        {
            title: "Contact",
            url: "/dashboard/contact",
            icon: IconMail,
        },

        {
            title: "Github",
            url: "https://github.com/yourusername",
            icon: IconBrandGithub,
        },
    ],
};
