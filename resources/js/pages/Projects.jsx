import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = {
    all: [
        {
            title: "CRM & Booking Management System",
            desc: "Full CRM with booking, leads, invoice, automation, dashboards.",
            tech: ["React", "Laravel", "MySQL"],
        },
        {
            title: "Flight Booking + Agreement System",
            desc: "Form booking, email OTP, signature system, PDF generation.",
            tech: ["Laravel", "React"],
        },
        {
            title: "Portfolio & Resume Builder",
            desc: "Portfolio generator with live preview & drag-and-drop sections.",
            tech: ["React", "Tailwind", "shadcn/ui"],
        },
        {
            title: "Ecommerce API + Admin Panel",
            desc: "Products, orders, customers, JWT auth, analytics.",
            tech: ["Node.js", "MongoDB", "React"],
        },
    ],

    fullstack: [
        {
            title: "CRM & Booking Management System",
            desc: "Advanced CRM with analytics & automation.",
            tech: ["React", "Laravel"],
        },
        {
            title: "Flight Booking + Agreement System",
            desc: "End-to-end booking + digital signature workflow.",
            tech: ["React", "Laravel"],
        },
    ],

    frontend: [
        {
            title: "Portfolio & Resume Builder",
            desc: "Drag-and-drop sections, live preview UI.",
            tech: ["React", "Tailwind"],
        },
    ],

    backend: [
        {
            title: "Ecommerce API + Admin Panel",
            desc: "Node API with authentication & dashboard.",
            tech: ["Node.js", "MongoDB", "Express"],
        },
    ],
};

const Projects = () => {
    return (
        <div className="w-full py-10">
            <div className="max-w-7xl mx-auto px-4 space-y-10">
                {/* Header */}
                <div className="text-center space-y-2">
                    <h1 className="text-4xl font-bold">Projects</h1>
                    <p className="text-muted-foreground">
                        Explore my full-stack, frontend, and backend projects.
                    </p>
                </div>

                {/* Tabs */}
                <Tabs defaultValue="all" className="w-full">
                    <TabsList className="flex justify-center gap-4 mx-auto">
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
                        <TabsTrigger value="frontend">Frontend</TabsTrigger>
                        <TabsTrigger value="backend">Backend</TabsTrigger>
                    </TabsList>

                    {/* All Projects */}
                    <TabsContent value="all">
                        <ProjectGrid data={projects.all} />
                    </TabsContent>

                    {/* Full Stack */}
                    <TabsContent value="fullstack">
                        <ProjectGrid data={projects.fullstack} />
                    </TabsContent>

                    {/* Frontend */}
                    <TabsContent value="frontend">
                        <ProjectGrid data={projects.frontend} />
                    </TabsContent>

                    {/* Backend */}
                    <TabsContent value="backend">
                        <ProjectGrid data={projects.backend} />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

function ProjectGrid({ data }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            {data.map((p, i) => (
                <Card
                    key={i}
                    className="hover:shadow-md border-muted transition-all"
                >
                    <CardHeader>
                        <CardTitle className="text-xl font-semibold">
                            {p.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                            {p.desc}
                        </p>
                    </CardHeader>

                    <CardContent>
                        <div className="flex flex-wrap gap-2 mt-3">
                            {p.tech.map((t) => (
                                <Badge
                                    key={t}
                                    variant="secondary"
                                    className="px-3 py-1"
                                >
                                    {t}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

export default Projects;
