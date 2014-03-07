/*Programme gestion drag and drop */  

// var hacker_color=function(){
//     $(".message_inscription").html("Vous etes inscrit en tant que participant");
// };

// var helper_color=function(){
//     $(".message_inscription").html("Vous etes inscrit en tant que helper");
// };


// $(function() {
//     $( "#draggable" ).draggable();
//     $( "#droppable" ).droppable({
//       drop: function( event, ui ) {
//         $( this )
//           .addClass( "ui-state-highlight" )
//           .find( "p" )
//             .html( "Wanna join as " )
//             .dialog({
//                 resizable: false,
//                 height:    140,
//                 modal:     true,
//                 buttons:{
//                     "Hacker": function(){
//                             $( this ).dialog( hacker_color());
//                     },
//                     "Helper": function() {
//                             $( this ).dialog( helper_color());
//                     }
//             }
//        });
//       }
//     });
//   });

    // body...
    $("a.btn.btn-sm.btn-info").click(function(){

        alert("bouton a click");
        var be="Affichage hackaton";
            $("<p Bonjour/>").appendTo(" h1 .heading");

    });
    
    $("a.btn.btn-sm.btn-primary").click(function(){

        alert("bouton b click");
    });


    


