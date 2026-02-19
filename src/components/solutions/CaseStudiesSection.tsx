import { CASE_STUDIES } from "./caseStudies.data";
import CaseStudyItem from "./CaseStudyItem";

export default function CaseStudiesSection() {
  return (
    <section className="py-32 bg-ecru-white text-heavy-metal px-8 md:px-12">
      <div className="max-w-[1440px] mx-auto space-y-32">
        {CASE_STUDIES.map((study, index) => (
          <CaseStudyItem key={index} study={study} index={index} />
        ))}
      </div>
    </section>
  );
}
