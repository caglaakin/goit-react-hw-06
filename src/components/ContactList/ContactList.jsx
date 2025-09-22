import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { Contact } from "../Contact/Contact";
import { selectNameFilter } from "../../redux/filtersSlice";

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredList = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {filteredList.map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};
