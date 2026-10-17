# Hydration Error Fix

## Problem
Console error: "In HTML, `<p>` cannot be a descendant of `<p>`"

This occurred because the `<Step>` component in `docs-ui.tsx` wrapped children in a `<p>` tag. When MDX content (which already contains `<p>` elements) was passed as children, it created invalid nested `<p>` elements.

## Root Cause
In `/components/docs-ui.tsx`, the `Step` component had:
```tsx
{children ? (
  <p style={{ margin: '0.25rem 0 0', opacity: 0.85, lineHeight: 1.6 }}>
    {children}
  </p>
) : null}
```

When used in MDX like:
```mdx
<Step title="...">
  <p>Content</p>
</Step>
```

This created: `<p><p>Content</p></p>` (invalid HTML).

## Solution
Changed the wrapper from `<p>` to `<div>`:
```tsx
{children ? (
  <div style={{ margin: '0.25rem 0 0', opacity: 0.85, lineHeight: 1.6 }}>
    {children}
  </div>
) : null}
```

Now it renders as: `<div><p>Content</p></div>` (valid HTML).

## File Changed
- `/components/docs-ui.tsx` — `Step` component (line ~122)

## Verification
- ✅ Build succeeds: `npm run build` (37 pages, no errors)
- ✅ Dev server runs: `npm run dev` (no hydration warnings)
- ✅ Pagefind indexing: 34 pages indexed, 1470 words

## Status
✅ **FIXED** — No more hydration errors. Ready for deployment.
