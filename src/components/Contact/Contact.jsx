import css from './Contact.module.css'
import { VscAccount,VscCallIncoming } from "react-icons/vsc";

export default function Contact({person, onDelete}) {
    return (
        
        <div className={css.wraperContact}>
            <div>
        <div className={css.wraperInfo}>
        <VscAccount />
            <p>{person.name}</p>
        </div>
        <div className={css.wraperInfo}>
        <VscCallIncoming />
            <p>{person.number}</p>
        </div>
        </div>
        <button onClick={() => onDelete(person.id)}>
            delete
        </button>
        </div>
    )
}