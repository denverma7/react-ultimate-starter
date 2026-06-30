import {
  Rocket,
  Boxes,
  HeartHandshake,
} from "lucide-react";

export const heroData = {
  badge: "React Starter Framework",

  title: {
    first: "Build Beautiful",
    second: "React Applications",
  },

  description:
    "A production-ready React starter framework featuring reusable components, authentication, dashboards, responsive layouts, and everything you need to kick-start your next React project.",

  primaryButton: {
    text: "Get Started",
    href: "#features",
  },

  secondaryButton: {
    text: "Live Demo",
    href: "#",
  },

  stats: [
    {
      id: 1,
      value: "500+",
      label: "Projects",
      icon: Rocket,
    },
    {
      id: 2,
      value: "120+",
      label: "Components",
      icon: Boxes,
    },
    {
      id: 3,
      value: "99%",
      label: "Satisfaction",
      icon: HeartHandshake,
    },
  ],
};