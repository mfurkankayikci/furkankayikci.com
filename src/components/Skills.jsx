import SkillList from "./SkillList";
import checkMarkIcon from "../assets/checkmark-light.svg";

const Skills = () => {
  return (
    <section id="hero" className="py-24">
      <div className="container h-full mx-auto">
        <div className="grid gap-8 text-center">
          <h2 className="section-title text-4xl md:text-5xl">
            Used Technologies
          </h2>

          <div className="max-w-[90%] md:max-[80%] mx-auto">
            <div className="skill-list">
              <SkillList src={checkMarkIcon} skill="HTML" />
              <SkillList src={checkMarkIcon} skill="CSS" />
              <SkillList src={checkMarkIcon} skill="SASS & SCSS" />
              <SkillList src={checkMarkIcon} skill="JavaScript" />
              <SkillList src={checkMarkIcon} skill="TypeScript" />
            </div>
            <hr />
            <div className="skill-list">
              <SkillList src={checkMarkIcon} skill="Vue" />
              <SkillList src={checkMarkIcon} skill="React" />
              <SkillList src={checkMarkIcon} skill="Vuex" />
              <SkillList src={checkMarkIcon} skill="Pinia" />
              <SkillList src={checkMarkIcon} skill="Redux" />
              <SkillList src={checkMarkIcon} skill="Context API" />
            </div>
            <hr />
            <div className="skill-list">
              <SkillList src={checkMarkIcon} skill="Redux" />
              <SkillList src={checkMarkIcon} skill="Webpack" />
              <SkillList src={checkMarkIcon} skill="Git" />
              <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
              <SkillList src={checkMarkIcon} skill="Bootstrap" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
