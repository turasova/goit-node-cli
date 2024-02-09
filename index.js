const { program} = require('commander');
const contacts = require('./contacts.js');


// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return allContacts;

    case "get":
      // ... id
      const oneContact = await contacts.getContactById(id)
      return oneContact;
    case "add":
      // ... name email phone
      const createContact = await contacts.addContact(name,email,phone)
      return createContact;

    case "remove":
      // ... id
      const deleteContact = await contacts.removeContact(id)
      return deleteContact;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

invokeAction(program.opts()).then(console.log).catch(console.error);
