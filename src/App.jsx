import { ContactsForm } from "./components/ContactsForm/ContactsForm";
import { ContactList } from "./components/ContactList/ContactList";
import { SearchBox } from "./components/SearchBox/SearchBox";
import "./App.css";

function App() {
  return (
    <>
      <ContactsForm />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;
