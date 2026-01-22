import { createClient } from "contentful";

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const previewToken = process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_TOKEN;
const deliveryToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

if (!space || (!previewToken && !deliveryToken)) {
  throw new Error("Contentful environment variables are missing");
}

const client = createClient({
  space,
  accessToken: previewToken ?? deliveryToken!, // ✅ fallback
  host: previewToken ? "preview.contentful.com" : "cdn.contentful.com",
});

export async function fetchProducts() {
  const res = await client.getEntries({
    content_type: "productsKebunTaniku",
    order: ["-sys.createdAt"],
  });

  return res.items;
}
