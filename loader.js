"use client";

export default function ddgro({ src, width, quality }) {
  return `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${src}?w=${width}&q=${
    quality || 75
  }`;
}
