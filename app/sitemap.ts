import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://qatarfurnituredecor.com",
      lastModified: new Date("2025-03-10T19:26:21.398Z"),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://qatarfurnituredecor.com/about",
      lastModified: new Date("2025-03-10T19:26:21.398Z"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://qatarfurnituredecor.com/services",
      lastModified: new Date("2025-03-10T19:26:21.398Z"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://qatarfurnituredecor.com/work",
      lastModified: new Date("2025-03-10T19:26:21.398Z"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://qatarfurnituredecor.com/contact",
      lastModified: new Date("2025-03-10T19:26:21.398Z"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://qatarfurnituredecor.com/quote",
      lastModified: new Date("2025-03-10T19:26:21.398Z"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
