
"use client";

import { useState } from "react";
import {
  ChartLine,
  Code2,
  Cpu,
  Database,
  Network,
  Plug,
  Radio,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type SkillIconProps = {
  name: string;
  icon?: string;
};

const brandIcons: Record<string, string> = {
  javascript: "https://cdn.simpleicons.org/javascript",
  typescript: "https://cdn.simpleicons.org/typescript",
  react: "https://cdn.simpleicons.org/react",
  nextdotjs: "https://cdn.simpleicons.org/nextdotjs",
  nodedotjs: "https://cdn.simpleicons.org/nodedotjs",
  html5: "https://cdn.simpleicons.org/html5",
  css3: "https://cdn.simpleicons.org/css",
  express: "https://cdn.simpleicons.org/express",
  mysql: "https://cdn.simpleicons.org/mysql",
  espressif: "https://cdn.simpleicons.org/espressif",
  arduino: "https://cdn.simpleicons.org/arduino",
  huggingface: "https://cdn.simpleicons.org/huggingface",
  git: "https://cdn.simpleicons.org/git",
  github: "https://cdn.simpleicons.org/github",
  postman: "https://cdn.simpleicons.org/postman",
  visualstudiocode:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
};

const conceptIcons: Record<string, LucideIcon> = {
  restapi: Network,
  sql: Database,
  databasedesign: Database,
  sensorintegration: Cpu,
  iotcommunication: Radio,
  apiintegration: Plug,
  datavisualization: ChartLine,
};

export default function SkillIcon({ name, icon }: SkillIconProps) {
  const [imageFailed, setImageFailed] = useState(false);

  const brandUrl = icon ? brandIcons[icon] : undefined;
  const ConceptIcon = icon ? conceptIcons[icon] : undefined;

  if (brandUrl && !imageFailed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        className="skill-brand-icon"
        src={brandUrl}
        alt=""
        aria-hidden="true"
        width={16}
        height={16}
        loading="lazy"
        decoding="async"
        onError={() => setImageFailed(true)}
      />
    );
  }

  const FallbackIcon = ConceptIcon ?? Code2;

  return (
    <FallbackIcon
      className="skill-concept-icon"
      size={15}
      strokeWidth={1.8}
      aria-label={`${name} icon`}
      aria-hidden="true"
    />
  );
}
