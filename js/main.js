var blockHeight;;
var html = [];
var server = 'http://167.179.119.71:27876/nxt';
var testserver = 'https://testardor.jelurida.com/nxt';
var KorArdr;
var key = "black cross inch wonder week beneath task anyone mouth asleep nature here"

function getBlock() {
  return new Promise(function (resolve, reject) {

	  $.get(server+'?requestType=getBlock', function(data) {
		if (data) {
		  var data = JSON.parse(data);
		  blockHeight = data.height;
		  console.log(data.height);
		  resolve();
		} else {
		  reject(new Error("Request is failed"));
		}
	  });
  });
};

function getPrice_Ardr() {
  return new Promise(function (resolve, reject) {

	  $.get('https://api.upbit.com/v1/ticker?markets=krw-ardr', function(data) {
		  console.log(data);
		if (data) {
		  ardrPrice = data[0].trade_price;
		  console.log(data[0].trade_price);
		  resolve();
		} else {
		  reject(new Error("Request is failed"));
		}
	  });
  });
};

function getKoreapool_forgedArdr() {
  return new Promise(function (resolve, reject) {

	  $.get(server+'?requestType=getAccount&account=ARDOR-BWFU-3MNG-UYVU-222DD', function(data) {
		  console.log(data);
		if (data) {
			var data = JSON.parse(data);
			console.log(data);
			KorArdrForged = data.forgedBalanceFQT ;
			resolve();
		} else {
			reject(new Error("Request is failed"));
		}
	  });
  });
};

function getKoreapool_Ardr() {
  return new Promise(function (resolve, reject) {
	  $.get(server+'?requestType=getEffectiveBalance&account=ARDOR-BWFU-3MNG-UYVU-222DD', function(data) {
		  console.log(data);
		if (data) {
			var data = JSON.parse(data);
			console.log(data);
			KorArdr = data.effectiveBalanceFXT ;
			resolve();
		} else {
			reject(new Error("Request is failed"));
		}
	  });
  });
};


function viewBlock() {
  html = [];
	html.push('<div >');
	html.push('<h5 >' + '현재 아더 플랫폼의 블록높이: ' + blockHeight + ' Blocks </h5>');
	html.push('</div>');
  $('.target').html(html.join(''));
}

function viewPrice() {
	html.push('<div >');
	html.push('<h5 >' + '현재 아더의 가격: ' + ardrPrice + ' 원 </h5>');
	html.push('</div>');
  $('.target').html(html.join(''));
}

function viewKorForged() {
	html.push('<div >');
	html.push('<h5 >' + '현재까지 벌어들인 포징수입: ' + KorArdrForged / 100000000 + ' Ardr </h5>');
	html.push('</div>');
  $('.target').html(html.join(''));
}

function viewKor() {
	html.push('<div >');
	html.push('<h5 >' + '현재 포징중인 아더 개수: ' + KorArdr + ' Ardr </h5>');
	html.push('</div>');
}

function viewMain() {

  $('#tradeValue').css('display', 'none');
  $('#settingsValue').css('display', 'none');

  html = [];
  var main = '\
    <div id="details" style="width: 550px; margin: auto; text-align: left">\
      <h4>사용안내</h4>\
        <ul>\
          <li>설정버튼을 눌러서 정보들을 입력해주세요.</li> \
        </ul>\
      <h4>Koreapool?</h4>\
        <ul>\
          <li>코리아풀의 공식계좌는 ARDOR-BWFU-3MNG-UYVU-222DD 입니다.</li>\
        </ul>\
      <h4>주요 기능들</h4>\
        <ul>\
          <li>송금하기</li>\
        </ul>\
      <h4>왜 만들었나요?</h4>\
        <ul>\
          <li>코리아풀을 좀더 효율적으로 관리하기 위해 만들었어요.</li>\
        </ul>\
    </div>';

  html.push(main);

  $('.target2').html(html.join(''));
}
