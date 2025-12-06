import { Link } from "react-router-dom";
const Footer = () => {
  const footerLinks = {
    socialMedia: [{
      name: "Facebook",
      href: "#"
    }, {
      name: "Instagram",
      href: "#"
    }, {
      name: "TikTok",
      href: "#"
    }, {
      name: "LinkedIn",
      href: "#"
    }],
    support: [{
      name: "FAQs",
      href: "#"
    }, {
      name: "Contact Us",
      href: "#"
    }, {
      name: "Privacy Policy",
      href: "#"
    }, {
      name: "Refund Policy",
      href: "#"
    }],
    corporate: [{
      name: "Careers",
      href: "#"
    }, {
      name: "About Us",
      href: "/about",
      isRoute: true
    }, {
      name: "B2B Services",
      href: "#"
    }, {
      name: "Bulk Orders",
      href: "#"
    }]
  };
  return <footer className="py-12 lg:py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Social Media</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.socialMedia.map(link => <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Support</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.support.map(link => <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Corporate */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Corporate</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.corporate.map(link => <li key={link.name}>
                  {link.isRoute ? <Link to={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                      {link.name}
                    </Link> : <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                      {link.name}
                    </a>}
                </li>)}
            </ul>
          </div>

          {/* Brand */}
          <div>
            <span className="font-serif text-2xl font-bold text-foreground">PRINTO</span>
            <p className="text-muted-foreground text-sm mt-2">
              Your trusted partner in the custom merchandise and printing industry, proudly serving both B2B &amp; B2C markets across Kuwait
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">© 2025, PRINTO All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;