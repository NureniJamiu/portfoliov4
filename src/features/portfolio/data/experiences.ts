import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "mcps",
    companyName: "MCPS",
    companyLogo:
      "https://assets.chanhdai.com/images/companies/shadcraft.svg?v=2",
    companyWebsite: "https://marinecriticalparts.com",
    positions: [
      {
        id: "1",
        title: "Software Engineer",
        employmentPeriod: {
          start: "07.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Leading frontend development of the MCPS platform from the ground up as an early-stage startup, shaping architecture decisions, establishing coding standards, and building core product features end-to-end.
- Cut page load time by 40% and TTI by 35% by applying code splitting, lazy loading, and request deduplication across 20+ dashboard routes.
- Standardized component naming conventions across 50+ components, reducing new-developer onboarding time by 25% and increasing codebase maintainability.
- Engineered a virtualized infinite-scroll catalog with the Intersection Observer API, decreasing memory consumption by 60% while sustaining sub-100ms render times across 10,000+ product listings.
- Introduced a Jest performance testing framework covering 15+ critical user flows, driving a 45% reduction in production incidents within the first 3 months of adoption.`,
        skills: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Code Splitting",
          "Lazy Loading",
          "Performance Optimization",
          "Intersection Observer",
          "Jest",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "boughview",
    companyName: "Boughview Innovations",
    companyLogo: "https://assets.chanhdai.com/images/companies/quaric.svg",
    positions: [
      {
        id: "2",
        title: "Software Engineer",
        employmentPeriod: {
          start: "12.2023",
          end: "06.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Built responsive web applications for financial clients including Providus Bank and Goodgate Finance, driving a 25% increase in user engagement through improved UI performance and cross-browser compatibility.
- Implemented pixel-perfect UI designs using React, SASS, and Bootstrap, reducing design-to-development turnaround time by 15% and ensuring cross-browser compatibility.
- Integrated RESTful APIs with frontend logic to enable real-time data interaction, contributing to a smoother user experience for beta users and reducing error reports by 30%.
- Resolved 15+ frontend bugs reported by beta testers within 48 hours, minimizing client downtime.
- Collaborated in Agile sprints with designers, backend engineers, and QA teammates, consistently delivering assigned tasks on schedule.`,
        skills: [
          "React",
          "Next.js",
          "Laravel",
          "Redux",
          "SASS",
          "Bootstrap",
          "REST APIs",
          "Agile",
        ],
      },
      {
        id: "1",
        title: "Software Engineering Intern",
        employmentPeriod: {
          start: "05.2023",
          end: "11.2023",
        },
        employmentType: "Part-time",
        icon: "idea",
        description:
          "- Contributed to 3+ client-facing feature deliverables per sprint, gaining production-level exposure to React codebases across financial and e-commerce verticals.\n- Participated in 10+ structured code review cycles with senior engineers, accelerating technical growth and improving PR quality through iterative feedback.\n- Actively joined daily standups and sprint retrospectives within a 5-person Agile team, building workflow habits that translated directly into the full-time engineering role.",
        skills: [
          "JavaScript",
          "React",
          "Next.js",
          "Laravel",
          "Zustand",
          "Agile",
        ],
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "Chingu",
    companyName: "Chingu",
    companyLogo: "https://assets.chanhdai.com/images/companies/simplamo.webp",
    companyWebsite: "https://chingu.io",
    positions: [
      {
        id: "1",
        title: "Web Developer",
        employmentPeriod: {
          start: "10.2022",
          end: "01.2026",
        },
        employmentType: "Part-time",
        icon: "code",
        description: `- Completed 3+ Chingu Voyages — structured 6-week remote sprints — shipping full project features as part of cross-functional teams of 4–6 developers under real-world delivery constraints.
- Authored 50+ Git commits per voyage across feature development, code reviews, and defect resolution, maintaining a consistent pull-request workflow throughout each cycle.
- Facilitated Agile ceremonies (standups, sprint planning, retrospectives) across distributed time zones, strengthening async communication and on-time delivery discipline.`,
        skills: [
          "React",
          "TypeScript",
          "Node.js",
          "Agile",
          "Remote Collaboration",
          "Git",
        ],
      },
    ],
  },
  {
    id: "IExplore",
    companyName: "IExplore",
    companyLogo: "https://assets.chanhdai.com/images/companies/tungtung.webp",
    positions: [
      {
        id: "1",
        title: "Mobile Developer",
        employmentPeriod: {
          start: "2019",
          end: "2020",
        },
        employmentType: "Contract",
        description: `- Led a full React Native rewrite of an existing mobile app, improving app launch time by 30% and reducing bundle size compared to the legacy codebase.
- Integrated MoMo payment API and native Apple/Google in-app purchase flows, enabling 2 distinct revenue streams in a single production release.
- Streamlined CI/CD across staging and production environments via App Center, cutting deployment lead time by 50% versus the prior manual release process.
- Successfully passed App Store and Google Play compliance reviews on first submission, meeting all platform guidelines without rejection.`,
        icon: "design",
        skills: [
          "React Native",
          "Redux",
          "MoMo Payment API",
          "App Store",
          "Google Play Store",
          "App Center",
          "Agile",
          "Teamwork",
          "Research",
        ],
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "3",
        title: "IU International University of Applied Sciences — Germany",
        employmentPeriod: {
          start: "08.2025",
          end: "2027",
        },
        icon: "education",
        description: `- Pursuing a Bachelor's degree in Computer Science with a focus on Software Engineering, Data Structures, Algorithms, Distributed Systems, and Advanced Databases.
- Maintaining strong academic standing while working concurrently as a Software Engineer, consistently balancing professional deliverables with coursework commitments.`,
        skills: [
          "C++",
          "Java",
          "Python",
          "Data Structures",
          "Algorithms",
          "Advanced Databases",
          "Systems Design",
          "Distributed Systems",
          "Software Engineering",
          "Self-learning",
          "Teamwork",
          "Presentation",
        ],
      },
      {
        id: "2",
        title: "Lagos State University — Nigeria",
        employmentPeriod: {
          start: "03.2022",
          end: "2027",
        },
        icon: "education",
        description: `- Currently pursuing a Bachelor's degree in Project Management Technology, gaining mastery in project planning, risk management, stakeholder communication, and operations strategy.
- Applied coursework to real-world problems by building AmaLearn — a full-stack LMS deployed for 1200+ fellow PM Technology students, centralizing course materials, past questions, and academic resources.
- Developed strong proficiency in Agile and Scrum methodologies through practical team-based coursework projects, directly informing collaborative engineering practices at work.`,
        skills: [
          "Project Management",
          "Agile",
          "Scrum",
          "Risk Management",
          "Stakeholder Communication",
          "Operations Strategy",
          "Microsoft Project",
          "Self-learning",
          "Teamwork",
        ],
      },
      {
        id: "1",
        title: "Newtrend High School",
        employmentPeriod: {
          start: "08.2009",
          end: "06.2014",
        },
        icon: "education",
        description: `- Graduated with distinction, recognized as an outstanding student for academic excellence across secondary school.
- Developed an early interest in technology and web development, building independent projects outside the classroom curriculum.`,
        skills: ["HTML", "CSS", "JavaScript", "Self-learning"],
      },
    ],
  },
]
