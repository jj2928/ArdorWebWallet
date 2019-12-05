
document.addEventListener('DOMContentLoaded', function() {
    var mainId = document.getElementById('mainId');
    mainId.addEventListener('click', function() {
      getBlock().then (function() {
    		getPrice_Ardr().then (function() {
    			getKoreapool_forgedArdr().then (function() {
    				getKoreapool_Ardr().then (function() {
              viewBlock();
    					viewKor();
    					viewKorForged();
    					viewPrice();
              viewMain();
              $('#mainLogoId').css('display', 'none');
    				});
    			});
    		});
    	});
    });

    var tradeId = document.getElementById('tradeId');
    tradeId.addEventListener('click', function() {
      viewTrade();
    });

		var sendArdorId = document.getElementById('sendArdorId');
    sendArdorId.addEventListener('click', function() {
      sendArdor();
    });

    var settingsId = document.getElementById('settingsId');
    settingsId.addEventListener('click', function() {
      viewSettings();
    });

    var saveSettingsId = document.getElementById('saveSettingsId');
    saveSettingsId.addEventListener('click', function() {
      saveSettings();
    });

    var loadPassphraseId = document.getElementById('loadPassphraseId');
    loadPassphraseId.addEventListener('click', function() {

      comparePassword_test().then (function () {
        if (comparePassword_test_result) {
          alert(userName + "님의 서명을 불러옵니다.");
          document.getElementById("secretPhrase").value = userPassphrase ;
        }
      });
    });


});
