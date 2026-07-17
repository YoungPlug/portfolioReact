import { stackLayers } from '../data/content'

export default function Stack() {
  return (
    <section id="stack">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-tag">02 — Stack</div>
            <h2>How it's actually built</h2>
          </div>
        </div>
        <div className="layers">
          {stackLayers.map((layer) => (
            <div className="layer" key={layer.index}>
              <div className="layer-label">
                <span className="idx">{layer.index}</span>
                {layer.label}
              </div>
              <div className="chip-row">
                {layer.chips.map((chip) => (
                  <span className="chip" key={chip}>
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
