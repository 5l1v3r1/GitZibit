date = ["epoch","1 year","6 months","3 months","1 month", "15 days","7 days","3 days","1 day","6 hours"]
small = [0,1,3,5,10,20,50,100,500,1000]
big = [0,1,3,5,10,20,50,100,500,1000]
language = []
forked = true
size = ["0kb","1kb","10kb","100kb","1mb","5mb","20mb","100mb","500mb","1gb"]

function convert() {
    var descriptions = document.getElementsByClassName("description");
    for (var i = 0; i < descriptions.length; i++){
      var input = descriptions[i].innerHTML
      var output = emojione.shortnameToImage(input);
      descriptions[i].innerHTML = output;
    }
}

function shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

function insertCard(results, gridName){
  for (var i=0; i < results.length; i++){
    $(gridName).append('<div class="mdl-cell mdl-cell--4-col mdl-cell--stretch"> \
      <div class="demo-card-event mdl-card mdl-shadow--4dp">\
        <div class="mdl-card__title">\
          <img class="material-icons card-avatars mdl-list__item-avatar" src="' + results[i]["owner"]["avatar_url"] + '" width="40px" />\
          <h4>\
            <a href="https://github.com/' + results[i]["owner"]["login"] + '">' + results[i]["owner"]["login"] + ' /</a> <a href="' + results[i]["html_url"] + '">' + results[i]["name"] + '</a>\
            <div class="mdl-card__subtitle-text">\
              ' + results[i]["created_at"].slice(0,10) + '\
            </div>\
          </h4>\
        </div>\
        <div class="mdl-card__supporting-text description">\
          ' + results[i]["description"] + '\
        </div>\
        <div class="mdl-card__actions mdl-card--border">\
          <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">\
            View More\
          </a>\
          <div class="mdl-layout-spacer"></div>\
          <div style="cursor: pointer" onclick="window.open(' + "'" + results[i]["html_url"] + '/stargazers' + "'" + ')"><i class="material-icons card-icons">star</i></div>' + results[i]["stargazers_count"] + '\
          <div style="cursor: pointer" onclick="window.open(' + "'" + results[i]["html_url"] + '/archive/master.zip' + "'" + ')"><i class="material-icons card-icons">file_download</i></div>' + results[i]["size"] + 'KB\
        </div>\
      </div>\
    </div>\
    ')
  }
}

$.get( "https://api.github.com/search/repositories", { q: "created:>=2016-02-14", sort: "stars" }, function( data ) {
  results = shuffle(data["items"].slice(0,parseInt(data["items"].length / 3))).slice(0,6)
  insertCard(results, "#main-top")
  convert()
});

$.get( "https://api.github.com/search/repositories", { q: "created:>=2016-03-11", sort: "stars" }, function( data ) {
  results = data["items"]
  insertCard(results, "#hot")
  results = shuffle(data["items"].slice(0,parseInt(data["items"].length / 3))).slice(0,6)
  insertCard(results, "#main-hot")
  convert()
});

$.get( "https://api.github.com/search/repositories", { q: "stars:10..50", sort: "updated" }, function( data ) {
  results = shuffle(data["items"].slice(0,parseInt(data["items"].length / 3))).slice(0,6)
  insertCard(results, "#main-obscure")
  convert()
});

$.get( "https://api.github.com/search/repositories", {sort: "updated" }, function( data ) {
  insertCard(data["items"], "#new")
  convert()
});
