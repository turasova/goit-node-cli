// contacts.js
const fs = require("node:fs/promises");
const path = require("node:path");
const crypto = require("node:crypto");

console.log(__dirname)

//Розкоментуйте і запишить значення

const contactsPath = path.join(__dirname, "db/contacts.json")
console.log(contactsPath)

// TODO: задокументувати кожну функцію
async function listContacts() {
  const data = await fs.readFile(contactsPath, {encoding: 'utf-8'})
    return JSON.parse(data);
}

async function getContactById(contactId) {
    // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  const contacts = await listContacts();
  const contact = contacts.find(item => item.id === contactId)
  return contact || null;
}

async function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
  const contacts = await listContacts();
  const index = contacts.findIndex((item) => item.id === contactId);
  if(index === -1)
  {
    return null;
  }
  const [deleteContact] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
  return deleteContact;
}

async function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту. Повертає null, якщо контакт з таким id не знайдений.
  const contacts = await listContacts();
  const newContact = {
    id: crypto.randomUUID(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
  return newContact;


}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
}