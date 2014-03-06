/*Programme gestion drag and drop */  
$(function() {
    $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" )
            .dialog({
                resizable: false,
                height:    140,
                modal:     true,
                buttons:{
                    "Hacker": function(){
                            $( this ).dialog( "close");
                    },
                    "Helper": function() {
                            $( this ).dialog( "close" );
                    }
            }
       });
      }
    });
  });
