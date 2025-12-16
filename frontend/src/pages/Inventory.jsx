import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Gamepad2, MonitorPlay, Joystick, Star, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { categories, inventoryInfo } from '../mock';

const Inventory = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1a1b] via-[#242426] to-[#1a1a1b] py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Our <span className="text-[#F4C430]">Inventory</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              From vintage classics to the latest releases, explore our carefully curated selection of games, consoles, and accessories.
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 bg-[#F4C430]/10 border-y border-[#F4C430]/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex items-start space-x-4">
            <AlertCircle className="w-6 h-6 text-[#F4C430] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-gray-300 leading-relaxed">
                {inventoryInfo.note}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-[#0f0f10]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {categories.map((category) => {
              const iconMap = {
                'Gamepad2': Gamepad2,
                'MonitorPlay': MonitorPlay,
                'Joystick': Joystick,
                'Star': Star
              };
              const IconComponent = iconMap[category.icon];
              
              return (
                <Card key={category.id} className="bg-[#1a1a1b] border-gray-800 overflow-hidden group hover:border-[#F4C430]/50 transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1b] via-[#1a1a1b]/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-10 h-10 bg-[#F4C430] rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-black" />
                        </div>
                        <h3 className="text-white font-black text-2xl">{category.title}</h3>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-300 leading-relaxed mb-6">{category.description}</p>
                    <div className="pt-4 border-t border-gray-800">
                      <p className="text-gray-400 text-sm">
                        <span className="font-semibold text-[#F4C430]">In Stock:</span> Our inventory changes daily. Call or visit to check current availability.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="py-20 bg-gradient-to-b from-[#1a1a1b] to-[#0f0f10]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8 text-center">
              What Makes Us <span className="text-[#F4C430]">Different</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-[#1a1a1b] border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-white font-bold text-lg mb-3">Rare & Hard-to-Find</h3>
                  <p className="text-gray-400 leading-relaxed">
                    We specialize in tracking down those elusive titles you've been searching for. From Japanese imports to limited editions, we've got connections.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-[#1a1a1b] border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-white font-bold text-lg mb-3">Quality Guaranteed</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Every game is tested and verified. We clearly disclose condition and any issues. No surprises—just honest, quality products.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-[#1a1a1b] border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-white font-bold text-lg mb-3">Fair Pricing</h3>
                  <p className="text-gray-400 leading-relaxed">
                    We price based on market value and condition. You'll find competitive prices whether you're buying common titles or rare collectibles.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-[#1a1a1b] border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-white font-bold text-lg mb-3">Expert Knowledge</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Our team lives and breathes gaming. We can answer questions, make recommendations, and share the stories behind the games.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#F4C430] to-[#d4a810]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
              {inventoryInfo.callToAction}
            </h2>
            <p className="text-black/80 text-lg mb-8">
              Our knowledgeable staff is here to help you find exactly what you need. Call ahead or visit us in person.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7088675309">
                <Button size="lg" className="bg-black text-[#F4C430] hover:bg-black/90 font-bold text-lg px-8 w-full sm:w-auto">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us Now
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-[#F4C430] font-bold text-lg px-8 w-full sm:w-auto">
                  Visit Our Store
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inventory;