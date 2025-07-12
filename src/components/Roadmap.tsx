
import { Rocket, Wrench, BarChart3, Building2, TrendingUp } from "lucide-react";
import { useEffect, useRef } from "react";

const Roadmap = () => {
  const roadmapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    const roadmapItems = roadmapRef.current?.querySelectorAll('.roadmap-item');
    roadmapItems?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const roadmapData = [
    {
      quarter: "Q1 2024",
      title: "Launch",
      description: "Kickstart ecosystem with $ATOMA release",
      icon: Rocket,
      color: "from-blue-400 to-purple-500"
    },
    {
      quarter: "Q2 2024", 
      title: "Tool Expansion",
      description: "Advanced tools for valuations, statements, charting",
      icon: Wrench,
      color: "from-purple-400 to-pink-500"
    },
    {
      quarter: "Q3 2024",
      title: "Company Analysis", 
      description: "AI-driven insights into corporate structures",
      icon: BarChart3,
      color: "from-pink-400 to-red-500"
    },
    {
      quarter: "Q4 2024",
      title: "Integrated Brokerage",
      description: "Buy and sell directly through platform",
      icon: Building2,
      color: "from-red-400 to-orange-500"
    },
    {
      quarter: "Q1 2025",
      title: "Investment Research",
      description: "All-in-one AI financial companion and insights",
      icon: TrendingUp,
      color: "from-orange-400 to-yellow-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white/30 to-blue-50/30" ref={roadmapRef}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          Roadmap for <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">$ATOMA</span>
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {roadmapData.map((item, index) => (
              <div key={index} className={`roadmap-item opacity-0 flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-12 md:ml-0`}>
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className={`bg-gradient-to-r ${item.color} p-3 rounded-2xl mr-4`}>
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-500">{item.quarter}</div>
                        <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
                
                {/* Timeline node */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2">
                  <div className={`w-8 h-8 bg-gradient-to-r ${item.color} rounded-full border-4 border-white shadow-lg`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
