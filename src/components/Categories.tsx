import CategoryCard from "./CategoryCard";

export default function Categories() {
  const categories = [
    {
      title: "New arrivals",
      imageUrl: "/images/categories/new-arrivals.jpg",
      href: "/categories/new-arrivals",
    },
    {
      title: "Trail running shoes",
      imageUrl: "/images/categories/trail-running-shoes.jpg",
      href: "/categories/trail-running-shoes",
    },
    {
      title: "Women's clothing",
      imageUrl: "/images/categories/womens-clothing.jpg",
      href: "/categories/womens-clothing",
    },
    {
      title: "Men's clothing",
      imageUrl: "/images/categories/mens-clothing.jpg",
      href: "/categories/mens-clothing",
    },
    {
      title: "Coolers",
      imageUrl: "/images/categories/coolers.jpg",
      href: "/categories/coolers",
    },
    {
      title: "Camp lights",
      imageUrl: "/images/categories/camp-lights.jpg",
      href: "/categories/camp-lights",
    },
    {
      title: "Gravel bikes",
      imageUrl: "/images/categories/gravel-bikes.jpg",
      href: "/categories/gravel-bikes",
    },
    {
      title: "Camp safety",
      imageUrl: "/images/categories/camp-safety.jpg",
      href: "/categories/camp-safety",
    },
    {
      title: "Sandals",
      imageUrl: "/images/categories/sandals.jpg",
      href: "/categories/sandals",
    },
    {
      title: "Outlet deals",
      imageUrl: "/images/categories/outlet-deals.jpg",
      href: "/categories/outlet-deals",
    },
  ];

  return (
    <section className="w-full py-8 px-4 sm:px-6 md:px-8">
      <h2 className="text-3xl font-medium mb-6 text-[#333]">
        Shop top categories
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
        {categories.map((category) => (
          <CategoryCard
            key={category.title}
            title={category.title}
            imageUrl={category.imageUrl}
            href={category.href}
          />
        ))}
      </div>

      <div className="border-t border-b py-6 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-lg font-medium mb-4 sm:mb-0">
          Looking for great deals?
        </p>
        <a
          href="/deals"
          className="bg-[#c45500] hover:bg-[#a13b00] text-white py-2 px-4 rounded-md transition-colors font-medium"
        >
          Shop all deals
        </a>
      </div>
    </section>
  );
}
