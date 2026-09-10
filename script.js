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

    "Própolis de Abelha Nativa",

    "Spray de Garganta",

    "Extrato Aquoso de Própolis",

    "Repelente de Própolis, Cravo e Canela",

    "Mel Puro Plástico",

    "Mel Puro Vidro",

    "Favo de Mel",

    "Favo de Mel no Suporte",

    "Composto de Mel e Própolis",

    "Cera Bruta",

    "Atrativos de Abelhas Nativas",

    "Hive Bee Color",

    "Hive Bee Natural",

    "Zen Bee",

    "Design Bee",

    "Diamond Bee",

    "Honey Touch",

    "Flow Bee",

    "Classic Bee",

    "Mini Presépio",

    "Pano de Cera",

    "Impermeabilizante",

    "Trouxinha Perfumada"

  ],


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


  cuidados: [

    "Pomada de Barbatimão",

    "Pomada Ouro da Tubuna",

    "Ceramel",

    "Melcão",

    "Derma Bee",

    "Mamica Bee",

    "Meliderme",

    "Cera Cure",

    "Própolis de Abelha Nativa",

    "Spray de Garganta",

    "Extrato Aquoso de Própolis",

    "Repelente de Própolis, Cravo e Canela"

  ],


  colmeia: [

    "Mel Puro Plástico",

    "Mel Puro Vidro",

    "Favo de Mel",

    "Favo de Mel no Suporte",

    "Composto de Mel e Própolis",

    "Cera Bruta",

    "Atrativos de Abelhas Nativas",

    "Hive Bee Color",

    "Hive Bee Natural",

    "Zen Bee",

    "Design Bee",

    "Diamond Bee",

    "Honey Touch",

    "Flow Bee",

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
   CARROSSEL DOS CARDS
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


    showSlide(
      currentSlide
    );

  }
);


/* ========================================
   VÍDEO DA ANDRÉIA
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

  storyVideo.controls =
    false;


  storyVideo.muted =
    false;


  storyVideo.pause();


  try {

    storyVideo.currentTime =
      0;

  } catch (
    error
  ) {

  }


  storyVideoCover.addEventListener(
    "click",
    async () => {

      storyVideo.controls =
        true;


      storyVideo.muted =
        false;


      storyVideoCover.classList.add(
        "is-hidden"
      );


      try {

        await storyVideo.play();

      } catch (
        error
      ) {

        storyVideo.controls =
          false;


        storyVideoCover.classList.remove(
          "is-hidden"
        );

      }

    }
  );


  storyVideo.addEventListener(
    "ended",
    () => {

      storyVideoCover.classList.remove(
        "is-hidden"
      );


      storyVideo.controls =
        false;


      storyVideo.pause();


      try {

        storyVideo.currentTime =
          0;

      } catch (
        error
      ) {

      }

    }
  );


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


/* ========================================
   CARRINHO
======================================== */

const cartStorageKey =
  "muryponarioCartV1";


let cartItems = [];


/* ========================================
   CARREGAR
======================================== */

function cartLoad() {

  try {

    const storedCart =
      localStorage.getItem(
        cartStorageKey
      );


    if (
      !storedCart
    ) {

      cartItems = [];

      return;

    }


    const parsedCart =
      JSON.parse(
        storedCart
      );


    cartItems =
      Array.isArray(
        parsedCart
      )
        ? parsedCart
        : [];

  } catch (
    error
  ) {

    cartItems = [];

  }

}


/* ========================================
   SALVAR
======================================== */

function cartSave() {

  try {

    localStorage.setItem(
      cartStorageKey,
      JSON.stringify(
        cartItems
      )
    );

  } catch (
    error
  ) {

  }

}


/* ========================================
   TOTAL
======================================== */

function cartGetTotalQuantity() {

  return cartItems.reduce(
    (
      total,
      item
    ) => {

      return (
        total +
        item.quantity
      );

    },
    0
  );

}


/* ========================================
   ESCAPAR HTML
======================================== */

function cartEscapeHTML(
  value
) {

  const div =
    document.createElement(
      "div"
    );


  div.textContent =
    String(
      value ?? ""
    );


  return div.innerHTML;

}


/* ========================================
   IMAGEM
======================================== */

function cartNormalizeImage(
  imageSource
) {

  if (
    !imageSource
  ) {

    return "";

  }


  try {

    return new URL(
      imageSource,
      window.location.href
    ).href;

  } catch (
    error
  ) {

    return imageSource;

  }

}


/* ========================================
   INTERFACE
======================================== */

function cartCreateInterface() {

  if (
    document.getElementById(
      "cartDrawer"
    )
  ) {

    return;

  }


  const headerContainer =
    document.querySelector(
      ".header-container"
    );


  if (
    headerContainer
  ) {

    const cartButton =
      document.createElement(
        "button"
      );


    cartButton.type =
      "button";


    cartButton.className =
      "header-cart-button";


    cartButton.id =
      "headerCartButton";


    cartButton.setAttribute(
      "aria-label",
      "Abrir carrinho"
    );


    cartButton.setAttribute(
      "aria-controls",
      "cartDrawer"
    );


    cartButton.setAttribute(
      "aria-expanded",
      "false"
    );


    cartButton.innerHTML = `
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M3 4h2l2.05 9.12a2 2 0 0 0 1.95 1.56h7.86a2 2 0 0 0 1.95-1.55L20.3 7H6.25"
        ></path>

        <circle
          cx="9"
          cy="19"
          r="1.25"
        ></circle>

        <circle
          cx="17"
          cy="19"
          r="1.25"
        ></circle>
      </svg>

      <span class="header-cart-label">
        Carrinho
      </span>

      <span
        class="header-cart-count"
        id="headerCartCount"
      >
        0
      </span>
    `;


    const menuToggleElement =
      headerContainer.querySelector(
        ".menu-toggle"
      );


    if (
      menuToggleElement
    ) {

      headerContainer.insertBefore(
        cartButton,
        menuToggleElement
      );

    } else {

      headerContainer.appendChild(
        cartButton
      );

    }

  }


  const cartOverlay =
    document.createElement(
      "div"
    );


  cartOverlay.className =
    "cart-overlay";


  cartOverlay.id =
    "cartOverlay";


  cartOverlay.setAttribute(
    "aria-hidden",
    "true"
  );


  const cartDrawer =
    document.createElement(
      "aside"
    );


  cartDrawer.className =
    "cart-drawer";


  cartDrawer.id =
    "cartDrawer";


  cartDrawer.setAttribute(
    "role",
    "dialog"
  );


  cartDrawer.setAttribute(
    "aria-modal",
    "true"
  );


  cartDrawer.setAttribute(
    "aria-labelledby",
    "cartDrawerTitle"
  );


  cartDrawer.setAttribute(
    "aria-hidden",
    "true"
  );


  cartDrawer.innerHTML = `
    <div class="cart-drawer-header">

      <div>

        <span class="cart-drawer-eyebrow">
          Seu pedido
        </span>

        <h2 id="cartDrawerTitle">
          Carrinho
        </h2>

      </div>


      <button
        type="button"
        class="cart-close-button"
        id="cartCloseButton"
        aria-label="Fechar carrinho"
      >
        &times;
      </button>

    </div>


    <div
      class="cart-drawer-content"
      id="cartDrawerContent"
    >
    </div>


    <div
      class="cart-drawer-footer"
      id="cartDrawerFooter"
    >

      <div class="cart-summary-row">

        <span>
          Total de itens
        </span>

        <strong id="cartTotalItems">
          0
        </strong>

      </div>


      <p class="cart-checkout-note">
        O pedido será enviado para o WhatsApp da Muryponário.
        Valores, disponibilidade e entrega são confirmados no atendimento.
      </p>


      <button
        type="button"
        class="cart-whatsapp-button"
        id="cartWhatsappButton"
      >
        Comprar pelo WhatsApp
      </button>


      <button
        type="button"
        class="cart-continue-button"
        id="cartContinueButton"
      >
        Continuar escolhendo
      </button>


      <button
        type="button"
        class="cart-clear-button"
        id="cartClearButton"
      >
        Limpar carrinho
      </button>

    </div>
  `;


  const cartToast =
    document.createElement(
      "div"
    );


  cartToast.className =
    "cart-toast";


  cartToast.id =
    "cartToast";


  cartToast.setAttribute(
    "role",
    "status"
  );


  cartToast.setAttribute(
    "aria-live",
    "polite"
  );


  document.body.appendChild(
    cartOverlay
  );


  document.body.appendChild(
    cartDrawer
  );


  document.body.appendChild(
    cartToast
  );

}


/* ========================================
   BOTÕES NOS PRODUTOS
======================================== */

function cartInjectProductButtons() {

  const productCards =
    document.querySelectorAll(
      ".catalog-product"
    );


  productCards.forEach(
    (card) => {

      if (
        card.querySelector(
          ".product-cart-controls"
        )
      ) {

        return;

      }


      const productInfo =
        card.querySelector(
          ".product-info"
        );


      if (
        !productInfo
      ) {

        return;

      }


      const whatsappProductButton =
        card.querySelector(
          ".js-whatsapp-product"
        );


      const productTitle =
        card.querySelector(
          "h3"
        );


      const productName =
        whatsappProductButton?.dataset.product ||
        card.dataset.sortName ||
        productTitle?.textContent.trim();


      if (
        !productName
      ) {

        return;

      }


      const productImage =
        card.querySelector(
          ".product-image"
        );


      const controls =
        document.createElement(
          "div"
        );


      controls.className =
        "product-cart-controls";


      controls.innerHTML = `
        <div
          class="product-card-quantity"
          aria-label="Escolher quantidade"
        >

          <button
            type="button"
            class="product-card-quantity-button"
            data-product-quantity-action="decrease"
            aria-label="Diminuir quantidade"
          >
            −
          </button>


          <span
            class="product-card-quantity-value"
            aria-live="polite"
          >
            1
          </span>


          <button
            type="button"
            class="product-card-quantity-button"
            data-product-quantity-action="increase"
            aria-label="Aumentar quantidade"
          >
            +
          </button>

        </div>


        <button
          type="button"
          class="product-add-cart"
        >

          <svg
            class="product-add-cart-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M3 4h2l2.05 9.12a2 2 0 0 0 1.95 1.56h7.86a2 2 0 0 0 1.95-1.55L20.3 7H6.25"
            ></path>

            <circle
              cx="9"
              cy="19"
              r="1.25"
            ></circle>

            <circle
              cx="17"
              cy="19"
              r="1.25"
            ></circle>
          </svg>

          <span>
            Adicionar
          </span>

        </button>
      `;


      const addButton =
        controls.querySelector(
          ".product-add-cart"
        );


      const quantityValue =
        controls.querySelector(
          ".product-card-quantity-value"
        );


      const decreaseButton =
        controls.querySelector(
          '[data-product-quantity-action="decrease"]'
        );


      const increaseButton =
        controls.querySelector(
          '[data-product-quantity-action="increase"]'
        );


      let selectedQuantity =
        1;


      const updateQuantityDisplay =
        () => {

          quantityValue.textContent =
            selectedQuantity;


          decreaseButton.disabled =
            selectedQuantity <=
            1;


          decreaseButton.setAttribute(
            "aria-disabled",
            selectedQuantity <= 1
              ? "true"
              : "false"
          );

        };


      decreaseButton.addEventListener(
        "click",
        () => {

          if (
            selectedQuantity >
            1
          ) {

            selectedQuantity -=
              1;


            updateQuantityDisplay();

          }

        }
      );


      increaseButton.addEventListener(
        "click",
        () => {

          selectedQuantity +=
            1;


          updateQuantityDisplay();

        }
      );


      addButton.dataset.cartProduct =
        productName;


      addButton.dataset.cartImage =
        cartNormalizeImage(
          productImage?.getAttribute(
            "src"
          ) || ""
        );


      addButton.addEventListener(
        "click",
        () => {

          let selectedProductName =
            addButton.dataset.cartProduct;


          if (
            selectedProductName ===
            "Design Bee"
          ) {

            const activeDesignLabel =
              card.querySelector(
                ".product-carousel-slide.active .product-carousel-slide-label"
              );


            const designModel =
              activeDesignLabel?.textContent.trim();


            if (
              designModel
            ) {

              selectedProductName =
                `Design Bee - ${designModel}`;

            }

          }


          cartAddItem(
            {

              name:
                selectedProductName,

              image:
                addButton.dataset.cartImage,

              quantity:
                selectedQuantity

            }
          );


          selectedQuantity =
            1;


          updateQuantityDisplay();

        }
      );


      updateQuantityDisplay();


      productInfo.appendChild(
        controls
      );

    }
  );

}


/* ========================================
   ADICIONAR
======================================== */

function cartAddItem(
  product
) {

  const productName =
    String(
      product.name || ""
    ).trim();


  if (
    !productName
  ) {

    return;

  }


  const existingItem =
    cartItems.find(
      (item) => {

        return (
          item.name ===
          productName
        );

      }
    );


  const requestedQuantity =
    Math.max(
      1,
      Number.parseInt(
        product.quantity,
        10
      ) || 1
    );


  if (
    existingItem
  ) {

    existingItem.quantity +=
      requestedQuantity;

  } else {

    cartItems.push(
      {

        name:
          productName,

        image:
          product.image || "",

        quantity:
          requestedQuantity

      }
    );

  }


  cartSave();

  cartRender();


  cartShowToast(
    requestedQuantity === 1
      ? `${productName} foi adicionado ao carrinho.`
      : `${requestedQuantity} unidades de ${productName} foram adicionadas ao carrinho.`
  );

}


/* ========================================
   QUANTIDADE NO CARRINHO
======================================== */

function cartChangeQuantity(
  productName,
  amount
) {

  const item =
    cartItems.find(
      (cartItem) => {

        return (
          cartItem.name ===
          productName
        );

      }
    );


  if (
    !item
  ) {

    return;

  }


  item.quantity +=
    amount;


  if (
    item.quantity <=
    0
  ) {

    cartItems =
      cartItems.filter(
        (cartItem) => {

          return (
            cartItem.name !==
            productName
          );

        }
      );

  }


  cartSave();

  cartRender();

}


/* ========================================
   REMOVER
======================================== */

function cartRemoveItem(
  productName
) {

  cartItems =
    cartItems.filter(
      (item) => {

        return (
          item.name !==
          productName
        );

      }
    );


  cartSave();

  cartRender();

}


/* ========================================
   RENDER
======================================== */

function cartRender() {

  const cartCount =
    document.getElementById(
      "headerCartCount"
    );


  const cartContent =
    document.getElementById(
      "cartDrawerContent"
    );


  const cartFooter =
    document.getElementById(
      "cartDrawerFooter"
    );


  const cartTotalItems =
    document.getElementById(
      "cartTotalItems"
    );


  const totalQuantity =
    cartGetTotalQuantity();


  if (
    cartCount
  ) {

    cartCount.textContent =
      totalQuantity;


    cartCount.setAttribute(
      "aria-label",
      `${totalQuantity} ${
        totalQuantity === 1
          ? "item"
          : "itens"
      } no carrinho`
    );


    cartCount.classList.toggle(
      "has-items",
      totalQuantity > 0
    );

  }


  if (
    cartTotalItems
  ) {

    cartTotalItems.textContent =
      totalQuantity;

  }


  if (
    !cartContent
  ) {

    return;

  }


  if (
    cartItems.length ===
    0
  ) {

    cartContent.innerHTML = `
      <div class="cart-empty-state">

        <span
          class="cart-empty-icon"
          aria-hidden="true"
        >
          ♡
        </span>

        <h3>
          Seu carrinho está vazio
        </h3>

        <p>
          Adicione os produtos que deseja e envie a lista completa para a Muryponário pelo WhatsApp.
        </p>

        <a
          href="produtos.html"
          class="cart-empty-link"
        >
          Ver produtos
        </a>

      </div>
    `;


    if (
      cartFooter
    ) {

      cartFooter.classList.add(
        "is-empty"
      );

    }


    return;

  }


  if (
    cartFooter
  ) {

    cartFooter.classList.remove(
      "is-empty"
    );

  }


  cartContent.innerHTML =
    cartItems.map(
      (
        item,
        index
      ) => {

        const safeName =
          cartEscapeHTML(
            item.name
          );


        const safeImage =
          cartEscapeHTML(
            item.image || ""
          );


        return `
          <article
            class="cart-item"
            data-cart-index="${index}"
          >

            <div class="cart-item-image-wrapper">

              ${
                safeImage
                  ? `
                    <img
                      src="${safeImage}"
                      alt="${safeName}"
                      class="cart-item-image"
                    >
                  `
                  : `
                    <div
                      class="cart-item-image-placeholder"
                      aria-hidden="true"
                    >
                      ✦
                    </div>
                  `
              }

            </div>


            <div class="cart-item-info">

              <h3>
                ${safeName}
              </h3>


              <div class="cart-item-actions">

                <div
                  class="cart-quantity"
                  aria-label="Quantidade de ${safeName}"
                >

                  <button
                    type="button"
                    class="cart-quantity-button"
                    data-cart-action="decrease"
                    data-cart-name="${safeName}"
                  >
                    −
                  </button>


                  <span>
                    ${item.quantity}
                  </span>


                  <button
                    type="button"
                    class="cart-quantity-button"
                    data-cart-action="increase"
                    data-cart-name="${safeName}"
                  >
                    +
                  </button>

                </div>


                <button
                  type="button"
                  class="cart-remove-button"
                  data-cart-action="remove"
                  data-cart-name="${safeName}"
                >
                  Remover
                </button>

              </div>

            </div>

          </article>
        `;

      }
    ).join("");


  cartContent
    .querySelectorAll(
      "[data-cart-action]"
    )
    .forEach(
      (button) => {

        button.addEventListener(
          "click",
          () => {

            const productName =
              button.dataset.cartName;


            const action =
              button.dataset.cartAction;


            if (
              action ===
              "increase"
            ) {

              cartChangeQuantity(
                productName,
                1
              );

            }


            if (
              action ===
              "decrease"
            ) {

              cartChangeQuantity(
                productName,
                -1
              );

            }


            if (
              action ===
              "remove"
            ) {

              cartRemoveItem(
                productName
              );

            }

          }
        );

      }
    );

}


/* ========================================
   ABRIR
======================================== */

function cartOpen() {

  const cartDrawer =
    document.getElementById(
      "cartDrawer"
    );


  const cartOverlay =
    document.getElementById(
      "cartOverlay"
    );


  const cartButton =
    document.getElementById(
      "headerCartButton"
    );


  if (
    !cartDrawer ||
    !cartOverlay
  ) {

    return;

  }


  cartRender();


  document.body.classList.add(
    "cart-open"
  );


  cartDrawer.classList.add(
    "is-open"
  );


  cartOverlay.classList.add(
    "is-open"
  );


  cartDrawer.setAttribute(
    "aria-hidden",
    "false"
  );


  cartOverlay.setAttribute(
    "aria-hidden",
    "false"
  );


  cartButton?.setAttribute(
    "aria-expanded",
    "true"
  );


  document
    .getElementById(
      "cartCloseButton"
    )
    ?.focus();

}


/* ========================================
   FECHAR
======================================== */

function cartClose() {

  const cartDrawer =
    document.getElementById(
      "cartDrawer"
    );


  const cartOverlay =
    document.getElementById(
      "cartOverlay"
    );


  const cartButton =
    document.getElementById(
      "headerCartButton"
    );


  document.body.classList.remove(
    "cart-open"
  );


  cartDrawer?.classList.remove(
    "is-open"
  );


  cartOverlay?.classList.remove(
    "is-open"
  );


  cartDrawer?.setAttribute(
    "aria-hidden",
    "true"
  );


  cartOverlay?.setAttribute(
    "aria-hidden",
    "true"
  );


  cartButton?.setAttribute(
    "aria-expanded",
    "false"
  );

}


/* ========================================
   LIMPAR
======================================== */

function cartClear() {

  cartItems = [];


  cartSave();

  cartRender();


  cartShowToast(
    "Carrinho esvaziado."
  );

}


/* ========================================
   WHATSAPP DO PEDIDO
======================================== */

function cartSendToWhatsapp() {

  if (
    cartItems.length ===
    0
  ) {

    return;

  }


  const totalQuantity =
    cartGetTotalQuantity();


  const productLines =
    cartItems.map(
      (item) => {

        return (
          `• ${item.quantity}x ${item.name}`
        );

      }
    ).join(
      "\n"
    );


  const message =
    `Olá! Vim pelo site da Muryponário e gostaria de fazer um pedido. 🐝\n\n` +
    `*Meu carrinho:*\n` +
    `${productLines}\n\n` +
    `*Total de itens:* ${totalQuantity}\n\n` +
    `Poderia me informar os valores, a disponibilidade e as opções de entrega, por favor?`;


  const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


  window.open(
    whatsappURL,
    "_blank",
    "noopener,noreferrer"
  );

}


/* ========================================
   TOAST
======================================== */

let cartToastTimer =
  null;


function cartShowToast(
  message
) {

  const toast =
    document.getElementById(
      "cartToast"
    );


  if (
    !toast
  ) {

    return;

  }


  toast.textContent =
    message;


  toast.classList.add(
    "is-visible"
  );


  if (
    cartToastTimer
  ) {

    clearTimeout(
      cartToastTimer
    );

  }


  cartToastTimer =
    setTimeout(
      () => {

        toast.classList.remove(
          "is-visible"
        );

      },
      2400
    );

}


/* ========================================
   EVENTOS
======================================== */

function cartBindInterfaceEvents() {

  const cartButton =
    document.getElementById(
      "headerCartButton"
    );


  const closeButton =
    document.getElementById(
      "cartCloseButton"
    );


  const overlay =
    document.getElementById(
      "cartOverlay"
    );


  const continueButton =
    document.getElementById(
      "cartContinueButton"
    );


  const clearButton =
    document.getElementById(
      "cartClearButton"
    );


  const whatsappButton =
    document.getElementById(
      "cartWhatsappButton"
    );


  cartButton?.addEventListener(
    "click",
    cartOpen
  );


  closeButton?.addEventListener(
    "click",
    cartClose
  );


  overlay?.addEventListener(
    "click",
    cartClose
  );


  continueButton?.addEventListener(
    "click",
    cartClose
  );


  clearButton?.addEventListener(
    "click",
    cartClear
  );


  whatsappButton?.addEventListener(
    "click",
    cartSendToWhatsapp
  );


  document.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key ===
        "Escape"
      ) {

        cartClose();

      }

    }
  );

}


/* ========================================
   INICIALIZAR
======================================== */

function cartInitialize() {

  cartLoad();

  cartCreateInterface();

  cartInjectProductButtons();

  cartBindInterfaceEvents();

  cartRender();

}


cartInitialize();