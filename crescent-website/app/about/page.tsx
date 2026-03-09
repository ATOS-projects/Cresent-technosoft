import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FaLightbulb, FaUsers, FaAward, FaRocket } from "react-icons/fa";

export default function AboutPage() {
    return (
        <div className="min-h-screen theme-bg relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-mesh-dark opacity-100 z-0"></div>

            {/* Cinematic Glows */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[10%] right-[-5%] w-[40vw] h-[40vw] max-w-[800px] max-h-[800px] bg-primary-600/10 rounded-full blur-[100px] animate-float-slow"></div>
                <div className="absolute bottom-[20%] left-[-10%] w-[50vw] h-[50vw] max-w-[900px] max-h-[900px] bg-secondary-600/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGg0MHYxSDBWMHptMCAzOWg0MHYxSDB2LTF6TTAgMmgxdjM4SDBWMnptMzkgMGgxdjM4aC0xVjJ6IiBmaWxsPSJyZ2JhKDEyOCwxMjgsMTI4LDAuMDUpIi8+PC9zdmc+')] opacity-50 z-0 pointer-events-none"></div>

            <div className="pt-32 pb-24 relative z-10 min-h-screen">
                <Container>
                    {/* Header */}
                    <AnimatedSection direction="up">
                        <div className="text-center mb-20 mt-8 lg:mt-12">
                            <span className="text-primary-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Our Story</span>
                            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1]">
                                <span className="theme-text">About </span>
                                <span className="gradient-text-alt drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]">Crescent Technosofts</span>
                            </h1>
                            <p className="text-xl theme-text-muted max-w-3xl mx-auto font-light leading-relaxed">
                                Leading the way in providing innovative software solutions for healthcare, education, and business management since our inception.
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* Mission & Vision */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                        <AnimatedSection direction="left" delay={0.1}>
                            <Card className="h-full border-t-4 border-t-primary-500 backdrop-blur-md transition-colors p-8 md:p-10 group" style={{ backgroundColor: 'var(--bg-card)' }}>
                                <div className="w-16 h-16 shadow-inner rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-secondary)' }}>
                                    <FaLightbulb className="text-primary-400 text-3xl drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]" />
                                </div>
                                <h2 className="text-3xl font-bold theme-text mb-6 tracking-tight">Our Mission</h2>
                                <p className="theme-text-muted font-light leading-relaxed text-lg">
                                    To empower organizations with bleeding-edge software solutions that streamline operations, dramatically enhance productivity, and aggressively drive growth. We are fanatically committed to delivering excellence through continuous innovation and a relentlessly customer-centric approach.
                                </p>
                            </Card>
                        </AnimatedSection>

                        <AnimatedSection direction="right" delay={0.2}>
                            <Card className="h-full border-t-4 border-t-secondary-500 backdrop-blur-md transition-colors p-8 md:p-10 group" style={{ backgroundColor: 'var(--bg-card)' }}>
                                <div className="w-16 h-16 shadow-inner rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-secondary)' }}>
                                    <FaRocket className="text-secondary-400 text-3xl drop-shadow-[0_0_10px_rgba(176,38,255,0.8)]" />
                                </div>
                                <h2 className="text-3xl font-bold theme-text mb-6 tracking-tight">Our Vision</h2>
                                <p className="theme-text-muted font-light leading-relaxed text-lg">
                                    To be the industry&apos;s most trusted and profoundly innovative software solutions provider on a global scale, fundamentally transforming how businesses operate through strategic technology and creating unprecedented, lasting value for our elite clients and stakeholders.
                                </p>
                            </Card>
                        </AnimatedSection>
                    </div>

                    {/* Values */}
                    <AnimatedSection direction="up" delay={0.3}>
                        <div className="mb-24">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                                    <span className="theme-text">Our </span>
                                    <span className="gradient-text drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]">Core Values</span>
                                </h2>
                                <p className="theme-text-muted max-w-2xl mx-auto font-light text-lg">The foundational principles that guide every decision we make.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[
                                    { icon: FaAward, title: "Excellence", desc: "We strive for absolute excellence in everything we do, from elite product development to unparalleled customer service.", color: "primary" },
                                    { icon: FaUsers, title: "Customer First", desc: "Our visionary customers are at the heart of our operations. Their unprecedented success translates directly to our success.", color: "secondary" },
                                    { icon: FaLightbulb, title: "Innovation", desc: "We continuously push the boundaries of innovation to stay ahead of the curve and provide futuristic, cutting-edge solutions.", color: "neon-purple" }
                                ].map((item, i) => (
                                    <Card key={i} className="text-center p-8 glass group transition-all duration-500 hover:-translate-y-2">
                                        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-secondary)' }}>
                                            <item.icon className={`text-4xl ${item.color === 'primary' ? 'text-primary-400 drop-shadow-[0_0_15px_rgba(0,240,255,0.8)]' : item.color === 'secondary' ? 'text-secondary-400 drop-shadow-[0_0_15px_rgba(139,92,246,0.8)]' : 'text-fuchsia-400 drop-shadow-[0_0_15px_rgba(217,70,239,0.8)]'}`} />
                                        </div>
                                        <h3 className="text-2xl font-bold theme-text mb-4 tracking-tight">{item.title}</h3>
                                        <p className="theme-text-muted font-light leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* CTA */}
                    <AnimatedSection direction="up" delay={0.4}>
                        <div className="relative glass-strong rounded-[2.5rem] p-12 md:p-20 text-center overflow-hidden border border-primary-500/20 shadow-2xl">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-primary-500/10 to-secondary-500/10 blur-[80px] pointer-events-none"></div>

                            <div className="relative z-10">
                                <h2 className="text-4xl md:text-5xl font-black mb-6 theme-text tracking-tight">
                                    Ready to <span className="gradient-text">Transform</span> Your Business?
                                </h2>
                                <p className="text-xl theme-text-muted mb-10 max-w-2xl mx-auto font-light">
                                    Get in touch with our elite team of architects to discuss how we can engineer a custom solution for your organization&apos;s unique challenges.
                                </p>
                                <Link href="/contact" className="inline-block">
                                    <Button variant="neon" size="lg" className="px-10 py-5 text-xl font-bold rounded-2xl tracking-wide shadow-[0_0_30px_rgba(0,240,255,0.3)]">
                                        Contact Us Today
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </AnimatedSection>
                </Container>
            </div>
        </div>
    );
}
