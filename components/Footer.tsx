import siteConfig from '@/data/site-config.json'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full bg-primary-dark relative">
      {/* Sharp divider line */}
      <div className="section-divider" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand - spans 5 cols */}
          <div className="md:col-span-5">
            <h3 className="text-2xl font-semibold text-white tracking-tight mb-2">
              {siteConfig.name}
            </h3>
          </div>

          {/* Links - spans 3 cols */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono font-medium text-accent/50 uppercase tracking-wider mb-4">Links</h4>
            <ul className="space-y-2">
              {siteConfig.social.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link text-gray-400 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - spans 4 cols */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono font-medium text-accent/50 uppercase tracking-wider mb-4">Contact</h4>
            <div className="space-y-2">
              <a
                href={`mailto:${siteConfig.email}`}
                className="footer-link text-gray-400 hover:text-accent transition-colors block"
              >
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="footer-link text-gray-400 hover:text-accent transition-colors block"
              >
                {siteConfig.phone}
              </a>
              <p className="text-xs text-gray-600 font-mono mt-3">
                Based in India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-divider mt-12 mb-6" />

        <div className="flex items-center justify-between">
          <p className="text-xs font-mono text-gray-600">
            &copy; {year} {siteConfig.name}
          </p>
          <p className="text-xs font-mono text-gray-700">
            v1.0
          </p>
        </div>
      </div>
    </footer>
  )
}
