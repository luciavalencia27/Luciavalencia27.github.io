
// Obtiene los elementos del DOM

// Elemento del DOM para el enlace "¿Olvidaste tu contraseña?" en el formulario
const forgotPasswordLink = document.getElementById('forgotPassword');

// Elemento del DOM para la ventana modal que se muestra para recuperar la contraseña
const modal = document.getElementById('forgotPasswordModal');

// Elemento del DOM para el botón de cierre ('X') dentro de la ventana modal
const closeBtn = document.getElementsByClassName('close')[0];

// Función que se ejecuta cuando se hace clic en el enlace "¿Olvidaste tu contraseña?"
forgotPasswordLink.onclick = function() {
  // Muestra la ventana modal estableciendo su propiedad `display` a 'block'
  modal.style.display = 'block';
}

// Función que se ejecuta cuando se hace clic en el botón de cierre ('X')
closeBtn.onclick = function() {
  // Oculta la ventana modal estableciendo su propiedad `display` a 'none'
  modal.style.display = 'none';
}

// Función que se ejecuta cuando se hace clic en cualquier parte de la ventana
window.onclick = function(event) {
  // Si el clic fue en el elemento modal, cierra el modal
  if (event.target == modal) {
    // Oculta la ventana modal estableciendo su propiedad `display` a 'none'
    modal.style.display = 'none';
  }
}

