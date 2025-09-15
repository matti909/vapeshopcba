// Service to fetch data from Google Sheets CSV
const SHEETS_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTWFxhqTyWxoAjqOs4tB1olgDgXBwX4U_BlgN89OCR_4GoQZ8U0InHe_jqm1XqDi2YxNiclUQAGHEX2/pub?gid=0&single=true&output=csv";

export interface SheetProduct {
  id: string;
  marca: string;
  puff: string;
  sabor: string;
  imagen: string;
  categoria: string;
  precio: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: "disposable" | "rechargeable" | "essence" | "resistance";
  inStock: boolean;
  rating: number;
  reviews: number;
  features: string[];
  flavors?: string[];
  puffCount: number;
}

// Function to parse CSV text into array of objects
function parseCSV(csvText: string): SheetProduct[] {
  const lines = csvText.trim().split("\n");
  // Skip the header line and process data lines

  return lines.slice(1).map((line, index) => {
    // Handle CSV parsing with potential commas inside quoted fields
    const values = [];
    let currentValue = "";
    let insideQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];

      if (char === '"') {
        insideQuotes = !insideQuotes;
      } else if (char === "," && !insideQuotes) {
        values.push(currentValue.trim().replace(/^"/, "").replace(/"$/, ""));
        currentValue = "";
      } else {
        currentValue += char;
      }
    }
    values.push(currentValue.trim().replace(/^"/, "").replace(/"$/, "")); // Don't forget the last value

    return {
      id: `sheet-${index + 1}`,
      marca: values[0] || "",
      puff: values[1] || "",
      sabor: values[2] || "",
      imagen: values[3] || "",
      categoria: values[4] || "",
      precio: values[5] || "",
    };
  });
}

// Function to clean image URL
function cleanImageUrl(url: string): string {
  if (!url) return "";
  return url.trim().replace(/^["']|["']$/g, "");
}

// Function to transform sheet data to our Product interface
function transformToProduct(sheetProduct: SheetProduct): Product {
  // Extract numeric price from string like "$27,500"
  const priceStr = sheetProduct.precio.replace(/[$,]/g, "");
  const price = parseFloat(priceStr) || 0;

  // Extract puff count
  const puffCount = parseInt(sheetProduct.puff) || 0;

  // Determine category based on puff count
  let category: Product["category"] = "disposable";
  if (puffCount >= 40000) category = "rechargeable";
  else if (puffCount >= 20000) category = "disposable";
  else if (puffCount >= 10000) category = "disposable";
  else if (puffCount > 0) category = "disposable";
  else category = "essence";

  // Generate features based on available data
  const features = [
    `${sheetProduct.puff} puffs`,
    "Premium quality",
    "Authentic flavors",
  ];

  if (puffCount >= 30000) features.push("Long lasting");
  if (puffCount >= 40000) features.push("Rechargeable battery");

  // Process flavors from sabor field
  const flavors = sheetProduct.sabor
    .split(/[-,]/)
    .map((f) => f.trim())
    .filter((f) => f.length > 0);

  // Clean image URL
  const image = cleanImageUrl(sheetProduct.imagen);

  return {
    id: sheetProduct.id,
    name: `${sheetProduct.marca} ${sheetProduct.puff}`,
    brand: sheetProduct.marca,
    description: `${sheetProduct.marca} con sabor a ${sheetProduct.sabor}. Vape premium con ${sheetProduct.puff} puffs de duración.`,
    price: price,
    image: image,
    category,
    inStock: true,
    rating: 4.5 + Math.random() * 0.4, // Random rating between 4.5-4.9
    reviews: Math.floor(Math.random() * 1000) + 100,
    features,
    flavors,
    puffCount,
  };
}

// Main service function to fetch and parse products
export async function fetchProductsFromSheets(): Promise<Product[]> {
  console.log("🔄 Fetching products from Google Sheets...");
  console.log("🔗 Using URL:", SHEETS_URL);

  try {
    const response = await fetch(SHEETS_URL, {
      method: "GET",
      headers: {
        Accept: "text/csv, text/plain, */*",
        "User-Agent": "Mozilla/5.0 (compatible; VapeShopBot/1.0)",
      },
      mode: "cors",
    });

    console.log("📡 Response status:", response.status, response.statusText);

    if (!response.ok) {
      throw new Error(
        `HTTP error! status: ${response.status} - ${response.statusText}`,
      );
    }

    const csvText = await response.text();
    console.log(
      "📝 Raw CSV data (first 300 chars):",
      csvText.substring(0, 300),
    );

    // Check if we got HTML instead of CSV (redirect page)
    if (csvText.trim().startsWith("<")) {
      throw new Error(
        "Got HTML instead of CSV - the Google Sheet might be private or the URL is incorrect",
      );
    }

    if (!csvText.trim()) {
      throw new Error("Empty response from Google Sheets");
    }

    const sheetProducts = parseCSV(csvText);
    console.log("📊 Parsed sheet products:", sheetProducts.length, "items");

    if (sheetProducts.length === 0) {
      throw new Error("No products found in CSV data");
    }

    console.log("📊 Sample parsed product:", sheetProducts[0]);

    const products = sheetProducts.map(transformToProduct);
    const validProducts = products.filter(
      (product) =>
        product.brand && product.brand.trim() !== "" && product.puffCount > 0,
    );

    console.log("✅ Valid products after filtering:", validProducts.length);

    if (validProducts.length === 0) {
      throw new Error("No valid products found after processing CSV data");
    }

    console.log("📦 Sample transformed product:", validProducts[0]);
    return validProducts;
  } catch (error) {
    console.error("💥 Error fetching products from sheets:", error);
    throw error;
  }
}

