import {
  CircleDollarSign,
  Copy,
  ExternalLink,
  PlugZap,
  Unplug,
  Wallet,
} from 'lucide-react'

type WalletState = 'disconnected' | 'trustline-required' | 'ready'

export function WalletStatePreview({ state }: { state: WalletState }) {
  const connected = state !== 'disconnected'

  return (
    <figure className="wallet-preview">
      <div className="wallet-preview__heading">
        <span>Stellar chain</span>
        <h3>Payout wallet</h3>
        <p>
          Connect a Stellar wallet so merged bounties can release USDC to you.
        </p>
      </div>

      <div className="wallet-preview__mark" aria-hidden="true">
        S
      </div>

      {!connected ? (
        <div className="wallet-preview__panel wallet-preview__panel--empty">
          <p>
            No wallet connected yet. USDC payouts stay locked until a Stellar
            address is on this profile.
          </p>
          <span className="wallet-preview__primary">
            <Wallet size={17} /> Connect Stellar wallet
          </span>
        </div>
      ) : (
        <div
          className={`wallet-preview__panel wallet-preview__panel--${state}`}
        >
          <div className="wallet-preview__account">
            <div>
              <span className="wallet-preview__status">
                {state === 'ready'
                  ? 'Connected'
                  : 'Connected · Action required'}
              </span>
              <strong>GCJGOM...UK2VRK</strong>
            </div>

            {state === 'trustline-required' ? (
              <span className="wallet-preview__trustline">
                <CircleDollarSign size={16} /> Add USDC Trustline
              </span>
            ) : (
              <div className="wallet-preview__balance">
                <span>USDC balance</span>
                <strong>
                  <CircleDollarSign size={26} /> 760.15
                </strong>
              </div>
            )}
          </div>

          <div className="wallet-preview__actions">
            <span>
              <Copy size={16} /> Copy
            </span>
            <span>
              <ExternalLink size={15} /> Expert
            </span>
            <span>
              <Unplug size={16} /> Disconnect
            </span>
          </div>
        </div>
      )}

      <figcaption>
        <PlugZap size={14} />
        {state === 'disconnected' &&
          'Step 3 — connect the funded Stellar wallet.'}
        {state === 'trustline-required' &&
          'Step 4 — the app detects that the USDC trustline is missing.'}
        {state === 'ready' &&
          'Step 6 — after signing, the USDC asset and balance appear.'}
      </figcaption>
    </figure>
  )
}
