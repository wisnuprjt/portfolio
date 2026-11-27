import SkillIcon from "@/components/ui/SkillIcon";
import { skills } from "@/data/skills";

const expertiseIcons = new Map(
  skills.flatMap((group) =>
    group.items.map(({ name, icon }) => [name.toLowerCase(), icon] as const),
  ),
);

const projectIconAliases: Record<string, string> = {
  iot: "iotcommunication",
  "hardware sensors": "sensorintegration",
  "ai-based detection": "aibaseddetection",
  "web dashboard": "datavisualization",
  "full-stack development": "fullstackdevelopment",
  "role-based access control": "rolebasedaccesscontrol",
  "system integration": "apiintegration",
  "web application": "webapplication",
  "dass-21": "dass21",
  "score calculation": "scorecalculation",
  "screening workflow": "screeningworkflow",
  "data management": "databasedesign",
  "design thinking": "designthinking",
  "user research": "userresearch",
  "empathy mapping": "empathymapping",
  wireframing: "wireframing",
  "high-fidelity prototyping": "highfidelityprototyping",
  "usability testing": "usabilitytesting",
  "target user analysis": "targetuseranalysis",
  "user flow": "userflow",
  unity: "unity",
  "c#": "csharpconcept",
  "3d game development": "gamedevelopment",
  "3d assets": "assets3d",
  "terrain & track design": "terraintrackdesign",
  "gameplay logic": "gameplaylogic",
  "camera control": "cameracontrol",
};

function getProjectTechnologyIcon(name: string) {
  const key = name.trim().toLowerCase();
  return expertiseIcons.get(key) ?? projectIconAliases[key];
}

export default function ProjectTechStack({
  technologies,
}: {
  technologies: string[];
}) {
  return (
    <div className="tag-list project-tech-list">
      {technologies.map((technology) => (
        <span className="tag skill-tag project-tech-tag" key={technology}>
          <SkillIcon
            name={technology}
            icon={getProjectTechnologyIcon(technology)}
          />
          <span>{technology}</span>
        </span>
      ))}
    </div>
  );
}
