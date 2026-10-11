import "./App.css";
import NavContacts from "./components/NavContacts";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

function App() {
  return (
    <div className="App">
      <NavContacts></NavContacts>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/ContactList" element={<ContactList></ContactList>} />
        <Route path="/AddContact" element={<AddContact></AddContact>} />
        <Route path="/EditContact/:id" element={<EditContact></EditContact>} />
      </Routes>
    </div>
  );
}

export default App;
