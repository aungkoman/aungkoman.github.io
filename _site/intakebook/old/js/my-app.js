var intake_list;
var intake_configuration;
var courses;
$(document).ready(function(){
//var main_base ="https://teamcs.000webhostapp.com/";
var main_base ="http://localhost/";
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


/*
    setTimeout(function () {
    	myApp.alert("အပန္းမၾကီးဘူးဆိုရင္ ေအာက္က ေၾကာ္ညာေလးကို တစ္ခ်က္ေလာက္ ဖြင့္ၾကည့္ေပးပါခင္ဗ်","Please");
    }, 10000);
    */
function search(nameKey, myArray){
  console.log("search started");
    for (var i=0; i < myArray.length; i++) {
      //console.log("search "+i );
      //console.log(myArray[i].db_id + " and  search key "+nameKey);
        if (myArray[i].db_id == nameKey){
            return myArray[i];
        }
    }
    //return undefined;
}
//var resultObject = search("string 1", array);

// declare as global scope
show_detail = function(db_id){
  // find and return first found object from array
  // otherwise, return undefined
  /*
  var soldier = intake_list.find(obj => {
    return obj.db_id == db_id;
  });
  */
  var soldier = search(db_id, intake_list);

  if(soldier == undefined){
    myApp.alert("can't find ");
    return;
  }
  //myApp.alert("mc type "+soldier['mc_type']);
  //soldier.config = intake_configuration;
  //soldier.mc_type = soldier.config['mc_type']['db_id'][soldier.mc_type];
  //soldier['mc_type'] = intake_configuration['mc_type'][soldier['mc_type']];
  //myApp.alert("mc type "+soldier['mc_type']);
  // show modal with detail info
  myApp.modal({
    title:  '<div class="buttons-row">'+
              '<a href="#tab1" class="button active tab-link">Personal</a>'+
              '<a href="#tab2" class="button tab-link">Contact</a>'+
            '</div>',
    text: '<div class="tabs">'+
            '<div class="tab active" id="tab1">'+soldier['mc_type']+
            ' '+soldier['mc']+' '+soldier['rank']+
            '<br>'+soldier['name']+'<br> '+soldier['unit']+'</div>'+
            '<div class="tab" id="tab2">'+soldier['phone_no']+'</div>'+
          '</div>',
    buttons: [
      {
        text: 'Ok, got it',
        bold: true
      },
    ]
  });
}

// open loginScreen
myApp.loginScreen();
$("#register_div").hide();


$$("#my_course_a").click(function(){
  console.log("my_course_a is clicked");
  // load all course from server 

  myApp.showPreloader('Getting Course List...');
  var soldier_id = localStorage.getItem("user_db_id");
  var user_mc = localStorage.getItem("user_mc");
  var user_password = localStorage.getItem("user_password");

  var data = {"soldier_id":soldier_id};
  var user = {"mc":user_mc,"password":user_password};

  //alert(JSON.stringify(user));

  var post_data = {"ops_type":"select_course_for_user","data":data,"user":user};
  var data_str = JSON.stringify(post_data);
  var end_point = main_base+"intakebook_std/api/v1/course/index.php";
  webservice_request(end_point,data_str,"select_course");

}); // end for my_course_a click 


function course_name_list_a_listener(){
  $$(".course_name_list_a").click(function(){
    // get course id 
    var course_id = $(this).attr("data-courseId");
    console.log("course_id name list is clicked on "+course_id);

    /*
    var course = courses.find(obj => {
      return obj.db_id == course_id
    });
    */
    var course = search(course_id,courses);
    if(course == undefined){
      console.log("course does not found for course id "+course_id);
      return;
    }
    // we have to fill data in single_course page
    $("#single_course_data_div").empty();
    var html = ' '+course['name']+' အမွတ္စဥ္ ('+course['intake']+') <br>'+
              ' '+course['start_date']+' ရက္ေန႕မွ '+course['end_date']+' ရက္ေန႕ထိ <br> '+
            ' '+course['location']+' ';
    $("#single_course_data_div").append(html);
    $("#single_course_page_title").html(course['name'] + ' ' + course['intake']);

    // we have to query for name list associated with these couse with user data

    myApp.showPreloader('Getting Name List');

  var user_mc = localStorage.getItem("user_mc");
  var user_password = localStorage.getItem("user_password");
  var user = {"mc":user_mc,"password":user_password};
  var data = {"course_id":course_id};

    var post_data = {"ops_type":"select_course_record_for_course","data":data,"user":user};
  var data_str = JSON.stringify(post_data);
  var end_point = main_base+"intakebook_std/api/v1/course_record/index.php";
  // will return people list
  webservice_request(end_point,data_str,"select_course_record_for_course");

  }); 
} // end for course_name_list_a_listener

$("#course_list_org_select").change(function(){
  // will return array 
  //console.log("#course_list_org_select is changed to "+$(this).val()[0]);
  if( $("#course_list_org_select").val() == null ) {
    $("#course_list_selected_ul").html("no course is selected");
    return;
  }
  var selected_course = $("#course_list_org_select").val();
  // loop throug selected course 
  $("#course_list_selected_ul").empty();
  for(var i=0; i< selected_course.length; i++){
    // we have to find ourse data 
    var course_id = selected_course[i];
/*
    var course = courses.find(obj => {
      return obj.db_id == course_id
    });
*/
    var course = search(course_id,courses);

    if(course == undefined){
      console.log("course does not found for course id "+course_id);
      return;
    }

    var html = '<li>'+
                  '<a class="item-link list-button course_name_list_a" data-courseId="'+course_id+'" href="#single_course">'+course['name']+' '+course['intake']+'</a>'+
                '</li>';

    /*'<a href="#single_course">'+
                  '<li class="item-content">'+
                    '<div class="item-inner">'+
                      '<div class="item-title">'+selected_course[i]+'</div>'+
                    '</div>'+
                  '</li>'+
                '</a>'; */
    $("#course_list_selected_ul").append(html);
  }
  course_name_list_a_listener();
});


if(localStorage.getItem("current_status") == "login"){
  myApp.closeModal(".login-screen");
  $(".login-screen").hide();
  // loop through data
        intake_list = JSON.parse(localStorage.getItem("intake_list"));
        //localStorage.setItem("intake_list",JSON.stringify(intake_list));
        //alert(intake_list.length);
        // clear list 
        $("#intake_list").empty();
        // loop through this
        for(var i=0; i<intake_list.length; i++){
          // add list to main list 
          var soldier = intake_list[i];
          //alert("soldier "+JSON.stringify(soldier));
          var soldier_id = soldier['db_id'];
          var user_mc = localStorage.getItem("user_mc");
          if(user_mc == soldier['mc']) {
            localStorage.setItem("user_db_id",soldier_id);
            console.log("current user db id "+soldier_id);
          }
          //alert("soldier_id "+soldier_id);
          //console.log("soldier id is "+ soldier_id);
          var li_text = '<li class="item-content"  onclick="show_detail('+soldier_id+')">'+
            '<div class="item-inner">'+
              '<div class="item-title">'+soldier['name']+' </div>'+
            '</div>'+
          '</li>';
          $("#intake_list").append(li_text);
        }
        localStorage.setItem("current_status","login");
}

$$("#profile_a").click(function(){
  $("#profile_div").empty().html($("#register_div").html());
  $("#register_div").empty();

  // assign data to input 
  // get logged in user info
  var db_id = localStorage.getItem("user_db_id");
  /*
  var soldier = intake_list.fsi(obj => {
    return obj.db_id == db_id
  })
  */

    var soldier = search(db_id,intake_list);
  if(soldier == undefined){
    myApp.alert("can't find ");
    return;
  }

  //$("#register_mc_type_select").text(soldier['mc_type']);
  //$("#register_mc_type_select option:contains(soldier['mc_type'])").attr('selected', 'selected');
  $("#register_mc_input").val(soldier['mc']);
  //$("#register_rank_select").val(soldier['rank']);
  $("#register_name_input").val(soldier['name']);
  $("#register_unit_input").val(soldier['unit']);
  $("#register_phone_no_input").val(soldier['phone_no']);
  //$("#register_academy_select").val(soldier['academy']);
  $("#register_intake_input").val(soldier['intake']);
  //$("#register_password_input").val(soldier['password']);
  //$("#register_password_reenter_input").val(soldier['password']);

  update_profile_listner();
});

$$("#logout_a").click(function(){
  // open loginScreen
  //myApp.loginScreen();
  // clear all data
  localStorage.clear();
});


function update_profile_listner(){
$$("#register_button").click(function(){
  // validate all input
  var mc_type = $("#register_mc_type_select").val();
  var mc = $("#register_mc_input").val();
  var rank = $("#register_rank_select").val();
  var name = $("#register_name_input").val();
  var unit = $("#register_unit_input").val();
  var phone_no = $("#register_phone_no_input").val();
  var academy = $("#register_academy_select").val();
  var intake = $("#register_intake_input").val();
  var password = $("#register_password_input").val();
  var password_reenter = $("#register_password_reenter_input").val();


  if(mc == null || mc == "" || name == null || name == "" || unit == null || unit == "" || phone_no == null || phone_no == "" || intake == null || intake == "" || password == null || password == "" || password_reenter == null || password_reenter == ""){
    myApp.alert("အခ်က္အလက္အားလံုး ျပည့္စံုေအာင္ ျဖည့္သြင္းေပးပါ ","သတိေပးခ်က္");
    return;
  }
  if(password != password_reenter){
    myApp.alert("စကားဝွက္ ႏွစ္ခုကို တူညီေအာင္ ရို္က္ထည့္ေပးပါ","သတိေပးခ်က္");
    return;
  }

  var db_id = localStorage.getItem("user_db_id");
  var user = { "db_id":db_id,
    "mc_type":mc_type,
    "mc":mc,
    "rank":rank,
    "name":name,
    "unit":unit,
    "phone_no":phone_no,
    "academy":academy,
    "intake":intake,
    "password":password
  };
  myApp.showPreloader('ဆာဗာသို႕ အခ်က္အလက္မ်ား ေပးပို႕ေနပါသည္...');
  var post_data = {"ops_type":"update_soldier","data":user,"user":user};
  var data_str = JSON.stringify(post_data);
  var end_point = main_base+"intakebook_std/api/v1/soldier/index.php";
  webservice_request(end_point,data_str,"update");
});

} // update profile button listner function END

$$("#register_button").click(function(){
  // validate all input
  var mc_type = $("#register_mc_type_select").val();
  var mc = $("#register_mc_input").val();
  var rank = $("#register_rank_select").val();
  var name = $("#register_name_input").val();
  var unit = $("#register_unit_input").val();
  var phone_no = $("#register_phone_no_input").val();
  var academy = $("#register_academy_select").val();
  var intake = $("#register_intake_input").val();
  var password = $("#register_password_input").val();
  var password_reenter = $("#register_password_reenter_input").val();


  if(mc == null || mc == "" || name == null || name == "" || unit == null || unit == "" || phone_no == null || phone_no == "" || intake == null || intake == "" || password == null || password == "" || password_reenter == null || password_reenter == ""){
    myApp.alert("အခ်က္အလက္အားလံုး ျပည့္စံုေအာင္ ျဖည့္သြင္းေပးပါ! ","သတိေပးခ်က္");
    return;
  }

/*
  if( mc == null || mc == "" || password == null || password == ""){
    myApp.alert("fill mc and password ","Attention");
    return;
  }
  */
  if(password != password_reenter){
    myApp.alert("စကားဝွက္ ႏွစ္ခု တူညီေအာင္ ရို္က္ထည့္ပါ","သတိေပးခ်က္");
    return;
  }

  var user = {"mc_type":mc_type,
    "mc":mc,
    "rank":rank,
    "name":name,
    "unit":unit,
    "phone_no":phone_no,
    "academy":academy,
    "intake":intake,
    "password":password
  };

  myApp.showPreloader('Data uploading...');

  var post_data = {"ops_type":"register_soldier","data":user,"user":user};
  var data_str = JSON.stringify(post_data);
  var end_point = main_base+"intakebook_std/api/v1/soldier/index.php";
  webservice_request(end_point,data_str,"register");
});

$$("#register_div_show_button").click(function(){
  $("#register_div").show().prev().hide();
  // we have to build register form by requesting configuration data
  // configuration request 
  /*
  var post_data = {"ops_type":"config"};
  var data_str = JSON.stringify(post_data);
  var end_point = main_base+"intakebook_std/api/v1/config/index.php";
  webservice_request(end_point,data_str,"config");
  */
});

$$("#sign_in_button").click(function(){
  // get user mc and password
  // send request
  var mc = $$("#login_mc_input").val();
  var password = $$("#login_password_input").val();
  // validation
  if( mc == null || mc == "" || password == null || password == ""){
    myApp.alert("ျပန္တမ္းဝင္အမွတ္ ႏွင့္ စကားဝွက္ ရိုက္ထည့္ေပးပါ","သတိေပးခ်က္");
    return;
  }
  myApp.showPreloader('စနစ္အတြင္းသို႕ ဝင္ေရာက္ေနပါျပီ...');
  // login request
  // prepare data
  localStorage.setItem("user_mc",mc);
  localStorage.setItem("user_password",password);
  var post_data = {"ops_type":"login","data":{"mc":mc,"password":password},"user":{"mc":mc,"password":password}};
  var data_str = JSON.stringify(post_data);
  var end_point = main_base+"intakebook_std/api/v1/soldier/index.php";
  webservice_request(end_point,data_str,"login");
});


// just for data transfering 
function webservice_request(end_point,data_str,type){
  $.ajax({
    url: end_point,
    type: 'post',
    data: {"web_client": data_str},
    success: function(response){
        //do whatever.
        //console.log("ajax success for "+type);
        //console.log(response);
        handle_webservice_success(response,type);
    },
    error: function(response){
        //do whatever.
        //console.log("ajax error  "+type);
        //console.log(response.responseText);
        handle_webservice_error(response,type);
    }
  });
}

function handle_webservice_error(response,type){

  if(type == "login"){
    setTimeout(function () {
      myApp.hidePreloader();
      //myApp.alert(response.responseText,"Login Fail");
      myApp.alert("စကားဝွက္မွားယြင္းေနပါသည္<br>(server)","Login Fail");
    }, 2000);
    console.log("handle_webservice_error for login");
    console.log(response.responseText);
  } // end for login 

  if(type == "config"){
    setTimeout(function () {
      myApp.hidePreloader();
      myApp.alert("Configuration data not available","သတိေပးခ်က္");
    }, 2000);
    //console.log("handle_webservice_error for config");
    //console.log(response.responseText);
  }

  if(type == "register"){
    setTimeout(function () {
      myApp.hidePreloader();
      myApp.alert("register data error","သတိေပးခ်က္");
    }, 2000);
    console.log("handle_webservice_error for register");
    console.log(response.responseText);
  }

  if(type == "update"){
    setTimeout(function () {
      myApp.hidePreloader();
      //myApp.alert(response.responseText,"Attention");
      myApp.alert("your data is already inserted <br> (server)","Update Fail");
    }, 2000);
    console.log("handle_webservice_error for update");
    console.log(response.responseText);
  }

  if(type == "select_course"){
    setTimeout(function () {
      myApp.hidePreloader();
      //myApp.alert("error in server <br>"+response.responseText,"Select Course Fail");
      myApp.alert("you does not have permission <br> (server)","Select Fail");
    }, 2000);
    console.log("handle_webservice_error for select_course");
    console.log(response.responseText);
  }

  if(type == "select_course_record_for_course"){
    setTimeout(function () {
      myApp.hidePreloader();
      myApp.alert("you does not have permission <br> (server)","Select Fail");
      //myApp.alert("error in server <br>"+response.responseText," select_course_record_for_course Fail");
    }, 2000);
    console.log("handle_webservice_error for select_course_record_for_course");
    console.log(response.responseText);
    $("#single_course_name_list_ul").html("You have not permission to view namelist");
  }
}
function handle_webservice_success(response,type){
  //console.log("handle_webservice_success  "+type);
  //console.log(response);
  if(type == "register"){
    var status = response.status;
    if(status == "success"){
      setTimeout(function () {
        myApp.hidePreloader();
        myApp.alert("Admin ထံမွ အတည္ျပဳခ်က္ ရယူပါ.","ေအာင္ျမင္ပါသည္");
        localStorage.setItem("current_status","pending");
        //myApp.closeModal(".login-screen");
        $("#register_div").hide().prev().show();
      }, 1000);

    }
    else{
      setTimeout(function () {
        myApp.hidePreloader();
        //myApp.alert(response.msg,"Error");
        myApp.alert("အခ်က္အလက္မ်ား မွားယြင္းေနပါသည္။ ျပန္လည္ စစ္ေဆးေပးပါ။ <br>server","Error");
        //myApp.closeModal(".login-screen");

        $("#register_div").hide().prev().show();
      }, 1000);
    }
  }
  if(type == "login"){
    var status = response.status;
    if(status == "success"){
      setTimeout(function () {
        myApp.hidePreloader();
        //myApp.alert("Welcome to Intake Book","Success");
        myApp.closeModal(".login-screen");

        intake_list = response.data;

        localStorage.setItem("intake_list",JSON.stringify(intake_list));
        //alert(intake_list.length);
        // clear list 
        $("#intake_list").empty();
        // loop through this
        for(var i=0; i<intake_list.length; i++){
          // add list to main list 
          var soldier = intake_list[i];
          //alert("soldier "+JSON.stringify(soldier));
          var soldier_id = soldier['db_id'];
          var user_mc = localStorage.getItem("user_mc");
          if(user_mc == soldier['mc']) {
            localStorage.setItem("user_db_id",soldier_id);
            console.log("current user db id "+soldier_id);
          }
          //alert("soldier_id "+soldier_id);
          //console.log("soldier id is "+ soldier_id);
          var li_text = '<li class="item-content"  onclick="show_detail('+soldier_id+')">'+
            '<div class="item-inner">'+
              '<div class="item-title">'+soldier['name']+' </div>'+
            '</div>'+
          '</li>';
          $("#intake_list").append(li_text);
        }
        localStorage.setItem("current_status","login");
      }, 1000);
    }
    else {
      setTimeout(function () {
        myApp.hidePreloader();
        myApp.alert("MC and password does not match","Login Fail!");
      }, 1000);
    }
  } // end for login section 

  if(type == "config"){
    setTimeout(function () {
      myApp.hidePreloader();
      //myApp.alert("Configuration data not available","Attention");
    }, 2000);
    console.log("handle_webservice_success for config");
    console.log(response);
    var res_data = response.data;
    for(config in res_data){
      console.log(" res data config "+config + " : "+res_data[config].length);
      var config_array = res_data[config];
      for(var i=0; i<config_array.length; i++){
        console.log(config_array[i]['name']);
      }
    }
  } // end for config section


  if(type == "update"){
    setTimeout(function () {
      myApp.hidePreloader();
      console.log("handle_webservice_success for update");
      console.log(response);
      if(response.status == "success"){
        myApp.alert("Updated Success","Finish");
        localStorage.clear();
        document.location.reload();
      }
      else{
        myApp.alert(response.msg,"Fail");
      }
    }, 2000);
  } // end for config section


  if(type == "select_course"){
    setTimeout(function () {
      myApp.hidePreloader();
      console.log("handle_webservice_success for select_course");
      console.log(response);
      if(response.status == "success"){
        //myApp.alert("select course  Success","Finish");
        console.log("response : "+response);
        courses = response.data;
        console.log("courses => ");
        console.log(courses);
        /*
        // loop through courses
        $("#course_list_org_select").empty();
        for(var i = 0 ; i < courses.length; i++ ){
          console.log(" course name "+courses[i]['name']);
          var html = '<option value="'+courses[i]['db_id']+'">'+courses[i]['name']+' '+courses[i]['intake']+'</option>';
          $("#course_list_org_select").append(html);
        }
        */

        /*---------- direct add ------- */

        $("#course_list_selected_ul").empty();
        for(var i=0; i< courses.length; i++){
          console.log(" course name "+courses[i]['name']);
          var html = '<li>'+
                  '<a class="item-link list-button course_name_list_a" data-courseId="'+courses[i]['db_id']+'" href="#single_course">'+courses[i]['name']+' '+courses[i]['intake']+'</a>'+
                '</li>';
    $("#course_list_selected_ul").append(html);
  }
  course_name_list_a_listener();


        
      }
      else{
        myApp.alert(response.msg,"Select Course Fail");
      }
    }, 1000);
  } // end for config section

  if(type == "select_course_record_for_course"){
    setTimeout(function () {
      myApp.hidePreloader();
      console.log("handle_webservice_success for select_course_record_for_course");
      console.log(response);
      if(response.status == "success"){
        //myApp.alert("select course  Success","Finish");
        console.log("response : "+response);
        var single_course_name_list = response.data;
        // loop through 
        $("#single_course_name_list_ul").empty();
        for(var i = 0; i< single_course_name_list.length; i++){
          var soldier = single_course_name_list[i];
          var html = '<li class="item-content">'+
          '<div class="item-inner">'+
            '<div class="item-title">'+soldier['mc_type']+' '+soldier['mc']+' '+soldier['rank']+' <br>'+
            soldier['name']+'<br>'+
            soldier['academy']+' '+soldier['intake']+'<br>'+
            soldier['unit']+'<br>'+
            soldier['phone_no']+'</div>'+
          '</div>'+
        '</li>';
          $("#single_course_name_list_ul").append(html);
        }
      }
      else{

        $("#single_course_name_list_ul").empty();
        $("#single_course_name_list_ul").html("You have not permission to view namelist");
        myApp.alert(response.msg,"Select select_course_record_for_course Fail");
      }
    }, 1000);
  } // end for select_course_record_for_course success
} // end for webservice success function


// test code
/*
 myApp.showIndicator("Hello");
            setTimeout(function () {
               myApp.hideIndicator();
            }, 10000);
*/
//myApp.showPreloader('Custom Title')
//setTimeout(function () {myApp.hidePreloader();}, 2000);

}); // document ready closed bracket