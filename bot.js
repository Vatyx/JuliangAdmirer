var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;
var niceComments = ["Are y'all talking about Juliang? He's an alright guy sorta.",
                    "Can you teach me how to make my snapchat score as high as Juliang",
                    "Juliang is soooooooooooooooo okay",
                    "Juliang do you want to get Jin's? It's only 5 dollars.",
                    "I want to absorb Juliang's powers.",
                    "Did you just mention our lord and savior Juliang?",
                    "Did you just mention Juliang? Cat already owns him so back off?",
                    "Can never have enough Juliang",
                    "Wait let me snapchat this",
                    "My course on having the best snapchat game in the world is now taking applications. Apply here http://havegamelikejuliang.com/",
                    "You can never be as good as Ellen",
                    "@Juliang",
                    "WOOOOOOOOOOOW",
                    "Happy @Juliang day",
                    cool(),
                    "It's Hoolian, not Julian",
                    "Juliang is so awesome; to bad no one else can be his friend because he's mine.",
                    "Don't talk to @Juliang like that",
                    "Juliang's beauty makes me stack overflow",
                    "I want to marry a cat lady",
                    "Juliang's body is illegal to have. I mean just look at him, if we didn't have the right to bare arms then Juliang would be in prison.",
                    "Julianananannngngngngnana",
                    "Julioooooong",
                    "We can all be as good as Juliang.",
                    "You better be talkin' nice about Juliang",
                    "Juliang, teach me how to party.",
                    "I haven't seen a boy as smart as Juliang",
                    "Juliang > literally everything",
                    "Master Li, tell them how great you are",
                    "@Juliang's drop dead sexy face",
                    "You just mentioned Juliang. I mention Juliang all the time. We have so much in common.",
                    "Sorry Juliang is married so back the hell up.",
                    "Imaginary",
                    "Error 69: heheheheheh",
                    "Wow okay. Wow okay. Wow. Wow. Juliang don't wanna talk about it.",
                    "Every day is great day because of @Juliang."
                    ];
function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/Juliang$/;
    var validText = request.text.indexOf("Juliang") > -1 || request.text.indexOf("juliang") > -1;
    var validText1 = request.text.indexOf("another one") > -1 || request.text.indexOf("another one") > -1;
  console.log(request);
  if(request.text && validText && request.name != "Juliang\'s Public Admirer" ) {
    this.res.writeHead(200);
    postMessage(false,false);
    this.res.end();
  }
  else if(request.text && validText1 && request.name != "Juliang\'s Public Admirer") {
	this.res.writeHead(200);
	postMessage(false, true);
	this.res.end();
  }
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(claytonPost) {
  var botResponse, options, body, botReq;
  var botID = "df362d235b05b48e3ca28b9405"
  botResponse = niceComments[Math.floor(Math.random() * (niceComments.length))];
  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };
  //   if (botResponse.indexOf("@Ellen") != -1 && botResponse.indexOf("@Clayton") != -1){
  //       body = {
  //           "attachments": [ { loci: [[botResponse.indexOf("@Ellen"),6],[botResponse.indexOf("@Clayton"),8]], type: 'mentions', user_ids: ["20497030","15802842"] } ],
  //           "bot_id": botID,
  //           "text": botResponse
  //       };
  //   }else if (botResponse.indexOf("@Ellen") != -1){
  //     body = {
  //         "attachments": [ { loci: [[botResponse.indexOf("@Ellen"),6]], type: 'mentions', user_ids: ["20497030"] } ],
  //         "bot_id": botID,
  //         "text": botResponse
  //     };
  // }else if (botResponse.indexOf("@Clayton") != -1){
  //     body = {
  //         "attachments": [ { loci: [[botResponse.indexOf("@Clayton"),8]], type: 'mentions', user_ids: ["15802842"] } ],
  //         "bot_id": botID,
  //         "text": botResponse
  //     };
  // }
  //else {
      body = {
          "bot_id": botID,
          "text": botResponse
      };
  //}
  if(something) {
  	body = {
		"bot_id": botID,
		"text": "",
		"picture_url": "https://i.groupme.com/600x302.gif.8d9a7335a10441afb7b520eea3d36065"
		
	}
  }

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}


exports.respond = respond;
