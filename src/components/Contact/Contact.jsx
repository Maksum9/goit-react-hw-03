
const Contact = ({ contact, onDelete }) => {
    return (
      <div>
        <p>Name: {contact.name}</p>
        <p>Number: {contact.number}</p>
        <button onClick={() => onDelete(contact.id)}>Delete</button>
      </div>
    );
  }
  
  export default Contact;