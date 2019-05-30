/*
  * Create Static object
*/

let contactArray = [
    {
        "id": 1,
        "firstName": "Justin",
        "lastName": "Clappsy",
        "email": "justinClappsy@test.com",
        "phone": "732-123-4567"
    },

    {    "id": 2,
        "firstName": "Thom",
        "lastName": "Yorke",
        "email": "thomYorke@radiohead.com",
        "phone": "732-111-2222"
    },

    {    "id": 3,
        "firstName": "Paul",
        "lastName": "Banks",
        "email": "paulBanks@interpol.com",
        "phone": "732-444-5555"
    }
]



function printObj() {
    console.log('contact obj: ', contactObj);
}

/*
  * Set up handlebars
*/

let template = $('#contact-list').html();
let templateScript = Handlebars.compile(template);




/*
  * Insert html onto page
*/


/*
    Use jquery to iterate through array of objects
*/

$.each(contactArray, function(index, value) {

    let contactObj = value;
    let html = templateScript(contactObj);
    console.log('contact obj: ', contactObj)
    $(document.body).append(html);

});
