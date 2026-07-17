export interface StatusRow {
  label: string
  value: string
}

export interface StackLayer {
  index: string
  label: string
  chips: string[]
}

export interface Project {
  num: string
  title: string
  description: string
  tags: string[]
  linkHref: string
  linkLabel: string
}

export interface TimelineItem {
  num: string
  when: string
  role: string
  description: string
}

export interface NavLink {
  href: string
  label: string
}
