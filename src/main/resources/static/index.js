let tickets = [];

function buyTicket() {
    const film = getValue('film');
    const quantity = getValue('quantity');
    const firstName = getValue('firstName');
    const lastName = getValue('lastName');
    const PhoneNr = getValue('PhoneNr');
    const email = getValue('email');


    if (!film || !quantity || !firstName || !lastName || !isValidPhoneNr(PhoneNr) || !isValidEmail(email)) {
        let errorMessage = 'Please fill out all fields correctly.';
        if (!isValidPhoneNr(PhoneNr)) {
            errorMessage += ' Telephone number is invalid.';
        }
        if (!isValidEmail(email)) {
            errorMessage += ' Email address is invalid.';
        }
        alert(errorMessage);
        return;
    }

    tickets.push({ film, quantity, firstName, lastName, PhoneNr, email });
    displayTickets();
    resetForm();
}

function getValue(id) {
    return document.getElementById(id).value.trim();
}

function displayTickets() {
    const ticketList = document.getElementById('ticketList');
    ticketList.innerHTML = '';
    tickets.forEach(ticket => {
        const li = document.createElement('li');
        li.textContent = `Film: ${ticket.film}, Quantity: ${ticket.quantity}, Name: ${ticket.firstName} ${ticket.lastName}, Phone: ${ticket.PhoneNr}, Email: ${ticket.email}`;
        ticketList.appendChild(li);
    });
}

function removeAllTickets() {
    tickets = [];
    displayTickets();
}

function resetForm() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.value = '');
}

function isValidPhoneNr(PhoneNr) {
    return /^\d{8}$/.test(PhoneNr);
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}