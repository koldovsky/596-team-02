
const productsJSON =
`[
    {
    "id" : "1",
    "category" : "herbal-products",
    "image" : "img/produckts/herbalproduckt/pure-rosehip-seed-oil.jpg",
    "title" : "Pure Rosehip Seed Oil, 1 oz (30 ml)",
    "price" : 5
    },

    {
    "id" : "2",
    "category" : "herbal-products",
    "image" : "img/produckts/herbalproduckt/elderberry-syrup.jpg",
    "title" : "Pure Rosehip Seed Oil, 1 oz (30 ml)",
    "price" : 5
    },

    {
    "id" : "3",
    "category" : "herbal-products",
    "image" : "img/produckts/herbalproduckt/cordyceps-strain.png",
    "title" : "Pure Rosehip Seed Oil, 1 oz (30 ml)",
    "price" : 5
    },

    {
    "id" : "4",
    "category" : "herbal-products",
    "image" : "img/produckts/herbalproduckt/cranberry-plus.jpg",
    "title" : "Pure Rosehip Seed Oil, 1 oz (30 ml)",
    "price" : 5
    },



    {
    "id" : "1",
    "category" : "supplements",
    "image" : "img/produckts/supplements/hydrolyzed-collagen+hyaluronic-acid.jpg",
    "title" : "Hydrolyzed Collagen + Hyaluronic Acid + Vitamin C, 7.26 oz",
    "price" : 5
    },

    {
    "id" : "2",
    "category" : "supplements",
    "image" : "img/produckts/supplements/immune-immune-system-support.jpg",
    "title" : "Immune 4, Immune System Support, 60 capsules",
    "price" : 10
    },

    {
    "id" : "3",
    "category" : "supplements",
    "image" : "img/produckts/supplements/strawberry-soothing-syrup-berry-flavored.jpg",
    "title" : "Strawberry Soothing Syrup, Berry Flavored, 4 fl oz (120 ml)",
    "price" : 30
    },

    {
    "id" : "4",
    "category" : "supplements",
    "image" : "img/produckts/supplements/digestive-enzymes.jpg",
    "title" : "Digestive Enzymes, Broad Spectrum, 90 capsules",
    "price" : 50
    },


    {
    "id" : "1",
    "category" : "sports",
    "image" : "img/produckts/sports/branched-chain-amino-acids.jpg",
    "title" : "Branched-Chain Amino Acids, 240 capsules",
    "price" : 15
    },

    {
    "id" : "2",
    "category" : "sports",
    "image" : "img/produckts/sports/l-carnitine.jpg",
    "title" : "L-Carnitine, 3000, Berry, 16 fl oz (473 ml)",
    "price" : 10
    },

    {
    "id" : "3",
    "category" : "sports",
    "image" : "img/produckts/sports/ionic-minerals-electrolytes.jpg",
    "title" : "Ionic Minerals, Electrolytes, Liquid Concentrate, 2 oz (60 ml)",
    "price" : 30
    },

    {
    "id" : "4",
    "category" : "sports",
    "image" : "img/produckts/sports/micronized-creatine-capsules.jpg",
    "title" : "Micronized Creatine Capsules, 2.5 g, 200 capsules",
    "price" : 50
    },


    {
    "id" : "1",
    "category" : "probiotics",
    "image" : "img/produckts/probiotics/ultimate-probiotic-senior’s.jpg",
    "title" : "Ultimate Probiotic, Senior’s, 35 Billion CFU, 30 capsules",
    "price" : 15
    },

    {
    "id" : "2",
    "category" : "probiotics",
    "image" : "img/produckts/probiotics/lactobif-probiotics.jpg",
    "title" : "LactoBif Probiotics, 5 Billion CFU, 60 capsules",
    "price" : 10
    },

    {
    "id" : "3",
    "category" : "probiotics",
    "image" : "img/produckts/probiotics/acidophilus-probiotic-blend.jpg",
    "title" : "Acidophilus Probiotic Blend, 150 capsules",
    "price" : 30
    },

    {
    "id" : "4",
    "category" : "probiotics",
    "image" : "img/produckts/probiotics/probiotic-billion.jpg",
    "title" : "Probiotic-10, 50 Billion, 50 capsules",
    "price" : 50
    },



    {
    "id" : "1",
    "category" : "viamins",
    "image" : "img/produckts/vitamins/gold-c-vitamin-c.jpg",
    "title" : "Gold C, Vitamin C, 1,000 mg, 60 capsules",
    "price" : 15
    },

    {
    "id" : "2",
    "category" : "viamins",
    "image" : "img/produckts/vitamins/vitamin-d-purpule.jpg",
    "title" : "Vitamin D3, 125 mcg (5,000 IU), 90 softgels",
    "price" : 10
    },

    {
    "id" : "3",
    "category" : "viamins",
    "image" : "img/produckts/vitamins/vitamin-natural-berry-flavor.jpg",
    "title" : "Vitamin D3, Natural Berry Flavor, 1 fl oz (30 ml)",
    "price" : 30
    },

    {
    "id" : "4",
    "category" : "viamins",
    "image" : "img/produckts/vitamins/vitamin-d.jpg",
    "title" : "Vitamin D3 + K2, Soy Free, 125 mcg (5,000 IU), 60 capsules",
    "price" : 50
    }

    ]`


    function renderTab(products, category) {
        let html = '';
        const productsByCategory = products.filter( product => product.category === category );
        for (const product of productsByCategory) {
          html += `
            <div class="container_element">
              <img src="${product.image}" alt="${product.title}">
              <p>${product.title}</p>
              <p>${product.price} USD</p>
              <button>buy</button>
            </div>
          `;
        }
        const productsContainer = document.querySelector('.products__container');
        productsContainer.innerHTML = html;
      }
      
      const products = JSON.parse(productsJSON);
      
      document.querySelector('.herbal-products')
              .addEventListener('click', () => {
                renderTab(products, 'herbal-products');
                });
      document.querySelector('.supplements')
              .addEventListener('click', () => renderTab(products, 'supplements'));
      document.querySelector('.sports')
              .addEventListener('click', () => renderTab(products, 'sports'));
      document.querySelector('.probiotics')
              .addEventListener('click', () => renderTab(products, 'probiotics'));
      document.querySelector('.viamins')
              .addEventListener('click', () => renderTab(products, 'viamins'));
      
      renderTab(products, 'herbal-products');
