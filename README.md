# Trustless OSS Documentation

A modern documentation website for Trustless OSS built with Nextra (Docs Theme).

## Features

- 📚 **Modern Documentation**: Built with Nextra's Docs theme
- 🎨 **Brand Matching**: Custom theme matching Trustless OSS branding
- 📱 **Responsive Design**: Works on all devices
- 🔍 **Search**: Built-in search functionality
- 📖 **MDX Support**: Write content with React components
- 🌓 **Dark Mode**: Automatic dark/light theme switching
- 🚀 **Fast Performance**: Built on Next.js with optimized builds

## Tech Stack

- **Next.js 14** - React framework
- **Nextra 3** - Documentation framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **pnpm** - Package manager

## Getting Started

### Development

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Start development server:

   ```bash
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

### Linting

```bash
pnpm lint
```

## Project Structure

```
/
├── pages/              # Documentation pages (MDX)
│   ├── index.mdx      # Home page
│   ├── get-started.mdx
│   ├── features.mdx
│   ├── integrations.mdx
│   ├── api.mdx
│   ├── contributing.mdx
│   ├── faq.mdx
│   └── _meta.json     # Sidebar configuration
├── public/            # Static assets
├── theme.config.tsx   # Nextra theme configuration
├── next.config.mjs    # Next.js configuration
├── tailwind.config.ts # Tailwind configuration
└── package.json       # Dependencies and scripts
```

## Adding New Content

1. Create a new `.mdx` file in the `pages/` directory
2. Add the page to `pages/_meta.json` for sidebar navigation
3. Write content using MDX (Markdown + JSX)

Example page:

```mdx
# Page Title

Content goes here...

## Section

More content...
```

## Theme Configuration

Customize the theme in `theme.config.tsx`:

- Logo and branding
- Navigation links
- Color scheme
- SEO metadata
- Footer content

## Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Trustless-OSS/trustless-oss-docs)

1. Push to GitHub
2. Import to Vercel
3. Configure environment variables
4. Deploy

### Other Platforms

The site can be deployed to any platform that supports Next.js:

- **Netlify**: `next build && next export`
- **AWS Amplify**: Configure for Next.js
- **Railway**: One-click deployment
- **Docker**: Build and deploy containers

## Environment Variables

Create `.env.local` for local development:

```env
# Optional: API keys or configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Contributing

See our [Contributing Guide](./pages/contributing) for details on:

- Code standards
- Pull request process
- Testing requirements
- Documentation guidelines

## License

MIT © Trustless OSS
