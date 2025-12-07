import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Filter, Sparkles, Grid3X3, LayoutGrid } from "lucide-react";

import productTshirt from "@/assets/product-tshirt.jpg";
import productMug from "@/assets/product-mug.jpg";
import productBag from "@/assets/product-bag.jpg";
import productHoodie from "@/assets/product-hoodie.jpg";
import productCap from "@/assets/product-cap.jpg";
import productThermo from "@/assets/product-thermo.jpg";
import productCups from "@/assets/product-cups.jpg";
import productStationery from "@/assets/product-stationery.jpg";
import productDiary from "@/assets/product-diary.jpg";

const categories = [
  "All Products",
  "Custom T-Shirts",
  "Ceramic Mugs",
  "Tote Bags",
  "Hoodies",
  "Caps",
  "Thermo Bottles",
  "Cups",
  "Stationery",
  "Diary",
];

const colors = [
  { name: "Black", value: "hsl(0 0% 10%)" },
  { name: "White", value: "hsl(0 0% 98%)" },
  { name: "Navy", value: "hsl(220 50% 25%)" },
  { name: "Gray", value: "hsl(0 0% 50%)" },
  { name: "Beige", value: "hsl(40 30% 80%)" },
  { name: "Brown", value: "hsl(30 40% 35%)" },
  { name: "Red", value: "hsl(0 70% 50%)" },
  { name: "Green", value: "hsl(140 50% 40%)" },
  { name: "Blue", value: "hsl(210 70% 50%)" },
  { name: "Yellow", value: "hsl(50 90% 55%)" },
];

const products = [
  {
    id: 1,
    name: "Custom T-Shirts",
    image: productTshirt,
    price: 15,
    category: "Custom T-Shirts",
    description: "Premium quality cotton",
    bestseller: true,
    colors: ["Black", "White", "Navy"],
  },
  {
    id: 2,
    name: "Ceramic Mugs",
    image: productMug,
    price: 8,
    category: "Ceramic Mugs",
    description: "Dishwasher safe",
    bestseller: true,
    colors: ["White", "Black"],
  },
  {
    id: 3,
    name: "Tote Bags",
    image: productBag,
    price: 12,
    category: "Tote Bags",
    description: "Eco-friendly canvas",
    bestseller: false,
    colors: ["Beige", "Black", "White"],
  },
  {
    id: 4,
    name: "Hoodies",
    image: productHoodie,
    price: 35,
    category: "Hoodies",
    description: "Cozy fleece lined",
    bestseller: true,
    colors: ["Black", "Gray", "Navy"],
  },
  {
    id: 5,
    name: "Caps",
    image: productCap,
    price: 18,
    category: "Caps",
    description: "Embroidered designs",
    bestseller: false,
    colors: ["Black", "White", "Navy"],
  },
  {
    id: 6,
    name: "Thermo Bottles",
    image: productThermo,
    price: 22,
    category: "Thermo Bottles",
    description: "Insulated stainless steel",
    bestseller: true,
    colors: ["Black", "White", "Blue"],
  },
  {
    id: 7,
    name: "Cups",
    image: productCups,
    price: 10,
    category: "Cups",
    description: "Custom branded cups",
    bestseller: false,
    colors: ["White", "Black"],
  },
  {
    id: 8,
    name: "Stationery",
    image: productStationery,
    price: 25,
    category: "Stationery",
    description: "Complete branding sets",
    bestseller: false,
    colors: ["White", "Beige"],
  },
  {
    id: 9,
    name: "Diary",
    image: productDiary,
    price: 20,
    category: "Diary",
    description: "Premium leather planners",
    bestseller: false,
    colors: ["Brown", "Black"],
  },
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [showFilters, setShowFilters] = useState(true);

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "All Products" ||
      product.category === selectedCategory;
    const colorMatch =
      selectedColors.length === 0 ||
      product.colors.some((c) => selectedColors.includes(c));
    const priceMatch =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    return categoryMatch && colorMatch && priceMatch;
  });

  const toggleColor = (colorName: string) => {
    setSelectedColors((prev) =>
      prev.includes(colorName)
        ? prev.filter((c) => c !== colorName)
        : [...prev, colorName]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        {/* Category Tabs */}
        <div className="border-b border-border bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
              {categories.slice(0, 6).map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm font-medium whitespace-nowrap rounded-full transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-accent"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="flex gap-8">
            {/* Sidebar Filters */}
            <aside
              className={`${
                showFilters ? "w-64" : "w-0"
              } shrink-0 transition-all duration-300 overflow-hidden`}
            >
              <div className="sticky top-28 space-y-8">
                {/* Categories */}
                <div>
                  <h3 className="font-semibold text-foreground mb-4">
                    Merchandise
                  </h3>
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li key={category}>
                        <button
                          onClick={() => setSelectedCategory(category)}
                          className={`text-sm transition-colors ${
                            selectedCategory === category
                              ? "text-primary font-medium"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {category}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Color Filter */}
                <div>
                  <h3 className="font-semibold text-foreground mb-4">Color</h3>
                  <div className="flex flex-wrap gap-2">
                    {colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => toggleColor(color.name)}
                        className={`w-7 h-7 rounded-full border-2 transition-all ${
                          selectedColors.includes(color.name)
                            ? "border-primary scale-110"
                            : "border-border hover:border-muted-foreground"
                        }`}
                        style={{ backgroundColor: color.value }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-semibold text-foreground mb-4">
                    Price Range
                  </h3>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={50}
                    step={1}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                {/* Clear Filters */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSelectedCategory("All Products");
                    setSelectedColors([]);
                    setPriceRange([0, 50]);
                  }}
                  className="w-full"
                >
                  Clear All Filters
                </Button>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowFilters(!showFilters)}
                    className="gap-2"
                  >
                    <Filter className="w-4 h-4" />
                    Filter
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    {filteredProducts.length} Products
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    Sort by:
                  </span>
                  <select className="text-sm bg-card border border-border rounded-md px-3 py-1.5 text-foreground">
                    <option>Bestsellers</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                  </select>
                </div>
              </div>

              {/* Products */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
                  >
                    <div className="relative">
                      {product.bestseller && (
                        <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground z-10">
                          Best Seller
                        </Badge>
                      )}
                      <Link to={`/product/${product.id}`}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </Link>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <Link to={`/product/${product.id}`}>
                          <h3 className="font-medium text-foreground hover:text-primary transition-colors">
                            {product.name}
                          </h3>
                        </Link>
                        <span className="font-semibold text-primary">
                          ${product.price}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-1">
                          {product.colors.slice(0, 3).map((color) => {
                            const colorObj = colors.find(
                              (c) => c.name === color
                            );
                            return (
                              <span
                                key={color}
                                className="w-4 h-4 rounded-full border border-border"
                                style={{
                                  backgroundColor: colorObj?.value || "#ccc",
                                }}
                                title={color}
                              />
                            );
                          })}
                        </div>
                        <Link to={`/product/${product.id}`}>
                          <Button size="sm" className="gap-1">
                            <Sparkles className="w-3 h-3" />
                            Customize
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-muted-foreground">
                    No products found matching your filters.
                  </p>
                  <Button
                    variant="link"
                    onClick={() => {
                      setSelectedCategory("All Products");
                      setSelectedColors([]);
                      setPriceRange([0, 50]);
                    }}
                  >
                    Clear all filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
