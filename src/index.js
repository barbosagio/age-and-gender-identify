const btn = document.getElementById('btn')
btn.addEventListener('click', verificarIdade)

function verificarIdade(){
    const data = new Date()
    let anoAtual = data.getFullYear()
    let formularioAno = document.getElementById('txtano')
    let resultado = document.getElementById('result')

    if (Number(formularioAno.value) === 0 || formularioAno.value > anoAtual){
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let formularioSexo = document.getElementsByName('radsex')
        let idade = anoAtual - Number(formularioAno.value)
        let img = document.getElementById('foto')

        if (formularioSexo[0].checked){
            if (idade >= 0 && idade < 10){
                resultado.innerHTML = `Você é uma criança com ${idade} anos`
                img.src = 'src/images/H/kid-h.png'
            } else if (idade <= 21 ){
                resultado.innerHTML = `Você é um adolescente com ${idade} anos`
                img.src = 'src/images/H/young-h.png'
            } else if ( idade <= 60){
                resultado.innerHTML = `Você é um adulto com ${idade} anos`
                img.src = 'src/images/H/adult-h.png'
            } else if (idade > 113) {
                img.src = 'src/images/H/more-old-h.png'
                resultado.innerHTML = ('Nascido em 27 de maio de 1909 na cidade de El Cobre, estado de Táchira, no oeste da Venezuela, Pérez é oficialmente o homem mais velho, de acordo com o Guinness World Record, que realizou a verificação em 4 de fevereiro.')
            } else {
                resultado.innerHTML = `Você é um idoso com ${idade} anos`
                img.src = 'src/images/H/old-h.png'
            }
        
        } else if (formularioSexo[1].checked){
            genero = 'Feminino'
            if (idade >= 0 && idade < 10){
                resultado.innerHTML = `Você é uma criança com ${idade} anos`
                img.src = 'src/images/M/kid-m.png'
            } else if (idade <= 24 ){
                resultado.innerHTML = `Você é uma adolescente com ${idade} anos`
                img.src = 'src/images/M/young-m.png'
            } else if ( idade <= 60){
                resultado.innerHTML = `Você é uma adulta com ${idade} anos`
                img.src = 'src/images/M/adult-m.png'
            } else if (idade > 118) {
                resultado.innerHTML = 'De acordo com o Livro dos Recordes, atualmente, o título de mulher mais velha do mundo pertence a freira francesa Lucile Randon, de 118 anos. A religiosa foi anunciada oficialmente como detentora do recorde em abril de 2022.'
                img.src = 'src/images/M/more-old-m.png'
            } else {
                resultado.innerHTML = `Você é uma idosa com ${idade} anos`
                img.src = 'src/images/M/old-m.png'
            }
        }
            resultado.appendChild(img)
    }

}