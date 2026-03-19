export interface IComida {
  id: number;
  name: string;
  categoria: string;
  descricao?: string;
  preco: number;
  imagem: string;
}

const MockComida: IComida[] = [
  {
    id: 1,
    name: "Pizza Margherita",
    categoria: "Italiana",
    descricao: "Molho de tomate, mussarela e manjericão",
    preco: 35.9,
    imagem: "https://rossopizza.com.br/salao/wp-content/uploads/2019/09/istock-181175167-1024x683.jpg"
  },
  {
    id: 2,
    name: "Hambúrguer Artesanal",
    categoria: "Lanches",
    descricao: "Carne 180g, cheddar e molho especial",
    preco: 28.5,
    imagem: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
  },
  {
    id: 3,
    name: "Sushi Combo",
    categoria: "Japonesa",
    descricao: "20 peças variadas de sushi e sashimi",
    preco: 52.0,
    imagem: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
  },
  {
    id: 4,
    name: "Salada Caesar",
    categoria: "Saudável",
    descricao: "Alface, frango grelhado, croutons e molho caesar",
    preco: 24.0,
    imagem: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9"
  },
  {
    id: 5,
    name: "Açaí na Tigela",
    categoria: "Sobremesa",
    descricao: "Açaí com banana, granola e leite condensado",
    preco: 18.75,
    imagem: "https://snowfruit.com.br/wp-content/uploads/2021/08/Quais_s%C3%A3o_os_melhores_acompanhamentos_para_a%C3%A7ai.png"
  },
  {
    id: 6,
    name: "Lasanha",
    categoria: "Italiana",
    descricao: "Lasanha à bolonhesa com queijo gratinado",
    preco: 32.0,
    imagem: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d"
  },
  {
    id: 7,
    name: "Frango Grelhado",
    categoria: "Saudável",
    descricao: "Peito de frango grelhado com legumes",
    preco: 26.0,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKTzeaPC29i8zczDvaGsUTHj2eLYUWZrybg&s"
  },
  {
    id: 8,
    name: "Batata Frita",
    categoria: "Lanches",
    descricao: "Batatas crocantes com sal",
    preco: 15.0,
    imagem: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5"
  },
  {
    id: 9,
    name: "Taco",
    categoria: "Mexicana",
    descricao: "Taco com carne, queijo e vegetais",
    preco: 22.0,
    imagem: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
  },
  {
    id: 10,
    name: "Burrito",
    categoria: "Mexicana",
    descricao: "Burrito recheado com carne, arroz e feijão",
    preco: 25.0,
    imagem: "https://media.istockphoto.com/id/1317280854/pt/foto/mexican-rice-and-chicken-burrito.jpg?s=612x612&w=0&k=20&c=oS2s9q7a4mVVXfR7BR7lIb5q5X0ZhJ1wzy2Wgx7QGPI="
  },
  {
    id: 11,
    name: "Yakisoba",
    categoria: "Japonesa",
    descricao: "Macarrão oriental com legumes e carne",
    preco: 29.0,
    imagem: "https://images.unsplash.com/photo-1617196034183-421b4917c92d"
  },
  {
    id: 12,
    name: "Temaki",
    categoria: "Japonesa",
    descricao: "Cone de alga recheado com peixe e arroz",
    preco: 19.0,
    imagem: "https://images.unsplash.com/photo-1611143669185-af224c5e3252"
  },
  {
    id: 13,
    name: "Panqueca",
    categoria: "Café da manhã",
    descricao: "Panquecas com mel e frutas",
    preco: 17.0,
    imagem: "https://www.mococa.com.br/wp-content/uploads/2022/03/Panquecas-americanas.jpeg"
  },
  {
    id: 14,
    name: "Omelete",
    categoria: "Café da manhã",
    descricao: "Omelete com queijo e ervas",
    preco: 14.0,
    imagem: "https://media.istockphoto.com/id/485040276/pt/foto/omelette-de-ervas-com-cebolinho-e-or%C3%A9g%C3%A3o.jpg?s=612x612&w=0&k=20&c=L4zgP_sb-V8hAECA1SPgaqTdQiQiv1U98xoTl8oFIDA="
  },
  {
    id: 15,
    name: "Churrasco",
    categoria: "Brasileira",
    descricao: "Carnes variadas grelhadas",
    preco: 45.0,
    imagem: "https://images.unsplash.com/photo-1558030006-450675393462"
  },
  {
    id: 16,
    name: "Feijoada",
    categoria: "Brasileira",
    descricao: "Feijão preto com carnes e acompanhamentos",
    preco: 38.0,
    imagem: "https://i.pinimg.com/736x/9c/1e/51/9c1e5103589a144d5968a7e8c306641e.jpg"
  },
  {
    id: 17,
    name: "Sorvete",
    categoria: "Sobremesa",
    descricao: "Sorvete cremoso de diversos sabores",
    preco: 12.0,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJVCX9ERDUglI0_4d2DN7093B3U6jVJl7tRA&s"
  },
  {
    id: 18,
    name: "Brownie",
    categoria: "Sobremesa",
    descricao: "Brownie de chocolate com casquinha crocante",
    preco: 10.0,
    imagem: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c"
  },
  {
    id: 19,
    name: "Espaguete",
    categoria: "Italiana",
    descricao: "Espaguete ao molho de tomate",
    preco: 27.0,
    imagem: "https://img.freepik.com/fotos-gratis/espaguete-com-molho-a-bolonhesa-na-mesa-de-madeira-xa_123827-22962.jpg?semt=ais_hybrid&w=740&q=80"
  },
  {
    id: 20,
    name: "Coxinha",
    categoria: "Lanches",
    descricao: "Salgado brasileiro recheado com frango",
    preco: 8.0,
    imagem: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f"
  }
];

export default MockComida;