let counter = 1,
    taskList = [];

function addTask() {
    let inputField = $('.input-box--input'),
        inputFieldValue = inputField.val(),
        listItem = $('<li class="task-list--item" />'),
        taskCounter = () => counter++;

    if (!inputFieldValue) {
        inputField.addClass('empty-field').attr('placeholder', 'Please enter a new task');
    } else {
        inputField.removeClass('empty-field').val('').attr('placeholder', 'Enter new task');
        $('#counter').text(taskCounter());
        taskList.push(inputFieldValue);

        $.each(taskList, function () {
            $('.task-list').append(listItem.text(this));
        });
    }
}
$('.input-box--submit').on('click', addTask);