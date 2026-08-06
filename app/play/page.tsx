import type { Metadata } from "next";
import styles from "./page.module.css";
import CollageItem, {
  type CollageItemProps,
} from "../../components/play/CollageItem";

export const metadata: Metadata = {
  title: "Play — Ying Liu",
  description:
    "A collage of personal and undergraduate work, annotated by hand.",
  openGraph: {
    title: "Play — Ying Liu",
    description:
      "A collage of personal and undergraduate work, annotated by hand.",
    type: "website",
    /* Repeated from the root layout deliberately — see app/about/page.tsx. */
    siteName: "Ying Liu",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 627,
        alt: "Ying Liu, product designer, Sacramento",
      },
    ],
  },
};

/* Placeholder pieces. The images, doodles and handwriting are all stand-ins —
 * they exist so the container/annotation relationship is visible before the
 * real art does. Replace them under NEW filenames rather than overwriting:
 * Next caches optimised images by URL, so an overwritten file keeps serving
 * the old version with nothing to hint at it.
 *
 * Every offset is a percentage of the item's own box, so annotations hold
 * their place on the image at any size. */
const items: CollageItemProps[] = [
  {
    src: "/images/play/work/placeholder-01.png",
    alt: "Placeholder for a portrait piece",
    width: 1200,
    height: 1600,
    doodles: [
      {
        src: "/images/play/doodles/placeholder-squiggle.png",
        top: "4%",
        left: "-8%",
        width: "46%",
        rotate: "-8deg",
      },
    ],
    label: {
      src: "/images/play/labels/placeholder-one.png",
      text: "Film, 2021",
      top: "88%",
      left: "6%",
      width: "52%",
      rotate: "-3deg",
    },
  },
  {
    src: "/images/play/work/placeholder-02.png",
    alt: "Placeholder for a landscape piece",
    width: 1600,
    height: 1067,
    doodles: [
      {
        src: "/images/play/doodles/placeholder-circle.png",
        top: "12%",
        left: "52%",
        width: "44%",
        rotate: "4deg",
      },
      {
        src: "/images/play/doodles/placeholder-arrow.png",
        top: "44%",
        left: "34%",
        width: "18%",
      },
    ],
    label: {
      src: "/images/play/labels/placeholder-two.png",
      text: "Undergrad",
      top: "-6%",
      left: "4%",
      width: "40%",
      rotate: "-2deg",
    },
  },
  {
    src: "/images/play/work/placeholder-03.png",
    alt: "Placeholder for a square piece",
    width: 1200,
    height: 1200,
    doodles: [
      {
        src: "/images/play/doodles/placeholder-arrow.png",
        top: "60%",
        left: "-6%",
        width: "22%",
        rotate: "12deg",
      },
    ],
    label: {
      src: "/images/play/labels/placeholder-three.png",
      text: "Riso print",
      top: "90%",
      left: "44%",
      width: "48%",
      rotate: "2deg",
    },
  },
  {
    src: "/images/play/work/placeholder-04.png",
    alt: "Placeholder for a wide piece",
    width: 1400,
    height: 900,
    doodles: [
      {
        src: "/images/play/doodles/placeholder-squiggle.png",
        top: "72%",
        left: "40%",
        width: "56%",
        rotate: "6deg",
      },
    ],
    label: {
      src: "/images/play/labels/placeholder-four.png",
      text: "Sketchbook",
      top: "-8%",
      left: "50%",
      width: "44%",
      rotate: "3deg",
    },
  },
];

export default function PlayPage() {
  return (
    <main className={styles.page}>
      {/* The page carries no visible headings by design — the handwriting is
          the only text, and it is artwork. This keeps the document from having
          an empty outline, so the page still announces itself. */}
      <h1 className="visually-hidden">Play</h1>

      {/* A plain stack, deliberately. The collage layout comes once the piece
          count is settled; this exists so the component can be seen working. */}
      <div className={styles.stack}>
        {items.map((item) => (
          <CollageItem key={item.src} {...item} />
        ))}
      </div>
    </main>
  );
}
