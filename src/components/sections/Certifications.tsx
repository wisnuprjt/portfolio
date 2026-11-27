import Image from "next/image";
import { certifications } from "@/data/achievements";
import SectionHeading from "@/components/ui/SectionHeading";

const providerNames = {
  undip: "Service English Unit, Universitas Diponegoro 2026",
  ibm: "IBM",
  cisco: "Cisco Networking Academy",
  oracle: "Oracle Academy",
  huawei: "Huawei Academy",
} as const;

type Certification = (typeof certifications)[number];

const providerLogos: Record<Certification["provider"], string> = {
  undip: "/images/education/undip.png",
  ibm: "/images/education/ibm.webp",
  cisco: "/images/education/cisco.webp",
  oracle: "/images/education/oracle.png",
  huawei: "/images/education/huawei.webp",
};

export default function Certifications() {
  const certificationsByProvider = certifications.reduce((groups, item) => {
    const providerCertifications = groups.get(item.provider) ?? [];
    providerCertifications.push(item);
    groups.set(item.provider, providerCertifications);
    return groups;
  }, new Map<Certification["provider"], Certification[]>());

  return (
    <div className="certification-block">
      <SectionHeading
        eyebrow="CONTINUOUS LEARNING"
        title="Certifications & Training."
      />
      <div className="certification-list">
        {[...certificationsByProvider].map(([provider, items]) => (
          <section className="certification-group" key={provider}>
            <div className="certification-group-heading">
              <div
                className={`certification-logo certification-logo-${provider}`}
                role="img"
                aria-label={`${providerNames[provider]} logo`}
              >
                <Image
                  src={providerLogos[provider]}
                  alt=""
                  width={48}
                  height={32}
                />
              </div>
              <h3>{providerNames[provider]}</h3>
            </div>
            <ul className="certification-items">
              {items.map((item) => (
                <li className="certification-item" key={item.title}>
                  <span>{item.title}</span>
                  <time dateTime={item.year}>{item.year}</time>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
