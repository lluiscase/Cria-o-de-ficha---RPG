const l = document.getElementById("info-classe")
bu1 = document.getElementById("buttonigneo")
invisivel1 = document.getElementById("igvis")
bu2 = document.getElementById("buttonnomade")
invisivel2 = document.getElementById("novis")
bu3 = document.getElementById("buttonaureo")
invisivel3 = document.getElementById("auvis")
ficha = document.getElementById("ficha")

const submit = document.createElement("BUTTON");
submit.setAttribute("onclick", "getVal()");
submit.setAttribute("id", "submit");
submit.textContent = "Submit";
submit.classList.add('box');

function readigneo(){
    if(invisivel1.style.display === 'none'){
        invisivel1.style.display = 'block'
        bu1.innerHTML = "Menos"
    }else{
        invisivel1.style.display = 'none'
        bu1.innerHTML = "Leia mais"
    }}

function readnomade(){
    if(invisivel2.style.display === 'none'){
        invisivel2.style.display = 'block'
        bu2.innerHTML = "Menos"
    }else{
        invisivel2.style.display = 'none'
        bu2.innerHTML = "Leia mais"
    }}

function readaureo(){
    if(invisivel3.style.display === 'none'){
        invisivel3.style.display = 'block'
        bu3.innerHTML = "Menos"
    }else{
        invisivel3.style.display = 'none'
        bu3.innerHTML = "Leia mais"
    }}

//Resolver o problema do pv na tribo sangue
function getVal() {
    //Escolhas
    const e = document.getElementsByName("sangue")
    for(i = 0; i < e.length; i++){
        if(e[i].checked){
            document.getElementById("info-escolha").innerHTML = 'Escolha da tribo sangue \n' + e[i].value
            if(e[i].value == 'Simbolo de defesa'){
                let infoclasse = document.getElementById('info-classe')
                infoclasse.classList.add("defesa")
            }else{
                let infoclasse = document.getElementById('info-classe')
                infoclasse.classList.add("ataque")
            }
            }else{
                document.getElementById("info-escolha").innerHTML = ''
            }
        }
    const el = document.getElementsByName("arte")
    for(i = 0; i < el.length; i++){
        if(el[i].checked){
            document.getElementById("info-escolha").innerHTML = 'Escolha da tribo arte \n' + el[i].value
        }else{
            document.getElementById("info-escolha").innerHTML = ''
            }
        }
    const ele = document.getElementsByName("banidos")
        for(i = 0; i < ele.length; i++){
            if(ele[i].checked){
                document.getElementById("info-escolha").innerHTML = 'Escolha da tribo banido \n' + ele[i].value
            }
        }
        
        const elem = document.getElementsByName("artefatos")
        for(i = 0; i < elem.length; i++){
            if(elem[i].checked){
                document.getElementById("info-escolha").innerHTML = 'Escolhas da tribo artefato \n' + elem[i].value 
            }else{
                document.getElementById("info-escolha").innerHTML = ''
            }
        }
        document.getElementById("info-nome").innerHTML = 'Nome: \n' +document.getElementById("nome").value
        document.getElementById("info-idade").innerHTML = 'Idade: \n' +document.getElementById("idade").value
        
        if(l.classList.contains("defesa")){
            document.getElementById("info-vida").innerHTML = "Vida: 40"
        }
        else if(l.classList.contains("ataque")){
            l.classList.remove("defesa")
            document.getElementById("info-vida").innerHTML = "Vida: 30"
        }
        else{
            document.getElementById("info-vida").innerHTML = "Vida: \n" + document.getElementById("vida").value
        }
    
    document.getElementById("info-defesa").innerHTML = 'Defesa: \n' +document.getElementById("defesa").value
    document.getElementById("info-força").innerHTML = 'Força: \n' +document.getElementById("força").value
    if(l.classList.contains("alma")){
        document.getElementById("info-mental").innerHTML = "Mental: 40"
    }else{
        document.getElementById("info-mental").innerHTML = 'Mental: \n' +document.getElementById("mental").value
    }
    
    document.getElementById("info-adaptação").innerHTML = 'Adaptação: \n' +document.getElementById("adaptação").value
    document.getElementById("info-tatica").innerHTML = 'Tática: \n' +document.getElementById("tatica").value
    document.getElementById("info-fortitude").innerHTML = 'Fortitude: \n' +document.getElementById("fortitude").value
    document.getElementById("info-furtividade").innerHTML = 'Furtividade: \n' +document.getElementById("furtividade").value
    document.getElementById("info-astuto").innerHTML = 'Astuto: \n' +document.getElementById("astuto").value
    document.getElementById("info-atletismo").innerHTML = 'Atletismo: \n' +document.getElementById("atletismo").value
    document.getElementById("info-carisma").innerHTML = 'Carisma: \n' +document.getElementById("carisma").value
    document.getElementById("info-intimidação").innerHTML = 'Intimidação: \n' +document.getElementById("intimidação").value
    document.getElementById("info-diplomacia").innerHTML = 'Diplomacia: \n' +document.getElementById("diplomacia").value
    document.getElementById("info-sabedoria").innerHTML = 'Sabedoria: \n' +document.getElementById("sabedoria").value
    
    document.getElementById("ficha-final").style.display = "block"
    document.getElementById("ficha").style.display = 'none'
    window.alert("Mande um print da pagina com as informações para o mestre, assim irei criar o seu passaporte que será entregue dentro de alguns dias")
    removelements()
}


function removelements(){
    document.getElementById("mental").disabled = false
    document.getElementById("vida").disabled =false
    const boxes = document.querySelectorAll('.box')
    boxes.forEach(box => {
    box.remove()
});
}

function sangueform(){
    removelements()
    if(ficha.style.display ==='none'){
        ficha.style.display = 'block'
        let title = document.createElement("h3")
        let sangue = document.createTextNode("Sistema de sangue")
        title.classList.add('box');
        title.appendChild(sangue)
        document.body.appendChild(title)

        var bene = document.createElement("P");
        var sistemabene = document.createTextNode("Passiva: regenera 2 pontos de vida entre combates, sangramentos não causam efeito");
        var puni = document.createElement("P");
        var sistemapuni = document.createTextNode("Punições: Ambientes gelados podem te matar");
        puni.appendChild(sistemapuni);
        puni.classList.add('box');
        document.body.appendChild(puni);
        bene.appendChild(sistemabene);
        bene.classList.add('box');
        document.body.appendChild(bene);
       
        let defesa = document.createElement("INPUT");
        defesa.setAttribute("type", "radio");
        defesa.setAttribute("name", "sangue");
        defesa.setAttribute("value", "Simbolo de defesa")
        defesa.classList.add('box');
        document.body.appendChild(defesa);
        let imgdef = document.createElement("img")
        imgdef.setAttribute("src", "./img/Simbolo defesa.png");
        imgdef.classList.add('box');
        document.body.appendChild(imgdef);
        var infodef = document.createElement("P");
        var textdef = document.createTextNode("Símbolo de defesa: permite reforçar seu sangue e criar uma camada de defesa ganhando +5 de defesa. Pode reforçar a defesa de um aliado, porém custa pontos de vida em até 3pv, valor ganho de defesa sendo o mesmo que o gasto. pré-definido: 40 de vida");
        infodef.appendChild(textdef);
        infodef.classList.add('box');
        document.body.appendChild(infodef);

        let ataque = document.createElement("INPUT");
        ataque.setAttribute("type", "radio");
        ataque.setAttribute("name", "sangue");
        ataque.setAttribute("value", "Simbolo de ataque")
        ataque.classList.add('box');
        document.body.appendChild(ataque);
        let imgata = document.createElement("img")
        imgata.setAttribute("src", "./img/Simbolo de ataque.png");
        imgata.classList.add('box');
        document.body.appendChild(imgata);
        var infoata = document.createElement("P");
        var textata = document.createTextNode("Símbolo de ataque: permite reforçar seus ataques com sangue, porém gasta 3pv por ataque e ganha mais 5 de força. pré-definido: 30 de vida");
        infoata.appendChild(textata);
        infoata.classList.add('box');
        document.body.appendChild(infoata);

        document.getElementById("info-nacionalidade").innerHTML = "Igneo"
        document.getElementById("info-classe").innerHTML = "Tribo: Sangue"
        document.getElementById("vida").disabled = true;

        document.body.appendChild(submit)
        
    }else{
        ficha.style.display ='none'
    }
}

function almaform(){
    removelements()
    if(ficha.style.display ==='none'){
        ficha.style.display = 'block'

        let title = document.createElement("h3")
        let alma = document.createTextNode("Sistema de alma")
        title.appendChild(alma)
        title.classList.add('box');
        document.body.appendChild(title)

        var bene= document.createElement("P");
        var sistemabene = document.createTextNode("Passiva: Não pode ser possuído por inimigos e pode restaurar o mental em 50% caso encontre uma alma amigável, porém quanto mais baixo o mental mais fácil de invocar uma alma mais forte e mais fácil de ter transtornos. Você tem pré-definido 40 de mental");
        var puni = document.createElement("P");
        var sistemapuni = document.createTextNode("Punições: seu mental é maior, porém ele decai a cada combate (perde 5 de mental), todas suas habilidades têm chance de te causar algum tipo de transtorno (caso tire menos que 9 no dado em qualquer habilidade e tenha mental abaixo de 20)");
        puni.appendChild(sistemapuni);
        puni.classList.add('box');
        document.body.appendChild(puni);
        bene.appendChild(sistemabene);
        bene.classList.add('box');
        document.body.appendChild(bene);

        let listamagias = document.createElement("P")
        magias = document.createTextNode("Pessoas que seguem os rituais desta tribo, conseguem usufruir de almas dos mortos no local de batalha, inicialmente tendo 2 habilidades, 1° consegue escutar as vozes das almas e invocá-las baseado em seu mental (Caso seu mental seja de 0-10, pode trazer monstros, assassinos, justiceiros. Caso seu mental seja de 11-20, pode trazer animais de grande porte, guerreiros sem vontade. Caso seu mental seja de 21-40, pode trazer animais de pequeno porte, aldeões), 2° consegue possuir o inimigo caso tire 15 no dado")
        listamagias.appendChild(magias)
        listamagias.classList.add('box');
        document.body.appendChild(listamagias);

        document.getElementById("info-nacionalidade").innerHTML = "Igneo"
        document.getElementById("info-classe").innerHTML = "Tribo: Alma"

        document.getElementById("mental").disabled = true;

        document.body.appendChild(submit)
        l.classList.add("alma")

    }else{
        ficha.style.display ='none'
    }
}

function exploradoresform(){
    removelements()
    if(ficha.style.display ==='none'){
        ficha.style.display = 'block'
        let title = document.createElement("h3")
        let artefato = document.createTextNode("Sistema dos exploradores")
        title.classList.add('box');
        title.appendChild(artefato)
        document.body.appendChild(title)

        var bene = document.createElement("P");
        var sistemabene = document.createTextNode("Passiva: Pode carregar um artefato inicialmente e outros caso encontre");
        var puni = document.createElement("P");
        var sistemapuni = document.createTextNode("Punições: Não tem nenhuma resistência ");
        puni.appendChild(sistemapuni);
        puni.classList.add('box');
        document.body.appendChild(puni);
        bene.appendChild(sistemabene);
        bene.classList.add('box');
        document.body.appendChild(bene);

        let bola = document.createElement("INPUT");
        bola.setAttribute("type", "radio");
        bola.setAttribute("id", "bola");
        bola.setAttribute("name","artefatos")
        bola.setAttribute("value","bola")
        bola.classList.add('box');
        document.body.appendChild(bola);
        let imgbola = document.createElement("img")
        imgbola.setAttribute("src", "./img/bola.gif");
        imgbola.classList.add('box');
        document.body.appendChild(imgbola);
        var infobola = document.createElement("P");
        var textbola = document.createTextNode("Uma bola? **********************************************************");
        infobola.appendChild(textbola);
        infobola.classList.add('box');
        document.body.appendChild(infobola);

        let espelho = document.createElement("INPUT");
        espelho.setAttribute("type", "radio");
        espelho.setAttribute("id", "espelho");
        espelho.setAttribute("name","artefatos")
        espelho.setAttribute("value","espelho")
        espelho.classList.add('box');
        document.body.appendChild(espelho);
        let imgespelho = document.createElement("img")
        imgespelho.setAttribute("src", "./img/Espelho.png");
        imgespelho.classList.add('box');
        document.body.appendChild(imgespelho);
        var infoespelho = document.createElement("P");
        var textespelho = document.createTextNode("Espelho, em combate cria um clone seu com 1 de vida podendo alternar em defesa e ataque, se colocado no modo de defesa defende o dano por completo, no ataque ele se joga no inimigo e atordoa.");
        infoespelho.appendChild(textespelho);
        infoespelho.classList.add('box');
        document.body.appendChild(infoespelho);

        let mascara = document.createElement("INPUT");
        mascara.setAttribute("type", "radio");
        mascara.setAttribute("id", "mascara");
        mascara.setAttribute("name","artefatos")
        mascara.setAttribute("value","mascara")
        mascara.classList.add('box');
        document.body.appendChild(mascara);
        let imgmascara = document.createElement("img")
        imgmascara.setAttribute("src", "./img/mascara.png");
        imgmascara.classList.add('box');
        document.body.appendChild(imgmascara);
        var infomascara = document.createElement("P");
        var textmascara = document.createTextNode("Máscara, pode ser usado para pegar informações forçando o alvo contar a verdade. Pode direcionar ações ao inimigo quanto mais forte a palavra maior a chance de te causar um transtorno");
        infomascara.appendChild(textmascara);
        infomascara.classList.add('box');
        document.body.appendChild(infomascara);

        document.getElementById("info-nacionalidade").innerHTML = "Nômades"
        document.getElementById("info-classe").innerHTML = "Tribo: Exploradores"

        document.body.appendChild(submit)

    }else{
        ficha.style.display ='none'
    }
}

function banidosform(){
    removelements()
    if(ficha.style.display ==='none'){
        ficha.style.display = 'block'
        let title = document.createElement("h3")
        let banido = document.createTextNode("Sistema dos banidos")
        title.classList.add('box');
        title.appendChild(banido)
        document.body.appendChild(title)

        var bene = document.createElement("P");
        var sistemabene = document.createTextNode("Passiva: conseguem consertar armas");
        var puni = document.createElement("P");
        var sistemapuni = document.createTextNode("Punições: São mais fracos a rituais, podendo afetar seu mental ");
        puni.appendChild(sistemapuni);
        puni.classList.add('box');
        document.body.appendChild(puni);
        bene.appendChild(sistemabene);
        bene.classList.add('box');
        document.body.appendChild(bene);

        let samurai = document.createElement("INPUT");
        samurai.setAttribute("type", "radio");
        samurai.setAttribute("name", "banidos");
        samurai.setAttribute("value", "samurai");
        samurai.classList.add('box');
        document.body.appendChild(samurai);
        var infosamurai = document.createElement("P");
        var textsamurai = document.createTextNode("Samurai, tem uma armadura e uma katana, armadura da mais 3 de defesa. Ataques cortantes não surtem efeito");
        infosamurai.appendChild(textsamurai);
        infosamurai.classList.add('box');
        document.body.appendChild(infosamurai);

        let pistoleiro = document.createElement("INPUT");
        pistoleiro.setAttribute("type", "radio");
        pistoleiro.setAttribute("name", "banidos");
        pistoleiro.setAttribute("value", "pistoleiro");
        pistoleiro.classList.add('box');
        document.body.appendChild(pistoleiro);
        var infopistoleiro = document.createElement("P");
        var textpistoleiro = document.createTextNode("Pistoleiro, carrega duas pistolas, todo ataque é multiplicado por 2 pela quantidade do dado");
        infopistoleiro.appendChild(textpistoleiro);
        infopistoleiro.classList.add('box');
        document.body.appendChild(infopistoleiro);

        let assassino = document.createElement("INPUT");
        assassino.setAttribute("type", "radio");
        assassino.setAttribute("name", "banidos");
        assassino.setAttribute("value", "assassino");
        assassino.classList.add('box');
        document.body.appendChild(assassino);
        var infoassassino = document.createElement("P");
        var textassassino = document.createTextNode("Assassino, consegue causar sangramento se tirar no dado mais que 10, se o assassino tiver mais vida que o inimigo ele executa(tirando 20 no dado), este efeito só se aplica a inimigos simples, inimigos denominados como boss NÃO funciona. Resistente a venenos");
        infoassassino.appendChild(textassassino);
        infoassassino.classList.add('box');
        document.body.appendChild(infoassassino);

        document.getElementById("info-nacionalidade").innerHTML = "Nômades"
        document.getElementById("info-classe").innerHTML = "Tribo: Banidos"

        document.body.appendChild(submit)

    }else{
        ficha.style.display ='none'
    }
}

function arteform(){
    removelements()
    if(ficha.style.display ==='none'){
        ficha.style.display = 'block'
        let title = document.createElement("h3")
        let arte = document.createTextNode("Sistema de arte")
        title.classList.add('box');
        title.appendChild(arte)
        document.body.appendChild(title)

        var bene = document.createElement("P");
        var sistemabene = document.createTextNode("Passiva: Carrega consigo uma lanterna (gasta 5 de energia a cada vez usada, para reabastecer precisará de runa da luz (não pode desenhar ou molda-lá), a runa de luz nada mais é uma pedra com poderes você carrega 2 inicialmente) que regenera seu mental em 1 e da equipe em 0.5. Lanterna tem combustível inicial 50");
        var puni = document.createElement("P");
        var sistemapuni = document.createTextNode("Punições: Precisa de uma lanterna para pintar e não perder o mental (são medrosos por natureza, facilmente seu mental cai)");
        puni.appendChild(sistemapuni);
        puni.classList.add('box');
        document.body.appendChild(puni);
        bene.appendChild(sistemabene);
        bene.classList.add('box');
        document.body.appendChild(bene);

        let Moldes = document.createElement("INPUT");
        Moldes.setAttribute("type", "radio");
        Moldes.setAttribute("name", "arte");
        Moldes.setAttribute("value", "moldes");
        Moldes.classList.add('box');
        document.body.appendChild(Moldes);
        var infoMoldes = document.createElement("P");
        var textMoldes = document.createTextNode("Moldes (moldes de argila, pedra, mármore, marionetes), carrega consigo uma bolsa que tem várias matérias primas para fazer seus moldes(Crie o que quiser(NENHUMA ARMA DE FOGO OU BRANCA), contanto que pergunte ao mestre e ele aceite)");
        infoMoldes.appendChild(textMoldes);
        infoMoldes.classList.add('box');
        document.body.appendChild(infoMoldes);

        let pincel = document.createElement("INPUT");
        pincel.setAttribute("type", "radio");
        pincel.setAttribute("name", "arte");
        pincel.setAttribute("value", "pincel");
        pincel.classList.add('box');
        document.body.appendChild(pincel);
        var infopincel = document.createElement("P");
        var textpincel = document.createTextNode("Pincel, crie o que quiser (NENHUMA ARMA DE FOGO OU BRANCA), contanto que pergunte ao mestre e ele aceite), com tinta de pedras rúnicas");
        infopincel.appendChild(textpincel);
        infopincel.classList.add('box');
        document.body.appendChild(infopincel);

        document.getElementById("info-nacionalidade").innerHTML = "Áureo"
        document.getElementById("info-classe").innerHTML = "Tribo: Arte"

        document.body.appendChild(submit)

    }else{
        ficha.style.display ='none'
    }
}

function automataform(){
    removelements()
    if(ficha.style.display ==='none'){
        ficha.style.display = 'block'
        let title = document.createElement("h3")
        let automata = document.createTextNode("Sistema de automata")
        title.classList.add('box');
        title.appendChild(automata)
        document.body.appendChild(title)

        var bene = document.createElement("P");
        var sistemabene = document.createTextNode("Passiva: seu personagem está dentro de um automata, podendo consertar, os atributos definidos por essa classe serão para o robo. Atributo base de quem está dentro: 10 de vida 0 nos atributos restantes");
        var puni = document.createElement("P");
        var sistemapuni = document.createTextNode("Punições: se o automata quebrar seu personagem sai, ele é indefeso e não ataca apenas corre");
        puni.appendChild(sistemapuni);
        puni.classList.add('box');
        document.body.appendChild(puni);
        bene.appendChild(sistemabene);
        bene.classList.add('box');
        document.body.appendChild(bene);

        let listamodificadores = document.createElement("P")
        modificador = document.createTextNode("1º modo armadura, todo seu ponto de força vira defesa. 2º garra extensora, dispara uma garra para pegar criaturas ou objetos. 3º canhão elétrico, dispara uma explosão de choque")
        listamodificadores.appendChild(modificador)
        listamodificadores.classList.add('box');
        document.body.appendChild(listamodificadores);

        document.getElementById("info-nacionalidade").innerHTML = "Áureo"
        document.getElementById("info-classe").innerHTML = "Tribo: Automatas"
        
        document.body.appendChild(submit)


    }else{
        ficha.style.display ='none'
    }
}
