import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Award, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { aboutContent } from '../mock';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Gaming",
      description: "We're not just selling games—we're preserving gaming history and sharing our love for this art form with every customer."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building relationships with gamers and collectors is at the heart of everything we do. You're family here."
    },
    {
      icon: Award,
      title: "Quality & Authenticity",
      description: "Every item is carefully inspected and tested. We stand behind the quality of every game and accessory we sell."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1a1b] via-[#242426] to-[#1a1a1b] py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              About <span className="text-[#F4C430]">Videogames Then & Now</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              More than a store—we're a community of gamers dedicated to preserving gaming history and serving Chicago's gaming community.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-[#0f0f10]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1721372261034-525a25737f5f" 
                alt="Retro gaming setup"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                Our <span className="text-[#F4C430]">Story</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {aboutContent.story}
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                {aboutContent.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-[#1a1a1b] to-[#0f0f10]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              What We <span className="text-[#F4C430]">Stand For</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="bg-[#1a1a1b] border-gray-800">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-[#F4C430]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-[#F4C430]" />
                    </div>
                    <h3 className="text-white font-bold text-xl mb-3">{value.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-[#0f0f10]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                Expert <span className="text-[#F4C430]">Guidance</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {aboutContent.expertise}
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-[#F4C430] text-black hover:bg-[#F4C430]/90 font-bold">
                  Visit Our Store <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1679577998951-08647f06aec0" 
                alt="Gaming store atmosphere"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1a1a1b] to-[#242426]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Become Part of Our Gaming Family
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Whether you're hunting for a rare collectible or just starting your retro gaming journey, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/inventory">
                <Button size="lg" className="bg-[#F4C430] text-black hover:bg-[#F4C430]/90 font-bold w-full sm:w-auto">
                  Browse Inventory
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-[#F4C430] text-[#F4C430] hover:bg-[#F4C430] hover:text-black font-bold w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;