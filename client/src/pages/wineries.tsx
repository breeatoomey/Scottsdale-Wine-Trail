import { useEffect, useState } from "react";
import WineryCard from "@/components/winery-card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { wineries, type Winery } from "@/lib/data";

export default function Wineries() {
  const [selectedWinery, setSelectedWinery] = useState<Winery | null>(null);

  useEffect(() => {
    document.title = "Wineries - Scottsdale Wine Trail";
  }, []);

  const handleLearnMore = (winery: Winery) => {
    setSelectedWinery(winery);
  };

  return (
    <div className="pt-20" data-testid="wineries-page">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Wineries
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover seven unique tasting experiences, each offering award-winning Arizona wines and distinctive atmospheres
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wineries.slice(0, 6).map((winery) => (
              <WineryCard 
                key={winery.id} 
                winery={winery} 
                onLearnMore={handleLearnMore}
              />
            ))}
          </div>
          
          {/* Wine Collective - Featured Large Card */}
          <div className="mt-12">
            <div className="card-hover-effect bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="lg:flex">
                <img 
                  src={wineries[6].image} 
                  alt={wineries[6].name} 
                  className="w-full lg:w-1/2 h-64 lg:h-auto object-cover"
                />
                <div className="p-8 lg:w-1/2">
                  <h3 className="font-serif text-3xl font-semibold text-gray-900 mb-4">
                    {wineries[6].name}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    {wineries[6].description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {wineries[6].specialties.map((specialty) => (
                      <Badge key={specialty} variant="secondary" className="bg-burgundy-100 text-burgundy-700">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gold-500">
                      {[...Array(wineries[6].rating)].map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                    </div>
                    <button 
                      className="gold-gradient text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all font-semibold"
                      onClick={() => handleLearnMore(wineries[6])}
                      data-testid="button-wine-collective-details"
                    >
                      Explore Collection
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Winery Details Modal */}
      <Dialog open={!!selectedWinery} onOpenChange={() => setSelectedWinery(null)}>
        <DialogContent className="max-w-2xl" data-testid="winery-details-modal">
          {selectedWinery && (
            <>
              <DialogHeader>
                <DialogTitle className="font-serif text-2xl">
                  {selectedWinery.name}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <img 
                  src={selectedWinery.image} 
                  alt={selectedWinery.name} 
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div>
                  <p className="text-gray-700 mb-4">{selectedWinery.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Specialties</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {selectedWinery.specialties.map((specialty) => (
                          <Badge key={specialty} variant="secondary" className="bg-burgundy-100 text-burgundy-700">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Details</h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p><span className="font-medium">Hours:</span> {selectedWinery.hours}</p>
                        <p><span className="font-medium">Phone:</span> {selectedWinery.phone}</p>
                        <p><span className="font-medium">Location:</span> {selectedWinery.address}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center text-gold-500">
                      {[...Array(selectedWinery.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                      <span className="ml-2 text-gray-600">{selectedWinery.rating}/5 Stars</span>
                    </div>
                    <a 
                      href={`https://${selectedWinery.website}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-burgundy-600 hover:text-burgundy-800 font-semibold"
                      data-testid="link-winery-website"
                    >
                      Visit Website →
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
