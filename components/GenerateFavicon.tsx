"use client";

import { useEffect } from "react";

export function GenerateFavicon() {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      // Background
      ctx.fillStyle = "#1a1a1a";
      ctx.fillRect(0, 0, 32, 32);

      // Text
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 20px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("Q", 16, 16);

      // Convert to favicon
      const link = document.createElement("link");
      link.type = "image/x-icon";
      link.rel = "shortcut icon";
      link.href = canvas.toDataURL("image/x-icon");
      document.getElementsByTagName("head")[0].appendChild(link);
    }
  }, []);

  return null;
}
