import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Particulars from './components/Particulars';
import ParticularsForm from './components/ParticularsForm';
import Education from './components/Education';
import EducationForm from './components/EducationForm';
import Experiences from './components/Experiences';
import ExperienceForm from './components/ExperienceForm';

function App() {
  const [count, setCount] = useState(0);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [school, setSchool] = useState('');
  const [course, setCourse] = useState('');
  const [dateOfStudy, setDateOfStudy] = useState('');

  const[experiences, setExperiences] = useState([]);

  const handleDelete = (id) => {
    const updatedExperiences = experiences.filter(exp => exp.id !== id);
    setExperiences(updatedExperiences);
  };

  const handleAdd = (newExperience) => {
      setExperiences([...experiences, newExperience]);
  };


  return (
    <main>
      
      <div className="form">
        <ParticularsForm handleNameChange={setName} handleEmailChange={setEmail} handlePhoneChange={setPhone}/>
        <EducationForm handleSchoolChange={setSchool} handleCourseChange={setCourse} handleDateOfStudyChange={setDateOfStudy}/>
        <ExperienceForm onAdd={handleAdd} />
      </div>
      <div className="resume"> 
        <Particulars name={name} email={email} phone={phone}/>
        <Education school={school} course={course} dateOfStudy={dateOfStudy} />
        <Experiences experiences={experiences} onDelete={handleDelete} />
      </div>
    </main>
  )
}

export default App
