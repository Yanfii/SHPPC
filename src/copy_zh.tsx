import React from "react";
import { Link, Text } from "@hackthenorth/north";
import {
  // Stories section
  KoryHeadshotImg,
  KimberHeadshotImg,
  AlexisHeadshotImg,
  AlexHackerHeadshotImg,
  BrunoHackerHeadshotImg,
  JackyHackerHeadshotImg,
  KevinHackerHeadshotImg,
  MichelleHackerHeadshotImg,
  // Sponsors & Partners
  TechyonLogoImg,
  SponsorIllustrationImg,
  // About section imgs
  TrudeauHeadshotImg,
  RecapVidButtonBackgroundImg,
  PlayIconImg,
  EngineeringIllustrationImg,
  CloseIconImg,
  ActivityGradient,
  ActivityImg1,
  ActivityImg2,
  ActivityImg3,
  ActivityImg4,
  HackerGradient,
  HackerImg1,
  HackerImg2,
  HackerImg3,
  HackerImg4,
  HardwareGradient,
  HardwareImg1,
  HardwareImg2,
  HardwareImg3,
  HardwareImg4,
  SpeakerGradient,
  SpeakerImg1,
  SpeakerImg2,
  SpeakerImg3,
  SpeakerImg4,
  WaterlooEngLogoImg,
  // Leaders section
  CatHeadshotImg,
  ChamathHeadshotImg,
  ConnieHeadshotImg,
  DylanHeadshotImg,
  EthanWildingHeadshotImg,
  JeffHeadshotImg,
  JenniferHeadshotImg,
  TiffaniHeadshotImg,
  TracyHeadshotImg,
  VinodHeadshotImg,
  LightbulbBalloonCloudsIllustrationImg,
  // Navbar
  LogoIconLightImg,
  LogoIconDarkImg,
  SocialFacebookImg,
  SocialFacebookImgDark,
  SocialInstaImg,
  SocialInstaImgDark,
  SocialTwitterImg,
  SocialTwitterImgDark,
  SocialEmailImg,
  Robogoose4IllustrationImg,
  MichalHeadshotImg,
  OrganizerHeadshotImg,
  Shanghai
} from "static/img";

interface Sponsor {
  name: string;
  tier: "bronze" | "silver" | "gold" | "startup" | "partner";
  imgSrc: string;
  link: string;
  feature?: {
    text: string;
    link: string;
    linkLabel: string;
  };
}



// Taken from https://github.com/Daplie/knuth-shuffle
const shuffle = <T extends {}>(array: T[]) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};


export default {
  nav: {
    logo: {
      light: LogoIconLightImg,
      dark: LogoIconDarkImg
    },
    sections: ["首页", "Inspection Flow", "Project", "联系我们"],
    socialLinks: [],
    languageButton: {
      text: "Language"
    }
  },
  hero: {
    firstLine: "We provide",
    secondLine: "for the automotive industry.",
    keyWords: ["containment", "inspection", "training"],
    emailNotif: " has been added to our mailing list.",
    emailPlaceholder: "Enter your email address for updates",
    emailDupe: "This email is already on the mailing list!",
    emailError: "Error! Please try again."
  },
  sponsorsSection: {
    heading: "Sponsor a special weekend",
    desc: (
      <>
        <Text variant="sectionText">
          Each year, our sponsors help us unite 1,000+ emerging developers,
          designers, and builders. Our sponsors make it possible for hackers to
          build something they're proud of. Stay tuned as we confirm more
          sponsors for the event.
        </Text>
        <Text variant="sectionText" as="p">
          Interested in sponsoring? Email us at{" "}
          <Link href="mailto:sponsor@hackthenorth.com">
            sponsor@hackthenorth.com
          </Link>
        </Text>
      </>
    ),
    cta: {
      link: "mailto:sponsor@hackthenorth.com",
      label: "Become a sponsor"
    },
    illustration: SponsorIllustrationImg
  },
  about: {
    title: "Shanghai Post Production Consulting Co.Ltd (PPC)",
    sentence1:
      "We are an ISO 9001 certified professional third party organization which provides containment, inspection, and training service for the automotive industry.",
    sentence2:
      "Currently, PPC has more than 40 professional employees including quality engineers and inspection technicians, who have solid experience working in different auto divisions. The range of products which PPC can cover include: chassis systems, exterior parts, interior parts, auto electronics, body and powertrain.",
    gears: [
      {
        name: "speakers",
        body: "Inspiring leaders and mentors from the tech industry",
        images: [
          { id: "speaker1", url: SpeakerImg1 },
          { id: "speaker2", url: SpeakerImg2 },
          { id: "speaker3", url: SpeakerImg3 },
          { id: "speaker4", url: SpeakerImg4 }
        ],
        delay: 2000,
        gradient: { id: "speakerGradient", url: SpeakerGradient }
      },
      {
        name: "activities",
        body: "Enjoy fun and exciting activities throughout the event",
        images: [
          { id: "activity1", url: ActivityImg1 },
          { id: "activity2", url: ActivityImg2 },
          { id: "activity3", url: ActivityImg3 },
          { id: "activity4", url: ActivityImg4 }
        ],
        delay: 4000,
        gradient: { id: "activityGradient", url: ActivityGradient }
      },
      {
        name: "hackers",
        body: "Meet 1,000+ hackers from all around the globe",
        images: [
          { id: "hacker1", url: HackerImg1 },
          { id: "hacker2", url: HackerImg2 },
          { id: "hacker3", url: HackerImg3 },
          { id: "hacker4", url: HackerImg4 }
        ],
        delay: 6000,
        gradient: { id: "hackerGradient", url: HackerGradient }
      },
      {
        name: "hardware",
        body: "Access to state-of-the-art hardware",
        images: [
          { id: "hardware1", url: HardwareImg1 },
          { id: "hardware2", url: HardwareImg2 },
          { id: "hardware3", url: HardwareImg3 },
          { id: "hardware4", url: HardwareImg4 }
        ],
        delay: 8000,
        gradient: { id: "hardwareGradient", url: HardwareGradient }
      }
    ],
    engineering: {
      logo: WaterlooEngLogoImg,
      illustration: EngineeringIllustrationImg,
      text:
        "Our partner of over 5 years, Waterloo Engineering continues to support SHPPC to build a creative, diverse, and unique experience for hackers. The University of Waterloo is home to Canada’s largest engineering school — a pipeline for engineering talent for the world’s leading companies. Ranked among the top 50 engineering schools in the world, the school’s reputation for excellence is built on the foundation of co-op education and a bold history of innovation."
    },
    video: {
      url:
        "https://www.youtube-nocookie.com/embed/P3VhS7jvXN8?autoplay=1&rel=0&amp;showinfo=0",
      closeIcon: CloseIconImg
    }
  },
  storiesSection: {
    heading: "Everything you need to create something incredible",
    desc:
      "For the past 5 years, we’ve continued to inspire students to discover the world around them and empower students like you who are eager to learn and create by providing an environment for you to explore and build with workshops, mentorship, and hardware.",
    stories: [
      {
        person: "Justin Trudeau",
        desc: "Prime Minister of Canada",
        img: TrudeauHeadshotImg,
        quote:
          "When I look around this room, I see quick learners, creative thinkers, and natural risk takers who are not only the leaders of tomorrow, but the leaders of today. You have the power to enact positive change right here right now."
      },
      {
        person: "Kory Jeffrey",
        desc: "Google",
        img: KoryHeadshotImg,
        quote:
          "SHPPC is North America’s premier hackathon. It brings together the best minds from around the world and takes care of all the logistics so that they can focus on learning and creating. Can’t wait to see what they do next year."
      },
      {
        person: "Kimber Schlegelmilch",
        desc: "Lyft",
        img: KimberHeadshotImg,
        quote:
          "SHPPC is one of the best hackathons I've experienced — the organizers are incredible, the projects produced at the end of the weekend are really impressive, and the energy of students and mentors remains insanely high throughout the event."
      },
      {
        person: "Alexis Ohanian",
        desc: "Co-founder of Reddit",
        img: AlexisHeadshotImg,
        quote:
          "There is an undeniable reputation throughout tech of the kind of engineering talent that comes out of the University of Waterloo. The students here are probably going to be the business leaders of this century."
      },
      {
        person: "Alex",
        desc: "SHPPC 2017 Finalist",
        img: AlexHackerHeadshotImg,
        link: "https://devpost.com/software/doppel-gallery",
        quote:
          "I collaborated with different people and had the chance to talk to many interesting people. I got a lot of perspective on the beginning to end of a software development project. My team was able to go from an idea to a working app that we could present to people. It was a really unique experience."
      },
      {
        person: "Bruno",
        desc: "SHPPC 2018 First-time Hacker",
        img: BrunoHackerHeadshotImg,
        link: "https://devpost.com/software/instaface",
        quote:
          "SHPPC was both my first international event and hackathon. I was quite nervous about leaving Brazil and going to the event but once there, everything was better than I could have ever imagined. I met so many cool and interesting people from all over the globe, made a lot of new friends and built something very cool on very little sleep with my team, overall an amazing experience!"
      },
      {
        person: "Jacky",
        desc: "SHPPC 2018 Experienced Hacker",
        img: JackyHackerHeadshotImg,
        link: "https://devpost.com/software/tappit-crypto-payments-over-nfc",
        quote:
          "SHPPC was – and still is – one of the best 36 hours I’ve ever had. Everything from the caffeine and stress-relief dogs to the amazing speakers, mentors, and organizers. It was amazing when you really needed to get a bite or take a break to walk around and see everyone’s amazing projects. SHPPC was a lot of ‘firsts’ and I hope it will be the same for many more in the future."
      },
      {
        person: "Kevin",
        desc: "SHPPC 2014 Finalist",
        img: KevinHackerHeadshotImg,
        link: "https://hackthenorth.devpost.com/submissions/27029-open-pokemon",
        quote:
          "SHPPC was a weekend where I could learn and start a passion for building great products. The experience was transformative and led me to where I am today. What really stood out to me was this sense of camaraderie between different hackers. I walked away from that weekend with so much more knowledge, and I made a lot of close, new friends."
      },
      {
        person: "Michelle",
        desc: "SHPPC 2015/2016 Finalist",
        img: MichelleHackerHeadshotImg,
        link: "https://devpost.com/software/modernized-weasley-clock-yotu43",
        quote:
          "SHPPC was my first (and second) hackathon, and the experience is still unforgettable! Everything SHPPC provided – inspiring speakers, mentors, workshops, food, coffee and free swag – contributed to an awesome supportive environment that made it really fun to hack away for those 36 hours."
      }
    ]
  },
  faq: {
    title: "Contact us",
    body: [
      {
        question: "What is SHPPC?",
        answer:
          "SHPPC is Canada’s biggest hackathon, where 1,000 students of different skill levels come together from around the world to experiment and create unique software or hardware projects from scratch. We empower and enable teams to make something great in only 36 hours by providing an abundance of resources like workshops, mentors, sponsors, and hardware components."
      },
      {
        question: "Who can participate?",
        answer:
          "Students of any education level from anywhere in the world are eligible to apply for SHPPC!"
      },
      {
        question: "How much does it cost to attend SHPPC?",
        answer:
          "Admission to SHPPC is completely free. We also provide food and accommodation for the entire event and help out as much as we can with your transportation to and from the University of Waterloo!"
      },
      {
        question: "How do I get to SHPPC?",
        answer:
          "We will be providing several buses from schools within driving distance of the University of Waterloo, as well as from nearby airports. For students who need to fly to SHPPC, we subsidize as much of your plane ticket as possible."
      },
      {
        question: "How many people can be on a team?",
        answer:
          "You can form teams of up to 4 people. There are no restrictions for who they can be, so you can team up with hackers from any school, country, or experience level. Teams can be formed before or during the event."
      },
      {
        question: "What if I've never been to a hackathon before?",
        answer:
          "SHPPC welcomes students of all skill levels. In previous years, 30% of students have attended SHPPC as their first hackathon. We’ll have talks, mentors and workshops to help you with your project; hackathons can be a great place to learn new skills in a short amount of time. Just be eager to learn, and excited to meet lots of awesome people."
      },
      {
        question: "Can I start working on my hack before the event?",
        answer:
          "No. In the interest of fairness, students should not be working on their projects before SHPPC begins and we do not allow participants to work on pre-existing projects. However, you can familiarize yourself with all the tools and technologies you intend to use beforehand! Hardware will also be provided to hackers who fill out hardware request forms made available after they have been accepted to the event."
      },
      {
        question:
          "What kind of workshops, talks, and activities will there be?",
        answer:
          "Previously, we’ve held workshops and talks for a range of skill levels from beginner to advanced like Intro to Web Development and Team Building. We’ve also had introductory workshops to various programming tools such as APIs, databases and platforms. Activities like VR demos, meetups, and even karaoke happen throughout the weekend. Whether it’s for relaxation or health, novelty or competition, our team has something exciting prepared for you!"
      },
      {
        question: "When will applications for SHPPC 2019 open?",
        answer:
          "They'll be opening in early June - follow us on social media to find out exactly when!"
      },
      {
        question: "404: Question Not Found",
        answer: (
          <>
            If your question is not listed here, please feel free to reach out
            to us at{" "}
            <Link href="mailto:hello@hackthenorth.com">
              hello@hackthenorth.com
            </Link>{" "}
            or on{" "}
            <Link href="https://www.facebook.com/hackthenorth" newTab>
              Facebook
            </Link>
            .
          </>
        )
      }
    ]
  },
  footer: {
    img: Robogoose4IllustrationImg,
    cta: "#YourHackTheNorth • What will you create?",
    links: [
      {
        text: "About SHPPC",
        hyperlink: "#about",
        newTab: false
      },
      {
        text: "Open Source",
        hyperlink: "https://github.com/hackthenorth",
        newTab: true
      },
      {
        text: "Privacy Policy",
        hyperlink: "https://2018.hackthenorth.com/privacy",
        newTab: true
      },
      {
        text: "Code of Conduct",
        hyperlink: "https://2018.hackthenorth.com/code-of-conduct",
        newTab: true
      }
    ],
    socials: [
      {
        name: "Email",
        img: SocialEmailImg,
        link: "mailto:hello@hackthenorth.com"
      },
      {
        name: "Facebook",
        img: SocialFacebookImg,
        link: "https://www.facebook.com/hackthenorth"
      },
      {
        name: "Twitter",
        img: SocialTwitterImg,
        link: "https://twitter.com/hackthenorth"
      },
      {
        name: "Instagram",
        img: SocialInstaImg,
        link: "https://www.instagram.com/hackthenorth/"
      }
    ],
    defaultOrganizerText: "Made with 💛 by students in Waterloo 🇨🇦"
  },
  leaders: {
    title: "Be inspired by industry leaders",
    desc: (
      <Text className="desc" variant="sectionText">
        Tech leaders come to SHPPC to be judges, to speak, and to be on
        the ground innovating with hackers. Stay tuned for updates on this
        year's speakers and judges.
      </Text>
    ),
    img: LightbulbBalloonCloudsIllustrationImg,
    leaders: [
      {
        name: "Cat Noone",
        title: "Founder, Iris",
        img: CatHeadshotImg
      },
      {
        name: "Chamath Palihapitiya",
        title: "CEO and Founder, Social Capital",
        img: ChamathHeadshotImg
      },
      {
        name: "Connie Yang",
        title: "Design Director, Coinbase",
        img: ConnieHeadshotImg
      },
      {
        name: "Dylan Field",
        title: "CEO and Co-founder, Figma",
        img: DylanHeadshotImg
      },
      {
        name: "Ethan Wilding",
        title: "Co-founder, Ledger Labs",
        img: EthanWildingHeadshotImg
      },
      {
        name: "Jeff Coleman",
        title: "Co-founder, Ledger Labs",
        img: JeffHeadshotImg
      },
      {
        name: "Jennifer Dewalt",
        title: "Founder, Zube",
        img: JenniferHeadshotImg
      },
      {
        name: "Tiffani Bell",
        title: "Founder, The Human Utility",
        img: TiffaniHeadshotImg
      },
      {
        name: "Tracy Chou",
        title: "Founding Advisor, Project Include",
        img: TracyHeadshotImg
      },
      {
        name: "Vinod Khosla",
        title: "Co-founder,  Sun Microsystems",
        img: VinodHeadshotImg
      }
    ]
  }
};
