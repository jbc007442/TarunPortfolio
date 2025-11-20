import React from "react";
import { Link } from "react-router-dom";
import { IconMenu2, IconLogin } from "@tabler/icons-react";

import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Header = () => {
    return (
        <header className="w-full border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4">
                {/* LOGO */}
                <Link to="/" className="text-2xl font-bold tracking-tight">
                    <span className="text-black">Tarun</span>
                    <span className="text-blue-600">.</span>
                </Link>

                {/* DESKTOP NAV */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link
                        className="hover:text-blue-600 transition"
                        to="/about"
                    >
                        About
                    </Link>
                    <Link
                        className="hover:text-blue-600 transition"
                        to="/projects"
                    >
                        Projects
                    </Link>
                    <Link
                        className="hover:text-blue-600 transition"
                        to="/skills"
                    >
                        Skills
                    </Link>
                    <Link
                        className="hover:text-blue-600 transition"
                        to="/contact"
                    >
                        Contact
                    </Link>
                </nav>

                {/* CTA BUTTON */}
                <Link
                    to="/auth"
                    className="hidden md:flex items-center justify-center bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition gap-2"
                >
                    <IconLogin size={18} />
                </Link>

                {/* MOBILE DRAWER */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon">
                                <IconMenu2 size={22} />
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="right" className="w-72 px-5 py-6">
                            <SheetHeader className="mb-2">
                                <SheetTitle className="text-left text-xl font-semibold">
                                    Menu
                                </SheetTitle>
                            </SheetHeader>

                            <Separator className="mb-6" />

                            {/* NAV LINKS MOBILE */}
                            <nav className="flex flex-col gap-3">
                                <SheetClose asChild>
                                    <Link
                                        to="#about"
                                        className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition font-medium"
                                    >
                                        About
                                    </Link>
                                </SheetClose>

                                <SheetClose asChild>
                                    <Link
                                        to="#projects"
                                        className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition font-medium"
                                    >
                                        Projects
                                    </Link>
                                </SheetClose>

                                <SheetClose asChild>
                                    <Link
                                        to="#skills"
                                        className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition font-medium"
                                    >
                                        Skills
                                    </Link>
                                </SheetClose>

                                <SheetClose asChild>
                                    <Link
                                        to="#contact"
                                        className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition font-medium"
                                    >
                                        Contact
                                    </Link>
                                </SheetClose>
                            </nav>

                            {/* LOGIN BUTTON */}
                            <div className="mt-6">
                                <SheetClose asChild>
                                    <Link
                                        to="/auth"
                                        className="flex items-center justify-center gap-2 bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 transition"
                                    >
                                        <IconLogin size={18} />
                                    </Link>
                                </SheetClose>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default Header;
