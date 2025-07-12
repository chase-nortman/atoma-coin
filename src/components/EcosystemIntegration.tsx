
import { Layers, Users, Zap, Lock } from "lucide-react";

const EcosystemIntegration = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Ecosystem Integration
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            $ATOMA is deeply embedded in Atoma's core products, unlocking premium functionality 
            and providing early adopters with privileged access to the future of finance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 text-center">
            <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-4 rounded-2xl w-fit mx-auto mb-4">
              <Layers className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Core Integration</h3>
            <p className="text-gray-600 text-sm">Embedded across all Atoma platform features</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 text-center">
            <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-4 rounded-2xl w-fit mx-auto mb-4">
              <Lock className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Premium Access</h3>
            <p className="text-gray-600 text-sm">Unlock advanced tools and analytics</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 text-center">
            <div className="bg-gradient-to-r from-pink-400 to-red-500 p-4 rounded-2xl w-fit mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Beta Access</h3>
            <p className="text-gray-600 text-sm">Early access to new features and releases</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 text-center">
            <div className="bg-gradient-to-r from-red-400 to-orange-500 p-4 rounded-2xl w-fit mx-auto mb-4">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Governance</h3>
            <p className="text-gray-600 text-sm">Vote on proposals and platform direction</p>
          </div>
        </div>

        {/* Abstract Illustration */}
        <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/20 overflow-hidden">
          <div className="relative z-10 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Interconnected Ecosystem</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every component of the Atoma platform works in harmony, with $ATOMA serving as the 
              connecting tissue that enhances functionality and rewards participation.
            </p>
          </div>
          
          {/* Abstract geometric background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-4 left-4 w-20 h-20 bg-blue-300 rounded-lg rotate-12"></div>
            <div className="absolute top-8 right-8 w-16 h-16 bg-purple-300 rounded-full"></div>
            <div className="absolute bottom-8 left-8 w-24 h-24 bg-pink-300 rounded-lg -rotate-12"></div>
            <div className="absolute bottom-4 right-12 w-18 h-18 bg-yellow-300 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemIntegration;
