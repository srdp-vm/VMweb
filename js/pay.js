function httpPost(URL, params) {
  var form = document.createElement("form");
  form.action = URL;
  form.method = "post";
  form.style.display = "none";
  for (var x in params) {
    var input = document.createElement("input");
    input.name = x;
    input.value = params[x];
    form.appendChild(input);
  }
  document.body.appendChild(form);
  form.submit();
}

function getDateNow() {
  var vNow = new Date();
  var sNow = "";
  sNow += String(vNow.getFullYear());
  sNow += String(vNow.getMonth() + 1);
  sNow += String(vNow.getDate());
  sNow += String(vNow.getHours());
  sNow += String(vNow.getMinutes());
  sNow += String(vNow.getSeconds());
  sNow += String(vNow.getMilliseconds());
  return sNow;
}

$(function () {
  $('#settleup').click(function () {
    var price = $('#totalprice').text().substr(1);
    var params = {
      "WIDout_trade_no": getDateNow(),
      "WIDsubject": "支付宝手机网站支付测试",
      "WIDtotal_amount": price,
      "WIDbody": "这是商品描述"
    }
    httpPost("http://srdp-vm/VMserver/Pay", params);
  })
})
