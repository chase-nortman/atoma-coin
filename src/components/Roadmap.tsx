import { Rocket, Wrench, BarChart3, Building2, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const roadmapData = [
  {
    quarter: "Q1 2024",
    title: "Launch",
    description: "Kickstart our ecosystem with the $ATOMA release.",
    icon: Rocket,
    color: "from-blue-400 to-purple-500"
  },
  {
    quarter: "Q2 2024",
    title: "Tool Expansion",
    description: "Advanced tools for valuations, financial statements, and charting.",
    icon: Wrench,
    color: "from-purple-400 to-pink-500"
  },
  {
    quarter: "Q3 2024",
    title: "Company Analysis",
    description: "AI-driven insights into corporate structures and opportunities.",
    icon: BarChart3,
    color: "from-pink-400 to-red-500"
  },
  {
    quarter: "Q4 2024",
    title: "Integrated Brokerage",
    description: "Buy and sell directly through our integrated brokerage.",
    icon: Building2,
    color: "from-red-400 to-orange-500"
  },
  {
    quarter: "Q1 2025",
    title: "Investment Research",
    description: "Your all-in-one AI financial companion—research, analysis, and insights.",
    icon: TrendingUp,
    color: "from-orange-400 to-yellow-500"
  }
];

const CARD_WIDTH = 280; // px
const CARD_WIDTH_XS = 240; // px
const PADDING_X = 16; // Corresponds to px-4 in Tailwind (1rem = 16px)

const Roadmap = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [cardWidth, setCardWidth] = useState(
    typeof window !== 'undefined' && window.innerWidth < 640 ? CARD_WIDTH_XS : CARD_WIDTH
  );

  useEffect(() => {
    const handleResize = () => {
      setCardWidth(window.innerWidth < 640 ? CARD_WIDTH_XS : CARD_WIDTH);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setCanScrollLeft(activeIdx > 0);
    setCanScrollRight(activeIdx < roadmapData.length - 1);
  }, [activeIdx]);

  const scrollBy = (dir: number) => {
    const track = trackRef.current;
    if (!track) return;

    const targetIdx = Math.max(0, Math.min(roadmapData.length - 1, activeIdx + dir));
    setActiveIdx(targetIdx);

    const targetCard = track.children[targetIdx] as HTMLDivElement;
    if (targetCard) {
      // **FIXED**: Account for gradient width and center the card properly
      const gradientWidth = 128; // w-32 = 128px
      const cardCenter = targetCard.offsetLeft + targetCard.offsetWidth / 2;
      const containerCenter = track.offsetWidth / 2;
      const scrollLeft = cardCenter - containerCenter;
      
      track.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 w-full overflow-hidden relative bg-gradient-to-b from-white to-blue-50/60">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
        Roadmap for <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">$ATOMA</span>
      </h2>
      
      <button
        aria-label="Previous milestone"
        onClick={() => scrollBy(-1)}
        className="flex items-center justify-center absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-blue-100 border border-gray-200 rounded-full p-2 shadow transition disabled:opacity-40"
        disabled={!canScrollLeft}
      >
        <ChevronLeft className="h-6 w-6 text-blue-500" />
      </button>
      <button
        aria-label="Next milestone"
        onClick={() => scrollBy(1)}
        className="flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-blue-100 border border-gray-200 rounded-full p-2 shadow transition disabled:opacity-40"
        disabled={!canScrollRight}
      >
        <ChevronRight className="h-6 w-6 text-blue-500" />
      </button>

      <div className="max-w-5xl mx-auto relative">
        <div
          ref={trackRef}
          className="flex gap-6 scroll-smooth overflow-x-auto scroll-snap-x snap-mandatory py-10 px-4 relative z-10"
          style={{
            scrollbarWidth: 'none',
            // **FINAL FIX**: The mask now respects the container's padding.
            WebkitMaskImage: `linear-gradient(to right, 
              transparent 0, 
              black ${PADDING_X}px, 
              black calc(100% - ${PADDING_X}px), 
              transparent 100%)`,
            maskImage: `linear-gradient(to right, 
              transparent 0, 
              black ${PADDING_X}px, 
              black calc(100% - ${PADDING_X}px), 
              transparent 100%)`,
          }}
        >
          {roadmapData.map((item, idx) => {
            const Icon = item.icon;
            const isActive = idx === activeIdx;

            return (
              <div
                key={idx}
                data-idx={idx}
                className={`shrink-0 snap-start transition-all duration-500 ease-in-out flex flex-col items-center origin-left ${isActive ? 'scale-110 z-10 mr-8' : 'scale-100 z-0 opacity-60'}`}
                style={{
                  minWidth: cardWidth,
                  maxWidth: cardWidth,
                  width: '100%',
                }}
              >
                <div className={`w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r ${item.color} shadow-lg border-4 border-white mb-4`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                
                <div className="bg-white/90 rounded-xl shadow-lg border border-gray-200 px-6 py-4 text-center w-full min-h-[140px] flex flex-col justify-center items-center">
                  <div className="text-xs font-medium text-gray-500 mb-1">{item.quarter}</div>
                  <div className="text-lg font-bold text-blue-700 mb-1">{item.title}</div>
                  <div className="text-gray-600 text-sm">{item.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;