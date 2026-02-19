import Image from "next/image";
import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full flex items-center">
      <Image
        src="/hero-food.png"
        alt="Food table"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full">
        <div className="max-w-2xl">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            The Heart of Nigerian Home
            <br />
            Cooking
          </h1>

          <p className="mt-4 text-white/90">
            Handcrafted with passion, delivered with care.
          </p>

          <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-md">
            Discover what’s new
          </button>
        </div>
      </div>

      <SearchBar />
    </section>
  );
}
