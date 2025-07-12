
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "ATOMA represents the future of tokenized ecosystems—utility first, speculation second.",
      author: "Sarah Chen",
      role: "DeFi Advisor",
      rating: 5
    },
    {
      quote: "The burn mechanics create real scarcity while the platform grows. Brilliant tokenomics.",
      author: "Marcus Rodriguez",
      role: "Community Member",
      rating: 5
    },
    {
      quote: "Finally, a token that actually does something. The utility unlocks are game-changing.",
      author: "Alex Thompson",
      role: "Early Adopter",
      rating: 5
    }
  ];

  const stats = [
    { label: "Early Adopters", value: "2,500+" },
    { label: "Tokens Burned", value: "150K+" },
    { label: "Platform Users", value: "10K+" },
    { label: "Community Growth", value: "300%" }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-4 bg-white/30">
      <div className="max-w-7xl mx-auto">
        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonial Carousel */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-800">
            Community Voices
          </h2>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/20">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed mb-6">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div className="text-center">
                <div className="font-semibold text-gray-800">{testimonials[currentIndex].author}</div>
                <div className="text-gray-600">{testimonials[currentIndex].role}</div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center mt-8 gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="rounded-full bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <div className="flex gap-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentIndex ? 'bg-purple-500 w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="rounded-full bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
