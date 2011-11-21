function onBodyLoad() {
    $.ajax({
        url: 'http://www.pita.it/soccer/resultScores-wales.xml', // name of file you want to parse
url: 'resultScores-wales.xml', // name of file you want to parse
        dataType: "xml", // type of file you are trying to read
        success: parse, // name of the function to call upon success
        error: function(){alert("Error: Something went wrong");},
    });
}

function parse(document){
  console.log(document);  
  $(document).find("item").each(function(){
        console.log(this);
      $("#gamesList").prepend(
          '<li onclick="showGame(\''+ $(this).find('link').text() + '\',\'' + $(this).find('title').text() +'\')"   data-theme="c" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-c"><div class="ui-btn-inner ui-li" aria-hidden="true"><div class="ui-btn-text"><a href="#two" class="ui-link-inherit"><h3 class="ui-li-heading">'+$(this).find('title').text()+
          '</h3><p class="ui-li-desc">'+$(this).find('description').text()+
          '</p></a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow"></span></div></li>'
      );
  });
}

function showGame(url,title) {
    $('#two h1').text(title);
    $('#gameInfo').html('<img src="loading.gif" id="loading" />'); 
    $.ajax({
        url: url,
url: 'LlanelliBalaTown2.html',
        dataType: "html",
        success: parse2,
        error: function(){alert("Error: Something went wrong");},
    });
}

function parse2(document){
    for(x in $(document)) {
        if(($(document)[x]).id === 'matchInfos') {
            $('#gameInfo').html($(document)[x]);    
        };
    };
}
