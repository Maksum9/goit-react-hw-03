
const Contact = ({ contact, onDeleteContact }) => {
  return (
    <div>
      <p>{contact.name}: {contact.number}</p>
      <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
    </div>
  );
};

export default Contact;