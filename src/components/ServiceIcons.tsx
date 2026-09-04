import type { ReactNode } from "react";

type IconName = "pc" | "phone" | "wifi" | "server" | "shield" | "code";

const paths: Record<IconName, ReactNode> = {
  pc: (
    <>
      <rect x="2" y="4" width="20" height="13" rx="2" />
      <path d="M8 20 H16" />
      <path d="M12 17 V20" />
    </>
  ),
  phone: (
    <>
      <rect x="6" y="2" width="12" height="20" rx="2.5" />
      <path d="M11 18.5 H13" />
    </>
  ),
  wifi: (
    <>
      <path d="M4 18 A8 8 0 0 1 20 18" />
      <path d="M8 18 A4 4 0 0 1 16 18" />
      <circle cx="12" cy="18" r="1.6" fill="currentColor" stroke="none" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="4" width="18" height="6" rx="1.6" />
      <rect x="3" y="14" width="18" height="6" rx="1.6" />
      <circle cx="7" cy="7" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="7" cy="17" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 L20 6.5 V12 C20 16.5 16.5 20 12 21.5 C7.5 20 4 16.5 4 12 V6.5 Z" />
      <path d="M9 12 L11.5 14.5 L15.5 10" />
    </>
  ),
  code: (
    <>
      <path d="M4 7 H20" />
      <path d="M4 12 H14" />
      <path d="M4 17 H17" />
    </>
  ),
};

export function ServiceIcon({ name }: { name: IconName }) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
