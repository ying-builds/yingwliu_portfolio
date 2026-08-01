import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content", "case-studies");

/* What the Work grid needs to render one card. Everything here comes from a
   case study's own frontmatter, so adding an MDX file adds a card. */
export interface CaseStudyCard {
  slug: string;
  href: string;
  title: string;
  description: string;
  role: string;
  year: string;
  image: string;
  imageAlt: string;
  order: number;
}

/* The card fields are optional in frontmatter and fall back to the ones the
   case study page already uses, so a new MDX file renders a sensible card
   before anyone writes card-specific copy. */
interface Frontmatter {
  title?: string;
  subheading?: string;
  dates?: unknown;
  meta?: { role?: string };
  heroMockup?: string;
  heroMockupAlt?: string;
  cardTitle?: string;
  cardDescription?: string;
  cardImage?: string;
  cardImageAlt?: string;
  cardYear?: unknown;
  cardOrder?: number;
}

/* "February - May 2024" -> "2024". Falls back to the raw value if there is
   no four-digit year, rather than rendering an empty cell.

   Takes unknown because frontmatter is hand-written: `dates: 2024` is
   perfectly natural to type and YAML hands it back as a number, which used
   to throw here and fail the whole homepage build. */
function yearFrom(dates: unknown): string {
  if (dates === null || dates === undefined || dates === "") return "";
  const text = String(dates);
  const years = text.match(/\b(19|20)\d{2}\b/g);
  if (!years) return text;
  const first = years[0];
  const last = years[years.length - 1];
  return first === last ? first : `${first} – ${last}`;
}

export function getCaseStudyCards(): CaseStudyCard[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
      const fm = matter(raw).data as Frontmatter;

      return {
        slug,
        href: `/work/${slug}`,
        title: fm.cardTitle ?? fm.title ?? slug,
        description: fm.cardDescription ?? fm.subheading ?? "",
        role: fm.meta?.role ?? "",
        year: fm.cardYear != null ? String(fm.cardYear) : yearFrom(fm.dates),
        image: fm.cardImage ?? fm.heroMockup ?? "",
        imageAlt: fm.cardImageAlt ?? fm.heroMockupAlt ?? fm.title ?? "",
        // Unordered case studies sort after ordered ones rather than jumping
        // to the front of the grid.
        order: fm.cardOrder ?? Number.MAX_SAFE_INTEGER,
      };
    })
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}
