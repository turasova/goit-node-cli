// contacts.js
const fs = require("fs/promises");
const path = require("path");



/*
 * Розкоментуйте і запишить значення*/
// const contactsPath = require("./db/contacts.json");
const contactsPath = path.join(__dirname, "./db/contacts.json")


// TODO: задокументувати кожну функцію
async function listContacts() {
    const data = await fs.readFile(contactsPath, 'utf-8')
    console.log(data)
    return JSON.parse(data);
}

async function getContactById(contactId) {
    // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
    
}

function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
}