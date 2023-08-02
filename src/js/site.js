$(function() {

    var people = [
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

    var table = $('#users tbody');

    const appendToTable = (person) => {
        var tr = table.append('<tr>');
        tr.append('<td>' + person.name + '</td><td>' + person.email + '</td><td>' + person.address + '</td>');
    };

    const populate = () => {
        people.map((person) => {
            appendToTable(person);
        });
    };

    populate();

    $('#add').on('click', function() {
        var nameValue = $('#name').val();
        var emailValue = $('#email').val();
        var addressValue = $('#address').val();
        var person = {
            name: nameValue,
            email: emailValue,
            address: addressValue
        };
        appendToTable(person);
    });

});