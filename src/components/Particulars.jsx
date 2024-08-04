

const Particulars = ({name, email, phone}) => {
    return (
        <div className="particulars">
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    )
}

export default Particulars;