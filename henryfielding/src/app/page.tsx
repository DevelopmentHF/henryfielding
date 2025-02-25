import Hero from "../components/Hero";
import Experience from "@/components/cv/Experience";
import Education from "@/components/cv/Education";
import Project from "@/components/cv/Project";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <div className="flex-col justify-center items-center sm:w-[25%] md:w-[50%] lg:w-[50%] xl:w-[50%] mx-auto">
      <div className="flex justify-center w-full">
        <Hero name="henry" summaryText="software developer & masters student" />
      </div>

      <SocialLinks></SocialLinks>

      <div className="flex-col justify-center w-full py-8">
        <h1 className="font-serif px-4 text-2xl font-bold">education</h1>

        <Education
          university="university of melbourne"
          courseName="master of electrical engineering - electronics & embedded systems"
          startYear="2025"
          endYear="2027"
          weightedAverageMark={NaN}
        />

        <Education
          university="university of melbourne"
          courseName="bachelor of science - somputing & software systems"
          startYear="2022"
          endYear="2024"
          weightedAverageMark={78}
        />
      </div>

      <div className="flex-col justify-center w-full py-8">
        <h1 className="font-serif px-4 text-2xl font-bold">experience</h1>
        <Experience
          jobTitle="software developer"
          company="jocapps gmbh"
          jobStartYear="2024"
          jobEndYear="present"
          jobBulletPoints={["developed and maintain iOS and android native webview applications",
            "implement advanced client customisation features for navigation, loading & styling",
            "extended existing advertisement framework"
          ]}
        />
        <Experience
          jobTitle="market research inteviewer"
          company="csba"
          jobStartYear="2022"
          jobEndYear="present"
          jobBulletPoints={["communicate with up to 240 respondents over the phone per day", 
            "follow a structured script to maintain market research code of ethics", 
            "active listening to adapt to respondent's answers and questions"]}
        />
        <Experience
          jobTitle="retail team member"
          company="hampton food store"
          jobStartYear="2022"
          jobEndYear="2022"
          jobBulletPoints={["solo team member present in the store", 
            "cash handling", 
            "open/close responsibility"]}
        />
      </div>

      <div className="flex-col justify-center w-full py-8">
        <h1 className="font-serif px-4 text-2xl font-bold">Projects</h1>

        <Project
          name="medical pantry warehouse management"
          overview="a custom inventory management system to link a physical warehouse to digital shopify presence"
          tools={["nextjs", 
                  "springboot",
                  "supabase",
                  "vercel",
                  "git",
                  "render"]}
          finerDetails={["i did such and such",
            "and also this"
          ]}
        />

        <Project
          name="matchmenu"
          overview="macOS minimalistic menu bar application to track the premier league"
          tools={["java", 
            "springboot"]}
          finerDetails={["i did such and such",
            "and also this"
          ]}
        />

        <Project
          name="quicklove"
          overview="löve2d template to bootstrap common patterns of entity & animation management"
          tools={["java", 
            "springboot"]}
          finerDetails={["i did such and such",
            "and also this"
          ]}
        />

        <Project
          name="ticketpal"
          overview="cissa hackathon best tech winner - blind ticket resale auctions"
          tools={["java", 
            "springboot"]}
          finerDetails={["i did such and such",
            "and also this"
          ]}
        />

        <Project
          name="plantpal"
          overview="cissa hackathon - native iOS application for managing gardens with smart care integration"
          tools={["java", 
            "springboot"]}
          finerDetails={["i did such and such",
            "and also this"
          ]}
        />
      </div>
      
      <div className="h-40"></div> {/* Extra space to scroll */}
    </div>
  );
}

