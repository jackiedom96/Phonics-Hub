import {
  BookOpen,
  ClipboardList,
  House,
  MessageSquareShare,
  Search,
  Settings,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { isEditorEnabled } from '../config/runtime.js'

const baseNavItems = [
  {
    to: '/',
    label: 'Home',
    shortLabel: 'Home',
    end: true,
    renderIcon: () => <House size={20} strokeWidth={2.1} />,
  },
  {
    to: '/search',
    label: 'Search',
    shortLabel: 'Search',
    renderIcon: () => <Search size={20} strokeWidth={2.1} />,
  },
  {
    to: '/instructional-support',
    label: 'Instructional',
    shortLabel: 'Teach',
    renderIcon: () => <BookOpen size={20} strokeWidth={2.1} />,
  },
  {
    to: '/evaluation-support',
    label: 'Evaluation',
    shortLabel: 'Eval',
    renderIcon: () => <ClipboardList size={20} strokeWidth={2.1} />,
  },
  {
    to: '/feedback-form',
    label: 'Feedback',
    shortLabel: 'Forms',
    renderIcon: () => <MessageSquareShare size={20} strokeWidth={2.1} />,
  },
]

const editorNavItem = {
  to: '/editor',
  label: 'Editor',
  shortLabel: 'Edit',
  renderIcon: () => <Settings size={20} strokeWidth={2.1} />,
}

export function BottomNav() {
  const navItems = isEditorEnabled ? [...baseNavItems, editorNavItem] : baseNavItems

  return (
    <nav
      className="bottom-nav"
      aria-label="Primary navigation"
      style={{ '--nav-item-count': String(navItems.length) }}
    >
      {navItems.map(({ to, label, shortLabel, renderIcon, end }) => (
        <NavLink
          key={to}
          className={({ isActive }) =>
            `bottom-nav__link${isActive ? ' is-active' : ''}`
          }
          end={end}
          to={to}
        >
          <span className="nav-icon" aria-hidden="true">{renderIcon()}</span>
          <span className="bottom-nav__label bottom-nav__label--full">{label}</span>
          <span className="bottom-nav__label bottom-nav__label--short">{shortLabel}</span>
        </NavLink>
      ))}
    </nav>
  )
}
