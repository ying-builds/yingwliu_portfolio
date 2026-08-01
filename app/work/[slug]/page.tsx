import fs from "node:fs";
import path from "node:path";
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

const mdxComponents = {
  Section,
  Intro,
  ProblemBox,
  Quote,
  MockupImage,
  MockupBlock,
  FullBleedMedia,
  Wide,
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
