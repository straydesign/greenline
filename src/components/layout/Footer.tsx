import { SITE, NAV_LINKS } from '@/lib/data';
import GrainOverlay from '@/components/ui/GrainOverlay';

export default function Footer() {
  return (
    <footer className="relative bg-bark text-cream/80">
      <GrainOverlay />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-cream">{SITE.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-cream/60">
              Professional lawn care for homeowners who want a yard they can be proud of. Serving {SITE.serviceArea}.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 font-semibold text-cream">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-cream/60 transition-colors hover:text-amber">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold text-cream">Contact</h4>
            <ul className="space-y-2 text-sm text-cream/60">
              <li>{SITE.phone}</li>
              <li>{SITE.email}</li>
              <li>{SITE.address}</li>
              <li>{SITE.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-8 text-center text-xs text-cream/40">
          &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          <span className="mx-2">&middot;</span>
          <span>Portfolio demo by Stray Design</span>
        </div>
      </div>
    </footer>
  );
}
