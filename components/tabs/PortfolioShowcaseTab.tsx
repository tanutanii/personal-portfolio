'use client'

export default function PortfolioShowcaseTab() {
  return (
    <div>
      <div className="section-header">
        <span className="section-index">01</span>
        <h2 className="section-title">Showcase</h2>
        <div className="section-line" />
      </div>

      <div className="glass-card rounded-lg p-8 md:p-10 text-center">
        <p className="mono text-accent/85 text-sm uppercase tracking-wider mb-3">Update in progress</p>
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3">Adding here soon</h3>
        <p className="text-gray-300 max-w-2xl mx-auto">
          New showcase items are being curated and will be published shortly.
        </p>
      </div>
    </div>
  )
}
