$(function() {
    // GET/READ
    $('#get-button').on('click', function() {
        $.ajax({
            url: '/products',
            contentType: 'application/json; charset=utf-8',
            success: function(response) {
                var tbodyEl = $('tbody');

                tbodyEl.html('');

                response.products.forEach(function(product) {
                    // tbodyEl.append('\
                    var checked = '';
                    if (product.status)
                        checked = 'checked';
                    console.log(product.id, product.name, product.checkbox, product.com);
                    $('#fillindata').append('\
                        <tr>\
                            <td class="id"> <label class="container">' + product.id + '</td>\
                            <td><input type="text" class="name" value="' + product.name + '"></td>\
                            <td><input type="checkbox" value="'+product.id+'" id="myCheckbox['+product.id+']" '+checked+'/></td>\
                            <th><form action="/action_page.php">\
                            <input type="file" id="myFile" name="filename" style="width: 146px; font-size:0.6em;"></form></th>\
                            <td><input type="text" class="com" value="' + product.com + '"></td>\
                            <td>\
                                <button class="update-button btn-primary" style="margin-left: 39px;font-size: 17px;margin-right: 10px;"><i class="fa fa-pencil-alt"></i></button>\
                                <button class="delete-button btn-danger" style="font-size: 18px;"><i class="fa fa-times"></i></button>\
                            </td>\
                        </tr>\
                    ');
                });
            }
        });
    });

//     // <td><input type="enum" class="checkmark" <span class="checkmark" style="margin-left: 62px;></span>"value="'+product.status+'"></td>\
//     //<td><input type="checkbox" class="checkmark" <span class="checkmark" style="margin-left: 62px;></span>"value="'+product.status+'"></td>\
//     // <td><form action="/html/tags/html_form_tag_action.cfm" method="post"></form></td>\
                            

//     // CREATE/POST
//     $('#create-form').on('submit', function(event) {
//         event.preventDefault();

//         var user ={
//             n1: $('[name=n1]').val(),
//             check: $('[name=check]').is(":checked"),
//             com: $('[name=com]').val(),
//             //Isaudited: $('[name=isaudited]').val(),

//         }
    

//         //var createInput = $('#create-input');
//         //var createInput1 = $('#create-input1');
//         //var createInput2 = $('#create-input2');

//         $.ajax({
//             url: '/products',
//             method: 'POST',
//             contentType: 'application/json',
//             // data: JSON.stringify({ name: createInput.val() }),
//             data:JSON.stringify(user),
//             header: {'Content-Type': 'application/json; charset=utf-8'},
//             dataType: 'json',
//             //data: JSON.stringify({ status: createInput1.val() }),
//             //data: JSON.stringify({ Comm: createInput2.val() }),
//             success: function(response) {
//                 console.log(response);
//                 createInput.val('');
//                 //createInput1.val(true);
//                 //createInput2.val('');

//                 $('#get-button').click();
//             }
//         });
//     });

    // UPDATE/PUT
    $(document).on('click', 'table.update-button', function() {
        console.log("error")
        var rowEl = $(this).closest('tr');
        var id = rowEl.find('.id').text();
        console.log(id);
        var newName = rowEl.find('.name').val();
        
        $.ajax({
            url: '/products/' + id,
            method: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify({ newName: newName }),
            success: function(response) {
                console.log(response);
                $('#get-button').click();
            }
        });
    });

//     // DELETE
//     $('table').on('click', '.delete-button', function() {
//         var rowEl = $(this).closest('tr');
//         var id = rowEl.find('.id').text();

//         $.ajax({
//             url: '/products/' + id,
//             method: 'DELETE',
//             contentType: 'application/json',
//             success: function(response) {
//                 console.log(response);
//                 $('#get-button').click();
//             }
//         });
//     });
});
