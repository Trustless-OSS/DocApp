import nextra from 'nextra'

// Set up Nextra with its configuration
const withNextra = nextra({
  // Nextra-specific options
  defaultShowCopyCode: true,
  search: {
    codeblocks: false,
  },
})

// Export the final Next.js config with Nextra included
export default withNextra({
  reactStrictMode: true,
})
