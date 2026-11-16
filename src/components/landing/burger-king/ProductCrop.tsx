import Image, { type StaticImageData } from "next/image";

interface ProductCropProps {
  src: StaticImageData;
  alt: string;
  /** Fração da largura do arquivo ocupada pelo produto (ex.: 0.62). */
  productWidth: number;
  /** Fração da altura do arquivo ocupada pelo produto. */
  productHeight: number;
  /** Centro vertical do produto no arquivo, em % da altura (padrão: 50). */
  centerY?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

/**
 * Enquadra um produto de um PNG quadrado com margens transparentes largas.
 *
 * A caixa externa tem a proporção do próprio produto; a imagem é ampliada
 * na mesma escala nos dois eixos (sem deformar) e centralizada no produto,
 * deixando as margens transparentes transbordarem sem ocupar espaço.
 */
export function ProductCrop({
  src,
  alt,
  productWidth,
  productHeight,
  centerY = 50,
  className = "",
  sizes = "50vw",
  priority,
}: ProductCropProps) {
  const fileAspect = src.width / src.height;
  return (
    <div
      className={`relative ${className}`}
      style={{ aspectRatio: `${(productWidth * fileAspect) / productHeight}` }}
    >
      <Image
        src={src}
        alt={alt}
        sizes={sizes}
        priority={priority}
        className="pointer-events-none absolute top-1/2 left-1/2 h-auto max-w-none"
        style={{ width: `${100 / productWidth}%`, transform: `translate(-50%, -${centerY}%)` }}
      />
    </div>
  );
}
