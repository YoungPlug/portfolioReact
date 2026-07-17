import type { TimelineItem } from '../types'

interface TimelineProps {
  items: TimelineItem[]
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <div className="tl-item" key={item.num}>
          <div className="tl-num">{item.num}</div>
          <div className="tl-when">{item.when}</div>
          <div className="tl-role">{item.role}</div>
          <div className="tl-desc">{item.description}</div>
        </div>
      ))}
    </div>
  )
}
