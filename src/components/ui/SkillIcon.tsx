
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
  javascript: "https://cdn.simpleicons.org/javascript/F7DF1E",
  typescript: "https://cdn.simpleicons.org/typescript/3178C6",
  react: "https://cdn.simpleicons.org/react/61DAFB",
  nextdotjs: "https://cdn.simpleicons.org/nextdotjs/000000",
  nodedotjs: "https://cdn.simpleicons.org/nodedotjs/5FA04E",
  html5: "https://cdn.simpleicons.org/html5/E34F26",
  css3: "https://cdn.simpleicons.org/css/663399",
  express: "https://cdn.simpleicons.org/express/000000",
  mysql: "https://cdn.simpleicons.org/mysql/4479A1",
  espressif: "https://cdn.simpleicons.org/espressif/E7352C",
  arduino: "https://cdn.simpleicons.org/arduino/008184",
  huggingface: "https://cdn.simpleicons.org/huggingface/FFD21E",
  git: "https://cdn.simpleicons.org/git/F05032",
  github: "https://cdn.simpleicons.org/github/181717",
  visualstudiocode:
    "https://cdn.simpleicons.org/visualstudiocode/007ACC",
  postman: "https://cdn.simpleicons.org/postman/FF6C37",
};

const conceptColors: Record<string, string> = {
  restapi: "#FF6C37",
  sql: "#00758F",
  databasedesign: "#4479A1",
  sensorintegration: "#8A2BE2",
  iotcommunication: "#1565C0",
  apiintegration: "#7E57C2",
  datavisualization: "#E4A11B",
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
        data-icon={icon}
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
      style={{ color: icon ? conceptColors[icon] : undefined }}
      aria-label={`${name} icon`}
      aria-hidden="true"
    />
  );
}
