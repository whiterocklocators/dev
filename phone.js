(function() {
	setTimeout(function() {
	    var phoneInputs = document.getElementById("c-0-2");

	    var phoneDialog = document.createElement("div");
	    phoneDialog.className = "phone-dialog";

	    var title = document.createElement("div");
	    title.textContent = "Last Step";
	    title.style.margin = "auto";
	    title.style.textAlign = "center";
	    title.style.display = "inherit";
	    title.style.padding = "55px 0px 15px 0";
	    title.style.fontSize = "30px";
	    title.style.fontWeight = 600;

	    phoneDialog.append(title);

	    var description = document.createElement("div");
	    description.innerHTML = "Add your phone number so you'll never have to <br /> fill out a form again on our website!";
	    description.style.lineHeight = "1.5";
	    description.style.fontWeight = "300";
	    description.style.fontSize = "20px";
	    description.style.color = "grey";

	    phoneDialog.append(description);

	    var mainPanel = document.createElement("div");
	    mainPanel.style.padding = "25px";
	    mainPanel.style.color = "grey";

	    // add country icon and input box for typing phone number
	    var countryCode = document.createElement("span");
	    var seperateCode = document.createElement("span");
	    var phoneCode = document.createElement("span");

	    var flagIconElement = document.createElement("img");
	    flagIconElement.src = "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png";
	    flagIconElement.style.width = "30px";
	    flagIconElement.style.height = "20px";
	    flagIconElement.style.marginRight = "15px";

	    mainPanel.append(flagIconElement);

	    countryCode.textContent = "+1";
	    countryCode.style.fontSize = "30px";
	    countryCode.style.fontWeight = "300";

	    seperateCode.textContent = " | ";
	    seperateCode.style.fontSize = "40px";
	    seperateCode.style.fontWeight = 10;

	    // input box for phone number
	    var phoneInputBox = document.createElement("input");
	    phoneInputBox.type = "tel";
	    phoneInputBox.placeholder = "phone #";
	    phoneInputBox.style.backgroundColor = 'transparent';
        phoneInputBox.style.border = 'none';
        phoneInputBox.style.height = '45px';
        phoneInputBox.style.width = '200px';
        phoneInputBox.style.fontSize = '30px';
        phoneInputBox.style.fontWeight = '300';
        phoneInputBox.style.transition = 'all 0.30s ease-in-out';

        // close icon
	    // var phoneLabel = document.createElement("i");
	    // phoneLabel.className = "fa fa-times";
	    // phoneLabel.style.position = 'absolute';
	    // phoneLabel.style.color = 'grey';
     //    phoneLabel.style.lineHeight = '1.5';
     //    phoneLabel.style.fontSize = '24px';
     //    phoneLabel.style.fontWeight = '600';
     //    phoneLabel.style.webkitTextStroke = '3px white';

        // phoneLabel.onclick = function () {
        // 	phoneInputBox.value = '';
        // };

	    phoneCode.append(phoneInputBox);
	    // phoneCode.append(phoneLabel);

	    mainPanel.append(countryCode);
	    mainPanel.append(seperateCode);
	    mainPanel.append(phoneCode);

		phoneDialog.append(mainPanel);

		// submit button
		var submitButton = document.createElement("div");
		submitButton.textContent = "submit";
		submitButton.style.width = '200px';
		submitButton.style.height = '55px';
		submitButton.style.color = 'white';
		submitButton.style.fontSize = '24px';
		submitButton.style.lineHeight = '2';
		submitButton.style.margin = '0 auto 55px auto';
		submitButton.style.backgroundColor = '#37bda8';
		submitButton.style.borderRadius = '5px';
		submitButton.style.cursor = 'pointer';
		submitButton.style.textTransform = 'uppercase';
		submitButton.style.transition = '0.3';

		submitButton.onclick = function () {
        	var fetchOptions = {
        		method: 'get'
        	};

        	var url = "https://hooks.zapier.com/hooks/catch/1450847/e802qp/?phone="
        			+ phoneInputBox.value;

        	fetch(url, fetchOptions)
        		.then(function(res) {
        			phoneDialog.innerHTML = '';

        			var thankMessageElement = document.createElement('h2');
        			thankMessageElement.style.margin = 'auto';
        			thankMessageElement.textContent = 'Thank you';
        			phoneDialog.append(thankMessageElement);
        		})
        };

        submitButton.onmouseenter = function() {
        	submitButton.style.opacity = "0.7"
        }

        submitButton.onmouseout = function() {
        	submitButton.style.opacity = "1"
        }

		phoneDialog.append(submitButton);

		// add style to dialog
		phoneDialog.style.position = 'relative';
		phoneDialog.style.backgroundColor = 'white';
		phoneDialog.style.height = '100%';
		phoneDialog.style.zIndex = '15001';
		phoneDialog.style.opacity = '1';
		phoneDialog.style.textAlign = 'center';
		phoneDialog.style.margin = '0 auto';
		phoneDialog.style.pointerEvents = 'auto';

		phoneDialog

	    // make original document overlay

	    var embedCodeElement = document.getElementsByClassName("embed-type-generic");
	    embedCodeElement[0].innerHTML = '';
	    embedCodeElement[0].append(phoneDialog)

	    // var embedCodeElement = document.getElementsByClassName("embed-code");
	    // embedCodeElement[0].append(phoneDialog)

	}, 500);
	
})();