define([
  "app/artist/tab/model"
],
function(
  Tab
){

  var Controller = function(args){

    var id = args[0];

    var context = {
      id: id,
      tab: Tab.get(id)
    }

    View.render("artist.tab",context);
  }

  return Controller;
})
