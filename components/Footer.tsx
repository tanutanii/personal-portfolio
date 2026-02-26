import siteConfig from '@/data/site-config.json'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full bg-primary-dark border-t border-primary-light/40">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-accent mb-2 accent-glow">
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
