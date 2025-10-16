import axios from "axios";

const GOOGLE_FONTS_API = "https://www.googleapis.com/webfonts/v1/webfonts";
const API_KEY = process.env.GOOGLE_FONTS_API_KEY;

const hashMix = (n) => {
  n = (n ^ (n >>> 16)) >>> 0;
  n = Math.imul(n, 0x85ebca6b) >>> 0;
  n = (n ^ (n >>> 13)) >>> 0;
  n = Math.imul(n, 0xc2b2ae35) >>> 0;
  n = (n ^ (n >>> 16)) >>> 0;
  return n >>> 0;
};

export async function POST(request) {
  try {
    const { name } = await request.json();

    if (!name) {
      return Response.json({ error: "Name is required" }, { status: 400 });
    }

    // Normalize: remove accents, diacritics, and make lowercase
    const normalizedName = name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

    const response = await axios.get(`${GOOGLE_FONTS_API}?key=${API_KEY}`);
    const fonts = response.data.items;
    const fontCount = fonts.length;

    const sum = [...normalizedName]
      .map((char) => char.charCodeAt(0))
      .reduce((a, b) => a + b, 0);

    let fontIndex = hashMix(sum) % (fontCount * 4);
    while (fontIndex >= fontCount) fontIndex = Math.floor(fontIndex / 4);

    const matchedFont = fonts[fontIndex];

    return Response.json({
      name,
      font: matchedFont.family,
      category: matchedFont.category,
      file:
        matchedFont.files.regular ||
        matchedFont.files[Object.keys(matchedFont.files)[0]],
    });
  } catch (error) {
    console.error("Error matching font:", error.message);
    return Response.json({ error: "Failed to match font" }, { status: 500 });
  }
}
