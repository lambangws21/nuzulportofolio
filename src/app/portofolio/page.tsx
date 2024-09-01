import ProfileCard from "@/app/portofolio/ProfileCard";
import ExperienceSection from "@/app/portofolio/ExperienceSection";
import SkillSection from "@/app/portofolio/SkillSection";

export default function PortfolioPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <ProfileCard />
      <ExperienceSection />
      <SkillSection />
    </div>
  );
}
