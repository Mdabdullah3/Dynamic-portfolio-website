import {
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <div>
      <footer className="bg-zinc-950 text-neutral-400">
        <div className='w-11/12 mx-auto'>
          <div className="container mx-auto px-8 pt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
            <div>
              <h3 className="text-xl font-bold text-white mb-6">New York</h3>
              <p className="leading-relaxed">
                123 Business St, Suite 456,
                <br />
                City, State, ZIP Code.
                <br />
                Country
              </p>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Our Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Faq&apos;s
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Services</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    E-commerce Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Graphic Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Consulting & Strategy
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter & Connect */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold text-white mb-6">Newsletter</h3>
              <div className="relative mb-8">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-zinc-800 text-neutral-300 px-5 py-3 pr-12 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white">
                  <Send className="w-5 h-5" />
                </button>
              </div>

              <h3 className="text-xl font-bold text-white mb-6">
                Let&apos;s Connect
              </h3>
              <div>
                <div className="flex gap-4">
                  <a href="#" aria-label="Facebook">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" aria-label="Twitter">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" aria-label="LinkedIn">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" aria-label="YouTube">
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a href="#" aria-label="Instagram">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div
        className="
        relative pt-20
        w-full
        flex items-center justify-center
        overflow-hidden bg-linear-to-b from-black via-[#06248F] to-[#6e73ff] -mb-20
      "
      >
        <h1
          className=" 
          text-[90px] sm:text-[120px] md:text-[280px]
          font-extrabold      
           text-background    
          relative uppercase leading-36                
        "
         
        >
          Me On Spot
        </h1>
      </div>
    </div>
  );
};

export default Footer;
