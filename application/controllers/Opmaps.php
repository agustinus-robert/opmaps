<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Opmaps extends CI_Controller {
    
    public function index(){
        $this->load->view('header');
        $this->load->view('mpv/index');
        $this->load->view('footer');
    }
    
    public function save_data(){
        $this->load->model('model_maps','mp');
        
        $hasil = '';
        foreach($this->input->post('text-data') as $k => $v){
            $hasil .= str_replace(' ','', $v).','; 
        }
        
        $hasil = rtrim($hasil,',');
        
        $data = [
            'data-maps' =>  $hasil
        ];
        
        $this->mp->insert($data);
    }
}