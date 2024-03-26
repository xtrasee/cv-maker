import { useState } from "react"
import { v4 as uuid } from "uuid"

export default function Education({ education, setEducation }) {
    const [editIndex, setEditIndex] = useState(-1);
    //checks index if matches i
    const handleEducationChange = (input, value, index) => {
        const newEdu = education.map((edu, i) => {
            if (i === index) {
                return { ...edu, [input]: value };
            }
            return edu;
        });
        setEducation(newEducation);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setEditIndex(-1);
    }

    const newEducation = () => {
        const newId = uuid();

        setEducation([
            ...education,
            {
                school: "",
                degree: "",
                startDate: "",
                endDate: "",
                id: newId,
            }
        ]);

        setEditIndex(newId);
    }

    const deleteEducation = (id) => {
        setEducation(education.filter((edu) => edu.id !== id));
    };

    return (
        <>
            
        </>
    )
}