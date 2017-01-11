const Discord = require('discord.io');
const request = require('request');
const fs = require('fs');
const AuthDetails = require('./token.json');
const permission = require('./fw.json');
const exhentai = require('./exhfav.json');
const gif = require('./gif.json');
const fx = require('money');
const mad = require('./mad.json');
const prettyMs = require('pretty-ms');
const cats = require('cat-ascii-faces')
const randomInt = require('random-int');
const probe = require('probe-image-size');
const repeating = require('repeating');
const Table = require('cli-table');
const os = require('os');
const btcstats = require("btc-stats");
const bytes = require('bytes');
const prettyHrtime = require('pretty-hrtime');
const cleverbot = require("cleverbot.io");
const messageerror = 'Yorium help me ><';
var messageerrorsfw = "Try a SFW channel :p (don't forget to use !help.y)";
var messageerrornsfw = "Try a NSFW channel :p (don't forget to use !help.y)";
var hour = 3600000;
var demih = 1800000;
var updateTime = 3600000; // an hour
const client = new Discord.Client({
	autorun: true,
	token: AuthDetails.token
});

var bot = new cleverbot('  ');
bot.setNick(" ");

function getmoneyJson(callback) {
  request({
    url: 'http://api.fixer.io/latest?base=HUF'
  },function (error, response, body) {
    if (!error && response.statusCode == 200) {
        callback(JSON.parse(body.substr(0)));
      };
  });
}


client.on('ready', function(rawEvent) {
	client.setPresence({
    game: { name: '!help.y -> cmds' }
});
	client.sendMessage({
		to: "149623047232421888",
		message: "Start master"
	});
});
client.on('message', function(user, userID, channelID, message, rawEvent) {
	if (message === '!exh.y') {
		var perm = permission.nsfw
		if (perm.indexOf(channelID) > -1) {
			var link = exhentai.nsfw
			var url = link[Math.floor(Math.random() * link.length)];
			client.sendMessage({
				to: channelID,
				message: url
			});
		} else {
			client.sendMessage({
				to: channelID,
				message: messageerrornsfw
			});
		};
	};
	if (message === '!mad') {
		var url = mad.link
		var urll = url[Math.floor(Math.random() * url.length)];
		client.sendMessage({
			to: channelID,
			message: urll
		});
	};
	if (message === '!help.y') {
			fs.readFile('./help.y/help.y1.txt', 'utf-8', function read(err, data) {
				client.sendMessage({
					to: userID,
					message: data
				});
			});
			setTimeout(function() {
			fs.readFile('./help.y/help.y2.txt', 'utf-8', function read(err, data) {
				client.sendMessage({
					to: userID,
					message: data
				});
			});
		 }, 500);
		 setTimeout(function() {
		 fs.readFile('./help.y/help.y3.txt', 'utf-8', function read(err, data) {
			 client.sendMessage({
				 to: userID,
				 message: data
			 });
		 });
	 }, 1000);
	 setTimeout(function() {
	 fs.readFile('./help.y/help.y4.txt', 'utf-8', function read(err, data) {
		 client.sendMessage({
			 to: userID,
			 message: data
		 });
	 });
 }, 1200);
	 client.sendMessage({
		 to: channelID,
		 message: "Check your DM <@" + userID + ">"
	 });
		}
	if (message === 'Pong!') {
		client.sendMessage({
			to: channelID,
			message: "!ping"
		});
	};
	if (message === '!base.y') {
			fs.readFile('./base.y.txt', 'utf-8', function read(err, data) {
				client.sendMessage({
					to: userID,
					message: data
				});
			});
		}
	if (message === '!admin.y') {
		if (userID === '98437055679324160') {
			fs.readFile('./admin.y.txt', 'utf-8', function read(err, data) {
				client.sendMessage({
					to: channelID,
					message: data
				});
			});
		} else {
			client.sendMessage({
				to: channelID,
				message: messageerror
			});
		};
	};
	if (message === '!adv.cal') {
			fs.readFile('./cal/cal1.txt', 'utf-8', function read(err, data) {
				client.sendMessage({
					to: userID,
					message: data
				});
			});
			setTimeout(function() {
			fs.readFile('./cal/cal2.txt', 'utf-8', function read(err, data) {
				client.sendMessage({
					to: userID,
					message: data
				});
			});
			}, 500);
			setTimeout(function() {
			fs.readFile('./cal/cal3.txt', 'utf-8', function read(err, data) {
				client.sendMessage({
					to: userID,
					message: data
				});
			});
		  }, 1000);
			setTimeout(function() {
			fs.readFile('./cal/cal4.txt', 'utf-8', function read(err, data) {
				client.sendMessage({
					to: userID,
					message: data
				});
			});
		  }, 1500);
			setTimeout(function() {
			fs.readFile('./cal/cal5.txt', 'utf-8', function read(err, data) {
				client.sendMessage({
					to: userID,
					message: data
				});
			});
		  }, 4000);
			setTimeout(function() {
			fs.readFile('./cal/cal6.txt', 'utf-8', function read(err, data) {
				client.sendMessage({
					to: userID,
					message: data
				});
			});
		  }, 5500);
			setTimeout(function() {
			fs.readFile('./cal/cal7.txt', 'utf-8', function read(err, data) {
				client.sendMessage({
					to: userID,
					message: data
				});
			});
		  }, 6500);
	};
	if (message === '!rtt.y') {
		if (userID === '98437055679324160') {
			var sys = require('sys')
			var exec = require('child_process').exec;

			function puts(error, stdout, stderr) {
				sys.puts(stdout)
			}
			exec("sudo pm2 restart bot-yorium", puts);
		};
	};
	if (message === "!stop.y") {
		if (userID === '98437055679324160') {
			clearInterval(interval);
		};
	}
	if (message === '*baka ' + '<@!175262376482963457>' + '*' || message === 'baka <@!175262376482963457>' || message === "*baka <@175262376482963457>*") {
		if (userID === '98437055679324160') {
		client.sendMessage({
			to: channelID,
			message: "Master, why you so evil with me"
		});
		setTimeout(function() {
			client.sendMessage({
				to: channelID,
				message: ";-;"
			});
		}, 1500);
		setTimeout(function() {
			client.sendMessage({
				to: channelID,
				message: "..."
			});
		}, 3000);
		}
	}
	if (message === '*kiss ' + '<@!175262376482963457>' + '*' || message === 'kiss <@!175262376482963457>' || message === "*kiss <@175262376482963457>*") {
		if (userID === '98437055679324160') {
		client.sendMessage({
			to: channelID,
			message: ">////<"
		});
		setTimeout(function() {
			client.sendMessage({
				to: channelID,
				message: "kiss"
			});
		}, 1500);
		setTimeout(function() {
			client.sendMessage({
				to: channelID,
				message: "<3"
			});
		}, 3000);
		}
	}
	if (message === "!off.y") {
		if (userID === '98437055679324160') {
			var sys = require('sys')
			var exec = require('child_process').exec;

			function puts(error, stdout, stderr) {
				sys.puts(stdout)
			}
			exec("sudo pm2 delete bot-yorium", puts);
		};
	}
	if (message === "bbbaka" || message === "b b baka" || message === "b-b-baka" || message === "b-baka" || message === "bbaka" || message === "b baka") {
		var giff = gif.baka
		var url = giff[Math.floor(Math.random() * giff.length)];
		client.uploadFile({
			to: channelID,
			file: url,
			filename: "baka.gif",
		}, function(err, res) {
			if (err) return console.log(err);
		});
	}
	var message = message.split(' ')
	if (message[0] === '*pats') {
		if (message[1] === "<@!175262376482963457>*" || message[1] === "<@175262376482963457>*") {
			if (userID === '98437055679324160') {
			client.sendMessage({
				to: channelID,
				message: ":o"
			});
			setTimeout(function() {
				client.sendMessage({
					to: channelID,
					message: ">///<"
				});
			}, 1500);
			setTimeout(function() {
				client.sendMessage({
					to: channelID,
					message: ">////////<"
				});
			}, 3000);
			setTimeout(function() {
				client.sendMessage({
					to: channelID,
					message: ">/// ....."
				});
			}, 4500);
			setTimeout(function() {
				client.sendMessage({
					to: channelID,
					message: "<3"
				});
			}, 6000);
			}
		} else {
			if (message.mentions = 1) {
				var giff = gif.pats
				var url = giff[Math.floor(Math.random() * giff.length)];
				client.sendMessage({
					to: channelID,
					message: "*" + message[1] + " *was pet by* " + "*" + user + "*"
				});
				client.uploadFile({
					to: channelID,
					file: url,
					filename: "pats.gif",
				});
			};
		};
	};
	if (message[0] === "*slaps") {
		var giff = gif.slaps
		var url = giff[Math.floor(Math.random() * giff.length)];
		client.sendMessage({
			to: channelID,
			message: "*" + message[1] + " *has been slapped by* " + "*" + user + "*"
		});
		client.uploadFile({
			to: channelID,
			file: url,
			filename: "slaps.gif",
		}, function(err, res) {
			if (err) return console.log(err);
		});
	}
	if (message[0] === "*hugs") {
		var giff = gif.hugs
		var url = giff[Math.floor(Math.random() * giff.length)];
		client.sendMessage({
			to: channelID,
			message: "*" + message[1] + " *has been hugged by* " + "*" + user + "*"
		});
		client.uploadFile({
			to: channelID,
			file: url,
			filename: "hugs.gif",
		}, function(err, res) {
			if (err) return console.log(err);
		});
	}
});
client.on('message', function(user, userID, channelID, message, rawEvent) {
	var msgi = message.replace(/!iqdb./g, '');
	if (message === '!iqdb.' + msgi) {
		var urll = 'http://iqdb.org/?url=' + msgi;
		client.sendMessage({
			to: channelID,
			message: urll
		});
   	};
		var msgp = message.replace(/!pixiv./g, '');
		if (message === '!pixiv.' + msgp) {
			var urll = 'http://saucenao.com/search.php?db=999&dbmaski=32768&url=' + msgp;
			client.sendMessage({
				to: channelID,
				message: urll
			});
	   	};
	if (message === '!upserver.y') {
		if (userID === '98437055679324160') {
			var child = require('child_process');
			child.exec('uptime', function(error, stdout, stderr) {
				client.sendMessage({
					to: channelID, // art-club osu!academy
					message: '```' + stdout + '```'
				});
			});
		};
	};
	if (message === '!up.y') {
		if (userID === '98437055679324160') {
			var sys = require('sys')
			var exec = require('child_process').exec;

			function puts(error, stdout, stderr) {
				sys.puts(stdout)
			}
			exec('sudo pm2 list', function(error, stdout, stderr) {
				client.sendMessage({
					to: channelID,
					message: '```' + stdout + '```'
				});
			});
		};
	};
});
client.on('message', function(user, userID, channelID, message, rawEvent) {
	var msg = message.slice(7);
	var msg1 = msg.replace(/ /g, '%20');
	var message = message.split(' ')
	if (message[0] === '!ytb.y') {
		var urll = 'https://www.youtube.com/results?search_query=' + msg1;
		client.sendMessage({
			to: channelID, //
			message: urll
		});
	};
var num = message.slice(1);
var perm = permission.yy
bot.create(function (err, session) {
if (message[0] === 'yy,') {
	if (perm.indexOf(channelID) < 1) {
    bot.ask(num, function (err, response) {
				setTimeout(function () {
					client.sendMessage({
						to: channelID,
						message: response
					});
        }, 500);
      });
    };
		}
		});
});
client.on('message', function(user, userID, channelID, message, rawEvent) {
	if (message === '!donate') {
           client.sendMessage({
             to: channelID,
             message: "`If you want to support the Bot, my work and the cost of the server you can make a donation with this link`" +
						 '\n' + "**>** https://www.paypal.me/yorium" +
						 '\n' + "*All donation is greatly appreciated*" +
						 '\n' + "------------------------------------------------------------------------------------------------------------"
           });
  }
  if (message === '!stat.y') {
           client.sendMessage({
             to: channelID,
             message: "I am currently used on " + Object.keys(client.servers).length + " servers with " + Object.keys(client.users).length + " users."
           });
  }
	if (message === '!server.y') {
    Object.keys(client.servers).forEach((k) => {
			fs.appendFile('./serverlists.txt', client.servers[k].name + '\r\n', 'utf-8', (err) => {
        if (err) throw err;
      });
    });
	setTimeout(function() {
	 fs.readFile('./serverlists.txt', 'utf-8', function read(err, data) {
		 client.sendMessage({
			 to: channelID,
			 message: data
		 });
	 });
	 setTimeout(function() {
	 fs.writeFile('./serverlists.txt', '', 'utf8', (err) => {
		 if (err) throw err;
	 });
 }, 1100);
  }, 1000);
  }
	var mesv = message.split(' ')
  var textt = message.slice(8);
  if (mesv[0] === '!choice') {
    var text = textt.split('/')
      var url = text[Math.floor(text.length * Math.random())];
        client.sendMessage({
          to: channelID,
          message: "`My superior intelligence has chosen :` **" + url + '!**' +
                   '\n' + "*Baka " + user + '*'
        });
        };
	var mes = message.split(' ')
  if (mes[0] === '!ms.to') {
  var ddd = prettyMs(parseInt(mes[1]));
  client.sendMessage({
    to: channelID,
    message: "`" + ddd + "`"
  });
  };
  if (mes[0] === '!roll') {
  var roll = randomInt(parseInt(mes[1]));
  client.sendMessage({
    to: channelID,
    message: "`" + roll + "`"
  });
  };

	if (mes[0] === '!rip.catie') {
		whitelist = permission.roleadmin
		serverID = client.channels[channelID].guild_id
		roles = client.servers[serverID].members[userID].roles

		hasAccess = false

		for (var i = 0; i < roles.length; i++) {

				found = whitelist.indexOf(roles[i])

				if (found >= 0) {
						hasAccess = true

		if (hasAccess === true) {
		var server = client.channels[channelID].guild_id
	var tex = message.replace(mes[0], '');
	var texx = tex.replace(mes[1], '');
	var text = texx.slice(2);
  var multi = repeating(parseInt(mes[1]), text);
	setTimeout(function() {
  client.sendMessage({
    to: channelID,
    message: multi
  });
  }, 2000);
	break
	};
	};
	};
  };

	if (mes[0] === '!mu.y') {
		whitelist = permission.roleadmin
		serverID = client.channels[channelID].guild_id
		roles = client.servers[serverID].members[userID].roles

		hasAccess = false

		for (var i = 0; i < roles.length; i++) {

				found = whitelist.indexOf(roles[i])

				if (found >= 0) {
						hasAccess = true

		if (hasAccess === true) {
		var server = client.channels[channelID].guild_id
	var tex = message.replace(mes[0], '');
	var texx = tex.replace(mes[1], '');
	var text = texx.slice(2);
  var multi = repeating(parseInt(mes[1]), text + ' ');
	setTimeout(function() {
  client.sendMessage({
    to: channelID,
    message: multi
  });
  }, 2000);
	break
	};
	};
	};
  };

	if (message === '!cow.y') {
		var child = require('child_process');
		child.exec('vaca', function(error, stdout, stderr) {
		client.sendMessage({
		to: channelID,
		message: "```" + stdout + "```"
	});
 });
 };

 if (message === '!cat.y') {
	 client.sendMessage({
	 to: channelID,
	 message: "```" + cats() + "```"
 });
};
	if (message === '!out.y') {
		if (userID === '98437055679324160') {
		client.disconnect()
	}
	};
	if (mes[0] === '!img.info') {
	probe({ url: mes[1], timeout: 10000 }, function (err, result) {
		console.log(result)
		console.log(err)
		console.log(mes[1])
		client.sendMessage({
		to: channelID,
		message: `**> Width :** ${result.width}px` +
             `\n**> Height :** ${result.height}px` +
             `\n**> Type :** ${result.type}`
	});
});
};
	var msg = message.slice(4);
	var message = message.split(' ')
	var perm = permission.say
	if (message[0] === 'say') {
		if (perm.indexOf(channelID) < 1) {
			client.sendMessage({
			to: channelID,
			message: msg
		});
	}
	};
});
var startTime = Date.now();
client.on('message', function(user, userID, channelID, message, rawEvent) {
	if (message === '!info.y') {
		var start = process.hrtime();
    var load = os.loadavg()
    var mem = os.freemem()
    var plat = os.platform()
    var totmem = os.totalmem()
    var sysup = os.uptime()
    var memfix = bytes(mem);

    var totmemfix = bytes(totmem);
    var child = require('child_process');
    child.exec('expr ' + '"' + "scale=0; " + sysup + "*1000" + '"' + ' | bc -l', function(error, stdout, stderr) {
    setTimeout(function() {
    var calcul = stdout.replace(/\\/g, '');
    var sysupfix = prettyMs(parseInt(calcul));
    var currentTime = Date.now();
	  var uptime = currentTime - startTime;
	  var upfinal = prettyMs(parseInt(uptime));
		var end = process.hrtime(start);
		var timee = prettyHrtime(end);
    client.sendMessage({
       to: channelID,
       message: '------------------' +
                '\n' + '## Uptime ## :' +
                '\n' + '------------------' +
                '\n' + '`> ' + upfinal + '`' +
                '\n' + '-------------------------' +
                '\n' + '## Load average ## :' +
                '\n' + '-------------------------' +
                '\n' + '`> ' + load + '`' +
                '\n' + '------------------------------' +
                '\n' + '## Total memory use ## :' +
                '\n' + '------------------------------' +
                '\n' + '`> ' + memfix + " / " + totmemfix + '`' +
                '\n' + "------------------" +
                '\n' + '## Platform ## :' +
                '\n' + '-------------------' +
                '\n' + '`> ' + plat + '`' +
                '\n' + '--------------------------' +
                '\n' + '## Uptime server ## :' +
                '\n' + '--------------------------' +
                '\n' + '`> ' + sysupfix + '`' +
								'\n' + '---------------------' +
								'\n' + '`>  Elapsed time : ' + timee + '`'
    });
    }, 200);
    });
  };
});
client.on('message', function(user, userID, channelID, message, rawEvent) {
	var messsa = message.split(' ')
	var msgsd = message.slice(6);
	if (messsa[0] === '!name') {
		whitelist = permission.roleadmin
    serverID = client.channels[channelID].guild_id
		roles = client.servers[serverID].members[userID].roles

		hasAccess = false

		for (var i = 0; i < roles.length; i++) {

				found = whitelist.indexOf(roles[i])

				if (found >= 0) {
						hasAccess = true

		if (hasAccess === true) {
	var server = client.channels[channelID].guild_id

	client.editNickname( {serverID: server, userID, nick: msgsd} );
	break
  };
	};
	};
	};


	var bitcoin = message.replace(/!bit./g, '');
  if (message === "!bit." + bitcoin) {
      btcstats.exchanges([bitcoin]);
      btcstats.avg(function(error, resp) {
          var avgrr = JSON.stringify(resp);
          var avgr = avgrr.replace(/[^0-9.]/g, '');
                          client.sendMessage({
                              to: channelID,
                              message: "`> Avg:` **" + avgr + "$**"
                          });
                      });
  };
	var textpixiv = message.split(' ')
	if (message === "!bit") {
      client.sendMessage({
        to: channelID,
        message: "Exchanges available: `bitfinex - bitstamp - okcoin - btce - bter - hitbtc - ccex`"
    });
  };
	var msg1 = message.replace(/!mad./g, '');
	if (message === '!mad.' + msg1) {
		if (userID === '98437055679324160') {
			var lnk = mad.link
			if (lnk.indexOf(msg1) != -1) {
						client.sendMessage({
						 to: channelID,
						 message: "Already in Master :xx"
					 });
					} else {
						mad.link.push(msg1);
					 fs.writeFileSync('./mad.json', JSON.stringify(mad, null, '\t'));
						 client.sendMessage({
							 to: channelID, //
							 message: "Done master <3"
						 });
				 };
	  } else {
		client.sendMessage({
			to: channelID,
			message: ">/////<"
		});
   	};
	 };
		var msg2 = message.replace(/!exh-/g, '');
		if (message === '!exh-' + msg2) {
			if (userID === '98437055679324160') {
				var exhnsfw = exhentai.nsfw
				if (exhnsfw.indexOf(msg2) != -1) {
							client.sendMessage({
							 to: channelID,
							 message: "Already in Master :x"
						 });
						} else {
							exhentai.nsfw.push(msg2);
						 fs.writeFileSync('./exhfav.json', JSON.stringify(exhentai, null, '\t'));
							 client.sendMessage({
								 to: channelID, //
								 message: "Done master <3"
							 });
					 };
			} else {
				client.sendMessage({
					to: channelID,
					message: ">/////<"
				});
			};
			};
	var message = message.split(' ')
	if (message [0] === '!mo.co') {
	  getmoneyJson(function(data) {
	    fx.rates = data.rates
	    var rate = fx(message [1]).from(message [2]).to(message [3])
	            client.sendMessage({
	                to: channelID,
	                message: rate
	            });
	          })
	        };
	                if (message [0] === '!mo.ra') {
	                  function getmoneybJson(callback) {
	                    request({
	                      url: 'http://api.fixer.io/latest?base=' + message[1]
	                    },function (error, response, body) {
	                      if (!error && response.statusCode == 200) {
	                          callback(JSON.parse(body.substr(0)));
	                        }
	                    });
	                  }
	                  getmoneybJson(function(data) {
	                    fx.rates = data.rates
	                    var rate = JSON.stringify(fx.rates,0,2)
	                            client.sendMessage({
	                                to: channelID,
	                                message: "```JSON\n" + rate + "\n```"
	                            });
	                          })
	                        };
	                        if (message [0] === '!mo.co.ra') {
	                          getmoneyJson(function(data) {
	                            fx.rates = data.rates
	                            var rate = fx.convert(1, {from: message[1], to: message[2]})
	                                    client.sendMessage({
	                                        to: channelID,
	                                        message: rate
	                                    });
	                                  })
	                                };
				if (message[0] === '!chan.say') {
					if (userID === '98437055679324160') {
						permission.say.push(channelID);
						fs.writeFileSync('./fw.json', JSON.stringify(permission, null, '\t'));
					} else {
						client.sendMessage({
							to: channelID,
							message: ">////<"
						});
					}
				}
				if (message[0] === '!role.admin') {
					if (userID === '98437055679324160') {
						permission.roleadmin.push(message[1]);
						fs.writeFileSync('./fw.json', JSON.stringify(permission, null, '\t'));
					} else {
						client.sendMessage({
							to: channelID,
							message: ">////<"
						});
					}
				}
				if (message[0] === '!chan.yy') {
					if (userID === '98437055679324160') {
						permission.yy.push(channelID);
						fs.writeFileSync('./fw.json', JSON.stringify(permission, null, '\t'));
					} else {
						client.sendMessage({
							to: channelID,
							message: ">/////<"
						});
					}
				}
				if (message[0] === '!chan.nsfw') {
					if (userID === '98437055679324160') {
						permission.nsfw.push(channelID);
						fs.writeFileSync('./fw.json', JSON.stringify(permission, null, '\t'));
					} else {
						client.sendMessage({
							to: channelID,
							message: ">/////<"
						});
					}
				}
				if (message[0] === '!chan.sfw') {
					if (userID === '98437055679324160') {
						permission.sfw.push(channelID);
						fs.writeFileSync('./fw.json', JSON.stringify(permission, null, '\t'));
					} else {
						client.sendMessage({
							to: channelID,
							message: ">/////<"
						});
					}
				}
				if (message[0] === '!chan.all') {
					if (userID === '98437055679324160') {
						permission.all.push(channelID);
						fs.writeFileSync('./fw.json', JSON.stringify(permission, null, '\t'));
					} else {
						client.sendMessage({
							to: channelID,
							message: ">/////<"
						});
					}
				}
				if (message[0] === '!chan.eva') {
					if (userID === '98437055679324160') {
						permission.eva.push(channelID);
						fs.writeFileSync('./fw.json', JSON.stringify(permission, null, '\t'));
					} else {
						client.sendMessage({
							to: channelID,
							message: ">/////<"
						});
					}
				}
				if (message[0] === '!chan.test') {
					if (userID === '98437055679324160') {
						permission.test.push(channelID);
						fs.writeFileSync('./fw.json', JSON.stringify(permission, null, '\t'));
					} else {
						client.sendMessage({
							to: channelID,
							message: ">/////<"
						});
					}
				}
			});

			client.on('message', function(user, userID, channelID, message, rawEvent) {
				var asciis = message.slice(5);
			  var mesh = message.split(' ')
				function favoConverter () {
    var symbols = " !\"#$%&'()*+,-./0123456789:;<=>?@";
    var loAZ = "abcdefghijklmnopqrstuvwxyz";
    symbols += loAZ.toUpperCase();
    symbols += "[\\]^_`";
    symbols += loAZ;
    symbols += "{|}~";

    var hexChars = "0123456789abcdef";

    return {
        toAscii: function (valueStr, seperator) {
            valueStr = valueStr.toLowerCase();
            var text = "";
            var i=0;

            for( i=0; i<valueStr.length; i=i+2 )
            {
                var char1 = valueStr.charAt(i);
                if ( seperator && char1 == seperator )
                {
                    i++;
                    char1 = valueStr.charAt(i);
                }
                var char2 = valueStr.charAt(i+1);
                var num1 = hexChars.indexOf(char1);
                var num2 = hexChars.indexOf(char2);
                var value = num1 << 4;
                value = value | num2;

                var valueInt = parseInt(value);
                var symbolIndex = valueInt - 32;
                var ch = '?';
                if ( symbolIndex >= 0 && value <= 126 )
                {
                    ch = symbols.charAt(symbolIndex)
                }
                text += ch;
            }

            return text;
        },

        toHex: function (valueStr, seperator) {
            var text = "";
            for( i=0; i<valueStr.length; i++ )
            {
                var oneChar = valueStr.charAt(i);
                var asciiValue = symbols.indexOf(oneChar) + 32;
                var index1 = asciiValue % 16;
                var index2 = (asciiValue - index1)/16;
                if ( text != "" && seperator ) text += seperator;
                text += hexChars.charAt(index2);
                text += hexChars.charAt(index1);
            }

            return text;
        }
    }
}
				if (mesh[0] === '!h2a') {
					var hexs = favoConverter().toAscii(asciis, ' ')
					client.sendMessage({
				    to: channelID,
				    message: hexs
				  });
      	}
				if (mesh[0] === '!a2h') {
					var hexs = favoConverter().toHex(asciis, ' ')
					client.sendMessage({
				    to: channelID,
				    message: hexs
				  });
      	}

				var asci = message.slice(5);
			  var mesd = message.split(' ')
			  var ABC = {
			    toAscii: function(bin) {
			      return bin.replace(/\s*[01]{8}\s*/g, function(bin) {
			        return String.fromCharCode(parseInt(bin, 2))
			      })
			    },
			    toBinary: function(str, spaceSeparatedOctets) {
			      return str.replace(/[\s\S]/g, function(str) {
			        str = ABC.zeroPad(str.charCodeAt().toString(2));
			        return !1 == spaceSeparatedOctets ? str : str + " "
			      })
			    },
			    zeroPad: function(num) {
			      return "00000000".slice(String(num).length) + num
			    }
			  };
			  if (mesd[0] === '!b2a') {
			  var binary = asci
			  var binaryAscii = ABC.toAscii(binary)
			  client.sendMessage({
			    to: channelID,
			    message: binaryAscii
			  });
			  };
			  if (mesd[0] === '!a2b') {
			  var binary = asci
			  var binaryAscii = ABC.toBinary(binary)
			  client.sendMessage({
			    to: channelID,
			    message: binaryAscii
			  });
			  };

				var nums = message.slice(5);
				var message = message.split(' ')
				if (message[0] === '!far') {
					var child = require('child_process');
					child.exec('expr ' + '"' + "scale=0; " + nums + "*9/5+32"  + '"' + ' | bc -l', function(error, stdout, stderr) {
						var calcul = stdout.replace(/\\/g, '');
						var calculs = calcul.replace(/\r?\n|\r/g, '');
						client.sendMessage({
							to: channelID,
							message: '`' + calculs + '°F`'
						});
					});
					setTimeout(function() {
					child.exec('sudo pkill bc', function(error, stdout, stderr) {
						console.log(stderr)
					});
					}, 2500);
					};
					if (message[0] === '!cel') {
						var child = require('child_process');
						child.exec('expr ' + '"' + "scale=0; (" + nums + "-32)*5/9"  + '"' + ' | bc -l', function(error, stdout, stderr) {
							var calcul = stdout.replace(/\\/g, '');
							var calculs = calcul.replace(/\r?\n|\r/g, '');
							client.sendMessage({
								to: channelID,
								message: '`' + calculs + '°C`'
							});
						});
						setTimeout(function() {
						child.exec('sudo pkill bc', function(error, stdout, stderr) {
							console.log(stderr)
						});
						}, 2500);
						};
				if (message[0] === '!cal') {
					var child = require('child_process');
					child.exec('expr ' + '"' + nums + '"' + ' | bc -l /home/yorium/.bc/extensions.bc /home/yorium/.bc/scientific_constants.bc', function(error, stdout, stderr) {
						var calcul = stdout.replace(/\\/g, '');
						var calculs = calcul.replace(/\r?\n|\r/g, '');
						client.sendMessage({
							to: channelID,
							message: calculs
						});
					});
					setTimeout(function() {
					child.exec('sudo pkill bc', function(error, stdout, stderr) {
						console.log(stderr)
					});
					}, 2500);
				};
			});
			client.on('message', function(user, userID, channelID, message, rawEvent) {
				var messc = message.split(' ')
				if (messc[0] === '!hi') {
					var url = "./gbf/hi.jpg"
					client.uploadFile({
						to: channelID,
						file: url,
						filename: "hi.jpg",
					}, function(err, res) {
						if (err) return console.log(err);
					});
					}
				var meteo = message.slice(6);
				var message = message.split(' ')
				if (message[0] === '!rain') {
					var child = require('child_process');
					child.exec('is-raining ' + meteo + ' -t', function(error, stdout, stderr) {
						client.sendMessage({
							to: channelID, // art-club osu!academy
							message: stdout
						});
					});
				};
				if (message[0] === '!h2d') {
					var child = require('child_process');
					child.exec('echo "ibase=16;' + message[1] + '" | bc', function(error, stdout, stderr) {
						var base = stdout.replace(/\\/g, '');
						client.sendMessage({
							to: channelID, // art-club osu!academy
							message: base
						});
					});
				};
				if (message[0] === '!d2h') {
					var child = require('child_process');
					child.exec('echo "obase=16;' + message[1] + '" | bc', function(error, stdout, stderr) {
						var base = stdout.replace(/\\/g, '');
						client.sendMessage({
							to: channelID, // art-club osu!academy
							message: base
						});
					});
				};
				if (message[0] === '!b2d') {
					var child = require('child_process');
					child.exec('echo "ibase=2;' + message[1] + '" | bc', function(error, stdout, stderr) {
						var base = stdout.replace(/\\/g, '');
						client.sendMessage({
							to: channelID, // art-club osu!academy
							message: base
						});
					});
				};
				if (message[0] === '!d2b') {
					var child = require('child_process');
					child.exec('echo "obase=2;' + message[1] + '" | bc', function(error, stdout, stderr) {
						var base = stdout.replace(/\\/g, '');
						client.sendMessage({
							to: channelID, // art-club osu!academy
							message: base
						});
					});
				};
				if (message[0] === '!h2b') {
					var child = require('child_process');
					child.exec('echo "ibase=16;obase=2;' + message[1] + '" | bc', function(error, stdout, stderr) {
						var base = stdout.replace(/\\/g, '');
						client.sendMessage({
							to: channelID, // art-club osu!academy
							message: base
						});
					});
				};
				if (message[0] === '!b2h') {
					var child = require('child_process');
					child.exec('echo "ibase=2;obase=10000;' + message[1] + '" | bc', function(error, stdout, stderr) {
						var base = stdout.replace(/\\/g, '');
						client.sendMessage({
							to: channelID, // art-club osu!academy
							message: base
						});
					});
				};
			});
			client.on('message', function(user, userID, channelID, message, rawEvent) {
			var msgg = message.split(' ')
		  var msg1 = msgg[0].replace(/!edit./g, '');
		  var msgtt = '!edit.' + msg1 + " "
		  var msgg1 = message.replace(msgtt, '');
		  if (msgg[0] === '!edit.' + msg1) {
				if (userID === '98437055679324160') {
		    fs.writeFile('./' + msg1, msgg1, 'utf8', (err) => {
		      if (err) throw err;
		      client.sendMessage({
		        to: "119741092202676224", //
		        message: "Done master <3"
		      });
		    });
				};
		  };
		  });
			client.on('message', function(user, userID, channelID, message, rawEvent) {
				var msg = message.slice(7);
				var me = message.split(' ')
				if (me[0] === '!str.y') {
					if (userID === '98437055679324160') {
						var urll = msg + '\nhttps://www.twitch.tv/yorium\n';
						client.sendMessage({
							to: '166652629902950400',
							message: urll
						});
					} else {
						client.sendMessage({
							to: channelID,
							message: 'You are not my master >//< (Yorium help me ;-;)'
						});
					};
				};

				var messa = message.split(' ')
				if (messa[0] === '!ele') {
				if (client.channels[channelID].guild_id === '176888173270532096') {
			    var fire = "231504499536166912"
			    var dark = "231503956000374784"
			    var water = "231504319461982210"
			    var wind = "231504292220108800"
			    var earth = "231504407043244032"
			    var light = "231504006831144960"

			    if (messa[1] === 'dark') {
			    client.removeFromRole( {serverID: "176888173270532096", userID, roleID: fire} );
					setTimeout(function() {
			    client.removeFromRole( {serverID: "176888173270532096", userID, roleID: water} );
				  }, 500);
					setTimeout(function() {
			    client.removeFromRole( {serverID: "176888173270532096", userID, roleID: wind} );
				  }, 1000);
					setTimeout(function() {
			    client.removeFromRole( {serverID: "176888173270532096", userID, roleID: earth} );
				  }, 1500);
			  	setTimeout(function() {
			    client.removeFromRole( {serverID: "176888173270532096", userID, roleID: light} );
				  }, 2000);
			    setTimeout(function() {
			    client.addToRole( {serverID: "176888173270532096", userID, roleID: dark});
				  }, 2500);
			    };

			    if (messa[1] === 'light') {
			    client.removeFromRole( {serverID: "176888173270532096", userID, roleID: fire} );
					setTimeout(function() {
			    client.removeFromRole( {serverID: "176888173270532096", userID, roleID: dark} );
				  }, 500);
					setTimeout(function() {
			    client.removeFromRole( {serverID: "176888173270532096", userID, roleID: water} );
				  }, 1000);
					setTimeout(function() {
			    client.removeFromRole( {serverID: "176888173270532096", userID, roleID: wind} );
				  }, 1500);
					setTimeout(function() {
			    client.removeFromRole( {serverID: "176888173270532096", userID, roleID: earth} );
			  	}, 2000);
			    setTimeout(function() {
			    client.addToRole( {serverID: "176888173270532096", userID, roleID: light});
			  	}, 2500);
			    };

			    if (messa[1] === 'wind') {
			    client.removeFromRole( {serverID: "176888173270532096", userID, roleID: fire} );
					setTimeout(function() {
			    client.removeFromRole( {serverID: "176888173270532096", userID, roleID: dark} );
					}, 500);
					setTimeout(function() {
			    client.removeFromRole( {serverID: "176888173270532096", userID, roleID: water} );
					}, 1000);
					setTimeout(function() {
			    client.removeFromRole( {serverID: "176888173270532096", userID, roleID: earth} );
					}, 1500);
					setTimeout(function() {
			    client.removeFromRole( {serverID: "176888173270532096", userID, roleID: light} );
			    }, 2000);
			    setTimeout(function() {
			    client.addToRole( {serverID: "176888173270532096", userID, roleID: wind});
			   	}, 2500);
			    };

			    if (messa[1] === 'water') {
			    client.removeFromRole( {serverID: "176888173270532096", userID, roleID: fire} );
					setTimeout(function() {
			    client.removeFromRole( {serverID: "176888173270532096", userID, roleID: dark} );
					}, 500);
					setTimeout(function() {
			    client.removeFromRole( {serverID: "176888173270532096", userID, roleID: wind} );
					}, 1000);
					setTimeout(function() {
			    client.removeFromRole( {serverID: "176888173270532096", userID, roleID: earth} );
					}, 1500);
					setTimeout(function() {
			    client.removeFromRole( {serverID: "176888173270532096", userID, roleID: light} );
					}, 2000);
			    setTimeout(function() {
			    client.addToRole( {serverID: "176888173270532096", userID, roleID: water});
					}, 2500);
			    };

			    if (messa[1] === 'earth') {
			    client.removeFromRole( {serverID: "176888173270532096", userID, roleID: fire} );
					setTimeout(function() {
			    client.removeFromRole( {serverID: "176888173270532096", userID, roleID: dark} );
					}, 500);
					setTimeout(function() {
			    client.removeFromRole( {serverID: "176888173270532096", userID, roleID: water} );
					}, 1000);
					setTimeout(function() {
			    client.removeFromRole( {serverID: "176888173270532096", userID, roleID: wind} );
					}, 1500);
					setTimeout(function() {
			    client.removeFromRole( {serverID: "176888173270532096", userID, roleID: light} );
					}, 2000);
			    setTimeout(function() {
			    client.addToRole( {serverID: "176888173270532096", userID, roleID: earth});
					}, 2500);
			    };

			    if (messa[1] === 'fire') {
			    client.removeFromRole( {serverID: "176888173270532096", userID, roleID: dark} );
					setTimeout(function() {
			    client.removeFromRole( {serverID: "176888173270532096", userID, roleID: water} );
					}, 500);
					setTimeout(function() {
			    client.removeFromRole( {serverID: "176888173270532096", userID, roleID: wind} );
					}, 1000);
					setTimeout(function() {
			    client.removeFromRole( {serverID: "176888173270532096", userID, roleID: earth} );
					}, 1500);
					setTimeout(function() {
			    client.removeFromRole( {serverID: "176888173270532096", userID, roleID: light} );
					}, 2000);
			    setTimeout(function() {
			    client.addToRole( {serverID: "176888173270532096", userID, roleID: fire});
				  }, 2500);
			    };

			    };
			    };
		});
	client.on('disconnect', function(rawEvent) {
		var sys = require('sys')
		var exec = require('child_process').exec;

		function puts(error, stdout, stderr) {
			sys.puts(stdout)
		}
		exec("sudo pm2 restart bot-yorium", puts);
	});
