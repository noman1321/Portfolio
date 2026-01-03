// Initialize animations when DOM is ready
export function initAnimations() {
  if (typeof window === "undefined") return;

  // Dynamically import GSAP to avoid SSR issues
  import("gsap")
    .then(({ gsap }) => {
      return import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        // Hero section animations
        const heroGreeting = document.querySelector(".hero-greeting");
        const heroName = document.querySelector(".hero-name");
        const heroTitle = document.querySelector(".hero-title");
        const heroSocial = document.querySelector(".hero-social");

        if (heroGreeting && heroName && heroTitle && heroSocial) {
          // Set initial state and animate
          gsap.from([heroGreeting, heroName, heroTitle, heroSocial], {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
          });
        }

        // Section title animations
        gsap.utils.toArray<HTMLElement>(".section-title").forEach((title) => {
          gsap.fromTo(
            title,
            { opacity: 0, x: -50 },
            {
              scrollTrigger: {
                trigger: title,
                start: "top 80%",
                toggleActions: "play none none none",
              },
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power3.out",
            }
          );
        });

        // Section underline animations
        gsap.utils.toArray<HTMLElement>(".section-underline").forEach((underline) => {
          const originalWidth = (underline as HTMLElement).offsetWidth;
          gsap.fromTo(
            underline,
            { width: 0 },
            {
              scrollTrigger: {
                trigger: underline,
                start: "top 80%",
                toggleActions: "play none none none",
              },
              width: originalWidth,
              duration: 0.8,
              ease: "power2.out",
            }
          );
        });

        // About section content
        const aboutContent = document.querySelector(".about-content");
        if (aboutContent) {
          gsap.fromTo(
            aboutContent,
            { opacity: 0, y: 40 },
            {
              scrollTrigger: {
                trigger: aboutContent,
                start: "top 75%",
                toggleActions: "play none none none",
              },
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
            }
          );
        }

      // Skills marquee fade in on scroll
      const skillsMarquee = document.querySelector(".skills-marquee-container");
      if (skillsMarquee) {
        gsap.fromTo(
          skillsMarquee,
          { opacity: 0, y: 20 },
          {
            scrollTrigger: {
              trigger: skillsMarquee as HTMLElement,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          }
        );
      }

        // Projects stagger animation
        const projects = document.querySelectorAll(".project-card");
        if (projects.length > 0) {
          gsap.fromTo(
            projects,
            { opacity: 0, y: 60 },
            {
              scrollTrigger: {
                trigger: projects[0] as HTMLElement,
                start: "top 75%",
                toggleActions: "play none none none",
              },
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: "power3.out",
            }
          );
        }

        // Experience cards stagger animation
        const experienceCards = document.querySelectorAll(".experience-card");
        if (experienceCards.length > 0) {
          gsap.fromTo(
            experienceCards,
            { opacity: 0, x: -40 },
            {
              scrollTrigger: {
                trigger: experienceCards[0] as HTMLElement,
                start: "top 75%",
                toggleActions: "play none none none",
              },
              opacity: 1,
              x: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: "power3.out",
            }
          );
        }

        // Education cards animation
        const educationCards = document.querySelectorAll(".education-card");
        if (educationCards.length > 0) {
          gsap.fromTo(
            educationCards,
            { opacity: 0, y: 40 },
            {
              scrollTrigger: {
                trigger: educationCards[0] as HTMLElement,
                start: "top 75%",
                toggleActions: "play none none none",
              },
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: "power3.out",
            }
          );
        }
      });
    })
    .catch((error) => {
      console.warn("GSAP failed to load, animations disabled:", error);
    });
}
