
import Head from 'next/head';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const speechStyles = [
    { title: 'Wedding Toast', icon: '💍' },
    { title: 'Motivational', icon: '🔥' },
    { title: 'Funny Roast', icon: '😂' },
    { title: 'Graduation', icon: '🎓' },
    { title: 'Farewell', icon: '✌️' },
    { title: 'Birthday Speech', icon: '🎉' }
  ];

  return (
    <div className="font-sans text-gray-900 bg-gradient-to-br from-yellow-50 to-pink-100 min-h-screen">
      <Head>
        <title>AI Speech Writer</title>
        <meta name="description" content="Craft powerful speeches with AI — personalized, fast, and memorable." />
      </Head>

      <header className="flex justify-between items-center px-6 py-4 shadow-lg bg-white sticky top-0 z-50">
        <h1 className="text-3xl font-bold text-pink-600 tracking-tight">AI Speech</h1>
        <nav className="space-x-6 text-sm font-semibold text-gray-700">
          <a href="#features" className="hover:text-pink-500 transition">Features</a>
          <a href="#pricing" className="hover:text-pink-500 transition">Pricing</a>
          <a href="#samples" className="hover:text-pink-500 transition">Samples</a>
          <a href="#contact" className="hover:text-pink-500 transition">Contact</a>
        </nav>
      </header>

      <main className="text-center px-4 py-20">
        <h2 data-aos="fade-up" className="text-6xl font-extrabold leading-tight max-w-4xl mx-auto text-pink-600 drop-shadow">
          Speeches that Spark Joy
        </h2>
        <p data-aos="fade-up" data-aos-delay="200" className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg">
          Whether it’s a wedding, roast, graduation, or TED Talk — our AI delivers a powerful, custom-crafted speech in seconds.
        </p>
        <a
          href="#pricing"
          className="mt-10 inline-block px-8 py-4 bg-pink-600 text-white rounded-full shadow-lg hover:scale-105 hover:bg-pink-700 transition-transform"
        >
          Get Started
        </a>

        <section id="features" className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
          {[
            ['Personalized', 'Tell us the tone, style, and purpose — we do the rest.'],
            ['Fast Delivery', 'Get a draft in minutes, not hours.'],
            ['Real Talk', 'No robotic tone. Just real, relatable content.']
          ].map(([title, desc], i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <h3 className="text-xl font-bold text-pink-600 mb-2">{title}</h3>
              <p className="text-gray-700">{desc}</p>
            </div>
          ))}
        </section>

        <section id="pricing" className="mt-24 px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-pink-600">Pricing</h2>
          <p className="text-lg text-gray-700 mb-4">Regular price: <span className="line-through">$90/min</span></p>
          <p className="text-2xl font-extrabold text-pink-700 mb-6">Now only $15/min!</p>
          <a
            href="https://checkya.com/openlegacygroup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-pink-700 transition-transform transform hover:scale-105"
          >
            Purchase Speech
          </a>
        </section>

        <section id="samples" className="mt-24 px-6 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-pink-600" data-aos="fade-up">Speech Styles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {speechStyles.map(({ title, icon }, i) => (
              <div
                key={i}
                className="rounded-xl bg-pink-100 p-6 shadow hover:scale-105 transition"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <div className="text-4xl mb-3">{icon}</div>
                <h4 className="text-xl font-semibold text-pink-700 mb-2">{title}</h4>
                <p className="text-sm text-gray-700">Preview a sample of what our AI can craft for this style.</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-24 px-6 max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-pink-600 text-center" data-aos="fade-up">Let's Chat</h2>
          <form
            action="https://formspree.io/f/mgegjzyv"
            method="POST"
            className="bg-white p-6 rounded-2xl shadow-lg space-y-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <input name="name" type="text" required className="w-full p-3 border border-gray-300 rounded" placeholder="Your Name" />
            <input name="email" type="email" required className="w-full p-3 border border-gray-300 rounded" placeholder="Email Address" />
            <textarea name="message" required className="w-full p-3 border border-gray-300 rounded" placeholder="Your Message" rows="4"></textarea>
            <button type="submit" className="w-full bg-pink-600 text-white py-3 rounded-full hover:bg-pink-700 transition">Send</button>
          </form>
        </section>
      </main>

      <footer className="text-center text-sm text-gray-500 py-10">
        <p>Contact us at: <a href="mailto:hi@arthuriverson.xyz" className="text-pink-600 hover:underline">hi@arthuriverson.xyz</a></p>
        <p>© {new Date().getFullYear()} AI Speech Writer — Built with love.</p>
      </footer>
    </div>
  );
}
