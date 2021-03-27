import s from './List.module.scss'

const ContactListItem = ({ id, name, phone, onRemove }) => {
    return (
        <li className={s.contact_item}>
            <p className={s.contact_name}>{name} </p> :
            <p>{phone}</p>
            <button className={s.delete_button} onClick={() => onRemove(id)}>Delete</button>
        </li>
    )
};
const ContactList = ({ contacts, onRemove }) => {
    if (contacts.length === 0) return null

    return (
        <ul className={s.contact_list}>
            {
                contacts.map((contact) => <ContactListItem key={contact} {...contact} onRemove={onRemove} />)
            }
        </ul>
    )
}
export default ContactList;