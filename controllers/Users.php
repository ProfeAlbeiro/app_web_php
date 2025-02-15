<?php
    require_once "models/Suscriptor.php";
    class Users{

        public function main(){
            echo "Función Principal del controlador Users";
        }
        
        // Usuario: Registrar
        public function user_create(){
            $suscriptor = new Suscriptor(
                null,
                "Ramos",
                "Albeiro",
                "1870-05-01",
                "masculino",
                "vamo a ver",
                20,
                "Av. siempre viva",
                "123456789",
                "987645213",
                "profealbeiro2020@gmail.com",
                "peligro",
                md5("12345"),
                1,
            );
            print_r($suscriptor);
        }

        // Usuario: Consultar

        // Usuario: Actualizar
        
        // Usuario: Eliminar



    }
?>