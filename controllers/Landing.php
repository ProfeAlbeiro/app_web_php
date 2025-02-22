<?php
    class Landing{
        // Atributos
        
        // Métodos
        public function main(){
            require_once "views/company/index.view.php";
        }
        
        // Formulario de Registro 
        public function register(){
            require_once "views/company/register.view.php";
        }
        
        public function goodJob(){
            require_once "views/company/correct.view.php";
        }
    }
?>