import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section 
      className="relative h-screen parallax-hero flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(55, 0, 60, 0.6), rgba(20, 0, 30, 0.8)), url('https://assets.experiencescottsdale.com/simpleview/image/upload/c_fill,h_857,q_75,w_1500/v1/crm/scottsdale/Main-Street-Galleries-10-8e0f46305056b3a_8e0f4824-5056-b3a8-49577c01588a2e6d.gif'`
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
