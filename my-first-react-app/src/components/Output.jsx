import "../styles/Output.css";

export default function Output({ info, experience, education }) {

    return (
        <div className="output-container">
          <section>
            <h1 className="name">{info.name}</h1>
            <div className="additional-details">
              <h3>{info.phone}</h3> |{" "}
              <h3>{info.email}</h3>
            </div>
          </section>
          <div className="cv-content">
            <h2>EDUCATION</h2>
            <section>
              {education.map((edu) => (
                <div className="education-section" key={edu.id}>
                  <div className="education">
                    <h4 className="output-bold">{edu.school}</h4>
                    <h4>
                      {edu.startDate} {edu.endDate ? "-" : ""} {edu.endDate}
                    </h4>
                  </div>
                  <h4>{edu.degree}</h4>
                </div>
              ))}
            </section>
            <h2>PROFESSIONAL EXPERIENCE</h2>
            <section>
              {experience.map((exp) => (
                <div className="experience-section" key={exp.id}>
                  <div className="experience">
                    <h4 className="output-bold">{exp.company}</h4>
                    <h4>
                      {exp.startDate} {exp.endDate ? "-" : ""} {exp.endDate}
                    </h4>
                  </div>
                  <h4 className="position">{exp.position}</h4>
                  <p>{exp.description}</p>
                </div>
              ))}
            </section>
          </div>
        </div>
    );
}
