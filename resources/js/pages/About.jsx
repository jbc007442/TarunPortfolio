import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
    Mail,
    MapPin,
    Globe,
    Phone,
    User,
    Briefcase,
    Code2,
    Github,
} from "lucide-react";

const About = () => {
    return (
        <div className="w-full">
            {/* Top Banner */}
            <div
                className="w-full h-64 bg-cover bg-center object-fit-cover"
                style={{
                    backgroundImage: "url('asset/images/profile.jpg')",
                }}
            />

            {/* Main Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
                {/* Profile Section */}
                <div className="flex flex-col sm:flex-row sm:items-end gap-6">
                    <div className="relative">
                        <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
                            <AvatarImage src="https://api.dicebear.com/7.x/notionists/svg?seed=Tarun" />
                            <AvatarFallback>TK</AvatarFallback>
                        </Avatar>
                        <Badge className="absolute bottom-1 right-1 bg-blue-600 text-white px-2">
                            ✔ Verified
                        </Badge>
                    </div>

                    <div className="pb-2">
                        <h1 className="text-3xl font-bold">Tarun Kumar</h1>
                        <p className="text-muted-foreground">
                            Full Stack Developer • MERN • React • Laravel
                        </p>
                    </div>
                </div>

                <Separator className="my-8" />

                {/* About Section */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">About me</h2>

                    <p className="text-muted-foreground leading-relaxed">
                        I'm a Full Stack Developer passionate about building
                        clean, scalable, and modern web applications. I work
                        with technologies like React, Next.js, Laravel, Node.js,
                        and Tailwind CSS.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                        I enjoy turning ideas into real, user-friendly products
                        — from clean UI/UX to powerful backend logic. My focus
                        is on performance, maintainability, and smooth user
                        experiences.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                        I'm constantly learning, improving my craft, and
                        building impactful solutions that solve real-world
                        problems.
                    </p>
                </div>

                <Separator className="my-8" />

                {/* Information */}
                <h2 className="text-2xl font-semibold mb-4">Information</h2>

                {/* Contact Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {/* Full Name */}
                    <div>
                        <p className="text-xs text-muted-foreground">
                            Full Name
                        </p>
                        <p className="flex items-center gap-2 font-medium">
                            <User size={14} />
                            Tarun Kumar
                        </p>
                    </div>

                    {/* Location */}
                    <div>
                        <p className="text-xs text-muted-foreground">
                            Location
                        </p>
                        <p className="flex items-center gap-2 font-medium">
                            <MapPin size={14} />
                            India
                        </p>
                    </div>

                    {/* Mobile */}
                    <div>
                        <p className="text-xs text-muted-foreground">Mobile</p>
                        <p className="flex items-center gap-2 font-medium">
                            <Phone size={14} />
                            +91 98765 43210
                        </p>
                    </div>

                    {/* Email */}
                    <div>
                        <p className="text-xs text-muted-foreground">Email</p>
                        <a
                            href="mailto:tarunkumar@example.com"
                            className="font-medium hover:underline flex items-center gap-2"
                        >
                            <Mail size={14} />
                            tarun@web.com
                        </a>
                    </div>

                    {/* Website */}
                    <div>
                        <p className="text-xs text-muted-foreground">Website</p>
                        <a
                            href="https://tarunkumar.dev"
                            className="font-medium hover:underline flex items-center gap-2"
                            target="_blank"
                        >
                            <Globe size={14} />
                            tarunkumar.dev
                        </a>
                    </div>

                    {/* GitHub */}
                    <div>
                        <p className="text-xs text-muted-foreground">GitHub</p>
                        <a
                            href="https://github.com/jbc007442"
                            className="font-medium hover:underline flex items-center gap-2"
                            target="_blank"
                        >
                            <Github size={14} />
                            @jbc007442
                        </a>
                    </div>

                    {/* Experience */}
                    <div>
                        <p className="text-xs text-muted-foreground">
                            Experience
                        </p>
                        <p className="flex items-center gap-2 font-medium">
                            <Briefcase size={14} />
                            3+ Years
                        </p>
                    </div>

                    {/* Specialization */}
                    <div>
                        <p className="text-xs text-muted-foreground">
                            Specialization
                        </p>
                        <p className="flex items-center gap-2 font-medium">
                            <Code2 size={14} />
                            Full Stack • React • Laravel
                        </p>
                    </div>
                </div>

                <Separator className="my-10" />

                {/* Experience Section */}
                <h2 className="text-2xl font-semibold mb-4">Experience</h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6">
                    <Card>
                        <CardHeader>
                            <h3 className="font-semibold text-lg">
                                Full Stack Developer
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Freelance
                            </p>
                        </CardHeader>
                        <CardContent>
                            <p className="text-xs text-muted-foreground">
                                2022 – Present
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <h3 className="font-semibold text-lg">
                                Frontend Developer
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Remote Projects
                            </p>
                        </CardHeader>
                        <CardContent>
                            <p className="text-xs text-muted-foreground">
                                2020 – 2022
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <h3 className="font-semibold text-lg">
                                Web Developer Intern
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Startup
                            </p>
                        </CardHeader>
                        <CardContent>
                            <p className="text-xs text-muted-foreground">
                                2019 – 2020
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default About;
