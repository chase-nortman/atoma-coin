
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-200/30 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="text-center z-10 max-w-4xl mx-auto">
        {/* ATOMA Logo/Wordmark */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 tracking-tight">
            $ATOMA
          </h1>
          <div className="text-lg md:text-xl text-gray-600 font-medium tracking-wider">
            The beginning of our ecosystem.
          </div>
        </div>

        {/* Headline */}
        <div className="mb-12 animate-fade-in delay-200">
          <h2 className="text-2xl md:text-4xl font-light text-gray-800 leading-relaxed max-w-3xl mx-auto">
            The engine powering the Atoma platform—where token economics meet practical utility
          </h2>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-400">
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <FileText className="mr-2 h-5 w-5" />
            View Whitepaper
          </Button>
          <Button variant="outline" size="lg" className="border-2 border-gray-300 hover:border-purple-400 text-gray-700 hover:text-purple-700 px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm">
            <ExternalLink className="mr-2 h-5 w-5" />
            Trade Token
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
