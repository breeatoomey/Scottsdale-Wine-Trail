import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { events } from "@/lib/data";

export default function Events() {
  useEffect(() => {
    document.title = "Events - Scottsdale Wine Trail";
  }, []);

  return (
    <div className="pt-20" data-testid="events-page">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Upcoming Events
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for exclusive wine events, tastings, and educational experiences throughout the year
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {events.map((event) => (
              <Card key={event.id} className="card-hover-effect bg-gradient-to-br from-white to-cream border border-gold-200 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge 
                      variant="secondary"
                      className={
                        event.category === 'Festival' ? 'wine-gradient text-white' :
                        event.category === 'Dinner' ? 'gold-gradient text-burgundy-800' :
                        'bg-burgundy-100 text-burgundy-700'
                      }
                    >
                      {event.category}
                    </Badge>
                    <span className="text-gray-500 text-sm">{event.date}</span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {event.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-map-marker-alt mr-2 text-burgundy-600"></i>
                      {event.location}
                    </div>
                    {event.price && (
                      <div className="flex items-center text-sm text-gray-600">
                        <i className="fas fa-ticket-alt mr-2 text-burgundy-600"></i>
                        {event.price}
                      </div>
                    )}
                  </div>
                  <Button 
                    className="w-full text-burgundy-600 font-semibold hover:text-burgundy-800 transition-colors text-sm"
                    variant="ghost"
                    data-testid={`button-rsvp-${event.id}`}
                  >
                    Learn More & RSVP →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Event Categories */}
          <div className="bg-cream rounded-3xl p-8 md:p-12">
            <h2 className="font-serif text-3xl font-bold text-gray-900 text-center mb-12">
              Event Categories
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  category: "Wine Festivals",
                  icon: "fas fa-glass-cheers",
                  description: "Seasonal celebrations with multiple wineries"
                },
                {
                  category: "Educational Classes",
                  icon: "fas fa-graduation-cap",
                  description: "Learn about Arizona wines and winemaking"
                },
                {
                  category: "Wine Dinners",
                  icon: "fas fa-utensils",
                  description: "Multi-course meals with wine pairings"
                },
                {
                  category: "Private Events",
                  icon: "fas fa-users",
                  description: "Corporate and group bookings available"
                }
              ].map((category) => (
                <Card key={category.category} className="text-center bg-white shadow-md">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 wine-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className={`${category.icon} text-2xl text-gold-400`}></i>
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">
                      {category.category}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 wine-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Stay Updated on Events
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Subscribe to our newsletter to be the first to know about upcoming wine events and exclusive tastings
          </p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto">
            <form className="flex flex-col sm:flex-row gap-4" data-testid="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-gold-400"
                data-testid="input-newsletter-email"
              />
              <Button 
                type="submit"
                className="gold-gradient text-burgundy-800 px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
                data-testid="button-newsletter-subscribe"
              >
                Subscribe
              </Button>
            </form>
            <p className="text-white/70 text-sm mt-4">
              No spam, just wine events and special offers. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
