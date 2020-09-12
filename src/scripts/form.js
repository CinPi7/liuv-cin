function showFormB2B() {
    let form = document.getElementById("formb2b");
    if(form.style.display === "none"){
        form.style.display = "block";
    }
    else {
        form.style.display = "none";
    }
} 

$(document).ready(function() {
    Materialize.updateTextFields();
});

$('#textarea1').val('');
$('#textarea1').trigger('autoresize');
      
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });

  $(document).ready(function(){
    $('select').formSelect();
});

$('#textarea1').val('Mensagem');
$('#textarea1').trigger('autoresize');
        