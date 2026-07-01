export const pricingPlans = [
  {
    id: "community",
    badge: "",
    name: "Community",
    price: "Free",
    description: "Perfect for learning and personal projects.",
    featured: false,
    cta: "Download",

    features: [
      "React + Vite",
      "Tailwind CSS",
      "Hero Module",
      "Features Module",
      "Community Support",
    ],
  },

  {
    id: "professional",
    badge: "Most Popular",
    name: "Professional",
    price: "$49",

    description:
      "Ideal for freelancers and production applications.",

    featured: true,

    cta: "Purchase",

    features: [
      "Everything in Community",
      "Premium Components",
      "Advanced Animations",
      "Priority Support",
      "Lifetime Updates",
    ],
  },

  {
    id: "enterprise",
    badge: "",
    name: "Enterprise",
    price: "Custom",

    description:
      "Tailored solutions for organizations and large teams.",

    featured: false,

    cta: "Contact Sales",

    features: [
      "Everything in Professional",
      "White Label",
      "Architecture Consulting",
      "Dedicated Support",
      "Training",
    ],
  },
];