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
  /* Keeps the card off the Work grid without deleting it. An MDX case study
     sets `cardHidden: true` in its frontmatter; a hand-listed one sets this
     directly in a hand-written card.

     Hiding a card is not unpublishing the case study. /work/[slug] routes are
     generated straight from the content directory, so a hidden case study
     still has a working page and a shareable link — it just stops being
     advertised on the homepage. Use PROTECTED_SLUGS in lib/protected.ts if
     the page itself should be unreachable. */
  hidden?: boolean;
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
  cardHidden?: boolean;
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
        hidden: fm.cardHidden === true,
      };
    })
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}

/* What the Work grid should actually render.
 *
 * The only function that filters hidden cards, and the only one a page should
 * call. getCaseStudyCards() above is the raw accessor and deliberately returns
 * hidden cards too — keeping the filter in one place means a second grid, or a
 * future page listing this work, cannot forget to apply it.
 *
 * `extra` is for cards with no MDX file of their own: see unconvertedCards in
 * app/work-grid-data.ts. It is a parameter rather than an import so this
 * module stays free of any dependency on app/.
 */
export function getVisibleCards(extra: CaseStudyCard[] = []): CaseStudyCard[] {
  return [...getCaseStudyCards(), ...extra]
    .filter((card) => !card.hidden)
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}
