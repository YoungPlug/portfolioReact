import { statusRows } from '../data/content'

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-tag">01 — About</div>
            <h2>From storefront to enterprise</h2>
          </div>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            <p>
              I build websites for small and medium-sized businesses — from a
              first landing page to a full online store — and I've also
              worked inside a large team shipping the website and mobile app
              for <strong>one of the biggest retailers in Russia</strong>.
              That range is deliberate: it means I can move fast solo, or
              slot into a bigger team's process without friction.
            </p>
            <p>
              I'm comfortable owning a project end to end: winning the work,
              scoping the build, and managing it through to launch. My core
              tools are <strong>HTML, CSS3, PHP, JavaScript,Typescript, React, Node.js, jQuery, and WordPress</strong>,
              with SEO baked in from the start rather than bolted on after.
            </p>
            <p>
              Alongside the web side, I work in <strong>C# and ASP.NET</strong>{' '}
              for back-end and desktop applications, and in{' '}
              <strong>SwiftUI</strong> for iOS — so a project that needs more
              than a browser doesn't need a second developer.
            </p>
          </div>
          <div className="status-block">
            {statusRows.map((row) => (
              <div className="status-row" key={row.label}>
                <span>{row.label}</span>
                <span>{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
