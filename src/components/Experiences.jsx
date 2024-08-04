const Experiences = ({ experiences, onDelete }) => {
    return (
        <div className="experiences">
            <h2>Professional Experience</h2>
            {experiences.map(exp => (
                <div className="experience" key={exp.id}>
                    <div className="header">
                        <h2 className="title">{exp.title}</h2>
                        <p className="company">{exp.company}</p>
                        <p className="duration">{exp.duration}</p>
                    </div>
                    
                    <p className="desc">{exp.desc}</p>
                    
                    <button onClick={() => onDelete(exp.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default Experiences