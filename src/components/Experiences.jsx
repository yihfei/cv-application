const Experiences = ({ experiences, onDelete }) => {
    return (
        <>
            {experiences.map(exp => (
                <div key={exp.id}>
                    <h2>{exp.title}</h2>
                    <p>{exp.company}</p>
                    <p>{exp.desc}</p>
                    <p>{exp.duration}</p>
                    <button onClick={() => onDelete(exp.id)}>Delete</button>
                </div>
            ))}
        </>
    )
}

export default Experiences