export interface IMercado { 
  id: number;
  name: string;
  categoria: string;
  descricao?: string;
  preco: number;
  imagem: string;
}

const MockMercado: IMercado[] = [
  {
    id: 1,
    name: "Muffato",
    categoria: "Supermercado",
    descricao: "Rede completa com grande variedade e preços competitivos",
    preco: 0,
    imagem: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Super_Muffato.jpg"
  },
  {
    id: 2,
    name: "Condor",
    categoria: "Supermercado",
    descricao: "Rede popular no sul com ofertas semanais",
    preco: 0,
    imagem: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Condor_Super_Center.jpg"
  },
  {
    id: 3,
    name: "Carrefour",
    categoria: "Hipermercado",
    descricao: "Rede internacional com grande variedade de produtos",
    preco: 0,
    imagem: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Carrefour_store.jpg"
  },
  {
    id: 4,
    name: "Extra",
    categoria: "Hipermercado",
    descricao: "Ofertas frequentes e grande mix de produtos",
    preco: 0,
    imagem: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Extra_Hipermercado.jpg"
  },
  {
    id: 5,
    name: "Assaí Atacadista",
    categoria: "Atacado",
    descricao: "Preços baixos em compras no atacado",
    preco: 0,
    imagem: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Assai_Atacadista.jpg"
  },
  {
    id: 6,
    name: "Atacadão",
    categoria: "Atacado",
    descricao: "Ideal para compras em grande quantidade",
    preco: 0,
    imagem: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Atacadao.jpg"
  },
  {
    id: 7,
    name: "Pão de Açúcar",
    categoria: "Premium",
    descricao: "Produtos selecionados e experiência diferenciada",
    preco: 0,
    imagem: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Pao_de_Acucar.jpg"
  },
  {
    id: 8,
    name: "Dia%",
    categoria: "Econômico",
    descricao: "Mercado com foco em preços baixos",
    preco: 0,
    imagem: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Dia_supermarket.jpg"
  },
  {
    id: 9,
    name: "Big",
    categoria: "Hipermercado",
    descricao: "Grande variedade de produtos e ofertas",
    preco: 0,
    imagem: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Big_Hipermercado.jpg"
  },
  {
    id: 10,
    name: "Zaffari",
    categoria: "Supermercado",
    descricao: "Rede tradicional com foco em qualidade",
    preco: 0,
    imagem: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Zaffari.jpg"
  },
  {
    id: 11,
    name: "Angeloni",
    categoria: "Supermercado",
    descricao: "Rede forte no sul com produtos premium",
    preco: 0,
    imagem: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Angeloni.jpg"
  },
  {
    id: 12,
    name: "Savegnago",
    categoria: "Supermercado",
    descricao: "Rede regional com bom custo-benefício",
    preco: 0,
    imagem: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Savegnago.jpg"
  },
  {
    id: 13,
    name: "Sonda",
    categoria: "Supermercado",
    descricao: "Rede popular em São Paulo",
    preco: 0,
    imagem: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Sonda.jpg"
  },
  {
    id: 14,
    name: "Oba Hortifruti",
    categoria: "Hortifruti",
    descricao: "Especializado em frutas, verduras e produtos frescos",
    preco: 0,
    imagem: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Oba_Hortifruti.jpg"
  },
  {
    id: 15,
    name: "Natural da Terra",
    categoria: "Hortifruti",
    descricao: "Produtos frescos e saudáveis",
    preco: 0,
    imagem: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Natural_da_Terra.jpg"
  },
  {
    id: 16,
    name: "Makro",
    categoria: "Atacado",
    descricao: "Atacado com foco em comerciantes",
    preco: 0,
    imagem: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Makro.jpg"
  },
  {
    id: 17,
    name: "Roldão",
    categoria: "Atacado",
    descricao: "Atacadista com preços competitivos",
    preco: 0,
    imagem: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Roldao.jpg"
  },
  {
    id: 18,
    name: "Guanabara",
    categoria: "Supermercado",
    descricao: "Rede popular com grandes promoções",
    preco: 0,
    imagem: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Guanabara.jpg"
  },
  {
    id: 19,
    name: "Super Nosso",
    categoria: "Premium",
    descricao: "Mercado sofisticado com produtos diferenciados",
    preco: 0,
    imagem: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Super_Nosso.jpg"
  },
  {
    id: 20,
    name: "St Marche",
    categoria: "Premium",
    descricao: "Rede com foco em produtos gourmet",
    preco: 0,
    imagem: "https://upload.wikimedia.org/wikipedia/commons/3/3f/St_Marche.jpg"
  }
];

export default MockMercado;