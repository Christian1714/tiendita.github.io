$(document).ready(function () {
    // Agregar producto al carrito
    $('.agregar').click(function () {
        var producto = $(this).parent().clone();
        producto.find('.agregar').remove();
        var quitarBtn = $('<button class="quitar">Quitar</button>');
        producto.append(quitarBtn);
        $('#lista-carrito').append(producto);
    });

    // Quitar producto del carrito
    $(document).on('click', '.quitar', function () {
        $(this).parent().remove();
    });

    // Enviar pedido por WhatsApp
    $('#enviar-compra').click(function () {
        var pedido = '';
        $('#lista-carrito .producto').each(function () {
            var nombre = $(this).find('h3').text();
            pedido += nombre +
            '%0A'; // Agrega el nombre del producto al pedido, %0A es el código para salto de línea en WhatsApp
        });

        var numeroWhatsapp = '0963102886'; // Reemplaza con tu número de WhatsApp

        var urlWhatsapp = 'https://api.whatsapp.com/send?phone=' + numeroWhatsapp + '&text=' +
            encodeURIComponent(pedido);
        window.open(urlWhatsapp, '_blank');
    });
});