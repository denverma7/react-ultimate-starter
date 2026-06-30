import {
  ShieldCheck,
  LayoutDashboard,
  Smartphone,
  Zap,
  Component,
  Accessibility,
} from "lucide-react";

export const features = [
  {
    id: 1,
    title: "Authentication",
    description:
      "Complete authentication flow including login, registration, OTP verification, forgot password, and reset password.",
    icon: ShieldCheck,
    badge: "Core",
    href: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Admin Dashboard",
    description:
      "Beautiful dashboard layout with charts, analytics cards, tables, notifications and reusable widgets.",
    icon: LayoutDashboard,
    badge: "popular",
    href: "#",
    featured: false,
  },
  {
    id: 3,
    title: "Responsive Design",
    description:
      "Every component is built mobile-first and optimized for all screen sizes.",
    icon: Smartphone,
    badge: "New",
    href: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Lightning Fast",
    description:
      "Optimized React architecture with clean reusable components and efficient rendering.",
    icon: Zap,
    badge: "Featuring",
    href: "#",
    featured: true,
  },
  {
    id: 5,
    title: "Reusable Components",
    description:
      "Use only the components you need in any future React project with minimal setup.",
    icon: Component,
    badge: "Core",
    href: "#",
    featured: true,
  },
  {
    id: 6,
    title: "Accessibility",
    description:
      "Keyboard-friendly, semantic HTML and accessibility best practices throughout the framework.",
    icon: Accessibility,
    badge: "Core",
    href: "#",
    featured: false,
  },
];