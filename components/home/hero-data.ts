/* Everything the home hero needs to know about its hotspots, in one place.

   All numbers are in "artboard pixels": the hero was designed on a 1708 x 651
   artboard in Figma (file "2026 Portfolio", frame "Hero Section - Interactive").
   The component turns them into percentages of the real width, so the whole
   scene scales together. Every value below was read from Figma, not eyeballed.

   x / y / w / h   = the clickable box (the Figma component's own bounds)
   art             = where the exported artwork sits on the artboard. The PNGs
                     carry a little padding for shadows, so this is the
                     art's render bounds, not the component box.
   note            = the torn-tape note. x / y is where the note's top left sits.
   wiggle          = seconds between little "poke me" wiggles. */

export const ARTBOARD = { width: 1708, height: 651 };

export type Hotspot = {
  id: "headphones" | "sticker" | "passport" | "pen";
  label: string; // accessible name for the button
  x: number;
  y: number;
  w: number;
  h: number;
  art: { src: string; x: number; y: number; w: number; h: number };
  note: {
    x: number;
    y: number;
    lines: { text: string; size: number }[];
    // Optional small picture on the left of the note (the song cover).
    cover?: string;
  };
  wiggle: 3 | 4 | 5;
  // Optional picture that must sit in front of this hotspot's art (not wiggling).
  front?: { src: string; x: number; y: number; w: number; h: number };
};

export const NOTE = { src: "/images/site/hero/tape-note.webp", w: 256, h: 80 };

export const hotspots: Hotspot[] = [
  {
    id: "headphones",
    label: "Headphones",
    x: 413,
    y: 324.5,
    w: 190,
    h: 190,
    art: { src: "/images/site/hero/headphones.webp", x: 282.2, y: 250.5, w: 369.5, h: 370 },
    note: {
      x: 263,
      y: 234.5,
      // Typed in by hand for now. A live Spotify "now playing" comes in a later update.
      cover: "/images/site/hero/song-cover-v1.webp",
      lines: [
        { text: "now playing:", size: 11 },
        { text: "Shut up My Moms Calling", size: 14 },
        { text: "Hotel Ugly", size: 12 },
      ],
    },
    wiggle: 3,
  },
  {
    id: "sticker",
    label: "Cat sticker",
    x: 571,
    y: 383.5,
    w: 100,
    h: 116,
    art: { src: "/images/site/hero/cat-sticker.webp", x: 571, y: 383.5, w: 90, h: 116 },
    note: {
      x: 421,
      y: 305.5,
      lines: [{ text: "this is maki (left) and bean (right)!", size: 14 }],
    },
    wiggle: 4,
  },
  {
    id: "passport",
    label: "Passport photo",
    x: 654,
    y: 284.5,
    w: 87,
    h: 87,
    art: { src: "/images/site/hero/passport-photo.webp", x: 654, y: 284.5, w: 87, h: 87 },
    note: {
      x: 569.5,
      y: 206.5,
      lines: [{ text: "Capricorn, ENFJ, Acts of Service", size: 14 }],
    },
    wiggle: 4,
    // The polka dot tape is taped over the photo's corner, so it has to stay in
    // front of it. Position is the "dot tape" layer in Figma (50 x 50).
    front: { src: "/images/site/hero/polka-tape.webp", x: 676, y: 259.5, w: 50, h: 50 },
  },
  {
    id: "pen",
    label: "Pen",
    x: 1026,
    y: 201.5,
    w: 150,
    h: 200,
    art: { src: "/images/site/hero/pen.webp", x: 965, y: 197.5, w: 247.5, h: 249 },
    note: {
      x: 1066,
      y: 116.5,
      lines: [{ text: "my favorite writing tool: Pilot E95s Fountain Pen", size: 14 }],
    },
    wiggle: 5,
  },
];

/* Bean (the tuxedo cat) is baked into the background; this is only the hover
   area and the sparkles that pop above her. Sparkle positions are the final
   "Pop 2" frame from Figma, relative to the hover area's top left. */
export const bean = {
  x: 1148,
  y: 290.5,
  w: 225,
  h: 235,
  sparkles: [
    { x: 2, y: -104.5, w: 56, h: 75, tone: "cream" },
    { x: 67, y: -122.2, w: 66, h: 88.4, tone: "butter" },
    { x: 136, y: -84.1, w: 48, h: 64.3, tone: "cream" },
  ],
};
