'use client';

export default function ddgro({ src, width, quality }) {
  return `https://j-filipiak.pl/clients/ddgro-api/form/${src}?w=${width}&q=${
    quality || 75
  }`;
}
