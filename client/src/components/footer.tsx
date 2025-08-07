import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="wine-gradient text-white py-12" data-testid="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img 
              src="https://www.scottsdalewinetrail.com/wp-content/uploads/2016/08/SWT-Logo-black214x100.png" 
              alt="Scottsdale Wine Trail" 
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/80 text-sm leading-relaxed">
              Discover Arizona's premier wine destination in downtown Scottsdale's entertainment district.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/"><span className="text-white/80 hover:text-gold-400 transition-colors cursor-pointer">Home</span></Link></li>
              <li><Link href="/about"><span className="text-white/80 hover:text-gold-400 transition-colors cursor-pointer">About</span></Link></li>
              <li><Link href="/wineries"><span className="text-white/80 hover:text-gold-400 transition-colors cursor-pointer">Wineries</span></Link></li>
              <li><Link href="/wine-trail-map"><span className="text-white/80 hover:text-gold-400 transition-colors cursor-pointer">Trail Map</span></Link></li>
              <li><Link href="/events"><span className="text-white/80 hover:text-gold-400 transition-colors cursor-pointer">Events</span></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/wine-trail-passport"><span className="text-white/80 hover:text-gold-400 transition-colors cursor-pointer">Wine Passport</span></Link></li>
              <li><a href="#" className="text-white/80 hover:text-gold-400 transition-colors">Group Bookings</a></li>
              <li><a href="#" className="text-white/80 hover:text-gold-400 transition-colors">Press Kit</a></li>
              <li><Link href="/contact"><span className="text-white/80 hover:text-gold-400 transition-colors cursor-pointer">Contact</span></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-gold-400 transition-colors" data-testid="social-facebook">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="text-white/80 hover:text-gold-400 transition-colors" data-testid="social-instagram">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-white/80 hover:text-gold-400 transition-colors" data-testid="social-twitter">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-white/80 hover:text-gold-400 transition-colors" data-testid="social-youtube">
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
            <div className="mt-4">
              <p className="text-white/80 text-sm">Downtown Scottsdale</p>
              <p className="text-white/80 text-sm">Scottsdale, AZ 85251</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2024 Scottsdale Wine Trail. All rights reserved. Drink responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
}
