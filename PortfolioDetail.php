<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class PortfolioDetail extends CI_Controller {

    public function __construct()
	{
		parent::__construct();
		 $this->load->helper(array('form', 'url','email'));
		// $this->load->library('form_validation');
		 $this->load->model(array('login_model','front_model'));
	}
	
	public function index($id)
	{

	 if($id == "T-Shirt_Design"){
	     $pageLimit = 8;
	     $pageName = "t-shirt";
	 }else if($id == "Logo_Design"){
	     $pageLimit = 6;
	     $pageName = "logo";
	 }else if($id == "Packaging_Design"){
	     $pageLimit = 6;
	     $pageName = "packaging";
	 }else if($id == 'Label_Design'){
	     $pageLimit = 4;
	      $pageName = "label";
	 }else if($id == 'E-Book_Cover_Design'){
	     $pageLimit = 6;
	      $pageName = "ebookCovers";
	 }else if($id == 'Business_Card_Design'){
	     $pageLimit = 6;
	      $pageName = "businessCard";
	 }else if($id == 'Infographic_Design'){
	     $pageLimit = 4;
	      $pageName = "infographics";
	 }else if($id == 'Standy_Design'){
	     $pageLimit = 4;
	      $pageName = "standyDesign";
	 }else if($id == 'Web_Banner_Designs'){
	     $pageLimit = 6;
	      $pageName = "banner";
	 }else if($id == 'POWERPOINT'){
	     $pageLimit = 6;
	      $pageName = "pptDesign";
	 }else if($id == 'Wordpress_Web_Design'){
	     $pageLimit = 6;
	      $pageName = "portfolio";
	 }else if($id == 'Bootstrap_Web_Design'){
	     $pageLimit = 6;
	      $pageName = "portfolio";
	 }else if($id == 'WooCommerce_Web_Design'){
	     $pageLimit = 6;
	      $pageName = "portfolio";
	 }else  if($id == 'Shopify_Web_Design'){
	     $pageLimit = 6;
	      $pageName = "portfolio";
	 }else  if($id == 'Web_Design'){
	     $pageLimit = 6;
	      $pageName = "portfolio";
	 }else  if($id == 'CodeIgniter_Web_Design'){
	     $pageLimit = 6;
	      $pageName = "portfolio";
	 }else  if($id == 'Emailers_Designs'){
	     $pageLimit = 4;
	      $pageName = "emailer";
	 }else if($id == 'Newsletter_Design'){
	     $pageLimit = 4;
	      $pageName = "emailer";
	 }else if($id == 'MENU_DESIGNS'){
	     $pageLimit = 4;
	      $pageName = "menuDesign";
	 }else if($id == 'Brochure_Design'){
	     $pageLimit = 6;
	      $pageName = "brochureDesign";
	 }else if($id == 'Letter_Head'){
	     $pageLimit = 6;
	      $pageName = "letterHead";
	 }
	
	 
	 
	 
	 

		 $data = array(        
		// 'testimonials' => $this->front_model->gettestimonials(),
		// 'about' =>$this->front_model->getwhobyID(2),
		// 'service_heading' => $this->front_model->get_heading(),
		// 'service_detail' => $this->front_model->get_servce_detail(),
		// 'other_detail' => $this->front_model->get_other_detail(),
		 // 'getbanner' =>  $this->front_model->getbanner(),
		 // 'getExpertiseData' => $this->front_model->getExpertiseData(),
		 	 'getSubCatData3' => $this->front_model->getSubCatData3(),
	 'getProjectBySubCategory' =>  $this->front_model->getProjectBySubCategoryCheck($id,$pageLimit),
	    	'getSubCatData2' => $this->front_model->getSubCatData2(),
	    	'getSubCatData1' => $this->front_model->getSubCatData1(),
	    	'getCategoryData' => $this->front_model->getCategoryData(),
		'site_detail' =>  $this->login_model->getProfile(),
		'pageName' => $pageName,
		);
		
		$this->load->view('main',$data);
	}



	public function singleProjectDetail($id)
	{
	 

		 $data = array(        
		// 'testimonials' => $this->front_model->gettestimonials(),
		// 'about' =>$this->front_model->getwhobyID(2),
		// 'service_heading' => $this->front_model->get_heading(),
		// 'service_detail' => $this->front_model->get_servce_detail(),
		// 'other_detail' => $this->front_model->get_other_detail(),
		 // 'getbanner' =>  $this->front_model->getbanner(),
		 	 'getSubCatData3' => $this->front_model->getSubCatData3(),
		 'getProjectMoreImage' => $this->front_model->getProjectMoreImage($id),
	 'getProjectDetailById' =>  $this->front_model->getProjectDetailById($id),
	    	'getSubCatData2' => $this->front_model->getSubCatData2(),
	    	'getSubCatData1' => $this->front_model->getSubCatData1(),
	    	'getCategoryData' => $this->front_model->getCategoryData(),
		'site_detail' =>  $this->login_model->getProfile(),
		'pageName' => 'singleProjectDetail',
		);
		
		$this->load->view('main',$data);
	}


	public function getProjectAllByAjax(){
	  
		 $data = $this->front_model->getProjectDataByAjaxCheck();
	echo json_encode($data);
	//	print_r($_POST);

	}
}
