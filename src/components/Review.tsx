import React from "react";

interface Review {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
}

const reviews: Review[] = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechTrend",
    quote:
      "John’s expertise in React and Node.js transformed our app’s performance. His attention to detail is unmatched!",
    avatar: "src/img/female1.jpg",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Product Manager, InnovateCo",
    quote:
      "Working with John was a breeze. He delivered clean, efficient code ahead of schedule.",
    avatar: "src/img/male1.jpg",
    rating: 4,
  },
  {
    name: "Emily Davis",
    role: "Founder, StartUpX",
    quote:
      "John’s creative solutions and dedication made our project a success. Highly recommend!",
    avatar: "src/img/female2.jpg",
    rating: 5,
  },
  {
    name: "David Johnson",
    role: "CTO, WebCore Solutions",
    quote:
      "John brought fresh ideas and robust architecture to our development team. He’s a true professional.",
    avatar: "src/img/male2.jpg",
    rating: 5,
  },
  {
    name: "Anna Lee",
    role: "Design Lead, Creativa",
    quote:
      "His collaboration with the design team was seamless. The final UI exceeded expectations!",
    avatar: "src/img/female3.jpg",
    rating: 4,
  },
  {
    name: "Vivian Gomez",
    role: "Marketing Director, BrandReach",
    quote:
      "From code quality to communication, John delivers top-tier results every time.",
    avatar: "src/img/female4.jpg",
    rating: 5,
  },
];

const Review: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-gray-900/50 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-code inline-block relative text-white mb-1">
            What <span className="text-green-400">Clients Say</span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-green-500 opacity-70"></div>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Hear from those who’ve worked with me about the impact of my code
            and collaboration.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`bg-gray-950 p-6 rounded-lg border border-gray-800 shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 animated fadeInUp delay-${
                index * 100
              }`}
            >
              {/* Reviewer Info */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-code text-white">
                    {review.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{review.role}</p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-gray-300 mb-4">"{review.quote}"</p>

              {/* Rating */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <i
                    key={i}
                    className={`fas fa-star ${
                      i < review.rating
                        ? "text-yellow-400"
                        : "text-gray-600"
                    }`}
                  ></i>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
