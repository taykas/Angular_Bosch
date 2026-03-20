export interface IMercado { 
  id: number;
  name: string;
  categoria: string;
  descricao?: string;
  imagem: string;

  horarioFuncionamento?: string;
  aceitaValeAlimentacao?: boolean;
  possuiPracaAlimentacao?: boolean;
}

const MockMercado: IMercado[] = [
  {
    id: 1,
    name: "Muffato",
    categoria: "Supermercado",
    descricao: "Grande variedade e preços competitivos",
    imagem: "https://d3h1nu1oevgs78.cloudfront.net/posts/grupo-muffato-inaugura-nova-geracao-de-lojas-em-londrina-pr-353613.jpeg",
    horarioFuncionamento: "08:00 - 22:00",
    aceitaValeAlimentacao: true,
    possuiPracaAlimentacao: true
  },
  {
    id: 2,
    name: "Condor",
    categoria: "Supermercado",
    descricao: "Ofertas semanais populares",
    imagem: "https://institucional.condor.com.br/wp-content/uploads/2024/01/IMG_7992-scaled-1-1024x683.jpg",
    horarioFuncionamento: "07:00 - 22:00",
    aceitaValeAlimentacao: true,
    possuiPracaAlimentacao: true
  },
  {
    id: 3,
    name: "Carrefour",
    categoria: "Hipermercado",
    descricao: "Rede internacional com variedade",
    imagem: "https://exame.com/insight/_next/image?url=https%3A%2F%2Fclassic.exame.com%2Fwp-content%2Fuploads%2F2024%2F07%2FDesign-sem-nome-36-1.jpg&w=1920&q=75",
    horarioFuncionamento: "06:00 - 23:00",
    aceitaValeAlimentacao: true,
    possuiPracaAlimentacao: true
  },
  {
    id: 4,
    name: "Extra",
    categoria: "Hipermercado",
    descricao: "Grande mix de produtos",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Extra.jpg",
    horarioFuncionamento: "08:00 - 22:00",
    aceitaValeAlimentacao: true,
    possuiPracaAlimentacao: true
  },
  {
    id: 5,
    name: "Assaí Atacadista",
    categoria: "Atacado",
    descricao: "Foco em preço baixo no atacado",
    imagem: "https://www.assai.com.br/sites/default/files/assai-50-anos-novo-logo-2024-banner-01.jpg",
    horarioFuncionamento: "07:00 - 22:00",
    aceitaValeAlimentacao: false,
    possuiPracaAlimentacao: false
  },
  {
    id: 6,
    name: "Atacadão",
    categoria: "Atacado",
    descricao: "Compras em grande quantidade",
    imagem: "https://mercadoeconsumo.com.br/wp-content/uploads/2018/10/Atacad%C3%A3o-inaugura-segunda-unidade-de-autosservi%C3%A7o-em-Recife.jpg",
    horarioFuncionamento: "07:00 - 22:00",
    aceitaValeAlimentacao: false,
    possuiPracaAlimentacao: false
  },
  {
    id: 7,
    name: "Pão de Açúcar",
    categoria: "Premium",
    descricao: "Experiência diferenciada",
    imagem: "https://www.infomoney.com.br/wp-content/uploads/2019/11/Imagem-divulga%C3%A7%C3%A3o_P%C3%A3o-de-A%C3%A7%C3%BAcar-2-1170x750.jpg?fit=1170%2C750&quality=50&strip=all",
    horarioFuncionamento: "08:00 - 21:00",
    aceitaValeAlimentacao: true,
    possuiPracaAlimentacao: true
  },
  {
    id: 8,
    name: "Dia%",
    categoria: "Econômico",
    descricao: "Foco em preços baixos",
    imagem: "https://sublimedia.tv/wp-content/uploads/2020/09/supermercado-dia-aposta-em-marca-propria-e-na-era-digital.jpg",
    horarioFuncionamento: "08:00 - 21:00",
    aceitaValeAlimentacao: true,
    possuiPracaAlimentacao: false
  },
  {
    id: 9,
    name: "Big",
    categoria: "Hipermercado",
    descricao: "Grande variedade e ofertas",
    imagem: "https://s2-g1.glbimg.com/9r1mu3QtBnUcoHHdLKhKCvc1O-U=/0x0:5472x3484/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/p/R/avP5xJQeAUogb9BpVNkw/big-tambore-1-.jpg",
    horarioFuncionamento: "08:00 - 22:00",
    aceitaValeAlimentacao: true,
    possuiPracaAlimentacao: true
  },
  {
    id: 10,
    name: "Zaffari",
    categoria: "Supermercado",
    descricao: "Foco em qualidade",
    imagem: "https://superhiper.com.br/devlop/wp-content/uploads/2024/06/Grupo-Zaffari.jpg",
    horarioFuncionamento: "09:00 - 21:00",
    aceitaValeAlimentacao: true,
    possuiPracaAlimentacao: true
  },
  {
    id: 11,
    name: "Angeloni",
    categoria: "Supermercado",
    descricao: "Produtos premium",
    imagem: "https://media.gazetadopovo.com.br/2018/03/a1b3a492c838f896399f6997d7cac233-full.jpg",
    horarioFuncionamento: "08:00 - 22:00",
    aceitaValeAlimentacao: true,
    possuiPracaAlimentacao: true
  },
  {
    id: 12,
    name: "Savegnago",
    categoria: "Supermercado",
    descricao: "Bom custo-benefício",
    imagem: "https://superhiper.com.br/devlop/wp-content/uploads/2023/12/Savegnago-fachada-destaque-scaled.jpeg",
    horarioFuncionamento: "07:00 - 22:00",
    aceitaValeAlimentacao: true,
    possuiPracaAlimentacao: false
  },
  {
    id: 13,
    name: "Sonda",
    categoria: "Supermercado",
    descricao: "Rede popular em SP",
    imagem: "https://www.sondadelivery.com.br/Arquivos/Loja/7.png?v=26022026165551",
    horarioFuncionamento: "08:00 - 22:00",
    aceitaValeAlimentacao: true,
    possuiPracaAlimentacao: false
  },
  {
    id: 14,
    name: "Oba Hortifruti",
    categoria: "Hortifruti",
    descricao: "Produtos frescos",
    imagem: "https://socialbauru.com.br/wp-content/uploads/2024/05/oba-horifruti-bauru-capa.jpg",
    horarioFuncionamento: "07:00 - 21:00",
    aceitaValeAlimentacao: true,
    possuiPracaAlimentacao: false
  },
  {
    id: 15,
    name: "Natural da Terra",
    categoria: "Hortifruti",
    descricao: "Alimentos saudáveis",
    imagem: "https://d3h1nu1oevgs78.cloudfront.net/images/2023/03/REDE-HORTIFRUTI-NATURAL-DA-TERRA-1.jpg",
    horarioFuncionamento: "07:00 - 21:00",
    aceitaValeAlimentacao: true,
    possuiPracaAlimentacao: false
  }
];

export default MockMercado;