import axios from "axios";

const GOOGLE_FONTS_API = "https://www.googleapis.com/webfonts/v1/webfonts";
const API_KEY = process.env.GOOGLE_FONTS_API_KEY;

export async function GET(request) {
  try {
    const response = await axios.get(`${GOOGLE_FONTS_API}?key=${API_KEY}`);
    const fonts = response.data.items;

    const fontsWithIds = fonts.map((font, index) => ({
      id: index + 1,
      name: font.family,
      category: font.category,
      variants: font.variants,
      files: font.files,
    }));

    return Response.json({ fonts: fontsWithIds });
  } catch (error) {
    console.error("Error fetching fonts:", error.message);
    return Response.json({ error: "Failed to fetch fonts" }, { status: 500 });
  }
}
