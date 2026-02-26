export default function Footer() {
  return (
    <footer className="w-full bg-primary-dark border-t border-primary-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-accent mb-2">
              Tanish Chaudhary
            </h3>
            <p className="text-gray-400">
              PE/VC analyst exploring AI, policy, and finance.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-serif font-bold text-white mb-4">Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-accent transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Email</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-bold text-white mb-4">Contact</h4>
            <p className="text-gray-400 mb-2">
              <a href="mailto:tanish@example.com" className="hover:text-accent transition-colors">
                tanish@example.com
              </a>
            </p>
            <p className="text-gray-400">
              Based in India
            </p>
          </div>
        </div>

        <div className="border-t border-primary-light mt-12 pt-8 text-center text-gray-500">
          <p>&copy; 2024 Tanish Chaudhary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
