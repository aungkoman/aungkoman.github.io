$(document).ready(function(){
	//var main_base ="http://localhost/";
	var main_base ="https://teamcs.000webhostapp.com/";
	console.log("welcome to admin \n document is ready");

  var soldier_config = {
    role:['--Role--','Admin','User','Pending'],
    logged_user_role:0
  };
/*--------------------------- Backbone Model ----------------*/

var Soldier = Backbone.Model.extend({
 defaults: {
        db_id: null,
        mc_type: null,
        mc: null,
        rank: null,
        name: null,
        unit: null,
        academy: null,
        intake: null,
        phone_no: null,
        role:null,
        password: null
    },
    update_mc_type: function(value){
        console.log("update_mc_type "+value);
        this.set({mc_type:value});
    },
    update_mc: function(value){
        console.log("update_mc "+value);
        this.set({mc:value});
    },
    update_rank: function(value){
        console.log("update_rank "+value);
        this.set({rank:value});
    },
    update_name: function(value){
        console.log("update_name "+value);
        this.set({name:value});
    },
    update_unit: function(value){
        console.log("update_unit "+value);
        this.set({unit:value});
    },
    update_academy: function(value){
        console.log("update_academy "+value);
        this.set({academy:value});
    },
    update_intake: function(value){
        console.log("update_intake "+value);
        this.set({intake:value});
    },
    update_phone_no: function(value){
        console.log("update_phone_no "+value);
        this.set({phone_no:value});
    },
    update_role: function(value){
        console.log("update_role "+value);
        this.set({role:value});
    },
    update_password: function(value){
        console.log("update_password "+value);
        this.set({password:value});
    }
});

var Course = Backbone.Model.extend({
 defaults: {
        db_id: null,
        name: null,
        intake: null,
        start_date: null,
        end_date: null,
        location: null
    },
    update_name: function(value){
        console.log("update_name "+value);
        this.set({name:value});
    },
    update_intake: function(value){
        console.log("update_intake "+value);
        this.set({intake:value});
    },
    update_start_date: function(value){
        console.log("update_start_date "+value);
        this.set({start_date:value});
    },
    update_end_date: function(value){
        console.log("update_end_date "+value);
        this.set({end_date:value});
    },
    update_location: function(value){
        console.log("update_location "+value);
        this.set({location:value});
    }
});

var SoldierList = Backbone.Collection.extend({
    url: '#',
    model: Soldier
});
var CourseList = Backbone.Collection.extend({
    url: '#',
    model: Course
});

var Soldiers = new SoldierList();
var Soldiers_for_course = new SoldierList();
var Courses = new CourseList();

var current_selected_course_name = "";
var SoldierView = Backbone.View.extend({
  events: {
        'click .thanks_delete_btn': 'delSelf',
        'dblclick .name_list_card':'name_list_card',
        'click .admin_link':'admin_link'
    },
  template: _.template( $('#soldier_card_view').html() ),
  initialize: function() {
    this.listenTo(this.model, 'destroy', this.remove),
    this.listenTo(this.model, 'change', this.render)
  },
  render: function() {
    var modelData = this.model.toJSON();
    //alert("soldeir config is "+JSON.stringify(soldier_config));
    modelData.soldier_config = soldier_config;

    this.$el.html( this.template(modelData) );
    return this;
  },
  delSelf: function() {
    this.model.destroy();
    save();
  },
  name_list_card: function() {
    console.log("name_list_card is double clicked");
    // check user role
    var role = localStorage.getItem("user_role");
    console.log("role is "+role);
    if(role == 1 || role == 2){
      // it's system admin or one of course admin
      console.log("here is edit modal");
      $("#sign_up_soldier_modal_label").text(this.model.get("name"));
      var view = new SoldierEditAdminView({ model: this.model });
      $('#sign_up_template_host').empty().append( view.render().el );
      $("#sign_up_soldier_modal").modal('show');
    }
    else{
      console.log("nothing corcern with you.")
    }
  },
  admin_link: function() {
    console.log("admin_link is  clicked");
    // check user role
    var role = soldier_config.logged_user_role;
    console.log("logged_user_role role is "+role);
    if(role == 1 || role == 2){
      // it's system admin or one of course admin
      console.log("here is edit modal");
      $("#sign_up_soldier_modal_label").text(this.model.get("name"));
      var view = new SoldierEditAdminView({ model: this.model });
      $('#sign_up_template_host').empty().append( view.render().el );
      $("#sign_up_soldier_modal").modal('show');
    }
    else{
      console.log("nothing corcern with you.")
    }
  }
});
var SoldierCourseRoleEditView = Backbone.View.extend({
  events: {
    'click .update_course_role_btn':'update_course_role_btn',
    'change .user_course_role_select':'user_course_role_select'
    },
  template: _.template( $('#soldier_card_for_course_admin_edit').html() ),
  initialize: function() {
    this.listenTo(this.model, 'destroy', this.remove),
    this.listenTo(this.model, 'change', this.render)
  },
  render: function() {
    var modelData = this.model.toJSON();
    //alert("soldeir config is "+JSON.stringify(soldier_config));
    modelData.soldier_config = soldier_config;
    this.$el.html( this.template(modelData) );
    return this;
  },
  delSelf: function() {
    this.model.destroy();
    save();
  },
  user_course_role_select: function() {
    var newCourseRole = this.$('.user_course_role_select').val();
    console.log("user_course_role_select is changed to "+newCourseRole);
    // call ajax to update this course 
    //alert("take a break, man");
    
    var mc = localStorage.getItem("user_mc");
    var password = localStorage.getItem("user_password");
    var user_db_id = localStorage.getItem("user_db_id");
    var user = {db_id:user_db_id,mc : mc, password : password};

    var course_id = this.model.get('course_id');
    var soldier_id = this.model.get('db_id');
    var role = newCourseRole;
    var course_record_db_id = this.model.get('course_record_db_id');
    var data = {"db_id":course_record_db_id,"soldier_id":soldier_id,"course_id":course_id,"role":role};
    var post_data = {"ops_type":"update_course_record","data":data,"user":user};
    var data_str = JSON.stringify(post_data);
    var end_point = main_base+"intakebook_std/api/v1/course_record/index.php";
    show_loading_modal();
    webservice_request(end_point,data_str,"user_course_role_select");
    
  }
});
var SoldierEditView = Backbone.View.extend({
  events: {
        'click .thanks_delete_btn': 'delSelf',
        'change .register_mc_type_select': 'register_mc_type_select',
        'change .register_mc_input':'register_mc_input',
        'change .register_rank_select':'register_rank_select',
        'change .register_name_input':'register_name_input',
        'change .register_unit_input':'register_unit_input',
        'change .register_academy_select':'register_academy_select',
        'change .register_intake_input':'register_intake_input',
        'change .register_phone_no_input':'register_phone_no_input',
        'change .register_password_input':'register_password_input',
        'click .soldier_update_button':'soldier_register_button',
        'click .soldier_register_button':'soldier_register_button',
        'keyup .register_re_type_password_input':'register_re_type_password_input',
    },
  template: _.template( $('#soldier_edit_template_view').html() ),
  initialize: function() {
    this.listenTo(this.model, 'destroy', this.remove)
  },
  render: function() {
    var modelData = this.model.toJSON();
    //alert("soldeir config is "+JSON.stringify(soldier_config));
    modelData.soldier_config = soldier_config;
    this.$el.html( this.template(modelData) );
    return this;
  },
  delSelf: function() {
    this.model.destroy();
    save();
  },
  register_mc_type_select: function(){
    var newMcType = this.$('.register_mc_type_select').val();
    console.log("register_mc_type_select is changed to "+newMcType);
    this.model.update_mc_type(newMcType);
  },
  register_mc_input: function(){
    var newMC = this.$('.register_mc_input').val();
    console.log("register_mc_input is changed to "+newMC);
    this.model.update_mc(newMC);
  },
  register_rank_select: function(){
    var newRank = this.$('.register_rank_select').val();
    console.log("register_rank_select is changed to "+newRank);
    this.model.update_rank(newRank);
  },
  register_name_input: function(){
    var newName = this.$('.register_name_input').val();
    console.log("register_name_input is changed to "+newName);
    this.model.update_name(newName);
  },
  register_unit_input: function(){
    var newUnit = this.$('.register_unit_input').val();
    console.log("register_unit_input is changed to "+newUnit);
    this.model.update_unit(newUnit);
  },
  register_academy_select: function(){
    var newAcademy = this.$('.register_academy_select').val();
    console.log("register_academy_select is changed to "+newAcademy);
    this.model.update_academy(newAcademy);
  },
  register_intake_input: function(){
    var newIntake = this.$('.register_intake_input').val();
    console.log("register_intake_input is changed to "+newIntake);
    this.model.update_intake(newIntake);
  },
  register_phone_no_input: function(){
    var newPhoneNo= this.$('.register_phone_no_input').val();
    console.log("register_phone_no_input is changed to "+newPhoneNo);
    this.model.update_phone_no(newPhoneNo);
  },
  register_re_type_password_input: function(){
    var newReTypePassword = this.$('.register_re_type_password_input').val();
    var newPassword = this.$('.register_password_input').val();
    console.log("register_re_type_password_input is changed to "+newReTypePassword);
    console.log("newPassword is "+newPassword);
    if(newReTypePassword == newPassword){
      console.log("pw Match");
    }
    else{
      console.log("pw does not match");
      // we have to change css
    }
  },
  //this.model.update_intake(newIntake);
  validate_form:function(){
      // we have to validate the model json
      // remove null field
      // match password fileds if user edit that.
      // call to webservice to update or insert new soldier data
      console.log("validation..");
  },
  soldier_update_button:function(){
    console.log("soldier_update_button is clicked");
  },
  soldier_register_button:function(){
    console.log("soldier_register_button is clicked");
    // if we do not validate
    // we just need to send json to webservice
    var user = this.model.toJSON();

    //alert("hello "+JSON.stringify(user));
    
    //alert("hello "+JSON.stringify(user));

    // check each field with null value
    if(user.mc_type == null ) {
      //alert("select mc type");
      this.$('.register_mc_type_select').focus().tooltip({'title':'select mc type'});
      //this.$('.register_mc_type_select').tooltip({'title':'select mc type'});
      return;
    }
    if(user.mc == null ) {
      //alert("Type MC");
      this.$('.register_mc_input').focus().tooltip({'title':'type mc'});
      return;
    }
    if(user.rank == null ) {
      //alert("Select Rank");
      this.$('.register_rank_select').focus().tooltip({'title':'select rank'});
      return;
    }
    if(user.name == null ) {
      //alert("Enter Name");
      this.$('.register_name_input').focus().tooltip({'title':'Enter name'});
      return;
    }
    if(user.unit == null ) {
      //alert("Enter Unit");
      this.$('.register_unit_input').focus().tooltip({'title':'enter unit'});
      return;
    }
    if(user.academy == null ) {
      //alert("Select Academy");
      this.$('.register_academy_select').focus().tooltip({'title':'select academy'});
      return;
    }
    if(user.intake == null ) {
      //alert("Enter Intake");
      this.$('.register_intake_input').focus().tooltip({'title':'enter intake'});
      return;
    }
    if(user.role == null){
      delete user.role;
    }
    if(user.password == null ) {
      var newReTypePassword = this.$('.register_re_type_password_input').val();
      var newPassword = this.$('.register_password_input').val();
      if(newReTypePassword == null || newReTypePassword == "" || newPassword == null || newPassword == ""){
        this.$('.register_password_input').focus().tooltip({'title':'enter password'});
        return;
      }
      if(newReTypePassword != newPassword){
        this.$('.register_password_input').focus().tooltip({'title':'enter same password'});
        return;
      }
      user.password = newPassword;
    }
    $("#sign_up_soldier_modal").modal('hide');
    show_loading_modal();

    if(user.db_id == null){
      delete user.db_id;
      var post_data = {"ops_type":"register_soldier","data":user,"user":user};
      var data_str = JSON.stringify(post_data);
      var end_point = main_base+"intakebook_std/api/v1/soldier/index.php";
      webservice_request(end_point,data_str,"register");
    }
    else{
      var user_db_id = localStorage.getItem("user_db_id");
      var user_role = localStorage.getItem("user_role");
      var user_mc = localStorage.getItem("user_mc");
      var user_password = localStorage.getItem("user_password");

      var user_obj = {db_id:user_db_id, mc:user_mc,  password:user_password};
      var post_data = {"ops_type":"update_soldier","data":user,"user":user_obj};
      var data_str = JSON.stringify(post_data);
      var end_point = main_base+"intakebook_std/api/v1/soldier/index.php";
      webservice_request(end_point,data_str,"update");
    }
  }
});

var SoldierEditAdminView = Backbone.View.extend({
  events: {
        'click .thanks_delete_btn': 'delSelf',
        'change .register_mc_type_select': 'register_mc_type_select',
        'change .register_mc_input':'register_mc_input',
        'change .register_rank_select':'register_rank_select',
        'change .register_name_input':'register_name_input',
        'change .register_unit_input':'register_unit_input',
        'change .register_academy_select':'register_academy_select',
        'change .register_intake_input':'register_intake_input',
        'change .register_role_select':'register_role_select',
        'change .register_phone_no_input':'register_phone_no_input',
        'click .soldier_update_button':'soldier_register_button',
        'click .soldier_register_button':'soldier_register_button',
    },
  template: _.template( $('#soldier_edit_template_view_for_admin').html() ),
  initialize: function() {
    this.listenTo(this.model, 'destroy', this.remove)
  },
  render: function() {
    var modelData = this.model.toJSON();
    //alert("soldeir config is "+JSON.stringify(soldier_config));
    modelData.soldier_config = soldier_config;
    this.$el.html( this.template(modelData) );
    return this;
  },
  delSelf: function() {
    this.model.destroy();
    save();
  },
  register_mc_type_select: function(){
    var newMcType = this.$('.register_mc_type_select').val();
    console.log("register_mc_type_select is changed to "+newMcType);
    this.model.update_mc_type(newMcType);
  },
  register_mc_input: function(){
    var newMC = this.$('.register_mc_input').val();
    console.log("register_mc_input is changed to "+newMC);
    this.model.update_mc(newMC);
  },
  register_rank_select: function(){
    var newRank = this.$('.register_rank_select').val();
    console.log("register_rank_select is changed to "+newRank);
    this.model.update_rank(newRank);
  },
  register_name_input: function(){
    var newName = this.$('.register_name_input').val();
    console.log("register_name_input is changed to "+newName);
    this.model.update_name(newName);
  },
  register_unit_input: function(){
    var newUnit = this.$('.register_unit_input').val();
    console.log("register_unit_input is changed to "+newUnit);
    this.model.update_unit(newUnit);
  },
  register_academy_select: function(){
    var newAcademy = this.$('.register_academy_select').val();
    console.log("register_academy_select is changed to "+newAcademy);
    this.model.update_academy(newAcademy);
  },
  register_intake_input: function(){
    var newIntake = this.$('.register_intake_input').val();
    console.log("register_intake_input is changed to "+newIntake);
    this.model.update_intake(newIntake);
  },
  register_role_select: function(){
    var newRole = this.$('.register_role_select').val();
    console.log("register_role_select is changed to "+newRole);
    this.model.update_role(newRole);
  },
  register_phone_no_input: function(){
    var newPhoneNo = this.$('.register_phone_no_input').val();
    console.log("register_phone_no_input is changed to "+newPhoneNo);
    this.model.update_phone_no(newPhoneNo);
  },
  soldier_update_button:function(){
    console.log("soldier_update_button is clicked");
  },
  soldier_register_button:function(){
    console.log("soldier_register_button is clicked");
    // if we do not validate
    // we just need to send json to webservice
    var user = this.model.toJSON();

    //alert("hello "+JSON.stringify(user));
    
    //alert("hello "+JSON.stringify(user));

    // check each field with null value
    if(user.mc_type == null ) {
      //alert("select mc type");
      this.$('.register_mc_type_select').focus().tooltip({'title':'select mc type'});
      //this.$('.register_mc_type_select').tooltip({'title':'select mc type'});
      return;
    }
    if(user.mc == null ) {
      //alert("Type MC");
      this.$('.register_mc_input').focus().tooltip({'title':'type mc'});
      return;
    }
    if(user.rank == null ) {
      //alert("Select Rank");
      this.$('.register_rank_select').focus().tooltip({'title':'select rank'});
      return;
    }
    if(user.name == null ) {
      //alert("Enter Name");
      this.$('.register_name_input').focus().tooltip({'title':'Enter name'});
      return;
    }
    if(user.unit == null ) {
      //alert("Enter Unit");
      this.$('.register_unit_input').focus().tooltip({'title':'enter unit'});
      return;
    }
    if(user.academy == null ) {
      //alert("Select Academy");
      this.$('.register_academy_select').focus().tooltip({'title':'select academy'});
      return;
    }
    if(user.intake == null ) {
      //alert("Enter Intake");
      this.$('.register_intake_input').focus().tooltip({'title':'enter intake'});
      return;
    }
    $("#sign_up_soldier_modal").modal('hide');
    show_loading_modal();

    if(user.db_id == null){
      delete user.db_id;
      var post_data = {"ops_type":"register_soldier","data":user,"user":user};
      var data_str = JSON.stringify(post_data);
      var end_point = main_base+"intakebook_std/api/v1/soldier/index.php";
      webservice_request(end_point,data_str,"register");
    }
    else{
      // we have to find real user 
      if(user.password == null ) {
        console.log("delete password");
        delete user.password;
      }
      var mc = localStorage.getItem("user_mc");
      var password = localStorage.getItem("user_password");
      var real_user = {mc : mc, password : password};
      var post_data = {"ops_type":"update_soldier","data":user,"user":real_user};
      var data_str = JSON.stringify(post_data);
      var end_point = main_base+"intakebook_std/api/v1/soldier/index.php";
      webservice_request(end_point,data_str,"update");
    }
  }
});

var CourseView = Backbone.View.extend({
  events: {
        'click li': 'li_clicked'
    },
  template: _.template( $('#course_card_view').html() ),
  initialize: function() {
    this.listenTo(this.model, 'destroy', this.remove),
    this.listenTo(this.model, 'change', this.render)
  },
  render: function() {
    var modelData = this.model.toJSON();
    this.$el.html( this.template(modelData) );
    return this;
  },
  delSelf: function() {
    this.model.destroy();
    save();
  },
  li_clicked: function() {
    //this.model.destroy();
    //save();
    //alert("li is clicked on "+this.model.get("name"));
    // we have to request to server
    // user list for course 
      show_loading_modal();
      console.log("webservice_request for user list (for course) is started");
      var mc = localStorage.getItem("user_mc");
      var password = localStorage.getItem("user_password");
      var course_db_id = this.model.get('db_id');
      // store in global variable 
      current_selected_course_name = this.model.get("name") + "အမွတ္စဥ္ ("+this.model.get("intake")+")";

      var data = {course_id : course_db_id};
      var user = {mc : mc, password : password};
      var post_data = {"ops_type":"select_course_for_course","data":data,"user":user};
      var data_str = JSON.stringify(post_data);
      var end_point = main_base+"intakebook_std/api/v1/course/index.php";
      webservice_request(end_point,data_str,"select_course_for_course");

  }

});

var CourseAdminView = Backbone.View.extend({
  events: {
    'click .course_edit': 'course_edit',
    'click .course_name_list': 'course_name_list',
    'click .course_join': 'course_join'
    },
  template: _.template( $('#course_card_admin_view').html() ),
  initialize: function() {
    this.listenTo(this.model, 'destroy', this.remove),
    this.listenTo(this.model, 'change', this.render)
  },
  render: function() {
    var modelData = this.model.toJSON();
    this.$el.html( this.template(modelData) );
    return this;
  },
  delSelf: function() {
    this.model.destroy();
    save();
  },
  course_edit: function(){
    console.log("course_edit is clicked");
    // show in edit modal using this model
    // new view with exiting data , OK?
    var course_edit_view = new CourseEditAdminView({model:this.model});
    $('#new_course_template_host').empty().append( course_edit_view.render().el );
    $("#course_modal_label").html(this.model.get('name'));
    $("#course_modal").modal('show');
  },
  course_name_list: function(){
    console.log("course_name_list is clicked");
    // request name list for this course // server will return if you have right access
    // if not, return msg "you are not admin for this course "
    // the user want to know which course that they are admin
    // so many confuse , wait
    // just make request and wait for response
    
    show_loading_modal();
    console.log("webservice_request for user list (for course) is started");
    var mc = localStorage.getItem("user_mc");
    var password = localStorage.getItem("user_password");
    var course_db_id = this.model.get('db_id');
    // store in global variable 
    current_selected_course_name = this.model.get("name") + "အမွတ္စဥ္ ("+this.model.get("intake")+")";

    var data = {course_id : course_db_id};
    var user = {mc : mc, password : password};
    var post_data = {"ops_type":"select_course_for_course","data":data,"user":user};
    var data_str = JSON.stringify(post_data);
    var end_point = main_base+"intakebook_std/api/v1/course/index.php";
    webservice_request(end_point,data_str,"select_course_for_course_admin_namelist");


  },
  course_join: function(){
    console.log("course_join is clicked");
    show_loading_modal();
    console.log("webservice_request for course_join is started");
    var mc = localStorage.getItem("user_mc");
    var password = localStorage.getItem("user_password");
    var user_db_id = localStorage.getItem("user_db_id");
    var course_db_id = this.model.get('db_id');

    var data = {course_id : course_db_id,soldier_id:user_db_id,role:6};
    var user = {mc : mc, password : password};
    var post_data = {"ops_type":"register_course_record","data":data,"user":user};
    var data_str = JSON.stringify(post_data);
    var end_point = main_base+"intakebook_std/api/v1/course_record/index.php";
    webservice_request(end_point,data_str,"register_course_record");


  },
  li_clicked: function() {
    console.log("li_clicked");
    //this.model.destroy();
    //save();
    //alert("li is clicked on "+this.model.get("name"));
    // we have to request to server
    // user list for course 
    /*
      show_loading_modal();
      console.log("webservice_request for user list (for course) is started");
      var mc = localStorage.getItem("user_mc");
      var password = localStorage.getItem("user_password");
      var course_db_id = this.model.get('db_id');
      // store in global variable 
      current_selected_course_name = this.model.get("name") + "အမွတ္စဥ္ ("+this.model.get("intake")+")";

      var data = {course_id : course_db_id};
      var user = {mc : mc, password : password};
      var post_data = {"ops_type":"select_course_for_course","data":data,"user":user};
      var data_str = JSON.stringify(post_data);
      var end_point = main_base+"intakebook_std/api/v1/course/index.php";
      webservice_request(end_point,data_str,"select_course_for_course");
    */
  }

});

var CourseEditAdminView = Backbone.View.extend({
  events: {
        'click .thanks_delete_btn': 'delSelf',
        'change .register_course_name_input': 'register_course_name_input',
        'change .register_course_intake_input': 'register_course_intake_input',
        'change .register_course_start_date_input': 'register_course_start_date_input',
        'change .register_course_end_date_input': 'register_course_end_date_input',
        'change .register_course_localtion_input': 'register_course_localtion_input',
        'click .course_update_button': 'course_update_button',
        'click .course_register_button': 'course_update_button'
    },
  template: _.template( $('#course_edit_template_view_for_admin').html() ),
  initialize: function() {
    this.listenTo(this.model, 'destroy', this.remove)
  },
  render: function() {
    var modelData = this.model.toJSON();
    //alert("soldeir config is "+JSON.stringify(soldier_config));
    //modelData.soldier_config = soldier_config;
    this.$el.html( this.template(modelData) );
    return this;
  },
  delSelf: function() {
    this.model.destroy();
    save();
  },
  register_course_name_input: function(){
    var newName = this.$('.register_course_name_input').val();
    console.log("register_course_name_input is changed to "+newName);
    this.model.update_name(newName);
  },
  register_course_intake_input: function(){
    var newIntake = this.$('.register_course_intake_input').val();
    console.log("register_course_intake_input is changed to "+newIntake);
    this.model.update_intake(newIntake);
  },
  register_course_start_date_input: function(){
    var newStartDate = this.$('.register_course_start_date_input').val();
    console.log("register_course_start_date_input is changed to "+newStartDate);
    this.model.update_start_date(newStartDate);
  },
  register_course_end_date_input: function(){
    var newEndDate = this.$('.register_course_end_date_input').val();
    console.log("register_course_end_date_input is changed to "+newEndDate);
    this.model.update_end_date(newEndDate);
  },
  register_course_localtion_input: function(){
    var newCourseLocation = this.$('.register_course_localtion_input').val();
    console.log("register_course_localtion_input is changed to "+newCourseLocation);
    this.model.update_location(newCourseLocation);
  },
  course_update_button: function(){
    // validate and insert or update course
    console.log("course_update_button or register button is clicked");
    var course_data = this.model.toJSON();
    console.log("name is "+course_data.name);
    //alert(JSON.stringify(course_data));
    if(course_data.name == null || course_data.intake == null || course_data.start_date == null ||  course_data.end_date == null ||  course_data.location == null){
      alert("Fill all black");
      return;
    }
    
    show_loading_modal();
    console.log("webservice_request for course update / insert by (user) is started");
    var mc = localStorage.getItem("user_mc");
    var password = localStorage.getItem("user_password");
    var db_id = localStorage.getItem("user_db_id");
    // close model
    $("#course_modal").modal("hide");
    if(course_data.db_id == null){
      // we have to insert
      delete course_data.db_id;
      var data = course_data;
      var user = {db_id:db_id,mc : mc, password : password};
      var post_data = {"ops_type":"register_course","data":data,"user":user};
      var data_str = JSON.stringify(post_data);
      var end_point = main_base+"intakebook_std/api/v1/course/index.php";
      webservice_request(end_point,data_str,"register_course");
    }
    else{
      var data = course_data;
      var user = {mc : mc, password : password};
      var post_data = {"ops_type":"update_course","data":data,"user":user};
      var data_str = JSON.stringify(post_data);
      var end_point = main_base+"intakebook_std/api/v1/course/index.php";
      webservice_request(end_point,data_str,"update_course");
    }

  }
});


var AppView = Backbone.View.extend({
  
  el: 'body',
  events: {
        'click #save_thanks_btn': 'addThanks'
  }
});


$(function() {
    new AppView();
});



/*--------------------------- App Initialize ---------------- */
  // show hide
  $("#main_content_section").hide();

//show_loading_modal();
// we have to check internet coonection 
var current_status = localStorage.getItem("current_status");

if(current_status == "login" && localStorage.getItem("soldier_config") != null){

        var string_config = localStorage.getItem("soldier_config");
        soldier_config = JSON.parse(string_config);
        //alert("how about soldier_config "+JSON.stringify(soldier_config));
      // we have to parse local storage name list
        intake_list = localStorage.getItem("intake_list");
        intake_list = JSON.parse(intake_list);
        //alert(intake_list.length);
        // clear list 
        $("#name_list_holder_div").empty();
        Soldiers.reset(intake_list);
        Soldiers.each(function(soldier) {
          //console.log("soldier data is "+JSON.stringify(soldier));
          var view = new SoldierView({ model: soldier });
          $('#name_list_holder_div').append( view.render().el );
        });
        $("#login_section").hide();
        $("#main_content_section").show();
        $("#name_list_section").show().siblings().hide();
        hide_loading_modal();
}
else{
  // call for configuration data
  show_loading_modal();
  // it is public call 
  // we just use post method

  var post_data = {"ops_type":"get_config","data":{},"user":{}};
  var data_str = JSON.stringify(post_data);
  var end_point = main_base+"intakebook_std/api/v1/config/index.php";
  webservice_request(end_point,data_str,"get_config");
}

/*-------------------------------- Attact Event Listner -------------------------------*/

  $("#new_course_button").click(function(){
    console.log("new_course_button is clicked");
    var new_course = new Course();
    var new_course_view = new CourseEditAdminView({ model: new_course });
    $('#new_course_template_host').empty().append( new_course_view.render().el );
    $("#course_modal_label").html(this.model.get("name"));
    $("#course_modal").modal('show');
  });
// Events Listner for UI
  $("#sign_up_a").click(function(){
    console.log("sign_up_a is clicked");
    // we have to initialize soldier model and
    // pass it to soldier edit view and attach to model
    var soldier = new Soldier();
    //var soldier = new Soldier({"db_id":2,"mc_type":2,"mc":12,"rank":3,"name":"hello","unit":"ခလရ (၇၃) ဇရပ္ၾကီး","academy":"2","intake":"17"});
    var view = new SoldierEditView({ model: soldier });
    $('#sign_up_template_host').empty().append( view.render().el );
  });
  
  $("#logout_a").click(function(){
    console.log("logout_a is clicked");
    // clear all data
    localStorage.clear();
  });
  
$("#sign_in_button").click(function(){
  // get user mc and password
  // send request
  var mc = $("#login_mc_input").val();
  var password = $("#login_password_input").val();
  // validation
  if( mc == null || mc == "" || password == null || password == ""){
    alert("ျပန္တမ္းဝင္အမွတ္ ႏွင့္ စကားဝွက္ ရိုက္ထည့္ရန္ လိုအပ္ပါသည္");
    return;
  }
  //myApp.showPreloader('Loging in..');
  // login request
  // prepare data

  show_loading_modal();
  console.log("webservice_request is started");
  localStorage.setItem("user_mc",mc);
  localStorage.setItem("user_password",password);
  var post_data = {"ops_type":"login","data":{"mc":mc,"password":password},"user":{"mc":mc,"password":password}};
  var data_str = JSON.stringify(post_data);
  var end_point = main_base+"intakebook_std/api/v1/soldier/index.php";
  webservice_request(end_point,data_str,"login");
  // hide login form and show main 
  /*
  $("#login_section").hide();
  $("#main_content_section").show();
  $("#name_list_section").show().siblings().hide();
  */
}); // sign in button end


  $("#my_course_list_input").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#my_course_list_ul li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });


  $("#search_name_card_list_input").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    console.log("search_name_card_list_input is "+value);
    $(".name_list_card").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });


/*
  $("#search_course_record_card_list_input").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    console.log("course_record_card_list is "+value);
    $(".course_record_card_list").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
*/
  $("a.nav-link").on('click',function(){
    var value = $(this).attr("href");
    //value = value.substr(1)
    console.log("li.nav-link is clicked on "+value);
    $("#name_list_section").hide().siblings().hide();
    //if(value == "#")
    $(value).show();

    if(value == "#logout_section"){
      $("#login_section").show();
      $("#main_content_section").hide();
    }

    if(value == "#courses_section"){
      // we have to ajax call for this user's course list
      show_loading_modal();
      console.log("webservice_request for course list (user) is started");
      var mc = localStorage.getItem("user_mc");
      var password = localStorage.getItem("user_password");
      var user_db_id = localStorage.getItem("user_db_id");
      var data = {soldier_id : user_db_id};
      var user = {mc : mc, password : password};
      var post_data = {"ops_type":"select_course_for_user","data":data,"user":user};
      var data_str = JSON.stringify(post_data);
      var end_point = main_base+"intakebook_std/api/v1/course/index.php";
      webservice_request(end_point,data_str,"select_course_for_user");

    }
    if(value == "#profile_section"){
      var mc = localStorage.getItem("user_mc");
      var local_user = Soldiers.findWhere({ mc: mc });
      var view = new SoldierView({ model: local_user });
      $('#my_profile_card').empty().append( view.render().el );
      var view_edit = new SoldierEditView({ model: local_user });
      $('#my_profile_card').append("<hr>");
      $('#my_profile_card').append( view_edit.render().el );
    }
    if(value == "#course_admin_section"){
      console.log("course admin section entered");
      // ajax request to get list of courses 
      show_loading_modal();
      var mc = localStorage.getItem("user_mc");
      var password = localStorage.getItem("user_password");
      var data = {};
      var user = {mc : mc, password : password};
      var post_data = {"ops_type":"select_course","data":data,"user":user};
      var data_str = JSON.stringify(post_data);
      var end_point = main_base+"intakebook_std/api/v1/course/index.php";
      webservice_request(end_point,data_str,"select_course");
    }

  });

$("#sync_button").click(function(){
  sync();
});
function sync(){
  show_loading_modal();
  console.log("webservice_request for sync is started");
  var mc = localStorage.getItem("user_mc");
  var password = localStorage.getItem("user_password");
  var post_data = {"ops_type":"login","data":{"mc":mc,"password":password},"user":{"mc":mc,"password":password}};
  var data_str = JSON.stringify(post_data);
  var end_point = main_base+"intakebook_std/api/v1/soldier/index.php";
  webservice_request(end_point,data_str,"login");
}

  /*----------------------- AJAX Request, Response Handler ------------------ */

// just for data transfering 
function webservice_request(end_point,data_str,type){
  $.ajax({
    url: end_point,
    type: 'post',
    data: {"web_client": data_str},
    success: function(response){
        //do whatever.
        console.log("ajax success for "+type);
        console.log(response);
        handle_webservice_success(response,type);
    },
    error: function(response){
        //do whatever.
        console.log("ajax error  "+type);
        console.log(response.responseText);
        handle_webservice_error(response,type);
    }
  });
} // end for webserice_request


function handle_webservice_error(response,type){
  if (response.readyState == 4) {
    // HTTP error (can be checked by XMLHttpRequest.status and XMLHttpRequest.statusText)
   }
  else if (response.readyState == 0) {
    // Network error (i.e. connection refused, access denied due to CORS, etc.)
      show_alert_modal("အင္တာနက္ ခ်ိတ္ဆက္မႈ မရိွပါ");
      return;
  }
  else {
    // something weird is happening
    console.log("something weird is happening in ajax call");
  }


  if(type == "login"){
    setTimeout(function () {
      //alert(response.responseText,"Login Fail");
      show_alert_modal("ျပန္တမ္းဝင္အမွတ္ နွင့္ စကားဝွက္ ကိုက္ညီမႈ မရိွပါ။ ျပန္လည္စစ္ေဆးျပီး ဝင္ေရာက္ပါ။");
      hide_loading_modal();
    }, 0);
  } // end for login 

  if(type == "select_course_for_user"){
    setTimeout(function () {
      //alert(response.responseText + "select_course_for_user Fail");
      show_alert_modal("စာရင္းသြင္းထားေသာ သင္တန္း မရိွပါ");
      hide_loading_modal();
    }, 0);
  } // end for select_course_for_user 

  if(type == "select_course_for_course"){
    setTimeout(function () {
      //alert(response.responseText + "select_course_for_course Fail");
      show_alert_modal("အမည္စာရင္းအား ၾကည့္ရႈခြင့္ မရိွေသးပါ၊ ေက်းဇူးျပဳျပီး Admin ႏွင့္ဆက္သြယ္ပါ");
      hide_loading_modal();
    }, 0);
  } // end  select_course_for_course


  if(type == "select_course_for_course_admin_namelist"){
    setTimeout(function () {
     // alert(response.responseText + "select_course_for_course Fail");
      show_alert_modal("သင့္အေနျဖင့္ အမည္စာရင္းအား ၾကည့္ရႈခြင့္ မရိွေသးပါ၊ ေက်းဇူးျပဳျပီး Admin ႏွင့္ဆက္သြယ္ပါ");
      hide_loading_modal();
    }, 0);
  } // end  select_course_for_course


  if(type == "get_config"){
    setTimeout(function () {
      //alert(response.responseText + "get_config Fail");
      show_alert_modal("အခ်က္အလက္ရယူရာတြင္ အမွားအယြင္း ရိွေနပါသည္။");
      hide_loading_modal();
    }, 0);
  } // end for get_config 


  if(type == "register"){
    setTimeout(function () {
      //alert(response.responseText + "register Fail");
      show_alert_modal("မွတ္ပံုတင္ျပဳလုပ္ျခငး္ မေအာင္ျမင္ပါ။ အခ်က္အလက္ထည့္သြင္းသည့္ ေဖာင္အား ျပန္လည္ စစ္ေဆးၾကည့္ပါ (သို႕မဟုတ္) login ဝင္ၾကည့္ပါ");
      hide_loading_modal();
    }, 0);
  } // end for register 


  if(type == "update"){
    setTimeout(function () {
      //alert(response.responseText + "update Fail");
      show_loading_modal("အခ်က္အလက္ ျပင္ဆင္ရာတြင္ အမွားအယြင္း ရိွေနပါသည္။ ေက်းဇူးျပဳျပီး ျပန္လည္ စစ္ေဆးေပးပါ");
      hide_loading_modal();
    }, 0);
  } // end for update 

  if(type == "select_course"){
    setTimeout(function () {
      //alert(response.responseText + "select_course Fail");
      show_alert_modal("သင္တန္းစာရင္း ရယူႏိုင္ျခင္း မရိွပါ");
      hide_loading_modal();
    }, 0);
  } // end for select_course 

  if(type == "update_course"){
    setTimeout(function () {
      //alert(response.responseText + "update_course Fail");
      show_alert_modal("သင္တန္းအခ်က္အလက္ ျပင္ဆင္ရာတြင္ အမွားအယြင္းရိွေနပါသည္။ ျပန္လည္ စစ္ေဆးေပးပါ");
      hide_loading_modal();
    }, 0);
  } // end for update_course 

  if(type == "register_course"){
    setTimeout(function () {
      //alert(response.responseText + "register_course Fail");
      show_alert_modal("သင္တန္း မွတ္ပံုတင္ျပဳလုပ္ျခငး္ မေအာင္ျမင္ပါ။ အခ်က္အလက္ထည့္သြင္းသည့္ ေဖာင္အား ျပန္လည္ စစ္ေဆးၾကည့္ပါ ");
      hide_loading_modal();
    }, 0);
  } // end for register_course 

  if(type == "user_course_role_select"){
    setTimeout(function () {
      //alert(response.responseText + "user_course_role_select Fail");
      show_alert_modal("အသံုးျပဳသူ အဆင့္ျမွင့္တင္ျခင္း မေအာင္ျမင္ပါ");
      hide_loading_modal();
    }, 0);
  } // end for register_course 

  if(type == "register_course_record"){
    setTimeout(function () {
      //alert(response.responseText + "register_course_record Fail");
      show_alert_modal("သင္တန္းတက္ စာရင္း ထည့္သြင္းမႈ မေအာင္ျမင္ပါ");
      // တက္ေရာက္ျပီးတာ ျဖစ္ဖို႕မ်ားတယ္
      hide_loading_modal();
    }, 0);

  }
  //user_course_role_select

} // end for handle_webservice_fail function
function handle_webservice_success(response,type){
  //console.log("handle_webservice_success  "+type);
  //console.log(response);
  /*
  if(type == "register"){
    var status = response.status;
    if(status == "success"){
      setTimeout(function () {
        myApp.hidePreloader();
        myApp.alert("Wait for admin comfirmation.","Success");
        localStorage.setItem("current_status","pending");
        //myApp.closeModal(".login-screen");
        $("#register_div").hide().prev().show();
      }, 1000);

    }
    else{
      setTimeout(function () {
        myApp.hidePreloader();
        myApp.alert(response.msg,"Error");
        //myApp.closeModal(".login-screen");

        $("#register_div").hide().prev().show();
      }, 1000);
    }
  }
  */
  if(type == "register"){
    var status = response.status;
    console.log("register ok" + response);
    if(status == "success"){
      // hide and show to wait admin comfirmation
      setTimeout(function(){
        hide_loading_modal();
        console.log("Registration success, wait for admin comfirmation");
        show_alert_modal("မွတ္ပံုတင္ျခင္း ေအာင္ျမင္ပါသည္။ ေက်းဇူးျပဳျပီး Admin Approval ေစာင့္ေပးပါ");
      },0);
    }
    else{
      // may be query fail
      setTimeout(function(){
        hide_loading_modal();
        console.log("Registraion Failed, please try again"+response.msg);
        show_alert_modal("မွတ္ပံုတင္ျခင္း မေအာင္ျမင္ပါ။ ေက်းဇူးျပဳျပီး အခ်က္အလက္မ်ား ျပန္လည္ စစ္ေဆးေပးပါ (သို႕မဟုတ္) login ဝင္ေရာက္ၾကည့္ပါ");
      },1000);
    }

  }
  if(type == "update"){
    var status = response.status;
    console.log("update ok" + response);
    if(status == "success"){
      // hide and show to wait admin comfirmation
      setTimeout(function(){
        hide_loading_modal();
        console.log("update success");
        show_alert_modal("အခ်က္အလက္ ျပင္ဆင္ျခင္း ေအာင္ျမင္ပါသည္");
        // save current collection
        var current_collection = Soldiers.toJSON();
        localStorage.setItem("intake_list",JSON.stringify(current_collection));
      },0);
    }
    else{
      // may be query fail
      setTimeout(function(){
        hide_loading_modal();
        console.log("update Failed, please try again"+response.msg);
        show_alert_modal("အခ်က္အလက္ ျပင္ဆင္ျခင္း မေအာင္ျမင္ပါ");
      },0);
    }

  }

  if(type == "user_course_role_select"){
    var status = response.status;
    
    hide_loading_modal();
    console.log("user_course_role_select ok" + response);
    if(status == "success"){
      console.log(" user_course_role_select success ");
      show_alert_modal("အသံုးျပဳသူ အဆင့္ျမွင့္တင္ျခင္း ေအာင္ျမင္ပါသည္");
    }
    else{
      console.log("filed to update role"+ response.msg);
      show_alert_modal("အသံုးျပဳသူ အဆင့္ျမွင့္တင္ျခင္း မေအာင္ျမင္ပါ");
    }
  }
  if(type == "login"){
    var status = response.status;
    if(status == "success"){
      setTimeout(function () {

        intake_list = response.data;

        localStorage.setItem("intake_list",JSON.stringify(intake_list));
        //alert(intake_list.length);
        // clear list 
        $("#name_list_holder_div").empty();

        Soldiers.reset(intake_list);

        var logged_mc =  localStorage.getItem("user_mc");
        var logged_user = Soldiers.findWhere({ mc: logged_mc });
        var soldier_role = logged_user.get("role");
        var soldier_id = logged_user.get("db_id");
        soldier_config.logged_user_role = soldier_role;
        var string_config = JSON.stringify(soldier_config);
        localStorage.setItem("soldier_config",string_config);
        localStorage.setItem("user_db_id",soldier_id);
        localStorage.setItem("user_role",soldier_role);

        Soldiers.each(function(soldier) {
          var view = new SoldierView({ model: soldier });
          $('#name_list_holder_div').append( view.render().el );
        });
        localStorage.setItem("current_status","login");
        $("#login_section").hide();
        $("#main_content_section").show();
        $("#name_list_section").show().siblings().hide();


        hide_loading_modal();
      }, 0);
    }
    else {
      setTimeout(function () {
        //myApp.hidePreloader();
        hide_loading_modal();
        console.log(response.msg,"Fail");
        show_alert_modal("ျပန္တမ္းဝင္အမွတ္ႏွင့္ စကားဝွက္ ကိုက္ညီမႈ မရိွပါ။ေက်းဇူးျပဳျပီး  ျပန္လည္စစ္ေဆး ဝင္ေရာက္ပါ")
      }, 0);
    }
  } // end for login section 

  if(type == "get_config"){

      console.log("handle_webservice_success for get_config");
      console.log(response);
      if(response.status == "success"){
        // we have to save in localStorage
        // we have to alse assign in global variable
        soldier_config = response.data;
        var string_config = JSON.stringify(soldier_config);
        localStorage.setItem("soldier_config",string_config);
      }
      else{
        console.log("error in config");
      }

    setTimeout(function () {
      hide_loading_modal();
    }, 0);
  }
  if(type == "select_course_for_course"){
      console.log("handle_webservice_success for select_course_for_course");
      console.log(response);
      if(response.status == "success"){
        console.log("select_course_for_course status  SUCCESS");
        var res_data = response.data; // it's course list for current user
        $('#course_name_list').empty();
        // retrieve from global variable
        $("#course_name_current").text(current_selected_course_name);
        Soldiers_for_course.reset(res_data);
        Soldiers_for_course.each(function(soldier) {
          var view = new SoldierView({ model: soldier });
          $('#course_name_list').append( view.render().el );
        });      
        $('html,body').animate({
          scrollTop: $("#course_name_current").offset().top
        }, 0);
      }
      else{
         console.log("select_course_for_course status fail"+response.msg);
        show_alert_modal("သင္တန္းသား အမည္စာရင္းအား ၾကည့္ရႈခြင့္ မရိွပါ");
      }
      hide_loading_modal();
  } // end for select_course_for_course
  
  if(type == "select_course_for_course_admin_namelist"){

    console.log("handle_webservice_success for select_course_for_course_admin_namelist");
    console.log(response);
    if(response.status == "success"){
      console.log("select_course_for_course_admin_namelist status  SUCCESS");
      var res_data = response.data; // it's course list for current user
      // we have to show another page in this stage or 
      // in current stage 

      $('#course_admin_namelist_host').empty();
      // retrieve from global variable
      $("#current_selected_course_name").text(current_selected_course_name);
      Soldiers_for_course.reset(res_data);
      Soldiers_for_course.each(function(soldier) {
        var view = new SoldierCourseRoleEditView({ model: soldier });
        $('#course_admin_namelist_host').append( view.render().el );
      });
      //$('body').scrollTo('#course_admin_namelist_host');
      $('html,body').animate({
        scrollTop: $("#course_admin_namelist_host").offset().top
      }, 2000);
    }
    else{
      //alert("select_course_for_course_admin_namelist status fail");
      show_alert_modal("ၾကည့္ရႈခြင့္ မရိွပါ။");
    }

  setTimeout(function () {
    hide_loading_modal();
  }, 0);
} // end for select_course_for_course_admin_namelist

  if(type == "select_course_for_user"){
    //alert("hello this is select_course_for_user successor funciton");
    setTimeout(function () {
      console.log("time to close modal, right?");
      hide_loading_modal();
    }, 2000);
    console.log("handle_webservice_success for select_course_for_user");
    console.log(response);
    if(response.status == "success"){
      console.log("select_course_for_user status  SUCCESS");
      var res_data = response.data; // it's course list for current user
      // we have to loop and append in course list holder
      $("#my_course_list_ul").empty();
        Courses.reset(res_data);
        console.log("Response data is "+JSON.stringify(res_data));
        Courses.each(function(course) {
          var view = new CourseView({ model: course });
          $('#my_course_list_ul').append( view.render().el );
          console.log("view is "+ view.render().el);
        });
        //hide_loading_modal();
      // we need course model, view and collection.
    }
    else{
      //alert("select_course_for_user status fail");
      console.log("fail in select_course_for_user ");
      show_alert_modal("သင္တန္းစာရင္းအား ၾကည့္ရႈခြင့္ မရိွေသးပါ");
    }
  } // end for select_course_for_user section

  if(type == "select_course"){
    setTimeout(function () {
      hide_loading_modal();
      console.log("handle_webservice_success for select_course");
      console.log(response);
      if(response.status == "success"){
        //myApp.alert("select course  Success","Finish");
        console.log("response : "+response);
        var res_data = response.data;
        console.log("res_data => ");
        console.log(res_data);
        // course collection reset  
        
          $("#course_admin_host").empty();
          Courses.reset(res_data);
          console.log("Response data is "+JSON.stringify(res_data));
          Courses.each(function(course) {
            var view = new CourseAdminView({ model: course });
            $('#course_admin_host').append( view.render().el );
            //console.log("view is "+ view.render().el);
          });      
      }
      else{
        console.log(response.msg);
        console.log("Select Course Fail : "+response.msg);
        show_alert_modal("သင္တန္းစာရင္း မရရိွႏိုုင္ေသးပါ");
      }
    }, 0);
  } // end for config section

  
  if(type == "update_course"){
    console.log("handle_webservice_success for update_course");
    console.log(response);
    if(response.status == "success"){
      console.log("update course success");
      show_alert_modal("သင္တန္း အခ်က္အလက္မ်ား ျပင္ဆင္ျပိးပါျပီ");
    }
    else{
      console.log("update Course Fail");
      show_alert_modal("သင္တန္း အခ်က္အလက္မ်ား ျပင္ဆင္ရာတြင္ မွားယြင္းေနပါသည္");
    }
    setTimeout(function () {
      hide_loading_modal();
    },0);
  }

  
  if(type == "register_course_record"){
    if(response.status == "success"){
      console.log("Joined to course, wait for course admin comfirmation");
      show_alert_modal("သင္တန္းတက္ အမည္စာရင္းတြင္ ထည့္သြင္းျပီးပါျပီ၊ သင္တန္း Admin မွ အတည္ျပဳေပးသည္ကို ေခတၱေစာင့္ပါ");
    }
    else{
      //alert("error in joining to these class");
      show_alert_modal("သင္တန္းတက္ အမည္စာရင္း သြငး္မရပါ");
    }
    setTimeout(function(){
      hide_loading_modal();
    },0);
  }
    if(type == "register_course"){
      
      console.log("handle_webservice_success for register_course");
      console.log(response);
      if(response.status == "success"){
        console.log("register_course success");
        show_alert_modal("သင္တန္းအသစ္ထည့္ျခင္း ေအာင္ျမင္ပါသည္");
      }
      else{
        console.log("register_course Fail");
        show_alert_modal("သင္တန္းအသစ္ထည့္ျခင္း မေအာင္ျမင္ပါ");
      }

      setTimeout(function () {
        hide_loading_modal();
      },0);
    }

  /*
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
        // loop through courses
        $("#course_list_org_select").empty();
        for(var i = 0 ; i < courses.length; i++ ){
          console.log(" course name "+courses[i]['name']);
          var html = '<option value="'+courses[i]['db_id']+'">'+courses[i]['name']+' '+courses[i]['intake']+'</option>';
          $("#course_list_org_select").append(html);
        }
        
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
  */
} // end for webservice success function



/*----------------------------- Test Code ------------------------*/
//$('#loading_modal').modal({backdrop: 'static', keyboard: false});
// hide loading modal
//$('#loading_modal').modal('hide');

function show_loading_modal(){
  console.log('show_loading_modal');
  $('#loading_modal').modal({backdrop: 'static', keyboard: false});
  //$('#loading_modal').modal('show');
  //$('#loading_modal').modal('hide');
}

function hide_loading_modal(){
  setTimeout(function () {console.log('hide_loading_modal');
    $('#loading_modal').modal('hide');
  }, 500);
}
/*
$("#default_alert_div").click(function(){
  $(this).hide();
})
//$("default_alert_div").hide();
function show_alert(msg){
  $("#default_alert_div").text(msg).show();
}
show_alert("hellllll ");
*/
function show_alert_modal(msg){
  $("#modal_alert_para").text(msg);
  $("#modal_alert").modal();
}

//show_alert_modal("helllhelllhelllhelll helllhelllhelllh elllhelllhelllhell lhelllhelllhelllh elllhelll helllhelllhelllhelllhell lhelllhelllhelllhelll helllhelllhelllh elllhelllhelllhel llhelllhelllhelllhell lhelllhelllhelllhell lhelllhelllhelllhe lllhelllhelllhelllhelllhelllhelll helllhelllhelllhelllhe lllhelllhelllhelllhelllhell lhelllhelllhelllhelllhelllhelllhel llhelllhelllhelll helllhelllhelll helllhelll helllhelll ");
});