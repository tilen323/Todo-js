$('.input-box--submit').on('click', function () {
    let inputField = $('.input-box--input');
    let inputFieldValue = inputField.val();
    let listItem = '<li class="task-list--item">' + inputFieldValue + '</li>';

    if (!inputFieldValue) {
        inputField.addClass('empty-field').attr('placeholder', 'Please enter a new task');
    } else {
        inputField.removeClass('empty-field').val('').attr('placeholder', 'Enter new task');
        $('.task-list').append(listItem);
    }
});