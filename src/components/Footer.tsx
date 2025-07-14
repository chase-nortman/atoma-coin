
import { Button } from "@/components/ui/button";
import { MessageCircle, Twitter, Github, FileText, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-4 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              $ATOMA
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              The engine powering the Atoma ecosystem. Where token economics meet practical utility, 
              creating value for holders as the platform grows.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-600 hover:bg-gray-800 hover:text-white">
                <MessageCircle className="h-4 w-4 mr-2" />
                Discord
              </Button>
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-600 hover:bg-gray-800 hover:text-white">
                <Twitter className="h-4 w-4 mr-2" />
                Twitter
              </Button>
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-600 hover:bg-gray-800 hover:text-white">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
            </div>
          </div>

          {/* Contract Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contract</h3>
            <div className="space-y-3">
              <div>
                <div className="text-sm text-gray-400 mb-1">Smart Contract</div>
                <div className="text-xs font-mono bg-gray-800 p-2 rounded border">
                  0x1234...5678
                </div>
              </div>
              <Button variant="link" className="p-0 h-auto text-blue-400 hover:text-blue-300">
                <ExternalLink className="h-3 w-3 mr-1" />
                View on Etherscan
              </Button>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <div className="space-y-2 flex flex-col">
              <Button variant="link" className="p-0 h-auto text-gray-300 hover:text-white justify-start">
                <FileText className="h-4 w-4 mr-2" />
                Whitepaper
              </Button>
              <Button variant="link" className="p-0 h-auto text-gray-300 hover:text-white justify-start">
                Tokenomics
              </Button>
              <Button variant="link" className="p-0 h-auto text-gray-300 hover:text-white justify-start">
                Roadmap
              </Button>
              <Button variant="link" className="p-0 h-auto text-gray-300 hover:text-white justify-start">
                Community
              </Button>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-2xl p-6 mb-8 text-center">
          <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
          <p className="text-gray-300 mb-4">Join our Discord for real-time updates and community discussions</p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <MessageCircle className="h-4 w-4 mr-2" />
            Join Discord
          </Button>
        </div>

        {/* Legal */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2024 Atoma. All rights reserved.
            </div>
            <div className="text-sm text-gray-400 text-center md:text-right">
              <span className="text-yellow-400 font-medium">Risk Disclaimer:</span> Cryptocurrency investments 
              carry significant risk. Please conduct your own research and invest responsibly.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
