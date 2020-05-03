$(document).ready(function () {

    var note_counter = 1;
    var selected_note_id = null;

    $("#edit-note").hide();

    $('#edit-note').click(function () {
        var note = $("#" + selected_note_id);
        var color = $("#color-select option:selected").val();
        var mytext = $("#note-box").val();

        if (mytext === '') {
            alert("Insert a note");
            return
        }

        note[0].innerHTML = "<div id='item' style='background-color:" + color + "'>" + mytext + "</div><button id='edit'> Edit </button><button id='delete'> Delete </button>";

        $("#edit-note").hide();
        $("#add-note").show();
        $("#note-box").val('');

    });

    $('#add-note').click(function () {
        var color = $("#color-select option:selected").val();
        var mytext = $("#note-box").val();
        if (mytext === '') {
            alert("Insert a note");
            return
        }
        $("#list").append(
            "<div class='note_item' id='note_" + note_counter + "'><div id='item' style='background-color:" + color + "'>" + mytext + "</div><button id='edit'> Edit </button><button id='delete'> Delete </button> </div>");
        note_counter += 1;
        $("#note-box").val('');
    });

    $('#list').on('click', 'button#delete', function (e) {
        $('#' + e.target.parentElement.id).remove();
    });

    $('#list').on('click', 'button#edit', function (e) {

        var selected_note_content = $("#" + e.target.parentElement.id + " #item").text();
        $("#note-box").val(selected_note_content);

        var current_color = $("#" + e.target.parentElement.id + " #item").css('background-color');

        $('#color-select').val(current_color);

        selected_note_id = e.target.parentElement.id;
        $("#edit-note").show();
        $("#add-note").hide();
    });
});
