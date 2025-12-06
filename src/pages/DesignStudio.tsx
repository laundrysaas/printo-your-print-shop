import { useParams, Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, Upload, Type, Image, Hash } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  { id: 1, name: "Custom T-Shirts", image: productTshirt, colors: ["Red", "Black", "White", "Navy"] },
  { id: 2, name: "Ceramic Mugs", image: productMug, colors: ["White", "Black"] },
  { id: 3, name: "Tote Bags", image: productBag, colors: ["Natural", "Black"] },
  { id: 4, name: "Hoodies", image: productHoodie, colors: ["Grey", "Black", "Navy"] },
  { id: 5, name: "Caps", image: productCap, colors: ["Navy", "Black", "White"] },
  { id: 6, name: "Thermo Bottles", image: productThermo, colors: ["Silver", "Black"] },
  { id: 7, name: "Cups", image: productCups, colors: ["Clear", "White"] },
  { id: 8, name: "Stationery", image: productStationery, colors: ["White", "Cream"] },
  { id: 9, name: "Diary", image: productDiary, colors: ["Brown", "Black"] },
];

const DesignStudio = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const product = products.find((p) => p.id === Number(id));
  
  const [activeView, setActiveView] = useState<"front" | "back" | "sleeve">("front");
  const [selectedColor, setSelectedColor] = useState(searchParams.get("color") || product?.colors[0] || "Red");

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

  const views = ["Front", "Back", "Sleeve"] as const;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border px-4 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link 
              to={`/product/${id}`}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back</span>
            </Link>
            <h1 className="font-serif text-lg lg:text-xl font-bold text-foreground">
              Design Studio — {product.name}
            </h1>
          </div>
          
          <div className="flex items-center gap-2 lg:gap-4">
            {/* View Tabs */}
            <div className="hidden md:flex bg-muted rounded-lg p-1">
              {views.map((view) => (
                <button
                  key={view}
                  onClick={() => setActiveView(view.toLowerCase() as typeof activeView)}
                  className={`px-3 lg:px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeView === view.toLowerCase()
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {view}
                </button>
              ))}
            </div>
            
            <Button variant="outline">
              Save Design
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-73px)]">
        {/* Left Sidebar - Design Tools */}
        <aside className="w-full lg:w-80 border-b lg:border-b-0 lg:border-r border-border p-4 lg:p-6">
          <div className="border border-border rounded-lg p-4 mb-4">
            <h3 className="font-semibold text-foreground mb-4">Design Tools</h3>
            <div className="space-y-3">
              <Button className="w-full justify-start gap-2">
                <Upload className="w-4 h-4" />
                Upload Image
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <Type className="w-4 h-4" />
                Add Text
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <Image className="w-4 h-4" />
                Add Clipart
              </Button>
              <Button className="w-full justify-start gap-2 bg-amber-100 text-amber-900 hover:bg-amber-200 border border-amber-300">
                <Hash className="w-4 h-4" />
                Add Names & Numbers
              </Button>
            </div>
          </div>

          <div className="border border-border rounded-lg p-4">
            <h3 className="font-semibold text-foreground mb-4">Quick Start</h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="border-2 border-dashed border-border rounded-lg p-4 text-center hover:border-foreground transition-colors">
                <Upload className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Upload Image</span>
              </button>
              <button className="border-2 border-dashed border-border rounded-lg p-4 text-center hover:border-foreground transition-colors">
                <Type className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Add Text</span>
              </button>
              <button className="border-2 border-dashed border-border rounded-lg p-4 text-center hover:border-foreground transition-colors">
                <Image className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Add Clipart</span>
              </button>
              <button className="border-2 border-dashed border-border rounded-lg p-4 text-center hover:border-foreground transition-colors">
                <span className="text-sm text-muted-foreground">Change Product</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Center - Canvas Area */}
        <main className="flex-1 flex items-center justify-center p-4 lg:p-8 bg-muted/30">
          <div className="relative w-full max-w-lg aspect-[3/4] bg-muted rounded-2xl flex items-center justify-center">
            {/* Product Preview */}
            <img
              src={product.image}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-20"
            />
            
            {/* Design Zone */}
            <div className="relative w-3/5 aspect-[3/4] border-2 border-dashed border-muted-foreground/50 rounded-lg flex items-center justify-center bg-background/50">
              <span className="text-muted-foreground text-sm text-center px-4">
                Drop your design here or use the tools
              </span>
            </div>
          </div>
        </main>

        {/* Right Sidebar - Product Info */}
        <aside className="w-full lg:w-80 border-t lg:border-t-0 lg:border-l border-border p-4 lg:p-6">
          <div className="border border-border rounded-lg p-4 mb-4">
            <h3 className="font-semibold text-foreground mb-4">Product Views</h3>
            <div className="flex gap-2 mb-4">
              {views.map((view) => (
                <button
                  key={view}
                  onClick={() => setActiveView(view.toLowerCase() as typeof activeView)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeView === view.toLowerCase()
                      ? "bg-foreground text-background"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {view}
                </button>
              ))}
            </div>
            
            <div className="mb-4">
              <p className="font-medium text-foreground">{product.name}</p>
              <p className="text-muted-foreground text-sm">Color: {selectedColor}</p>
            </div>
            
            <div className="flex gap-2 mb-4">
              <Button variant="outline" size="sm" className="flex-1">
                Change Product
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                Change Color
              </Button>
            </div>
            
            <Button className="w-full">
              Add More Products
            </Button>
          </div>

          <div className="border border-border rounded-lg p-4">
            <h3 className="font-semibold text-foreground mb-4">Layers (0)</h3>
            <p className="text-muted-foreground text-sm text-center py-4">
              No layers yet
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DesignStudio;
