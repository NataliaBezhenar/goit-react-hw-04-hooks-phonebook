import React, { useEffect, useState } from "react";
import shortid from "shortid";

import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  const filteredContacts = () => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((item) => item.id !== id));
  };

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    if (contacts.find((contact) => contact.name === name)) {
      alert(name + " is already in contacts");
      return;
    }
    setContacts([{ id: shortid.generate(), name, number }, ...contacts]);
  };

  return (
    <div className="Phonebook__wrapper">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts </h2>
      <Filter value={filter} onChange={(e) => setFilter(e.target.value)} />
      <ContactList
        contacts={filteredContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}
