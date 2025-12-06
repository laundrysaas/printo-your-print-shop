import { useParams, Link } from "react-router-dom";
import { Star, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

import productTshirt from "@/assets/product-tshirt.jpg";
import productMug from "@/assets/product-mug.jpg";
import productBag from "@/assets/product-bag.jpg";
import productHoodie from "@/assets/product-hoodie.jpg";
import productCap from "@/assets/product-cap.jpg";
import productThermo from "@/assets/product-thermo.jpg";
import productCups from "@/assets/product-cups.jpg";
import productStationery from "@/assets/product-stationery.jpg";
import productDiary from "@/assets/product-diary.jpg";

const products = [
  {
    id: 1,
    name: "Custom T-Shirts",
    image: productTshirt,
    description: "Premium quality cotton",
    fullDescription: "Lightweight, comfortable fabric with a rich color palette at an affordable price. Semi-fitted; skims body, chest & arms. Perfect for custom printing and personalization.",
    price: "4.900",
    rating: 4.7,
    reviews: 3976,
    minQuantity: 1,
    colors: [
      { name: "Red", value: "hsl(0, 70%, 50%)" },
      { name: "Black", value: "hsl(0, 0%, 15%)" },
    ],
    isBestSeller: true,
  },
  {
    id: 2,
    name: "Ceramic Mugs",
    image: productMug,
    description: "Dishwasher safe",
    fullDescription: "High-quality ceramic mugs perfect for your morning coffee or tea. Dishwasher and microwave safe. Ideal for custom branding and personalized gifts.",
    price: "3.500",
    rating: 4.5,
    reviews: 2150,
    minQuantity: 6,
    colors: [
      { name: "White", value: "hsl(0, 0%, 95%)" },
      { name: "Black", value: "hsl(0, 0%, 15%)" },
    ],
    isBestSeller: false,
  },
  {
    id: 3,
    name: "Tote Bags",
    image: productBag,
    description: "Eco-friendly canvas",
    fullDescription: "Durable eco-friendly canvas tote bags. Perfect for shopping, events, or everyday use. Large printing area for your custom designs and logos.",
    price: "5.200",
    rating: 4.8,
    reviews: 1890,
    minQuantity: 10,
    colors: [
      { name: "Natural", value: "hsl(40, 30%, 85%)" },
      { name: "Black", value: "hsl(0, 0%, 15%)" },
    ],
    isBestSeller: true,
  },
  {
    id: 4,
    name: "Hoodies",
    image: productHoodie,
    description: "Cozy fleece lined",
    fullDescription: "Premium quality hoodies with soft fleece lining. Perfect for custom printing and embroidery. Available in multiple sizes and colors.",
    price: "12.500",
    rating: 4.6,
    reviews: 1456,
    minQuantity: 5,
    colors: [
      { name: "Grey", value: "hsl(0, 0%, 50%)" },
      { name: "Black", value: "hsl(0, 0%, 15%)" },
    ],
    isBestSeller: false,
  },
  {
    id: 5,
    name: "Caps",
    image: productCap,
    description: "Embroidered designs",
    fullDescription: "High-quality caps perfect for embroidered designs. Adjustable strap for comfortable fit. Great for sports teams, events, and promotional use.",
    price: "6.800",
    rating: 4.4,
    reviews: 980,
    minQuantity: 12,
    colors: [
      { name: "Navy", value: "hsl(220, 60%, 30%)" },
      { name: "Black", value: "hsl(0, 0%, 15%)" },
    ],
    isBestSeller: false,
  },
  {
    id: 6,
    name: "Thermo Bottles",
    image: productThermo,
    description: "Insulated stainless steel",
    fullDescription: "Premium insulated stainless steel bottles. Keeps drinks hot for 12 hours or cold for 24 hours. Perfect for laser engraving or full-color printing.",
    price: "8.900",
    rating: 4.9,
    reviews: 2340,
    minQuantity: 10,
    colors: [
      { name: "Silver", value: "hsl(0, 0%, 75%)" },
      { name: "Black", value: "hsl(0, 0%, 15%)" },
    ],
    isBestSeller: true,
  },
  {
    id: 7,
    name: "Cups",
    image: productCups,
    description: "Custom branded cups",
    fullDescription: "Durable plastic cups ideal for events, parties, and corporate branding. Available in various sizes. Perfect for full-color printing.",
    price: "2.100",
    rating: 4.3,
    reviews: 760,
    minQuantity: 50,
    colors: [
      { name: "Clear", value: "hsl(0, 0%, 90%)" },
      { name: "White", value: "hsl(0, 0%, 95%)" },
    ],
    isBestSeller: false,
  },
  {
    id: 8,
    name: "Stationery",
    image: productStationery,
    description: "Complete branding sets",
    fullDescription: "Complete stationery sets including letterheads, envelopes, and business cards. Premium paper quality with professional printing.",
    price: "15.000",
    rating: 4.7,
    reviews: 1120,
    minQuantity: 1,
    colors: [
      { name: "White", value: "hsl(0, 0%, 95%)" },
      { name: "Cream", value: "hsl(40, 40%, 90%)" },
    ],
    isBestSeller: false,
  },
  {
    id: 9,
    name: "Diary",
    image: productDiary,
    description: "Premium leather planners",
    fullDescription: "Premium leather-bound diaries and planners. Perfect for corporate gifts and personal use. Available with custom embossing and printing.",
    price: "9.500",
    rating: 4.8,
    reviews: 890,
    minQuantity: 5,
    colors: [
      { name: "Brown", value: "hsl(30, 50%, 30%)" },
      { name: "Black", value: "hsl(0, 0%, 15%)" },
    ],
    isBestSeller: false,
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]?.name || "");
  const [selectedSize, setSelectedSize] = useState("M");
  
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link to="/" className="text-primary hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 lg:px-8 py-8 lg:py-16">
        <Link 
          to="/#products" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Product Image */}
          <div>
            <div className="bg-muted rounded-2xl overflow-hidden mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="flex gap-2">
              <div className="w-20 h-20 border-2 border-foreground rounded-lg overflow-hidden cursor-pointer">
                <img
                  src={product.image}
                  alt={`${product.name} thumbnail`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div>
            {product.isBestSeller && (
              <Badge className="mb-4 bg-foreground text-background">
                Best Seller
              </Badge>
            )}
            
            <h1 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="text-muted-foreground">
                {product.rating} ({product.reviews.toLocaleString()})
              </span>
            </div>

            <div className="mb-2">
              <span className="text-2xl font-bold text-foreground">
                KD {product.price}
              </span>
            </div>
            <p className="text-muted-foreground mb-6">
              Minimum Quantity: {product.minQuantity}
            </p>

            {/* Color Selector */}
            <div className="mb-8">
              <h3 className="font-semibold text-foreground mb-3">Select Color</h3>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <div key={color.name} className="text-center">
                    <button
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-12 h-12 rounded-full border-2 transition-colors ${
                        selectedColor === color.name
                          ? "border-foreground ring-2 ring-foreground ring-offset-2"
                          : "border-border hover:border-foreground"
                      }`}
                      style={{ backgroundColor: color.value }}
                      aria-label={color.name}
                    />
                    <span className="text-sm text-muted-foreground mt-1 block">
                      {color.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="mb-8">
              <h3 className="font-semibold text-foreground mb-3">Select Size</h3>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-lg border-2 text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? "border-foreground bg-foreground text-background"
                        : "border-border hover:border-foreground text-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mb-8">
              <Link to={`/design/${id}?color=${selectedColor}`}>
                <Button className="w-full py-6 text-base">
                  Customize
                </Button>
              </Link>
            </div>

            {/* Product Details */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">Product Details</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.fullDescription}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
