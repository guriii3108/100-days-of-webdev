import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Contact = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".contact-hero", { y: 50, opacity: 0, duration: 0.8, delay: 1 });
    tl.from(".contact-card", { scale: 0.98, opacity: 0, duration: 0.8 }, "-=0.3");
    tl.from(".contact-field", { y: 20, opacity: 0, stagger: { amount: 0.4 }, duration: 0.6 }, "-=0.3");
  });

  return (
    <div className="text-white lg:p-6 p-3">
      <div className="contact-hero lg:pt-[25vh] pt-[20vh]">
        <h1 className="font-[font1] lg:text-[9vw] text-[12vw] lg:leading-[8vw] leading-[10vw] uppercase">Contact</h1>
        <p className="font-[font1] lg:text-[1.2vw] text-[3.5vw] max-w-3xl mt-3 opacity-80">
          We’d love to hear from you. Send us a message and we’ll get back to you.
        </p>
      </div>

      <div className="contact-card mt-10 grid lg:grid-cols-2 grid-cols-1 gap-6">
        <div className="bg-black/60 border border-white/20 rounded-xl p-6">
          <h2 className="font-[font2] lg:text-[3vw] text-[6vw] uppercase mb-4">Reach us</h2>
          <div className="space-y-3 font-[font1]">
            <p>
              Email: <a className="font-[font2] lg:text-[2vw] text-[4vw] underline text-green-400" href="mailto:sgurveer97@gmail.com">sgurveer97@gmail.com</a>
            </p>

            <p>
              Twitter: <a className="font-[font2] lg:text-[2vw] text-[4vw] underline text-green-400" href="https://x.com/guriii3108" target="_blank" rel="noreferrer">@guriii3108</a>
            </p>
          </div>
        </div>

        <div className="bg-black/60 border border-white/20 rounded-xl p-6">
          <h2 className="font-[font2] lg:text-[3vw] text-[6vw] uppercase mb-4">Send a message</h2>
          <form className="space-y-4">
            <div className="contact-field">
              <label className="block font-[font1] mb-1">Name</label>
              <input type="text" placeholder="Your name" className="w-full bg-transparent border border-white/30 rounded-md p-3 outline-none focus:border-green-500" />
            </div>
            <div className="contact-field">
              <label className="block font-[font1] mb-1">Email</label>
              <input type="email" placeholder="you@example.com" className="w-full bg-transparent border border-white/30 rounded-md p-3 outline-none focus:border-green-500" />
            </div>
            <div className="contact-field">
              <label className="block font-[font1] mb-1">Message</label>
              <textarea placeholder="Write your message..." rows={5} className="w-full bg-transparent border border-white/30 rounded-md p-3 outline-none focus:border-green-500" />
            </div>
            <button type="button" className="font-[font2] uppercase hover:border-green-500 hover:text-green-500 lg:text-[3vw] text-[6vw] leading-[5vw] lg:border-3 border-2 border-white rounded-full lg:px-6 px-3 lg:pt-4 pt-2 transition-colors">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;