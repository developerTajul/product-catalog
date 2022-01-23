<?php 
require_once('Session.php');
require_once('Database.php');
class User{
    private $db;
    public function __construct(){
        $this->db = new Database();
    }
}