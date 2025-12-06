import productTshirt from "@/assets/product-tshirt.jpg";
import productMug from "@/assets/product-mug.jpg";
import productBag from "@/assets/product-bag.jpg";
import productHoodie from "@/assets/product-hoodie.jpg";
import productCap from "@/assets/product-cap.jpg";
import productThermo from "@/assets/product-thermo.jpg";
import productCups from "@/assets/product-cups.jpg";
import productStationery from "@/assets/product-stationery.jpg";
import productDiary from "@/assets/product-diary.jpg";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Custom T-Shirts",
      image: productTshirt,
      description: "Premium quality cotton",
    },
    {
      id: 2,
      name: "Ceramic Mugs",
      image: productMug,
      description: "Dishwasher safe",
    },
    {
      id: 3,
      name: "Tote Bags",
      image: productBag,
      description: "Eco-friendly canvas",
    },
    {
      id: 4,
      name: "Hoodies",
      image: productHoodie,
      description: "Cozy fleece lined",
    },
    {
      id: 5,
      name: "Caps",
      image: productCap,
      description: "Embroidered designs",
    },
    {
      id: 6,
      name: "Thermo Bottles",
      image: productThermo,
      description: "Insulated stainless steel",
    },
    {
      id: 7,
      name: "Cups",
      image: productCups,
      description: "Custom branded cups",
    },
    {
      id: 8,
      name: "Stationery",
      image: productStationery,
      description: "Complete branding sets",
    },
    {
      id: 9,
      name: "Diary",
      image: productDiary,
      description: "Premium leather planners",
    },
  ];

  return (
    <section className="py-20 lg:py-32" id="products">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-serif text-4xl lg:text-6xl font-bold text-foreground">
            Our Products
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-medium text-foreground text-sm lg:text-base">
                {product.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
