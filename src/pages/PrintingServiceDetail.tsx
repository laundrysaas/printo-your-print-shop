import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Upload, Minus, Plus, Heart } from "lucide-react";

const serviceData: Record<string, { title: string; subtitle: string; pricePerUnit: string }> = {
  stickers: {
    title: "Custom Stickers",
    subtitle: "For KD 0.05 Per Sticker",
    pricePerUnit: "0.050",
  },
  papers: {
    title: "Document Printing",
    subtitle: "For KD 0.10 Per B&W Page",
    pricePerUnit: "0.100",
  },
  cards: {
    title: "Business Cards",
    subtitle: "For KD 0.15 Per Card",
    pricePerUnit: "0.150",
  },
  notebooks: {
    title: "Custom Notebooks",
    subtitle: "For KD 2.50 Per Notebook",
    pricePerUnit: "2.500",
  },
};

const PrintingServiceDetail = () => {
  const { id } = useParams();
  const service = id ? serviceData[id] : null;

  const [orientation, setOrientation] = useState("portrait");
  const [copies, setCopies] = useState(1);
  const [colorMode, setColorMode] = useState("bw");
  const [sides, setSides] = useState("single");
  const [finishing, setFinishing] = useState("stapled");
  const [fileCheck, setFileCheck] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [pageCount, setPageCount] = useState(12);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Service not found</h1>
            <Link to="/#services" className="text-primary hover:underline">
              Back to Services
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const basePrice = parseFloat(service.pricePerUnit) * pageCount * quantity;
  const total = basePrice.toFixed(3);

  return (
    <div className="min-h-screen flex flex-col bg-secondary/30">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 lg:py-12">
        <Link
          to="/#services"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Services
        </Link>

        <div className="mb-8">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
            ONLINE DOCUMENT PRINTING SERVICE
          </p>
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-foreground">
            {service.title} by <span className="text-primary">PRINTO</span>
          </h1>
          <p className="text-muted-foreground mt-1">{service.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Configuration */}
          <div className="lg:col-span-2 space-y-6">
            {/* Format Section */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="font-semibold text-foreground mb-4">Format</h2>
              
              <div className="space-y-4">
                <div>
                  <Label className="text-xs text-muted-foreground uppercase">Paper Size</Label>
                  <Select defaultValue="letter">
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="letter">Letter — 8.5 × 11 in</SelectItem>
                      <SelectItem value="a4">A4 — 210 × 297 mm</SelectItem>
                      <SelectItem value="legal">Legal — 8.5 × 14 in</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-xs text-muted-foreground uppercase">Orientation</Label>
                  <RadioGroup value={orientation} onValueChange={setOrientation} className="flex gap-4 mt-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="portrait" id="portrait" />
                      <Label htmlFor="portrait" className="font-normal cursor-pointer">Portrait</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="landscape" id="landscape" />
                      <Label htmlFor="landscape" className="font-normal cursor-pointer">Landscape</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>

            {/* PDF Upload Section */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="font-semibold text-foreground mb-4">PDF Upload</h2>
              
              <div className="space-y-4">
                <div>
                  <Label className="text-xs text-muted-foreground uppercase">Select PDF</Label>
                  <Button variant="outline" className="w-full mt-1 justify-start">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload PDF
                  </Button>
                </div>

                <div>
                  <Label className="text-xs text-muted-foreground uppercase">Auto Page Count</Label>
                  <Input value={pageCount} readOnly className="mt-1 bg-muted" />
                </div>

                <div>
                  <Label className="text-xs text-muted-foreground uppercase">Copies</Label>
                  <div className="flex items-center gap-2 mt-1">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setCopies(Math.max(1, copies - 1))}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Input
                      type="number"
                      value={copies}
                      onChange={(e) => setCopies(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-16 text-center"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setCopies(copies + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <Label className="text-xs text-muted-foreground uppercase">Color Mode</Label>
                  <RadioGroup value={colorMode} onValueChange={setColorMode} className="flex gap-4 mt-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="bw" id="bw" />
                      <Label htmlFor="bw" className="font-normal cursor-pointer">Black & White</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="color" id="color" />
                      <Label htmlFor="color" className="font-normal cursor-pointer">Color</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>

            {/* Paper & Printing Section */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="font-semibold text-foreground mb-4">Paper & Printing</h2>
              
              <div className="space-y-4">
                <div>
                  <Label className="text-xs text-muted-foreground uppercase">Sides</Label>
                  <RadioGroup value={sides} onValueChange={setSides} className="flex gap-4 mt-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="single" id="single" />
                      <Label htmlFor="single" className="font-normal cursor-pointer">Single-sided</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="double" id="double" />
                      <Label htmlFor="double" className="font-normal cursor-pointer">Double-sided</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-xs text-muted-foreground uppercase">Paper Weight</Label>
                  <Select defaultValue="80">
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select weight" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="80">80 gsm (standard)</SelectItem>
                      <SelectItem value="100">100 gsm</SelectItem>
                      <SelectItem value="120">120 gsm</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <Label className="text-xs text-muted-foreground uppercase">Advanced</Label>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Print without header/footer</span>
                    <Switch />
                  </div>
                </div>
              </div>
            </div>

            {/* Layout Section */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="font-semibold text-foreground mb-4">Layout</h2>
              
              <div className="space-y-4">
                <div>
                  <Label className="text-xs text-muted-foreground uppercase">Pages Per Sheet</Label>
                  <Select defaultValue="1">
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select layout" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 per sheet</SelectItem>
                      <SelectItem value="2">2 per sheet</SelectItem>
                      <SelectItem value="4">4 per sheet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-xs text-muted-foreground uppercase">Margins Preset</Label>
                  <Select defaultValue="standard">
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select margins" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="narrow">Narrow</SelectItem>
                      <SelectItem value="wide">Wide</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Finishing Section */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="font-semibold text-foreground mb-4">Finishing</h2>
              
              <RadioGroup value={finishing} onValueChange={setFinishing} className="space-y-3">
                <div className="flex items-start space-x-3 p-3 border border-border rounded-lg">
                  <RadioGroupItem value="stapled" id="stapled" className="mt-1" />
                  <div>
                    <Label htmlFor="stapled" className="font-normal cursor-pointer">Stapled</Label>
                    <p className="text-xs text-muted-foreground">per job · <span className="line-through">KWD 3.500</span></p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 border border-border rounded-lg">
                  <RadioGroupItem value="spiral" id="spiral" className="mt-1" />
                  <div>
                    <Label htmlFor="spiral" className="font-normal cursor-pointer">Spiral Binding</Label>
                    <p className="text-xs text-muted-foreground">per job · <span className="line-through">KWD 2.300</span></p>
                  </div>
                </div>
              </RadioGroup>
            </div>

            {/* Extras & Accessories */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="font-semibold text-foreground mb-4">Extras & Accessories</h2>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 border border-border rounded-lg">
                  <input type="checkbox" id="sleeve" className="mt-1" />
                  <div>
                    <Label htmlFor="sleeve" className="font-normal cursor-pointer">Document Sleeve</Label>
                    <p className="text-xs text-muted-foreground">per job · KWD 0.750</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 border border-border rounded-lg">
                  <input type="checkbox" id="tabs" className="mt-1" />
                  <div>
                    <Label htmlFor="tabs" className="font-normal cursor-pointer">Index Tabs</Label>
                    <p className="text-xs text-muted-foreground">per page · KWD 0.050</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Check / File Review */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="font-semibold text-foreground mb-4">Data Check / File Review</h2>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Recommended file check</p>
                  <p className="text-sm text-muted-foreground">Catch low resolution, missing bleeds, and layout issues.</p>
                </div>
                <Switch checked={fileCheck} onCheckedChange={setFileCheck} />
              </div>
            </div>

            {/* Comments */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="font-semibold text-foreground mb-4">Comments on your order</h2>
              <Textarea
                placeholder="Anything we should know? e.g., 'Print last page on 120 gsm'"
                className="min-h-[100px]"
              />
            </div>
          </div>

          {/* Sidebar Summary */}
          <div className="space-y-6">
            {/* Summary */}
            <div className="bg-card rounded-lg border border-border p-6 sticky top-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-foreground">Summary</h2>
                <Button variant="ghost" size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Total</span>
                  <span className="text-2xl font-bold text-foreground">KWD {total}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Quantity (sets)</span>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <Input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-12 h-8 text-center"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  Add to Cart
                </Button>
              </div>
            </div>

            {/* Price Calculation */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="font-semibold text-foreground mb-4">Price calculation</h2>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Pages (B&W)</span>
                  <span className="text-muted-foreground">×{pageCount}</span>
                  <span className="text-foreground">KWD {(parseFloat(service.pricePerUnit) * pageCount).toFixed(3)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground">KWD {total}</span>
                </div>
                <div className="flex justify-between font-semibold pt-2 border-t border-border">
                  <span className="text-foreground">Total</span>
                  <span className="text-foreground">KWD {total}</span>
                </div>
              </div>
            </div>

            {/* Delivery Options */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="font-semibold text-foreground mb-4">Delivery Options</h2>
              
              <div className="space-y-4">
                <div>
                  <Label className="text-xs text-muted-foreground uppercase">Delivery Day</Label>
                  <Select defaultValue="normal">
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select delivery" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="normal">Normal Delivery</SelectItem>
                      <SelectItem value="express">Express Delivery</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <p className="text-xs text-muted-foreground flex items-center gap-2">
                  <input type="checkbox" />
                  Order before 5 PM for next-day processing
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrintingServiceDetail;
