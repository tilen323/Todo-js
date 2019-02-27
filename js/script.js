function TodoTask() {
    let taskName = null;
    let isFinished = false;

    this.getName = function () {
        return taskName;
    };
    this.getIsFinished = function () {
        return isFinished;
    };
    this.setName = function (name) {
        taskName = name;
    };
    this.markFinished = function () {
        if (isFinished == true) {
            isFinished = false;
        } else {
            isFinished = true;
        }
    };
}

function TodoList(taskName, listName) {
    TodoTask.call(this);
    this.setName(taskName);
    this.listName = listName;
    this.dateAdded = moment().format('Do MMM YYYY, h:mm a');
    this.addToList = function(obj) {
        list.push(obj);
    };
    this.countList = function(list) {
        return list.length;
    }
    this.getList = function(list) {
        $('.task-list').html('');
        $.each(list, function(i, val) {
            let listItem = null;
            if (val.getIsFinished() == false) {
                listItem = $('<li class="task-list--item" item-id="' + i + '"></li>');
            } else {
                listItem = $('<li class="task-list--item done-true" item-id="' + i + '"></li>');
            }
            $('.task-list')
                .append(listItem.text(val.getName())
                .prepend('<span class="todo-location ' + this.listName.toLowerCase() + '">' + this.listName + '</span>')
                .append('<span class="todo-date">' + this.dateAdded + '</span>'));
        });
    }
}

TodoList.prototype = Object.create(TodoTask.prototype);

function addTask() {
    let inputField = $('.input-box--input'),
        inputFieldValue = inputField.val(),
        selectFieldValue = $('.input-box--select').val();

    if (!inputFieldValue) {
        inputField.addClass('empty-field').attr('placeholder', 'Please enter a new task');
    } else {
        inputField.removeClass('empty-field').val('').attr('placeholder', 'Enter new task');
        newObj = new TodoList(inputFieldValue, selectFieldValue);
        newObj.addToList(newObj);
        numOfTasks = newObj.countList(list);
        $('#counter').text(numOfTasks);
        newObj.getList(list);
        inputField.focus();
    }
}

function changeStatus() {
    itemId = $(this).attr('item-id');
    list[itemId].markFinished();
    itemStatus = list[itemId].getIsFinished();
    $(this).toggleClass('done-true');
}

let list = [];
$('.input-box--submit').on('click', addTask);
$('.task-list').on('click', 'li', changeStatus);