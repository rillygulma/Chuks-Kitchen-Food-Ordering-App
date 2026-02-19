import Image from "next/image";

export default function PromoBanner() {
  return (
    <section className="relative h-[420px] w-full">
      <Image
        src="/promo-banner.png"
        alt="New menu"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-16 flex items-center">
        <div className="max-w-xl text-white">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Introducing Our New Menu Additions!
          </h2>

          <p className="mb-6 text-white/90">
            Explore exciting new dishes, crafted with the freshest ingredients
            and authentic Nigerian flavors. Limited time offer!
          </p>

          <button className="bg-orange-500 text-white px-6 py-3 rounded-md">
            Discover what’s new
          </button>
        </div>
      </div>
    </section>
  );
}
