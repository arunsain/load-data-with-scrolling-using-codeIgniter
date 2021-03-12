	function getProjectBySubCategoryCheck($id,$pageLimit){
			// working
		$id = 	 $this->get_single_row_data(['*'],'slug_name',$id,'wb_sub_category');
	$id = 	$id->id;
			
		if($id === "all"){
			$select = "SELECT * FROM `wb_projects` ORDER BY ID DESC LIMIT 2";
		}else{
			$select = "SELECT * FROM `wb_projects` WHERE sub_category = ?  ORDER BY ID DESC  LIMIT ?";
		}
		
		$select = $this->db->query($select,array($id,$pageLimit));
		 $result =  $select->result_array();
		foreach ($result as $key => $value) {
			$subCatName = $this->get_single_row_data(['*'],'id',$value['sub_category'],'wb_sub_category');
			$result[$key]['subCatName'] = $subCatName->sub_category_name;
				$str =  str_replace(" ","",$value['project_image']);
                $str =  substr($str, 0,-4);
                
	            $result[$key]['imageName'] = $str;

		}
		return $result ;
			
	}
