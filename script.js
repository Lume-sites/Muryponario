/* ========================================
   CONFIGURAÇÃO
======================================== */

const whatsappNumber =
  "5522999973287";


/* ========================================
   WHATSAPP GERAL
======================================== */

const whatsappButtons =
  document.querySelectorAll(
    ".js-whatsapp"
  );


whatsappButtons.forEach(
  (button) => {

    const message =
      "Olá! Vim pelo site da Muryponário e gostaria de conhecer melhor os produtos.";


    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


    button.href =
      whatsappURL;


    button.target =
      "_blank";


    button.rel =
      "noopener noreferrer";

  }
);


/* ========================================
   WHATSAPP PARA ENCOMENDAS
======================================== */

const orderWhatsappButtons =
  document.querySelectorAll(
    ".js-whatsapp-order"
  );


orderWhatsappButtons.forEach(
  (button) => {

    const message =
      "Olá! Vim pelo site da Muryponário e gostaria de fazer uma encomenda. Poderia me passar mais informações sobre produtos, formatos, quantidades e possibilidades?";


    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


    button.href =
      whatsappURL;


    button.target =
      "_blank";


    button.rel =
      "noopener noreferrer";

  }
);


/* ========================================
   WHATSAPP POR PRODUTO
======================================== */

const productWhatsappButtons =
  document.querySelectorAll(
    ".js-whatsapp-product"
  );


productWhatsappButtons.forEach(
  (button) => {

    const productName =
      button.dataset.product;


    const message =
      `Olá! Vim pelo site da Muryponário e gostaria de saber mais sobre o produto ${productName}.`;


    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


    button.href =
      whatsappURL;


    button.target =
      "_blank";


    button.rel =
      "noopener noreferrer";

  }
);


/* ========================================
   MENU MOBILE
======================================== */

const menuToggle =
  document.getElementById(
    "menuToggle"
  );


const nav =
  document.getElementById(
    "nav"
  );


if (
  menuToggle &&
  nav
) {

  menuToggle.addEventListener(
    "click",
    () => {

      const isOpen =
        nav.classList.toggle(
          "mobile-open"
        );


      menuToggle.setAttribute(
        "aria-expanded",
        isOpen
      );

    }
  );


  const navLinks =
    nav.querySelectorAll(
      "a"
    );


  navLinks.forEach(
    (link) => {

      link.addEventListener(
        "click",
        () => {

          nav.classList.remove(
            "mobile-open"
          );


          menuToggle.setAttribute(
            "aria-expanded",
            "false"
          );

        }
      );

    }
  );

}


/* ========================================
   FILTROS DOS PRODUTOS
======================================== */

const filterButtons =
  document.querySelectorAll(
    ".filter-btn"
  );


const products =
  document.querySelectorAll(
    ".catalog-product"
  );


const productGrid =
  document.getElementById(
    "productGrid"
  );


/* ========================================
   ORDEM DOS PRODUTOS
======================================== */

const productOrders = {


  /* =====================================
     TODOS
  ====================================== */

  todos: [

    "Lip Bee",

    "Terra Bee Terracota",

    "Terra Bee Marrom",

    "Abelha Rainha",

    "Demaq Bee",

    "Derma Pimples",

    "Bee Lash",

    "Be Beauty",

    "Hidra Honey",

    "Apis Clean Açafrão",

    "Apis Clean Bucha Vegetal",

    "Apis Clean Sal Grosso & Alecrim",

    "Apis Clean Argila Preta",

    "Apis Clean Argila Cinza",

    "Apis Clean Argila Vermelha",

    "Apis Clean Mulungu",

    "Apis Clean Cera de Abelha",

    "Apis Clean Barbatimão",

    "Esfoli Bee",

    "Cera Cure",

    "Hidra Hair",

    "Caspacontrol",

    "Derma Bee",

    "Mamica Bee",

    "Pomada de Barbatimão",

    "Pomada Ouro da Tubuna",

    "Ceramel",

    "Melcão",

    "Meliderme",

    "Repelente de Própolis, Cravo e Canela",

    "Mel Puro Plástico",

    "Mel Puro Vidro",

    "Favo de Mel",

    "Favo de Mel no Suporte",

    "Própolis de Abelha Nativa",

    "Atrativos de Abelhas Nativas",

    "Hive Bee Color",

    "Hive Bee Natural",

    "Zen Bee",

    "Feng Bee",

    "Honey Touch",

    "Flow Bee",

    "Divina Bee",

    "Honey Hive",

    "Diamond Bee",

    "Classic Bee",

    "Mini Presépio",

    "Pano de Cera",

    "Impermeabilizante",

    "Trouxinha Perfumada"

  ],


  /* =====================================
     BELEZA & AUTOCUIDADO
  ====================================== */

  beleza: [

    "Lip Bee",

    "Terra Bee Terracota",

    "Terra Bee Marrom",

    "Abelha Rainha",

    "Demaq Bee",

    "Derma Pimples",

    "Bee Lash",

    "Be Beauty",

    "Hidra Honey",

    "Apis Clean Açafrão",

    "Apis Clean Bucha Vegetal",

    "Apis Clean Sal Grosso & Alecrim",

    "Apis Clean Argila Preta",

    "Apis Clean Argila Cinza",

    "Apis Clean Argila Vermelha",

    "Apis Clean Mulungu",

    "Apis Clean Cera de Abelha",

    "Apis Clean Barbatimão",

    "Hidra Hair",

    "Caspacontrol",

    "Esfoli Bee"

  ],


  /* =====================================
     CUIDADOS ESPECIAIS
  ====================================== */

  cuidados: [

    "Pomada de Barbatimão",

    "Pomada Ouro da Tubuna",

    "Ceramel",

    "Melcão",

    "Derma Bee",

    "Mamica Bee",

    "Meliderme",

    "Cera Cure",

    "Repelente de Própolis, Cravo e Canela"

  ],


  /* =====================================
     COLMEIA & NATUREZA
  ====================================== */

  colmeia: [

    "Mel Puro Plástico",

    "Mel Puro Vidro",

    "Favo de Mel",

    "Favo de Mel no Suporte",

    "Própolis de Abelha Nativa",

    "Atrativos de Abelhas Nativas",

    "Hive Bee Color",

    "Hive Bee Natural",

    "Zen Bee",

    "Feng Bee",

    "Honey Touch",

    "Flow Bee",

    "Divina Bee",

    "Honey Hive",

    "Diamond Bee",

    "Classic Bee",

    "Mini Presépio",

    "Pano de Cera",

    "Impermeabilizante",

    "Trouxinha Perfumada"

  ]

};


/* ========================================
   IDENTIFICAR NOME DO PRODUTO
======================================== */

function getProductName(
  product
) {

  if (
    product.dataset.sortName
  ) {

    return (
      product.dataset.sortName
    );

  }


  const title =
    product.querySelector(
      "h3"
    );


  if (
    !title
  ) {

    return "";

  }


  return (
    title.textContent.trim()
  );

}


/* ========================================
   ORGANIZAR PRODUTOS
======================================== */

function organizeProducts(
  category
) {

  if (
    !productGrid
  ) {

    return;

  }


  const order =
    productOrders[category] ||
    productOrders.todos;


  const addedProducts =
    new Set();


  order.forEach(
    (productName) => {

      const product =
        Array.from(
          products
        ).find(
          (item) =>
            getProductName(
              item
            ) ===
            productName
        );


      if (
        product
      ) {

        productGrid.appendChild(
          product
        );


        addedProducts.add(
          productName
        );

      }

    }
  );


  products.forEach(
    (product) => {

      const productName =
        getProductName(
          product
        );


      const productCategory =
        product.dataset.category;


      const belongsToCategory =
        category === "todos" ||
        productCategory === category;


      if (
        belongsToCategory &&
        !addedProducts.has(
          productName
        )
      ) {

        productGrid.appendChild(
          product
        );

      }

    }
  );

}


/* ========================================
   FILTRAR PRODUTOS
======================================== */

function filterProducts(
  category
) {

  products.forEach(
    (product) => {

      const productCategory =
        product.dataset.category;


      if (
        category === "todos" ||
        productCategory === category
      ) {

        product.classList.remove(
          "hidden"
        );

      } else {

        product.classList.add(
          "hidden"
        );

      }

    }
  );


  organizeProducts(
    category
  );


  filterButtons.forEach(
    (button) => {

      if (
        button.dataset.filter ===
        category
      ) {

        button.classList.add(
          "active"
        );

      } else {

        button.classList.remove(
          "active"
        );

      }

    }
  );

}


/* ========================================
   CLIQUE NOS FILTROS
======================================== */

filterButtons.forEach(
  (button) => {

    button.addEventListener(
      "click",
      () => {

        const category =
          button.dataset.filter;


        filterProducts(
          category
        );


        const newURL =
          new URL(
            window.location.href
          );


        if (
          category === "todos"
        ) {

          newURL.searchParams.delete(
            "categoria"
          );

        } else {

          newURL.searchParams.set(
            "categoria",
            category
          );

        }


        window.history.replaceState(
          {},
          "",
          newURL
        );

      }
    );

  }
);


/* ========================================
   FILTRO VINDO DA HOME
======================================== */

if (
  products.length > 0
) {

  const urlParams =
    new URLSearchParams(
      window.location.search
    );


  const categoryFromURL =
    urlParams.get(
      "categoria"
    );


  const validCategories = [

    "beleza",

    "cuidados",

    "colmeia"

  ];


  if (
    categoryFromURL &&
    validCategories.includes(
      categoryFromURL
    )
  ) {

    filterProducts(
      categoryFromURL
    );

  } else {

    filterProducts(
      "todos"
    );

  }

}


/* ========================================
   FILTROS DO RODAPÉ
======================================== */

const footerFilterLinks =
  document.querySelectorAll(
    "[data-footer-filter]"
  );


footerFilterLinks.forEach(
  (link) => {

    link.addEventListener(
      "click",
      (event) => {

        event.preventDefault();


        const category =
          link.dataset.footerFilter;


        if (
          products.length > 0
        ) {

          filterProducts(
            category
          );


          const newURL =
            new URL(
              window.location.href
            );


          newURL.searchParams.set(
            "categoria",
            category
          );


          window.history.replaceState(
            {},
            "",
            newURL
          );


          const catalogSection =
            document.querySelector(
              ".catalog-section"
            );


          if (
            catalogSection
          ) {

            catalogSection.scrollIntoView({

              behavior:
                "smooth",

              block:
                "start"

            });

          }

        } else {

          window.location.href =
            `produtos.html?categoria=${category}`;

        }

      }
    );

  }
);


/* ========================================
   VÍDEO DA ANDRÉIA
   PLAYER PERSONALIZADO
======================================== */

const storyVideo =
  document.getElementById(
    "storyVideo"
  );


const storyVideoCover =
  document.getElementById(
    "storyVideoCover"
  );


if (
  storyVideo &&
  storyVideoCover
) {


  /* =====================================
     ESTADO INICIAL
  ====================================== */

  storyVideo.controls =
    false;


  storyVideo.muted =
    false;


  storyVideo.pause();


  /*
    GARANTE QUE O VÍDEO COMECE
    SEMPRE DO INÍCIO.
  */

  try {

    storyVideo.currentTime =
      0;

  } catch (
    error
  ) {

    /* não faz nada */

  }


  /* =====================================
     CLIQUE NA CAPA
  ====================================== */

  storyVideoCover.addEventListener(
    "click",
    async () => {


      /*
        PRIMEIRO ATIVAMOS OS CONTROLES.
      */

      storyVideo.controls =
        true;


      /*
        O VÍDEO DA ANDRÉIA TEM SOM.
      */

      storyVideo.muted =
        false;


      /*
        ESCONDE A CAPA.
      */

      storyVideoCover.classList.add(
        "is-hidden"
      );


      try {

        /*
          COMEÇA O VÍDEO.
        */

        await storyVideo.play();

      } catch (
        error
      ) {

        /*
          CASO O NAVEGADOR BLOQUEIE
          A REPRODUÇÃO, VOLTA PARA
          O ESTADO INICIAL.
        */

        storyVideo.controls =
          false;


        storyVideoCover.classList.remove(
          "is-hidden"
        );

      }

    }
  );


  /* =====================================
     QUANDO O VÍDEO TERMINAR
  ====================================== */

  storyVideo.addEventListener(
    "ended",
    () => {


      /*
        1. A CAPA VOLTA PRIMEIRO.

        Isso é importante porque impede
        que o visitante veja o último
        frame da Andréia.
      */

      storyVideoCover.classList.remove(
        "is-hidden"
      );


      /*
        2. ESCONDE OS CONTROLES.
      */

      storyVideo.controls =
        false;


      /*
        3. PAUSA O VÍDEO.
      */

      storyVideo.pause();


      /*
        4. VOLTA O VÍDEO PARA O INÍCIO
        ENQUANTO A CAPA JÁ ESTÁ POR CIMA.
      */

      try {

        storyVideo.currentTime =
          0;

      } catch (
        error
      ) {

        /* não faz nada */

      }

    }
  );


  /* =====================================
     SEGURANÇA EXTRA

     Se o navegador considerar o vídeo
     encerrado antes do evento "ended",
     garantimos a volta da capa.
  ====================================== */

  storyVideo.addEventListener(
    "timeupdate",
    () => {

      if (
        storyVideo.duration &&
        storyVideo.currentTime >=
          storyVideo.duration - 0.08
      ) {

        storyVideoCover.classList.remove(
          "is-hidden"
        );

      }

    }
  );


  /* =====================================
     AO VOLTAR PARA O INÍCIO
  ====================================== */

  storyVideo.addEventListener(
    "seeked",
    () => {

      if (
        storyVideo.currentTime === 0 &&
        storyVideo.paused
      ) {

        storyVideo.controls =
          false;


        storyVideoCover.classList.remove(
          "is-hidden"
        );

      }

    }
  );

}


/* ========================================
   ANO AUTOMÁTICO
======================================== */

const currentYear =
  document.getElementById(
    "currentYear"
  );


if (
  currentYear
) {

  currentYear.textContent =
    new Date().getFullYear();

}