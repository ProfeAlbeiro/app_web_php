<?php

    class Suscriptor{
        // Atributos
        private $user_id;
        private $user_lastname;
        private $user_name;
        private $user_birthday;
        private $user_gender;
        private $user_maritalstatus;
        private $user_age;
        private $user_address;
        private $user_localphone;
        private $user_movil;
        private $user_email;
        private $user_profession;
        private $user_pass;
        private $user_status;

        // Sobrecarga de Constructores
        public function __construct(){
            try {
                // $this->dbh = DataBase::connection();
                $a = func_get_args();
                $i = func_num_args();
                if (method_exists($this, $f = '__construct' . $i)) {
                    call_user_func_array(array($this, $f), $a);
                }
            } catch (Exception $e) {
                die($e->getMessage());
            }            
        }

        // Constructor de 0 parámetros (inicio sesión)
        public function __construct0(){}

        // Constructor de 2 parámetros (inicio sesión)
        public function __construct2($user_email,$user_pass){        
            $this->user_email = $user_email;
            $this->user_pass = $user_pass;        
        }

        public function __construct14($user_id,$user_lastname,$user_name,$user_birthday,$user_gender,$user_maritalstatus,$user_age,$user_address,$user_localphone,$user_movil,$user_email,$user_profession,$user_pass,$user_status){        
            $this->user_id = $user_id;
            $this->user_lastname = $user_lastname;
            $this->user_name = $user_name;
            $this->user_birthday = $user_birthday;
            $this->user_gender = $user_gender;
            $this->user_maritalstatus = $user_maritalstatus;
            $this->user_age = $user_age;
            $this->user_address = $user_address;
            $this->user_localphone = $user_localphone;
            $this->user_movil = $user_movil;
            $this->user_email = $user_email;
            $this->user_profession = $user_profession;
            $this->user_pass = $user_pass;        
            $this->user_status = $user_status;
        }

        // Métodos setter y getter

        # Suscriptor: Id
        public function setUserId($user_id){
            $this->user_id = $user_id;            
        }
        public function getUserId(){
           return $this->user_id;
        }
        # Suscriptor: Apellido
        public function setLastName($user_lastname){
            $this->user_lastname = $user_lastname;            
        }
        public function getUserLastName(){
           return $this->user_lastname;
        }
        # Suscriptor: Apellido
        public function setUserLastName($user_lastname){
            $this->user_lastname = $user_lastname;            
        }
        public function getUserLastName(){
           return $this->user_lastname;
        }
        # Suscriptor: Nombre
        public function setUserName($user_name){
            $this->user_name = $user_name;            
        }
        public function getUserName(){
           return $this->user_name;
        }
        # Suscriptor: Cumpleaños
        public function setUserBirthday($user_birthday){
            $this->user_birthday = $user_birthday;            
        }
        public function getUserBirthday(){
           return $this->user_birthday;
        }
        # Suscriptor: Genero
        public function setUserGender($user_gender){
            $this->user_gender = $user_gender;            
        }
        public function getUserGender(){
           return $this->user_gender;
        }
        # Suscriptor: Estado Marital
        public function setUserMaritalStatus($user_maritalstatus){
            $this->user_maritalstatus = $user_maritalstatus;            
        }
        public function getUserMaritalStatus(){
           return $this->user_maritalstatus;
        }
        # Suscriptor: Edad
        public function setUserAge($user_age){
            $this->user_age = $user_age;            
        }
        public function getUserAge(){
           return $this->user_age;
        }
        # Suscriptor: Dirección
        public function setUserAddress($user_address){
            $this->user_address = $user_address;            
        }
        public function getUserAddress(){
           return $this->user_address;
        }
        # Suscriptor: Teléfono
        public function setUserLocalPhone($user_localphone){
            $this->user_localphone = $user_localphone;            
        }
        public function getUserLocalPhone(){
           return $this->user_localphone;
        }
        # Suscriptor: Móvil
        public function setUserMovil($user_movil){
            $this->user_movil = $user_movil;            
        }
        public function getUserMovil(){
           return $this->user_movil;
        }
        # Suscriptor: Correo
        public function setUserEmail($user_email){
            $this->user_email = $user_email;            
        }
        public function getUserEmail(){
           return $this->user_email;
        }
        # Suscriptor: Profesión
        public function setUserProfession($user_profession){
            $this->user_profession = $user_profession;            
        }
        public function getUserProfession(){
           return $this->user_profession;
        }
        # Suscriptor: Contraseña
        public function setUserPass($user_pass){
            $this->user_pass = $user_pass;            
        }
        public function getUserPass(){
           return $this->user_pass;
        }
        # Suscriptor: Estado
        public function setUserStatus($user_status){
            $this->user_status = $user_status;            
        }
        public function getUserStatus(){
           return $this->user_status;
        }

    }

?>