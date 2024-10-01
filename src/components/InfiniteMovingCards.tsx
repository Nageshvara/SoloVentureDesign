"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[25rem] rounded-md flex flex-col antialiased bg-background dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-[#F7DC6F]" style={{ fontFamily: 'Habanero, sans-serif' }}>
          Hear from Our Travellers
        </h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Seeing Janu again stirred up too much. I needed to escape, so I booked a trip with SoloVenture to the Himalayas. Alone with the mountains, I finally let go, realizing that some journeys—like moving on—are best taken solo.",
    name: "Ram",
    title: "Solo Traveler",
    avatar: "/assets/Ellipse 2.png",
  },
  {
    quote:
      "After everything I went through in that lost kingdom, I craved an adventure that didn’t come with a curse. SoloVenture sent me to the Amazon—wild, untouched, and free. Navigating those dense jungles alone, I found peace in the chaos. I realized that, sometimes, it’s not the destination but the solo journey that makes you stronger.",
    name: "Muthu",
    title: "Treasure Hunter",
    avatar: "/assets/Ellipse 2 (1).png",
  },
  {
    quote:
      "After the adrenaline of the heist, I craved tranquility. I booked a peaceful solo bike ride with SoloVenture through the serene landscapes of Ladakh. As I rode alone through the vast, quiet roads, the calm and freedom of the journey helped me find my center and escape the chaos.",
    name: "Vinayak Mahadev",
    title: "Gambler",
    avatar: "/assets/Ellipse 2 (2).png",
  },
];
