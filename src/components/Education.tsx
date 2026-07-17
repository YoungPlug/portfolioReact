import { education } from '../data/content'
import Timeline from './Timeline'

export default function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-tag">05 — Education</div>
            <h2>Where it started</h2>
          </div>
        </div>
        <Timeline items={education} />
      </div>
    </section>
  )
}
