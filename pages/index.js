
import Head from 'next/head';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [amounts, setAmounts] = useState({
    wedding: 15,
    motivation: 15,
    roast: 15,
  });

  const products = [
    {
      id: 'wedding',
      title: 'Wedding Toast',
      icon: '💍',
      description: 'Touching, funny, or both — you’ll sound like a pro.',
    },
    {
      id: 'motivation',
      title: 'Motivational Speech',
      icon: '🔥',
      description: 'Uplift your team, your friends, or yourself.',
    },
    {
      id: 'roast',
      title: 'Funny Roast',
      icon: '😂',
      description: 'Tear them down with love (and laugh together later).',
    }
  ];

  return (
    <div className="font-sans text-gray-900 bg-gradient-to-br from-yellow-50 to-pink-100 min-h-screen">
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-NHPOV7DMK4"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NHPOV7DMK4');
          `}
        </script>

        <title>AI Speech Writer</title>
        <meta name="description" content="Craft powerful speeches with AI — personalized, fast, and memorable." />
      </Head>

      <main className="px-6 py-20 text-center">
        <h1 className="text-5xl font-extrabold text-pink-600 mb-6">Pay What You Can</h1>
        <p className="max-w-xl mx-auto text-gray-700 mb-10">Suggested price: $15 — but you can choose anything between $5 and $25. We believe in accessibility and mutual support.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map(product => (
            <div key={product.id} className="bg-white p-6 rounded-3xl shadow-md space-y-4" data-aos="fade-up">
              <div className="text-4xl">{product.icon}</div>
              <h2 className="text-xl font-bold text-pink-600">{product.title}</h2>
              <p className="text-gray-700">{product.description}</p>
              <input
                type="range"
                min="5"
                max="25"
                value={amounts[product.id]}
                onChange={(e) => setAmounts({ ...amounts, [product.id]: parseInt(e.target.value) })}
                className="w-full"
              />
              <p className="text-sm text-gray-600">You're choosing to pay: <strong>${amounts[product.id]}</strong></p>
              <a
                href={`https://checkya.com/openlegacygroup?amount=${amounts[product.id]}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition"
              >
                Buy for ${amounts[product.id]}
              </a>
            </div>
          ))}
        </div>
      </main>

      <footer className="text-center text-sm text-gray-500 py-10 mt-20">
        <p>Contact us at: <a href="mailto:hi@your-subdomain.arthuriverson.xyz" className="text-pink-600 hover:underline">hi@your-subdomain.arthuriverson.xyz</a></p>
        <p>© {new Date().getFullYear()} AI Speech Writer — Built with love.</p>
      </footer>
    </div>
  );
}
