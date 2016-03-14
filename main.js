date = ["epoch","1 year","6 months","3 months","1 month", "15 days","7 days","3 days","1 day","6 hours"]
small = [0,1,3,5,10,20,50,100,500,1000]
big = [0,1,3,5,10,20,50,100,500,1000]
language = []
forked = true
size = ["0kb","1kb","10kb","100kb","1mb","5mb","20mb","100mb","500mb","1gb"]
query = ""

data =
[
  {
    user: "alexjc",
    avatar: "https://avatars3.githubusercontent.com/u/445208?v=3&s=460",
    project: "neural-doodle",
    date: "Mar 29, 2015",
    description: "Turn your two-bit doodles into fine artworks with deep neural networks! An implementation of Semantic Style Transfer.",
    stars: "11,865",
    size: "15KB"
  },
  {
    user: "machinezone",
    avatar: "https://avatars1.githubusercontent.com/u/6372053?v=3&s=200",
    project: "tcpkali",
    date: "Jan 4, 2016",
    description: "Fast multi-core TCP and WebSockets load generator.",
    stars: "1,905",
    size: "11MB"
  },
  {
    user: "Rochester-NRT",
    avatar: "https://avatars2.githubusercontent.com/u/17015390?v=3&s=200",
    project: "AlphaGo",
    date: "Feb 6, 2016",
    description: "A replication of DeepMind's 2016 Nature publication, \"Mastering the game of Go with deep neural networks and tree search,\" details of which can be found on their website.",
    stars: "3,921",
    size: "204KB"
  }
]

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
        <div class="mdl-card__supporting-text">\
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
});

$.get( "https://api.github.com/search/repositories", { q: "created:>=2016-03-11", sort: "stars" }, function( data ) {
  results = data["items"]
  insertCard(results, "#hot")
  results = shuffle(data["items"].slice(0,parseInt(data["items"].length / 3))).slice(0,6)
  insertCard(results, "#main-hot")
});

$.get( "https://api.github.com/search/repositories", { q: "stars:10..50", sort: "updated" }, function( data ) {
  results = shuffle(data["items"].slice(0,parseInt(data["items"].length / 3))).slice(0,6)
  insertCard(results, "#main-obscure")
});

$.get( "https://api.github.com/search/repositories", {q: sort: "updated" }, function( data ) {
  insertCard(data["items"], "#new")
});
