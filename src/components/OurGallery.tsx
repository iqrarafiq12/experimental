import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

type InstaPost = {
  id: number;
  image: string;
  url: string;
};

const instagramPosts: InstaPost[] = [
  { id: 1, image: "/IG-Post-01.jpg", url: "https://www.instagram.com/p/DTh0m3QDQeE/" },
  { id: 2, image: "/IG-Post-02.jpg", url: "https://www.instagram.com/p/DTkbBGpjRZI/" },
  { id: 3, image: "/IG-Post-03.jpg", url: "https://www.instagram.com/p/DTn40M8Dc4r/" },
  { id: 4, image: "/IG-Post-04.png", url: "https://www.instagram.com/p/DTxFAVjDf7V/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==" },
  { id: 5, image: "/IG-Post-03.jpg", url: "https://www.instagram.com/" },
  { id: 6, image: "/IG-Post-01.jpg", url: "https://www.instagram.com/" },
];

export default function OurGallery() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-6">
        <p className="text-primary font-semibold tracking-widest text-sm">
          FOLLOW US ON INSTAGRAM
        </p>
      </div>

      {/* Gallery */}
      <div className="relative">
        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-6 gap-[2px] cursor-pointer">
          {instagramPosts.map((post) => (
            <Link
              key={post.id}
              href={post.url}
              target="_blank"
              className="group relative aspect-square overflow-hidden"
            >
              <Image
                src={post.image}
                alt="Instagram post"
                fill
                sizes="16vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center">
                <FaInstagram className="text-white text-3xl opacity-0 group-hover:opacity-100 transition" />
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile / Tablet Horizontal Scroll */}
        <div className="lg:hidden flex gap-2 overflow-x-auto scrollbar-hide px-4 cursor-pointer">
          {instagramPosts.map((post) => (
            <Link
              key={post.id}
              href={post.url}
              target="_blank"
              className="relative flex-shrink-0 w-64 aspect-square group overflow-hidden rounded-lg"
            >
              <Image
                src={post.image}
                alt="Instagram post"
                fill
                sizes="50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center rounded-lg">
                <FaInstagram className="text-white text-3xl opacity-0 group-hover:opacity-100 transition" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
