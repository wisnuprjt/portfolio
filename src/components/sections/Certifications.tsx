import Image from "next/image";
import { Check } from "lucide-react";
import { certifications } from "@/data/achievements";

const providerNames = {
  undip: "UNDIP",
  ibm: "IBM",
  cisco: "cisco",
  oracle: "ORACLE",
  huawei: "HUAWEI",
} as const;

export default function Certifications() {
  return (
    <div className="certification-block">
      <div>
        <p className="eyebrow">CONTINUOUS LEARNING</p>
        <h3>Certifications &amp; credentials.</h3>
      </div>
      <div className="certification-list">
        {certifications.map((item) => (
          <div className="certification-item" key={item.title}>
            <div
              className={`certification-logo certification-logo-${item.provider}`}
              role="img"
              aria-label={`${providerNames[item.provider]} logo`}
            >
              {item.provider === "undip" ? (
                <Image
                  src="/images/education/undip.png"
                  alt=""
                  width={48}
                  height={32}
                />
              ) : (
                <span>{providerNames[item.provider]}</span>
              )}
            </div>
            <span>{item.title}</span>
            <time dateTime={item.year}>{item.year}</time>
            <Check size={15} aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
}
