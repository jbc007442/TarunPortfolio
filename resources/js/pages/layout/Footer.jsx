import React from "react";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Globe } from "lucide-react";

const Footer = () => {
    return (
        <footer className="w-full  bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Main Content */}
                <div className="flex flex-col items-center gap-4">
                    {/* Name / Branding */}
                    <h2 className="text-lg font-semibold">Tarun Kumar</h2>
                    <p className="text-sm text-muted-foreground text-center">
                        Full Stack Developer • React • Laravel • MERN
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-5 mt-2">
                        <a
                            href="https://github.com/jbc007442"
                            target="_blank"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Github size={20} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/tarun-kumar-140038262/"
                            target="_blank"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Linkedin size={20} />
                        </a>

                        <a
                            href="mailto:tarunkumar@example.com"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Mail size={20} />
                        </a>

                        <a
                            href="https://tarunkumar.dev"
                            target="_blank"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Globe size={20} />
                        </a>
                    </div>
                </div>

                <Separator className="my-6" />

                {/* Bottom */}
                <p className="text-center text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Tarun Kumar. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
