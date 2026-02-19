import Image from "next/image";

type Item = {
  id: number;
  name: string;
  desc: string;
  price: string;
  image: string;
};

const menu: Record<string, Item[]> = {
  Popular: [
    {
      id: 1,
      name: "Jollof Rice & Fried Chicken",
      desc: "Our signature Jollof rice, served with crispy fried chicken and plantain.",
      price: "₦3,500",
      image: "/jollof.png",
    },
    {
      id: 2,
      name: "Eba & Egusi Soup (Goat Meat)",
      desc: "Hearty Egusi soup with tender goat meat, served with soft Eba.",
      price: "₦3,500",
      image: "/eba-egusi.png",
    },
    {
      id: 3,
      name: "Pounded Yam & Edikaikong",
      desc: "Traditional pounded yam with rich, leafy Edikaikong soup.",
      price: "₦3,800",
      image: "/pounded-yam.png",
    },
    {
      id: 4,
      name: "Peppered Snail",
      desc: "Spicy and savory peppered snail, perfect as a starter.",
      price: "₦2,500",
      image: "/snail.png",
    },
    {
      id: 5,
      name: "Grilled Tilapia Fish",
      desc: "Whole grilled tilapia seasoned with our special spices.",
      price: "₦4,500",
      image: "/tilapia.png",
    },
    {
      id: 6,
      name: "Jollof Rice & Fried Chicken",
      desc: "Our signature Jollof rice, served with crispy fried chicken and plantain.",
      price: "₦3,500",
      image: "/jollof.png",
    },
  ],

  "Jollof Rice & Entrees": [
    {
      id: 7,
      name: "Jollof Rice & Smoked Fish",
      desc: "Flavorful jollof rice served with perfectly smoked fish.",
      price: "₦3,500",
      image: "/jollof-fish.png",
    },
    {
      id: 8,
      name: "Party Jollof Rice (Veg)",
      desc: "Vegetarian party jollof, full of rich flavors.",
      price: "₦2,800",
      image: "/jollof.png",
    },
    {
      id: 9,
      name: "Party Jollof Rice (Veg)",
      desc: "Vegetarian party jollof, full of rich flavors.",
      price: "₦3,500",
      image: "/jollof.png",
    },
  ],

  "Swallow & Soups": [
    {
      id: 10,
      name: "Amala with Gbegiri & Ewedu",
      desc: "Classic Amala served with Gbegiri (beans) and Ewedu.",
      price: "₦3,100",
      image: "/amala.png",
    },
    {
      id: 11,
      name: "Fufu & Okra Soup (Fish)",
      desc: "Light fufu served with fresh okra soup and tilapia fish.",
      price: "₦3,300",
      image: "/okra.png",
    },
    {
      id: 12,
      name: "Fufu & Okra Soup (Fish)",
      desc: "Light fufu served with fresh okra soup and tilapia fish.",
      price: "₦3,500",
      image: "/okra.png",
    },
  ],
};

const categories = [
  "Popular",
  "Jollof Rice & Entrees",
  "Swallow & Soups",
  "Grills & sides",
  "Beverages",
  "Desserts",
];

export default function ExplorePage() {
  return (
    <main className="bg-[#f6f6f6]">

      {/* HERO */}
      <section className="relative h-[360px] w-full">
        <Image
          src="/Welcome.png"
          alt="Chuks Kitchen"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute left-0 right-0 bottom-12 max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-3xl md:text-4xl font-semibold mb-1">
            Chuks Kitchen
          </h1>
          <p className="text-sm text-white/90">
            Chuks Kitchen Nigerian Home Cooking 4.8 (1.2k)
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-4 py-10">

        {/* MENU CATEGORIES */}
<div className="bg-white rounded-xl mb-12 overflow-hidden">

  <div className="px-5 pt-4 pb-2">
    <h3 className="text-sm font-semibold">
      Menu Categories
    </h3>
  </div>

  <ul className="text-sm">
    {categories.map((cat, index) => (
      <li
        key={cat}
        className={`px-5 py-2 cursor-pointer
          ${
            index === 0
              ? "bg-orange-100 text-orange-600 border-l-4 border-orange-500 font-medium"
              : "hover:bg-gray-100"
          }`}
      >
        {cat}
      </li>
    ))}
  </ul>

</div>


        {/* SECTIONS */}
        <div className="space-y-14">
          {Object.entries(menu).map(([section, items]) => (
            <div key={section}>

              <h2 className="text-lg font-semibold mb-6">
                {section}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {items.map((item) => (
                  <FoodCard key={item.id} item={item} />
                ))}
              </div>

            </div>
          ))}
        </div>

      </section>
    </main>
  );
}

function FoodCard({ item }: { item: Item }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm">

      <div className="relative h-[180px] w-full">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4">

        <h4 className="font-semibold text-sm mb-1">
          {item.name}
        </h4>

        <p className="text-xs text-gray-500 mb-4">
          {item.desc}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-orange-600 font-semibold text-sm">
            {item.price}
          </span>

          <button className="w-7 h-7 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm">
            +
          </button>
        </div>

      </div>
    </div>
  );
}
