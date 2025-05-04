
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We Help Businesses{" "}
              <span className="bg-gradient-to-r from-markify-purple to-markify-dark-purple bg-clip-text text-transparent">
                Transform Digitally
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At Markify, we're not just another digital marketing agency. We're a team of passionate marketers, designers, and developers who are dedicated to helping businesses succeed in the digital world.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              With over 15 years of experience in the industry, we've helped hundreds of businesses achieve their digital marketing goals and grow their online presence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Data-driven approach",
                "Dedicated support",
                "Customized strategies",
                "Measurable results",
                "Transparent reporting",
                "Continuous optimization",
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="mr-2 bg-markify-soft-purple rounded-full p-1">
                    <Check className="h-4 w-4 text-markify-purple" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <Button className="bg-markify-purple hover:bg-markify-dark-purple text-white">
              Learn More About Us
            </Button>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="bg-gradient-to-br from-markify-purple to-markify-dark-purple rounded-2xl p-1">
              <div className="bg-white rounded-xl overflow-hidden">
                <div className="aspect-video bg-gray-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                      alt="Digital Marketing Team"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-markify-soft-purple rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-markify-soft-purple rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
