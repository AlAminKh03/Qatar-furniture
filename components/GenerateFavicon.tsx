"use client";

export function GenerateFavicon() {
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/furniture-favicon.svg" />
      <link
        rel="icon"
        type="image/png"
        href="/furniture-favicon.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="/furniture-favicon-16x16.png"
        sizes="16x16"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/furniture-apple-touch-icon.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </>
  );
}
