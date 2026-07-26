/** The brand's signature mark: a targeting reticle, a literal nod to "Laksh" (aim/focus).
 *  Used in place of generic numbered badges throughout the site. */
export default function Reticle({ className = '', size = 18 }) {
  return (
    <span
      className={`reticle ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <span className="reticle-dot" />
    </span>
  )
}
