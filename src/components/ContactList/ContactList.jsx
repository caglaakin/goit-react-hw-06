import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { Contact } from "../Contact/Contact";
import { selectNameFilter } from "../../redux/filtersSlice";
import css from "./ContactList.module.css";

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredList = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.listContainer}>
      {filteredList.length === 0 && <p className={css.noContacts}>No contacts found.</p>}
      {filteredList.length > 0 && (
        <>
          <h2>Contact List</h2>
          <ul className={css.contactList}>
            {filteredList.map((contact) => (
              <li key={contact.id} className={css.contactListItem}>
                <Contact contact={contact} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
