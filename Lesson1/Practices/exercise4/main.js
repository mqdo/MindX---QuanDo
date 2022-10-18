const contacts = [];

$ = document.querySelector.bind(document);

const list = $("ul");
const contactName = $("#name");
const contactNumber = $("#number");
const addContact = $("#add_contact");
const searchContact = $("#search");
const find = $("#find_contact");
const deleteDuplicates = $("#delete_duplicates");
const waiting = $(".waiting");

const numberRegex = new RegExp(/0[0-9]{9}$/, "g");

const updateList = (arr = contacts) => {
  list.innerHTML = arr
    .sort((a, b) => a["name"].localeCompare(b["name"]))
    .reduce((acc, item) => {
      return (
        acc +
        `<li><span class="contact_name">${item.name}</span><span class="contact_number">${item.number}</span></li>`
      );
    }, "");
  console.log(arr);
};

addContact.addEventListener("click", () => {
  if (contactName.value !== "" && numberRegex.test(contactNumber.value)) {
    contacts.push({
      name: contactName.value,
      number: contactNumber.value,
    });
    updateList(contacts);
    contactName.value = "";
    contactNumber.value = "";
  }
});

find.addEventListener("click", () => {
  let finder = [];
  if (numberRegex.test(searchContact.value)) {
    finder = contacts.filter(contact => contact.number === searchContact.value);
  } else if (searchContact.value !== "") {
    finder = contacts.filter(contact => contact.name === searchContact.value);
  }
  updateList(finder);
  searchContact.value = "";
});

deleteDuplicates.addEventListener("click", () => {
  if (numberRegex.test(searchContact.value)) {
    const found = contacts.find((c) => c.number === searchContact.value);
    contacts.forEach((contact) => {
      if (
        contact.number === searchContact.value &&
        contacts.indexOf(contact) !== contacts.indexOf(found)
      ) {
        contacts.splice(contacts.indexOf(contact), 1);
      }
    });
  }
  updateList(contacts);
});

$("h1").addEventListener("click", () => updateList(contacts));