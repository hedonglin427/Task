console.log("JS成功执行进来;")console.log("JS是否存在逻辑问题、变量问题、参数问题等等")console.log("JS符号是否存在问题")var victory = JSON.parse(sessionStorage.getItem("end"));//用于判断哪方玩家胜利var die = JSON.parse(sessionStorage.getItem("die"));//被杀死玩家var voteKill = JSON.parse(sessionStorage.getItem("vote"));//被投死的玩家var part_value = JSON.parse(sessionStorage.getItem("deal"));//玩家身份数据var click = JSON.parse(sessionStorage.getItem("c"));//投票按钮点击次数// click = JSON.parse(click);if (victory == 0) {    $(".win-text").text("水民胜利");    $(".eulogy").text("太棒了！你知道么？在杀人游戏中只有20%的平民取得游戏最终的胜利哦！")}else {    $(".win-text").text("杀手胜利");}for (var i = 1;	i < click + 1;	i++){	var a = die[i-1] + 1;    var n = i + 1;    var x = voteKill[i - 1] + 1;    var status = [];    if (part_value[x-1] == 1) {    	status = "杀手";    	console.log(part_value[x])    }    else {        status = "水民";    }	$(".diary").append(		'<ul class="diary_form">\n' +			'<li>\n' +				'<p class="days">' + '第' + i + '天' + '</p>\n' +				'<p class="time-point">0小时07分</p>\n' +			'</li>\n' +			'<li>\n' +				'晚上：' + a + '号被杀死，' + a + '号是水民' + 			'<br>' +				'白天：' + x + '号被投死，' + x + '号是' + status +			'</li>\n' +		'</ul>\n' 		);	}