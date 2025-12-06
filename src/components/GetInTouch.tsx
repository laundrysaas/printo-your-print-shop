import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const GetInTouch = () => {
  return <section className="py-20 lg:py-32 bg-primary text-primary-foreground" id="contact">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="font-serif text-5xl lg:text-8xl xl:text-[10rem] font-bold text-center leading-none mb-12 lg:mb-20 tracking-tight">
          GET IN TOUCH
        </h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16 lg:mb-24">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="text-xl">📦</span>
              <h3 className="font-semibold text-lg">Shipping</h3>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              In-stock items shipped via White Glove or standard will 
              typically ship within 2-3 weeks of purchase, unless 
              otherwise noted. Transit can take up to 14 business 
              days.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="text-xl">🚚</span>
              <h3 className="font-semibold text-lg">Delivery</h3>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Delivery requires an appointment and signature. A two-
              person team will bring the item inside, place it in your 
              chosen room, assemble it, and remove packaging 
              debris.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="text-xl">↩️</span>
              <h3 className="font-semibold text-lg">Returns</h3>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Please verify that the item aligns with your specific 
              requirements before completing the purchase, as it 
              does not qualify for free returns and incurs a 15% 
              restocking fee.
            </p>
          </div>
        </div>

        {/* Newsletter */}
        <div className="max-w-md mx-auto text-center">
          <h3 className="font-semibold text-lg mb-2">Print More. Pay Less.</h3>
          <p className="text-primary-foreground/80 text-sm mb-4">
            Sign Up For Our Email List And Receive 10% Off Your First Order
          </p>
          <div className="flex gap-2">
            <Input type="email" placeholder="Your Email Address" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50" />
            <Button variant="secondary" className="shrink-0">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default GetInTouch;