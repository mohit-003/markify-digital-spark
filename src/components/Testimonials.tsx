
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    content:
      "Working with Markify transformed our online presence completely. Their SEO strategies helped us achieve a 200% increase in organic traffic within just 6 months.",
    author: "Sarah Johnson",
    position: "Marketing Director, TechCorp",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    content:
      "The social media campaign Markify created for us exceeded all our expectations. We saw a significant boost in engagement and a 45% increase in conversion rates.",
    author: "Michael Chen",
    position: "CEO, InnovateTech",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    content:
      "Markify's content strategy helped us establish authority in our industry. Their team's creativity and attention to detail are unmatched in the digital marketing space.",
    author: "Emily Rodriguez",
    position: "Brand Manager, FashionPlus",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    content:
      "They completely redesigned our website and the results were immediate. Bounce rates decreased by 40% and conversions increased by 25%. Truly impressive work!",
    author: "David Wilson",
    position: "Operations Director, BuildRight",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about working with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white border-none shadow-lg">
            <CardContent className="p-8">
              <div className="flex justify-center mb-6">
                <Quote className="w-12 h-12 text-markify-purple opacity-20" />
              </div>
              <p className="text-xl text-center text-gray-700 mb-8">
                "{testimonials[currentIndex].content}"
              </p>
              <div className="flex items-center justify-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].author}
                  className="w-16 h-16 rounded-full border-4 border-markify-soft-purple"
                />
                <div className="ml-4 text-left">
                  <p className="font-semibold text-lg">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-gray-500">
                    {testimonials[currentIndex].position}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              className="rounded-full p-3 border-markify-purple text-markify-purple hover:bg-markify-soft-purple"
              onClick={prevTestimonial}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="rounded-full p-3 border-markify-purple text-markify-purple hover:bg-markify-soft-purple"
              onClick={nextTestimonial}
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 ${
                  index === currentIndex
                    ? "bg-markify-purple"
                    : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
