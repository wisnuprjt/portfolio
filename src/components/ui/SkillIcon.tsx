
import * as SimpleIcons from "simple-icons";
import type { SimpleIcon } from "simple-icons";
import { Code2 } from "lucide-react";

const iconLibrary =
  SimpleIcons as unknown as Record<string, SimpleIcon>;

const iconMap: Record<string, string> = {
  javascript: "siJavascript",
  typescript: "siTypescript",
  react: "siReact",
  nextdotjs: "siNextdotjs",
  nodedotjs: "siNodedotjs",
  html5: "siHtml5",
  css3: "siCss",
  express: "siExpress",
  mysql: "siMysql",
  espressif: "siEspressif",
  arduino: "siArduino",
  huggingface: "siHuggingface",
  git: "siGit",
  github: "siGithub",
  postman: "siPostman",
  visualstudiocode: "siVisualstudiocode",
  figma: "siFigma",
};

type SkillIconProps = {
  name: string;
  icon?: string;
};

export default function SkillIcon({
  name,
  icon,
}: SkillIconProps) {
  const exportName = icon ? iconMap[icon] : undefined;
  const brand = exportName
    ? iconLibrary[exportName]
    : undefined;

  if (!brand) {
    return (
      <Code2
        className="skill-chip-fallback"
        size={14}
        aria-hidden="true"
      />
    );
  }

  return (
    <svg
      className="skill-brand-icon"
      role="img"
      aria-label={`${name} logo`}
      viewBox="0 0 24 24"
      width="15"
      height="15"
      style={{ color: `#${brand.hex}` }}
    >
      <path
        fill="currentColor"
        d={brand.path}
      />
    </svg>
  );
}
