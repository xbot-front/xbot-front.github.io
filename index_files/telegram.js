"use strict";
const botToken = "1002767307:AAFWAqbVFNJwuh2BMm2nslxoC3ZwnRZHFuY";
const chatId = "213337828";

function telegram(text) {
	return new Promise((resolve, reject) => {
		let formData = new FormData();
		formData.append("chat_id", chatId);
		formData.append("text", text);
		formData.append("disable_notification", false);

		let request = new XMLHttpRequest();
		request.open("POST", `https://api.telegram.org/bot${botToken}/sendMessage`);
		request.onload = () => {
			if (request.status < 400) resolve();
			else reject(request.statusText);
		};
		request.onerror = () => reject(request.statusText);
		request.send(formData);
	});
}


function sendFormInfo(){
    return new Promise((resolve, reject)  => {

    let alias = document.getElementById("alias").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    console.log(alias);
    console.log(phone);
    console.log(message);

    let text = `Alias ${alias}\nPhone ${phone}\n${message}`;
    console.log(text);

    telegram(text);
    let button = document.getElementById('form-button')
    button.disabled = true;
    button.innerText = "Enviado!"
    resolve();

    });

}