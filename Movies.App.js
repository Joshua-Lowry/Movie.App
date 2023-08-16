$(document).ready(function () {
  $("#inputForm").on("submit", function (event) {
    event.preventDefault();

    const title = $("#titleInput").val();
    const rating = $("#ratingInput").val();

    if (title && rating) {
      const listItem = $("<li>").text(`${title} - Rating: ${rating}`);
      const removeButton = $("<button>").text("Remove").addClass("remove-btn");
      listItem.append(removeButton);

      $("#titleList").append(listItem);

      // Clear input fields
      $("#titleInput").val("");
      $("#ratingInput").val("");
    }
  });

  $("#titleList").on("click", ".remove-btn", function () {
    $(this).parent().remove();
  });
});
