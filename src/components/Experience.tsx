import { experience } from '../data/content'
import Timeline from './Timeline'

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-tag">04 — Experience</div>
            <h2>The path here</h2>
          </div>
        </div>
        <Timeline items={experience} />
      </div>
    </section>
  )
}
