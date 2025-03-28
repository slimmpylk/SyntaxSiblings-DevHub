import SkillBar from "@/components/common/SkillBar";

export default function SkillsSection() {
    const skills = [
        { skill: "Office 365", level: 90 },
        { skill: ".NET", level: 20 },
        { skill: "C/C++", level: 30 },
        { skill: "Frontend (HTML, CSS, JS, TS)", level: 60 },
        { skill: "Python", level: 40 },
        { skill: "SQL", level: 20 },
        { skill: "Linux", level: 65 },
    ];

    return (
        <section id="skills" className="bg-black text-white py-16">
            <div className="container mx-auto px-4 sm:px-8 lg:px-16">
                <h2 className="text-center text-2xl font-bold text-orange-500">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    {skills.map(({ skill, level }, index) => (
                        <SkillBar key={index} skill={skill} level={level} />
                    ))}
                </div>
            </div>
        </section>
    );
}