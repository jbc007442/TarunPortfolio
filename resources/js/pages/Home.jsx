import { useState } from "react";
import { Minus, Plus, Heart } from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { cn } from "@/lib/utils";

const Home = () => {
    const [open, setOpen] = useState(null);

    const faq = [
        {
            question: "What's included in a mentorship session?",
            answer: "Each session is fully personalized. We can review your portfolio, discuss challenges, improve storytelling, or explore career growth with actionable feedback.",
        },
        {
            question: "Who are these sessions for?",
            answer: "Whether you're a beginner, self-taught designer, or mid-level developer, these sessions adapt to your goals.",
        },
        {
            question: "Do I need a portfolio to book a session?",
            answer: "Nope! You can join even if you're still building one. We can focus on your personal projects, design workflow, or career direction.",
        },
    ];

    const words =
        "I build modern, high-performance applications with React, Laravel, and the MERN stack. Clean design, powerful logic, seamless user experience — that’s my blueprint.";

    return (
        <>
            {/* HERO SECTION */}
            <CardSpotlight
                className="w-full py-24 md:py-40 bg-background border-none shadow-none"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-8">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <EncryptedText text="Hi, I'm Tarun Kumar." />
                    </h1>

                    <div className="max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed">
                        <TextGenerateEffect
                            duration={2}
                            filter={false}
                            words={words}
                        />
                    </div>
                </div>
            </CardSpotlight>

            {/* FAQ SECTION */}
            <section className="w-full py-20 bg-gray-50">
                <div className="max-w-3xl mx-auto px-2">
                    {/* Section Heading */}
                    <div className="text-center mb-10 space-y-1">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-500 text-base md:text-lg">
                            Quick answers to common questions.
                        </p>
                    </div>

                    {/* Accordion */}
                    <div className="space-y-3">
                        {faq.map((item, i) => {
                            const active = open === i;

                            return (
                                <div key={i}>
                                    {/* Question Button */}
                                    <button
                                        onClick={() =>
                                            setOpen(active ? null : i)
                                        }
                                        className="flex items-center justify-between w-full
                                       rounded-2xl px-6 py-4
                                       bg-white text-gray-900
                                       shadow-sm border border-gray-200
                                       hover:bg-gray-50 transition-all"
                                    >
                                        <span className="font-medium text-[16px]">
                                            {item.question}
                                        </span>

                                        <span className="text-gray-600">
                                            {active ? (
                                                <Minus size={20} />
                                            ) : (
                                                <Plus size={20} />
                                            )}
                                        </span>
                                    </button>

                                    {/* Answer */}
                                    <div
                                        className={cn(
                                            "rounded-2xl bg-gray-100 text-gray-800 px-6 py-4 leading-relaxed shadow-sm border border-gray-200 transition-all duration-300",
                                            active
                                                ? "opacity-100 scale-100 mt-2"
                                                : "opacity-0 scale-95 h-0 overflow-hidden"
                                        )}
                                    >
                                        {item.answer}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
