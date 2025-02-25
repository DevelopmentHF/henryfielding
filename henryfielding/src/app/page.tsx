import Hero from "../components/Hero";
import Experience from "@/components/cv/Experience";

export default function Home() {
  return (
    <div className="flex-col justify-center items-center w-[50%] mx-auto">
      <div className="flex justify-center w-full">
        <Hero name="henry" summaryText="software developer & masters student" />
      </div>

      <div className="flex-col justify-center w-full">
        <h1 className="font-serif px-4 text-2xl font-bold">Experience</h1>
        <Experience
          jobTitle="Software Developer"
          company="Jocapps GmbH"
          jobStartYear="2024"
          jobEndYear="Present"
          jobBulletPoints={["developed and maintain iOS and android webview applications"]}
        />
        <Experience
          jobTitle="Market Research Inteviewer"
          company="CSBA"
          jobStartYear="2022"
          jobEndYear="Present"
          jobBulletPoints={["Developed web applications", "Collaborated with teams", "Implemented features and here is a longer bit of lorem impsum text just to check it"]}
        />
        <Experience
          jobTitle="Retail Team Member"
          company="Hampton Food Store"
          jobStartYear="2022"
          jobEndYear="2022"
          jobBulletPoints={["Developed web applications", "Collaborated with teams", "Implemented features"]}
        />
      </div>
      
      <div className="h-40"></div> {/* Extra space to scroll */}
    </div>
  );
}

