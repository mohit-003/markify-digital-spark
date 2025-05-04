
import { useEffect, useState } from "react";
import { Search, Globe, Code, Edit, Instagram, BarChart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";

interface Service {
  id: string;
  title: string;
  description: string;
  icon_name: string;
  is_active: boolean;
  display_order: number;
}

const iconMap: Record<string, any> = {
  "Search": Search,
  "Globe": Globe,
  "Code": Code,
  "Edit": Edit,
  "Instagram": Instagram,
  "BarChart": BarChart,
};

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data, error } = await supabase
          .from("services")
          .select("*")
          .eq("is_active", true)
          .order("display_order", { ascending: true });
          
        if (error) {
          throw error;
        }
        
        setServices(data || []);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital marketing solutions to help your business grow online.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-markify-purple"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon_name] || Globe;
              
              return (
                <div key={service.id} className="stagger-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Card className="card-hover h-full bg-white border-none shadow-md">
                    <CardHeader>
                      <div className="w-12 h-12 bg-markify-soft-purple rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="text-markify-purple w-6 h-6" />
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
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
