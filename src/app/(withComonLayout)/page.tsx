import { subtitle, title } from "@/components/primitives";
import Link from "next/link";

export default async function Home() {
  return (
    <section
      className="relative flex min-h-[calc(100vh-64px)] flex-col items-center justify-center gap-4 py-8 md:py-10 bg-cover bg-center"
      style={{ backgroundImage: 'url("/hero_bg.jpg")' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0" />

      <div className="relative inline-block max-w-xl text-center justify-center z-10">
        <span className={title()}>Grow&nbsp;</span>
        <span className={title({ color: "green" })}>your dream&nbsp;</span>
        <br />
        <span className={title()}>
          garden with <span className={title({ color: "green" })}>expert </span>
          tips and <span className={title({ color: "green" })}>community </span>
          support.
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Join a thriving community of gardening enthusiasts, access premium
          content, and share your passion for nature.
        </div>
      </div>

      <div className="relative flex gap-3 z-10">
        <Link
          className="bg-green-600 px-8 py-3 rounded-full no-underline text-white hover:brightness-90"
          href="/dashboard"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
