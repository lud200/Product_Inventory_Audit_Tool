$(document).ready(function () {
  //render the custom style form elements
  if($(".form-container").length>0){
     $('.form-container').jqTransform({imgPath:'i/'});
  }
  
  /*calendar*/
  if($(".from-date").length>0)
  {
    $(".from-date").datepicker({
      dateFormat:"mm/dd/yy"
    });
  }
  $(".date-icon").bind('click',function(){
    $(this).prev(".from-date").trigger("click").focus();
  });
  if($(".to-date").length>0)
  {
    $(".to-date").datepicker({
      dateFormat:"mm/dd/yy"
    });
  }
  $(".to-date-icon").bind('click',function(){
    $(this).prev(".to-date").trigger("click").focus();
  });
  
  //click on body of page
  $("body").click(function(){
    //hide alert notification popup
    $(".alerts-notification").addClass("hide");
    
    //hide Save Search popup
    $(".save-search-tip").addClass("hide");
    
    //hide search tip popup
    $(".search-tip").addClass("hide");
    
    //hide alerts tip popup
    $(".tip-box").addClass("hide");
  })
  
  //click on Login button
  $(".login-button").click(function(){
    if($(".username-input").val() === "user" && $(".password-input").val() === "user")
    {
      //pass validation
      location.href = "dashboard.html";
    }
    else
    {
      //fail validation
      $(".error-msg").removeClass("hide");
    }
  })
  
  //focus on username and password input box to remove error message
  $(".username-input,.password-input").focus(function(){
    $(".error-msg").addClass("hide");
  })
  
  //click on Checkboxes
  $(".checkbox").click(function(){
    $(this).toggleClass("selected");
  })
  
  //click tabs
  $(".tab-content").addClass("hide");
  $(".tab-content").eq(0).removeClass("hide");
  $(".menu-tab li a,.contents-tab li a").click(function(){
    var index = $(this).parent().parent().find("li a").index($(this));
    
    $(this).parent().parent().find("li").removeClass("current");
    $(this).parent().addClass("current");
    
    $(".tab-content").addClass("hide");
    $(".tab-content").eq(index).removeClass("hide");
    
    if($(this).hasClass("message-send-tab"))
    {
      //hide message icons
      $(".icon-group").addClass("hide");
    }
    else
    {
      $(".icon-group").removeClass("hide");
    }
  })
  
  //click alerts icon in menu
  $(".menu-item-alerts").click(function(event){
    if($(this).next().hasClass("hide"))
    {
      $("body").click();
      //show alert notification popup
      $(".alerts-notification").removeClass("hide");
    }
    else
    {
      $("body").click();
    }
    
    event.stopPropagation();
  })
  
  //click on Alerts popup
  $(".alerts-notification").click(function(event){
    event.stopPropagation();
  })
  
  //click Write New Message button in Messages page
  $(".write-new-message-button").click(function(){
    $(".write-new-message-button").addClass("hide");
    $(".messages-list").addClass("hide");
    $(".write-new-message").removeClass("hide");
  })
  
  //click Send/Cancel in Write New Message screen
  $(".write-new-message .btn-send,.write-new-message .btn-cancel").click(function(){
    $(".write-new-message-button").removeClass("hide");
    $(".messages-list").removeClass("hide");
    $(".write-new-message").addClass("hide");
  })
  
  //click rows in Draft tab of Messages page
  $(".messages-draf .col-link").click(function(){
    $(".write-new-message-button").addClass("hide");
    $(".messages-list").addClass("hide");
    $(".message-detail-draft").removeClass("hide");
  })
  
  //click Send/Cancel in Draft tab's Message screen
  $(".message-detail-draft .btn-send,.message-detail-draft .btn-cancel").click(function(){
    $(".write-new-message-button").removeClass("hide");
    $(".messages-list").removeClass("hide");
    $(".message-detail-draft").addClass("hide");
  })
  
  //click rows in Inbox tab of Messages page
  $(".messages-inbox .col-link").click(function(){
    $(".write-new-message-button").addClass("hide");
    $(".messages-list").addClass("hide");
    $(".message-detail-inbox").removeClass("hide");
    
    $(".message-detail-inbox .default-buttons").removeClass("hide");
    $(".message-detail-inbox .reply-content").addClass("hide");
    $(".message-detail-inbox .reply-buttons").addClass("hide");
  })
  
  //click Cancel of Default buttons in Message Detail screen
  $(".message-detail-inbox .default-buttons .btn-cancel").click(function(){
    $(".write-new-message-button").removeClass("hide");
    $(".messages-list").removeClass("hide");
    $(".message-detail-inbox").addClass("hide");
  })
  
  //click Reply of Default buttons in Message Detail screen
  $(".message-detail-inbox .default-buttons .btn-reply").click(function(){
    $(".message-detail-inbox .default-buttons").addClass("hide");
    $(".message-detail-inbox .reply-content").removeClass("hide");
    $(".message-detail-inbox .reply-buttons").removeClass("hide");
  })
  
  //click Cancel of Reply buttons in Message Detail screen
  $(".message-detail-inbox .reply-buttons .btn-cancel").click(function(){
    $(".message-detail-inbox .default-buttons").removeClass("hide");
    $(".message-detail-inbox .reply-content").addClass("hide");
    $(".message-detail-inbox .reply-buttons").addClass("hide");
  })
  
  //click Reply of Reply buttons in Message Detail screen
  $(".message-detail-inbox .reply-buttons .btn-reply").click(function(){
    $(".write-new-message-button").removeClass("hide");
    $(".messages-list").removeClass("hide");
    $(".message-detail-inbox").addClass("hide");
  })
  
  //click rows in Sned tab of Messages page
  $(".messages-send .col-link").click(function(){
    $(".write-new-message-button").addClass("hide");
    $(".messages-list").addClass("hide");
    $(".message-detail-sent").removeClass("hide");
  })
  
  //click email link in Profile page
  $(".email-contact-link").click(function(){
    $(".main-profile-content").addClass("hide");
    $(".profile-email-contact").removeClass("hide");
  })
  
  //click Send/Cancel in Email Contacts screen of Profile page
  $(".profile-email-contact .btn-send,.profile-email-contact .btn-cancel").click(function(){
    $(".main-profile-content").removeClass("hide");
    $(".profile-email-contact").addClass("hide");
  })
  
  //click Grid view icon in Search page
  $(".icon-switch-grid").click(function(){
    $(".icon-switch-grid").addClass("active");
    $(".icon-switch-list").removeClass("active");
    
    $(".search-list").addClass("hide");
    $(".search-grid").removeClass("hide");
  })
  
  //click List view icon in Search page
  $(".icon-switch-list").click(function(){
    $(".icon-switch-grid").removeClass("active");
    $(".icon-switch-list").addClass("active");
    
    $(".search-list").removeClass("hide");
    $(".search-grid").addClass("hide");
  })
  
  //click Show Micro Filter button in Search page
  $(".show-micro-filter-button").click(function(){
    $(".search-tags").removeClass("collect");
  
    $(".show-micro-filter-button").removeClass("toggle");
    $(".hide-micro-filter-button").addClass("toggle");
    
    $(".search-content").removeClass("hide");
  })
  
  //click Hide Micro Filter button in Search page
  $(".hide-micro-filter-button").click(function(){
    $(".search-tags").addClass("collect");
    
    $(".show-micro-filter-button").addClass("toggle");
    $(".hide-micro-filter-button").removeClass("toggle");
    
    $(".search-content").addClass("hide");
  })
  
  //click Cancel/Run Filter in Micro Filter section in Search page
  $(".search-content .run-filter-button,.search-content .cancel-filter-button").click(function(){
    $(".search-tags").addClass("collect");
    
    $(".show-micro-filter-button").addClass("toggle");
    $(".hide-micro-filter-button").removeClass("toggle");
    
    $(".search-content").addClass("hide");
  })
  
  //click X icon of tags in Search page
  $(".search-tags li a").click(function(){
    $(this).parent().addClass("hide");
  })
  
  //click Search button in Search page
  $(".search-button").click(function(){
    $(".search-tags li").removeClass("hide");
  })
  
  //expand/collapse sectiones of left sidebar in Search page
  $(".substance a.toggle").click(function(){
    if($(this).parents(".substance").find(".btn-boxs").length>0 && !$(this).parents(".substance").find(".btn-boxs").hasClass("hide"))
      return;
    else
      $(this).parents(".substance").toggleClass("collect");
  })
  
  //click See All link of left sidebar in Search page
  $(".substance .all-category").click(function(){
    $(this).addClass("hide");
    $(this).prev().removeClass("hide");
    
    $(this).parents(".substance").find("li.need-hide").removeClass("hide");
  })
  
  //click Cancel/Apply buttones of left sidebar in Search page
  $(".substance .btn-boxs .cancel-button,.substance .btn-boxs .apply-button").click(function(){
    $(this).parents(".substance").find(".all-category").removeClass("hide");
    $(this).parents(".substance").find(".btn-boxs").addClass("hide");
    
    $(this).parents(".substance").find("li.need-hide").addClass("hide");
  })
  
  //click Reset Or Foget Password link in Login page
  $(".reset-or-forget-password-link").click(function(){
    $(".login").addClass("hide");
    $(".forgot-password").removeClass("hide");
  })
  
  //click Cancel button in Login page
  $(".forgot-password .btn-cancel").click(function(){
    $(".login").removeClass("hide");
    $(".forgot-password").addClass("hide");
  })
  
  //click Submit button in Login page
  $(".forgot-password .btn-submit").click(function(){
    $(this).parent().addClass("hide");
    if($(".email-address-input").val() === "abc@123.com")
    {
      //pass validation
      $(".ok-box").removeClass("hide");
    }
    else
    {
      //fail validation
      $(".error-box").removeClass("hide");
    }
  })
  
  //click Try Again button in Login page
  $(".forgot-password .btn-try-again").click(function(){
    $(".forgot-password .btns-area").removeClass("hide");
    $(".error-box").addClass("hide");
  })
  
  //click OK button in Login page
  $(".forgot-password .btn-ok").click(function(){
    $(".login").removeClass("hide");
    $(".forgot-password").addClass("hide");
    $(".ok-box").addClass("hide");
    $(".forgot-password .btns-area").removeClass("hide");
  })
  
  //click Field value in Profile page
  $(".static-txt,.placeholder-txt").click(function(){
    $(this).parent().find(".placeholder-txt").addClass("hide");
    $(this).parent().find(".static-txt").addClass("hide");
    
    $(this).parent().find(".input-bar").removeClass("hide");
    
    $(this).parent().find(".input-bar input").val($(this).parent().find(".static-txt").html());
  })
  
  //click Cancel button in Profile page
  $(".input-bar .btn-cancel").click(function(){
    var text_area_container = $(this).parent().parent().parent();
    if(text_area_container.find(".static-txt").html() !== "")
    {
      text_area_container.find(".static-txt").removeClass("hide");
    }
    else
    {
      text_area_container.find(".placeholder-txt").removeClass("hide");
    }
    
    text_area_container.find(".input-bar").addClass("hide");
  })
  
  //click Save button in Profile page
  $(".input-bar .btn-save").click(function(){
    var text_area_container = $(this).parent().parent().parent();
    text_area_container.find(".static-txt").html($(this).parents(".input-bar").find("input").val());
    if(text_area_container.find(".static-txt").html() !== "")
    {
      text_area_container.find(".static-txt").removeClass("hide");
    }
    else
    {
      text_area_container.find(".placeholder-txt").removeClass("hide");
    }
    
    text_area_container.find(".input-bar").addClass("hide");
  })
  
  //click Stars in Messages page
  $(".messages-table .table-data .icon-star").click(function(){
    $(this).toggleClass("active");
  })
  
  //click on Save Search button in Search page
  $(".save-search-button").click(function(event){
    if($(".save-search-tip").hasClass("hide"))
    {
      $("body").click();
      //show Save Search popup
      $(".save-search-tip").removeClass("hide");
    }
    else
    {
      $("body").click();
    }
    
    event.stopPropagation();
  })
  
  //click Save Search popup
  $(".save-search-tip").click(function(event){
    event.stopPropagation();
  })
  
  //click Cancel/Save buttons in Save Search popup
  $(".save-search-tip .btn-cancel,.save-search-tip .btn-submit").click(function(){
    //hide Save Search popup
    $(".save-search-tip").addClass("hide");
  })
  
  //focus on Search input box in Search page
  $(".search-input input").click(function(event){
    $(".search-input input").keyup();
    
    event.stopPropagation();
  })
  
  //keyup on Search input box in Search page
  $(".search-input input").keyup(function(){
    var search_text = $(this).val();
    if(search_text !== "")
    {
      $("body").click();
      //show search tip popup
      $(".search-tip").removeClass("hide");
    }
    else
    {
      $("body").click();
    }
  })
  
  //click on search tip popup
  $(".search-tip").click(function(event){
    event.stopPropagation();
  })
  
  //click links on search tip popup
  $(".search-tip li a").click(function(){
    $(".search-input input").val($(this).html());
    
    //hide search tip popup
    $(".search-tip").addClass("hide");
  })
  
  //click Alerts link in Saved Search tab of Dashboard page
  $(".recent-alerts-tip .orange-txt").click(function(event){
    if($(this).next().hasClass("hide"))
    {
      $("body").click();
      //show alerts tip
      $(this).next().removeClass("hide");
    }
    else
    {
      //hide alerts tip
      $("body").click();
    }
    
    event.stopPropagation();
  })
  
  //click alerts tip popup in Saved Search tab of Dashboard page
  $(".tip-box").click(function(event){
    event.stopPropagation();
  })
  
  //init Prize Range slider
  if($(".slider-prize-range").length>0)
  {
    $(".slider-prize-range").slider({
      range: true,
      min: 0,
      max: 2000,
      values: [300, 1000],
      slide: function(event,ui){
        $(".amount-prize-range").val("$" +ui.values[0]+"-$"+ui.values[1]);
      }
    });
    $(".amount-prize-range").val("$"+$(".slider-prize-range").slider("values",0)+
      "-$"+$(".slider-prize-range").slider("values",1));
  }
});