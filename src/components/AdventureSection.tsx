
const adventureItems = [
  {
    question: "What if every adventure was designed just for you?",
    description: "Imagine a trip designed just for your interests, pace, and level of comfort. Our personalized itineraries blend both thrill and personal exploration, ensuring you're excited, safe, and ready for your next solo adventure.",
    image: "/assets/01 (1).png"
  },
  {
    question: "Ever thought about exploring places no one else dares to go?",
    description: "We focus on unique, adventurous destinations - remote and rugged spots that let you push your limits safely. From hidden trails to secluded beaches, we've got the perfect mix of challenge and serenity for your solo journey.",
    image: "/assets/01.png"
  },
  {
    question: "What if you could journey solo, yet never feel alone?",
    description: "At SoloVenture, we're all about empowering solo travelers. With our curated group experiences, you can connect with fellow like-minded explorers, make new friends, and share experiences - all while keeping the thrill of solo travel alive.",
    image: "/assets/image (1).png"
  }
]

export default function CuriousAdventureSection() {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-[#F7DC6F]" style={{ fontFamily: 'Habanero, sans-serif' }}>
          Curious About Your Next Solo Adventure?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ fontFamily: 'Satoshi, sans-serif' }}>
          {adventureItems.map((item, index) => (
            <div key={index} className="flex flex-col space-y-4">
              <div className="text-2xl font-semibold">{`0${index + 1}`}</div>
              <h3 className="text-xl font-bold">{item.question}</h3>
              <p className="text-gray-300">{item.description}</p>
              <div className="relative h-64 w-full overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={`Adventure pic ${index + 1}`}
                  className="transition-transform duration-300 hover:scale-105 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}