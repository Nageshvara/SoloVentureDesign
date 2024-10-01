import React from 'react'
import { MapPin,Users, Star } from "lucide-react"

function WhyTravelWithUs() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#F7DC6F] mb-12" style={{ fontFamily: 'Habanero, sans-serif' }}>Why Solo Travel with Us?</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 text-[#FCF6F5FF]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
              <div className="flex flex-col items-center text-center text-[#FCF6F5FF]">
                <MapPin className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Curated Destinations</h3>
                <p className="text-muted-foreground">Handpicked locations perfect for solo adventurers.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Connect with Others</h3>
                <p className="text-muted-foreground">Meet like-minded travelers and make new friends.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Star className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Personalized Experiences</h3>
                <p className="text-muted-foreground">Tailor your trip to your interests and preferences.</p>
              </div>
            </div>
          </div>
        </section>
  )
}

export default WhyTravelWithUs
