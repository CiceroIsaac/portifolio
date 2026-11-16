import Image, { type StaticImageData } from "next/image";

/** Retângulo de recorte em pixels do arquivo original (design-tokens.json). */
export interface CropRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface PackCropProps {
  src: StaticImageData;
  alt: string;
  crop: CropRect;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

/**
 * Mostra só a região `crop` de uma foto (os JPGs dos pacotes têm fundo branco
 * em volta). A caixa tem a proporção do recorte e a imagem é deslocada e
 * ampliada na mesma escala nos dois eixos: nada é deformado.
 */
export function PackCrop({ src, alt, crop, className = "", sizes = "300px", priority }: PackCropProps) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ aspectRatio: `${crop.width} / ${crop.height}` }}>
      <Image
        src={src}
        alt={alt}
        sizes={sizes}
        priority={priority}
        className="absolute h-auto max-w-none"
        style={{
          width: `${(src.width / crop.width) * 100}%`,
          left: `${(-crop.x / crop.width) * 100}%`,
          top: `${(-crop.y / crop.height) * 100}%`,
        }}
      />
    </div>
  );
}
