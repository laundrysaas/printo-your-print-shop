import productMug from "@/assets/product-mug.jpg";
import { ArrowDownRight } from "lucide-react";
const Introduction = () => {
  return <section className="py-20 lg:py-32" id="custom">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-4xl">☕</span>
            </div>
            <h2 className="font-serif text-5xl lg:text-7xl font-bold text-foreground leading-[0.95] mb-6">
              Custom
              <br />
              Design
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-md mb-8">
              Whether you have a finished concept or just a starting point, our in-house designers transform your vision into print-ready designs tailored for business branding or personal creativity
            </p>
            <button className="flex items-center gap-2 text-foreground font-medium group">
              <span>Learn More</span>
              <ArrowDownRight className="h-5 w-5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-4">
            <img alt="Custom printed ceramic mug with personalized design" className="w-full aspect-[4/3] object-cover" src="/lovable-uploads/3add2519-4d2e-4ce1-bf88-4a42951e9596.png" />
          </div>
        </div>
      </div>
    </section>;
};
export default Introduction;