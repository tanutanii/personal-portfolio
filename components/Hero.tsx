'use client'

export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-primary-dark flex items-center justify-center relative overflow-hidden bg-mesh">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 hero-slide-in">
                Tanish
              </h1>
              <h2 className="text-3xl md:text-4xl font-serif text-accent mb-4 hero-slide-in-delay-1 accent-glow">
                Chaudhary
              </h2>
              <p className="text-xl text-gray-300 hero-slide-in-delay-2">
                Exploring AI, Policy and Finance | IIM Indore
              </p>
            </div>

            <p className="text-lg text-gray-400 leading-relaxed max-w-md hero-slide-in-delay-3">
              PE/VC focused analyst passionate about AI applications in finance and policy.
              Building conviction through data-driven insights and strategic thinking.
            </p>

            <div className="flex gap-4 flex-wrap hero-slide-in-delay-4">
              <button className="btn-primary px-8 py-3 bg-accent text-primary-dark font-semibold rounded-lg">
                View Resume
              </button>
              <button className="btn-secondary px-8 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-primary-dark">
                Contact
              </button>
            </div>
          </div>

          {/* Right Column - Avatar */}
          <div className="flex items-center justify-center fade-in-scale">
            <div className="relative w-64 h-64 md:w-80 md:h-80 avatar-float">
              {/* Outer glow ring */}
              <div className="absolute -inset-3 rounded-full avatar-glow" />

              {/* Shimmer gradient ring */}
              <div
                className="absolute inset-0 rounded-full avatar-ring shimmer-ring"
                style={{ padding: '4px' }}
              >
                {/* Inner circle with placeholder */}
                <div className="w-full h-full rounded-full bg-primary-dark flex items-center justify-center text-4xl md:text-5xl font-serif text-accent relative"
                  style={{
                    boxShadow: 'inset 0 -4px 12px rgba(0,0,0,0.3), inset 0 4px 12px rgba(210,193,182,0.08)',
                  }}
                >
                  TC
                </div>
              </div>

              {/* Geometric accents - animated */}
              <div className="absolute -top-8 -right-8 w-20 h-20 border-2 border-accent opacity-30 rounded geo-drift" />
              <div className="absolute -bottom-12 -left-12 w-32 h-32 border border-primary-light rounded-full geo-pulse" />
              <div className="absolute -top-4 -left-6 w-12 h-12 border border-accent opacity-20 rounded-full geo-rotate"
                style={{ borderStyle: 'dashed' }}
              />
              <div className="absolute -bottom-4 -right-6 w-16 h-16 border border-primary-light opacity-15 rounded geo-drift"
                style={{ animationDelay: '2s', animationDuration: '10s' }}
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator">
          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
