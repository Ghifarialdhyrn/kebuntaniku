import contentfulClient from "@/contentful/contentfulClient";
import { Entry } from "contentful";

export interface BlogPost {
  title: string;
  date: string;
  slug: string;
}

export async function getFooterArticles(): Promise<BlogPost[]> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: "blogKebunTaniku",
      order: ["-fields.date"],
    });

    const posts = response.items.map((item) => {
      const blogItem = item as Entry<any>;

      const title = String(blogItem.fields.title ?? "");
      const slug = String(blogItem.fields.slug ?? "");
      const rawDate = blogItem.fields.date;
      const date =
        typeof rawDate === "string" || typeof rawDate === "number"
          ? new Date(rawDate)
          : new Date();

      return {
        title,
        date: date.toISOString(),
        slug,
      };
    });

    return posts.slice(0, 2);
  } catch (error) {
    console.error("Error fetching footer articles:", error);
    return [];
  }
}
