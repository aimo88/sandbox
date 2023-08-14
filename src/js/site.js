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

const addPerson = () => {
    var person = {
        name: $name.val(),
        email: $email.val(),
        address: $address.val()
    };
    appendToTable(person);
    //reset();
};

$(function() {

    populate();

    /*
    $('form').on('submit', function(e) {

        e.preventDefault();
        addPerson();

    });
    */

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                form.reportValidity();
                event.preventDefault();
                event.stopPropagation();
            }
            else {
                addPerson();
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');

        }, false);
    });

});