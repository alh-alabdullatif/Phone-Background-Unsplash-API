/* Made By Alhanouf Unsplash API + CSS +jQuery*/ 
var main_query;

function SearchBackgrounds(){

  // Selecting the input element and get its value 
  var query = document.getElementById("search_query").value;
  main_query = query;
  

  var APIKey = '58a51b4c5b896ef42687d940bc83c7d16bc00a996a3be25172fe6add2221d298';
  $('#grid').empty(); // empty the div before fetching and adding new data

$.getJSON('https://api.unsplash.com/search/photos?query='+main_query+'&orientation=portrait&order_by=latest&per_page=50&client_id='+APIKey+'', function(data) {
  
  console.log(data);
  
  var imageList = data.results;

  $.each(imageList, function(i, val) {
    
    var full_name = val.user.name;
    var portfolioURL = val.user.links.html;
    var imageURL = val.urls.regular;
    var download_link = val.links.download + "?force=true";
    
      $('.grid').prepend('<div class="img__description"><h3>Photo By:  <a href='+portfolioURL+'?utm_source=phone-background&utm_medium=referral'+'>' + full_name + '</h3></a><a class="download_btn" href="'+download_link+'">Download</a><hr><div class="image"><img src="'+ imageURL +'"></div></div>');

  });  
});

}