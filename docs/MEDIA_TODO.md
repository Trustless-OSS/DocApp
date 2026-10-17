# Media Slots TODO

All media slots for Trustless OSS end-user documentation. Track status as media is captured.

---

## Home & Start Here

| ID                   | Page            | Type  | What to capture                                                                                                                                                              | Status |
| -------------------- | --------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| `home-flow-overview` | Home            | video | 3-step flow: maintainer labels → contributor works → merge releases USDC. Duration ~30s. Show bounty labels, PR with "Closes #", merge button, wallet USDC balance increase. | ☐      |
| `money-flow-diagram` | How money flows | image | Diagram with 3 columns (Maintainer → Escrow → Contributor) and arrows showing USDC flow and release on merge.                                                                | ☐      |

---

## Wallet Setup (Critical path)

| ID                  | Page          | Type  | What to capture                                                                                                      | Status |
| ------------------- | ------------- | ----- | -------------------------------------------------------------------------------------------------------------------- | ------ |
| `wallet-install-01` | Create wallet | image | App store / website page for LOBSTR with download/install button visible.                                            | ☐      |
| `wallet-install-02` | Create wallet | image | LOBSTR welcome screen showing "Create Account" and "Sign In" buttons.                                                | ☐      |
| `wallet-install-03` | Create wallet | image | LOBSTR recovery phrase display showing 12 numbered words in order. Include pen-and-paper icon.                       | ☐      |
| `wallet-usdc-01`    | Add USDC      | image | LOBSTR home with "Assets" tab or bottom nav visible.                                                                 | ☐      |
| `wallet-usdc-02`    | Add USDC      | image | LOBSTR Assets page with "Add Asset" or "+" button prominent.                                                         | ☐      |
| `wallet-usdc-03`    | Add USDC      | image | Search results in LOBSTR showing Centre USDC option (issuer: GA5ZSEJY...) highlighted.                               | ☐      |
| `wallet-usdc-04`    | Add USDC      | image | LOBSTR Assets list showing USDC with 0.00 balance after successful add.                                              | ☐      |
| `wallet-xlm-01`     | Get XLM       | image | LOBSTR profile/settings screen with Stellar address visible and copy button.                                         | ☐      |
| `wallet-xlm-02`     | Get XLM       | image | Exchange withdrawal/send form (Coinbase, Uphold, etc.) with Stellar address pasted and amount entered (e.g., 5 XLM). | ☐      |
| `wallet-xlm-03`     | Get XLM       | image | LOBSTR home screen showing XLM balance (e.g., "5.00 XLM").                                                           | ☐      |

---

## Maintainers (12 pages)

| ID                  | Page              | Type  | What to capture                                                                                      | Status |
| ------------------- | ----------------- | ----- | ---------------------------------------------------------------------------------------------------- | ------ |
| `m-signin-01`       | 1. Sign in        | image | Trustless OSS login page with "Sign in with GitHub" button.                                          | ☐      |
| `m-signin-02`       | 1. Sign in        | image | GitHub OAuth/authorization popup asking permission.                                                  | ☐      |
| `m-signin-03`       | 1. Sign in        | image | Empty Trustless OSS dashboard after first login (no repos listed).                                   | ☐      |
| `m-connect-repo-01` | 2. Connect repo   | image | Dashboard "Add repository" or install GitHub App button.                                             | ☐      |
| `m-connect-repo-02` | 2. Connect repo   | image | GitHub App installation page for Trustless OSS.                                                      | ☐      |
| `m-connect-repo-03` | 2. Connect repo   | image | GitHub dialog to select which repositories to install the app on.                                    | ☐      |
| `m-connect-repo-04` | 2. Connect repo   | image | Dashboard after install showing repo in list (status "Not deployed").                                | ☐      |
| `m-deploy-01`       | 3. Deploy escrow  | image | Dashboard repos list with one repo highlighted/clicked.                                              | ☐      |
| `m-deploy-02`       | 3. Deploy escrow  | image | Repository page with "Deploy Escrow" button visible (status: "Not deployed").                        | ☐      |
| `m-deploy-03`       | 3. Deploy escrow  | image | Wallet popup showing escrow deployment transaction approval (fee amount, destination).               | ☐      |
| `m-deploy-04`       | 3. Deploy escrow  | image | Repository page after deploy with status "Escrow Deployed" and balance "0.00 USDC".                  | ☐      |
| `m-fund-01`         | 4. Fund escrow    | image | Repository page with "Fund" button or escrow balance card with fund action.                          | ☐      |
| `m-fund-02`         | 4. Fund escrow    | image | Fund dialog with amount buttons (+$25, +$50, +$100, Custom) and Continue button.                     | ☐      |
| `m-fund-03`         | 4. Fund escrow    | image | Fund review dialog showing amount, destination, and fee with Confirm button.                         | ☐      |
| `m-fund-04`         | 4. Fund escrow    | image | Wallet popup for USDC transfer approval (amount, destination escrow, XLM fee).                       | ☐      |
| `m-fund-05`         | 4. Fund escrow    | image | Repository page after funding with escrow balance updated (e.g., "50.00 USDC").                      | ☐      |
| `m-tiers-01`        | 5. Reward amounts | image | Repository settings page or button to access settings.                                               | ☐      |
| `m-tiers-02`        | 5. Reward amounts | image | Reward tiers configuration page showing low/medium/high/custom tiers and amounts.                    | ☐      |
| `m-tiers-03`        | 5. Reward amounts | image | Edit tier dialog with label name and USDC amount field.                                              | ☐      |
| `m-bounty-01`       | 6. Create bounty  | image | GitHub issue page with labels section and assignee section visible.                                  | ☐      |
| `m-bounty-02`       | 6. Create bounty  | image | GitHub labels dropdown showing "rewarded" label option.                                              | ☐      |
| `m-bounty-03`       | 6. Create bounty  | image | Labels dropdown showing tier options (low, medium, high) with one selected.                          | ☐      |
| `m-bounty-04`       | 6. Create bounty  | image | GitHub issue with "rewarded" + "custom" labels and bot command comment "@Trustless-OSS 75".          | ☐      |
| `m-bounty-05`       | 6. Create bounty  | image | GitHub issue with Trustless OSS bot confirmation comment (bounty amount, escrow status, next steps). | ☐      |
| `m-payout-01`       | 8. Pay out        | image | GitHub PR page showing "Closes #123" in description.                                                 | ☐      |
| `m-payout-02`       | 8. Pay out        | image | GitHub PR page with "Merge pull request" button and dropdown visible.                                | ☐      |
| `m-payout-03`       | 8. Pay out        | image | GitHub PR showing "Merged" status with Trustless OSS bot comment confirming payout.                  | ☐      |
| `m-withdraw-01`     | Withdraw funds    | image | Repository page with "Withdraw" button visible.                                                      | ☐      |
| `m-withdraw-02`     | Withdraw funds    | image | Withdraw dialog with amount slider and "Max" button.                                                 | ☐      |
| `m-withdraw-03`     | Withdraw funds    | image | Wallet popup showing USDC transfer from escrow back to maintainer's wallet.                          | ☐      |
| `m-withdraw-04`     | Withdraw funds    | image | Repository page after withdrawal with reduced escrow balance.                                        | ☐      |
| `m-remove-01`       | Remove repo       | image | Repository page with "Remove" or "Delete" button visible.                                            | ☐      |
| `m-dashboard-01`    | Dashboard tour    | image | Dashboard repositories page with search, filters, pagination, repo cards.                            | ☐      |
| `m-dashboard-02`    | Dashboard tour    | image | Repository detail page with escrow balance, buttons, reward tiers, bounties table.                   | ☐      |
| `m-dashboard-03`    | Dashboard tour    | image | Profile page with name, bio, location, website, skills, payout wallet section.                       | ☐      |
| `m-dashboard-04`    | Dashboard tour    | image | Activity page showing transaction ledger with filters.                                               | ☐      |
| `m-dashboard-05`    | Dashboard tour    | image | Leaderboard page ranking contributors by earnings.                                                   | ☐      |

---

## Contributors (6 pages)

| ID                   | Page              | Type  | What to capture                                                                             | Status |
| -------------------- | ----------------- | ----- | ------------------------------------------------------------------------------------------- | ------ |
| `c-find-01`          | 1. Find bounty    | image | Bounty explorer page with search, filters, list of bounties.                                | ☐      |
| `c-find-02`          | 1. Find bounty    | image | Filter sidebar with status, amount, language, sort options.                                 | ☐      |
| `c-find-03`          | 1. Find bounty    | image | Single bounty card showing repo, title, reward, description.                                | ☐      |
| `c-find-04`          | 1. Find bounty    | image | GitHub issue page with bounty labels and bot confirmation comment.                          | ☐      |
| `c-assigned-01`      | 2. Get assigned   | image | GitHub issue with Trustless OSS bot response to /connect command (wallet link, assignment). | ☐      |
| `c-wallet-01`        | 3. Connect wallet | image | Wallet connection page at app.trustless-oss.xyz/connect with "Connect wallet" button.       | ☐      |
| `c-wallet-02`        | 3. Connect wallet | image | Wallet selector showing LOBSTR, Freighter, xBull, Albedo, Rabet options.                    | ☐      |
| `c-wallet-03`        | 3. Connect wallet | image | Wallet approval popup (user authorizing Trustless OSS connection).                          | ☐      |
| `c-wallet-04`        | 3. Connect wallet | image | Wallet connection page after approval (success state).                                      | ☐      |
| `c-wallet-05`        | 3. Connect wallet | image | Profile page showing "Payout wallet" section with connected Stellar address.                | ☐      |
| `c-pr-01`            | 4. Open PR        | image | GitHub repository page with "New Pull Request" button.                                      | ☐      |
| `c-pr-02`            | 4. Open PR        | image | PR creation page with branch selector (main ← your-branch).                                 | ☐      |
| `c-pr-03`            | 4. Open PR        | image | PR description field showing "Closes #123" at the top.                                      | ☐      |
| `c-pr-04`            | 4. Open PR        | image | PR creation page with "Create Pull Request" button.                                         | ☐      |
| `c-paid-01`          | 5. Get paid       | image | Wallet showing USDC balance increased (e.g., 50 USDC).                                      | ☐      |
| `c-paid-02`          | 5. Get paid       | image | GitHub issue with Trustless OSS bot payout confirmation comment.                            | ☐      |
| `c-change-wallet-01` | Change wallet     | image | Dashboard top right with profile avatar and profile link.                                   | ☐      |
| `c-change-wallet-02` | Change wallet     | image | Profile page "Payout wallet" section with current wallet and "Change" button.               | ☐      |
| `c-change-wallet-03` | Change wallet     | image | Wallet selector for changing payout wallet.                                                 | ☐      |
| `c-change-wallet-04` | Change wallet     | image | Wallet approval popup for new wallet connection.                                            | ☐      |

---

## Summary

**Total media slots:** 87

**By type:**

- Images: ~82
- Videos: 1

**By role:**

- Home/Start Here: 2
- Wallet setup: 9
- Maintainers: 36
- Contributors: 20
- (Overlap/general: included above)

---

## Capture guidelines

### Screenshots

- Use a clear, modern interface (light or dark theme, consistent)
- Highlight relevant buttons/fields (subtle highlight or cursor)
- Avoid sensitive data (real wallet addresses, GitHub tokens, etc.)
- Use example data (e.g., "jane@example.com", fake repo names)
- Format: PNG, 1200–1600px width, rounded corners, subtle border

### Videos

- **home-flow-overview:** 30 seconds
  - Show: Maintainer labels issue → Contributor assigned → PR opens with "Closes #" → Maintainer merges → USDC appears in wallet
  - Audio optional; captions helpful
  - Format: MP4, H.264, 1280×720 or higher

---

## Status legend

- ☐ Not started
- 🔄 In progress
- ✓ Done (file at `/public/media/...`)
