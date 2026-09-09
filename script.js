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
   LINHA PROTEÇÃO
   RECLASSIFICAR PRODUTOS
======================================== */

const protectionProducts = [

  "Própolis de Abelha Nativa",

  "Spray de Garganta",

  "Extrato Aquoso de Própolis"

];


protectionProducts.forEach(
  (productName) => {

    const product =
      document.querySelector(
        `.catalog-product[data-sort-name="${productName}"]`
      );


    if (
      !product
    ) {

      return;

    }


    product.dataset.category =
      "cuidados";


    const categoryLabel =
      product.querySelector(
        ".product-category"
      );


    if (
      categoryLabel
    ) {

      categoryLabel.textContent =
        "Proteção";

    }

  }
);


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


    /* =====================================
       PROTEÇÃO
    ====================================== */

    "Própolis de Abelha Nativa",

    "Spray de Garganta",

    "Extrato Aquoso de Própolis",

    "Repelente de Própolis, Cravo e Canela",


    /* =====================================
       COLMEIA & NATUREZA
    ====================================== */

    "Mel Puro Plástico",

    "Mel Puro Vidro",

    "Favo de Mel",

    "Favo de Mel no Suporte",

    "Composto de Mel e Própolis",

    "Cera Bruta",

    "Atrativos de Abelhas Nativas",


    /* =====================================
       VELAS
    ====================================== */

    "Hive Bee Color",

    "Hive Bee Natural",

    "Zen Bee",

    "Design Bee",

    "Diamond Bee",

    "Honey Touch",

    "Flow Bee",

    "Classic Bee",


    /* =====================================
       CASA & UTILIDADES
    ====================================== */

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


    /* =====================================
       PROTEÇÃO
    ====================================== */

    "Própolis de Abelha Nativa",

    "Spray de Garganta",

    "Extrato Aquoso de Própolis",

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

    "Composto de Mel e Própolis",

    "Cera Bruta",

    "Atrativos de Abelhas Nativas",


    /* =====================================
       VELAS
    ====================================== */

    "Hive Bee Color",

    "Hive Bee Natural",

    "Zen Bee",

    "Design Bee",

    "Diamond Bee",

    "Honey Touch",

    "Flow Bee",

    "Classic Bee",


    /* =====================================
       CASA & UTILIDADES
    ====================================== */

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
   CARROSSEL DOS CARDS DE PRODUTO
======================================== */

const productCarousels =
  document.querySelectorAll(
    "[data-carousel]"
  );


productCarousels.forEach(
  (carousel) => {

    const slides =
      Array.from(
        carousel.querySelectorAll(
          ".product-carousel-slide"
        )
      );


    const dots =
      Array.from(
        carousel.querySelectorAll(
          ".product-carousel-dot"
        )
      );


    const previousButton =
      carousel.querySelector(
        ".product-carousel-prev"
      );


    const nextButton =
      carousel.querySelector(
        ".product-carousel-next"
      );


    if (
      slides.length === 0
    ) {

      return;

    }


    let currentSlide =
      slides.findIndex(
        (slide) =>
          slide.classList.contains(
            "active"
          )
      );


    if (
      currentSlide < 0
    ) {

      currentSlide =
        0;

    }


    let touchStartX =
      null;


    let touchStartY =
      null;


    const showSlide =
      (index) => {

        const totalSlides =
          slides.length;


        currentSlide =
          (
            index +
            totalSlides
          ) %
          totalSlides;


        slides.forEach(
          (slide, slideIndex) => {

            const isActive =
              slideIndex ===
              currentSlide;


            slide.classList.toggle(
              "active",
              isActive
            );


            slide.setAttribute(
              "aria-hidden",
              isActive
                ? "false"
                : "true"
            );

          }
        );


        dots.forEach(
          (dot, dotIndex) => {

            const isActive =
              dotIndex ===
              currentSlide;


            dot.classList.toggle(
              "active",
              isActive
            );


            dot.setAttribute(
              "aria-current",
              isActive
                ? "true"
                : "false"
            );

          }
        );

      };


    const showPreviousSlide =
      () => {

        showSlide(
          currentSlide - 1
        );

      };


    const showNextSlide =
      () => {

        showSlide(
          currentSlide + 1
        );

      };


    if (
      previousButton
    ) {

      previousButton.addEventListener(
        "click",
        (event) => {

          event.preventDefault();

          event.stopPropagation();


          showPreviousSlide();

        }
      );

    }


    if (
      nextButton
    ) {

      nextButton.addEventListener(
        "click",
        (event) => {

          event.preventDefault();

          event.stopPropagation();


          showNextSlide();

        }
      );

    }


    dots.forEach(
      (dot, dotIndex) => {

        dot.addEventListener(
          "click",
          (event) => {

            event.preventDefault();

            event.stopPropagation();


            const requestedSlide =
              Number(
                dot.dataset.slide
              );


            showSlide(
              Number.isInteger(
                requestedSlide
              )
                ? requestedSlide
                : dotIndex
            );

          }
        );

      }
    );


    /* =====================================
       TECLADO
    ====================================== */

    carousel.addEventListener(
      "keydown",
      (event) => {

        if (
          event.key ===
          "ArrowLeft"
        ) {

          event.preventDefault();


          showPreviousSlide();

        }


        if (
          event.key ===
          "ArrowRight"
        ) {

          event.preventDefault();


          showNextSlide();

        }

      }
    );


    /* =====================================
       SWIPE MOBILE
    ====================================== */

    carousel.addEventListener(
      "touchstart",
      (event) => {

        if (
          event.touches.length !==
          1
        ) {

          return;

        }


        touchStartX =
          event.touches[0].clientX;


        touchStartY =
          event.touches[0].clientY;

      },
      {
        passive:
          true
      }
    );


    carousel.addEventListener(
      "touchend",
      (event) => {

        if (
          touchStartX === null ||
          touchStartY === null ||
          event.changedTouches.length === 0
        ) {

          return;

        }


        const touchEndX =
          event.changedTouches[0].clientX;


        const touchEndY =
          event.changedTouches[0].clientY;


        const differenceX =
          touchEndX -
          touchStartX;


        const differenceY =
          touchEndY -
          touchStartY;


        touchStartX =
          null;


        touchStartY =
          null;


        const minimumSwipeDistance =
          40;


        const isHorizontalSwipe =
          Math.abs(
            differenceX
          ) >
          Math.abs(
            differenceY
          );


        if (
          !isHorizontalSwipe ||
          Math.abs(
            differenceX
          ) <
          minimumSwipeDistance
        ) {

          return;

        }


        if (
          differenceX < 0
        ) {

          showNextSlide();

        } else {

          showPreviousSlide();

        }

      },
      {
        passive:
          true
      }
    );


    /* =====================================
       VERIFICAR IMAGENS AUSENTES
    ====================================== */

    slides.forEach(
      (slide) => {

        const image =
          slide.querySelector(
            ".product-image"
          );


        if (
          !image
        ) {

          return;

        }


        const markImageAsMissing =
          () => {

            slide.classList.add(
              "image-missing"
            );

        };


        image.addEventListener(
          "error",
          markImageAsMissing
        );


        if (
          image.complete &&
          image.naturalWidth === 0
        ) {

          markImageAsMissing();

        }

      }
    );


    /* =====================================
       INICIALIZAR CARROSSEL
    ====================================== */

    showSlide(
      currentSlide
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