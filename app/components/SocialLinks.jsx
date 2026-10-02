import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/monizen_ai/", icon: FaInstagram, color: "#E4405F" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/monizen-ai/", icon: FaLinkedinIn, color: "#0A66C2" },
  { name: "X", href: "https://x.com/MONIZEN_AI", icon: FaXTwitter, color: "#FFFFFF" },
  { name: "Facebook", href: "https://www.facebook.com/share/1cN6wgShm4/", icon: FaFacebookF, color: "#1877F2" },
  { name: "YouTube", href: "https://youtube.com/@monizenai?si=HeMFlUIXWHrio-SU", icon: FaYoutube, color: "#FF0033" },
];

export default function SocialLinks({ className = "", inverse = false }) {
  return (
    <div className={`items-center gap-3 ${className}`}>
      {socialLinks.map(({ name, href, icon: Icon, color }) => (
        <a
          key={name}
          href={href}
          target={href === "#" ? undefined : "_blank"}
          rel={href === "#" ? undefined : "noopener noreferrer"}
          aria-label={name}
          title={name}
          className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
            inverse
              ? name === "X"
                ? "border-white/40 bg-transparent hover:border-white hover:bg-white/10 dark:border-white/10 dark:bg-transparent dark:hover:bg-white/10"
                : "border-white/40 bg-transparent hover:border-white hover:bg-white/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-cyan-400/10"
              : name === "X"
                ? "border-slate-200 bg-transparent hover:bg-cyan-50 dark:border-white/10 dark:bg-transparent dark:hover:bg-cyan-400/10"
                : "border-slate-200 bg-white hover:bg-cyan-50 dark:border-white/10 dark:bg-white/5 dark:hover:bg-cyan-400/10"
          }`}
        >
          <Icon
            aria-hidden="true"
            className="h-[18px] w-[18px]"
            style={{ color: !inverse && name === "X" ? "#0891B2" : color }}
          />
        </a>
      ))}
    </div>
  );
}