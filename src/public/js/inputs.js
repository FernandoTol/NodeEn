var campos_max = 10;  //Es la cantidad maxima de encuestas que se pueden agregar para las encuestas
var x = 2;
$('#add_field').click(
    function (e) {
        e.preventDefault(); //Es para evitar muchos clirk simultaneos
        if (x < campos_max) {
            $('#listas').append(
                '<div class="row">\
                <div class="col-md-10">\
                <input type="text" name="response" placeholder="Respuesta '+ x + '"  class="form-control input" required>\
                </div>\
                <a href="#" class="remover_campo"><img src="/images/icons/delete.png" ></a>\
            </div>');
            x++;
        }
    }
);
$('#listas').on("click", ".remover_campo", function (e) {
    e.preventDefault();
    $(this).parent('div').remove();
    x--;
});

