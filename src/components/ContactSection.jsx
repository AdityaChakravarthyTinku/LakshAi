import { MapPin, Phone, Mail, Clock } from "lucide-react";
import SectionHeader from "./common/SectionHeader.jsx";
import Reveal from "./common/Reveal.jsx";
import ContactForm from "./ContactForm.jsx";
import { contactInfo } from "../data/siteContent.js";

const DETAILS = [
  { icon: MapPin, label: "Office", value: contactInfo.office },
  { icon: Phone, label: "Phone", value: contactInfo.phone },
  { icon: Mail, label: "Email", value: contactInfo.email },
  { icon: Clock, label: "Business hours", value: contactInfo.hours },
];

export default function ContactSection({ preset }) {
  return (
    <section id="contact" className="bg-[#FAF9FF] py-20 sm:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <SectionHeader
          eyebrow="CONTACT"
          heading="Start a Practical Conversation"
          text="Share the business problem, current system, or product idea. No lengthy technical brief is required to begin."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="flex flex-col gap-6 rounded-[22px] border border-[#E8E1F4] bg-white p-7">
              {DETAILS.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F5F1FF] text-[#7C3AED]">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-[0.08em] text-[#5F5A6D]">
                      {label.toUpperCase()}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-[#171126]">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[22px] border border-[#E8E1F4] bg-white p-7 sm:p-9">
              <ContactForm preset={preset} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
