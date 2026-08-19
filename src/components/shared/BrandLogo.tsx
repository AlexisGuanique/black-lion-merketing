import Image from "next/image";
import { siteConfig } from "@/config/site.config";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ className = "", priority = false }: BrandLogoProps) {
  const { width, height } = siteConfig.logo;

  return (
    <span
      className={`brand-logo relative block h-12 shrink-0 sm:h-14 lg:h-16 ${className}`}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <Image
        src={siteConfig.logo.src}
        alt={siteConfig.brand}
        fill
        className="brand-logo__image"
        priority={priority}
        sizes="(max-width: 640px) 192px, (max-width: 1024px) 240px, 280px"
      />
    </span>
  );
}
