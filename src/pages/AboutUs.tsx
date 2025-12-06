import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Printer, Users, Target, Award, Truck, Globe } from "lucide-react";
const AboutUs = () => {
  const features = [
    {
      icon: Award,
      text: "High-quality, customized printing solutions",
    },
    {
      icon: Users,
      text: "Expertise in both B2B and B2C projects",
    },
    {
      icon: Printer,
      text: "Diverse product range and advanced printing methods",
    },
    {
      icon: Target,
      text: "Dedicated in-house designers and specialists",
    },
    {
      icon: Globe,
      text: "Seamless online ordering experience",
    },
    {
      icon: Truck,
      text: "Reliable delivery across Kuwait",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Welcome to PRINTO™
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              PRINTO™ is a team of passionate printing experts united by a shared vision: to create high-quality,
              personalized merchandise that helps both businesses and individuals bring their ideas to life. What
              started as a commitment to craftsmanship and creativity soon evolved into a full-service custom printing
              brand and thus, PRINTO™ was born.
            </p>
          </div>
        </div>
      </section>

      {/* Trusted Partner Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Trusted Printing Partner in Kuwait
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Today, PRINTO™ is a trusted partner in the custom merchandise and printing industry, proudly serving
                  both <strong className="text-foreground">B2B and B2C markets across Kuwait</strong>. From
                  multinational corporations to entrepreneurs, students, and individuals expressing their creativity, we
                  deliver printing solutions that are reliable, professional, and tailored to every need.
                </p>
              </div>
              <div className="bg-accent/50 rounded-2xl p-8 lg:p-12">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our mission is simple yet powerful:{" "}
                  <strong className="text-foreground">
                    to help our clients tell their stories through exceptional, tailor-made products
                  </strong>
                  . Whether it's branded merchandise, corporate giveaways, academic documents, or personalized gifts,
                  every product we produce is designed to leave a lasting impression.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Expertise You Can Trust
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                At PRINTO™, quality is driven by people. Our in-house team of skilled designers and printing
                specialists works diligently at every stage from concept and design to printing and finishing to ensure
                the highest standards of quality, precision, and consistency.
              </p>
            </div>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 lg:p-12 text-center">
              <p className="text-lg leading-relaxed">
                With access to <strong>cutting-edge printing technologies</strong>, a diverse range of premium
                materials, and meticulous quality control, we ensure that every order meets our promise of excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Online Solutions Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Easy Online Printing Solutions
            </h2>
            <p className="text-muted-foreground leading-relaxed text-center mb-12 max-w-3xl mx-auto">
              We believe printing should be convenient and stress-free. With PRINTO's online platform, you can configure
              and order your printed and bound materials from the comfort of your home. There's no need to wait in line
              even during peak submission periods, simply upload your files, customize your order, and place it directly
              online.
            </p>

            <div className="bg-secondary/50 rounded-2xl p-8 lg:p-12">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Academic Printing Made Simple</h3>
              <p className="text-muted-foreground mb-6">For academic papers and documents, we offer:</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-foreground rounded-full"></span>
                  <span className="text-muted-foreground">
                    A wide selection of <span style={{ color: '#7c736a' }}>premium binding options</span>
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-foreground rounded-full"></span>
                  <span className="text-muted-foreground">
                    Extensive <span style={{ color: '#7c736a' }}>customization choices</span>
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-foreground rounded-full"></span>
                  <span className="text-muted-foreground">Professional printing and binding quality</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Once your order is ready, we deliver it straight to your home or preferred location, allowing you to
                receive your printed work without ever leaving the house. Enjoy{" "}
                <span style={{ color: '#7c736a' }}>express delivery</span> and peace of mind knowing your work is in
                expert hands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Why Choose PRINTO™
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-background rounded-xl p-6 flex items-start gap-4 shadow-sm border border-border"
                >
                  <feature.icon className="w-6 h-6 text-foreground flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Looking Ahead Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Looking Ahead</h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
              As PRINTO™ continues to grow and innovate, our commitment remains unchanged:{" "}
              <strong className="text-foreground">to create memorable experiences through print</strong>. By combining
              creativity, technology, and exceptional customer service, we strive to exceed expectations with every
              order.
            </p>
            <p className="font-serif text-xl md:text-2xl font-semibold text-foreground">
              PRINTO™ — your partner in premium printing and personalized merchandise.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default AboutUs;
