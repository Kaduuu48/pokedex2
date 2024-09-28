const megaEvolucoes = [
    {
        nome: "Charizard",
        tipo: ["Fogo", "Voador"],
        megaEvolucao: {
            nome: "Mega Charizard X",
            tipo: ["Fogo", "Dragão"],
            habilidade: "Poder Solar",
            pontoForte: "Forte contra Pokémon do tipo Planta, Inseto e Aço.",
            pontoFraco: "Fraco contra Pokémon do tipo Água e Rocha.",
            descricao: "Charizard é um Pokémon de tipo Fogo e Voador, conhecido por sua habilidade de voar e seu poder destrutivo. Sua Mega Evolução, Mega Charizard X, torna-o ainda mais poderoso com o tipo Dragão e uma habilidade que aumenta o dano dos seus ataques do tipo Fogo."
        },
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
    },
    {
        nome: "Mewtwo",
        tipo: ["Psíquico"],
        megaEvolucao: {
            nome: "Mega Mewtwo X",
            tipo: ["Psíquico", "Lutador"],
            habilidade: "Insônia",
            pontoForte: "Muito poderoso em ataques Psíquicos e de Lutador.",
            pontoFraco: "Fraco contra Pokémon do tipo Sombrio.",
            descricao: "Mewtwo é um Pokémon lendário com habilidades Psíquicas impressionantes. Sua Mega Evolução, Mega Mewtwo X, aumenta seu poder físico e o torna ainda mais formidável em batalhas, mas deve ficar atento a Pokémon do tipo Sombrio, que são suas maiores ameaças."
        },
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"
    },
    {
        nome: "Blaziken",
        tipo: ["Fogo", "Lutador"],
        megaEvolucao: {
            nome: "Mega Blaziken",
            tipo: ["Fogo", "Lutador"],
            habilidade: "Velocidade Extrema",
            pontoForte: "Muito rápido e forte em ataques Fogo e Lutador.",
            pontoFraco: "Fraco contra Pokémon do tipo Água e Psíquico.",
            descricao: "Blaziken é um Pokémon de tipo Fogo e Lutador, conhecido por sua velocidade e poder de ataque. Sua Mega Evolução, Mega Blaziken, aumenta sua velocidade e força em combate, tornando-o um adversário perigoso. No entanto, ele deve estar atento a Pokémon do tipo Água e Psíquico, que podem ser suas fraquezas."
        },
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/257.png"
    },
    // Adicionando mais Pokémon lendários
    {
        nome: "Arceus",
        tipo: ["Normal"],
        megaEvolucao: {
            nome: "Arceus",
            tipo: ["Normal"],
            habilidade: "Multitipo",
            pontoForte: "Extremamente versátil, pode adaptar seu tipo com a Forma de Placa.",
            pontoFraco: "Nenhum ponto fraco específico.",
            descricao: "Arceus é conhecido como o criador do universo Pokémon. Sua habilidade Multitipo permite que ele mude seu tipo com base na Placa equipada, tornando-o um dos Pokémon mais versáteis e poderosos."
        },
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/493.png"
    },
    {
        nome: "Groudon",
        tipo: ["Terra"],
        megaEvolucao: {
            nome: "Mega Groudon",
            tipo: ["Terra", "Fogo"],
            habilidade: "Deserto",
            pontoForte: "Extremamente forte em ataques de Terra e Fogo.",
            pontoFraco: "Fraco contra Pokémon do tipo Água.",
            descricao: "Groudon é um Pokémon lendário com o poder de controlar a terra. Sua Mega Evolução, Mega Groudon, ganha o tipo Fogo e uma habilidade que aumenta sua resistência em campos desérticos, mas fica vulnerável a ataques de Água."
        },
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/383.png"
    },
    {
        nome: "Kyogre",
        tipo: ["Água"],
        megaEvolucao: {
            nome: "Mega Kyogre",
            tipo: ["Água"],
            habilidade: "Chuva Absoluta",
            pontoForte: "Muito poderoso em ataques de Água.",
            pontoFraco: "Fraco contra Pokémon do tipo Elétrico.",
            descricao: "Kyogre é um Pokémon lendário que controla os mares. Sua Mega Evolução, Mega Kyogre, aumenta sua força em ataques de Água e sua habilidade faz com que a chuva intensifique os ataques desse tipo, mas é vulnerável a ataques Elétricos."
        },
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/382.png"
    },
    {
        nome: "Rayquaza",
        tipo: ["Dragão", "Voador"],
        megaEvolucao: {
            nome: "Mega Rayquaza",
            tipo: ["Dragão", "Voador"],
            habilidade: "Air Lock",
            pontoForte: "Muito forte em ataques Dragão e Voador.",
            pontoFraco: "Fraco contra Pokémon do tipo Gelo.",
            descricao: "Rayquaza é um Pokémon lendário que vive nas nuvens. Sua Mega Evolução, Mega Rayquaza, mantém seus tipos Dragão e Voador, mas ganha uma habilidade que anula as condições atmosféricas, o que o torna ainda mais poderoso em combate."
        },
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png"
    },
    {
        nome: "Lugia",
        tipo: ["Psíquico", "Voador"],
        megaEvolucao: {
            nome: "Lugia",
            tipo: ["Psíquico", "Voador"],
            habilidade: "Multicores",
            pontoForte: "Extremamente resistente e forte em ataques Psíquicos e Voador.",
            pontoFraco: "Fraco contra Pokémon do tipo Gelo e Elétrico.",
            descricao: "Lugia é conhecido como o guardião dos mares. Sua habilidade Multicores reduz o dano de ataques especiais e o torna um adversário formidável, mas deve estar atento a Pokémon do tipo Gelo e Elétrico."
        },
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png"
    },
    {
        nome: "Ho-Oh",
        tipo: ["Fogo", "Voador"],
        megaEvolucao: {
            nome: "Ho-Oh",
            tipo: ["Fogo", "Voador"],
            habilidade: "Multicores",
            pontoForte: "Muito poderoso em ataques de Fogo e Voador.",
            pontoFraco: "Fraco contra Pokémon do tipo Água e Elétrico.",
            descricao: "Ho-Oh é conhecido como o Pokémon das chamas sagradas. Sua habilidade Multicores aumenta seu poder de ataque e torna-o um adversário temível, mas fica vulnerável a ataques Água e Elétrico."
        },
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/250.png"
    },
    {
        nome: "Dialga",
        tipo: ["Dragão", "Aço"],
        megaEvolucao: {
            nome: "Dialga",
            tipo: ["Dragão", "Aço"],
            habilidade: "Pressão",
            pontoForte: "Muito forte em ataques Dragão e Aço.",
            pontoFraco: "Fraco contra Pokémon do tipo Terra e Lutador.",
            descricao: "Dialga é um Pokémon lendário que controla o tempo. Sua habilidade Pressão faz com que os oponentes gastem mais PP durante a batalha, e seu tipo Aço o torna resistente a muitos ataques, embora seja vulnerável a tipos Terra e Lutador."
        },
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/483.png"
    },
   
      
        {
          nome: "Aggron",
          megaEvolucao: "Mega Aggron",
          tipo: "Aço",
          habilidade: "Filter",
          pontoForte: "Altíssima defesa e resistência contra ataques super eficazes.",
          pontoFraco: "Fraco contra ataques de fogo e lutador.",
          descricao: "Mega Aggron perde seu tipo pedra, focando exclusivamente no tipo aço, o que o torna extremamente resistente em batalhas."
        },
        {
          nome: "Altaria",
          megaEvolucao: "Mega Altaria",
          tipo: "Dragão, Fada",
          habilidade: "Pixilate",
          pontoForte: "Altos ataques especiais e defesa equilibrada.",
          pontoFraco: "Fraco contra ataques de gelo, veneno e aço.",
          descricao: "Mega Altaria ganha o tipo fada, tornando-se uma excelente contra dragões, além de ter bons ataques especiais."
        },
        {
          nome: "Kangaskhan",
          megaEvolucao: "Mega Kangaskhan",
          tipo: "Normal",
          habilidade: "Parental Bond",
          pontoForte: "Ataques duplos graças à sua habilidade Parental Bond.",
          pontoFraco: "Fraco contra ataques lutadores.",
          descricao: "Com a habilidade Parental Bond, Mega Kangaskhan pode atacar duas vezes em um turno, causando grandes danos."
        },
        {
          nome: "Heracross",
          megaEvolucao: "Mega Heracross",
          tipo: "Inseto, Lutador",
          habilidade: "Skill Link",
          pontoForte: "Ataques físicos devastadores.",
          pontoFraco: "Fraco contra ataques de fogo, voador e psíquico.",
          descricao: "Mega Heracross é um atacante físico incrivelmente poderoso, com sua habilidade permitindo que ataques multi-hit atinjam cinco vezes."
        },
        {
          nome: "Houndoom",
          megaEvolucao: "Mega Houndoom",
          tipo: "Fogo, Sombrio",
          habilidade: "Solar Power",
          pontoForte: "Alta velocidade e ataques especiais poderosos.",
          pontoFraco: "Fraco contra água, terra e lutador.",
          descricao: "Mega Houndoom se destaca sob o sol, onde sua habilidade Solar Power aumenta ainda mais o poder de seus ataques especiais."
        },
        {
          nome: "Manectric",
          megaEvolucao: "Mega Manectric",
          tipo: "Elétrico",
          habilidade: "Intimidate",
          pontoForte: "Altíssima velocidade e habilidade para intimidar oponentes.",
          pontoFraco: "Fraco contra ataques de terra.",
          descricao: "Mega Manectric usa sua velocidade e habilidade Intimidate para reduzir o ataque dos oponentes enquanto os ataca rapidamente."
        },
        {
          nome: "Lopunny",
          megaEvolucao: "Mega Lopunny",
          tipo: "Normal, Lutador",
          habilidade: "Scrappy",
          pontoForte: "Grande velocidade e ataques físicos fortes.",
          pontoFraco: "Fraco contra ataques de fada e psíquico.",
          descricao: "Mega Lopunny ganha o tipo lutador e pode atingir pokémons fantasmas com ataques normais e lutadores, graças à sua habilidade Scrappy."
        },
        {
          nome: "Pinsir",
          megaEvolucao: "Mega Pinsir",
          tipo: "Inseto, Voador",
          habilidade: "Aerilate",
          pontoForte: "Altos ataques físicos e boa defesa.",
          pontoFraco: "Fraco contra ataques de fogo, elétrico e gelo.",
          descricao: "Mega Pinsir ganha o tipo voador, o que lhe permite usar ataques normais como voadores, potencializando seu poder ofensivo."
        }
      ];


      function buscarPokemon() {
        const input = document.getElementById('pokemonInput').value.toLowerCase();
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = ''; // Limpa o resultado anterior
        
        const pokemonEncontrado = megaEvolucoes.find(pokemon => pokemon.nome.toLowerCase() === input);
        
        if (pokemonEncontrado) {
            const { nome, megaEvolucao, imagem } = pokemonEncontrado;
            resultadoDiv.innerHTML = `
                <div class="card">
                    <img src="${imagem}" alt="${nome}">
                    <h2>${nome}</h2>
                    <p><strong>Mega Evolução:</strong> ${megaEvolucao.nome}</p>
                    <p><strong>Tipo:</strong> ${megaEvolucao.tipo.join(', ')}</p>
                    <p><strong>Habilidade:</strong> ${megaEvolucao.habilidade}</p>
                    <p><strong>Ponto Forte:</strong> ${megaEvolucao.pontoForte}</p>
                    <p><strong>Ponto Fraco:</strong> ${megaEvolucao.pontoFraco}</p>
                    <p><strong>Descrição:</strong> ${megaEvolucao.descricao}</p>
                </div>
            `;
        } else {
            resultadoDiv.innerHTML = '<p>Pokémon não encontrado ou não possui mega-evolução</p>';
        }
    }