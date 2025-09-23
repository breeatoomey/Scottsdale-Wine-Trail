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
      <section className="relative overflow-hidden">
        {/* Rounded container with darker burgundy gradient */}
        <div className="max-w-6xl mx-auto relative z-10 bg-gradient-to-br from-[#6b1e31] via-[#751f36] to-[#5d1a2b] rounded-3xl shadow-xl px-4 sm:px-8 lg:px-12 py-16">
          <h2 className="font-serif text-4xl mb-3 text-white text-center">
            Stay Updated on Events
          </h2>
          <p className="text-white/90 mb-8 text-center text-lg">
            News, exclusive offers, and trail updates—no spam.
          </p>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl ring-1 ring-black/10 max-w-2xl mx-auto">
            <form className="flex flex-col sm:flex-row gap-3 items-stretch">
              <label htmlFor="nl-email" className="sr-only">
                Email
              </label>

              <input
                id="nl-email"
                type="email"
                placeholder="Enter your email address"
                required
                className="flex-1 rounded-lg bg-white text-gray-900 placeholder:text-gray-500 
                          px-4 py-3 text-sm shadow-sm ring-1 ring-gray-300
                          focus:outline-none focus:ring-2 focus:ring-[#6b1e31]"
              />

              <button
                type="submit"
                className="shrink-0 rounded-lg px-5 py-3 text-sm font-semibold
                          bg-[#6b1e31] text-white hover:bg-[#5d1a2b]
                          focus:outline-none focus:ring-2 focus:ring-[#6b1e31] transition shadow-md"
              >
                Subscribe
              </button>
            </form>

            <p className="text-gray-700 text-sm mt-4 text-center">
              You can unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
