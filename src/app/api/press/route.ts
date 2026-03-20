import { media } from "@wix/sdk";
import { wixClient } from "@/lib/wix";

export async function GET() {
  try {
    const result = await wixClient.items
      .query(process.env.WIX_ARTICLES_COLLECTION_ID!)
      .descending("_publishDate")
      .find();

    const articles = (result.items ?? []).map((item) => {
      // Convert wix:image:// URL to a displayable URL
      let imageUrl = "";
      const imageAlt = item.imagealttext_fld ?? "";
      if (item.image_fld) {
        const mediaResult = media.getImageUrl(item.image_fld);
        imageUrl = mediaResult.url;
      }

      return {
        id: item._id,
        title: item.title_fld,
        description: item.description_fld ?? "",
        date: item._publishDate,
        link: item.link,
        image: imageUrl,
        imageAlt,
      };
    });

    return Response.json({ success: true, articles });
  } catch (error) {
    console.error("Failed to fetch press releases:", error);
    return Response.json({ success: false, articles: [] }, { status: 500 });
  }
}
