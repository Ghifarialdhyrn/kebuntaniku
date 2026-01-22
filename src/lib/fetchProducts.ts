import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

export async function fetchProducts() {
  const res = await client.getEntries({
    content_type: "productsKebunTaniku",
    order: ["-sys.createdAt"], // 🔥 produk terbaru di atas
  });

  return res.items;
}
