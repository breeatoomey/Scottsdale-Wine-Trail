import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/wineries", label: "Wineries" },
    { href: "/wine-trail-map", label: "Trail Map" },
    { href: "/wine-trail-passport", label: "Passport" },
    { href: "/events", label: "Events" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/98 backdrop-blur-md shadow-lg" 
          : "bg-white/95 backdrop-blur-md shadow-lg"
      }`}
      data-testid="main-navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" data-testid="logo-link">
              <img 
                src="https://www.scottsdalewinetrail.com/wp-content/uploads/2016/08/SWT-Logo-black214x100.png" 
                alt="Scottsdale Wine Trail" 
                className="h-12 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href}
                  data-testid={`nav-link-${item.label.toLowerCase().replace(' ', '-')}`}
                >
                  <span className={`text-gray-700 hover:text-burgundy-500 px-3 py-2 text-sm font-medium transition-colors cursor-pointer ${
                    location === item.href ? "text-burgundy-500" : ""
                  }`}>
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  data-testid="mobile-menu-trigger"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link 
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      data-testid={`mobile-nav-link-${item.label.toLowerCase().replace(' ', '-')}`}
                    >
                      <span className={`block px-3 py-2 text-base font-medium text-gray-700 hover:text-burgundy-500 transition-colors cursor-pointer ${
                        location === item.href ? "text-burgundy-500" : ""
                      }`}>
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
