import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Winery } from "@/lib/data";

interface WineryCardProps {
  winery: Winery;
  onLearnMore?: (winery: Winery) => void;
}

export default function WineryCard({ winery, onLearnMore }: WineryCardProps) {
  return (
    <Card 
      className="card-hover-effect bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
      data-testid={`winery-card-${winery.id}`}
    >
      <img 
        src={winery.image} 
        alt={`${winery.name} tasting room`} 
        className="w-full h-64 object-cover"
      />
      <CardContent className="p-6">
        <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-2">
          {winery.name}
        </h3>
        <p className="text-gray-600 mb-4">
          {winery.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gold-500">
            {[...Array(winery.rating)].map((_, i) => (
              <i key={i} className="fas fa-star"></i>
            ))}
          </div>
          <Button 
            variant="ghost"
            className="text-burgundy-600 font-semibold hover:text-burgundy-800 transition-colors"
            onClick={() => onLearnMore?.(winery)}
            data-testid={`button-learn-more-${winery.id}`}
          >
            Learn More →
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
