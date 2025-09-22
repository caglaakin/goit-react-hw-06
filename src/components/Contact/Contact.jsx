import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export const Contact = ({ contact }) => { 
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteContact(contact.id));

    return (
      <div>
            <p>Name: {contact.name}</p>
        <p>Number: {contact.number}</p>
        <button type="button" onClick={handleDelete}>&#x2716;</button>
      </div>
    );
};