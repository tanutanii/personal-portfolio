import siteConfig from '@/data/site-config.json'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full bg-primary-dark relative pt-12">
      {/* Wave divider */}
      <div className="wave-divider">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-12 md:h-16">
          <path
            d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z"
            fill="rgba(210, 193, 182, 0.06)"
          >
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="
                M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z;
                M0,30 C200,0 400,60 600,30 C800,0 1000,60 1200,30 L1200,60 L0,60 Z;
                M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z
              "
            />
          </path>
          <path
            d="M0,35 C300,55 500,15 700,35 C900,55 1100,15 1200,35 L1200,60 L0,60 Z"
            fill="rgba(210, 193, 182, 0.03)"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M0,35 C300,55 500,15 700,35 C900,55 1100,15 1200,35 L1200,60 L0,60 Z;
                M0,35 C300,15 500,55 700,35 C900,15 1100,55 1200,35 L1200,60 L0,60 Z;
                M0,35 C300,55 500,15 700,35 C900,55 1100,15 1200,35 L1200,60 L0,60 Z
              "
            />
          </path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-gradient-animated mb-2">
              {siteConfig.name}
            </h3>
            <p className="text-gray-400">
              PE/VC analyst exploring AI, policy, and finance.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-serif font-bold text-white mb-4">Links</h4>
            <ul className="space-y-2 text-gray-400">
              {siteConfig.social.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-bold text-white mb-4">Contact</h4>
            <p className="text-gray-400 mb-2">
              <a
                href={`mailto:${siteConfig.email}`}
                className="footer-link hover:text-accent transition-colors"
              >
                {siteConfig.email}
              </a>
            </p>
            <p className="text-gray-400 mb-2">
              <a
                href={`tel:${siteConfig.phone}`}
                className="footer-link hover:text-accent transition-colors"
              >
                {siteConfig.phone}
              </a>
            </p>
            <p className="text-gray-400">
              Based in India
            </p>
          </div>
        </div>

        {/* Divider with glow */}
        <div className="divider-glow mt-12 mb-8" />

        <div className="text-center text-gray-500">
          <p>&copy; {year} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
