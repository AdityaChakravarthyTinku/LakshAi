import Modal from "./Modal.jsx";

/**
 * Placeholder content for Privacy Policy / Terms links. Clearly marked as
 * content that must be replaced with real legal copy before launch.
 */
export default function LegalPlaceholderModal({ isOpen, onClose, title }) {
  const titleId = "legal-modal-title";
  const descId = "legal-modal-desc";

  return (
    <Modal isOpen={isOpen} onClose={onClose} titleId={titleId} descriptionId={descId} maxWidthClass="max-w-lg">
      <h3 id={titleId} className="pr-8 text-xl font-extrabold text-[#171126]">
        {title}
      </h3>
      <p id={descId} className="mt-4 text-sm leading-relaxed text-[#5F5A6D]">
        This is placeholder content only. Replace this section with your
        organization&rsquo;s actual {title.toLowerCase()} before launching the
        site. This placeholder does not constitute a real legal document.
      </p>
      <div className="mt-6 rounded-2xl border border-dashed border-[#E8E1F4] bg-[#F5F1FF] p-4 text-xs font-semibold text-[#7C3AED]">
        Content to be replaced before launch.
      </div>
    </Modal>
  );
}
