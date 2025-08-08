import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "About - Scottsdale Wine Trail";
  }, []);

  return (
    <div className="pt-20" data-testid="about-page">
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About the Scottsdale Wine Trail
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Downtown Scottsdale is a destination for Arizona wine tasting! Seven Arizona wineries with tasting rooms within walking distance in downtown have joined forces to launch the first ever "Scottsdale Wine Trail."
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <img 
                src="https://www.travelandleisure.com/thmb/hx3Hk-shKq38KTK0kjdzzMoK8Z0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TAL-cadeucus-cellars-AZWINE1023-5d122aa43c3e4730aa59f2cda3755153.jpg" 
                alt="Arizona vineyard landscape" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold text-gray-900">
                Arizona's Premier Wine Destination
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                This cooperative of wineries united to advance education and exposure for Arizona produced wines and the growing wine industry statewide. The Scottsdale Wine Trail is comprised of: Arizona Stronghold Vineyards, Aridus Wine Company, Carlson Creek, LDV Winery, Los Milics Vineyards, Salvatore Vineyards and The Wine Collective of Scottsdale.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Six of the wineries produce award-winning wines that are available for tasting and purchase at unique tasting rooms/retail shops in the heart of Scottsdale's entertainment district. The Wine Collective of Scottsdale represents many different Arizona Wineries.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center bg-white rounded-lg p-4 shadow-md">
                  <div className="text-3xl font-bold text-burgundy-600 font-serif">7</div>
                  <div className="text-sm text-gray-600">Arizona Wineries</div>
                </div>
                <div className="text-center bg-white rounded-lg p-4 shadow-md">
                  <div className="text-3xl font-bold text-burgundy-600 font-serif">0.5</div>
                  <div className="text-sm text-gray-600">Miles Walking Distance</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <blockquote className="text-center">
              <p className="text-2xl md:text-3xl font-serif italic text-gray-800 mb-8 leading-relaxed">
                "It was time to join forces and encourage residents and visitors alike to embrace our thriving Scottsdale wine, culinary, and entertainment scene. With seven Arizona wine tasting rooms, Scottsdale has become a wine tasting destination and the Scottsdale Wine Trail will be another way to enjoy locally-produced wines and experience part Arizona's thriving wine culture."
              </p>
              <footer className="text-lg font-semibold text-burgundy-600">
                — Peggy Fiandaca, LDV Winery Co-Owner and Past President of the Arizona Wine Growers Association
              </footer>
            </blockquote>
          </div>
          
          <div className="mt-16 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                The Complete Experience
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Spend the day or the weekend and experience downtown Scottsdale – great wine tasting, culinary delights, first class lodging, diverse entertainment, art galleries, theaters, shopping, baseball, and museums. There is something for everyone.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-2">
                  <i className="fas fa-wine-glass-alt text-burgundy-600"></i>
                  <span>Award-winning Arizona wines</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-utensils text-burgundy-600"></i>
                  <span>Culinary delights and food pairings</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-bed text-burgundy-600"></i>
                  <span>First-class lodging options</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-palette text-burgundy-600"></i>
                  <span>Art galleries and cultural attractions</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                Arizona Wine Industry
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Arizona's wine industry continues to grow and gain recognition for producing exceptional wines that showcase the unique terroir of the high desert. The state's diverse microclimates and elevation changes create ideal conditions for a variety of grape varietals.
              </p>
              <div className="bg-burgundy-50 rounded-lg p-6">
                <h4 className="font-semibold text-burgundy-800 mb-3">Wine Trail Benefits</h4>
                <ul className="text-sm text-burgundy-700 space-y-2">
                  <li>• Educational wine experiences</li>
                  <li>• Support for local wine industry</li>
                  <li>• Economic impact on downtown Scottsdale</li>
                  <li>• Cultural tourism development</li>
                  <li>• Community partnership building</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
