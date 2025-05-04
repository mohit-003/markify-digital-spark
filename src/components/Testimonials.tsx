
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Testimonial {
  id: string;
  client_name: string;
  client_position: string;
  client_company: string;
  avatar_url: string | null;
  content: string;
  rating: number;
  is_featured: boolean;
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const { data, error } = await supabase
          .from("testimonials")
          .select("*")
          .order("display_order", { ascending: true });
          
        if (error) {
          throw error;
        }
        
        setTestimonials(data || []);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  if (isLoading) {
    return (
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-markify-purple"></div>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return null;
  }

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
                {testimonials[currentIndex].avatar_url ? (
                  <img
                    src={testimonials[currentIndex].avatar_url}
                    alt={testimonials[currentIndex].client_name}
                    className="w-16 h-16 rounded-full border-4 border-markify-soft-purple object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-markify-soft-purple flex items-center justify-center border-4 border-markify-soft-purple">
                    <span className="text-markify-purple text-xl font-bold">
                      {testimonials[currentIndex].client_name.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="ml-4 text-left">
                  <p className="font-semibold text-lg">
                    {testimonials[currentIndex].client_name}
                  </p>
                  <p className="text-gray-500">
                    {testimonials[currentIndex].client_position}, {testimonials[currentIndex].client_company}
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
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
