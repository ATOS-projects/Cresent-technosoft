import { HeroSection } from "@/components/home/HeroSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { TestimonialsCarousel } from "@/components/home/TestimonialsCarousel";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { FaBriefcase, FaHandshake, FaPhone } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Decorative divider */}
      <div className="w-full h-px" style={{ background: 'linear-gradient(to right, var(--bg-primary), var(--hover-border), var(--bg-primary))' }}></div>

      <ServicesGrid />

      <div className="w-full h-px" style={{ background: 'linear-gradient(to right, var(--bg-primary), var(--hover-border), var(--bg-primary))' }}></div>

      <TestimonialsCarousel />

      <div className="w-full h-px" style={{ background: 'linear-gradient(to right, var(--bg-primary), var(--hover-border), var(--bg-primary))' }}></div>

      {/* Careers Section */}
      <section className="py-32 relative theme-bg overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[100px] pointer-events-none"></div>

        <Container className="relative z-10">
          <AnimatedSection direction="up">
            <div className="text-center mb-16">
              <span className="text-secondary-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Careers</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
                <span className="theme-text">Join Our </span>
                <span className="gradient-text-alt drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]">Mission</span>
              </h2>
              <p className="text-xl theme-text-muted max-w-2xl mx-auto font-light">
                We&apos;re always looking for talented, driven individuals to join our growing team of innovators.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: 'Marketing', desc: 'Join our marketing team and help us reach more clients globally.', color: 'from-primary-500 to-primary-600', shadow: 'hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]' },
              { title: 'Engineering', desc: 'Build innovative, high-performance solutions with cutting-edge tech.', color: 'from-neon-purple to-secondary-600', shadow: 'hover:shadow-[0_0_30px_rgba(176,38,255,0.15)]' },
              { title: 'Operations', desc: 'Help us scale our impact and build an incredible company culture.', color: 'from-primary-400 to-secondary-500', shadow: 'hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]' }
            ].map((dept, i) => (
              <AnimatedSection key={i} direction="up" delay={0.1 * (i + 1)}>
                <div className={`glass-strong rounded-2xl p-8 text-center hover-lift transition-all group ${dept.shadow}`} style={{ border: '1px solid var(--border-primary)' }}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${dept.color} rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-12 transition-transform duration-500 shadow-lg`}>
                    <FaBriefcase className="text-white text-2xl drop-shadow-md" />
                  </div>
                  <h3 className="text-2xl font-bold theme-text mb-3 tracking-tight">{dept.title}</h3>
                  <p className="theme-text-muted text-sm mb-8 leading-relaxed">
                    {dept.desc}
                  </p>
                  <Link href="/careers">
                    <Button variant="outline" size="sm" className="w-full">View Positions</Button>
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative theme-bg overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGg0MHYxSDBWMHptMCAzOWg0MHYxSDB2LTF6TTAgMmgxdjM4SDBWMnptMzkgMGgxdjM4aC0xVjJ6IiBmaWxsPSJyZ2JhKDEyOCwxMjgsMTI4LDAuMDUpIi8+PC9zdmc+')] opacity-50 z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-[400px] bg-gradient-to-r from-primary-600/20 to-secondary-600/20 blur-[100px] rounded-full pointer-events-none"></div>

        <Container className="relative z-10">
          <AnimatedSection direction="up">
            <div className="glass shadow-2xl rounded-3xl p-12 md:p-20 text-center border border-primary-500/20 relative overflow-hidden group">
              {/* Animated scanning line in CTA */}
              <div className="absolute top-0 bottom-0 left-[-100%] w-[200%] bg-gradient-to-r from-transparent via-white/5 to-transparent transform group-hover:translate-x-[50%] transition-transform duration-[2s] ease-in-out"></div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 theme-text tracking-tight">
                Ready to <span className="gradient-text drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">Transform</span> Your Business?
              </h2>
              <p className="text-xl theme-text-secondary mb-10 max-w-2xl mx-auto font-light">
                Join hundreds of successful companies. Get in touch with us today for a free consultation and personalized demo.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/demo" className="w-full sm:w-auto">
                  <Button variant="neon" size="lg" icon={<FaHandshake />} className="w-full text-lg py-4 px-8">
                    Request Demo
                  </Button>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button variant="ghost" size="lg" icon={<FaPhone />} className="w-full text-lg py-4 px-8 border border-transparent hover:border-primary-500/30">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
