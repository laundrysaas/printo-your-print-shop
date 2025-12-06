const Footer = () => {
  const footerLinks = {
    socialMedia: [
      { name: "Facebook", href: "#" },
      { name: "Instagram", href: "#" },
      { name: "TikTok", href: "#" },
    ],
    customerSupport: [
      { name: "Top Questions", href: "#" },
      { name: "Start a Return", href: "#" },
      { name: "Size Guide", href: "#" },
      { name: "Gift Card", href: "#" },
    ],
    theCompany: [
      { name: "Careers", href: "#" },
      { name: "About Us", href: "#" },
      { name: "Customer Reviews", href: "#" },
      { name: "Accessibility", href: "#" },
    ],
  };

  return (
    <footer className="py-12 lg:py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Social Media</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.socialMedia.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Customer Support</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.customerSupport.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* The Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">The Company</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.theCompany.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand */}
          <div>
            <span className="font-serif text-2xl font-bold text-foreground">PRINTO</span>
            <p className="text-muted-foreground text-sm mt-2">
              Premium custom printing solutions for individuals and businesses.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2024, PRINTO All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
