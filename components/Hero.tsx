'use client'

export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-primary-dark flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
                Tanish
              </h1>
              <h2 className="text-3xl md:text-4xl font-serif text-accent mb-4">
                Chaudhary
              </h2>
              <p className="text-xl text-gray-300">
                Exploring AI, Policy and Finance | IIM Indore
              </p>
            </div>

            <p className="text-lg text-gray-400 leading-relaxed max-w-md">
              PE/VC focused analyst passionate about AI applications in finance and policy. 
              Building conviction through data-driven insights and strategic thinking.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="px-8 py-3 bg-accent text-primary-dark font-semibold rounded-lg hover:bg-opacity-90 transition-all">
                View Resume
              </button>
              <button className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-primary-dark transition-all">
                Contact
              </button>
            </div>
          </div>

          {/* Right Column - Avatar */}
          <div className="flex items-center justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Animated gradient ring */}
              <div 
                className="absolute inset-0 rounded-full avatar-ring"
                style={{
                  background: `conic-gradient(
                    from 0deg,
                    #d2c1b6 0deg,
                    #456882 90deg,
                    #234c6a 180deg,
                    #1b3c53 270deg,
                    #d2c1b6 360deg
                  )`,
                  padding: '3px',
                }}
              >
                {/* Inner circle with placeholder */}
                <div className="w-full h-full rounded-full bg-primary-dark flex items-center justify-center text-4xl font-serif text-accent">
                  TC
                </div>
              </div>

              {/* Geometric accents */}
              <div className="absolute -top-8 -right-8 w-20 h-20 border-2 border-accent opacity-30 rounded"></div>
              <div className="absolute -bottom-12 -left-12 w-32 h-32 border border-primary-light opacity-20 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
