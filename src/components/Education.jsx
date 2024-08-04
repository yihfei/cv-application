
const Education = ({school, course, dateOfStudy}) => {
    return (
        <div className='education'>
            <h2>Education</h2>
            <h3>{school}</h3>
            <p className="course">{course}</p>
            <p className="date">{dateOfStudy}</p>
        </div>
    )
}

export default Education;