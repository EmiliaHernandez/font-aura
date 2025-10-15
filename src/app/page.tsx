"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../app/FontAura-Logo.webp";
import {
  RegExpMatcher,
  TextCensor,
  englishDataset,
  englishRecommendedTransformers,
} from "obscenity";

export default function Home() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [fontData, setFontData] = useState<{ font: string; file: string }>({
    font: "Arbutus",
    file: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const matcher = new RegExpMatcher({
    ...englishDataset.build(),
    ...englishRecommendedTransformers,
  });
  const censor = new TextCensor();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Please enter a name.");
      return;
    }

    if (matcher.hasMatch(name)) {
      setError("Inappropriate content detected. Please enter a different name.");
      return;
    }

    try {
      setLoading(true);

      // 🔹 Don’t clear fontData here — keeps old display until new data arrives
      const res = await fetch(`/api/match?name=${encodeURIComponent(name)}`);
      const data = await res.json();

      if (data.error) {
        setError(data.error);
      } else {
        setFontData({ font: data.font, file: data.file });
        setSubmittedName(name);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // If no submission yet, show default “Font Aura is Arbutus”
  const displayName = submittedName || "Font Aura";
  const displayFont = fontData?.font || "Arbutus";

  return (
    <div className="min-h-screen bg-[#030014] relative overflow-hidden text-slate-50 font-[Eczar]">
            {/* Background letters (your decorative elements) */}
      <div className="absolute left-[-3%] top-[38%] text-[#ffffff12] text-[150px] md:text-[200px] lg:text-[300px] font-[Alkalami] pointer-events-none select-none">
        T
      </div>
      <div className="absolute left-[8%] top-[16%] text-[#ffffff12] text-[100px] md:text-[120px] lg:text-[150px] font-[Big Shoulders Display] pointer-events-none select-none">
        o
      </div>
      <div className="absolute left-[18%] bottom-[8%] text-[#ffffff12] text-[80px] md:text-[100px] lg:text-[120px] font-[Bungee] pointer-events-none select-none">
        r
      </div>
      <div className="absolute right-[44%] top-[-15%] text-[#ffffff12] text-[100px] md:text-[120px] lg:text-[150px] font-[Biorhyme] pointer-events-none select-none">
        u
      </div>
      <div className="absolute right-[-5%] top-[-30%] text-[#ffffff12] text-[150px] md:text-[200px] lg:text-[300px] font-[Allura] pointer-events-none select-none">
        A
      </div>
      <div className="absolute right-[-1%] top-[20%] text-[#ffffff12] text-[120px] md:text-[150px] lg:text-[170px] font-[Almendra] pointer-events-none select-none">
        n
      </div>
      <div className="absolute right-[12%] bottom-[5%] text-[#ffffff12] text-[120px] md:text-[150px] lg:text-[200px] font-[Bokor] pointer-events-none select-none">
        F
      </div>
      <div className="flex flex-col min-h-screen text-slate-50 px-6 overflow-clip">
        <header className="absolute top-0 z-10">
          <div className="py-3">
            <Image src={logo} width={190} height={80} alt="FontAura Logo" />
          </div>
        </header>

        <main className="flex-1 flex flex-col items-center justify-center px-6 md:px-12 lg:px-[50px]">
          <div className="w-full max-w-[900px] flex flex-col items-center gap-7 md:gap-8">
            <h1 className="text-center text-2xl md:text-3xl lg:text-[48px] lg:leading-[72px]">
              Type in your name and get the{" "}
              <span className="text-[#2D9CFF] font-[Bokor]">font</span>{" "}
              that matches your{" "}
              <span className="text-[#2D9CFF] font-[Bokor]">aura</span>
            </h1>

            <form onSubmit={handleSubmit} className="w-full text-center">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Type your name here..."
                className="border border-[#2D9CFF] rounded-4xl px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-700 w-[70%] mr-4 bg-transparent text-white"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-[#2D9CFF] text-white px-5 py-2 rounded-4xl hover:bg-[#F4BB0E] hover:text-black transition disabled:opacity-60"
              >
                {loading ? "Matching..." : "Show me the font!"}
              </button>
            </form>

            {error && <p className="text-red-600 mb-6">{error}</p>}
          </div>

          <div className="text-center mt-6">
            {fontData && (
              <link
                href={`https://fonts.googleapis.com/css2?family=${fontData.font.replace(
                  / /g,
                  "+"
                )}&display=swap`}
                rel="stylesheet"
              />
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={displayFont + displayName}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <p
                  className="text-4xl md:text-5xl mb-4 transition-all"
                  style={{ fontFamily: displayFont }}
                >
                  {displayName}
                </p>
                <p>
                  is{" "}
                  <span className="text-3xl" style={{ fontFamily: displayFont }}>
                    {displayFont}
                  </span>
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </main>

        <hr className="border-slate-100" />

        <footer className="mt-auto py-4">
          <h1 className="text-sm">Developed by Emilia Hernandez</h1>
        </footer>
      </div>
    </div>
  );
}
