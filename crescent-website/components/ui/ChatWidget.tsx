'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComment, FaTimes, FaRobot, FaPaperPlane } from 'react-icons/fa';
import Link from 'next/link';

type Option = {
    label: string;
    nextNodeId?: string;
    link?: string;
};

type BotNode = {
    message: string | string[];
    options: Option[];
};

type DecisionTree = {
    [key: string]: BotNode;
};

const DECISION_TREE: DecisionTree = {
    start: {
        message: "Hi there! 👋 Welcome to Cresent Technosoft. How can we help you today?",
        options: [
            { label: "Software Products", nextNodeId: "products" },
            { label: "Partner Program", nextNodeId: "partner" },
            { label: "Contact Sales", nextNodeId: "contact" },
            { label: "Other Query", nextNodeId: "custom_query" }
        ]
    },
    products: {
        message: "We offer comprehensive, next-generation healthcare solutions. Which area are you interested in?",
        options: [
            { label: "Hospital Management", nextNodeId: "hospital" },
            { label: "Lab & Clinic Solutions", nextNodeId: "lab" },
            { label: "Pharmacy & Inventory", nextNodeId: "pharmacy" },
            { label: "🔙 Go Back", nextNodeId: "start" }
        ]
    },
    hospital: {
        message: [
            "Our Hospital Management System is a complete, scalable solution designed to streamline hospital operations and patient care.",
            "Would you like to explore this further?"
        ],
        options: [
            { label: "Request a Demo", link: "/demo" },
            { label: "Contact Sales", link: "/contact" },
            { label: "🔙 Start Over", nextNodeId: "start" }
        ]
    },
    lab: {
        message: "We provide advanced software for sample tracking, appointment scheduling, and rapid diagnostic workflows in clinics and labs.",
        options: [
            { label: "Request a Demo", link: "/demo" },
            { label: "Contact Sales", link: "/contact" },
            { label: "🔙 Start Over", nextNodeId: "start" }
        ]
    },
    pharmacy: {
        message: "Our intelligent Pharmacy & Inventory modules ensure accuracy, manage prescriptions seamlessly, and track stock in real-time.",
        options: [
            { label: "Request a Demo", link: "/demo" },
            { label: "Contact Sales", link: "/contact" },
            { label: "🔙 Start Over", nextNodeId: "start" }
        ]
    },
    partner: {
        message: "Awesome! We are actively looking for enthusiastic Resellers, Dealers, and Channel Partners to grow with us.",
        options: [
            { label: "View Partnership Tiers", link: "/partner-program" },
            { label: "Apply Now", link: "/collaboration" },
            { label: "🔙 Start Over", nextNodeId: "start" }
        ]
    },
    contact: {
        message: "Our team is ready to assist you! We operate Monday to Saturday.",
        options: [
            { label: "Go to Contact Page", link: "/contact" },
            { label: "🔙 Start Over", nextNodeId: "start" }
        ]
    },
    // State dedicated to manual user typing
    custom_query: {
        message: "I understand. Please type your query below, along with your email address, and our support team will get directly in touch with you.",
        options: []
    }
};

type MessageHistory = {
    id: number;
    sender: 'bot' | 'user';
    text: string;
    isTyping?: boolean;
    options?: Option[];
};

export const ChatWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<MessageHistory[]>([]);
    const [inputText, setInputText] = useState('');
    const [activeNode, setActiveNode] = useState('start');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [messageCount, setMessageCount] = useState(0);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            pushBotNode('start');
        }
    }, [isOpen]);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const pushBotNode = (nodeId: string) => {
        const node = DECISION_TREE[nodeId];
        if (!node) return;

        const messagesToAdd = Array.isArray(node.message) ? node.message : [node.message];
        
        let delay = 0;
        
        messagesToAdd.forEach((msg, index) => {
            const isLastMessage = index === messagesToAdd.length - 1;
            const currentCount = messageCount + index + 1;
            
            // Add typing indicator
            setTimeout(() => {
                setMessages(prev => [...prev, { id: Date.now() + Math.random(), sender: 'bot', text: '', isTyping: true }]);
            }, delay);

            delay += 600;

            // Replace typing indicator with actual message
            setTimeout(() => {
                setMessages(prev => {
                    const newMsgs = [...prev];
                    // Remove the typing indicator
                    const typingIdx = newMsgs.findIndex(m => m.isTyping);
                    if (typingIdx > -1) newMsgs.splice(typingIdx, 1);
                    
                    newMsgs.push({
                        id: Date.now() + Math.random(),
                        sender: 'bot',
                        text: msg,
                        options: isLastMessage ? node.options : undefined
                    });
                    return newMsgs;
                });
                if (isLastMessage) setMessageCount(currentCount);
            }, delay);
            
            delay += 300;
        });
    };

    const handleOptionClick = (option: Option) => {
        // Remove options from the last bot message
        setMessages(prev => {
            const newMsgs = [...prev];
            const lastBotMsgMsg = newMsgs[newMsgs.length - 1];
            if (lastBotMsgMsg && lastBotMsgMsg.sender === 'bot') {
                lastBotMsgMsg.options = undefined;
            }
            return newMsgs;
        });

        // Add user's selection as a message
        setMessages(prev => [...prev, {
            id: Date.now() + Math.random(),
            sender: 'user',
            text: option.label
        }]);

        if (option.nextNodeId) {
            setActiveNode(option.nextNodeId);
        }

        // Process next step
        if (option.nextNodeId) {
            setTimeout(() => {
                pushBotNode(option.nextNodeId!);
            }, 500);
        }
    };

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        const userMsg = inputText.trim();
        setInputText('');
        
        // Push user message to UI immediately
        setMessages(prev => [...prev, {
            id: Date.now() + Math.random(),
            sender: 'user',
            text: userMsg
        }]);

        if (activeNode === 'custom_query') {
            setIsSubmitting(true);
            try {
                // Send directly to the new API we just built using Resend
                const res = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: "Chat Widget User",
                        email: userMsg.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi)?.[0] || 'Email Provided in Message',
                        inquiryType: "Other Query",
                        source: "Live Chat Widget",
                        message: userMsg
                    })
                });

                if (res.ok) {
                    setTimeout(() => {
                        setMessages(prev => [...prev, {
                            id: Date.now() + Math.random(),
                            sender: 'bot',
                            text: "Thank you! Your message has been sent successfully. Our team will review it and get back to you shortly.",
                            options: [{ label: "🔙 Start Over", nextNodeId: "start" }]
                        }]);
                        setActiveNode('start_over_state');
                        setIsSubmitting(false);
                    }, 800);
                } else {
                    throw new Error('Failed');
                }
            } catch (error) {
                setTimeout(() => {
                    setMessages(prev => [...prev, {
                        id: Date.now() + Math.random(),
                        sender: 'bot',
                        text: "Sorry, we had trouble sending your message. Please try contacting us via the Contact page.",
                        options: [
                            { label: "Go to Contact Page", link: "/contact" },
                            { label: "🔙 Start Over", nextNodeId: "start" }
                        ]
                    }]);
                    setActiveNode('start_over_state');
                    setIsSubmitting(false);
                }, 800);
            }
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white w-[340px] sm:w-[380px] h-[500px] mb-4 rounded-sm shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-blue-950 px-5 py-4 flex items-center justify-between border-b border-blue-900">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white rounded-sm flex items-center justify-center">
                                    <img src="/Assets/logo.webp" alt="Logo" className="w-8 h-8 object-contain p-1" onError={(e) => {
                                        // Fallback icon if logo not found
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                    }} />
                                    <FaRobot className="text-blue-900 text-xl hidden" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-sm tracking-wide">Cresent Support</h3>
                                    <p className="text-blue-200 text-xs flex items-center gap-1.5 mt-0.5">
                                        <span className="w-2 h-2 bg-green-500 rounded-full inline-block animate-pulse"></span>
                                        Online
                                    </p>
                                </div>
                            </div>
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="text-blue-200 hover:text-white transition-colors"
                            >
                                <FaTimes size={20} />
                            </button>
                        </div>

                        {/* Chat Body */}
                        <div className="flex-1 bg-slate-50 p-5 overflow-y-auto w-full scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                            <div className="space-y-4">
                                {messages.map((msg) => (
                                    <div key={msg.id} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                                        <div className="flex items-end gap-2 max-w-[85%]">
                                            {msg.sender === 'bot' && !msg.isTyping && (
                                                <div className="w-6 h-6 bg-blue-900 rounded-sm flex items-center justify-center flex-shrink-0 mb-1">
                                                    <FaRobot className="text-white text-xs" />
                                                </div>
                                            )}
                                            
                                            <div className={`px-4 py-2.5 rounded-sm text-sm outline-none shadow-sm ${
                                                msg.sender === 'user' 
                                                    ? 'bg-blue-900 text-white font-medium rounded-br-none' 
                                                    : 'bg-white border border-gray-200 text-gray-700 leading-relaxed rounded-bl-none'
                                            }`}>
                                                {msg.isTyping ? (
                                                    <div className="flex gap-1.5 py-1.5 px-2">
                                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                                    </div>
                                                ) : (
                                                    msg.text
                                                )}
                                            </div>
                                        </div>

                                        {/* Options */}
                                        {msg.options && msg.options.length > 0 && (
                                            <div className="mt-3 flex flex-wrap gap-2 pl-8">
                                                {msg.options.map((opt, idx) => (
                                                    opt.link ? (
                                                        <Link key={idx} href={opt.link}>
                                                            <button 
                                                                className="px-3 py-1.5 bg-white border-2 border-blue-900 text-blue-950 text-xs font-bold rounded-sm hover:bg-blue-900 hover:text-white transition-colors tracking-wide"
                                                                onClick={() => setIsOpen(false)}
                                                            >
                                                                {opt.label}
                                                            </button>
                                                        </Link>
                                                    ) : (
                                                        <button 
                                                            key={idx}
                                                            onClick={() => handleOptionClick(opt)}
                                                            className="px-3 py-1.5 bg-white border border-gray-300 text-blue-950 text-xs font-bold rounded-sm hover:border-blue-900 hover:bg-slate-50 transition-colors tracking-wide shadow-sm"
                                                        >
                                                            {opt.label}
                                                        </button>
                                                    )
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                                <div ref={messagesEndRef} />
                            </div>
                        </div>

                        {/* Custom Input Area */}
                        {activeNode === 'custom_query' && (
                            <form
                                onSubmit={handleSendMessage}
                                className="p-3 bg-white border-t border-slate-200 flex space-x-2"
                            >
                                <input
                                    type="text"
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    placeholder="Type your message and email..."
                                    disabled={isSubmitting}
                                    className="w-full px-3 py-2 text-sm text-slate-900 bg-slate-100 border-none rounded-md focus:ring-0 focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    disabled={isSubmitting || !inputText.trim()}
                                    className="p-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50 transition-colors"
                                >
                                    <FaPaperPlane className="w-4 h-4" />
                                </button>
                            </form>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Action Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 bg-blue-950 hover:bg-blue-900 text-white rounded-sm shadow-xl flex items-center justify-center transition-all duration-300 border-2 border-transparent hover:border-blue-800 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
                style={{ position: 'absolute', bottom: 0, right: 0 }}
            >
                <FaComment size={24} />
                {/* Notification dot */}
                {!isOpen && messages.length === 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></span>
                )}
            </button>
        </div>
    );
};