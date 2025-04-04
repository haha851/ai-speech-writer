import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 text-gray-900 font-sans">
      <Head>
        <title>AI Speech Writer</title>
        <meta name="description" content="Craft powerful speeches in seconds" />
      </Head>

      <header className="text-center py-12 px-4 bg-white shadow">
        <h1 className="text-5xl font-bold text-gray-800">AI Speech Writer</h1>
        <p className="text-lg mt-4 max-w-xl mx-auto text-gray-600">
          Craft powerful speeches in seconds. Just tell us the occasion, tone, and delivery method — we’ll handle the rest.
        </p>
      </header>

      <main className="px-6 py-12 max-w-4xl mx-auto">
        <section className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-4">What You Get</h2>
          <ul className="space-y-3 text-gray-700">
            <li>✨ Custom speeches tailored to your tone</li>
            <li>🗣️ Delivery tips included</li>
            <li>⚡ Quick turnaround – 24 hours or less</li>
            <li>📄 Draft preview before final version</li>
            <li>🧠 Emotional impact built-in</li>
          </ul>
        </section>

        <section className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Get Started</h2>
          {!submitted ? (
            <form
              action="https://formspree.io/f/mgegjzyv"
              method="POST"
              onSubmit={() => setSubmitted(true)}
              className="space-y-4"
            >
              <input name="name" className="w-full p-3 border rounded" placeholder="Your Name" required />
              <input name="email" type="email" className="w-full p-3 border rounded" placeholder="Email" required />
              <input name="occasion" className="w-full p-3 border rounded" placeholder="Occasion (e.g., Wedding Toast)" required />
              <select name="tone" className="w-full p-3 border rounded" required>
                <option value="">Preferred Tone</option>
                <option>Formal</option>
                <option>Casual</option>
                <option>Funny</option>
                <option>Inspiring</option>
              </select>
              <select name="delivery" className="w-full p-3 border rounded">
                <option value="">Delivery Method</option>
                <option>Read from paper</option>
                <option>Memorized</option>
                <option>Teleprompter</option>
              </select>
              <textarea name="details" className="w-full p-3 border rounded" placeholder="Anything else we should know?" rows="4"></textarea>
              <button className="w-full bg-black text-white p-3 rounded" type="submit">Submit</button>
            </form>
          ) : (
            <p className="text-center text-green-600 text-lg font-semibold">Thank you! We'll be in touch soon.</p>
          )}
          <div className="mt-8 text-center">
            <a
              href="https://www.checkya.com/openlegacygroup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded shadow"
            >
              💳 Pay with CheckYa
            </a>
          </div>
        </section>

        <section className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-6 text-gray-600 text-2xl">
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="LinkedIn">💼</a>
            <a href="#" aria-label="TikTok">🎵</a>
          </div>
        </section>
      </main>

      <footer className="text-center py-6 text-sm text-gray-500 mt-20">
        &copy; 2025 AI Speech Writer. Powered by <a href="https://arthuriverson.xyz" className="underline">arthuriverson.xyz</a>
      </footer>
    </div>
  );
}
