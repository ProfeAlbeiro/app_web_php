<?php
    require_once "models/Suscriptor.php";
    class Users{

        public function main(){
            echo "Función Principal del controlador Users";
        }
        
        // Usuario: Registrar
        public function user_create(){
            $suscriptor = new Suscriptor;
            $suscriptor->setLastName("Ramos");
            echo "<br>Apellido: " . $suscriptor->getUserLastName();
        }

        // Usuario: Consultar

        // Usuario: Actualizar
        
        // Usuario: Eliminar



    }
?>