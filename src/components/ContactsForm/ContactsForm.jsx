import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

export const ContactsForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addContact({
        id: Date.now().toString(),
        name: event.target.name.value,
        number: event.target.number.value,
      })
    );
    event.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="tel" name="number" placeholder="Number" required />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};
