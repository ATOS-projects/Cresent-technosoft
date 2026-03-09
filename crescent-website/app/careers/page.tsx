import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FaBriefcase, FaCode, FaUsers, FaRocket } from "react-icons/fa";

export default function CareersPage() {
    const positions = [
        {
            title: "Marketing Executive",
            department: "Marketing",
            type: "Full-time",
            location: "India / Remote",
            icon: FaBriefcase,
            description: "Join our marketing team to help us reach more clients and grow our brand presence."
        },
        {
            title: "Software Developer",
            department: "Development",
            type: "Full-time",
            location: "India / Remote",
            icon: FaCode,
            description: "Build innovative solutions with cutting-edge technologies and work on exciting projects."
        },
        {
            title: "HR Manager",
            department: "Human Resources",
            type: "Full-time",
            location: "India",
            icon: FaUsers,
            description: "Help us build a great team and foster a positive company culture."
        }
    ];

    return (
        <div className="min-h-screen theme-bg relative overflow-hidden pt-32 pb-24">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-mesh-dark opacity-100 z-0"></div>
            <div className="absolute top-[10%] left-[-5%] w-[40vw] h-[40vw] max-w-[800px] max-h-[800px] bg-secondary-600/10 rounded-full blur-[100px] animate-float-slow pointer-events-none z-0"></div>
            <div className="relative z-10 min-h-screen flex flex-col">
                <Container>
                    <AnimatedSection direction="up">
                        <div className="text-center mb-16">
                            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                                <span className="gradient-text">Join Our Team</span>
                            </h1>
                            <p className="text-xl theme-text-muted font-light max-w-3xl mx-auto">
                                Be part of a dynamic team building innovative software solutions that make a difference
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* Why Join Us */}
                    <AnimatedSection direction="up" delay={0.1}>
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold mb-8 text-center">
                                <span className="gradient-text">Why Work With Us?</span>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <Card className="glass transition-colors group text-center">
                                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <FaRocket className="text-white text-2xl" />
                                    </div>
                                    <h3 className="text-2xl font-bold theme-text tracking-tight mb-3">Innovation</h3>
                                    <p className="theme-text-muted font-light">
                                        Work on cutting-edge projects and technologies that push boundaries
                                    </p>
                                </Card>

                                <Card className="glass transition-colors group text-center">
                                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <FaUsers className="text-white text-2xl" />
                                    </div>
                                    <h3 className="text-2xl font-bold theme-text tracking-tight mb-3">Great Team</h3>
                                    <p className="theme-text-muted font-light">
                                        Collaborate with talented professionals in a supportive environment
                                    </p>
                                </Card>

                                <Card className="glass transition-colors group text-center">
                                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <FaBriefcase className="text-white text-2xl" />
                                    </div>
                                    <h3 className="text-2xl font-bold theme-text tracking-tight mb-3">Growth</h3>
                                    <p className="theme-text-muted font-light">
                                        Continuous learning opportunities and career advancement
                                    </p>
                                </Card>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Open Positions */}
                    <AnimatedSection direction="up" delay={0.2}>
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold mb-8 text-center">
                                <span className="gradient-text">Open Positions</span>
                            </h2>
                            <div className="space-y-6">
                                {positions.map((position, index) => {
                                    const Icon = position.icon;
                                    return (
                                        <Card key={index} className="hover-lift">
                                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                                                <div className="flex items-start space-x-4">
                                                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                                        <Icon className="text-white text-xl" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-2xl font-bold theme-text tracking-tight mb-2">{position.title}</h3>
                                                        <div className="flex flex-wrap gap-3 text-sm theme-text-muted font-light mb-2">
                                                            <span>{position.department}</span>
                                                            <span>•</span>
                                                            <span>{position.type}</span>
                                                            <span>•</span>
                                                            <span>{position.location}</span>
                                                        </div>
                                                        <p className="theme-text-muted font-light">{position.description}</p>
                                                    </div>
                                                </div>
                                                <Link href="/contact">
                                                    <Button variant="outline" size="sm" className="whitespace-nowrap">
                                                        Apply Now
                                                    </Button>
                                                </Link>
                                            </div>
                                        </Card>
                                    );
                                })}
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Internship */}
                    <AnimatedSection direction="up" delay={0.3}>
                        <Card className="glass transition-colors group bg-gradient-to-r from-primary-900/20 to-secondary-900/20">
                            <h2 className="text-2xl font-bold theme-text tracking-tight mb-4">Online Internship Program</h2>
                            <p className="theme-text-muted font-light mb-6">
                                We offer online internships in software development for computer science graduates.
                                Gain practical experience and learn from industry experts.
                            </p>
                            <a href="https://intern2experts.crescenttechnosofts.com/courses/" target="_blank" rel="noopener noreferrer">
                                <Button variant="primary" size="lg">
                                    Register for Internship
                                </Button>
                            </a>
                        </Card>
                    </AnimatedSection>
                </Container>
            </div>
        </div>
    );
}
