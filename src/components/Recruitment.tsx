
import { Button } from "@/components/ui/button";
import { Users, Code, Lightbulb } from "lucide-react";

const Recruitment = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-blue-500/90 to-purple-600/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 text-white text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-8 left-8 w-24 h-24 bg-white rounded-full"></div>
            <div className="absolute bottom-8 right-8 w-32 h-32 bg-white rounded-lg rotate-45"></div>
            <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white rounded-full"></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="flex gap-4">
                <div className="bg-white/20 p-3 rounded-2xl">
                  <Code className="h-8 w-8" />
                </div>
                <div className="bg-white/20 p-3 rounded-2xl">
                  <Users className="h-8 w-8" />
                </div>
                <div className="bg-white/20 p-3 rounded-2xl">
                  <Lightbulb className="h-8 w-8" />
                </div>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join the Atoma Team
            </h2>
            
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
              We're looking for skilled developers and strategic advisors who share our vision 
              of revolutionizing financial technology through innovative tokenomics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Apply as Developer
              </Button>
              <Button size="lg" variant="secondary" className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Apply as an Advisor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recruitment;
