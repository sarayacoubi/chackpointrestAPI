import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getAllContact} from '../Redux/Actions';
import ContactCard from './ContactCard';


const ContactList =()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
dispatch(getAllContact())
    },[])

    const contacts = useSelector(state=> state.contacts)
    return(
        <div className="contactlist">
            
            {
                
               contacts.map((el)=> <ContactCard el={el} key={el._id}/>)
            }
           
        </div>
    )
}

export default ContactList