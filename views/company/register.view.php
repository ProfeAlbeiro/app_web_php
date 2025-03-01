    <!-- Start Content Page -->
    <div class="container-fluid bg-light py-5">
        <div class="col-md-6 m-auto text-center">
            <h1 class="h1">Regístrate</h1>
        </div>
    </div>

    <!-- Start Contact -->
    <div class="container py-5">
        <div class="row py-5">
            <form class="col-md-9 m-auto" action="?c=Users&a=user_create" method="post">
                <div class="row">                    
                    <div class="form-group col-md-6 mb-3">
                        <label for="inputname">Rol</label>
                        <input type="number" class="form-control mt-1" id="rol" name="rol" placeholder="Rol" required />
                    </div>
                    <div class="form-group col-md-6 mb-3">
                        <label for="inputemail">Apellido</label>
                        <input type="text" class="form-control mt-1" pattern="[ a-zA-ZáéíóúÁÉÍÓÚäëïöüÄËÏÖÜàèìòùÀÈÌÒÙñÑ]{2,50}" id="apellido" name="apellido" placeholder="Apellido" required />
                    </div>
                    <div class="form-group col-md-6 mb-3">
                        <label for="inputname">Nombre</label>
                        <input type="text" class="form-control mt-1" pattern="[ a-zA-ZáéíóúÁÉÍÓÚäëïöüÄËÏÖÜàèìòùÀÈÌÒÙñÑ]{2,50}" id="nombre" name="nombre" placeholder="Nombre" required />
                    </div>
                    <div class="form-group col-md-6 mb-3">
                        <label for="inputemail">Fecha</label>
                        <input type="date" class="form-control mt-1" id="fecha" name="fecha" placeholder="Fecha" required />
                    </div>
                    <div class="form-group col-md-6 mb-3">
                        <label for="inputname">Género</label>
                        <input type="text" class="form-control mt-1" id="genero" name="genero" placeholder="Género" required />
                    </div>
                    <div class="form-group col-md-6 mb-3">
                        <label for="inputemail">Estado M</label>
                        <input type="text" class="form-control mt-1" id="estado_m" name="estado_m" placeholder="Estado Marital" required />
                    </div>
                    <div class="form-group col-md-6 mb-3">
                        <label for="inputname">Edad</label>
                        <input type="text" class="form-control mt-1" id="edad" name="edad" placeholder="Edad" required />
                    </div>
                    <div class="form-group col-md-6 mb-3">
                        <label for="inputemail">Dirección</label>
                        <input type="text" class="form-control mt-1" id="direccion" name="direccion" placeholder="Dirección" required />
                    </div>
                    <div class="form-group col-md-6 mb-3">
                        <label for="inputname">Teléfono</label>
                        <input type="text" class="form-control mt-1" id="telefono" name="telefono" placeholder="Teléfono" required />
                    </div>
                    <div class="form-group col-md-6 mb-3">
                        <label for="inputemail">Celular</label>
                        <input type="text" class="form-control mt-1" id="celular" name="celular" placeholder="Celular" required />
                    </div>
                    <div class="form-group col-md-6 mb-3">
                        <label for="inputname">Email</label>
                        <input type="email" class="form-control mt-1" id="mail" name="mail" placeholder="Email" required />
                    </div>
                    <div class="form-group col-md-6 mb-3">
                        <label for="inputname">Profesión</label>
                        <input type="text" class="form-control mt-1" id="profesion" name="profesion" placeholder="Profesión" required />
                    </div>
                    <div class="form-group col-md-6 mb-3">
                        <label for="inputemail">Contraseña</label>
                        <input type="password" class="form-control mt-1" id="pass" name="pass" placeholder="Contraseña" required />
                    </div>
                    <div class="form-group col-md-6 mb-3">
                        <label for="inputemail">Estado</label>
                        <input type="number" class="form-control mt-1" id="estado" name="estado" placeholder="Estado" required />
                    </div>
                </div>                         
                <div class="row">
                    <div class="col text-end mt-2">
                        <button type="button" class="btn btn-success btn-lg px-3" id="validar_registro">Enviar</button>
                    </div>
                </div>
            </form>
        </div>
    </div>