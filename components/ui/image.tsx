import { cn } from "@/lib/utils";
import NextImage from "next/image";
import { useState } from "react";

export function Image({
  src,
  alt,
  className,
  ...props
}: React.ComponentProps<typeof NextImage>) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className={cn("relative overflow-hidden bg-muted", className)}>
      <NextImage
        className={cn(
          "duration-500 ease-in-out",
          isLoading ? "scale-105 blur-sm" : "scale-100 blur-0"
        )}
        src={src}
        alt={alt}
        quality={85}
        unoptimized
        onLoadingComplete={() => setLoading(false)}
        {...props}
      />
    </div>
  );
}
