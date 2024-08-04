

const Form = ({handleNameChange, handleEmailChange, handlePhoneChange}) => {
    return (
        <div>
            <h2>Add personal particulars</h2>
            <input
                type="text"
                onChange={(event) => handleNameChange(event.target.value)}
                placeholder="Enter your name"
            />
            <input
                type="email"
                onChange={(event) => handleEmailChange(event.target.value)}
                placeholder="Enter your email"
            />
            <input
                type="text"
                onChange={(event) => handlePhoneChange(event.target.value)}
                placeholder="Enter your phone number"
            />
        </div>
    )
}

export default Form;