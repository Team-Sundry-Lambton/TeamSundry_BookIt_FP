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

    // hide inpout box label when data entered

    const inputFields = document.querySelectorAll('input');
    if (inputFields.length > 0) {
        inputFields.forEach(function(inputField) {
            const labelElement = inputField.previousElementSibling || inputField.nextElementSibling;

            inputField.addEventListener('input', function() {
                if (inputField.value !== '') {
                labelElement.style.display = 'none';
                } else {
                labelElement.style.display = 'inline-block';
                }
            });
        });
    }

    function register() {
		const isClient = document.getElementById("isClient").value;
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const phoneNumber = document.getElementById("phoneNumber").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if(password === confirmPassword) {
            localStorage.setItem("isClient", isClient);
            localStorage.setItem("firstName", firstName);
            localStorage.setItem("lastName", lastName);
            localStorage.setItem("email", email);
            localStorage.setItem("phoneNumber", phoneNumber);
            localStorage.setItem("password", password);
            localStorage.setItem("confirmPassword", confirmPassword);
            if (confirm("Thank you, "+ localStorage.getItem('firstName') + "! Register successfully!")) {
                window.location.href = "login.html";
            }
        } else {
            alert("Passwords are not match! Please try again!");
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

    