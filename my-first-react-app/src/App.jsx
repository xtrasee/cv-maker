import './App.css'
import { useState } from 'react';
import Output from "./components/Output";
import Input from "./components/Input";
import { v4 as uuid } from "uuid";

const defaultGeneralInfo = {
  name: "Tracy Nguyen",
  email: "mail@gmail.com",
  phone: "123-456-7890",
}

const defaultEducationInfo = [
  {
  school: "University of California, San Diego",
  degree: "Bachelors in Business Psychology",
  startDate: "09/2019",
  endDate: "06/2023",
  id: uuid()
  }
]

const defaultExperienceInfo = [
  {
    company: "Microsoff",
    position: "Web Developer",
    startDate: "01/2023",
    endDate: "Present",
    location: "San Diego",
    description: "Made cool websites... of course",
    id: uuid()
  }
]


function App() {
  const [info, setInfo] = useState(defaultGeneralInfo);
  const [education, setEducation] = useState(defaultEducationInfo);
  const [experience, setExperience] = useState(defaultExperienceInfo);
  return (
    <div className='main-card'>
      <Input
        info={info}
        setInfo={setInfo}
        education={education}
        setEducation={setEducation}
        experience={experience}
        setExperience={setExperience}
      />
      <Output info={info} experience={experience} education={education}></Output>
    </div>
  )
}

export default App
