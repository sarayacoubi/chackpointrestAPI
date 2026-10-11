import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import{deleteContact} from '../Redux/Actions';
const ContactCard = ({ el }) => {
  const dispatch = useDispatch();
  return(
    <div className="contact-card">
    <div className="contact-info">
        <h3>{el.name}</h3>
        <p className="contact-age">{el.age}</p>
        <p className="contact-email">{el.email}</p>
    </div>
    <div className="contact-actions">
      <Link to={`/EditContact/${el._id}`}><button className="btn btn-edit">Éditer</button></Link>  
        <button onClick={()=> dispatch(deleteContact(el._id))} className="btn btn-delete">Supprimer</button>
    </div>
</div>
  )
 
};

export default ContactCard;
