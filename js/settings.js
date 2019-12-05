let userName;
let userAccount;
let userPassphrase;
let userPassword;
let comparePassword_test_result;

function viewSettings() {
    $('.target').html('');
    $('.target2').html('');
    $('#tradeValue').css('display', 'none');
    $('#settingsValue').css('display', 'block');
    $('#mainLogoId').css('display', 'none');
}

function saveSettings() {
  return new Promise(function (resolve, reject) {
    let userName = document.getElementById("settingsName").value;
    let userAccount = document.getElementById("settingsAccount").value;
    let userPassphrase = document.getElementById("settingsPassphrase").value;
    let userPassword = document.getElementById("settingsPassword").value;
    let userPassword2 = document.getElementById("settingsPassword2").value;
    if ( (userPassword != "")&&(userPassword2 != "") ){
      if (userPassword == userPassword2){
        var userSettings = {userName: userName, userAccount: userAccount, userPassphrase: userPassphrase, userPassword: userPassword};
        chrome.storage.local.set(userSettings, function() {
            alert('성공적으로 저장되었습니다!');
            resolve();
        });
      } else {
          alert('비밀번호를 확인해주세요.');
      }
    } else {
        alert('간편 비밀번호를 입력해주세요.');
    }
  });
}

function getInput() {
  var inputData = prompt("비밀번호를 입력해주세요.", "");
  if (inputData != "" && inputData != null) {
    return inputData;
  } else if (inputData == "") {
      alert('비밀번호를 입력해주세요.');
      return;
  } else if (inputData == null) {
      return;
  }
}

function comparePassword_test() {
  return new Promise (function (resolve, reject) {
    var keys = ["userName", "userAccount", "userPassphrase", "userPassword"];
    chrome.storage.local.get(keys, function(userSettings) {
      if (userSettings) {
        userName = userSettings.userName;
        userPassphrase = userSettings.userPassphrase;
        userPassword = userSettings.userPassword;
        var inputData = getInput();
        if (inputData == userPassword){
            alert('저장된 서명을 불러옵니다.');
            comparePassword_test_result = 1;
            resolve();
        } else if (inputData != "" && inputData != null) {
            alert('비밀번호와 일치하지 않습니다.');
            comparePassword_test_result = 0;
            resolve();
        }
      }
    });
  });
};


// function comparePassword(){
//   var keys = ["userName", "userAccount", "userPassphrase", "userPassword"];
//
//
//   chrome.storage.local.get(keys, function(userSettings) {
//
//     var userName = userSettings.userName;
//     var userPassphrase = userSettings.userPassphrase;
//     let userPassword = userSettings.userPassword;
//     var inputPassword = getPassword();
//     if (inputPassword == userPassword){
//         alert('입력한 비밀번호가 저장된 비밀번호와 일치합니다.');
//         return 1;
//         alert('함수값 반환합니다 1');
//     } else{
//         alert('입력한 비밀번호가 저장된 비밀번호와 일치하지 않습니다.');
//         return 0;
//         alert('함수값 반환합니다 0');
//     }
//
//   });
// }








/*
var keys = ["userName", "userPassphrase"];  // 불러올 항목들의 이름
chrome.storage.local.get(keys, function(userSettings) {
    var userName = userSettings.userName;
    var userPassphrase = userSettings.userPassphrase;
});
*/



//배열

/*
function() {
    chrome.storage.sync.get({ObjectName: []}, function (result) {
    var ObjectName = result.ObjectName;
    ObjectName.push({ArrayName: document.getElementById("field")});
    });


chrome.storage.sync.get({ArrayName: function(value) {
        for(i=0; i<value.length; i++) {
            document.write(value)
        };
        */
