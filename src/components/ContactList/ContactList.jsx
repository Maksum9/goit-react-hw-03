
const Contact = ({ contact, onDeleteContact }) => {
  return (
    <div>
      <p>{contact.name}: {contact.number}</p>
      <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
    </div>
  );
};

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <h2>Contact List</h2>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />
      ))}
    </div>
  );
};

export default ContactList;