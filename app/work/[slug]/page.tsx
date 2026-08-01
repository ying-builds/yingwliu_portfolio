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
import FullBleedMedia from "../../../components/case-study/FullBleedMedia";
import Wide from "../../../components/case-study/Wide";
import CardRow from "../../../components/case-study/CardRow";
import InsightCard from "../../../components/case-study/InsightCard";
import StatCard from "../../../components/case-study/StatCard";
import PersonaCard from "../../../components/case-study/PersonaCard";
import FeatureCard from "../../../components/case-study/FeatureCard";

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
  const pageTitle = `${title} — Ying Liu`;

  return {
    title: pageTitle,
    description: subheading,
    openGraph: {
      title: pageTitle,
      description: subheading,
      type: "article",
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
  FullBleedMedia,
  Wide,
  CardRow,
  InsightCard,
  StatCard,
  PersonaCard,
  FeatureCard,
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
