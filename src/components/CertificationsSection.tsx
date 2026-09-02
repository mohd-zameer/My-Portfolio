import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Award } from 'lucide-react';
import FadeIn from './FadeIn';

interface Certificate {
  id: number;
  title: string;
  description: string;
}

// TODO: Upload your actual certificate images to /public/certifications and
// swap the icon-based cards below for image cards (see CertificationsSection
// git history / ask Claude) if you'd like scanned certificates shown instead.
const CERTIFICATES: Certificate[] = [
  {
    id: 1,
    title: 'Internet of Things (NPTEL Elite)',
    description: 'Offered by IIT Bombay.',
  },
  {
    id: 2,
    title: 'Privacy and Security in Online Social Media (NPTEL Elite)',
    description: 'Offered by IIT Hyderabad.',
  },
  {
    id: 3,
    title: 'Environmental Planning and Management (NPTEL Elite)',
    description: 'Offered by IIT Roorkee.',
  },
  {
    id: 4,
    title: 'Python for Data Science, AI & Development',
    description: 'Authorized by IBM, offered through Coursera.',
  },
  {
    id: 5,
    title: 'Exploratory Data Analysis for Machine Learning',
    description: 'Authorized by IBM, offered through Coursera.',
  },
  {
    id: 6,
    title: 'Foundations of Cybersecurity',
    description: 'Authorized by Meta, offered through Coursera.',
  },
  {
    id: 7,
    title: 'Introduction to Android Mobile Application',
    description: 'Authorized by Meta, offered through Coursera.',
  },
];

const CertificationsSection = () => {
  const targetRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 25, stiffness: 80, mass: 0.5 });

  // Dynamically calculate exact scroll width via callback to prevent interpolation jumping
  const x = useTransform(smoothProgress, (p) => `calc(-${p * 100}% + ${p * 100}vw)`);

  return (
    <section id="certifications" ref={targetRef} className="relative w-full bg-black h-[600vh]">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background Glows (Removed for Performance) */}

        <div className="relative z-10 w-full flex flex-col">
          <FadeIn y={20}>
            <div className="mb-10 md:mb-16 flex flex-col items-center text-center">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
                Certifications
              </h2>
              <div className="mt-4 h-px w-20 bg-white/30 rounded-full" />
              <p className="mt-6 max-w-2xl text-sm md:text-base text-white/60">
                Verified credentials and professional achievements.
              </p>
            </div>
          </FadeIn>

          <motion.div style={{ x }} className="flex gap-6 sm:gap-8 px-4 sm:px-10 md:px-20 w-max pr-10 md:pr-32 will-change-transform">
            {CERTIFICATES.map((cert, idx) => (
              <FadeIn key={cert.id} delay={idx * 0.1} y={30}>
                <div className="group relative flex flex-col shrink-0 h-auto w-[280px] sm:w-[340px] md:w-[380px] overflow-hidden rounded-[15px] border border-white/10 bg-[#111111] p-4 md:p-5 transition-all duration-500 hover:scale-[1.02] hover:z-50 hover:bg-white/10 hover:border-white/40">
                  <div className="relative h-40 sm:h-48 md:h-56 w-full flex items-center justify-center overflow-hidden rounded-lg bg-black/20 mb-4">
                    <Award className="h-16 w-16 text-white/40 transition-transform duration-500 group-hover:scale-110 group-hover:text-white/70" />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col gap-1.5 px-2">
                    <h3 className="text-white font-bold text-sm sm:text-base tracking-wide line-clamp-2" title={cert.title}>{cert.title}</h3>
                    <p className="text-white/50 text-xs sm:text-sm line-clamp-2" title={cert.description}>{cert.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </motion.div>

          {/* Scroll Progress Indicator */}
          <FadeIn delay={0.2} y={20}>
            <div className="w-full flex justify-center mt-12 px-10">
              <div className="h-1 w-48 sm:w-64 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-white rounded-full"
                  style={{ scaleX: smoothProgress, transformOrigin: "left" }}
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;






