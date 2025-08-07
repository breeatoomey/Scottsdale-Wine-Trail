import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function WineTrailPassport() {
  useEffect(() => {
    document.title = "Wine Trail Passport - Scottsdale Wine Trail";
  }, []);

  return (
    <div className="pt-20" data-testid="wine-trail-passport-page">
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Wine Trail Passport
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Get your passport stamped at each winery and unlock exclusive rewards, discounts, and VIP experiences throughout the Scottsdale Wine Trail.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="wine-gradient rounded-full p-2 flex-shrink-0">
                    <i className="fas fa-stamp text-gold-400"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-gray-900">Collect Stamps</h4>
                    <p className="text-gray-600">Visit each winery and get your passport stamped</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="wine-gradient rounded-full p-2 flex-shrink-0">
                    <i className="fas fa-gift text-gold-400"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-gray-900">Earn Rewards</h4>
                    <p className="text-gray-600">Unlock discounts and special offers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="wine-gradient rounded-full p-2 flex-shrink-0">
                    <i className="fas fa-crown text-gold-400"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-gray-900">VIP Access</h4>
                    <p className="text-gray-600">Exclusive tastings and member events</p>
                  </div>
                </div>
              </div>
              
              <Button 
                className="gold-gradient text-white px-8 py-4 text-lg font-semibold rounded-lg hover:opacity-90 transition-all transform hover:scale-105"
                data-testid="button-get-passport"
              >
                <i className="fas fa-download mr-2"></i>
                Get Your Passport
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1474722883778-792e7990302f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800" 
                alt="Wine tasting setup with passport" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl max-w-xs">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="flex text-gold-400">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star text-sm"></i>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">"The passport made our wine tour so much more fun and rewarding!"</p>
                <p className="text-xs text-gray-500 mt-1">— Sarah M., Wine Enthusiast</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to make the most of your wine trail experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Download Passport",
                description: "Get your digital or physical passport",
                icon: "fas fa-download"
              },
              {
                step: 2,
                title: "Visit Wineries",
                description: "Explore each unique tasting room",
                icon: "fas fa-wine-glass-alt"
              },
              {
                step: 3,
                title: "Collect Stamps", 
                description: "Get stamped at every location",
                icon: "fas fa-stamp"
              },
              {
                step: 4,
                title: "Unlock Rewards",
                description: "Enjoy exclusive benefits and prizes",
                icon: "fas fa-trophy"
              }
            ].map((step) => (
              <Card key={step.step} className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 wine-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className={`${step.icon} text-2xl text-gold-400`}></i>
                  </div>
                  <div className="mb-4">
                    <Badge variant="secondary" className="bg-burgundy-100 text-burgundy-700">
                      Step {step.step}
                    </Badge>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rewards Tiers */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">
              Passport Rewards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The more wineries you visit, the better the rewards become
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                tier: "Explorer",
                stamps: "3 Stamps",
                color: "bg-gray-100 border-gray-300",
                textColor: "text-gray-700",
                benefits: ["10% off purchases", "Welcome drink", "Trail map"]
              },
              {
                tier: "Connoisseur", 
                stamps: "5 Stamps",
                color: "bg-burgundy-50 border-burgundy-300",
                textColor: "text-burgundy-700",
                benefits: ["15% off purchases", "Free tasting", "Priority seating", "Event invitations"]
              },
              {
                tier: "Wine Master",
                stamps: "7 Stamps",
                color: "bg-gold-50 border-gold-300",
                textColor: "text-gold-700",
                benefits: ["20% off purchases", "VIP tastings", "Private events", "Annual membership", "Exclusive releases"]
              }
            ].map((tier) => (
              <Card key={tier.tier} className={`${tier.color} border-2`}>
                <CardContent className="p-8 text-center">
                  <h3 className={`font-serif text-2xl font-bold mb-2 ${tier.textColor}`}>
                    {tier.tier}
                  </h3>
                  <Badge variant="secondary" className="mb-6">
                    {tier.stamps}
                  </Badge>
                  <ul className="space-y-2 text-left">
                    {tier.benefits.map((benefit) => (
                      <li key={benefit} className={`flex items-center space-x-2 ${tier.textColor}`}>
                        <i className="fas fa-check text-sm"></i>
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Card className="bg-white shadow-lg max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-gray-600 mb-6">
                  Download your passport today and begin collecting stamps at Arizona's premier wine trail
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    className="gold-gradient text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
                    data-testid="button-download-digital"
                  >
                    <i className="fas fa-mobile-alt mr-2"></i>
                    Digital Passport
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-burgundy-300 text-burgundy-700 hover:bg-burgundy-50 px-6 py-3 rounded-lg font-semibold"
                    data-testid="button-print-physical"
                  >
                    <i className="fas fa-print mr-2"></i>
                    Print Physical
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
