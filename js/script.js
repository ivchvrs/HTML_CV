
  ///////////////////////////////////JAVA ARTICLE APPARITION \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

///////////////////////Affichage article ///////////////////////////////////////
function afficherArticle(loc){
  $(".Afficher").removeClass("Afficher");
  $('#'+loc).addClass("Afficher");
}

////////////////////////////afficher masquer//////////////////////////////////////
 function AfficherOnclick(loc){
  $( "#"+loc ).toggle("slow");
}


$('.ribbon').on('click', function() {	
  var self = $(this),
      newone = self.clone(true);
  
  self.before(newone);
  $("." + self.attr("class") + ":last").remove();
});