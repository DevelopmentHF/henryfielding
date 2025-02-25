import Hero from "../components/Hero";
import Experience from "@/components/cv/Experience";

export default function Home() {
  return (
    <div className="">
        <Hero name="henry" summaryText="software developer & masters student"></Hero>

        <Experience
            jobTitle="Software Developer"
            company="Jocapps GmbH"
            jobStartYear="2020"
            jobEndYear="Present"
            jobBulletPoints={["Developed web applications", "Collaborated with teams", "Implemented features"]}
        />
        <Experience
            jobTitle="Software Developer"
            company="Jocapps GmbH"
            jobStartYear="2020"
            jobEndYear="Present"
            jobBulletPoints={["Developed web applications", "Collaborated with teams", "Implemented features"]}
        />
        <Experience
            jobTitle="Software Developer"
            company="Jocapps GmbH"
            jobStartYear="2020"
            jobEndYear="Present"
            jobBulletPoints={["Developed web applications", "Collaborated with teams", "Implemented features"]}
        />

        
        <div className="h-40"></div> {/* Extra space to scroll */}
    </div>
  );
}
