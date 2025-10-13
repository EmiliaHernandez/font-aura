import axios from "axios";

const GOOGLE_FONTS_API = "https://www.googleapis.com/webfonts/v1/webfonts";
const API_KEY = process.env.GOOGLE_FONTS_API_KEY;

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name");

    if (!name) {
      return Response.json({ error: "Name is required" }, { status: 400 });
    }

    const response = await axios.get(`${GOOGLE_FONTS_API}?key=${API_KEY}`);
    const fonts = response.data.items;
    const fontCount = fonts.length;

    const sum = [...name.toLowerCase()]
      .map(char => char.charCodeAt(0) - 96)
      .filter(n => n > 0 && n < 27)
      .reduce((a, b) => a + b, 0);

    const fontIndex = sum % fontCount;
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
