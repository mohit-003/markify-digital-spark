
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface MarketingStat {
  id: string;
  name: string;
  value: string;
  description: string | null;
  display_order: number;
  is_active: boolean;
}

const Hero = () => {
  const [stats, setStats] = useState<MarketingStat[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data, error } = await supabase
          .from("marketing_stats")
          .select("*")
          .eq("is_active", true)
          .order("display_order", { ascending: true });
          
        if (error) {
          throw error;
        }
        
        setStats(data || []);
      } catch (error) {
        console.error("Error fetching marketing stats:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  const handleConsultationClick = () => {
    navigate('/contact');
  };

  const handleSeeWorkClick = () => {
    // Navigate to a portfolio page or projects section
    navigate('/services');
  };

  return (
    <section
      id="home"
      className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden"
    >
      {/* Abstract shapes */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-markify-soft-purple rounded-full filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-markify-light-purple rounded-full filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Boost Your Digital Presence with{" "}
            <span className="bg-gradient-to-r from-markify-purple to-markify-dark-purple bg-clip-text text-transparent">
              Strategic Marketing
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We help businesses grow their online visibility through data-driven
            marketing strategies and creative solutions that deliver results.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              className="bg-markify-purple hover:bg-markify-dark-purple text-white px-8 py-6 text-lg"
              onClick={handleConsultationClick}
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              className="border-markify-purple text-markify-purple hover:bg-markify-soft-purple px-8 py-6 text-lg"
              onClick={handleSeeWorkClick}
            >
              See Our Work
            </Button>
          </div>
        </div>

        {!isLoading && stats.length > 0 && (
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-white to-markify-soft-purple rounded-2xl shadow-lg p-6 md:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {stats.map((stat, index) => (
                  <div className="stagger-item" key={stat.id} style={{ animationDelay: `${index * 0.15}s` }}>
                    <h3 className="text-3xl md:text-4xl font-bold text-markify-purple mb-1">{stat.value}</h3>
                    <p className="text-gray-600">{stat.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
