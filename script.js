function cargaInicial(){
const brunchs = [
    {
      name: "Waffle Morango",
      price: 33.70,
      description: "Delicie-se com nossos deliciosos waffles cobertos com generosas porções de morangos frescos. Cada mordida é uma explosão de sabor doce e suculento, combinado com a crocância irresistível do waffle. Uma opção perfeita para começar o seu dia ou simplesmente mimar-se em qualquer momento."
    },
    {
      name: "Arroz Doce",
      price: 22.50,
      description: "Transporte-se para um sabor reconfortante com o nosso arroz doce especial. Feito com cuidado e carinho, cada colherada é uma experiência nostálgica, com o arroz cozido até ficar macio e cremoso, envolto em uma doce mistura de leite e aromas delicados. Uma sobremesa que aquece o coração e traz um sorriso ao seu rosto."
    },
    {
      name: "Maça Doce",
      price: 5.00,
      description: "Nossa maçã doce é o toque perfeito de frescor e doçura para qualquer momento do dia. Cada mordida crocante revela a suculência da maçã, combinada com um leve toque de açúcar. Uma opção saudável e saborosa para satisfazer suas vontades, seja como um lanche rápido ou um acompanhamento delicioso."
    },
    {
      name: "Crepe",
      price: 35.90,
      description: "Experimente a delicadeza dos nossos crepes artesanais. Com sua massa fina e macia, essas obras de arte culinárias são recheadas com uma variedade de opções irresistíveis. Seja doce ou salgado, cada crepe é uma combinação perfeita de texturas e sabores que irão satisfazer todos os seus desejos."
    },
    {
      name: "Cookie Americano",
      price: 8.70,
      description: "Mergulhe em uma tradição americana com nossos cookies americanos clássicos. Com uma crosta dourada e uma textura macia por dentro, cada mordida revela pedaços generosos de chocolate. Desfrute desses cookies recém-saídos do forno, acompanhados de uma bebida quente, e permita-se saborear o conforto e o prazer de um doce indulgente."
    },
    {
      name: "Cookie Dark",
      price: 8.70,
      description: "Descubra a perfeição do nosso cookie dark. Feito com chocolate amargo de alta qualidade, cada mordida é uma experiência intensa de sabor e sofisticação. A crocância equilibrada com a riqueza do chocolate irá satisfazer até mesmo os paladares mais exigentes. Desfrute de um momento de indulgência com esses cookies que são um verdadeiro deleite para os amantes de chocolate."
    },
    {
      name: "Cookie Meio Amargo",
      price: 8.70,
      description: "Para os amantes de um sabor levemente amargo, nossos cookies meio amargo são a escolha ideal. Com a combinação perfeita de doçura e amargor, cada mordida oferece uma experiência equilibrada e única. Os pedaços de chocolate meio amargo derretem na boca, proporcionando uma explosão de sabores intensos e marcantes. Permita-se saborear esses cookies incríveis que vão além do convencional."
    },
  ]
  const beverages = [
    {
      name: "Espresso",
      price: 5.50,
      description: "Experimente a intensidade e a complexidade do nosso espresso, uma bebida clássica que captura a essência do café. Cada gole oferece um sabor rico e encorpado, com um toque de crema dourada na superfície. Deixe-se envolver pelos aromas irresistíveis e desfrute de uma experiência verdadeiramente revigorante."
    },
    {
      name: "Cappuccino",
      price: 7.80,
      description: "Deleite-se com a suavidade e a cremosidade do nosso cappuccino. Com a combinação perfeita de café espresso, leite vaporizado e espuma aveludada, essa bebida é um verdadeiro prazer para os sentidos. Cada gole oferece uma harmonia delicada de sabores, com um toque de cacau em pó para finalizar. Permita-se desfrutar de um momento de puro conforto e indulgência."
    },
    {
      name: "Latte Macchiato",
      price: 8.50,
      description: "Descubra a elegância e a delicadeza do nosso latte macchiato. Essa bebida sofisticada apresenta camadas distintas de café espresso, leite vaporizado e espuma de leite, criando um visual impressionante e um sabor excepcional. Cada gole é uma experiência suave e equilibrada, com notas sutis de café que se misturam harmoniosamente ao leite. Mime-se com um momento de pura indulgência."
    },
    {
      name: "Mocha",
      price: 9.20,
      description: "Perca-se na delícia irresistível do nosso mocha. Essa combinação perfeita de café espresso, leite vaporizado, chocolate e chantilly é um verdadeiro sonho para os amantes do chocolate. Cada gole oferece um sabor envolvente e reconfortante, com a intensidade do café equilibrada pelo doce e cremoso chocolate. Deixe-se envolver por essa tentação de sabores e aproveite um momento de puro prazer."
    },
    {
      name: "Frappuccino",
      price: 10.90,
      description: "Refresque-se com o nosso frappuccino, uma bebida gelada e revigorante que combina café espresso, leite, gelo e um toque especial. Cada gole é uma explosão refrescante de sabores, com a textura cremosa e o sabor robusto do café se misturando perfeitamente ao gelo triturado. Desfrute dessa deliciosa indulgência gelada em qualquer momento do dia."
    },
    {
      name: "Chá Gelado",
      price: 6.50,
      description: "Desfrute da pureza e do frescor do nosso chá gelado. Feito com chá de alta qualidade, cuidadosamente selecionado, cada gole é uma experiência revigorante e revitalizante. Seja um chá preto tradicional ou uma mistura de sabores frutados, cada opção é uma pausa perfeita para se refrescar e apreciar a serenidade de um sabor suave e natural."
    }
  ]
  let divBrunch = document.querySelector('#brunchCadastro')
  for(let i = 0; i < brunchs.length; i++){
    divBrunch.innerHTML += `
    <div class="card">
            <div class="card-header">
                <h3>${brunchs[i].name}</h3>
                <p>${brunchs[i].price}</p>
            </div> 
            <p>${brunchs[i].description}</p>
            
    </div>
    `

  }
  let divBebidas = document.querySelector('#bebidas') 
  for(let i =0; i<beverages.length; i++){
    divBebidas.innerHTML += `
    <div class="card">
          <div class="card-header">
              <h3>${beverages[i].name}</h3>
              <p>${beverages[i].price}</p>
          </div>
          <p>${beverages[i].description}</p>
    </div>`
  }
}

