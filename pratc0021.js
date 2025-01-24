function verificar(){
    let ano = 2025
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    let img =document.getElementById('foto')
    
    if(fano.value.length == 0 || Number(fano.value) > ano){
      window.alert('[ERRO] O ano de nascimento não pode ser zero, e não pode ser maior que o ano atual (2025')
    } else {
      let fsex = document.getElementsByName('radsex')
      let idade = ano - Number(fano.value)
      let genero = ''
 
      if (fsex[0].checked){
        document.body.style.background= '#1f9ff3b8'
        genero = 'homem'
        
        if (idade >= 0 && idade < 10){
          //Criança
          img.src = "homemc.jpg"
        } else if(idade < 21){
          //Jovem
          img.src = "homemj.jpg"
        } else if( idade < 50){
        //Adulto
        img.src = "homemd.jpg"
        } else {
          //idoso
          img.src= "homemv.jpg"
        }
      }
       if (fsex[1].checked){
         document.body.style.background= '#e05bfeee'
        genero = 'mulher'
        if (idade >= 0 && idade < 10){
          //Criança
          img.src= 'mulherc.jpg'
        } else if(idade < 21){
          //Jovem
          img.src= "mulherj.jpg"
        } else if( idade < 50){
        //Adulto
        img.src= "mulherd.jpg"
        } else {
          //idoso
          img.src= "mulherv.jpg"
        }
       } 
      res.innerHTML = `Voce é um(a) ${genero} com ${idade} anos de idade`
    }
}