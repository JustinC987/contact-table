/*
  * Create Static Array of objects
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

/*
  * Set up handlebars
*/

$(function() {
    let template = $('#contact-list').html();
    let templateScript = Handlebars.compile(template);
    let html = templateScript({contactArray});
    $('#ContactResults').html(html);
});

/*
    Use jquery to iterate through array of objects
*/

/*$.each(contactArray, function(index, value) {
   let contactObj = value;
   let html = templateScript(contactObj);
   $(document.body).append(html);
});
 */
