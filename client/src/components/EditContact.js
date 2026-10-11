import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneContact } from "../Redux/Actions";
import {editContact} from '../Redux/Actions';
const EditContact = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneContact(id));
  }, []);

  const contact = useSelector((state) => state.contact);
  console.log(contact);

  const [name, setName] = useState(contact.name);
  const [age, setAge] = useState(contact.age);
  const [email, setEmail] = useState(contact.email);

  useEffect(() => {
    setName(contact.name);
    setAge(contact.age);
    setEmail(contact.email);
  }, [contact]);

  const navigate = useNavigate()

  return (
    <div>
      <h1>edit contact</h1>
      <div className="contact-form-card">
        <h2>modifier un contact</h2>
        <form>
          <div className="form-group">
            <label for="name">Nom complet</label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Ex: Sophie Martin"
              required
            />
          </div>

          <div className="form-group">
            <label for="age">Âge</label>
            <input
              onChange={(e) => setAge(e.target.value)}
              type="number"
              id="age"
              name="age"
              value={age}
              placeholder="Ex: 28"
              min="0"
              max="120"
            />
          </div>

          <div className="form-group">
            <label for="email">Adresse email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Ex: sophie.martin@example.com"
              required
            />
          </div>

          <button
            onClick={(e) => {
              e.preventDefault(); dispatch(editContact(id, {name, email, age}, navigate))
            }}
            type="submit"
            className="btn-submit"
          >
            modifier le contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
