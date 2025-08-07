import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section 
      className="relative h-screen parallax-hero flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(139, 21, 56, 0.4), rgba(114, 47, 55, 0.4)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`
      }}
      data-testid="hero-section"
    >
      <div className="text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Discover Arizona's
          <span className="text-gold-400 block">Premier Wine Trail</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed">
          Seven award-winning wineries within walking distance in downtown Scottsdale
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/wineries">
            <Button 
              className="gold-gradient text-white px-8 py-4 text-lg font-semibold rounded-lg hover:opacity-90 transition-all transform hover:scale-105"
              data-testid="button-explore-wineries"
            >
              <i className="fas fa-wine-glass-alt mr-2"></i>
              Explore Wineries
            </Button>
          </Link>
          <Link href="/wine-trail-map">
            <Button 
              variant="outline"
              className="bg-white/20 backdrop-blur-md text-white border-white/30 px-8 py-4 text-lg font-semibold rounded-lg hover:bg-white/30 transition-all"
              data-testid="button-view-trail-map"
            >
              <i className="fas fa-map-marked-alt mr-2"></i>
              View Trail Map
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
