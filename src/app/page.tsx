"use client";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [fontData, setFontData] = useState<{ font: string; file: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setFontData(null);

    if (!name.trim()) {
      setError("Please enter a name.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`/api/match?name=${encodeURIComponent(name)}`);
      const data = await res.json();

      if (data.error) {
        setError(data.error);
      } else {
        setFontData({ font: data.font, file: data.file });
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-left min-h-screen bg-[#028dff] to-white px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-zip-blue mb-6">
        Type in your name and get the font that matches your aura
      </h1>
      <form onSubmit={handleSubmit} className="flex gap-3 flex-wrap justify-center mb-8">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type your name here..."
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-zip-blue"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-zip-blue text-white font-semibold px-5 py-2 rounded-lg hover:bg-zip-blue/90 transition disabled:opacity-60"
        >
          {loading ? "Matching..." : "Find My Font"}
        </button>
      </form>

      {error && <p className="text-red-600 mb-6">{error}</p>}

      {fontData && (
        <div className="text-center mt-6">
          <link
            href={`https://fonts.googleapis.com/css2?family=${fontData.font.replace(
              / /g,
              "+"
            )}&display=swap`}
            rel="stylesheet"
          />
          <p
            className="text-4xl md:text-5xl mb-4 transition-all"
            style={{ fontFamily: fontData.font }}
          >
            {name}
          </p>
          <p className="text-gray-600">
            Your font is:{" "}
            <span className="font-semibold text-zip-blue">{fontData.font}</span>
          </p>
        </div>
      )}
    </main>
  );
}
