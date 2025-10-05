import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { fadeIn, textVariant } from "../utils/motion";
import { compertition, edue, fullstack, ifet, mailam, micro, sairam, virtual } from "../assets";

type CertificationCardProps = {
  index: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
};

// Certifications Data
const CERTIFICATIONS = [
  {
    title: "1st Prize - National Level Project Expo",
    issuer: "GRT Institute of Engineering and Technology, Tiruttani",
    date: "October 2024",
    description: "Won 1st prize in the Project Expo at GRT TEXPO'24, the 13th National Level Technical Symposium.",
    image: compertition,
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "October 2024",
    description: "Fundamental certification demonstrating knowledge of cloud concepts, Azure services, workloads, security, and pricing.",
    image: micro,
  },
  {
    title: "Full Stack Development - Value Added Course",
    issuer: "VEI Technologies Pvt Ltd",
    date: "February 2024",
    description: "Completed a 6-day intensive course covering full stack development concepts, conducted by VEI Technologies Pvt Ltd, Chennai.",
    image: fullstack,
  },
  {
    title: "Fluxera 2024 - Electrovate (Participation)",
    issuer: "Sri Sairam Engineering College",
    date: "September 2024",
    description: "Participated in the national-level symposium 'Fluxera 2024', organized by the Department of Electrical and Electronics Engineering, and took part in the event 'Electrovate'.",
    image: sairam,
  },
  {
  title: "GenNext Vision 2025 - Project Fest for Innovators (Participation)",
  issuer: "IFET College of Engineering",
  date: "March 2025",
  description: "Participated in 'GenNext Vision 2025', a project fest for innovators organized by IFET College of Engineering (Autonomous), showcasing innovative ideas and engaging in technical collaboration.",
  image: ifet,
},
{
  title: "TechXplore’25 - National Level Project Contest (Participation)",
  issuer: "Mailam Engineering College",
  date: "March 2025",
  description: "Actively participated in 'TechXplore’25', a National Level Project Contest organized by the Department of Information Technology at Mailam Engineering College, presenting innovative project ideas and demonstrating technical skills.",
  image: mailam,
},
{
  title: "Cybersecurity Virtual Internship",
  issuer: "AICTE - EduSkills (Supported by Palo Alto Networks)",
  date: "June 2024",
  description: "Completed a 10-week virtual internship focused on Cybersecurity, gaining hands-on experience in network security, threat detection, and cloud protection using Palo Alto Networks platforms.",
  image: virtual,
},



];

// Certification Card
const CertificationCard = ({
  index,
  title,
  issuer,
  date,
  description,
  image,
}: CertificationCardProps) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    {/* Certificate Icon */}
    <p className="text-white font-black text-[48px]">🏆</p>

    <div className="mt-1">
      {/* Title */}
      <p className="text-white tracking-wider text-[18px]">{title}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          {/* Issuer */}
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {issuer}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {description} - {date}
          </p>
        </div>

        {/* Certificate Image - Opens in New Tab */}
        <a
          href={image}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group cursor-pointer block"
        >
          <img
            src={image}
            alt={`certificate-${title}`}
            className="w-10 h-10 rounded-full object-cover transition-transform group-hover:scale-110"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white text-xs">🔗</span>
          </div>
        </a>
      </div>
    </div>
  </motion.div>
);

// Feedbacks
export const Feedbacks = () => {
  return (
    <SectionWrapper idName="Certifications">
      <div className="mt-12 bg-black-100 rounded-[20px]">
        <div
          className={cn(
            styles.padding,
            "bg-tertiary rounded-2xl min-h-[300px]"
          )}
        >
          {/* Title */}
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>My achievements & ACTIVITIES</p>
            <h2 className={styles.sectionHeadText}>Certifications.</h2>
          </motion.div>
        </div>

        {/* Certification Card */}
        <div
          className={cn(styles.paddingX, "-mt-20 pb-14 flex flex-wrap gap-7")}
        >
          {CERTIFICATIONS.map((certification, i) => (
            <CertificationCard
              key={certification.title}
              index={i}
              {...certification}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};