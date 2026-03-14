
export type Language = 'en' | 'pt' | 'es';

export const translations = {
  en: {
    nav: {
      attractions: 'Attractions',
      birthdays: 'Birthdays',
      specials: 'Specials',
      contact: 'Contact',
      openNow: 'Open Now',
      bookNow: 'Book Now',
      menu: 'Menu'
    },
    hero: {
      badge: 'The Ultimate Family Destination',
      title1: 'Unleash',
      title2: 'The Fun',
      getStarted: 'Get Started',
      viewAttractions: 'View Attractions',
      explore: 'Explore'
    },
    attractions: {
      badge: 'Our Attractions',
      title1: 'The Heart of',
      title2: 'Entertainment',
      desc: 'Experience world-class thrills and family-friendly adventures. From the roar of the engines to the neon glow of the arcade.',
      items: {
        goKarts: {
          title: 'Go Karts',
          tag: 'Speed',
          desc: 'Master the curves on our pro-grade track with high-performance karts.'
        },
        miniGolf: {
          title: 'Mini Golf',
          tag: 'Skill',
          desc: '18 holes of neon-lit adventure.'
        },
        arcade: {
          title: 'Arcade',
          tag: 'Play',
          desc: 'The ultimate gaming destination with over 100 classic and modern titles.'
        },
        batting: {
          title: 'Batting',
          tag: 'Power',
          desc: 'Swing for the fences.'
        }
      }
    },
    ticker: {
      fun: 'Unlimited Fun',
      racing: 'Pro Racing',
      golf: 'Neon Golf',
      arcade: 'Arcade Legends'
    },
    stats: {
      guests: 'Happy Guests',
      games: 'Arcade Games',
      rooms: 'Party Rooms'
    },
    birthdays: {
      badge: 'Celebrations',
      title1: 'Legendary',
      title2: 'Parties',
      desc: "Don't just host a party—create a legacy. Our all-inclusive VIP packages handle everything from high-tech lounges to pro catering.",
      vipOnly: 'VIP Only',
      elitePackages: 'Elite Party Packages',
      features: [
        { title: 'Priority Access', desc: 'Skip the lines, own the track.' },
        { title: 'Private Command Center', desc: 'Luxury lounges for your squad.' },
        { title: 'Gourmet Fuel', desc: 'Premium food and drinks.' }
      ],
      exploreElite: 'Explore Elite Packages'
    },
    cta: {
      title1: 'Ready to',
      title2: 'Play?',
      book: 'Book Your Experience'
    },
    footer: {
      desc: 'The premier destination for high-octane family entertainment in Florida.',
      explore: 'Explore',
      support: 'Support',
      location: 'Location',
      openToday: 'Open Today',
      privacy: 'Privacy',
      terms: 'Terms',
      designed: 'Designed for the Future'
    },
    pricing: {
      badge: 'Passes & Pricing',
      title1: 'Choose Your',
      title2: 'Adventure',
      desc: 'Flexible options for every type of fun seeker. From single rides to all-day unlimited access.',
      book: 'Buy Pass',
      items: [
        { title: 'Day Pass', price: '$29', features: ['Unlimited Go-Karts', 'Unlimited Mini-Golf', '10 Arcade Credits'] },
        { title: 'Pro Pass', price: '$49', features: ['Unlimited Everything', '50 Arcade Credits', 'VIP Lounge Access'] },
        { title: 'Family Pack', price: '$120', features: ['4 Day Passes', '100 Arcade Credits', 'Free Pizza & Drinks'] }
      ]
    },
    food: {
      badge: 'Fuel Up',
      title1: 'Gourmet',
      title2: 'Snacks',
      desc: 'Recharge with our premium selection of food and beverages. From artisanal pizzas to legendary shakes.',
      items: [
        { title: 'Artisan Pizza', price: '$14', desc: 'Fresh dough, premium toppings.' },
        { title: 'Neon Shakes', price: '$8', desc: 'Our signature glowing milkshakes.' },
        { title: 'Pro Burgers', price: '$12', desc: '100% Angus beef, brioche bun.' }
      ]
    },
    plan: {
      badge: 'Plan Your Visit',
      title1: 'Everything You',
      title2: 'Need to Know',
      desc: 'Make the most of your day at Family Fun Town with these essential tips and guidelines.',
      items: [
        { title: 'Safety First', desc: 'Height requirements apply to certain rides. Closed-toe shoes are recommended.' },
        { title: 'Hours', desc: 'Open daily from 10 AM to 11 PM. Holiday hours may vary.' },
        { title: 'Location', desc: 'Located in the heart of Orange City, FL. Plenty of free parking available.' }
      ]
    }
  },
  pt: {
    nav: {
      attractions: 'Atrações',
      birthdays: 'Aniversários',
      specials: 'Especiais',
      contact: 'Contato',
      openNow: 'Aberto Agora',
      bookNow: 'Reserve Agora',
      menu: 'Menu'
    },
    hero: {
      badge: 'O Destino Definitivo para a Família',
      title1: 'Liberte',
      title2: 'A Diversão',
      getStarted: 'Começar',
      viewAttractions: 'Ver Atrações',
      explore: 'Explorar'
    },
    attractions: {
      badge: 'Nossas Atrações',
      title1: 'O Coração do',
      title2: 'Entretenimento',
      desc: 'Experimente emoções de classe mundial e aventuras para toda a família. Do ronco dos motores ao brilho neon do fliperama.',
      items: {
        goKarts: {
          title: 'Go Karts',
          tag: 'Velocidade',
          desc: 'Domine as curvas em nossa pista profissional com karts de alta performance.'
        },
        miniGolf: {
          title: 'Mini Golf',
          tag: 'Habilidade',
          desc: '18 buracos de aventura iluminada por neon.'
        },
        arcade: {
          title: 'Fliperama',
          tag: 'Jogar',
          desc: 'O destino final dos jogos com mais de 100 títulos clássicos e modernos.'
        },
        batting: {
          title: 'Rebatida',
          tag: 'Poder',
          desc: 'Bata para fora do campo.'
        }
      }
    },
    ticker: {
      fun: 'Diversão Ilimitada',
      racing: 'Corrida Pro',
      golf: 'Golf Neon',
      arcade: 'Lendas do Arcade'
    },
    stats: {
      guests: 'Clientes Felizes',
      games: 'Jogos de Arcade',
      rooms: 'Salas de Festa'
    },
    birthdays: {
      badge: 'Celebrações',
      title1: 'Festas',
      title2: 'Lendárias',
      desc: 'Não apenas faça uma festa — crie um legado. Nossos pacotes VIP com tudo incluído cuidam de tudo, desde lounges de alta tecnologia até buffet profissional.',
      vipOnly: 'Apenas VIP',
      elitePackages: 'Pacotes de Festa Elite',
      features: [
        { title: 'Acesso Prioritário', desc: 'Pule as filas, domine a pista.' },
        { title: 'Centro de Comando Privado', desc: 'Lounges de luxo para seu grupo.' },
        { title: 'Combustível Gourmet', desc: 'Comida e bebidas premium.' }
      ],
      exploreElite: 'Explorar Pacotes Elite'
    },
    cta: {
      title1: 'Pronto para',
      title2: 'Jogar?',
      book: 'Reserve sua Experiência'
    },
    footer: {
      desc: 'O principal destino para entretenimento familiar de alta octanagem na Flórida.',
      explore: 'Explorar',
      support: 'Suporte',
      location: 'Localização',
      openToday: 'Aberto Hoje',
      privacy: 'Privacidade',
      terms: 'Termos',
      designed: 'Projetado para o Futuro'
    },
    pricing: {
      badge: 'Passes e Preços',
      title1: 'Escolha sua',
      title2: 'Aventura',
      desc: 'Opções flexíveis para todos os tipos de diversão. De corridas individuais a acesso ilimitado o dia todo.',
      book: 'Comprar Passaporte',
      items: [
        { title: 'Passe Diário', price: 'R$149', features: ['Go-Karts Ilimitados', 'Mini-Golf Ilimitado', '10 Créditos de Arcade'] },
        { title: 'Passe Pro', price: 'R$249', features: ['Tudo Ilimitado', '50 Créditos de Arcade', 'Acesso ao Lounge VIP'] },
        { title: 'Combo Família', price: 'R$599', features: ['4 Passes Diários', '100 Créditos de Arcade', 'Pizza e Bebidas Grátis'] }
      ]
    },
    food: {
      badge: 'Abasteça',
      title1: 'Lanches',
      title2: 'Gourmet',
      desc: 'Recarregue as energias com nossa seleção premium de comidas e bebidas. De pizzas artesanais a shakes lendários.',
      items: [
        { title: 'Pizza Artesanal', price: 'R$65', desc: 'Massa fresca, coberturas premium.' },
        { title: 'Shakes Neon', price: 'R$35', desc: 'Nossos milkshakes brilhantes exclusivos.' },
        { title: 'Hambúrguer Pro', price: 'R$45', desc: '100% carne Angus, pão brioche.' }
      ]
    },
    plan: {
      badge: 'Planeje sua Visita',
      title1: 'Tudo o que Você',
      title2: 'Precisa Saber',
      desc: 'Aproveite ao máximo seu dia no Family Fun Town com estas dicas e diretrizes essenciais.',
      items: [
        { title: 'Segurança Primeiro', desc: 'Requisitos de altura se aplicam a certas atrações. Recomenda-se calçados fechados.' },
        { title: 'Horários', desc: 'Aberto diariamente das 10h às 23h. Horários de feriados podem variar.' },
        { title: 'Localização', desc: 'Localizado no coração de Orange City, FL. Estacionamento gratuito disponível.' }
      ]
    }
  },
  es: {
    nav: {
      attractions: 'Atracciones',
      birthdays: 'Cumpleaños',
      specials: 'Especiales',
      contact: 'Contacto',
      openNow: 'Abierto Ahora',
      bookNow: 'Reservar Ahora',
      menu: 'Menú'
    },
    hero: {
      badge: 'El Destino Familiar Definitivo',
      title1: 'Desata',
      title2: 'La Diversión',
      getStarted: 'Empezar',
      viewAttractions: 'Ver Atracciones',
      explore: 'Explorar'
    },
    attractions: {
      badge: 'Nuestras Atracciones',
      title1: 'El Corazón del',
      title2: 'Entretenimiento',
      desc: 'Vive emociones de clase mundial y aventuras para toda la familia. Desde el rugido de los motores hasta el brillo de neón de los recreativos.',
      items: {
        goKarts: {
          title: 'Go Karts',
          tag: 'Velocidad',
          desc: 'Domina las curvas en nuestra pista profesional con karts de alto rendimiento.'
        },
        miniGolf: {
          title: 'Mini Golf',
          tag: 'Habilidad',
          desc: '18 hoyos de aventura iluminada por neón.'
        },
        arcade: {
          title: 'Arcade',
          tag: 'Jugar',
          desc: 'El destino definitivo para jugar con más de 100 títulos clásicos y modernos.'
        },
        batting: {
          title: 'Bateo',
          tag: 'Poder',
          desc: 'Batea hacia las cercas.'
        }
      }
    },
    ticker: {
      fun: 'Diversión Ilimitada',
      racing: 'Carreras Pro',
      golf: 'Golf de Neón',
      arcade: 'Leyendas del Arcade'
    },
    stats: {
      guests: 'Clientes Felices',
      games: 'Juegos de Arcade',
      rooms: 'Salas de Fiesta'
    },
    birthdays: {
      badge: 'Celebraciones',
      title1: 'Fiestas',
      title2: 'Legendarias',
      desc: 'No solo organices una fiesta, crea un legado. Nuestros paquetes VIP todo incluido se encargan de todo, desde salones de alta tecnología hasta catering profesional.',
      vipOnly: 'Solo VIP',
      elitePackages: 'Paquetes de Fiesta Elite',
      features: [
        { title: 'Acceso Prioritario', desc: 'Salta las colas, domina la pista.' },
        { title: 'Centro de Mando Privado', desc: 'Salones de lujo para tu grupo.' },
        { title: 'Combustible Gourmet', desc: 'Comida y bebidas premium.' }
      ],
      exploreElite: 'Explorar Paquetes Elite'
    },
    cta: {
      title1: '¿Listo para',
      title2: 'Jugar?',
      book: 'Reserva tu Experiencia'
    },
    footer: {
      desc: 'El principal destino de entretenimiento familiar de alto octanaje en Florida.',
      explore: 'Explorar',
      support: 'Soporte',
      location: 'Ubicación',
      openToday: 'Abierto Hoy',
      privacy: 'Privacidad',
      terms: 'Termos',
      designed: 'Diseñado para el Futuro'
    },
    pricing: {
      badge: 'Passes y Precios',
      title1: 'Elige tu',
      title2: 'Aventura',
      desc: 'Opciones flexibles para todo tipo de buscadores de diversión. Desde viajes individuales hasta acceso ilimitado durante todo el día.',
      book: 'Comprar Pase',
      items: [
        { title: 'Pase Diario', price: '$29', features: ['Go-Karts Ilimitados', 'Mini-Golf Ilimitado', '10 Créditos de Arcade'] },
        { title: 'Pase Pro', price: '$49', features: ['Todo Ilimitado', '50 Créditos de Arcade', 'Acceso al Lounge VIP'] },
        { title: 'Paquete Familiar', price: '$120', features: ['4 Pases Diarios', '100 Créditos de Arcade', 'Pizza y Bebidas Gratis'] }
      ]
    },
    food: {
      badge: 'Recarga',
      title1: 'Snacks',
      title2: 'Gourmet',
      desc: 'Recarga energías con nuestra selección premium de comida y bebidas. Desde pizzas artesanales hasta batidos legendarios.',
      items: [
        { title: 'Pizza Artesanal', price: '$14', desc: 'Masa fresca, ingredientes premium.' },
        { title: 'Batidos Neón', price: '$8', desc: 'Nuestros batidos brillantes exclusivos.' },
        { title: 'Hamburguesas Pro', price: '$12', desc: '100% carne Angus, pan brioche.' }
      ]
    },
    plan: {
      badge: 'Planifica tu Visita',
      title1: 'Todo lo que',
      title2: 'Necesitas Saber',
      desc: 'Aprovecha al máximo tu día en Family Fun Town con estos consejos y pautas esenciales.',
      items: [
        { title: 'Seguridad Primero', desc: 'Se aplican requisitos de altura a ciertas atracciones. Se recomienda calzado cerrado.' },
        { title: 'Horarios', desc: 'Abierto todos los días de 10 AM a 11 PM. Los horarios de festivos podem variar.' },
        { title: 'Ubicación', desc: 'Ubicado en el corazón de Orange City, FL. Amplio estacionamiento gratuito disponible.' }
      ]
    }
  }
};
