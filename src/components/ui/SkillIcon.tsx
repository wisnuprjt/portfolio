
"use client";

import { useState } from "react";
import {
  Brain,
  Braces,
  Box,
  Calculator,
  Camera,
  ChartLine,
  ClipboardCheck,
  ClipboardList,
  Code2,
  Cpu,
  Database,
  Gamepad2,
  Layers3,
  Lightbulb,
  Monitor,
  Network,
  PanelsTopLeft,
  Plug,
  Radio,
  Route,
  Search,
  ShieldCheck,
  Smartphone,
  UsersRound,
  Workflow,
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
  figma: "https://cdn.simpleicons.org/figma/F24E1E",
  express: "https://cdn.simpleicons.org/express/000000",
  mysql: "https://cdn.simpleicons.org/mysql/4479A1",
  espressif: "https://cdn.simpleicons.org/espressif/E7352C",
  arduino: "https://cdn.simpleicons.org/arduino/008184",
  unity: "https://cdn.simpleicons.org/unity/000000",
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
  aibaseddetection: "#7E57C2",
  fullstackdevelopment: "#3178C6",
  rolebasedaccesscontrol: "#1565C0",
  webapplication: "#3178C6",
  dass21: "#008184",
  scorecalculation: "#E4A11B",
  screeningworkflow: "#FF6C37",
  designthinking: "#E4A11B",
  userresearch: "#3178C6",
  empathymapping: "#F24E1E",
  wireframing: "#663399",
  highfidelityprototyping: "#3178C6",
  usabilitytesting: "#5FA04E",
  targetuseranalysis: "#3178C6",
  userflow: "#7E57C2",
  csharpconcept: "#512BD4",
  gamedevelopment: "#5FA04E",
  assets3d: "#4479A1",
  terraintrackdesign: "#008184",
  gameplaylogic: "#FF6C37",
  cameracontrol: "#663399",
};

const conceptIcons: Record<string, LucideIcon> = {
  restapi: Network,
  sql: Database,
  databasedesign: Database,
  sensorintegration: Cpu,
  iotcommunication: Radio,
  apiintegration: Plug,
  datavisualization: ChartLine,
  aibaseddetection: Brain,
  fullstackdevelopment: Layers3,
  rolebasedaccesscontrol: ShieldCheck,
  webapplication: Monitor,
  dass21: ClipboardList,
  scorecalculation: Calculator,
  screeningworkflow: ClipboardCheck,
  designthinking: Lightbulb,
  userresearch: Search,
  empathymapping: UsersRound,
  wireframing: PanelsTopLeft,
  highfidelityprototyping: Smartphone,
  usabilitytesting: ClipboardCheck,
  targetuseranalysis: UsersRound,
  userflow: Workflow,
  csharpconcept: Braces,
  gamedevelopment: Gamepad2,
  assets3d: Box,
  terraintrackdesign: Route,
  gameplaylogic: Gamepad2,
  cameracontrol: Camera,
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
