import "../styles/Input.css"
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";
import Dropdown from "./Dropdown";

export default function Input({
    info,
    setInfo,
    education,
    setEducation,
    experience,
    setExperience
}) {
    return (
        <>
            <div className="input-container">
                <div className="general-container">
                    <General info={info} setInfo={setInfo} />
                </div>
                <div className="education-container">
                    <Dropdown name="Education" className="dropName">
                        <Education education={education} setEducation={setEducation}></Education>
                    </Dropdown>
                </div>
                <div className="experience-container">
                <Dropdown name="Experience" className="dropName">
                        <Experience experience={experience} setExperience={setExperience}></Experience>
                    </Dropdown>
                </div>
            </div>
        </>
    )
}