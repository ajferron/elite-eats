"use client";

import { useRef, type FormEvent } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function ContactForm() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useGSAP(
    () => {
      // Stagger form fields
      gsap.from(".contact-field", {
        y: 24,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Fade in image
      gsap.from(".contact-image", {
        opacity: 0,
        scale: 0.97,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: sectionRef }
  );

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    console.log("Contact form submitted:", data);
  }

  return (
    <section ref={sectionRef} className="py-12 lg:py-16">
      <div className="container-section">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-stretch">
          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
            noValidate
          >
            <div className="contact-field">
              <label htmlFor="firstName" className="sr-only">
                First Name
              </label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name"
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="lastName" className="sr-only">
                Last Name
              </label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last Name"
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Message"
                rows={6}
                required
              />
            </div>

            <div className="contact-field">
              <Button type="submit">Send</Button>
            </div>
          </form>

          {/* Image */}
          <div className="contact-image relative overflow-hidden rounded-xl">
            <Image
              src="/images/contact-us/contact-us.jpg"
              alt="Football players' hands reaching together for a football during a game"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
