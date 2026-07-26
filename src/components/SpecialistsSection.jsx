import { useId, useState } from "react";
import * as Icons from "lucide-react";
import SectionHeader from "./common/SectionHeader.jsx";
import SpecialistCard from "./SpecialistCard.jsx";
import Modal from "./common/Modal.jsx";
import Button from "./common/Button.jsx";
import { specialists } from "../data/siteContent.js";

export default function SpecialistsSection({ onDiscussService }) {
  const [activeSpecialist, setActiveSpecialist] = useState(null);
  const titleId = useId();
  const descId = useId();

  const Icon = activeSpecialist ? Icons[activeSpecialist.icon] ?? Icons.User : null;

  return (
    <section id="specialists" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <SectionHeader
          eyebrow="OUR SPECIALISTS"
          heading="Focused Talent Across AI, Data, and Software"
          text="Build a dedicated role or assemble a cross-functional team based on the stage and technical needs of your product."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {specialists.map((specialist, index) => (
            <SpecialistCard
              key={specialist.id}
              specialist={specialist}
              delay={(index % 4) * 0.06}
              onOpenDetails={setActiveSpecialist}
            />
          ))}
        </div>
      </div>

      <Modal
        isOpen={Boolean(activeSpecialist)}
        onClose={() => setActiveSpecialist(null)}
        titleId={titleId}
        descriptionId={descId}
      >
        {activeSpecialist && (
          <>
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5F1FF] text-[#7C3AED]">
              {Icon && <Icon size={22} aria-hidden="true" />}
            </span>
            <h3 id={titleId} className="mt-4 pr-8 text-2xl font-extrabold text-[#171126]">
              {activeSpecialist.title}
            </h3>
            <p id={descId} className="mt-3 text-[15px] leading-relaxed text-[#5F5A6D]">
              {activeSpecialist.detail.does}
            </p>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="text-xs font-bold tracking-[0.1em] text-[#7C3AED]">
                  COMMON RESPONSIBILITIES
                </h4>
                <ul className="mt-3 flex flex-col gap-2">
                  {activeSpecialist.detail.responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#171126]">
                      <Icons.Check size={16} className="mt-0.5 shrink-0 text-[#0F9D83]" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold tracking-[0.1em] text-[#7C3AED]">
                  TYPICAL OUTPUTS
                </h4>
                <ul className="mt-3 flex flex-col gap-2">
                  {activeSpecialist.detail.outputs.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#171126]">
                      <Icons.Check size={16} className="mt-0.5 shrink-0 text-[#0F9D83]" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="text-xs font-bold tracking-[0.1em] text-[#7C3AED]">
                  WHERE THIS ROLE FITS
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-[#5F5A6D]">
                  {activeSpecialist.detail.teamFit}
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold tracking-[0.1em] text-[#7C3AED]">
                  ENGAGEMENT
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-[#5F5A6D]">
                  {activeSpecialist.detail.engagement}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {activeSpecialist.detail.relatedSolutions.map((solution) => (
                <span
                  key={solution}
                  className="rounded-full border border-[#E8E1F4] bg-[#F5F1FF] px-3 py-1 text-xs font-semibold text-[#5F5A6D]"
                >
                  {solution}
                </span>
              ))}
            </div>

            <Button
              className="mt-7 w-full sm:w-fit"
              onClick={() => {
                setActiveSpecialist(null);
                onDiscussService("Dedicated Technical Specialist");
              }}
            >
              Discuss This Role
            </Button>
          </>
        )}
      </Modal>
    </section>
  );
}
