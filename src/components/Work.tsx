import { projects } from '../data/content'

export default function Work() {
  return (
    <section id="work">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-tag">03 — Selected work</div>
            <h2>A project built end to end</h2>
          </div>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <div className="project" key={project.num}>
              <div className="project-num">{project.num}</div>
              <div>
                <div className="project-title">{project.title}</div>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <a
                className="project-link"
                href={project.linkHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.linkLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
