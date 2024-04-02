import "../styles/Experience.css"
import { useState } from "react";
import { v4 as uuid } from "uuid";
import Form from "./Form";

export default function Experience({ experience, setExperience }) {
  const [editIndex, setEditIndex] = useState(-1);

  const handleExperienceChange = (input, value, index) => {
    const newExperience = experience.map((exp, i) => {
      if (i === index) {
        return { ...exp, [input]: value };
      }
      return exp;
    });
    setExperience(newExperience);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditIndex(-1);
  };

  const addNewExperience = () => {
    const newId = uuid();

    setExperience([
      ...experience,
      {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        location: "",
        description: "",
        id: newId,
      },
    ]);

    setEditIndex(newId);
  };

  const deleteExperience = (id) => {
    setExperience(experience.filter((exp) => exp.id !== id));
  };

  return (
    <>
      {experience.map((exp, index) => (
        <li key={exp.id}>
          <Form
            item={exp}
            fields={[
              "company",
              "position",
              "startDate",
              "endDate",
              "location",
              "description",
            ]}
            displayFields={["company", "position"]}
            handleChange={(input, value) =>
              handleExperienceChange(input, value, index)
            }
            isEditing={editIndex === exp.id}
            onClick={() => setEditIndex(exp.id)}
            onSubmit={handleSubmit}
          />
          {editIndex === -1 && (
            <button onClick={() => deleteExperience(exp.id)}>Delete</button>
          )}
        </li>
      ))}

      {editIndex === -1 && (
        <button onClick={addNewExperience}>Add Experience</button>
      )}
    </>
  );
}