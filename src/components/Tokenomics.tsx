
import { Flame, Gift, Shield } from "lucide-react";

const Tokenomics = () => {
  return (
    <section className="py-20 px-4 bg-white/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          Tokenomics
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Burn Mechanics */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-red-400 to-orange-500 p-3 rounded-2xl mr-4">
                <Flame className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Burn Mechanics</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-3 h-3 bg-red-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">User Sign-Up Burn</h4>
                  <p className="text-gray-600">Tokens burned with every new user registration</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-3 h-3 bg-orange-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Volume Milestone Burn</h4>
                  <p className="text-gray-600">Secondary burn at $1M cumulative trading volume</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-3 h-3 bg-red-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Market Cap Burn</h4>
                  <p className="text-gray-600">Intensified burn once market cap exceeds $1M</p>
                </div>
              </div>
            </div>
          </div>

          {/* Holding Incentives */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 p-3 rounded-2xl mr-4">
                <Gift className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Holding Incentives</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-3 h-3 bg-green-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Utility Unlock Tiers</h4>
                  <p className="text-gray-600">Deeper platform access based on wallet balance</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Governance Rights</h4>
                  <p className="text-gray-600">Voting power increases with holding duration</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Premium Features</h4>
                  <p className="text-gray-600">Exclusive access to advanced platform tools</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transparency Note */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200/50">
            <div className="flex items-center justify-center mb-3">
              <Shield className="h-6 w-6 text-blue-600 mr-2" />
              <span className="font-semibold text-blue-800">Transparency Commitment</span>
            </div>
            <p className="text-blue-700">
              Regular post-launch updates and transparent reporting on all tokenomic mechanisms
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
