$(document).ready(function() {


	

	

    function getLogoDataByAjax(){
        
    let limit = 4;
	let start = 6;
	let action = 'inactive';
	let slugName = $('#getLastId').val();
	let ajaxUrl = $('#AjaxPath').val();
	function loadLogoData(limit, start, slugName) {
		$.ajax({
			url: ajaxUrl,
			type: "post",
			dataType: "json",
			data: {
				limit: limit,
				start: start,
				slugName: slugName
			},
			cache: false,
			success: function(data) {
			
				if (data.length == '') {
					$('#load_data_message').html("");
					action = 'active';
				} else {
				    
				    	let htmls = "";


				$.each(data, function(index, getSetName) {


              

					htmls += '<li data-src="' + getSetName.basepath + 'uploads/gallery/' + getSetName.project_image + '" ><div  class="ak_pfholder_graphics pflogo_imgholder" style="background-color: ' + getSetName.background_color + ';"><a href=""><img alt="' + getSetName.imageName + '" src="' + getSetName.basepath + 'uploads/gallery/' + getSetName.project_image + '" /></a></div></li>';

				 


				});
				    	$('.addMoreDataScroll').append(htmls);
					$('#load_data_message').html('<a href="#" class="btn ak_btn"><i class="fas fa-spinner fa-pulse"></i> </a>');
					action = "inactive";
					lightGallery(document.getElementById('lightgallery'));
				}
			}
		});
	}
	if (action == 'inactive') {
		action = 'active';
		loadLogoData(limit, start, slugName);
	}
	$(window).scroll(function() {
		if ($(window).scrollTop() + $(window).height() > $(".addMoreDataScroll").height() && action == 'inactive') {
			action = 'active';
			start = start + limit;
			setTimeout(function() {
				loadLogoData(limit, start, slugName);
			}, 10);
		}
	});
    }
    
    function getTshirtDataByAjax(){
        
    let limit = 8;
	let start = 8;
	let action = 'inactive';
	let slugName = $('#getLastId').val();
	let ajaxUrl = $('#AjaxPath').val();
	function loadLogoData(limit, start, slugName) {
		$.ajax({
			url: ajaxUrl,
			type: "post",
			dataType: "json",
			data: {
				limit: limit,
				start: start,
				slugName: slugName
			},
			cache: false,
			success: function(data) {
			    console.log(data)
			
				if (data.length == '') {
					$('#load_data_message').html("");
					action = 'active';
				} else {
				    
				    	let htmls = "";


				$.each(data, function(index, getSetName) {


                  htmls += '<li data-src="' + getSetName.basepath + 'uploads/gallery/' + getSetName.project_image + '"><div class="ak_pfholder_graphics pflogo_imgholder" style="background-color: '+getSetName.background_color+';"><a href=""><img alt="' + getSetName.imageName + '" src="' + getSetName.basepath + 'uploads/gallery/' + getSetName.project_image + '"></a></div></li>';

				});
				    	$('.addMoreDataScroll').append(htmls);
					$('#load_data_message').html('<a href="#" class="btn ak_btn"><i class="fas fa-spinner fa-pulse"></i> </a>');
					action = "inactive";
					lightGallery(document.getElementById('lightgallery'));
				}
			}
		});
	}
	if (action == 'inactive') {
		action = 'active';
		loadLogoData(limit, start, slugName);
	}
	$(window).scroll(function() {
		if ($(window).scrollTop() + $(window).height() > $(".addMoreDataScroll").height() && action == 'inactive') {
			action = 'active';
			start = start + limit;
			setTimeout(function() {
				loadLogoData(limit, start, slugName);
			}, 10);
		}
	});
    }
    
    function getPackagingDataByAjax(){
        
    let limit = 6;
	let start = 6;
	let action = 'inactive';
	let slugName = $('#getLastId').val();
	let ajaxUrl = $('#AjaxPath').val();
	function loadLogoData(limit, start, slugName) {
		$.ajax({
			url: ajaxUrl,
			type: "post",
			dataType: "json",
			data: {
				limit: limit,
				start: start,
				slugName: slugName
			},
			cache: false,
			success: function(data) {
			    console.log(data)
			
				if (data.length == '') {
					$('#load_data_message').html("");
					action = 'active';
				} else {
				    
				    	let htmls = "";


				$.each(data, function(index, getSetName) {


                     htmls += '<li data-src="' + getSetName.basepath + 'uploads/gallery/' + getSetName.project_image + '"><div class="ak_pfholder_graphics pflogo_imgholder" style="background-color: '+getSetName.background_color+';"><a href=""><img alt="' + getSetName.imageName + '" src="' + getSetName.basepath + 'uploads/gallery/' + getSetName.project_image + '"></a></div></li>';


				 


				});
				    	$('.addMoreDataScroll').append(htmls);
					$('#load_data_message').html('<a href="#" class="btn ak_btn"><i class="fas fa-spinner fa-pulse"></i> </a>');
					action = "inactive";
					lightGallery(document.getElementById('lightgallery'));
				}
			}
		});
	}
	if (action == 'inactive') {
		action = 'active';
		loadLogoData(limit, start, slugName);
	}
	$(window).scroll(function() {
		if ($(window).scrollTop() + $(window).height() > $(".addMoreDataScroll").height() && action == 'inactive') {
			action = 'active';
			start = start + limit;
			setTimeout(function() {
				loadLogoData(limit, start, slugName);
			}, 10);
		}
	});
    }
    
    
     function getLabelDataByAjax(){
        
    let limit = 2;
	let start = 4;
	let action = 'inactive';
	let slugName = $('#getLastId').val();
	let ajaxUrl = $('#AjaxPath').val();
	function loadLogoData(limit, start, slugName) {
		$.ajax({
			url: ajaxUrl,
			type: "post",
			dataType: "json",
			data: {
				limit: limit,
				start: start,
				slugName: slugName
			},
			cache: false,
			success: function(data) {
			    console.log(data)
			
				if (data.length == '') {
					$('#load_data_message').html("");
					action = 'active';
				} else {
				    
				    	let htmls = "";


				$.each(data, function(index, getSetName) {


                    	htmls += '<li data-src="' + getSetName.basepath + 'uploads/gallery/' + getSetName.project_image + '"><div class="ak_pfholder_graphics pflogo_imgholder" style="background-color: '+getSetName.background_color+';"><a href=""><img alt="' + getSetName.imageName + '" src="' + getSetName.basepath + 'uploads/gallery/' + getSetName.project_image + '"></a></div></li>';



				 


				});
				    	$('.addMoreDataScroll').append(htmls);
					$('#load_data_message').html('<a href="#" class="btn ak_btn"><i class="fas fa-spinner fa-pulse"></i> </a>');
					action = "inactive";
					lightGallery(document.getElementById('lightgallery'));
				}
			}
		});
	}
	if (action == 'inactive') {
		action = 'active';
		loadLogoData(limit, start, slugName);
	}
	$(window).scroll(function() {
		if ($(window).scrollTop() + $(window).height() > $(".addMoreDataScroll").height() && action == 'inactive') {
			action = 'active';
			start = start + limit;
			setTimeout(function() {
				loadLogoData(limit, start, slugName);
			}, 10);
		}
	});
    }
    
    
    function getEbookCoverDataByAjax(){
        
    let limit = 6;
	let start = 6;
	let action = 'inactive';
	let slugName = $('#getLastId').val();
	let ajaxUrl = $('#AjaxPath').val();
	function loadLogoData(limit, start, slugName) {
		$.ajax({
			url: ajaxUrl,
			type: "post",
			dataType: "json",
			data: {
				limit: limit,
				start: start,
				slugName: slugName
			},
			cache: false,
			success: function(data) {
			    console.log(data)
			
				if (data.length == '') {
					$('#load_data_message').html("");
					action = 'active';
				} else {
				    
				    	let htmls = "";


				$.each(data, function(index, getSetName) {


                     htmls +='<li data-src="' + getSetName.basepath + 'uploads/gallery/' + getSetName.project_image + '"><div class="ak_pfholder_graphics pflogo_imgholder" style="background-color:'+getSetName.background_color+';"><a href=""><img alt="' + getSetName.imageName + '" src="' + getSetName.basepath + 'uploads/gallery/' + getSetName.project_image + '"></a></div></li>';


				});
				    	$('.addMoreDataScroll').append(htmls);
					$('#load_data_message').html('<a href="#" class="btn ak_btn"><i class="fas fa-spinner fa-pulse"></i> </a>');
					action = "inactive";
					lightGallery(document.getElementById('lightgallery'));
				}
			}
		});
	}
	if (action == 'inactive') {
		action = 'active';
		loadLogoData(limit, start, slugName);
	}
	$(window).scroll(function() {
		if ($(window).scrollTop() + $(window).height() > $(".addMoreDataScroll").height() && action == 'inactive') {
			action = 'active';
			start = start + limit;
			setTimeout(function() {
				loadLogoData(limit, start, slugName);
			}, 10);
		}
	});
    }
    
    
    function getBusinessCardDataByAjax(){
        
    let limit = 6;
	let start = 6;
	let action = 'inactive';
	let slugName = $('#getLastId').val();
	let ajaxUrl = $('#AjaxPath').val();
	function loadLogoData(limit, start, slugName) {
		$.ajax({
			url: ajaxUrl,
			type: "post",
			dataType: "json",
			data: {
				limit: limit,
				start: start,
				slugName: slugName
			},
			cache: false,
			success: function(data) {
			    console.log(data)
			
				if (data.length == '') {
					$('#load_data_message').html("");
					action = 'active';
				} else {
				    
				    	let htmls = "";


				$.each(data, function(index, getSetName) {

                     htmls +='<li data-src="' + getSetName.basepath + 'uploads/gallery/' + getSetName.project_image + '"><div class="ak_pfholder_graphics pflogo_imgholder" style="background-color: '+getSetName.background_color+';"><a href=""><img alt="' + getSetName.imageName + '" src="' + getSetName.basepath + 'uploads/gallery/' + getSetName.project_image + '"></a></div></li>';


				// 	htmls += '<li data-src="' + getSetName.basepath + 'uploads/gallery/' + getSetName.project_image + '" ><div class="ak_pfholder_graphics pflogo_imgholder" style="background-color: ' + getSetName.background_color + ';"><a href=""><img src="' + getSetName.basepath + 'uploads/gallery/' + getSetName.project_image + '" /></a></div></li>';

				 


				});
				    	$('.addMoreDataScroll').append(htmls);
					$('#load_data_message').html('<a href="#" class="btn ak_btn"><i class="fas fa-spinner fa-pulse"></i> </a>');
					action = "inactive";
					lightGallery(document.getElementById('lightgallery'));
				}
			}
		});
	}
	if (action == 'inactive') {
		action = 'active';
		loadLogoData(limit, start, slugName);
	}
	$(window).scroll(function() {
		if ($(window).scrollTop() + $(window).height() > $(".addMoreDataScroll").height() && action == 'inactive') {
			action = 'active';
			start = start + limit;
			setTimeout(function() {
				loadLogoData(limit, start, slugName);
			}, 10);
		}
	});
    }
    
    
    
    function getInfographicsDataByAjax(){
        
    let limit = 4;
	let start = 4;
	let action = 'inactive';
	let slugName = $('#getLastId').val();
	let ajaxUrl = $('#AjaxPath').val();
	function loadLogoData(limit, start, slugName) {
		$.ajax({
			url: ajaxUrl,
			type: "post",
			dataType: "json",
			data: {
				limit: limit,
				start: start,
				slugName: slugName
			},
			cache: false,
			success: function(data) {
			    console.log(data)
			
				if (data.length == '') {
					$('#load_data_message').html("");
					action = 'active';
				} else {
				    
				    	let htmls = "";


				$.each(data, function(index, getSetName) {

                     htmls += '<li data-src="' + getSetName.basepath + 'uploads/gallery/' + getSetName.project_image + '"><div class="ak_pfholder_graphics pflogo_imgholder" style="background-color:'+getSetName.background_color+';"><a href=""><img alt="' + getSetName.imageName + '" src="' + getSetName.basepath + 'uploads/gallery/' + getSetName.project_image + '"></a></div></li>';



				 


				});
				    	$('.addMoreDataScroll').append(htmls);
					$('#load_data_message').html('<a href="#" class="btn ak_btn"><i class="fas fa-spinner fa-pulse"></i> </a>');
					action = "inactive";
					lightGallery(document.getElementById('lightgallery'));
				}
			}
		});
	}
	if (action == 'inactive') {
		action = 'active';
		loadLogoData(limit, start, slugName);
	}
	$(window).scroll(function() {
		if ($(window).scrollTop() + $(window).height() > $(".addMoreDataScroll").height() && action == 'inactive') {
			action = 'active';
			start = start + limit;
			setTimeout(function() {
				loadLogoData(limit, start, slugName);
			}, 10);
		}
	});
    }
    
    
    function getStandyDesignDataByAjax(){
        
    let limit = 4;
	let start = 4;
	let action = 'inactive';
	let slugName = $('#getLastId').val();
	let ajaxUrl = $('#AjaxPath').val();
	function loadLogoData(limit, start, slugName) {
		$.ajax({
			url: ajaxUrl,
			type: "post",
			dataType: "json",
			data: {
				limit: limit,
				start: start,
				slugName: slugName
			},
			cache: false,
			success: function(data) {
			    console.log(data)
			
				if (data.length == '') {
					$('#load_data_message').html("");
					action = 'active';
				} else {
				    
				    	let htmls = "";


				$.each(data, function(index, getSetName) {
				    
				    
				    
				     htmls +='<li data-src="' + getSetName.basepath + 'uploads/gallery/' + getSetName.project_image + '"><div class="ak_pfholder_graphics pflogo_imgholder" style="background-color: '+getSetName.background_color+';"><a href=""><img alt="' + getSetName.imageName + '" src="' + getSetName.basepath + 'uploads/gallery/' + getSetName.project_image + '"></a></div></li>';

				});
				    	$('.addMoreDataScroll').append(htmls);
					$('#load_data_message').html('<a href="#" class="btn ak_btn"><i class="fas fa-spinner fa-pulse"></i> </a>');
					action = "inactive";
					lightGallery(document.getElementById('lightgallery'));
				}
			}
		});
	}
	if (action == 'inactive') {
		action = 'active';
		loadLogoData(limit, start, slugName);
	}
	$(window).scroll(function() {
		if ($(window).scrollTop() + $(window).height() > $(".addMoreDataScroll").height() && action == 'inactive') {
			action = 'active';
			start = start + limit;
			setTimeout(function() {
				loadLogoData(limit, start, slugName);
			}, 10);
		}
	});
    }
    
     function getBannerDesignDataByAjax(){
        
    let limit = 6;
	let start = 6;
	let action = 'inactive';
	let slugName = $('#getLastId').val();
	let ajaxUrl = $('#AjaxPath').val();
	function loadLogoData(limit, start, slugName) {
		$.ajax({
			url: ajaxUrl,
			type: "post",
			dataType: "json",
			data: {
				limit: limit,
				start: start,
				slugName: slugName
			},
			cache: false,
			success: function(data) {
			    console.log(data)
			
				if (data.length == '') {
					$('#load_data_message').html("");
					action = 'active';
				} else {
				    
				    	let htmls = "";


				$.each(data, function(index, getSetName) {
				    
				    
				    
				      htmls += '<li data-src="' + getSetName.basepath + 'uploads/gallery/' + getSetName.project_image + '"><div class="ak_pfholder_graphics pflogo_imgholder" style="background-color: '+getSetName.background_color+';"><a href=""><img alt="' + getSetName.imageName + '" src="' + getSetName.basepath + 'uploads/gallery/' + getSetName.project_image + '"></a></div></li>';
				    
				});
				    	$('.addMoreDataScroll').append(htmls);
					$('#load_data_message').html('<a href="#" class="btn ak_btn"><i class="fas fa-spinner fa-pulse"></i> </a>');
					action = "inactive";
					lightGallery(document.getElementById('lightgallery'));
				}
			}
		});
	}
	if (action == 'inactive') {
		action = 'active';
		loadLogoData(limit, start, slugName);
	}
	$(window).scroll(function() {
		if ($(window).scrollTop() + $(window).height() > $(".addMoreDataScroll").height() && action == 'inactive') {
			action = 'active';
			start = start + limit;
			setTimeout(function() {
				loadLogoData(limit, start, slugName);
			}, 10);
		}
	});
    }
    
    function getPowerPointDataByAjax(){
        
    let limit = 6;
	let start = 6;
	let action = 'inactive';
	let slugName = $('#getLastId').val();
	let ajaxUrl = $('#AjaxPath').val();
	function loadLogoData(limit, start, slugName) {
		$.ajax({
			url: ajaxUrl,
			type: "post",
			dataType: "json",
			data: {
				limit: limit,
				start: start,
				slugName: slugName
			},
			cache: false,
			success: function(data) {
			    console.log(data)
			
				if (data.length == '') {
					$('#load_data_message').html("");
					action = 'active';
				} else {
				    
				    	let htmls = "";


				$.each(data, function(index, getSetName) {
				    
				     htmls +='<li><div class="ak_pfholder_graphics" style="background-color: '+getSetName.background_color+';"><img alt="' + getSetName.imageName + '" src="' + getSetName.basepath + 'uploads/gallery/' + getSetName.project_image + '"><span class="overlay"><a href="' + getSetName.basepath + 'uploads/gallery/' + getSetName.project_pdf + '" class="btn ak_btn"><i class="fa fa-file-pdf-o"></i></a><a href="#ppt_modal'+getSetName.ID+'" class="btn ak_btn" data-toggle="modal"><i class="fa fa-search-plus"></i></a></span></div><div class="modal fade logomodal_ak" id="ppt_modal'+getSetName.ID+'" tabindex="-1" role="dialog" aria-labelledby="logomodal" aria-hidden="true"><div class="modal-dialog modal-dialog-centered" role="document"><div class="modal-content"><div class="modal-body"><div class="mdl_imageholder"><div class="mdl_closeicon"><a href="#" role="button" data-dismiss="modal"><i class="fa fa-close"></i></a></div><img src="' + getSetName.basepath + 'uploads/gallery/' + getSetName.project_image + '"></div></div></div></div></div></li>';
				     
				    
				});
				    	$('.addMoreDataScroll').append(htmls);
					$('#load_data_message').html('<a href="#" class="btn ak_btn"><i class="fas fa-spinner fa-pulse"></i> </a>');
					action = "inactive";
					lightGallery(document.getElementById('lightgallery'));
				}
			}
		});
	}
	if (action == 'inactive') {
		action = 'active';
		loadLogoData(limit, start, slugName);
	}
	$(window).scroll(function() {
		if ($(window).scrollTop() + $(window).height() > $(".addMoreDataScroll").height() && action == 'inactive') {
			action = 'active';
			start = start + limit;
			setTimeout(function() {
				loadLogoData(limit, start, slugName);
			}, 10);
		}
	});
    }
    
    
    
    
     function getWordpressWebDataByAjax(){
        
    let limit = 6;
	let start = 6;
	let action = 'inactive';
	let slugName = $('#getLastId').val();
	let ajaxUrl = $('#AjaxPath').val();
	function loadLogoData(limit, start, slugName) {
		$.ajax({
			url: ajaxUrl,
			type: "post",
			dataType: "json",
			data: {
				limit: limit,
				start: start,
				slugName: slugName
			},
			cache: false,
			success: function(data) {
			    console.log(data)
			
				if (data.length == '') {
					$('#load_data_message').html("");
					action = 'active';
				} else {
				    
				    	let htmls = "";


				$.each(data, function(index, getSetName) {
				    
				    
				    console.log(getSetName);
				    
				      htmls += '<li><div class="wl_pfbox"><div class="wlpf_imageholder"><a href="#"><img alt="' + getSetName.imageName + '" src="'+getSetName.basepath+'uploads/gallery/'+getSetName.project_image+'" /></a></div><div class="wlpf_desc"><div class="wlpf_title"><a href="'+getSetName.basepath+'/portfolio/singleProjectDetail/'+getSetName.project_name_slug+'">'+getSetName.project_name+'</a></div><div class="wlpf_links-holder"><a href="'+getSetName.project_link+'">Visit site</a><a href="'+getSetName.basepath+'/portfolio/singleProjectDetail/'+getSetName.project_name_slug+'">Project Detail</a></div></div></div></li>';
				
				});
				    	$('.addMoreDataScroll').append(htmls);
					$('#load_data_message').html('<a href="#" class="btn ak_btn"><i class="fas fa-spinner fa-pulse"></i> </a>');
					action = "inactive";
					lightGallery(document.getElementById('lightgallery'));
				}
			}
		});
	}
	if (action == 'inactive') {
		action = 'active';
		loadLogoData(limit, start, slugName);
	}
	$(window).scroll(function() {
		if ($(window).scrollTop() + $(window).height() > $(".addMoreDataScroll").height() && action == 'inactive') {
			action = 'active';
			start = start + limit;
			setTimeout(function() {
				loadLogoData(limit, start, slugName);
			}, 10);
		}
	});
    }
    
    
    function getEmailerDesignDataByAjax(){
        
    let limit = 4;
	let start = 4;
	let action = 'inactive';
	let slugName = $('#getLastId').val();
	let ajaxUrl = $('#AjaxPath').val();
	function loadLogoData(limit, start, slugName) {
		$.ajax({
			url: ajaxUrl,
			type: "post",
			dataType: "json",
			data: {
				limit: limit,
				start: start,
				slugName: slugName
			},
			cache: false,
			success: function(data) {
			    console.log(data)
			
				if (data.length == '') {
					$('#load_data_message').html("");
					action = 'active';
				} else {
				    
				    	let htmls = "";


				$.each(data, function(index, getSetName) {
				    
				    
				     htmls += '<li><div class="wl_pfbox"><div class="wlpf_imageholder"><a href="'+getSetName.basepath+'emailer/emailerDetail/'+getSetName.ID+'"> <img alt="' + getSetName.imageName + '" src="'+getSetName.basepath+'uploads/gallery/'+getSetName.project_image+'"></a></div><div class="wlpf_desc"><div class="wlpf_title"><a href="'+getSetName.basepath+'/emailer/emailerDetail/'+getSetName.ID+'">'+getSetName.project_name+'</a></div><div class="wlpf_links-holder"><a href="'+getSetName.basepath+'emailer/emailerDetail/'+getSetName.ID+'">Project Detail</a></div></div></div></li>';
				    
				});
				    	$('.addMoreDataScroll').append(htmls);
					$('#load_data_message').html('<a href="#" class="btn ak_btn"><i class="fas fa-spinner fa-pulse"></i> </a>');
					action = "inactive";
					lightGallery(document.getElementById('lightgallery'));
				}
			}
		});
	}
	if (action == 'inactive') {
		action = 'active';
		loadLogoData(limit, start, slugName);
	}
	$(window).scroll(function() {
		if ($(window).scrollTop() + $(window).height() > $(".addMoreDataScroll").height() && action == 'inactive') {
			action = 'active';
			start = start + limit;
			setTimeout(function() {
				loadLogoData(limit, start, slugName);
			}, 10);
		}
	});
    }
    
    function getNewsletterDesignDataByAjax(){
        
    let limit = 4;
	let start = 4;
	let action = 'inactive';
	let slugName = $('#getLastId').val();
	let ajaxUrl = $('#AjaxPath').val();
	function loadLogoData(limit, start, slugName) {
		$.ajax({
			url: ajaxUrl,
			type: "post",
			dataType: "json",
			data: {
				limit: limit,
				start: start,
				slugName: slugName
			},
			cache: false,
			success: function(data) {
			    console.log(data)
			
				if (data.length == '') {
					$('#load_data_message').html("");
					action = 'active';
				} else {
				    
				    	let htmls = "";


				$.each(data, function(index, getSetName) {
				    
				    
				     htmls += '<li><div class="wl_pfbox"><div class="wlpf_imageholder"><a href="'+getSetName.basepath+'emailer/emailerDetail/'+getSetName.ID+'"> <img alt="' + getSetName.imageName + '" src="'+getSetName.basepath+'uploads/gallery/'+getSetName.project_image+'"></a></div><div class="wlpf_desc"><div class="wlpf_title"><a href="'+getSetName.basepath+'/emailer/emailerDetail/'+getSetName.ID+'">'+getSetName.project_name+'</a></div><div class="wlpf_links-holder"><a href="'+getSetName.basepath+'emailer/emailerDetail/'+getSetName.ID+'">Project Detail</a></div></div></div></li>';
				    
				});
				    	$('.addMoreDataScroll').append(htmls);
					$('#load_data_message').html('<a href="#" class="btn ak_btn"><i class="fas fa-spinner fa-pulse"></i> </a>');
					action = "inactive";
					lightGallery(document.getElementById('lightgallery'));
				}
			}
		});
	}
	if (action == 'inactive') {
		action = 'active';
		loadLogoData(limit, start, slugName);
	}
	$(window).scroll(function() {
		if ($(window).scrollTop() + $(window).height() > $(".addMoreDataScroll").height() && action == 'inactive') {
			action = 'active';
			start = start + limit;
			setTimeout(function() {
				loadLogoData(limit, start, slugName);
			}, 10);
		}
	});
    }
    
     function getMenuDesignDataByAjax(){
        
    let limit = 6;
	let start = 6;
	let action = 'inactive';
	let slugName = $('#getLastId').val();
	let ajaxUrl = $('#AjaxPath').val();
	function loadLogoData(limit, start, slugName) {
		$.ajax({
			url: ajaxUrl,
			type: "post",
			dataType: "json",
			data: {
				limit: limit,
				start: start,
				slugName: slugName
			},
			cache: false,
			success: function(data) {
			    console.log(data)
			
				if (data.length == '') {
					$('#load_data_message').html("");
					action = 'active';
				} else {
				    
				    	let htmls = "";


				$.each(data, function(index, getSetName) {
				    
				     htmls +='<li><div class="ak_pfholder_graphics" style="background-color: '+getSetName.background_color+';"><img alt="' + getSetName.imageName + '" src="' + getSetName.basepath + 'uploads/gallery/' + getSetName.project_image + '"><span class="overlay"><a href="' + getSetName.basepath + 'uploads/gallery/' + getSetName.project_pdf + '" class="btn ak_btn"><i class="fa fa-file-pdf-o"></i></a><a href="#ppt_modal'+getSetName.ID+'" class="btn ak_btn" data-toggle="modal"><i class="fa fa-search-plus"></i></a></span></div><div class="modal fade logomodal_ak" id="ppt_modal'+getSetName.ID+'" tabindex="-1" role="dialog" aria-labelledby="logomodal" aria-hidden="true"><div class="modal-dialog modal-dialog-centered" role="document"><div class="modal-content"><div class="modal-body"><div class="mdl_imageholder"><div class="mdl_closeicon"><a href="#" role="button" data-dismiss="modal"><i class="fa fa-close"></i></a></div><img src="' + getSetName.basepath + 'uploads/gallery/' + getSetName.project_image + '"></div></div></div></div></div></li>';
				     
				    
				});
				    	$('.addMoreDataScroll').append(htmls);
					$('#load_data_message').html('<a href="#" class="btn ak_btn"><i class="fas fa-spinner fa-pulse"></i> </a>');
					action = "inactive";
					lightGallery(document.getElementById('lightgallery'));
				}
			}
		});
	}
	if (action == 'inactive') {
		action = 'active';
		loadLogoData(limit, start, slugName);
	}
	$(window).scroll(function() {
		if ($(window).scrollTop() + $(window).height() > $(".addMoreDataScroll").height() && action == 'inactive') {
			action = 'active';
			start = start + limit;
			setTimeout(function() {
				loadLogoData(limit, start, slugName);
			}, 10);
		}
	});
    }
    
    function getBrochureDesignDataByAjax(){
        
    let limit = 6;
	let start = 6;
	let action = 'inactive';
	let slugName = $('#getLastId').val();
	let ajaxUrl = $('#AjaxPath').val();
	function loadLogoData(limit, start, slugName) {
		$.ajax({
			url: ajaxUrl,
			type: "post",
			dataType: "json",
			data: {
				limit: limit,
				start: start,
				slugName: slugName
			},
			cache: false,
			success: function(data) {
			    console.log(data)
			
				if (data.length == '') {
					$('#load_data_message').html("");
					action = 'active';
				} else {
				    
				    	let htmls = "";


				$.each(data, function(index, getSetName) {
				    
				     htmls +='<li><div class="ak_pfholder_graphics" style="background-color: '+getSetName.background_color+';"><img alt="' + getSetName.imageName + '" src="' + getSetName.basepath + 'uploads/gallery/' + getSetName.project_image + '"><span class="overlay"><a href="' + getSetName.basepath + 'uploads/gallery/' + getSetName.project_pdf + '" class="btn ak_btn"><i class="fa fa-file-pdf-o"></i></a><a href="#ppt_modal'+getSetName.ID+'" class="btn ak_btn" data-toggle="modal"><i class="fa fa-search-plus"></i></a></span></div><div class="modal fade logomodal_ak" id="ppt_modal'+getSetName.ID+'" tabindex="-1" role="dialog" aria-labelledby="logomodal" aria-hidden="true"><div class="modal-dialog modal-dialog-centered" role="document"><div class="modal-content"><div class="modal-body"><div class="mdl_imageholder"><div class="mdl_closeicon"><a href="#" role="button" data-dismiss="modal"><i class="fa fa-close"></i></a></div><img src="' + getSetName.basepath + 'uploads/gallery/' + getSetName.project_image + '"></div></div></div></div></div></li>';
				     
				    
				});
				    	$('.addMoreDataScroll').append(htmls);
					$('#load_data_message').html('<a href="#" class="btn ak_btn"><i class="fas fa-spinner fa-pulse"></i> </a>');
					action = "inactive";
					lightGallery(document.getElementById('lightgallery'));
				}
			}
		});
	}
	if (action == 'inactive') {
		action = 'active';
		loadLogoData(limit, start, slugName);
	}
	$(window).scroll(function() {
		if ( parseInt($(window).scrollTop()) +  parseInt($(window).height()) >  parseInt($(".addMoreDataScroll").height()) && action == 'inactive') {
			action = 'active';
			start = parseInt(start) + parseInt(limit);
			console.log(start)
			setTimeout(function() {
				loadLogoData(limit, start, slugName);
			}, 10);
		}
	});
    }
    
    
    
    
    
    
      function getLetterHeadDataByAjax(){
        
    let limit = 4;
	let start = 6;
	let action = 'inactive';
	let slugName = $('#getLastId').val();
	let ajaxUrl = $('#AjaxPath').val();
	function loadLogoData(limit, start, slugName) {
		$.ajax({
			url: ajaxUrl,
			type: "post",
			dataType: "json",
			data: {
				limit: limit,
				start: start,
				slugName: slugName
			},
			cache: false,
			success: function(data) {
			
				if (data.length == '') {
					$('#load_data_message').html("");
					action = 'active';
				} else {
				    
				    	let htmls = "";


				$.each(data, function(index, getSetName) {


              

					htmls += '<li data-src="' + getSetName.basepath + 'uploads/gallery/' + getSetName.project_image + '" ><div  class="ak_pfholder_graphics pflogo_imgholder" style="background-color: ' + getSetName.background_color + ';"><a href=""><img alt="' + getSetName.imageName + '" src="' + getSetName.basepath + 'uploads/gallery/' + getSetName.project_image + '" /></a></div></li>';

				 


				});
				    	$('.addMoreDataScroll').append(htmls);
					$('#load_data_message').html('<a href="#" class="btn ak_btn"><i class="fas fa-spinner fa-pulse"></i> </a>');
					action = "inactive";
					lightGallery(document.getElementById('lightgallery'));
				}
			}
		});
	}
	if (action == 'inactive') {
		action = 'active';
		loadLogoData(limit, start, slugName);
	}
	$(window).scroll(function() {
		if ($(window).scrollTop() + $(window).height() > $(".addMoreDataScroll").height() && action == 'inactive') {
			action = 'active';
			start = start + limit;
			setTimeout(function() {
				loadLogoData(limit, start, slugName);
			}, 10);
		}
	});
    }


    var slugNameCheck = $('#getLastId').val();
    if(slugNameCheck == "Logo_Design"){
        getLogoDataByAjax();
    }
    if(slugNameCheck == "T-Shirt_Design"){
        getTshirtDataByAjax();
    }
    
    if(slugNameCheck == "Packaging_Design"){
        getPackagingDataByAjax();
    }
      if(slugNameCheck == "Label_Design"){
        getLabelDataByAjax();
    }
    
       if(slugNameCheck == "E-Book_Cover_Design"){
        getEbookCoverDataByAjax();
    }
    
       if(slugNameCheck == "Business_Card_Design"){
        getBusinessCardDataByAjax();
    }
    
    
     if(slugNameCheck == "Infographic_Design"){
        getInfographicsDataByAjax();
    }
    
    if(slugNameCheck == "Standy_Design"){
        getStandyDesignDataByAjax();
    }
    
     if(slugNameCheck == "Web_Banner_Designs"){
        getBannerDesignDataByAjax();
    }
    
    
     if(slugNameCheck == "POWERPOINT"){
        getPowerPointDataByAjax();
    }
    
      if(slugNameCheck == "Wordpress_Web_Design"){
        getWordpressWebDataByAjax();
    }
    
     if(slugNameCheck == "WooCommerce_Web_Design"){
        getWordpressWebDataByAjax();
    }
    
     if(slugNameCheck == "Bootstrap_Web_Design"){
        getWordpressWebDataByAjax();
    }
      if(slugNameCheck == "CodeIgniter_Web_Design"){
        getWordpressWebDataByAjax();
    }
    
    if(slugNameCheck == "Web_Design"){
        getWordpressWebDataByAjax();
    }
    
     if(slugNameCheck == "Shopify_Web_Design"){
        getWordpressWebDataByAjax();
    }
    
    
     if(slugNameCheck == "Emailers_Designs"){
        getEmailerDesignDataByAjax();
    }
    
    if(slugNameCheck == "Newsletter_Design"){
        getNewsletterDesignDataByAjax();
    }
    
 if(slugNameCheck == "MENU_DESIGNS"){
        getMenuDesignDataByAjax();
    }
    
    if(slugNameCheck == "Brochure_Design"){
        getBrochureDesignDataByAjax();
    }
    
      if(slugNameCheck == "Letter_Head"){
        getLetterHeadDataByAjax();
    }
    




















});
