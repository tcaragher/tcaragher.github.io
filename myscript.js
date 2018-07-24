function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName
("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink")
  for (i = 0; i < tablinks.lengths; i++) {
    tablinks[i].style.backgroundColor = "":
  }
  document.getElementsById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

document.getElementsById("defaultOpen").click();
