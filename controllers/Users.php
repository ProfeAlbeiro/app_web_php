<?php
    require_once "models/Suscriptor.php";
    class Users{

        public function main(){
            echo "Función Principal del controlador Users";
        }
        
        // Usuario: Registrar
        public function user_create(){
            $suscriptor2 = new Suscriptor("profealbeiro2020@gmail.com", sha1("12345"));
            $suscriptor1 = new Suscriptor(
                null,
                "Ramos",
                "Albeiro",
                "1980-02-01",
                "Hombre",
                "En proceso",
                30,
                "Av. Siempre Viva",
                "123456789",
                "987654315",
                "profealbeiro2020@gmail.com",
                "peligro",
                md5("12345"),
                1
            );
            // $suscriptor->setUserLastName("Ramos");
            // echo "<br>Apellido: " . $suscriptor->getUserLastName();
            // $suscriptor->setUserName("Albeiro");
            // echo "<br>Nombre: " . $suscriptor->getUserName();
        }

        // Usuario: Consultar

        // Usuario: Actualizar
        
        // Usuario: Eliminar



    }
?>