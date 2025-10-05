import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { EDUCATION } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

import "react-vertical-timeline-component/style.min.css";

type EducationCardProps = {
  education: (typeof EDUCATION)[number];
};

// Education Card
const EducationCard = ({ education }: EducationCardProps) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={education.date}
    iconStyle={{ background: "#383E56" }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <div className="text-white text-[24px] font-bold">🎓</div>
      </div>
    }
  >
    {/* Degree & Institution */}
    <div>
      <h3 className="text-white text-[24px] font-bold">{education.degree}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {education.institution}
      </p>
      <p className="text-secondary text-[14px]" style={{ margin: "4px 0" }}>
        {education.location}
      </p>
      {education.grade && (
        <p
          className="text-white-100 text-[14px] font-medium"
          style={{ margin: "8px 0" }}
        >
          {education.grade}
        </p>
      )}
    </div>

    {/* Description Points */}
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {education.description.map((point, i) => (
        <li
          key={`education-point-${i}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

// Education
export const Education = () => {
  return (
    <>
    <SectionWrapper idName="education">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Academic Journey</p>
          <h2 className={styles.sectionHeadText}>Education.</h2>
        </motion.div>

        {/* Education Timeline */}
        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {EDUCATION.map((education, i) => (
              <EducationCard key={i} education={education} />
            ))}
          </VerticalTimeline>
        </div>
      </>
    </SectionWrapper>
    </>
  );
};