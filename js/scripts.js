$(document).ready(function() {
  $("#some-form").submit(function(event) {
    event.preventDefault();

    var someInput = $("#some-input").val();

    $("#output").text(someInput);
    $("#output").show();
  });
});
