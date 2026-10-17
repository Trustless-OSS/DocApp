import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'
import Image from 'next/image'
import { ThemeToggle } from './theme-toggle'
import { FooterContent } from './footer-content'
import { Analytics } from '@vercel/analytics/next'

export const metadata = {
  metadataBase: new URL('https://docs.trustless-oss.xyz'),
  title: {
    default: 'Trustless OSS Documentation',
    template: '%s – Trustless OSS',
  },
  description:
    'Documentation for the Trustless-OSS project to help new users learn how to integrate and use it in their repositories and organizations.',
  applicationName: 'Trustless OSS Docs',
  openGraph: {
    title: 'Trustless OSS Documentation',
    description:
      'Escrow-backed GitHub bounties on the Stellar ecosystem. For the community, by the community.',
    siteName: 'Trustless OSS',
    type: 'website',
    images: [{ url: '/banner.png', width: 1200, height: 400 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@trustless_oss',
  },
  icons: { icon: '/logo.png' },
}

const TossLogo = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
    <Image
      src="/logo.png"
      alt="Trustless OSS"
      width={60}
      height={60}
      priority
    />
    <span
      style={{ fontSize: '1.85rem', fontWeight: 800, whiteSpace: 'nowrap' }}
    >
      Trustless <span style={{ color: 'var(--toss-blue)' }}>OSS</span>
    </span>
  </div>
)

const banner = (
  <Banner storageKey="trustless-oss-v1" dismissible>
    🚀 Fund the work, merge the proof, release the reward.{' '}
    <a
      href="https://www.trustless-oss.xyz"
      style={{ textDecoration: 'underline', fontWeight: 600 }}
    >
      Learn more →
    </a>
  </Banner>
)

const navbar = (
  <Navbar logo={<TossLogo />} projectLink="https://github.com/Trustless-OSS">
    <ThemeToggle />
  </Navbar>
)

const footer = (
  <Footer>
    <FooterContent />
  </Footer>
)

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head
        color={{ hue: 212, saturation: 90, lightness: { light: 45, dark: 60 } }}
      />
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/Trustless-OSS/trustless-oss-docs/tree/main"
          footer={footer}
          editLink="Edit this page on GitHub"
          darkMode={false}
          sidebar={{ defaultMenuCollapseLevel: 1, autoCollapse: true }}
          toc={{ title: 'On This Page', float: false }}
        >
          {children}
        </Layout>
        <Analytics />
      </body>
    </html>
  )
}
