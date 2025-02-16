import Image from "next/image";
import { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
}

export function OptimizedImage({
  src,
  alt,
  className,
  width,
  height,
  fill = false,
}: OptimizedImageProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      src={src}
      alt={alt}
      className={`
        ${className}
        ${isLoading ? "blur-sm grayscale" : "blur-0 grayscale-0"}
        transition-all duration-300
      `}
      width={width}
      height={height}
      fill={fill}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      quality={85}
      priority={false}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}
