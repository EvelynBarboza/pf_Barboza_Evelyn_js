    // ------------- GUARDAR DATOS DEL FORM ------------------

    const formulario = document.getElementById('datos-cliente');
    const aviso = document.getElementById('aviso');

    formulario.addEventListener('submit', function (evt) {
      evt.preventDefault();

      // ------------ OBTENER VALORES DE INPUT -----------------
      const nombre = document.getElementById('nombre').value;
      const correo = document.getElementById('correo').value;
      const consulta = document.getElementById('consulta').value

      // ---------------- GUARDAR VALORES EN LOCALSTORAGE -----------------
      localStorage.setItem('nombre', nombre);
      localStorage.setItem('correo', correo);
      localStorage.setItem('consulta', consulta);

    //------------- MOSTRAR AVISO --------------------
      aviso.textContent = 'Nos contactaremos contigo a la brevedad.';
      aviso.style.display = 'block';

      // ------------------ LIMPIAR FORM ----------------------
      formulario.reset();
    });

    // ------------------- CARGAR VALORES DEL LOCAL STORAGE ------------------
    /*window.addEventListener('load', function () {
      const nombreGuardado = localStorage.getItem('nombre');
      const correoGuardado = localStorage.getItem('correo');
      const consultaGuardada = localStorage.getItem('consulta');

      // ---------- VERIFICACION DE LOS VALORES PARA COMPLETAR CAMPOS -----------
      if (nombreGuardado) {
        document.getElementById('nombre').value = nombreGuardado;
      }
      if (correoGuardado) {
        document.getElementById('correo').value = correoGuardado;
      }
      if (consultaGuardada) {
        document.getElementById('consulta').value = consultaGuardada;
        }
    });*/

   