import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  MapPin,
  Star,
  ArrowRight,
  History,
  Users,
  DollarSign,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { businessInfo, categories, reviews, highlights } from "../mock";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Floating CTA */}
      <div className="fixed bottom-8 right-8 z-50 bg-[#00FFD1] text-black px-6 py-3 shadow-lg backdrop-blur-sm">
        <div className="text-sm font-medium mb-2">
          <p>
            Buy it now <b>for $97.50!</b>
            <br></br>Only 7 days before it gets removed.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => {
              window.location.href = "mailto:hello@frontroom.website";
            }}
            className={`px-4 py-2 text-sm font-medium transition-all duration-300 bg-black text-[#00FFD1] `}
          >
            Message us
          </button>

          <button
            onClick={() => {
              window.location.href = "https://www.frontroom.website";
            }}
            className={`px-4 py-2 text-sm font-medium transition-all duration-300 bg-black text-[#00FFD1] `}
          >
            Home page
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1a1b] via-[#242426] to-[#1a1a1b] py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#F4C430] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F4C430] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <div className="flex items-center space-x-2 bg-[#F4C430]/10 border border-[#F4C430]/30 rounded-full px-4 py-2">
                <Star className="w-4 h-4 text-[#F4C430] fill-[#F4C430]" />
                <span className="text-[#F4C430] font-semibold text-sm">
                  {businessInfo.rating} Rating
                </span>
                <span className="text-gray-400 text-sm">
                  • {businessInfo.reviewCount} Reviews
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Your Gaming <span className="text-[#F4C430]">Then & Now</span>{" "}
              Destination
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              Discover rare retro treasures and the latest releases at Chicago's
              most trusted video game store. From NES to Nintendo Switch, we've
              got you covered.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-[#F4C430] text-black hover:bg-[#F4C430]/90 font-bold text-lg px-8 py-6 w-full sm:w-auto"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Visit Our Store
                </Button>
              </Link>
              <a href="tel:7088675309">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#F4C430] text-[#F4C430] hover:bg-[#F4C430] hover:text-black font-bold text-lg px-8 py-6 w-full sm:w-auto"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-[#0f0f10]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const IconComponent = { History, Users, DollarSign, MapPin }[
                highlight.icon
              ];
              return (
                <Card
                  key={index}
                  className="bg-[#1a1a1b] border-gray-800 hover:border-[#F4C430]/50 transition-all duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-[#F4C430]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-7 h-7 text-[#F4C430]" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-b from-[#0f0f10] to-[#1a1a1b]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              What We <span className="text-[#F4C430]">Offer</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From classic cartridges to modern blockbusters, we curate the best
              gaming selection in Chicago
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card
                key={category.id}
                className="bg-[#1a1a1b] border-gray-800 overflow-hidden group hover:border-[#F4C430]/50 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1b] to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-white font-bold text-xl mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {category.description}
                  </p>
                  <Link
                    to="/inventory"
                    className="text-[#F4C430] font-semibold text-sm flex items-center hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/inventory">
              <Button
                size="lg"
                className="bg-[#F4C430] text-black hover:bg-[#F4C430]/90 font-bold"
              >
                Browse Full Inventory
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-[#0f0f10]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              What Our <span className="text-[#F4C430]">Customers Say</span>
            </h2>
            <div className="flex items-center justify-center space-x-2 text-[#F4C430] mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#F4C430]" />
              ))}
            </div>
            <p className="text-gray-400 text-lg">
              {businessInfo.rating} out of 5 • {businessInfo.reviewCount}{" "}
              reviews
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.slice(0, 6).map((review) => (
              <Card key={review.id} className="bg-[#1a1a1b] border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-[#F4C430] fill-[#F4C430]"
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="text-white font-semibold text-sm">
                      {review.name}
                    </p>
                    <p className="text-gray-500 text-xs">{review.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/reviews">
              <Button
                variant="outline"
                className="border-[#F4C430] text-[#F4C430] hover:bg-[#F4C430] hover:text-black font-semibold"
              >
                Read All Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#F4C430] to-[#d4a810]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
              Ready to Level Up Your Collection?
            </h2>
            <p className="text-black/80 text-xl mb-8">
              Visit us in Harwood Heights or give us a call. Our expert team is
              ready to help you find exactly what you're looking for.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-black text-[#F4C430] hover:bg-black/90 font-bold text-lg px-8 py-6 w-full sm:w-auto"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Get Directions
                </Button>
              </Link>
              <a href="tel:7088675309">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-black text-black hover:bg-black hover:text-[#F4C430] font-bold text-lg px-8 py-6 w-full sm:w-auto"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (708) 867-5309
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
