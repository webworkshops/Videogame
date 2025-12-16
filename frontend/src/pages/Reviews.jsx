import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ThumbsUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { businessInfo, reviews } from '../mock';

const Reviews = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1a1b] via-[#242426] to-[#1a1a1b] py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Customer <span className="text-[#F4C430]">Reviews</span>
            </h1>
            <div className="flex items-center justify-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-[#F4C430] fill-[#F4C430]" />
              ))}
            </div>
            <p className="text-3xl font-bold text-[#F4C430] mb-4">{businessInfo.rating} out of 5</p>
            <p className="text-xl text-gray-300">
              Based on {businessInfo.reviewCount} reviews from our valued customers
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[#0f0f10] border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-black text-[#F4C430] mb-2">{businessInfo.reviewCount}</div>
              <div className="text-gray-400">Total Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-[#F4C430] mb-2">95%</div>
              <div className="text-gray-400">5-Star Ratings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-[#F4C430] mb-2">100%</div>
              <div className="text-gray-400">Verified Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-gradient-to-b from-[#0f0f10] to-[#1a1a1b]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <Card key={review.id} className="bg-[#1a1a1b] border-gray-800 hover:border-[#F4C430]/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-[#F4C430] fill-[#F4C430]" />
                        ))}
                      </div>
                      <ThumbsUp className="w-4 h-4 text-gray-600" />
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed mb-4">
                      "{review.text}"
                    </p>
                    
                    <div className="pt-4 border-t border-gray-800">
                      <div className="flex justify-between items-center">
                        <p className="text-white font-semibold">{review.name}</p>
                        <p className="text-gray-500 text-sm">{review.date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Themes Section */}
      <section className="py-20 bg-[#0f0f10]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12 text-center">
              What Customers <span className="text-[#F4C430]">Love Most</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-[#1a1a1b] border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-[#F4C430] font-bold text-lg mb-3 flex items-center">
                    <Star className="w-5 h-5 mr-2 fill-[#F4C430]" />
                    Rare Finds
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Customers consistently praise our ability to stock hard-to-find retro games and collectibles that other stores don't carry.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-[#1a1a1b] border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-[#F4C430] font-bold text-lg mb-3 flex items-center">
                    <Star className="w-5 h-5 mr-2 fill-[#F4C430]" />
                    Knowledgeable Staff
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Our team's expertise and passion for gaming is frequently mentioned as a standout feature of the shopping experience.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-[#1a1a1b] border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-[#F4C430] font-bold text-lg mb-3 flex items-center">
                    <Star className="w-5 h-5 mr-2 fill-[#F4C430]" />
                    Fair Pricing
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Reviews often highlight our competitive and transparent pricing, especially compared to online marketplaces.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-[#1a1a1b] border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-[#F4C430] font-bold text-lg mb-3 flex items-center">
                    <Star className="w-5 h-5 mr-2 fill-[#F4C430]" />
                    Quality Products
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Customers appreciate that our games are tested and accurately described, with honest condition assessments.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1a1a1b] to-[#242426]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Experience It Yourself
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Join hundreds of satisfied customers. Visit our store and see why we're Chicago's top-rated retro game shop.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-[#F4C430] text-black hover:bg-[#F4C430]/90 font-bold">
                Visit Our Store
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;