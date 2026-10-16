import { NotFoundPage } from 'nextra-theme-docs'
import Link from 'next/link'

export default function NotFound() {
  return (
    <NotFoundPage content="Submit an issue" labels="broken-link">
      <h1>404 – Page Not Found</h1>
      <p>
        The page you are looking for does not exist. Head back to the{' '}
        <Link href="/">documentation home</Link>.
      </p>
    </NotFoundPage>
  )
}
