import { useEffect } from "react";
import HeroSection from "@/components/hero-section";
import WineryCard from "@/components/winery-card";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { wineries, events, testimonials } from "@/lib/data";

export default function Home() {
  useEffect(() => {
    document.title = "Scottsdale Wine Trail - Arizona's Premier Wine Destination";
  }, []);

  return (
    <div data-testid="home-page">
      <HeroSection />
      
      {/* About Section */}
      <section className="py-20 bg-cream" data-testid="about-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About the Scottsdale Wine Trail
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Downtown Scottsdale is a destination for Arizona wine tasting! Seven Arizona wineries with tasting rooms within walking distance have joined forces to create Arizona's premier wine experience.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Arizona vineyard landscape" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                This cooperative of wineries united to advance education and exposure for Arizona produced wines and the growing wine industry statewide. Six of the wineries produce award-winning wines that are available for tasting and purchase at unique tasting rooms in the heart of Scottsdale's entertainment district.
              </p>
              <blockquote className="border-l-4 border-gold-400 pl-6 italic text-lg text-gray-600">
                "It was time to join forces and encourage residents and visitors alike to embrace our thriving Scottsdale wine, culinary, and entertainment scene."
                <footer className="mt-2 font-semibold text-burgundy-600">
                  — Peggy Fiandaca, LDV Winery Co-Owner
                </footer>
              </blockquote>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-burgundy-600 font-serif">7</div>
                  <div className="text-sm text-gray-600">Wineries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-burgundy-600 font-serif">100+</div>
                  <div className="text-sm text-gray-600">Award-Winning Wines</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-burgundy-600 font-serif">1</div>
                  <div className="text-sm text-gray-600">Historic District</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Wineries */}
      <section className="py-20 bg-white" data-testid="featured-wineries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Wineries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover three of our most popular wine destinations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {wineries.slice(0, 3).map((winery) => (
              <WineryCard key={winery.id} winery={winery} />
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/wineries">
              <Button 
                className="gold-gradient text-white px-8 py-4 text-lg font-semibold rounded-lg hover:opacity-90 transition-all transform hover:scale-105"
                data-testid="button-view-all-wineries"
              >
                View All Wineries
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="py-20 bg-cream" data-testid="events-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for exclusive wine events and tastings
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {events.map((event) => (
              <Card key={event.id} className="card-hover-effect bg-gradient-to-br from-white to-cream border border-gold-200 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      event.category === 'Festival' ? 'wine-gradient text-white' :
                      event.category === 'Dinner' ? 'gold-gradient text-burgundy-800' :
                      'bg-burgundy-100 text-burgundy-700'
                    }`}>
                      {event.category}
                    </span>
                    <span className="text-gray-500 text-sm">{event.date}</span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {event.description}
                  </p>
                  <Button 
                    variant="ghost"
                    className="text-burgundy-600 font-semibold hover:text-burgundy-800 transition-colors text-sm"
                    data-testid={`button-event-${event.id}`}
                  >
                    Learn More & RSVP →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/events">
              <Button 
                className="wine-gradient text-white px-8 py-4 text-lg font-semibold rounded-lg hover:opacity-90 transition-all"
                data-testid="button-view-all-events"
              >
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 wine-gradient text-white" data-testid="testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              What Our Visitors Say
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover why the Scottsdale Wine Trail has become Arizona's premier wine destination
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="flex text-gold-400 mr-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-lg italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <footer className="flex items-center">
                    <div className="w-12 h-12 bg-gold-400 rounded-full flex items-center justify-center text-burgundy-800 font-bold mr-3">
                      {testimonial.initials}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-white/70 text-sm">{testimonial.location}</div>
                    </div>
                  </footer>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
