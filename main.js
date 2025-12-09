"use strict";
// Create a container for output
const container = document.createElement("div");
container.id = "output";
document.body.appendChild(container);
// Helper function to append text to container
function appendMessage(message) {
    const output = document.getElementById("output");
    if (output) {
        const p = document.createElement("p");
        p.textContent = message;
        output.appendChild(p);
    }
}
// Initial contact list
const contacts = [
    { name: "Alex", email: "alex@gmail.com" },
    { name: "Maria", email: "maria@gmail.com" },
    { name: "John", email: "john@gmail.com" },
];
// New contact to add
const newContact = {
    name: "Alex",
    email: "alex@gmail.com",
};
// add(contact)
const add = (contact) => {
    if (!contact.name || !contact.email) {
        appendMessage(`Error: "Missing fields"`);
        console.log(`Error: "Missing fields"`);
    }
    else if (contacts.some(c => c.email === contact.email)) {
        appendMessage(`Error: "Duplicate was found"`);
        console.log(`Error: "Duplicate was found"`);
    }
    else {
        contacts.push(contact);
        appendMessage(`Success: "Contact ${contact.name} was added"`);
        console.log(`Success: "Contact ${contact.name} was added"`);
    }
};
add(newContact);
// remove(email)
const remove = (email) => {
    let contactToRemove;
    const found = contacts.some((c, i) => {
        if (c.email === email) {
            contactToRemove = i;
            return true;
        }
        return false;
    });
    if (!found || contactToRemove === undefined) {
        appendMessage(`Error: "Contact not found"`);
        console.log(`Error: "Contact not found"`);
    }
    else {
        appendMessage(`Success: "${contacts[contactToRemove].name} was removed"`);
        console.log(`Success: "${contacts[contactToRemove].name} was removed"`);
        contacts.splice(contactToRemove, 1);
    }
};
remove("maria@gmail.com");
// edit(email, newData)
const editData = contacts.map(contact => {
    if (contact.name === "John" && !contact.email) {
        appendMessage(`Error: "Contact not found"`);
        console.log(`Error: "Contact not found"`);
        return contact;
    }
    else if (contact.name === "John") {
        appendMessage(`Success: "${contact.name} was updated"`);
        console.log(`Success: "${contact.name} was updated"`);
        return Object.assign(Object.assign({}, contact), { email: "john@gmail.is" });
    }
    else {
        return contact;
    }
});
// get(email)
const getContactInfo = (contact) => {
    var _a, _b, _c, _d;
    if (!contact.email) {
        appendMessage(`Error: "Contact not found"`);
        console.log(`Error: "Contact not found"`);
    }
    else {
        appendMessage(`Success: "Name: ${contact.name}, Email: ${contact.email}, Phone number: ${(_a = contact.phoneNumber) !== null && _a !== void 0 ? _a : "Not provided"}, Company: ${(_b = contact.company) !== null && _b !== void 0 ? _b : "Not provided"}"`);
        console.log(`Success: "Name: ${contact.name}, Email: ${contact.email}, Phone number: ${(_c = contact.phoneNumber) !== null && _c !== void 0 ? _c : "Not provided"}, Company: ${(_d = contact.company) !== null && _d !== void 0 ? _d : "Not provided"}"`);
    }
};
getContactInfo(contacts[1]);
// listAll()
const listAll = (list) => {
    const formatted = list.map(c => `${c.name} <${c.email}>`).join(", ");
    appendMessage(formatted);
    console.log(formatted);
};
listAll(contacts);
console.log(contacts);
// clear()
const doYouWantToClearTheList = confirm("Do you want to clear the list?");
alert(doYouWantToClearTheList);
console.log(doYouWantToClearTheList);
const removeAllContacts = (list) => {
    if (doYouWantToClearTheList) {
        list.splice(0, list.length);
        appendMessage("The contact list was cleared");
        console.log("The contact list was cleared");
    }
    else {
        appendMessage("Operation canceled");
        console.log("Operation canceled");
    }
};
removeAllContacts(contacts);
console.log(contacts);
listAll(contacts);
console.log(contacts);
