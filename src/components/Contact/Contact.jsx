export default function Contact({person, onDelete}) {
    return (
        <>
        <div>
            <p>{person.name}</p>
        </div>
        <div>
            <p>{person.number}</p>
        </div>
        <button onClick={() => onDelete(person.id)}>
            delete
        </button>
        </>
    )
}