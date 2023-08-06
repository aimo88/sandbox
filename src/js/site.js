let $name = $('#name');
let $email = $('#email');
let $address = $('#address');

/*
https://apple.stackexchange.com/questions/55875/git-auto-complete-for-branches-at-the-command-line
*/

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
        var nameValue = $name.val();
        var emailValue = $email.val();
        var addressValue = $address.val();
        var person = {
            name: nameValue,
            email: emailValue,
            address: addressValue
        };
        appendToTable(person);
        reset();
    });

});