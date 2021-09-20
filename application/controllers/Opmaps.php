<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Opmaps extends CI_Controller {
    
    public function index(){
        $this->load->view('header');
        $this->load->view('mpv/index');
        $this->load->view('footer');
    }
}