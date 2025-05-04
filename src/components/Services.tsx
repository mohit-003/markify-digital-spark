
import { Search, Globe, Code, Edit, Instagram, BarChart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Search Engine Optimization",
    description: "Improve your website ranking on search engines and drive organic traffic with our proven SEO strategies.",
    icon: Search,
  },
  {
    title: "Social Media Marketing",
    description: "Engage with your audience on social media platforms and build a strong brand presence online.",
    icon: Instagram,
  },
  {
    title: "Web Design & Development",
    description: "Create responsive, user-friendly websites that convert visitors into customers and reflect your brand identity.",
    icon: Code,
  },
  {
    title: "Content Marketing",
    description: "Develop compelling content that resonates with your audience and drives engagement and conversions.",
    icon: Edit,
  },
  {
    title: "Digital Strategy",
    description: "Comprehensive digital strategies tailored to your business goals and target audience.",
    icon: Globe,
  },
  {
    title: "Analytics & Reporting",
    description: "Get insights into your campaign performance with detailed analytics and actionable recommendations.",
    icon: BarChart,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital marketing solutions to help your business grow online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="stagger-item" style={{ animationDelay: `${index * 0.1}s` }}>
              <Card className="card-hover h-full bg-white border-none shadow-md">
                <CardHeader>
                  <div className="w-12 h-12 bg-markify-soft-purple rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="text-markify-purple w-6 h-6" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
