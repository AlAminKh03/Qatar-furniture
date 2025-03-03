export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Qatar Furniture Decor",
          image: "https://qatarfurnituredecor.com/logo.jpg",
          description:
            "Premium furniture and decor store in Qatar offering luxury furniture and interior design services.",
          "@id": "https://qatarfurnituredecor.com",
          url: "https://qatarfurnituredecor.com",
          telephone: "YOUR-PHONE",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "YOUR-ADDRESS",
            addressLocality: "Doha",
            addressRegion: "Doha",
            postalCode: "YOUR-POSTAL",
            addressCountry: "QA",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "25.276987",
            longitude: "55.296233",
          },
          sameAs: [
            "YOUR-FACEBOOK-URL",
            "YOUR-INSTAGRAM-URL",
            // Add other social media URLs
          ],
        }),
      }}
    />
  );
}

export function HomePageJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Store",
          name: "Your Store Name",
          description: "Luxury furniture and home decor store in Qatar",
          address: {
            "@type": "PostalAddress",
            addressCountry: "Qatar",
            addressLocality: "Doha",
          },
          priceRange: "$$$$",
          hasMap: "your-google-maps-url",
          telephone: "your-phone-number",
          openingHours: "Mo-Su 09:00-22:00",
        }),
      }}
    />
  );
}
