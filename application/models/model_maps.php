<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Model_maps extends CI_Model {

    public function insert($data){
        $this->db->trans_start();
        
        $this->db->insert('tabel_maps', $data);
        
        $this->db->trans_complete();
        
        if($this->db->trans_status() === FALSE) {
            $this->db->trans_rollback();
            echo "ok";
        } else {
            $this->db->trans_commit();
            echo "salah";
        }
    }
}