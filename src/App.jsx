import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";
import Faq from "./assets/components/faq";
import Hero from "./assets/components/hero";
import Navbar from "./assets/components/navbar";
import Section2 from "./assets/components/marquee-pricing";
import Section3 from "./assets/components/section3-4";
import Footer from "./assets/components/footer";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const appRef = useRef(null);

  useLayoutEffect(() => {
    const motion = gsap.matchMedia(appRef);

    motion.add("(prefers-reduced-motion: no-preference)", () => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

      intro
        .from(".hero-kicker", { opacity: 0, y: 14, duration: 0.45 })
        .from(".hero-title", { opacity: 0, y: 34, duration: 0.7 }, "-=0.2")
        .from(
          ".hero-description, .hero-buttons, .hero-proof",
          { opacity: 0, y: 16, duration: 0.5, stagger: 0.1 },
          "-=0.35",
        )
        .from(
          ".hero-graphic",
          { opacity: 0, x: 36, scale: 0.96, duration: 0.8 },
          "-=0.6",
        )
        .from(
          ".terminal-lights i",
          { scale: 0, stagger: 0.08, duration: 0.25, ease: "back.out(2)" },
          "-=0.35",
        );

      gsap.from(".cs-ticker-tag, .cs-badge-item", {
        opacity: 0,
        y: 12,
        stagger: 0.07,
        duration: 0.45,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".cs-marquee-section",
          start: "top 88%",
        },
      });

      const revealGroups = [
        ["#features", ".cs-section-header > *, .cs-card"],
        ["#stories", ".section-intro > *, .testimonial-card"],
        ["#pricing", ".pricing-header-wrap > *, .pricing-plan-card"],
        ["#faq", ".faq-heading > *, .faq-item"],
        [
          "#contact",
          ".footer-index-row > *, .footer-main-copy > *, .footer-newsletter-col > *, .footer-details > *, .footer-bottom > *",
        ],
      ];

      revealGroups.forEach(([sectionSelector, itemSelector]) => {
        const section = appRef.current.querySelector(sectionSelector);
        if (!section) return;

        gsap.from(section.querySelectorAll(itemSelector), {
          opacity: 0,
          y: 26,
          duration: 0.65,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
          },
        });
      });

      gsap.to(".hero-grid-overlay", {
        yPercent: -35,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 0.7,
        },
      });
    });

    return () => motion.revert();
  }, []);

  return (
    <div className="app-shell" ref={appRef}>
      <Navbar />
      <main>
        <Hero />
        <Section2 />
        <Section3 />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default App;
