"use client";

import { useState } from "react";

interface AccordionItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

function AccordionItem({ question, answer, isOpen, onClick }: AccordionItemProps) {
    return (
        <div className="border-b border-neutral-100 last:border-0">
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between py-5 text-left group"
            >
                <span className="font-medium text-neutral-800 group-hover:text-primary-500 transition-colors pr-4">
                    {question}
                </span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-primary-500 rotate-180" : ""}`}>
                    <svg
                        className={`w-4 h-4 transition-colors ${isOpen ? "text-white" : "text-primary-500"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0"
                    }`}
            >
                <p className="text-neutral-600 leading-relaxed">
                    {answer}
                </p>
            </div>
        </div>
    );
}

interface FAQItem {
    question: string;
    answer: string;
}

interface AccordionProps {
    items: FAQItem[];
    allowMultiple?: boolean;
}

export default function Accordion({ items, allowMultiple = false }: AccordionProps) {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);

    const handleClick = (index: number) => {
        if (allowMultiple) {
            setOpenIndexes(prev =>
                prev.includes(index)
                    ? prev.filter(i => i !== index)
                    : [...prev, index]
            );
        } else {
            setOpenIndexes(prev =>
                prev.includes(index) ? [] : [index]
            );
        }
    };

    return (
        <div className="card p-0 divide-y divide-neutral-100">
            {items.map((item, index) => (
                <div key={index} className="px-6">
                    <AccordionItem
                        question={item.question}
                        answer={item.answer}
                        isOpen={openIndexes.includes(index)}
                        onClick={() => handleClick(index)}
                    />
                </div>
            ))}
        </div>
    );
}
