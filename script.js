function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.querySelector('#txtano')
    let res = document.querySelector('#res')
    let img = document.querySelector('#imagem')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let gênero = ''
        let img = document.createElement('img') //cria um img
        img.setAttribute('id', 'foto')
        if  (fsex[0].checked) {
            gênero = 'Homem'
             if (idade >= 0 && idade < 10) {
                 //criança
                 img.setAttribute('src' , 'bebe masculino.jpg') 
             }else if (idade < 21){
                 //jovem
                 img.setAttribute('src' , 'jovem masculino.jpg') 
             } else if (idade < 50){
                 //adulto
                 img.setAttribute('src' , 'adulto masculino.jpg')
             } else {
                 //idoso
                 img.setAttribute('src' , 'idoso masculino.jpg')
             }
         
 
         } else if (fsex[1].checked){
             gênero = 'Mulher'
             if (idade >= 0 && idade < 10) {
                     //criança 
             img.setAttribute('src' , 'bebe feminino.jpg')                    
             }else if (idade < 21){
                     //jovem
             img.setAttribute('src' , 'jovem feminino.jpg')
             } else if (idade < 50){
                     //adulto
             img.setAttribute('src' , 'adulto feminino.jpg')
             } else {
                  //idoso
             img.setAttribute('src' , 'idoso feminino.jpg')
                 }
         }
        res.style.textAlign = 'center' //centraliza o texto de resposta.
        res.innerHTML = ""; //limpando o conteúdo antes de adicionar o novo
        res.appendChild(img);
        const text = document.createElement("p");
        text.classList.add("text");
        text.innerText = `Detectamos o gênero ${gênero} com ${idade} anos.`;
        res.appendChild(text);
    }
}