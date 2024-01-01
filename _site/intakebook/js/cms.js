$(document).ready(function(){
	var main_base ="http://localhost/";
	//var main_base ="https://teamcs.000webhostapp.com/";
	console.log("welcome to CMS \n document is ready");

  var soldier_config = {
    role:['--Role--','Admin','User','Pending'],
    logged_user_role:0
  };
/*--------------------------- Backbone Model ----------------*/

var BLOG_POST = Backbone.Model.extend({
 defaults: {
        db_id: null,
        content: null,
        soldier_id: null,
        created_date: null,
        modified_date: null,
        author: null
    },
    update_content: function(value){
        console.log("update_content "+value);
        this.set({content:value});
    },
    update_soldier_id: function(value){
        console.log("update_soldier_id "+value);
        this.set({soldier_id:value});
    },
    update_modified_date: function(value){
        console.log("update_modified_date "+value);
        this.set({modified_date:value});
    },
    update_author: function(value){
        console.log("update_author "+value);
        this.set({author:value});
    }
});

var BLOG_POST_LIST = Backbone.Collection.extend({
    url: '#',
    model: BLOG_POST
});

var BLOG_POSTS = new BLOG_POST_LIST();

var BLOG_POST_VIEW = Backbone.View.extend({
  events: {
        'click .delete_btn': 'delSelf',
    },
  template: _.template( $('#blog_post_view').html() ),
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
  }
});

var BLOG_POST_EDIT_VIEW = Backbone.View.extend({
  events: {
        'click .delete_btn': 'delSelf',
    },
  template: _.template( $('#blog_post_view').html() ),
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
  }
});
//show_alert_modal("helllhelllhelllhelll helllhelllhelllh elllhelllhelllhell lhelllhelllhelllh elllhelll helllhelllhelllhelllhell lhelllhelllhelllhelll helllhelllhelllh elllhelllhelllhel llhelllhelllhelllhell lhelllhelllhelllhell lhelllhelllhelllhe lllhelllhelllhelllhelllhelllhelll helllhelllhelllhelllhe lllhelllhelllhelllhelllhell lhelllhelllhelllhelllhelllhelllhel llhelllhelllhelll helllhelllhelll helllhelll helllhelll ");

/* --------------------------- trigger event ------------------------------------*/
$("#blog_post_new_input").click(function(){
  console.log("blog_post_new_input is clicked");
  // show modal
  $("#blog_post_new_modal").modal();
  // render view and html to modal
});

});