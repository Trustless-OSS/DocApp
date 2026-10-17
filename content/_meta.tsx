import type { MetaRecord } from 'nextra'
import {
  BookOpen,
  Wallet,
  Wrench,
  Code2,
  Terminal,
  HelpCircle,
  FileText,
} from 'lucide-react'
import { SidebarTitle } from '../components/sidebar-title'

const meta: MetaRecord = {
  // --- Home ---
  index: {
    title: <SidebarTitle icon={<BookOpen size={18} />}>Home</SidebarTitle>,
  },

  // --- Section: Start Here ---
  '-- start-here': {
    type: 'separator',
    title: 'Start Here',
  },
  'what-is-trustless-oss': {
    title: (
      <SidebarTitle icon={<BookOpen size={18} />}>
        What is Trustless OSS?
      </SidebarTitle>
    ),
  },
  'how-money-flows': {
    title: (
      <SidebarTitle icon={<Terminal size={18} />}>
        How payouts work
      </SidebarTitle>
    ),
  },
  glossary: {
    title: <SidebarTitle icon={<FileText size={18} />}>Glossary</SidebarTitle>,
  },

  // --- Section: Set Up Your Wallet ---
  '-- wallet-setup': {
    type: 'separator',
    title: 'Set Up Your Wallet',
  },
  'choose-wallet': {
    title: (
      <SidebarTitle icon={<Wallet size={18} />}>Choose a wallet</SidebarTitle>
    ),
  },
  'create-wallet': {
    title: (
      <SidebarTitle icon={<Wallet size={18} />}>
        Create your wallet
      </SidebarTitle>
    ),
  },
  'add-usdc': {
    title: (
      <SidebarTitle icon={<Wallet size={18} />}>
        Add USDC (trustline)
      </SidebarTitle>
    ),
  },
  'get-xlm': {
    title: (
      <SidebarTitle icon={<Wallet size={18} />}>Get XLM for fees</SidebarTitle>
    ),
  },
  'keep-wallet-safe': {
    title: (
      <SidebarTitle icon={<Wallet size={18} />}>Keep it safe</SidebarTitle>
    ),
  },

  // --- Section: For Maintainers ---
  '-- maintainers': {
    type: 'separator',
    title: 'For Maintainers',
  },
  'm-01-sign-in': {
    title: (
      <SidebarTitle icon={<Code2 size={18} />}>
        1. Sign in with GitHub
      </SidebarTitle>
    ),
  },
  'm-02-connect-repo': {
    title: (
      <SidebarTitle icon={<Code2 size={18} />}>
        2. Connect a repository
      </SidebarTitle>
    ),
  },
  'm-03-deploy-escrow': {
    title: (
      <SidebarTitle icon={<Code2 size={18} />}>3. Deploy escrow</SidebarTitle>
    ),
  },
  'm-04-fund-escrow': {
    title: (
      <SidebarTitle icon={<Code2 size={18} />}>4. Fund escrow</SidebarTitle>
    ),
  },
  'm-05-reward-amounts': {
    title: (
      <SidebarTitle icon={<Code2 size={18} />}>
        5. Set reward tiers
      </SidebarTitle>
    ),
  },
  'm-06-create-bounty': {
    title: (
      <SidebarTitle icon={<Code2 size={18} />}>6. Create a bounty</SidebarTitle>
    ),
  },
  'm-07-manage-bounty': {
    title: (
      <SidebarTitle icon={<Code2 size={18} />}>7. Manage a bounty</SidebarTitle>
    ),
  },
  'm-08-pay-out': {
    title: <SidebarTitle icon={<Code2 size={18} />}>8. Pay out</SidebarTitle>,
  },
  'm-withdraw': {
    title: (
      <SidebarTitle icon={<Wrench size={18} />}>Withdraw funds</SidebarTitle>
    ),
  },
  'm-remove-repo': {
    title: (
      <SidebarTitle icon={<Wrench size={18} />}>
        Remove a repository
      </SidebarTitle>
    ),
  },
  'm-dashboard-tour': {
    title: (
      <SidebarTitle icon={<Wrench size={18} />}>Dashboard tour</SidebarTitle>
    ),
  },

  // --- Section: For Contributors ---
  '-- contributors': {
    type: 'separator',
    title: 'For Contributors',
  },
  'c-01-find-bounty': {
    title: (
      <SidebarTitle icon={<Terminal size={18} />}>
        1. Find a bounty
      </SidebarTitle>
    ),
  },
  'c-02-get-assigned': {
    title: (
      <SidebarTitle icon={<Terminal size={18} />}>2. Get assigned</SidebarTitle>
    ),
  },
  'c-03-connect-wallet': {
    title: (
      <SidebarTitle icon={<Terminal size={18} />}>
        3. Connect payout wallet
      </SidebarTitle>
    ),
  },
  'c-04-open-pr': {
    title: (
      <SidebarTitle icon={<Terminal size={18} />}>4. Open a PR</SidebarTitle>
    ),
  },
  'c-05-get-paid': {
    title: (
      <SidebarTitle icon={<Terminal size={18} />}>5. Get paid</SidebarTitle>
    ),
  },
  'c-change-wallet': {
    title: (
      <SidebarTitle icon={<Terminal size={18} />}>
        Change payout wallet
      </SidebarTitle>
    ),
  },

  // --- Section: Reference ---
  '-- reference': {
    type: 'separator',
    title: 'Reference',
  },
  'command-cheat-sheet': {
    title: (
      <SidebarTitle icon={<Terminal size={18} />}>
        Command Cheat Sheet
      </SidebarTitle>
    ),
  },
  troubleshooting: {
    title: (
      <SidebarTitle icon={<HelpCircle size={18} />}>
        Troubleshooting
      </SidebarTitle>
    ),
  },
  faq: {
    title: <SidebarTitle icon={<HelpCircle size={18} />}>FAQ</SidebarTitle>,
  },
}

export default meta
