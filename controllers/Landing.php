<?php
    class Landing{
        // Atributos
        
        // Métodos
        public function main(){
            require_once "views/company/header.view.php";
            require_once "views/company/index.view.php";
            require_once "views/company/footer.view.php";
        }
        
        // Formulario acerca de Nosotros
        public function about(){
            require_once "views/company/header.view.php";
            require_once "views/company/about.view.php";
            require_once "views/company/footer.view.php";
        }
        // Formulario de Registro 
        public function shop(){
            require_once "views/company/header.view.php";
            require_once "views/company/shop.view.php";
            require_once "views/company/footer.view.php";
        }
        // Formulario de Registro 
        public function register(){
            require_once "views/company/header.view.php";
            require_once "views/company/register.view.php";
            require_once "views/company/footer.view.php";
        }
    }
       
?>