var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content_list = this.nextElementSibling;
    if (content_list.style.display === "block") {
      content_list.style.display = "none";
    } else {
      content_list.style.display = "block";
    }
  });
}