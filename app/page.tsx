import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-full px-8 py-4 flex items-center gap-8">
          <a href="#home" className="text-sm font-light hover:text-white/60 transition-colors">Home</a>
          <a href="#products" className="text-sm font-light hover:text-white/60 transition-colors">Products</a>
          <a href="#about" className="text-sm font-light hover:text-white/60 transition-colors">About</a>
          <a href="#pricing" className="text-sm font-light hover:text-white/60 transition-colors">Pricing</a>
          <a href="#reviews" className="text-sm font-light hover:text-white/60 transition-colors">Reviews</a>
        </div>
      </nav>

      <div className="fixed top-8 right-8 z-50">
        <button className="bg-white text-black px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white/90 transition-all hover:scale-105">
          <span className="text-sm font-medium">Contact Us</span>
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            className="rotate-[-45deg]"
          >
            <path d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="container mx-auto px-8 lg:px-16 grid lg:grid-cols-2 gap-12 items-center pt-32 pb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-6xl lg:text-7xl font-light leading-tight tracking-tight">
                LUXURY DESIGN
              </h1>
              <h2 className="text-6xl lg:text-7xl font-light leading-tight tracking-tight">
                UNIQUE, DURABLE
              </h2>
              <h2 className="text-6xl lg:text-7xl font-light leading-tight tracking-tight">
                COMFORTABLE CHAIRS.
              </h2>
            </div>

            <div className="flex gap-4 pt-8">
              <div className="w-32 h-32 rounded-2xl overflow-hidden bg-zinc-900 hover:scale-105 transition-transform cursor-pointer">
                <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                  <img src="/chairs for sale (1).svg" alt="" />
                </div>
              </div>
              <div className="w-32 h-32 rounded-2xl overflow-hidden bg-zinc-900 hover:scale-105 transition-transform cursor-pointer">
                <img src="/chairs for sale (2).svg" alt="" />
              </div>
              <div className="w-32 h-32 rounded-2xl overflow-hidden bg-zinc-900 hover:scale-105 transition-transform cursor-pointer">
               <img src="/chairs for sale (3).svg" alt="" />
              </div>
            </div>

         
            <p className="text-zinc-400 text-base font-light max-w-md leading-relaxed pt-4">
              Our chairs are well crafter to suit any space, crafter and sculpted to your desired taste that will effortlessly fit your space.
            </p>
          </div>

        
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br">
              <div className="w-full h-full flex items-center justify-center">
                <img src="/Frame 47.svg" alt="" />
                
              </div>
            </div>
            
           
            <div className="absolute top-0 left-0 w-32 h-32 opacity-30 pointer-events-none">
              <div className="w-full h-full bg-gradient-to-br from-green-900/30 to-transparent blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Content Section */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <img src="/Property 1=frame 48.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <p className="text-zinc-300 text-lg font-light leading-relaxed">
                At SitCity, we meticulously handcraft each piece using only the finest materials, from supple, full-grain leather to sustainably sourced exotic woods. Our designs are a harmonious blend of timeless elegance and contemporary flair, ensuring that every chair becomes an unparalleled statement in your space.
              </p>
            </div>
          </div>
        </div>
      </section>

    
      <section className="py-32">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-light mb-4">EXPLORE OUR</h3>
            <h3 className="text-5xl font-light">CURATED SELECTION</h3>
          </div>

          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900 mb-4 group-hover:scale-105 transition-transform">
                  <div className="w-full h-full flex items-center justify-center text-zinc-600">
                    <span className="text-xs">Product {item}</span>
                  </div>
                </div>
                <h4 className="text-sm font-light text-zinc-400">Chair Model {item}</h4>
                <p className="text-lg font-medium mt-1">$2,499</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <p className="text-zinc-400 text-lg mb-12">
              We have redefined the art of sittings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '✦', title: 'Premium Materials', desc: 'Full-grain leather & exotic woods' },
              { icon: '◆', title: 'Handcrafted', desc: 'Meticulous attention to detail' },
              { icon: '●', title: 'Timeless Design', desc: 'Contemporary elegance' },
              { icon: '▲', title: 'Comfort First', desc: 'Ergonomic perfection' },
            ].map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="text-4xl text-white/20">{feature.icon}</div>
                <h4 className="text-lg font-medium">{feature.title}</h4>
                <p className="text-sm text-zinc-400 font-light">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-32">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div 
                key={item} 
                className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-orange-900/30 to-zinc-900 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="w-full h-full flex items-center justify-center text-zinc-600">
                  <span className="text-xs">Gallery {item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-stone-200 to-stone-300">
                <div className="w-full h-full flex items-center justify-center text-stone-600">
                  <div className="text-center">
                    <p className="text-sm mb-2">Customer Photo</p>
                    <p className="text-xs opacity-50">Replace with testimonial image</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-xl font-light text-zinc-300 leading-relaxed italic">
                    "The quality and craftsmanship of my SitCity chair exceeded all expectations. It's not just furniture—it's a work of art."
                  </p>
                  <div className="flex items-center gap-3 pt-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800"></div>
                    <div>
                      <p className="font-medium">Sarah Johnson</p>
                      <p className="text-sm text-zinc-500">Interior Designer</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 pt-2">
                  <button className="w-3 h-3 rounded-full bg-white"></button>
                  <button className="w-3 h-3 rounded-full bg-white/20"></button>
                  <button className="w-3 h-3 rounded-full bg-white/20"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-16">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-light flex items-center gap-2">
                <span className="text-3xl">◆</span>
                SITCITY
              </h3>
              <p className="text-sm text-zinc-500 font-light">
                Redefining luxury seating through exceptional craftsmanship.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-4">SHOP</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li><a href="#" className="hover:text-white transition-colors">All Chairs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sale</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-4">COMPANY</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-4">SUPPORT</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
            <p>© 2024 SitCity. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

