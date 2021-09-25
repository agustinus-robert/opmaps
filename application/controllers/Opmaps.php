<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Opmaps extends CI_Controller {
    
    public function index(){
        $this->load->view('header');
        $this->load->view('mpv/index');
        $this->load->view('footer');
    }
    
    public function index_random(){
        $this->load->view('header');
        $this->load->view('mpv/random');
        $this->load->view('footer');
    }
    
    public function save_data(){
        $this->load->model('model_maps','mp');
        
        $hasil = '';
        foreach($this->input->post('text-data') as $k => $v){
            $hasil .= str_replace(' ','', $v).','; 
        }
        
        $nama = $this->input->post('nama_jalan');
        $jumlah = $this->input->post('jumlah');
        
        $hasil = rtrim($hasil,',');
        
        $data = [
            'data_maps' =>  $hasil,
            'nama_jalan' => $nama,
            'jumlah' => $jumlah
        ];
        
        $this->mp->insert($data);
    }
    
    public function save_data2(){
        $this->load->model('model_maps','mp');
        
        $hasil = '';
        foreach($this->input->post('text-data') as $k => $v){
            $hasil .= str_replace(' ','', $v); 
        }
        
        $nama = $this->input->post('nama_jalan');
        $id_leaflet = $this->input->post('id_leflet');
        $jumlah = $this->input->post('jumlah');
        
        $data = [
            'id_leaflet' =>  $id_leaflet,
            'nama_jalan' => $nama,
            'jumlah' => $jumlah
        ];
        
        $this->mp->insert_data_koordinat($data, $hasil);
           
        
        
    }
    
    public function geo_data()
    {
        $q = "
			select 
			data_maps,nama_jalan,jumlah
            from tabel_maps
		";

        $query = $this->db->query($q)->result_array();

        $geojson = [
            'type' => 'FeatureCollection',
            'features' => []
        ];

        if (count($query) > 0) {
            foreach ($query as $k => $v) {
                $feature[0] = json_decode($v['data_maps']);  
                
                
                $feature[0]->properties = ['id'=> $feature[0]->properties->id, 'nama_jalan' => $v['nama_jalan'], 'jumlah' => $v['jumlah']];
            }
            
            $geojson['features'] = $feature;
        } else {
            $geojson = [
                'type' => 'FeatureCollection',
                'features' => []
            ];
        }
        echo json_encode($geojson);
    }
    
    public function get_data_statis(){
        
    }
}