<?php 
class Database{
    private $db_host = "localhost";
    private $db_user = "root";
    private $db_pass = "";
    private $db_name = "login-with-oop";
    public $pdo;
    public function __construct(){
       if( !isset( $this->pdo ) ){
            try{

            }catch{
                
            }
       } 
    }
}