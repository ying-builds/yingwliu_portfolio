import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import CaseStudyTemplate, {
  type CaseStudyFrontmatter,
} from "../../../components/case-study/CaseStudyTemplate";
import Section from "../../../components/case-study/Section";
import Intro from "../../../components/case-study/Intro";
import ProblemBox from "../../../components/case-study/ProblemBox";
import Quote from "../../../components/case-study/Quote";
import MockupImage from "../../../components/case-study/MockupImage";
import MockupBlock from "../../../components/case-study/MockupBlock";
import DeviceMockup from "../../../components/case-study/DeviceMockup";
import FullBleedMedia from "../../../components/case-study/FullBleedMedia";
import Wide from "../../../components/case-study/Wide";
import CardRow from "../../../components/case-study/CardRow";
import ImagePair from "../../../components/case-study/ImagePair";
import InsightCard from "../../../components/case-study/InsightCard";
import StatCard from "../../../components/case-study/StatCard";
import PersonaCard from "../../../components/case-study/PersonaCard";
import PersonaRow from "../../../components/case-study/PersonaRow";
import FeatureCard from "../../../components/case-study/FeatureCard";
import Pillars from "../../../components/case-study/Pillars";

const CONTENT_DIR = path.join(process.cwd(), "content", "case-studies");

function getCaseStudySource(slug: string) {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, "utf8");
}

export function generateStaticParams() {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({ slug: file.replace(/\.mdx$/, "") }));
}

// Titles and descriptions come straight from each case study's frontmatter,
// so a new MDX file gets correct tab/link-preview text with no extra wiring.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const source = getCaseStudySource(slug);
  if (!source) return {};

  const { data } = matter(source);
  const { title, subheading } = data as CaseStudyFrontmatter;
  /* Read off the raw frontmatter rather than CaseStudyFrontmatter: cardImage
     belongs to the homepage grid, not to what the template renders, so it is
     deliberately absent from that interface. */
  const { cardImage } = data as { cardImage?: string };
  const pageTitle = `${title} — Ying Liu`;

  return {
    title: pageTitle,
    description: subheading,
    openGraph: {
      title: pageTitle,
      description: subheading,
      type: "article",
      /* The case study's own cover, so a shared link previews the work rather
         than the site card. Falls back to the site image if a case study has
         no cover yet — an og:image that 404s is worse than a generic one.

         No width/height: they differ per cover and the frontmatter does not
         carry them, and stating the wrong numbers is worse than omitting
         them. Repeated here rather than inherited because Next replaces the
         parent's openGraph outright — see app/about/page.tsx. */
      images: [{ url: cardImage ?? "/og-image.png" }],
    },
  };
}

const mdxComponents = {
  Section,
  Intro,
  ProblemBox,
  Quote,
  MockupImage,
  MockupBlock,
  DeviceMockup,
  FullBleedMedia,
  Wide,
  CardRow,
  ImagePair,
  InsightCard,
  StatCard,
  PersonaCard,
  PersonaRow,
  FeatureCard,
  Pillars,
  ol: (props: React.ComponentPropsWithoutRef<"ol">) => (
    <ol className="takeaways-list" {...props} />
  ),
  img: (props: React.ComponentPropsWithoutRef<"img">) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img loading="lazy" decoding="async" {...props} />
  ),
};

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const source = getCaseStudySource(slug);
  if (!source) notFound();

  const { content, data } = matter(source);
  const frontmatter = data as CaseStudyFrontmatter;

  return (
    <CaseStudyTemplate frontmatter={frontmatter}>
      <MDXRemote source={content} components={mdxComponents} />
    </CaseStudyTemplate>
  );
}
