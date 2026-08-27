import { siteContent } from "@/content/site";
import { BrandMark } from "@/components/BrandMark";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <BrandMark />
      <p>{siteContent.footer.note}</p>
    </footer>
  );
}
