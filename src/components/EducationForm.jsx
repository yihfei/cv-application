const Form = ({handleSchoolChange, handleCourseChange, handleDateOfStudyChange}) => {
    return (
        <div>
            <h2>This is Another Component</h2>
            <input
                type="text"
                onChange={(event) => handleSchoolChange(event.target.value)}
                placeholder="Enter your School"
            />
            <input
                type="text"
                onChange={(event) => handleCourseChange(event.target.value)}
                placeholder="Enter your Course"
            />
            <input
                type="date"
                onChange={(event) => handleDateOfStudyChange(event.target.value)}
                placeholder="Enter your Date Of Study"
            />
        </div>
    )
}

export default Form;