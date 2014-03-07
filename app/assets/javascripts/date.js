/*Programme gestion drag and drop */  

var hacker_color=function(){
    $(".message_inscription").html("Vous etes inscrit en tant que participant");
}

var helper_color=function(){
    $(".message_inscription").html("Vous etes inscrit en tant que helper");
}


$(function() {
    $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Wanna join as " )
            .dialog({
                resizable: false,
                height:    140,
                modal:     true,
                buttons:{
                    "Hacker": function(){
                            $( this ).dialog( hacker_color());
                    },
                    "Helper": function() {
                            $( this ).dialog( helper_color());
                    }
            }
       });
      }
    });
  });
