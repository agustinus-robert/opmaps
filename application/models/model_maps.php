<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Model_maps extends CI_Model {

    public function insert($data){
        $this->db->trans_start();
        
        $this->db->insert('tabel_maps', $data);
        
        $this->db->trans_complete();
        
        if($this->db->trans_status() === FALSE) {
            $this->db->trans_rollback();
            echo "salah";
        } else {
            $this->db->trans_commit();
            echo "ok";
        }
    }
    
     public function insert2($data){
        $this->db->trans_start();
        
        $this->db->insert('tabel_data', $data);
        
        $this->db->trans_complete();
        
        if($this->db->trans_status() === FALSE) {
            $this->db->trans_rollback();
            echo "salah";
        } else {
            $this->db->trans_commit();
            $insert_id = $this->db->insert_id();

            return  $insert_id;
        }
    }
    
     public function insert_data_koordinat($data, $koordinat){
        try{
            $this->db->trans_start();
            
                if($this->db->insert('tabel_data', $data)){
                    $id_data = $this->db->insert_id();

                    $data_detail_koordinat = [
                      'id_map' => $id_data,
                      'tipe' =>  'Polygon',
                      'koordinat' => $koordinat
                    ];

                    $this->db->insert('tabel_koordinat', $data_detail_koordinat);
                }
       
            $this->db->trans_commit();
            echo "ok";
        
        } catch(Exception $e){
            $this->db->trans_rollback();
            echo log_message('error', sprintf('%s : %s : DB transaction failed. Error no: %s, Error msg:%s, Last query: %s', __CLASS__, __FUNCTION__, $e->getCode(), $e->getMessage(), print_r($this->db->last_query(), TRUE)));
        }
    }
}