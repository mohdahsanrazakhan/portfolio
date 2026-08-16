import Image from "next/image";
import { cn } from "@/lib/utils";
import type { CaseStudyImage } from "@/lib/case-studies";

interface CaseGalleryProps {
  images: CaseStudyImage[];
}

const CaseGallery = ({ images }: CaseGalleryProps) => {
  return (
    <div className="py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "relative h-64 sm:h-80 w-full overflow-hidden rounded-xl bg-accent",
              image.wide && "sm:col-span-2 sm:h-96"
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="object-cover"
              fill
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseGallery;
