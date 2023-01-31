const province=document.querySelector('#province');
const telephone=document.querySelector('#Telephone');
const patate=document.querySelector('#patate');
const pomme=document.querySelector('#pomme');

/**
 * pour afficher le nombre de patate dans range
 */
patate.oninput=function (){
    document.querySelector('#nbPatate').textContent=patate.value;
}

function differencePommPatate(patate="",pomme=""){
    return parseInt(patate,10)>parseInt(pomme,10);
}


function choixTelProvince(telephone="819", province="qc"){
    let regex = /\(?819(\) |-)?[0-9]{3}-?[0-9]{4}/;
    switch (province){
        case "on":
            regex=/\(?613(\) |-)?[0-9]{3}-?[0-9]{4}/;
            break;
        case "mb":
            regex = /\(?(204|431)(\) |-)?[0-9]{3}-?[0-9]{4}/
            break;
    }
    return regex.test(telephone);
}

document.querySelector("form").addEventListener('submit',function(evenement){
    //réinitialiser le message d,erreur
    document.querySelectorAll(".erreur").forEach(
        message=>message.classList.add("invisible"));
    let valider=true;
    if(!choixTelProvince(telephone.value,province.value)){
        valider=false;
        document.querySelector("#province + .erreur").classList.remove("invisible");
    }
    if(!differencePommPatate(patate.value,pomme.value)){
        valider=false;
        document.querySelector("#commande .erreur").classList.remove("invisible");
    }
    if (!valider){
        evenement.preventDefault();
    }
});