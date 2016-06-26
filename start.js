var DiscordClient = require('discord.io');
var request = require('request');
var fs = require('fs');
var AuthDetails = require('./token.json');
var permission = require('./fw.json');
var exhentai = require('./exhfav.json');
var gif = require('./gif.json');
var fx = require('money');
var mad = require('./mad.json');
var Cleverbot = require('cleverbot-node');
var ai = new Cleverbot;
var messageerror = 'Try a art channel :p';
var messageerrorsfw = "Try a SFW channel :p (don't forget to use !help.y)";
var messageerrornsfw = "Try a NSFW channel :p (don't forget to use !help.y)";
var client = new DiscordClient({
	autorun: true,
	token: AuthDetails.token
});

function getmoneyJson(callback) {
	request({
		url: 'http://api.fixer.io/latest?base=HUF'
	}, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			callback(JSON.parse(body.substr(0)));
		};
	});
}
client.on('ready', function(rawEvent) {
	client.setPresence({
		type: 0, // 0 = game/default, 1 = streaming
		//url: 'http://i.yorium.moe/', // Url that the user is sent to when viewing stream
		game: '!help.y -> cmds' // if type is 1 it shows as streaming game
	});
});
client.on('ready', function(rawEvent) {
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
	}
	if (message === 'Pong!') {
		if (userID === '98437055679324160') {
			client.sendMessage({
				to: channelID,
				message: "!ping"
			});
		};
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
	if (message === '!rtthook.y') {
		if (userID === '98437055679324160') {
			var sys = require('sys')
			var exec = require('child_process').exec;

			function puts(error, stdout, stderr) {
				sys.puts(stdout)
			}
			exec("sudo pm2 restart hookgit.js", puts);
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
	if (channelID === '183942864798089216') {
		if (userID === '174553715187908609') {
			Cleverbot.prepare(function() {
				ai.write(num, function(response) {
					setTimeout(function() {
						client.sendMessage({
							to: channelID,
							message: response.message
						});
					}, 2500);
				});
			});
		};
	};
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
	if (message[0] === 'yy,') {
		if (perm.indexOf(channelID) < 1) {
			Cleverbot.prepare(function() {
				ai.write(num, function(response) {
					setTimeout(function() {
						client.sendMessage({
							to: channelID,
							message: response.message
						});
					}, 500);
				});
			});
		}
	};
});
client.on('message', function(user, userID, channelID, message, rawEvent) {
	if (message === '!out.y') {
		if (userID === '98437055679324160') {
			client.disconnect()
		}
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
client.on('message', function(user, userID, channelID, message, rawEvent) {
	var msg = message.slice(5);
	var message = message.split(' ')
	if (message[0] === '!st.y') {
		if (userID === '98437055679324160') {
			client.setPresence({
				game: msg
			})
		} else {
			client.sendMessage({
				to: channelID,
				message: "Baka, i'm only for Yorium >////<"
			});
		};
	};
});
client.on('message', function(user, userID, channelID, message, rawEvent) {
	var msg1 = message.replace(/!mad./g, '');
	if (message === '!mad.' + msg1) {
		if (userID === '98437055679324160') {
			var lnk = mad.link
			if (lnk.indexOf(msg1) != -1) {
				client.sendMessage({
					to: channelID,
					message: "Already in Master :x"
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
	if (message[0] === '!mo.co') {
		getmoneyJson(function(data) {
			fx.rates = data.rates
			var rate = fx(message[1]).from(message[2]).to(message[3])
			client.sendMessage({
				to: channelID,
				message: rate
			});
		})
	};
	if (message[0] === '!mo.ra') {
		function getmoneybJson(callback) {
			request({
				url: 'http://api.fixer.io/latest?base=' + message[1]
			}, function(error, response, body) {
				if (!error && response.statusCode == 200) {
					callback(JSON.parse(body.substr(0)));
				}
			});
		}
		getmoneybJson(function(data) {
			fx.rates = data.rates
			var rate = JSON.stringify(fx.rates, 0, 2)
			client.sendMessage({
				to: channelID,
				message: rate
			});
		})
	};
	if (message[0] === '!mo.co.ra') {
		getmoneyJson(function(data) {
			fx.rates = data.rates
			var rate = fx.convert(1, {
				from: message[1],
				to: message[2]
			})
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
				message: ">/////<"
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
	var num = message.slice(5);
	var message = message.split(' ')
	if (message[0] === '!cal') {
		var child = require('child_process');
		child.exec('expr ' + '"' + num + '"' + ' | bc -l /home/yorium/.bc/extensions.bc /home/yorium/.bc/scientific_constants.bc', function(error, stdout, stderr) {
			var calcul = stdout.replace(/\\/g, '');
			client.sendMessage({
				to: channelID, // art-club osu!academy
				message: calcul
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
	var message = message.split(' ')
	if (message[0] === '!h2d') {
		var child = require('child_process');
		child.exec('echo "ibase=16;' + message[1] + '" | bc', function(error, stdout, stderr) {
			var base = stdout.replace(/\\/g, '');
			client.sendMessage({
				to: channelID,
				message: base
			});
		});
	};
	if (message[0] === '!d2h') {
		var child = require('child_process');
		child.exec('echo "obase=16;' + message[1] + '" | bc', function(error, stdout, stderr) {
			var base = stdout.replace(/\\/g, '');
			client.sendMessage({
				to: channelID,
				message: base
			});
		});
	};
	if (message[0] === '!b2d') {
		var child = require('child_process');
		child.exec('echo "ibase=2;' + message[1] + '" | bc', function(error, stdout, stderr) {
			var base = stdout.replace(/\\/g, '');
			client.sendMessage({
				to: channelID,
				message: base
			});
		});
	};
	if (message[0] === '!d2b') {
		var child = require('child_process');
		child.exec('echo "obase=2;' + message[1] + '" | bc', function(error, stdout, stderr) {
			var base = stdout.replace(/\\/g, '');
			client.sendMessage({
				to: channelID,
				message: base
			});
		});
	};
	if (message[0] === '!h2b') {
		var child = require('child_process');
		child.exec('echo "ibase=16;obase=2;' + message[1] + '" | bc', function(error, stdout, stderr) {
			var base = stdout.replace(/\\/g, '');
			client.sendMessage({
				to: channelID,
				message: base
			});
		});
	};
	if (message[0] === '!b2h') {
		var child = require('child_process');
		child.exec('echo "ibase=2;obase=10000;' + message[1] + '" | bc', function(error, stdout, stderr) {
			var base = stdout.replace(/\\/g, '');
			client.sendMessage({
				to: channelID,
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
	var message = message.split(' ')
	if (message[0] === '!str.y') {
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
});
client.on('disconnect', function(rawEvent) {
	var sys = require('sys')
	var exec = require('child_process').exec;

	function puts(error, stdout, stderr) {
		sys.puts(stdout)
	}
	exec("sudo pm2 restart bot-yorium", puts);
});
