
function MudaDesenho(){
    const texto = document.querySelector("h1");
    const imagem = document.querySelector("img");
    const mes = document.querySelector('#valor').value;
    const dia = document.querySelector('#valor2').value;
    var msgg = window.document.getElementById('frase')
    var msg;

    const data = "2023" + "/"+ mes + "/" + dia;
    
    if(data >= "2023/05/21" && data <= "2023/06/20"){
        texto.innerHTML = "Gêmeos";
        imagem.setAttribute("src","img/gemeos.jpg");
        imagem.setAttribute("width","300px");
        msg ="Saga de Gêmeos é um poderoso cavaleiro de ouro, sendo considerado como o mais poderoso dentre os doze cavaleiros de ouro, ele era um exemplo de conduta e comprometimento para com sua deusa Athena. O cavaleiro de gêmeos possuía um irmão gêmeo chamado Kanon, que propôs que eles matassem Athena e comandassem o mundo."
    }

    else if(data >= '2023/10/23' && data<= "2023/11/21"){
        texto.innerHTML = "Escorpião";
        imagem.setAttribute("src","img/escorpiao.png");
        imagem.setAttribute("width","300px");
        msg= "Milo de Escorpião foi, no século XX, o Cavaleiro de Ouro de Escorpião que protegia a Casa de Escorpião no Santuário. Era um Cavaleiro fiel ao Santuário, inicialmente obedecendo as ordens do Grande Mestre, embora houvesse ocasiões em que ele se negaria a realizar missões específicas por questões de orgulho, sentimento este que determinava o rumo de suas conversas inicialmente, tendo se tornado consideravelmente mais humilde depois de sua batalha contra Hyoga de Cisne."
    }
    
    else if(data >= "2023/02/19" && data <= "2023/03/20"){
        texto.innerHTML = "Peixes";
        imagem.setAttribute("src","img/peixes.webp");
        imagem.setAttribute("width","300px");
        msg = "Afrodite de Peixes é o Cavaleiro de Ouro de Peixes e protetor da última Casa do Zodíaco do século XX. Usa variações de golpes com rosas, como o Rosas Diabólicas Reais. Sua ideia é de que só um poder supremo pode manter a paz e ordem no mundo, mesmo que esse poder provenha do mal. Por isso, mesmo tendo consciência de que o Grande Mestre servia ao mal, acabou obedecendo suas ordens e matando Daidalos, mestre de Shun. Sua atitude pode não ser a mais exemplar para um Cavaleiro, mas seu propósito de manter a paz na Terra é igual ao de qualquer Cavaleiro"
    }
    else if(data >= "2023/12/22" && data <= "2023/12/31" || data >= "2023/01/01" && data <= "2023/01/20"){
        texto.innerHTML = "Capricórnio";
        imagem.setAttribute("src","img/libraa.png");
        imagem.setAttribute("width","300px");
        msg = "Shura de Capricórnio é o Cavaleiro de Ouro que protege a Casa de Capricórnio. Shura se considera o cavaleiro mais fiel a Atena, porém sua excessiva lealdade ao Santuário acabou levando-o a cometer uma série de equívocos. Seu golpe principal é Excalibur, no qual concentra seu cosmo numa rajada cortante de energia, como uma espada. Este golpe tem uma intensidade concentrada fortíssima, e sai na velocidade da luz."
    }
    else if(data >= "2023/09/23" && data <= "2023/10/22"){
        texto.innerHTML = "Libra";
        imagem.setAttribute("src","img/libra.jpg");
        imagem.setAttribute("width","300px");
        msg = "O aparentemente inofensivo Mestre Ancião nada mais é do que Dohko, o cavaleiro de Libra. Absurdamente poderoso e responsável, o mentor de Shiryu encantou os fãs tanto na forma como o conhecemos, já velhinho e supostamente frágil, quanto atuando no campo de batalha durante a saga de Hades.";
    }
    else if(data >= "2023/01/21" && data <= "2023/02/18"){
        texto.innerHTML = "aquário";
        imagem.setAttribute("src","img/aquario.jpg");
        imagem.setAttribute("width","300px");
        msg = "Camus de Aquário é o Cavaleiro de Ouro que protege a Casa de Aquário no Santuário. No mangá, treinou o pequeno Hyoga e Isaak durante seis anos nas geladas terras do leste da Sibéria. foi obrigado a lutar contra Hyoga no Santuário."
    }
    else if(data >= "2023/11/22" && data <= "2023/12/21"){
        texto.innerHTML = "Sagitário";
        imagem.setAttribute("src","img/sagitario.jpg");
        imagem.setAttribute("width","300px");
        msg= "Aiolos de Sagitário é o Cavaleiro de Ouro de Sagitário do século XX. Antes de morrer, há 13 anos, entregou Atena ainda bebê e sua Armadura de Ouro aos cuidados de Mitsumasa Kido, que estava viajando pela Grécia. Desde então, Aiolos passou a ser considerado um traidor no Santuário, que era comandado por Saga disfarçado de Grande Mestre. Mesmo morto, sua alma continua a controlar sua Armadura de Sagitário, sempre ajudando, nos momentos críticos – emprestou-a a Seiya durante a luta contra Poseidon, por exemplo."
    }
    else if(data >= "2023/08/23" && data <="2023/09/22"){
        texto.innerHTML = "Virgem";
        imagem.setAttribute("src","img/virgem.webp");
        imagem.setAttribute("width","300px");
        msg= "Shaka de Virgem é o Cavaleiro de Ouro de Virgem do Século XX, que protege a Casa de Virgem no Santuário. Considerado como a reencarnação de Buda, possui um poder de observação que permite conhecer a verdade escondida sob as aparências. O poder de ir e vir no tempo e espaço impressiona até outros Cavaleiros de Ouro. Tem uma morte heroica sob a destrutiva excecução de atena, criada por Saga, Shura e Camus, mas ele submeteu-se a esse golpe para poder acompanhar Atena no Mundos dos Mortos."
    }
    else if(data >= "2023/04/21" && data <= "2023/05/20"){
        texto.innerHTML = "Touro";
        imagem.setAttribute("src","img/touro.jpg");
        imagem.setAttribute("width","300px");
        msg = "Aldebaran é o Cavaleiro de Ouro de Touro do século XX, que protege a Casa de Touro no Santuário. Dotado de uma resistência fora do comum, nem mesmo o Meteoro de Pégaso de Seiya conseguiu causar danos ao seu corpo. O Grande Chifre, alusão ao chifre de um touro bravo, é um golpe lançado quando está engatado com o inimigo. Mas se desferido depois, de longe, sua potência dobra. De personalidade franca e despachada, confia no que sente, sem se preocupar com as aparências ou racionalidades. Lutou com Niobe de Deep quando os Espectros invadiram o Santuário, tendo um fim heroico"
    }
    else if(data >= "2023/07/23" && data <= "2023/08/22"){
        texto.innerHTML = "Leão";
        imagem.setAttribute("src","img/leao.jpg");
        imagem.setAttribute("width","300px");
        msg = "Irmão de Aiolos. Apesar de sua personalidade explosiva, tem um coração puro que distingue rapidamente os justos, por isso foi um dos primeiros Cavaleiros de Ouro a reconhecer a autoridade de Atena. Como seu irmão Aiolos foi condenado como traidor, ele tenta limpar o nome da família jurando fidelidade ao Grande Mestre, até participando voluntariamente do extermínio dos Cavaleiros de Bronze. Durante a batalha contra os Espectros, enfrentou o exército inimigo de frente e derrubou muitos Espectros, servindo como poder central de ataque no Santuário."
    }
    else if(data >="2023/06/21" && data <= "2023/07/22"){
        texto.innerHTML = "Cancêr";
        imagem.setAttribute("src","img/cancer.jpg");
        imagem.setAttribute("width","300px");
        msg = " O Contador da Morte é o Cavaleiro de Câncer e possui características um tanto diferentes em relação aos demais Cavaleiros de Ouro. O personagem é bastante poderoso e habilidoso, mas sempre é retratado de maneira caricata em razão do seu senso de humor."
    }
    else if(data >= "2023/03/21" && data <= "2023/04/20"){
        texto.innerHTML = "Aries";
        imagem.setAttribute("src","img/aries.webp");
        imagem.setAttribute("width","300px");
        msg = "Mu é o Cavaleiro de Ouro de Áries do século XX, que protege a Casa de Áries no Santuário. Hábil na restauração de Armaduras, é ele quem conserta as Armaduras de Bronze do Seiya e dos outros antes da Batalha das Doze Casas do Zodíaco. Como desde cedo desconfiava do Grande Mestre, deu as costas ao Santuário. Porém, desejando a purificação do local, manteve suas obrigações como Cavaleiro, dedicando-se à restauração das Armaduras em Jamiel, porém seu poder não enfraqueceu, o que pôde ser constatado durante a batalha contra os Espectros"
    }
    else{
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src","img/x.webp");
        imagem.setAttribute("width","250px");

    }


    msgg.innerHTML = `<p><strong>${msg}</strong>!`
}
