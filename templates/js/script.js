
listen = {
	init: function() {
		$('body').click(function (e) {
			if(e.target.hasAttribute('cmd-click')){
				if($(e.target).attr('cmd-click').indexOf('select-tab')!==-1){
					var label = $(e.target).attr('cmd-click').split('=>')[1];
					if(label === 'login'){
						login.show();
					}
					else{
						signup.show();
					}
				}
				if($(e.target).attr('cmd-click').indexOf('select-menu')!==-1){
					var label = $(e.target).attr('cmd-click').split('=>')[1];
					if(label === 'products'){
						dashboard.availableProducts.show();
					}
					if(label === 'cart'){
						dashboard.myCart.show();
					}
					if(label  === 'history'){
						dashboard.purchaseHistory.show();
					}
				}
				if($(e.target).attr('cmd-click').indexOf('select-menu')!==-1){
					var label = $(e.target).attr('cmd-click').split('=>')[1];
					if(label === 'products'){
						admin.availableProducts.show();
					}
					if(label === 'userhistory'){
						admin.purchaseUserHistory.show();
					}
					if(label === 'addUser'){
						admin.addUser.show();
					}
					if(label === 'addItem'){
						admin.addItem.show();
					}
					if(label === 'editItem'){
						admin.editItem.show();
					}
					else if(label === 'deleteItem'){
						admin.deleteItem.show();
					}
				}
			}
		});
	}
}

login = {
	init: function(){

	},
	validate: function(){
		if(!valid.email($('#email').val())){
			$('#alert-login').html('Please Enter an email address');
			$('#email').focus();
			return false;
		}
		else if(!valid.password($('#password').val())){
			$('#alert-login').html('Please Enter a valid password');
			$('#password').focus();
			return false;
		}
		return true;
	},
	show: function () {
		$('#login').removeClass('hidden');
		$('#login-tab').addClass('selected');
		signup.hide();
	},
	hide: function(){
		$('#login').addClass('hidden');
		$('#login-tab').removeClass('selected');
	}
}
myform = {
	init: function(){

	},
	validate: function(){
		if(!valid.email($('#email').val())){
			$('#alert-form').html('Please Enter an email address');
			$('#email').focus();
			return false;
		}
		else if(!valid.password($('#password').val())){
			$('#alert-form').html('Please Enter a valid password');
			$('#password').focus();
			return false;
		}
		return true;
signup = {
	init: function(){

	},
	show: function () {
		$('#signup').removeClass('hidden');
		$('#signup-tab').addClass('selected');
		login.hide();
	},
	hide: function(){
		$('#signup').addClass('hidden');
		$('#signup-tab').removeClass('selected');
	}
}

valid = {
     email: function (email) {
        if (typeof email !== 'undefined') {
            email = email.trim();
            if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
                return true;
            } else if (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    },
    password: function (input) {
        if (typeof input !== 'undefined') {
            medium = new RegExp(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/);
            strong = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
            if (strong.test(input)) {
                return true;
            } else if (medium.test(input)) {
                return true;
            } else {
                return (input.length >= 8);
            }
        } else {
            return false;
        }
    },
    phone: function (input) {
        if (typeof input !== 'undefined') {
            num = new RegExp(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/);
            if (input.indexOf('+')!== -1) {
                input = input.substring(1, l(input));
                return (num.test(input));
            } else {
                return (num.test(input));
            }
        } else {
            return false;
        }
    }, 
    string: function (input) {
        if (typeof input !== 'undefined') {
            str = new RegExp(/^[a-zA-Z0-9 \n?!'`".,-]*$/);
            /*** /^[a-zA-Z\s]*$/*/
            return (str.test(input));
        } else {
            return false;
        }
    }
}
		//dashboard page functionalities/scripts
dashboard = {
	init: function(){

	},
	availableProducts:{
		show:function(){
			$('#products').removeClass('hidden');
			$('#menu-products').addClass('selected');
			dashboard.myCart.hide();
			dashboard.purchaseHistory.hide();
		},
		hide: function(){
			$('#menu-products').removeClass('selected');
			$('#products').addClass('hidden');
		}
	},
	myCart: {
		show:function(){
			$('#cart').removeClass('hidden');
			$('#menu-cart').addClass('selected');
			dashboard.availableProducts.hide();
			dashboard.purchaseHistory.hide();
		},
		hide: function(){
			$('#menu-cart').removeClass('selected');
			$('#cart').addClass('hidden');
		}
	},
	purchaseHistory: {
		show:function(){
			$('#history').removeClass('hidden');
			$('#menu-history').addClass('selected');
			dashboard.availableProducts.hide();
			dashboard.myCart.hide();
		},
		hide: function(){
			$('#menu-history').removeClass('selected');
			$('#history').addClass('hidden');
		}
	}
}
		//end dashboard page

		// admin page functionalities/scripts
admin = {
	init:function(){

	},
	availableProducts:{
		show:function(){
			$('#products').removeClass('hidden');
			$('#menu-products').addClass('selected');
			admin.addUser.hide();
			admin.purchaseUserHistory.hide();
		},
		hide: function(){
			$('#menu-products').removeClass('selected');
			$('#products').addClass('hidden');

		}

	},
	purchaseUserHistory: {
		show:function(){
			$('#userhistory').removeClass('hidden');
			$('#menu-userhistory').addClass('selected');
			admin.availableProducts.hide();
			admin.addUser.hide();
			// dashboard.myCart.hide();
		},
		hide: function(){
			$('#menu-userhistory').removeClass('selected');
			$('#userhistory').addClass('hidden');
		}
	},

	addUser:{
		show:function(){
			$('#addUser').removeClass('hidden');
			$('#menu-adduser').addClass('selected');
			admin.availableProducts.hide();
			admin.purchaseUserHistory.hide();
		},
		hide: function(){
			$('#menu-adduser').removeClass('selected');
			$('#addUser').addClass('hidden');
		}
	},

	addItem:{
		show:function(){
			$('#addItem').removeClass('hidden');
			$('#menu-addItem').addClass('selected');
			admin.availableProducts.hide();
			admin.purchaseUserHistory.hide();
			admin.addUser.hide();
			admin.editItem.hide();
			admin.deleteItem.hide();
		},
		hide:function(){
			$('menu-addItem').removeClass('hidden');
			$('#addItem').addClass('selected')
		}
	},
	editItem:{
		show:function(){
			$('#editItem').removeClass('hidden');
			$('#menu-editItem').addClass('selected');
			admin.availableProducts.hide();
			admin.purchaseUserHistory.hide();
			admin.addUser.hide();
			admin.addItem.hide();
			admin.deleteItem.hide();
		},
		hide:function(){
			$('menu-editItem').removeClass('hidden');
			$('#editItem').addClass('selected')
		}
	},
	deleteItem:{
		show:function(){
			$('#deleteItem').removeClass('hidden');
			$('#menu-deleteItem').addClass('selected');
			admin.availableProducts.hide();
			admin.purchaseUserHistory.hide();
			admin.addUser.hide();
			admin.addItem.hide();
			admin.editItem.hide();
		},
		hide:function(){
			$('menu-deleteItem'.removeClass('hidden'));
			$('#deleteItem').addClass('selected')
		}
	}
}
listen.init();