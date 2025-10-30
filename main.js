var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Create a container for output
var container = document.createElement("div");
container.id = "output";
document.body.appendChild(container);
// Helper function to append text to container
function appendMessage(message) {
    var output = document.getElementById("output");
    if (output) {
        var p = document.createElement("p");
        p.textContent = message;
        output.appendChild(p);
    }
}
// Initial contact list
var contacts = [
    { name: "Alex", email: "alex@gmail.com" },
    { name: "Maria", email: "maria@gmail.com" },
    { name: "John", email: "john@gmail.com" },
];
// New contact to add
var newContact = {
    name: "Alex",
    email: "alex@gmail.com",
};
// add(contact)
var add = function (contact) {
    if (!contact.name || !contact.email) {
        appendMessage("Error: \"Missing fields\"");
    }
    else if (contacts.some(function (c) { return c.email === contact.email; })) {
        appendMessage("Error: \"Duplicate was found\"");
    }
    else {
        contacts.push(contact);
        appendMessage("Success: \"Contact ".concat(contact.name, " was added\""));
    }
};
add(newContact);
// remove(email)
var remove = function (email) {
    var contactToRemove;
    var found = contacts.some(function (c, i) {
        if (c.email === email) {
            contactToRemove = i;
            return true;
        }
        return false;
    });
    if (!found || contactToRemove === undefined) {
        appendMessage("Error: \"Contact not found\"");
    }
    else {
        appendMessage("Success: \"".concat(contacts[contactToRemove].name, " was removed\""));
        contacts.splice(contactToRemove, 1);
    }
};
remove("maria@gmail.com");
// edit(email, newData)
var editData = contacts.map(function (contact) {
    if (contact.name === "John" && !contact.email) {
        appendMessage("Error: \"Contact not found\"");
        return contact;
    }
    else if (contact.name === "John") {
        appendMessage("Success: \"".concat(contact.name, " was updated\""));
        return __assign(__assign({}, contact), { email: "john@gmail.is" });
    }
    else {
        return contact;
    }
});
// get(email)
var getContactInfo = function (contact) {
    var _a, _b;
    if (!contact.email) {
        appendMessage("Error: \"Contact not found\"");
    }
    else {
        appendMessage("Success: \"Name: ".concat(contact.name, ", Email: ").concat(contact.email, ", Phone number: ").concat((_a = contact.phoneNumber) !== null && _a !== void 0 ? _a : "Not provided", ", Company: ").concat((_b = contact.company) !== null && _b !== void 0 ? _b : "Not provided", "\""));
    }
};
getContactInfo(contacts[1]);
// listAll()
var listAll = function (list) {
    var formatted = list.map(function (c) { return "".concat(c.name, " <").concat(c.email, ">"); }).join(", ");
    appendMessage(formatted);
};
listAll(contacts);
// clear()
var doYouWantToClearTheList = confirm("Do you want to clear the list?");
alert(doYouWantToClearTheList);
var removeAllContacts = function (list) {
    if (doYouWantToClearTheList) {
        list.splice(0, list.length);
        appendMessage("The contact list was cleared");
    }
    else {
        appendMessage("Operation canceled");
    }
};
removeAllContacts(contacts);
listAll(contacts);
