import React from 'react';
import { Phone, MapPin, Clock, Mail, Navigation } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { businessInfo } from '../mock';

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1a1b] via-[#242426] to-[#1a1a1b] py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Visit <span className="text-[#F4C430]">Our Store</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Located in Harwood Heights, just minutes from Chicago. Come browse our selection in person—we'd love to see you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-[#0f0f10]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="bg-[#1a1a1b] border-gray-800 hover:border-[#F4C430]/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-[#F4C430]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-[#F4C430]" />
                </div>
                <h3 className="text-white font-bold mb-2">Address</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {businessInfo.address.fullAddress}
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#1a1a1b] border-gray-800 hover:border-[#F4C430]/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-[#F4C430]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-[#F4C430]" />
                </div>
                <h3 className="text-white font-bold mb-2">Phone</h3>
                <a href={`tel:${businessInfo.phone}`} className="text-gray-400 text-sm hover:text-[#F4C430] transition-colors">
                  {businessInfo.phone}
                </a>
              </CardContent>
            </Card>
            
            <Card className="bg-[#1a1a1b] border-gray-800 hover:border-[#F4C430]/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-[#F4C430]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-[#F4C430]" />
                </div>
                <h3 className="text-white font-bold mb-2">Email</h3>
                <a href={`mailto:${businessInfo.email}`} className="text-gray-400 text-sm hover:text-[#F4C430] transition-colors break-all">
                  {businessInfo.email}
                </a>
              </CardContent>
            </Card>
            
            <Card className="bg-[#1a1a1b] border-gray-800 hover:border-[#F4C430]/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-[#F4C430]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-[#F4C430]" />
                </div>
                <h3 className="text-white font-bold mb-2">Hours</h3>
                <p className="text-gray-400 text-sm">
                  Mon-Sat: 11AM-9PM<br />
                  Sun: 12PM-6PM
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map and Hours Section */}
      <section className="py-16 bg-gradient-to-b from-[#1a1a1b] to-[#0f0f10]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Map */}
            <div className="lg:col-span-2">
              <Card className="bg-[#1a1a1b] border-gray-800 overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video w-full">
                    <iframe
                      src={businessInfo.googleMapsEmbed}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Store Location"
                      className="w-full h-full min-h-[400px]"
                    ></iframe>
                  </div>
                  <div className="p-6 bg-[#1a1a1b]">
                    <h3 className="text-white font-bold text-lg mb-3">Getting Here</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      We're located in Harwood Square, easily accessible from I-294 and I-90. Plenty of free parking available.
                    </p>
                    <a 
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(businessInfo.address.fullAddress)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-[#F4C430] text-black hover:bg-[#F4C430]/90 font-semibold">
                        <Navigation className="w-4 h-4 mr-2" />
                        Get Directions
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Hours Detail */}
            <div>
              <Card className="bg-[#1a1a1b] border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-white font-bold text-xl mb-6 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-[#F4C430]" />
                    Store Hours
                  </h3>
                  <div className="space-y-3">
                    {businessInfo.hours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-800 last:border-0">
                        <span className="text-gray-400 font-medium">{schedule.day}</span>
                        <span className="text-white font-semibold text-sm">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-[#F4C430]/10 border border-[#F4C430]/30 rounded-lg">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      <span className="font-semibold text-[#F4C430]">Note:</span> Hours may vary during holidays. Call ahead to confirm.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-[#0f0f10]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8 text-center">
              Before You <span className="text-[#F4C430]">Visit</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-[#1a1a1b] border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-white font-bold text-lg mb-3">Looking for Something Specific?</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Our inventory changes daily. If you're searching for a particular game or console, give us a call before making the trip. We can check availability and even hold items for you.
                  </p>
                  <a href="tel:7088675309">
                    <Button variant="outline" className="border-[#F4C430] text-[#F4C430] hover:bg-[#F4C430] hover:text-black font-semibold w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      Call to Inquire
                    </Button>
                  </a>
                </CardContent>
              </Card>
              
              <Card className="bg-[#1a1a1b] border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-white font-bold text-lg mb-3">What to Expect</h3>
                  <p className="text-gray-400 leading-relaxed">
                    When you visit, you'll find a welcoming atmosphere with knowledgeable staff ready to help. Feel free to browse, ask questions, and take your time exploring our collection. We're passionate about gaming and love sharing that passion with our customers.
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
              We Can't Wait to See You!
            </h2>
            <p className="text-black/80 text-lg mb-8">
              Stop by today and discover why gamers from across the Chicago area make Videogames Then & Now their go-to destination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(businessInfo.address.fullAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-black text-[#F4C430] hover:bg-black/90 font-bold text-lg px-8 w-full sm:w-auto">
                  <Navigation className="w-5 h-5 mr-2" />
                  Get Directions
                </Button>
              </a>
              <a href="tel:7088675309">
                <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-[#F4C430] font-bold text-lg px-8 w-full sm:w-auto">
                  <Phone className="w-5 h-5 mr-2" />
                  {businessInfo.phone}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;