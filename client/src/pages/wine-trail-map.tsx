import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function WineTrailMap() {
  useEffect(() => {
    document.title = "Wine Trail Map - Scottsdale Wine Trail";
  }, []);

  return (
    <div className="pt-20" data-testid="wine-trail-map-page">
      <section className="py-20 wine-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Wine Trail Map
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              All seven wineries are conveniently located within walking distance in downtown Scottsdale's entertainment district
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div 
                  className="bg-white/20 rounded-2xl p-8 text-center min-h-[400px] flex items-center justify-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="bg-black/50 rounded-lg p-6 backdrop-blur-sm">
                    <i className="fas fa-map-marked-alt text-6xl text-gold-400 mb-4"></i>
                    <h3 className="font-serif text-2xl font-bold mb-4">Interactive Map Coming Soon</h3>
                    <p className="text-white/90 mb-6">Navigate between all seven wineries with our detailed walking map</p>
                    <Button 
                      className="bg-gold-400 text-burgundy-800 px-6 py-3 rounded-lg font-semibold hover:bg-gold-500 transition-colors"
                      data-testid="button-view-full-map"
                    >
                      View Full Map
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h2 className="font-serif text-3xl font-bold mb-8">Walking Trail Highlights</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="gold-gradient rounded-full p-2 flex-shrink-0">
                      <i className="fas fa-walking text-burgundy-800"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Easy Walking Distance</h4>
                      <p className="text-white/80">All wineries within 0.5 miles of each other</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="gold-gradient rounded-full p-2 flex-shrink-0">
                      <i className="fas fa-parking text-burgundy-800"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Convenient Parking</h4>
                      <p className="text-white/80">Multiple parking options throughout downtown</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="gold-gradient rounded-full p-2 flex-shrink-0">
                      <i className="fas fa-utensils text-burgundy-800"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Dining & Entertainment</h4>
                      <p className="text-white/80">Restaurants, shops, and galleries nearby</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="gold-gradient rounded-full p-2 flex-shrink-0">
                      <i className="fas fa-bed text-burgundy-800"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Stay & Play</h4>
                      <p className="text-white/80">Luxury hotels and resorts within walking distance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Winery Locations */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">
              Winery Locations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All locations are within downtown Scottsdale's entertainment district
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Arizona Stronghold Vineyards",
              "Aridus Wine Company", 
              "Carlson Creek",
              "LDV Winery",
              "Los Milics Vineyards",
              "Salvatore Vineyards",
              "The Wine Collective of Scottsdale"
            ].map((winery, index) => (
              <Card key={winery} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 wine-gradient rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{winery}</h3>
                      <p className="text-sm text-gray-600">Downtown Scottsdale</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Card className="bg-white shadow-lg max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  Planning Your Visit
                </h3>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Recommended Route</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Start at The Wine Collective</li>
                      <li>• Work your way through downtown</li>
                      <li>• Allow 2-3 hours for full experience</li>
                      <li>• Consider lunch between tastings</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Transportation</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Walking distance between all locations</li>
                      <li>• Public parking available</li>
                      <li>• Rideshare recommended</li>
                      <li>• Hotel shuttle services</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
