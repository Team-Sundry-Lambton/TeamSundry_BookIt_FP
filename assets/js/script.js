// Sidebar
	
if($(window).width() <= 991){
	var Sidemenu = function() {
		this.$menuItem = $('.main-nav a');
	};
	
	function init() {
		var $this = Sidemenu;
		$('.main-nav a').on('click', function(e) {
			if($(this).parent().hasClass('has-submenu')) {
				e.preventDefault();
			}
			if(!$(this).hasClass('submenu')) {
				$('ul', $(this).parents('ul:first')).slideUp(350);
				$('a', $(this).parents('ul:first')).removeClass('submenu');
				$(this).next('ul').slideDown(350);
				$(this).addClass('submenu');
			} else if($(this).hasClass('submenu')) {
				$(this).removeClass('submenu');
				$(this).next('ul').slideUp(350);
			}
		});
	}

	// Sidebar Initiate
	init();
	}

    function validateRegister(){
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const phoneNumber = document.getElementById("phoneNumber").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const emailRegex = /\S+@\S+\.\S+/;
        const phonePattern = /^\d{10}$/;
        const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

        if (firstName.trim() === '') {
            alert('Please enter first name.');
            return false;
        }

        if (lastName.trim() === '') {
            alert('Please enter last name.');
            return false;
        }

        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        if (!phonePattern.test(phoneNumber)) {
            alert('Please enter a valid phone number.');
            return false;
        }

        if (password.trim() === '') {
            alert('Please enter a password.');
            return false;
        }

        if (!passwordRegex.test(password)) {
            alert('Please enter a valid password. Your password must contain at least one uppercase letter, one lowercase letter, one digit, and be at least 8 characters long.');
            return false;
        }

        if (confirmPassword.trim() === '') {
            alert('Please confirm password.');
            return false;
        }

        if(password != confirmPassword) {
            alert("Passwords do not match! Please try again!");
            return false;
        }

        return true;
    }

    function register() {
        if (validateRegister()){
            const isClient = document.getElementById("isClient").value;
            const firstName = document.getElementById("firstName").value;
            const lastName = document.getElementById("lastName").value;
            const email = document.getElementById("email").value;
            const phoneNumber = document.getElementById("phoneNumber").value;
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmPassword").value;
            localStorage.setItem("isClient", isClient);
            localStorage.setItem("firstName", firstName);
            localStorage.setItem("lastName", lastName);
            localStorage.setItem("email", email);
            localStorage.setItem("phoneNumber", phoneNumber);
            localStorage.setItem("password", password);
            localStorage.setItem("confirmPassword", confirmPassword);
            if (confirm("Thank you, "+ localStorage.getItem('firstName') + "! You are successfully registered!")) {
                window.location.href = "login.html";
            }
        }
	} 

    function validateLogin(){
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const emailRegex = /\S+@\S+\.\S+/;

        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        if (password.trim() === '') {
            alert('Please enter a password.');
            return false;
        }

        return true;
    }

    function login() {
        if (validateLogin()){
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
              //alert(localStorage.getItem('isClient'));
            if(email === localStorage.getItem('email')) {
                if(password === localStorage.getItem('password')) {
                    var url = localStorage.getItem('isClient') === "true" ? "client-profile.html" : "vendor-profile.html";
                    window.location.href = url;
                  } else {
                    alert("Wrong password! Please try again!");
                }
            } else {
                alert("User is not existed! Please try again!");
            }
        }
    }

    function logout() {
        if (confirm("Hi " + localStorage.getItem('firstName') + ", are you sure you want to logout?")) {
            localStorage.clear();
            window.location.href = "login.html";
        }
    }

    function loadUser(){
        document.getElementById('topbarName').innerHTML = localStorage.getItem('firstName') + " " + localStorage.getItem('lastName');
        document.getElementById('lblName').innerHTML = localStorage.getItem('firstName') + " " + localStorage.getItem('lastName');
        document.getElementById('firstName').value = localStorage.getItem('firstName');
        document.getElementById('lastName').value = localStorage.getItem('lastName');
        document.getElementById('email').value = localStorage.getItem('email');
        document.getElementById('phoneNumber').value = localStorage.getItem('phoneNumber');
    }

    function loadUserPassword(){
        document.getElementById('oldPassword').value = localStorage.getItem('password');
    }

    function updatePassword() {
        const password = document.getElementById("newPassword").value;
        const confirmPassword = document.getElementById("confirmNewPassword").value;

        if(password === confirmPassword) {
            localStorage.setItem("password", password);
            localStorage.setItem("confirmPassword", confirmPassword);
            if (confirm("Thank you, "+ localStorage.getItem('firstName') + "! updated successfully!")) {
            }
        } else {
            alert("Passwords are not match! Please try again!");
        }
	} 



    // GENERATE HEADER
    const headerContainer = document.getElementById("header-container");
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        headerContainer.innerHTML = xhr.responseText;
        }
    };
    xhr.open("GET", "common/header.html", true);
    xhr.send();

    // GENERATE FOOTER
    const footer = document.getElementById("footer");
    const xhrs = new XMLHttpRequest();
    xhrs.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            footer.innerHTML = xhrs.responseText;
        }
    };
    xhrs.open("GET", "common/footer.html", true);
    xhrs.send();

    
    function validatePostService(){
        const title = document.getElementById('title').value;
        const category = document.getElementById('category');
        var categorySelected = category.options[category.selectedIndex].text;
        const price_type = document.getElementById('price_type');
        var priceTypeSelected = price_type.options[price_type.selectedIndex].text;
        if (title.trim() === '') {
            alert('Please enter a title.');
            return false;
        }

        if (categorySelected.trim() === '') {
            alert('Please select category.');
            return false;
        }

        if (priceTypeSelected.trim() === '') {
            alert('Please select price type.');
            return false;
        }

        return true;
    }

    function postService() {
        if(validatePostService()){
            alert('Service was posted! We will review and approve it later.');
        }
    }

    if($('.floating').length > 0 ){
		$('.floating').on('focus blur', function (e) {
		$(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
		}).trigger('blur');
	}

    function validateContactForm(){
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const emailRegex = /\S+@\S+\.\S+/;

        if (name.trim() === '') {
            alert('Please enter name.');
            return false;
        }

        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        if (message.trim() === '') {
            alert('Please enter a message.');
            return false;
        }

        return true;
    }

    function sendEnquiry() {
        if(validateContactForm()){
            alert("Thank you for contacting us! We\'ll get back to you soon! ");
        }
    }

