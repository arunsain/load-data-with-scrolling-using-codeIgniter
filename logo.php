 <div class="innerpage_wrapper">
         <div class="breadcrumb">
            <div class="container">
               <h2 class="page-title">Logo Design</h2>
            </div>
         </div>
         <section class="section pfolio-style2">
            <div class="container">
               <div class="row ">
                  <div class="col-12">
                     <div class="wl_pf_list1-holder">
                        <ul class="wl_pflist1 akpflist_1 addMoreDataScroll " id="lightgallery">
                               <?php foreach ($getProjectBySubCategory as $getProjectBySubCategorys) { ?>
                           <li data-src="<?php echo base_url();?>uploads/gallery/<?php echo $getProjectBySubCategorys['project_image']; ?>">
                              <div class="ak_pfholder_graphics pflogo_imgholder" style="background-color: <?php  echo $getProjectBySubCategorys['background_color']; ?>;">
                                 <a href="javascript:void(0);"> 
                                 <img alt="<?php echo $getProjectBySubCategorys['imageName']; ?>" src="<?php echo base_url();?>uploads/gallery/<?php echo $getProjectBySubCategorys['project_image']; ?>"/>
                                 </a>
                              </div>
                           </li>
                             <?php  } ?>

                      
                        </ul>
                        <div class="wl_pf_vmhldr text-center">
                             <input type="hidden" id="AjaxPath" value="<?php echo base_url(); ?>PortfolioDetail/getProjectAllByAjax">
                            <input type="hidden" id="getLastId" value="<?php echo $this->uri->segment(2); ?>">
                           
                           <!--<a href="#"  id="btn_more_logo" class="btn ak_btn">Load More </a>-->
                           <div id="load_data_message"></div>
                         
                        </div>
                        
                        
                        
                        
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>