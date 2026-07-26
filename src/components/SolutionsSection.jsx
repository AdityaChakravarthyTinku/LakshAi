import { useId, useState } from "react";
import * as Icons from "lucide-react";
import SectionHeader from "./common/SectionHeader.jsx";
import ServiceCard from "./ServiceCard.jsx";
import Modal from "./common/Modal.jsx";
import Button from "./common/Button.jsx";
import { services } from "../data/siteContent.js";

export default function SolutionsSection({ onDiscussService }) {
  const [activeService, setActiveService] = useState(null);
  const titleId = useId();
  const descId = useId();

  const Icon = activeService ? Icons[activeService.icon] ?? Icons.Sparkles : null;

  return (
    <section id="solutions" className="bg-[#FAF9FF] py-20 sm:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <SectionHeader
          eyebrow="OUR SOLUTIONS"
          heading="Focused AI and Software Capabilities"
          text="From data foundations to deployed AI products, Laksh AI provides the technical capabilities required to move from an idea to a reliable production system."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              delay={(index % 3) * 0.08}
              onOpenDetails={setActiveService}
            />
          ))}
        </div>
      </div>

      <Modal
        isOpen={Boolean(activeService)}
        onClose={() => setActiveService(null)}
        titleId={titleId}
        descriptionId={descId}
      >
        {activeService && (
          <>
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6D28D9] to-[#C026D3]">
              {Icon && <Icon size={22} className="text-white" aria-hidden="true" />}
            </span>
            <h3 id={titleId} className="mt-4 pr-8 text-2xl font-extrabold text-[#171126]">
              {activeService.title}
            </h3>
            <p id={descId} className="mt-3 text-[15px] leading-relaxed text-[#5F5A6D]">
              {activeService.shortDescription}
            </p>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="text-xs font-bold tracking-[0.1em] text-[#7C3AED]">
                  CORE CAPABILITIES
                </h4>
                <ul className="mt-3 flex flex-col gap-2">
                  {activeService.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2 text-sm text-[#171126]">
                      <Icons.Check size={16} className="mt-0.5 shrink-0 text-[#0F9D83]" aria-hidden="true" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold tracking-[0.1em] text-[#7C3AED]">
                  TYPICAL DELIVERABLES
                </h4>
                <ul className="mt-3 flex flex-col gap-2">
                  {activeService.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#171126]">
                      <Icons.Check size={16} className="mt-0.5 shrink-0 text-[#0F9D83]" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-xs font-bold tracking-[0.1em] text-[#7C3AED]">
                SUITABLE BUSINESS SCENARIOS
              </h4>
              <ul className="mt-3 flex flex-col gap-2">
                {activeService.scenarios.map((scenario) => (
                  <li key={scenario} className="text-sm leading-relaxed text-[#5F5A6D]">
                    {scenario}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {activeService.relatedSpecialists.map((specialist) => (
                <span
                  key={specialist}
                  className="rounded-full border border-[#E8E1F4] bg-[#F5F1FF] px-3 py-1 text-xs font-semibold text-[#5F5A6D]"
                >
                  {specialist}
                </span>
              ))}
            </div>

            <Button
              className="mt-7 w-full sm:w-fit"
              onClick={() => {
                setActiveService(null);
                onDiscussService(activeService.title);
              }}
            >
              Discuss This Solution
            </Button>
          </>
        )}
      </Modal>
    </section>
  );
}
