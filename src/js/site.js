let $name = $('#name');
let $email = $('#email');
let $address = $('#address');

let people = [
    {
        name: 'Aimee Morris',
        email: 'thetwintigers@gmail.com',
        address: '110 Windsor Creek Drive, Alpharetta, GA 30022'
    },
    {
        name: 'Tim Morris',
        email: 'bethatway@gmail.com',
        address: '11180 Amy Frances Ln, Johns Creek, GA 30022'
    }
];

const appendToTable = (person) => {
    var table = $('#users tbody');
    var tr = table.append('<tr>');
    tr.append('<td>' + person.name + '</td><td>' + person.email + '</td><td>' + person.address + '</td>');
};

const populate = () => {
    people.map((person) => {
        appendToTable(person);
    });
};

const reset = () => {
    $name.val('');
    $email.val('');
    $address.val('');
};

$(function() {

    populate();

    $('#add').on('click', function() {
        var nameVal = $name.val();
        var emailVal = $email.val();
        var addressVal = $address.val();
        var person = {
            name: nameVal,
            email: emailVal,
            address: addressVal
        };
        appendToTable(person);
        reset();
    });

});