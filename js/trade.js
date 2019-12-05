var TestArdr = 0;

function sendArdor() {

	let requestType = 'sendMoney';
  let chain = 2;
  let deadline = 60;
  let feeNQT = 1000000;

  let secretPhrase = document.getElementById("secretPhrase").value;
  let recipient = document.getElementById("recipient").value;
  let amountNQT = document.getElementById("amountNQT").value * 100000000;
  let message = document.getElementById("message").value;

  var requestValue = [];
  requestValue.push(testserver);
  requestValue.push("?");
  requestValue.push('requestType=' + requestType + '&');
  requestValue.push('chain=' + chain + '&');
  requestValue.push('message=' + userName + "님이 보낸 메세지: " + message + '&');
  requestValue.push('secretPhrase=' + secretPhrase + '&');
  requestValue.push('recipient=' + recipient + '&');
  requestValue.push('amountNQT=' + amountNQT + '&');
  requestValue.push('feeNQT=' + feeNQT + '&');
  requestValue.push('deadline=' + deadline);
  var requestValueJoined = requestValue.join('');

	$.ajax({
		type: 'POST',
		url: requestValueJoined,
	}).done(function () {
		alert("송금이 완료되었습니다.");
  }).fail(function (msg){
		alert("서명을 확인해주세요.");
	}).always(function (msg){
		console.log('ALWAYS');
	});
}




function getTest_Ardr() {
  return new Promise(function (resolve, reject) {

	  $.get(testserver+'?requestType=getBalance&chain=2&account=ARDOR-KFG2-XBFK-KWJZ-6SZR9', function(data) {
		  console.log(data);
		if (data) {
			var data = JSON.parse(data);
			console.log(data);
			TestArdr = data.unconfirmedBalanceNQT ;
			resolve();
		} else {
			reject(new Error("Request is failed"));
		}
	  });
  });
};

// function getTest_Account() {
//   return new Promise(function (resolve, reject) {
// 	  $.get(testserver+'?requestType=getAccountId&secretPhrase="black cross inch wonder week beneath task anyone mouth asleep nature here"', function(data) {
// 		  console.log(data);
// 		if (data) {
// 			var data = JSON.parse(data);
// 			console.log(data);
// 			TestArdr = data.accountRS ;
// 			resolve();
// 		} else {
// 			reject(new Error("Request is failed"));
// 		}
// 	  });
//   });
// };

function viewTest_Ardr() {
  var html = [];
	html.push('<div >');
	html.push('<h5 >' + '현재 코인 소유 개수: ' + TestArdr /100000000 + ' IGNIS </h5>');
	html.push('</div>');
  $('.target').html(html.join(''));
}

function viewTrade() {
    $('.target').html('');
    $('.target2').html('');
    getTest_Ardr().then (function() {
      viewTest_Ardr();
      $('#tradeValue').css('display', 'block');
	    $('#settingsValue').css('display', 'none');
			$('#mainLogoId').css('display', 'none');
    });

}
