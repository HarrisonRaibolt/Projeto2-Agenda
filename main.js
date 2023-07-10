const form = document.getElementById('form');
let linhas="";
const nome=[];
const numero= [];

form.addEventListener('submit', function(e){
e.preventDefault();

addLinha();
addTabela();


});

function addLinha(){
        const inputNome= document.getElementById('nome');
        const inputNum = document.getElementById('tel');
        
if(nome.includes(inputNome.value)&& numero.includes(inputNum.value)){
    alert("O contato que esta tentando adicionar já foi inserido");

}else {
    nome.push(inputNome.value);
    numero.push(inputNum.value);
}


        let linha= '<tr>';
        linha += `<td>Nome: ${inputNome.value}</td>`;
        linha += `<td>Número: ${inputNum.value}</td>`;
        linha += '</tr>'
        
        linhas += linha;
    
        inputNome.value ='';
        inputNum.value= '';
    }
    

function addTabela(){
    const corpoTabela= document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
    
}
