import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { playgrounds } from "@/app/data";
import PlaygroundDetail from "@/components/PlaygroundDetail";

export function generateStaticParams() {
  return playgrounds.map((item) => ({ id: item.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const item = playgrounds.find((p) => p.id === id);
  if (!item) return {};
  return {
    title: `${item.title} · Akari's Little World`,
    description: item.description,
  };
}

export default async function PlaygroundPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const index = playgrounds.findIndex((p) => p.id === id);
  if (index === -1) notFound();

  const item = playgrounds[index];
  const prevItem = playgrounds[(index - 1 + playgrounds.length) % playgrounds.length];
  const nextItem = playgrounds[(index + 1) % playgrounds.length];

  return (
    <PlaygroundDetail
      item={item}
      index={index}
      total={playgrounds.length}
      prevItem={prevItem}
      nextItem={nextItem}
    />
  );
}
