var article = document.getElementsByTagName("article")[0]; // define the article
var bc = article.innerHTML; // define variable bc that includes the business card.

// function: overwrite article content with qrCode var.
function showQrCode() {
	var style = "width: 20%; height: 20%; display: block; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"
	var qrCode = '<img src="../media/svg/qr-code.svg" /><img id="amir" ondblclick="handleQrCode()" style="' + style + '" src="../media/amir.webp" />';
	article.innerHTML = qrCode; // trigger.
}

// function: handle qr-code to bc and bc to qr-code
function handleQrCode() {
	if (article.innerHTML == bc) {
		showQrCode();
	} else {article.innerHTML = bc}
}

// event listener: touch shortcut
article.addEventListener("touchstart", function(event) {
	var countTouches = event.touches.length;
	if (countTouches == 2) {
		handleQrCode();
	}
}, false)

// event listener: keyboard shortcut
document.addEventListener("keydown", function(event) {
	if (event.which == 81 && event.shiftKey) {
		handleQrCode();
	}
})
