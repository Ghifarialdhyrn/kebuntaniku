import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_TOKEN!, // 🔥
  host: "preview.contentful.com",
});

export async function fetchProducts() {
  const res = await client.getEntries({
    content_type: "productsKebunTaniku",
    order: ["-sys.createdAt"],
  });

  return res.items;
}
