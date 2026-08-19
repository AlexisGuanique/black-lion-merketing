import Image from "next/image";
import { siteConfig } from "@/config/site.config";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ className = "", priority = false }: BrandLogoProps) {
  const { src, wordmark } = siteConfig.logo;

  return (
    <span className={`brand-logo ${className}`} aria-label={wordmark}>
      <span className="brand-logo__mark">
        <Image
          src={src}
          alt=""
          fill
          className="brand-logo__image"
          priority={priority}
          sizes="(max-width: 768px) 56px, 72px"
        />
      </span>
      <span className="brand-logo__wordmark">{wordmark}</span>
    </span>
  );
}

export { type BrandLogoProps };
