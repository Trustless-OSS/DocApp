# Open Questions for Trustless OSS Docs

These are items that need verification or clarification from the product team before finalizing.

| # | Question | Impact | Status | Notes |
|---|----------|--------|--------|-------|
| 1 | **Bot mention:** Is it `@Trustless-OSS`, `@trustless-oss-bot`, or `@toss`? | All command pages | ✅ RESOLVED | Using `@Trustless-OSS` in all docs. Verified correct. |
| 2 | **Network:** Testnet (play money) or mainnet (real money)? | Wallet setup, escrow, payout docs | ✅ RESOLVED | Mainnet (real money). Wallet docs reflect this. |
| 3 | **USDC issuer address** (Stellar mainnet) | Wallet setup security | ⚠️ TODO-VERIFY | Currently documented as `GA5ZSEJYB37JRC5AVCIA5MOP4IC2BTNXYVYCYRDLW34RBWXVLCNQO5P`. Need official confirmation. Docs link to this; users should verify. |
| 4 | **XLM minimum balance** for Stellar account | Wallet setup estimation | ⚠️ TODO-VERIFY | Docs say "a few dollars" (~$5 in XLM lasts months). Need exact minimum balance and typical fee amounts. |
| 5 | **Wallet UI labels** (button names, field labels) | Wallet setup steps | ⚠️ TODO-VERIFY | Steps are generic ("click Fund", "enter amount"). Marked with `TODO-VERIFY` comments for exact UI labels. Needs screenshots. |
| 6 | **`/pay` percentage semantics** | Manage bounty page | ⚠️ TODO-VERIFY | Docs assume `/pay 75` = "75% of bounty". Need to confirm if it's a percentage or flat USDC amount. |
| 7 | **Partial payout behavior** | Manage bounty page | ⚠️ TODO-VERIFY | If bounty is 100 USDC and you `/pay 60`, what happens to the remaining 40? Does it auto-release on merge, or does maintainer have to manually release? |
| 8 | **Dispute resolution flow** after `/reject` | Troubleshooting + manage bounty page | ⚠️ TODO-VERIFY | Exact steps when maintainer rejects work. Who can appeal? What's the timeline? Can contributor request manual review? |
| 9 | **Full withdrawal consequence** | Withdraw funds page | ⚠️ TODO-VERIFY | When maintainer withdraws all funds, do active bounties immediately fail? Do contributors get refunded automatically? Exact flow? |
| 10 | **Bot mention consistency** | All pages | ⚠️ PRODUCT BUG | Dashboard docs say `@trustless-oss-bot`, repo page says `@toss`, command docs say `@Trustless-OSS`. Standardize product-side. |
| 11 | **Cross-chain (CCTP) payouts** | FAQ + features | ⚠️ NOT YET AVAILABLE | Docs do not mention cross-chain. It's not available to users yet; treating as future roadmap. |
| 12 | **Support email or contact** | Troubleshooting + FAQ | ⚠️ TODO-VERIFY | Currently docs reference `support@trustless-oss.xyz`. Confirm this is correct. |
| 13 | **Video hosting platform** | Media slots | ⚠️ TODO | Prefer self-hosted `/media/` (next to public/) or YouTube embeds? |
| 14 | **Refund flow on full withdrawal** | Withdraw funds page + FAQ | ⚠️ TODO-VERIFY | When maintainer does full withdrawal mid-bounty, where does the contributor's refunded USDC go? |

---

## Resolved

✅ #1 — Bot mention: `@Trustless-OSS` (confirmed by user)
✅ #2 — Network: Mainnet, real money (confirmed by user)

---

## Blocked on answers to build/finalize

- **Media slots:** Can't finalize until video hosting decision (#13)
- **Wallet UI steps:** Can't confirm exact button names until screenshots reviewed (#5)
- **Bot command semantics:** Can't finalize manage bounty page until `/pay` and `/work` exact behavior confirmed (#6, #7)

---

## Notes for content review

1. All `TODO-VERIFY` comments in `.mdx` files should be resolved before launch
2. `MEDIA-SLOT` placeholders show where screenshots/videos are needed
3. Docs use plain language (no jargon without explanation); all crypto terms in Glossary
4. Pages follow template: TimeEstimate → steps → warnings → next link → stuck link
5. Bot commands on every page are copy-paste ready (with Copy buttons)
