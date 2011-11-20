function onBodyLoad() {
    alert('hey ho');
    $.ajax({
        url: 'http://www.pita.it/soccer/resultScores-wales.xml', // name of file you want to parse
        dataType: "xml", // type of file you are trying to read
        success: parse, // name of the function to call upon success
        error: function(){alert("Error: Something went wrong");}
    });
}

function parse(document){
  $(document).find("item").each(function(){
        alert($(this).find('title').text());
  });
}
