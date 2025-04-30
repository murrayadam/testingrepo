import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  title: string;
  imageUrl: string;
  href: string;
}

export default function CategoryCard({
  title,
  imageUrl,
  href,
}: CategoryCardProps) {
  return (
    <Link href={href} className="flex flex-col items-center">
      <div className="bg-[#f5f5f5] rounded-lg overflow-hidden w-full mb-2 hover:shadow-md transition-shadow">
        <div className="aspect-square relative">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-contain p-4"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>
      </div>
      <span className="text-center font-medium text-sm sm:text-base">
        {title}
      </span>
    </Link>
  );
}
