import Image from "next/image";

const categories = [
  { title: "Jollof Rice", image: "/cat-jollof.png" },
  { title: "Swallow & Soup", image: "/cat-swallow.png" },
  { title: "Grills & BBQ", image: "/cat-bbq.png" },
];

export default function Categories() {
  return (
    <section className="bg-gray-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <h2 className="text-center text-2xl font-semibold mb-12">
          Popular Categories
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white rounded-xl overflow-hidden shadow-sm"
            >
              <div className="relative h-48">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-center font-medium py-4">
                {cat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
