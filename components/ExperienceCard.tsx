import { Experience } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
  experience: Experience;
  isActive?: boolean;
};

function ExperienceCard({ experience, isActive = false }: Props) {
  return (
    <article
      className="rounded-2xl overflow-hidden bg-[#0d1b2a] shadow-2xl shadow-black/80 select-none"
      style={{ width: '55vw', maxWidth: '900px' }}
    >
      {/* Top section with company image */}
      <div className="flex flex-col items-center pt-8 pb-6 px-6 bg-gradient-to-b from-[#162736] to-[#0d1b2a]">
        <img
          src={urlFor(experience?.companyImage).url()}
          alt={experience.company || 'Company Logo'}
          className="h-20 w-20 md:h-32 md:w-32 xl:h-40 xl:w-40 rounded-full object-cover
                     ring-4 ring-[#85caff]/20 shadow-lg"
          draggable={false}
        />
      </div>

      {/* Content section */}
      <div className="px-6 md:px-10 pb-8 text-center space-y-3">
        <h4 className="text-lg md:text-3xl font-light text-[#85caff]">
          {experience.jobTitle}
        </h4>
        <p className="text-base md:text-xl font-bold text-[#51b4ff]">
          {experience.company}
        </p>

        {experience.email && (
          <p className="text-sm md:text-base text-[#7aa0c7]/70 lowercase">
            {experience.email}
          </p>
        )}

        {/* Points / bullet items if they exist */}
        {isActive && experience.points && experience.points.length > 0 && (
          <ul className="mt-4 space-y-2 text-left max-h-[120px] overflow-y-auto
                         scrollbar-thin scrollbar-thumb-[#34597e] scrollbar-track-transparent">
            {experience.points.map((point, i) => (
              <li key={i} className="text-sm md:text-base text-[#7aa0c7]/80 flex gap-2">
                <span className="text-[#85caff] shrink-0">▹</span>
                {point}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

export default ExperienceCard;
