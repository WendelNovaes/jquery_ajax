function consultaCep(){
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "http://viacep.com.br/ws/" + cep + "/json/";
    console.log(url)
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("uf").innerHTML = response.uf;
            document.getElementById("ibge").innerHTML = response.ibge;
            document.getElementById("titulo_cep").innerHTML = "CEP " + response.cep;
            $(".cep").show();
            $(".barra-progresso").hide();
        }

    })
}

$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
})