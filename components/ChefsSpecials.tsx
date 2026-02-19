import Image from "next/image";

const specials = [
  {
    title: "Spicy Tilapia Pepper Soup",
    description:
      "A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.",
    price: "₦3,500",
    image: "/special-tilapia.png",
  },
  {
    title: "Jollof Rice & Fried Chicken",
    description:
      "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
    price: "₦3,500",
    image: "/special-jollof.png",
  },
  {
    title: "Jollof Rice & Fried Chicken",
    description:
      "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
    price: "₦3,500",
    image: "/special-jollof.png",
  },
];

export default function ChefsSpecials() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <h2 className="text-center text-2xl font-semibold mb-12">
          Chef’s Specials
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {specials.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4">
                  {item.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-orange-500 font-semibold">
                    {item.price}
                  </span>

                  <button className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
