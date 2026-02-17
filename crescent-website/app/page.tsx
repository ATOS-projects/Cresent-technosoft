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
      <ServicesGrid />
      <TestimonialsCarousel />

      {/* Careers Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-primary-900/10">
        <Container>
          <AnimatedSection direction="up">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Join Our Team</span>
              </h2>
              <p className="text-xl text-slate-700 max-w-2xl mx-auto">
                We're always looking for talented individuals to join our growing team
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <AnimatedSection direction="up" delay={0.1}>
              <div className="glass-strong rounded-xl p-6 text-center hover-lift">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaBriefcase className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Marketing</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Join our marketing team and help us reach more clients
                </p>
                <Link href="/careers">
                  <Button variant="outline" size="sm">View Positions</Button>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <div className="glass-strong rounded-xl p-6 text-center hover-lift">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaBriefcase className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Developers</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Build innovative solutions with cutting-edge technology
                </p>
                <Link href="/careers">
                  <Button variant="outline" size="sm">View Positions</Button>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <div className="glass-strong rounded-xl p-6 text-center hover-lift">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaBriefcase className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">HR Department</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Help us build a great team and company culture
                </p>
                <Link href="/careers">
                  <Button variant="outline" size="sm">View Positions</Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <Container>
          <AnimatedSection direction="up">
            <div className="glass-strong rounded-2xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
                Get in touch with us today for a free consultation and demo
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/demo">
                  <Button variant="primary" size="lg" icon={<FaHandshake />}>
                    Request Demo
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" icon={<FaPhone />}>
                    Contact Us
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
