
  //localStorage.removeItem("Thanks");
var data=localStorage.getItem("Thanks");
// Initialize your app
var myApp = new Framework7({
    animateNavBackIcon:true,
    swipePanel: 'left',
    precompileTemplates: true
});

// Export selectors engine
var $$ = Dom7;

// Add main View
var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    dynamicNavbar: true,
    // Enable Dom Cache so we can use all inline pages
    domCache: true
});

var Thank = Backbone.Model.extend({
   
 defaults: {
        name: 'name',
        about:'thanks',
        date: ''
        
    }
});



var ThankList = Backbone.Collection.extend({
    url: '#',
    model: Thank
});



var Thanks = new ThankList();

var ThankView = Backbone.View.extend({
  
  tagName: 'li',
  className: 'swipeout',

  
  events: {
        'click .thanks_delete_btn': 'delSelf'
    },


    template: _.template( $('#thanks_view').html() ),
 
   
    initialize: function() {
        this.listenTo(this.model, 'destroy', this.remove)
    },

  
 render: function() {
       var modelData = this.model.toJSON();
        this.$el.html( this.template(modelData) );
        return this;
    },

 
   delSelf: function() {
        this.model.destroy();
        save();
    }

});



var AppView = Backbone.View.extend({
  
  el: 'body',

   
 events: {
        'click #save_thanks_btn': 'addThanks'
    },


    initialize: function() {
        this.listenTo(Thanks, 'add', this.addRow);
    },

  
  addThanks: function() {
  	//myApp.alert("addThanks funciton calling...");
    var newThank = new Thank({
            name: $('#thanks_name_input').val(),
            about: $('#thanks_about_input').val(),
            id: new Date().getTime()
        });
    Thanks.add(newThank);
    var test=JSON.stringify(Thanks);
    console.log(test);
    },

 
   addRow: function(newThank) {
   	//myApp.alert("addRow function calling...");
    var view = new ThankView({ model: newThank });
        $('#thanks_ul').prepend( view.render().el );
        $('#thanks_about_input, #thanks_name_input').val('');
        save();
    }

});


$(function() {
    new AppView();
});

//myApp.alert("Welcome to Thanks Book ","Thanks Book");

Thanks.reset(JSON.parse(localStorage.getItem("Thanks")));
Thanks.each(function(thank) {
    var view = new ThankView({ model: thank });
    $('#thanks_ul').prepend( view.render().el );
            });



function save(){
	names=Thanks.pluck('name');
	namelist=normalize(names);
	rankPrepend();
var jsonObj=Thanks.toJSON();
  var code=JSON.stringify(jsonObj);
  localStorage.setItem("Thanks",code);
clickListner();
  }

var names=Thanks.pluck('name');
console.log(names);
var text="b";
var a = Thanks.where({name: text});
var autocompleteDropdownSimple = myApp.autocomplete({
    input: '#thanks_name_input',
    openIn: 'dropdown',
    source: function (autocomplete, query, render) {
        var results = [];
        if (query.length === 0) {
            render(results);
            return;
        }
        // Find matched items
        for (var i = 0; i < namelist.length; i++) {
            if (namelist[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(namelist[i]);
        }
        // Render items by passing array with result items
        render(results);
    }
});

/*
var fruits = ["a", "a", "b", "c","a", "a", "b", "c","a", "a", "b", "c","a", "a", "b", "c","a", "a", "b", "c","a", "a", "b", "c","a", "a", "b", "c","a", "a", "b", "c"];
var length=fruits.length;
for(var i=0; i<length; i++){
	var name= fruits[i];
	console.log("name is "+ name);
	if(name != undefined ){
	for(var j=i+1; j<fruits.length; j++){
		console.log("i is "+i+" j is "+j+ " and fruits.j is "+ fruits[j]);
		if(name === fruits[j]) {
			delete fruits[j]; 
			console.log(fruits[j]+" is removed");
		}
	}
	}
}

console.log(fruits);
var result=[];
for(var i=0; i<fruits.length; i++){
	if(fruits[i]!= undefined) result.push(fruits[i]);
}
console.log(result);


var arr1=["a","b","c"];
console.log("arr1 is "+arr1);
var arr2=arr1;
console.log("arr2 is "+arr2);
delete arr2[0];

console.log("arr1 is "+arr1);

console.log("arr2 is "+arr2);
*/
function normalize(fruits){
	var result=[];
	var length=fruits.length;
	for(var i=0; i<length; i++){
		var name= fruits[i];
		if(name != undefined ){
			for(var j=i+1; j<fruits.length; j++){
				if(name === fruits[j]) {
				delete fruits[j];
				}
			}
		}
	}
	for(var i=0; i<fruits.length; i++){
		if(fruits[i]!= undefined) result.push(fruits[i]);
	}
	return result;
}

var namelist=normalize(names);

$(document).ready(function(){
  $("span.thanks_name_display").click(function(){
    $('#thanks_personal_ul').empty();
   //myApp.alert("name clicked" +$(this).text());
   var text=$(this).text();
   var a = Thanks.where({name: text});
   	for(var i=0; i<a.length; i++){
    	var view = new ThankView({ model: a[i] });
    	$('#thanks_personal_ul').prepend( view.render().el );
    }
	});

  $("#friendListBtn").click(function(){ 
  	//myApp.alert("showing friend list");
  });
});


function rankPrepend(){
$("#thanks_rank_ul").empty();
for(var i=0; i<namelist.length; i++){
	var n=namelist[i];
	var names = Thanks.where({name: n});
	var rankHtml = Template7.templates.rankTemplate({
    name: n,
    count: names.length
});
$("#thanks_rank_ul").prepend(rankHtml);
}
}

rankPrepend();

function clickListner(){
 $("span.thanks_name_display").click(function(){
    $('#thanks_personal_ul').empty();
   //myApp.alert("name clicked" +$(this).text());
   var text=$(this).text();
   var a = Thanks.where({name: text});
   	for(var i=0; i<a.length; i++){
    	var view = new ThankView({ model: a[i] });
    	$('#thanks_personal_ul').prepend( view.render().el );
    }
	});
}

