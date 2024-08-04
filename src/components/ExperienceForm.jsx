import { useState } from 'react'

const ExperienceForm = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');
    const [desc, setDesc] = useState('');
    const [duration, setDuration] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newExperience = {
            id: Date.now(),
            title,
            company,
            desc,
            duration,
        };
        onAdd(newExperience);
        setTitle('');
        setCompany('');
        setDesc('');
        setDuration('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Professional Experience</h2>
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Company:</label>
                <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} required />
            </div>
            <div>
                <label>Description:</label>
                <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} required />
            </div>
            <div>
                <label>Duration:</label>
                <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} required />
            </div>
            <button type="submit">Add Experience</button>
        </form>
    );
};

export default ExperienceForm;