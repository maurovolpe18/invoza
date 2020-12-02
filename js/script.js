$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top

            }, 900, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;

            });


        } // End if

    });


    $(window).scroll(function() {

        if ($(window).scrollTop() > 0) {
            $('#navegacion').addClass("nav-sticky sticky back-white fixed-top")
            $('#navbar').removeClass("navbar")
            $("#navbar").addClass("navbar-scroll")

        } else {
            $("#navbar").removeClass("navbar-scroll")
            $("#navbar").addClass("navbar")
            $('#navegacion').removeClass("nav-sticky sticky back-white fixed-top")
        }

    })

    $("#logo").on("click", function(event) {
        $('html, body').animate({
            scrollTop: $("#home").offset().top

        }, 900)
    })


    var owl = $('.owl-carousel');
    owl.owlCarousel();
    // Go to the next item
    $('.customNextBtn').click(function() {
            owl.trigger('next.owl.carousel');
        })
        // Go to the previous item
    $('.customPrevBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })

    //formulario

    $("#formulario").on("click", function(e) {
        e.preventDefault()

    })


    $("#enviar").on("click", function(e) {
        e.preventDefault()
        var nombre = $("#nombre").val();
        var email = $("#email").val();
        var password = $("#password").val();


        if (nombre < 2) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Nombre debe ser mayor a 2 carácteres',

            })
        } else if (email < 5) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'email debe ser mayor a 5 carácteres',

            })
        } else if (password < 6) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'passwor debe ser mayor a 6 carácteres',

            })
        } else {

            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
            )
        }
    })



    // $("#formulario").on("click", function(e) {
    //     e.preventDefault()

    // })

    // $("#enviar").on("click", function(e) {
    //     e.preventDefault();
    //     var parametros = {
    //         "nombre": $("#nombre").val(),
    //         "email": $("#email").val(),
    //         "password": $("#password").val()
    //     };
    //     $.ajax({
    //         data: parametros, //datos que se envian a traves de ajax
    //         url: 'http://localhost:3000/usuario', //archivo que recibe la peticion
    //         type: 'post', //método de envio
    //         beforeSend: function() {
    //             $("#formulario").html("Procesando, espere por favor...");
    //         },
    //         success: function(response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
    //             $("#formulario").html(response);
    //         }
    //     });
    // })



    // Newsletter
    const suscribes = $("#suscribes")
    const suscribe = $("#suscribe")


    suscribes.on("click", function(e) {
        e.preventDefault()
    })
    suscribe.on("click", function(e) {
        e.preventDefault()
        const newsletter = $("#newsletter").val()
        if (newsletter < 1) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Nombre debe ser mayor a 2 carácteres',

            })

        } else {
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
            )
        }
    })


    //meses
    const month = $("#month")
    const year = $("#year")
    const pMonth = $(".plan__mo")
    const pYear = $('.plan__ye')

    year.on("click", function() {

        year.addClass("back-blue")
        month.removeClass("back-blue");
        pMonth.addClass("hidden")
        pYear.removeClass("hidden")

    })
    month.on("click", function() {

        year.removeClass("back-blue")
        month.addClass("back-blue");
        pMonth.removeClass("hidden")
        pYear.addClass("hidden")
    })
    $(window).load()





});