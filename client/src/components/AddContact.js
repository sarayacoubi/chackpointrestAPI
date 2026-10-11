import {useState} from "react";
import {useDispatch} from "react-redux";
import {addContact} from "../Redux/Actions";
import {useNavigate} from 'react-router-dom';

const AddCard = () => {

const [name, setName] = useState("");
const [age, setAge] = useState(0);
const [email, setEmail] = useState("");

const dispatch = useDispatch();
const navigate = useNavigate();


  return (
    <div className="addContainer">

 <div className="contact-form-card">
      <h2>Ajouter un contact</h2>
      <form>
        <div className="form-group">
          <label for="name">Nom complet</label>
          <input onChange={(e)=>setName(e.target.value)} type="text" id="name" name="name" placeholder="Ex: Sophie Martin" required />
        </div>

        <div className="form-group">
          <label for="age">Âge</label>
          <input
          onChange={(e)=>setAge(e.target.value)}
            type="number"
            id="age"
            name="age"
            placeholder="Ex: 28"
            min="0"
            max="120"
          />
        </div>

        <div className="form-group">
          <label for="email">Adresse email</label>
          <input
          onChange={(e)=>setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            placeholder="Ex: sophie.martin@example.com"
            required
          />
        </div>

        <button onClick={(e)=> {e.preventDefault() ;dispatch(addContact({name, age, email}, navigate))}} type="submit" className="btn-submit">
          ajouter le contact
        </button>
      </form>
    </div>
    </div>
   
  );
};

export default AddCard;
