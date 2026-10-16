import type { MetaRecord } from 'nextra'
import {
  Hand,
  Rocket,
  Layers,
  Boxes,
  Code2,
  Users,
  HelpCircle,
} from 'lucide-react'
import { SidebarTitle } from '../components/sidebar-title'

const meta: MetaRecord = {
  // --- Section: Getting Started ---
  '-- getting-started': {
    type: 'separator',
    title: 'Getting Started',
  },
  index: {
    title: (
      <SidebarTitle icon={<Hand size={18} />}>Introduction</SidebarTitle>
    ),
  },
  'get-started': {
    title: (
      <SidebarTitle icon={<Rocket size={18} />}>Get Started</SidebarTitle>
    ),
  },
  features: {
    title: <SidebarTitle icon={<Layers size={18} />}>Features</SidebarTitle>,
  },

  // --- Section: Build & Integrate ---
  '-- build': {
    type: 'separator',
    title: 'Build & Integrate',
  },
  integrations: {
    title: (
      <SidebarTitle icon={<Boxes size={18} />}>Integrations</SidebarTitle>
    ),
  },
  api: {
    title: (
      <SidebarTitle icon={<Code2 size={18} />}>API Reference</SidebarTitle>
    ),
  },

  // --- Section: Community ---
  '-- community': {
    type: 'separator',
    title: 'Community',
  },
  contributing: {
    title: (
      <SidebarTitle icon={<Users size={18} />}>Contributing</SidebarTitle>
    ),
  },
  faq: {
    title: <SidebarTitle icon={<HelpCircle size={18} />}>FAQ</SidebarTitle>,
  },
}

export default meta
