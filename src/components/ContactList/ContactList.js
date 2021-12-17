import React from "react";
import "./ContactList.css";

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className="ContactList">
    {contacts.map((contact) => (
      <li className="ContactList__item" key={contact.id}>
        {contact.name}: {contact.number}
        <button
          className="ContactList__button"
          onClick={() => onDeleteContact(contact.id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
