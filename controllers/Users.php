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
                $_POST["rol"],
                $_POST["apellido"],
                $_POST["nombre"],
                $_POST["fecha"],
                $_POST["genero"],
                $_POST["estado_m"],
                $_POST["edad"],
                $_POST["direccion"],
                $_POST["telefono"],
                $_POST["celular"],
                $_POST["mail"],
                $_POST["profesion"],
                $_POST["pass"],
                $_POST["estado"]
            );
            // print_r($suscriptor);
            $suscriptor->create_user();
            header("Location: ?c=Landing&a=goodJob");
        }

        // Usuario: Consultar

        // Usuario: Actualizar
        
        // Usuario: Eliminar



    }
?>