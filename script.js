document.addEventListener('DOMContentLoaded', function() {
    const whatsappButtons = document.querySelectorAll('.whatsapp-btn');

    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.getAttribute('data-name');
            const productPrice = this.getAttribute('data-price');
            const message = encodeURIComponent(`Hola, estoy interesado en el producto: *${productName}* (${productPrice}). ¿Cómo puedo adquirirlo?`);
            const phoneNumber = '584123456789'; // Reemplaza con tu número de WhatsApp
            window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
        });
    });
});
