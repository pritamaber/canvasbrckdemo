import type { Metadata } from "next";
import { Selector } from "@/components/selector";

export const metadata: Metadata = {
  title: "Canvas & Brick — Two Creative Directions",
  description:
    "Demo prototype: choose between the Cinematic and Editorial creative directions for the Canvas & Brick website.",
};

export default function Home() {
  return <Selector />;
}
