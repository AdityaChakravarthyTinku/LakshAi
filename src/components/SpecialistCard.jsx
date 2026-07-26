import * as Icons from "lucide-react";
import Reveal from "./common/Reveal.jsx";

export default function SpecialistCard({ specialist, delay = 0, onOpenDetails }) {
  const Icon = Icons[specialist.icon] ?? Icons.User;

  return (
    <Reveal delay={delay} className="h-full">
      <article className="flex h-full flex-col rounded-[20px] border border-[#E8E1F4] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C7B8F5] hover:shadow-[0_18px_40px_-24px_rgba(109,40,217,0.32)]">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5F1FF] text-[#7C3AED]">
          <Icon size={20} aria-hidden="true" />
        </span>
        <h3 className="mt-4 text-base font-bold text-[#171126]">{specialist.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[#5F5A6D]">{specialist.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {specialist.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-[#E8E1F4] bg-[#F5F1FF] px-2.5 py-1 text-[0.7rem] font-semibold text-[#5F5A6D]"
            >
              {tag}
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => onOpenDetails(specialist)}
          aria-label={`View role details for ${specialist.title}`}
          className="focus-ring mt-5 inline-flex w-fit items-center gap-1.5 rounded-full text-sm font-bold text-[#7C3AED] transition-colors hover:text-[#6D28D9]"
        >
          Role details
          <Icons.ArrowRight size={16} aria-hidden="true" />
        </button>
      </article>
    </Reveal>
  );
}
