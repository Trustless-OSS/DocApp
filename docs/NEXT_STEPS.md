# Next Steps for Launch

**Timeline:** What to do now that the build is complete.

---

## Immediate (Today/Tomorrow)

### 1. Review Content Quality
- [ ] Read the **home page** (overall feel, tone)
- [ ] Read **what-is-trustless-oss.mdx** (is it clear to non-crypto people?)
- [ ] Read **glossary.mdx** (are definitions helpful?)
- [ ] Pick 2 maintainer pages & 2 contributor pages; read them
- [ ] Check: tone, clarity, any missing steps

**File:** Open in browser or VS Code. Pages are at:
- Home: `/content/index.mdx`
- Start Here: `/content/glossary.mdx`, `/content/what-is-trustless-oss.mdx`
- Maintainers: `/content/m-01-sign-in.mdx` (start here)
- Contributors: `/content/c-01-find-bounty.mdx` (start here)

**Expected:** Friendly, short, no jargon. Every step is clickable/doable.

---

### 2. Answer Open Questions
**Priority order:**

| # | Question | Impact | Answer by |
|---|----------|--------|-----------|
| 3 | USDC issuer address (confirm GA5ZSEJY...) | Wallet security | **TODAY** |
| 5 | Wallet UI button names (exact labels in LOBSTR, Freighter, etc.) | Wallet setup accuracy | **TODAY** |
| 6 | `/pay` semantics (is it % or flat USDC?) | Manage bounty page | **TODAY** |
| 4 | XLM minimum balance + typical fees | Wallet setup estimation | **TOMORROW** |
| 7 | Partial payout behavior (what happens to remainder?) | Manage bounty page | **TOMORROW** |
| 8 | Dispute flow after `/reject` | Troubleshooting + manage page | **TOMORROW** |
| 9 | Full withdrawal consequence (immediate failure?) | Withdraw funds page | **TOMORROW** |
| 12 | Support email (confirm address) | Troubleshooting + FAQ | **TOMORROW** |
| 13 | Video hosting (self-hosted vs YouTube?) | Media capture | **TOMORROW** |

**See:** `/docs/OPEN_QUESTIONS.md` (full table with current assumptions)

---

## This Week

### 3. Capture Media (87 slots)

**Checklist file:** `/docs/MEDIA_TODO.md` — Use this as your capture list.

**Steps:**
1. Start with **wallet setup screenshots** (9 slots) — most critical path
2. Then **home video** (1 video, ~30s)
3. Then maintainer screenshots (36 slots)
4. Then contributor screenshots (20 slots)
5. Then reference/diagram (2 images)

**Folder structure for saves:**
```
/public/media/
  ├── wallet/
  │   ├── lobstr-download.png
  │   ├── lobstr-create.png
  │   └── ...
  ├── maintainer/
  │   ├── signin-page.png
  │   ├── dashboard-repos.png
  │   └── ...
  ├── contributor/
  │   ├── bounty-explorer.png
  │   └── ...
  ├── home/
  │   ├── flow-overview.mp4
  │   └── ...
  └── diagrams/
      └── money-flow.png
```

**For each slot in MEDIA_TODO.md:**
1. Note the **id** (e.g., `wallet-usdc-01`)
2. Capture exactly what it says in **"What to capture"** column
3. Save as `.png` (image) or `.mp4` (video) with the id as filename
4. Save to `/public/media/{category}/` (category is first part of id)
5. Check ✓ in MEDIA_TODO.md status column

**Example:**
- Slot id: `wallet-usdc-01`
- Capture: "LOBSTR home with Assets tab visible"
- Save: `/public/media/wallet/wallet-usdc-01.png`
- Mark: ✓ Done

Once media is saved, the `<MediaSlot>` components will automatically render the real images/videos (replacing the yellow dev-mode placeholders).

---

### 4. Update TODO-VERIFY Comments

Search for `TODO-VERIFY` in .mdx files and replace with real values once product answers questions.

**Examples:**
```mdx
{/* TODO-VERIFY: exact button name in current LOBSTR UI */}
```

Should become:
```mdx
Look for a button labeled "Add Asset"
```

---

### 5. Link Verification

After media is added, run:
```bash
npm run build
```

If build succeeds, all links are valid.

---

## Testing Checklist

- [ ] Build succeeds: `npm run build` → no errors
- [ ] All pages accessible at `localhost:3000/page-name`
- [ ] Sidebar navigation works (click sections, they expand/collapse)
- [ ] Search works (Cmd+K or Ctrl+K)
- [ ] Copy buttons work on bot commands (`<CommandBlock>`)
- [ ] Media loads (screenshots appear, video plays)
- [ ] Responsive (test at 375px, 768px, 1200px widths)
- [ ] Light/dark mode toggle works
- [ ] No broken links (click a few cross-refs: Glossary links from pages, NextStep links)

---

## Deployment

When ready:
```bash
npm run build
npm run start
```

Or push to Vercel:
```bash
git add .
git commit -m "docs: end-user documentation (37 pages, complete rewrite)"
git push
```

---

## Files to Share with Product Team

For review/answers:
1. `/docs/OPEN_QUESTIONS.md` — 14 questions needing answers
2. `/docs/MEDIA_TODO.md` — 87 screenshots/videos to capture (with specs)
3. `/docs/BUILD_SUMMARY.md` — What was built and why

---

## Success Criteria

✅ All 37 pages built without errors
✅ Media captures complete (87 of 87 slots)
✅ Product answers provided (14 of 14 questions)
✅ TODO-VERIFY comments replaced with real values
✅ No broken links
✅ Responsive at 375px–1920px
✅ Search works
✅ Deploys without errors

---

## If Something Breaks

**Build fails?**
- Run `npm run build` for full output
- Check for missing components or syntax errors in .mdx files
- Check `/docs/OPEN_QUESTIONS.md` for product-level issues

**Page doesn't render?**
- Check sidebar title in `/content/_meta.tsx` matches the .mdx filename
- Check front-matter (title, description) in the .mdx file

**Media doesn't show?**
- Verify file path in `<MediaSlot>` matches `/public/media/...` path
- Check filename matches id (e.g., `wallet-usdc-01.png`)

**Links broken?**
- Check page filenames in links (e.g., `/c-01-find-bounty` not `/c-find-bounty`)
- Check sidebar in `_meta.tsx`

---

## Contact / Questions

If anything is unclear:
- Review `/docs/BUILD_SUMMARY.md` (what was built)
- Check `/docs/OPEN_QUESTIONS.md` (what's pending product)
- Look in .mdx files for `TODO-VERIFY` or `TODO` comments

---

## Timeline Estimate

| Task | Time |
|------|------|
| Content review | 1–2 hours |
| Answer open questions | 30 min – 1 hour |
| Capture media (87 slots) | 3–5 hours |
| Update TODO-VERIFY | 30 min |
| Final testing + deploy | 1–2 hours |
| **Total** | **6–11 hours** |

---

**Last updated:** October 2026
**Status:** 37 pages built, ready for media + product input
