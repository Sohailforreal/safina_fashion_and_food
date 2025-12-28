// menuData: Array of categories. Each category has { name, items: [{ name, price OR prices OR note }] }
const menuData = [
  {
    name: "Kunafa - Bar",
    items: [
      { name: "Pistachio Kunafa Bar", price: 300 },
      { name: "Nutella Kunafa Bar", price: 300 },
      { name: "Caramel Kunafa Bar", price: 300 },
      { name: "Biscoff Kunafa Bar", price: 300 }
    ]
  },
  {
    name: "Kunafa - Bait",
    items: [
      { name: "Pistachio Kunafa Bait", price: 50 },
      { name: "Nutella Kunafa Bait", price: 50 },
      { name: "Caramel Kunafa Bait", price: 50 },
      { name: "Coffee Kunafa Bait", price: 50 }, // 
      { name: "Biscoff Kunafa Bait", price: 50 }
    ]
  },
  {
    name: "Kunafa - Tub",
    items: [
      { name: "Pistachio Kunafa Tub", prices: [350, 250] },
      { name: "Nutella Kunafa Tub", prices: [350, 250] },
      { name: "Caramel Kunafa Tub", prices: [350, 250] },
      { name: "Biscoff Kunafa Tub", prices: [350, 250] }
    ]
  },

  {
    name: "Brownie",
    items: [
      { name: "Dark Fudge Brownie", price: 50 },
      { name: "Rocky Road Brownie", price: 50 },
      { name: "Hazelnut Brownie", price: 70 },
      { name: "Choco Chocolate Brownie", price: 90 }
    ]
  },

  {
    name: "Cup Cheesecake",
    items: [
      { name: "New York Cheesecake", price: 150 },
      { name: "Biscoff Cheesecake", price: 200 },
      { name: "Oreo Cheesecake", price: 150 },
      { name: "Nutella Cheesecake", price: 200 },
      { name: "Choco Berry Cheesecake", price: 200 },
      { name: "Sitafal Cheesecake", price: 200, note: "Seasonal" }
    ]
  },

  {
    name: "Tub Cake",
    items: [
      { name: "Vanilla Tub Cake", prices: [250, 350] },
      { name: "Chocolate Tub Cake", prices: [250, 350] },
      { name: "Red Velvet Tub Cake", prices: [250, 350] },
      { name: "Strawberry Tub Cake", prices: [250, 350] },
      { name: "Biscoff Tub Cake", prices: [250, 350] },
      { name: "Mango Tub Cake", prices: [250, 350] },
      { name: "Rasmalai Tub Cake", prices: [250, 350] },
      { name: "Choco Orange Tub Cake", prices: [250, 350] },
      { name: "Pineapple Tub Cake", prices: [250, 350] },
      { name: "Chocolate Truffle Tub Cake", prices: [250, 350] },
      { name: "Black Forest Tub Cake", prices: [250, 350] }
    ]
  },

  {
    name: "Korean Cake",
    items: [
      { name: "Tropical Mist Korean Cake", price: 200 },
      { name: "Spring Heart Korean Cake", price: 200 },
      { name: "Coffee Delight Korean Cake", price: 200 },
      { name: "Chocolate Pralinette Korean Cake", price: 200 }, // corrected spelling
      { name: "Rose Pistachio Korean Cake", price: 200 },
      { name: "Choco Mango Korean Cake", price: 200 }
    ]
  },

  {
    name: "Mousse",
    items: [
      { name: "Biscoff Mousse", price: 80 },
      { name: "Mango Mousse", price: 80 },
      { name: "Pista Mousse", price: 80 },
      { name: "Matcha Mousse", price: 80 },
      { name: "Coffee Mousse", price: 80 },
      { name: "Raspberry Mousse", price: 80 },
      { name: "Blueberry Mousse", price: 80 },
      { name: "Cherry Mousse", price: 80 },
      { name: "Lemon Mousse", price: 80 }
    ]
  },

  {
    name: "Truffle Chocolate",
    items: [
      { name: "Lemon Truffle", price: 150 },
      { name: "Salted Truffle", price: 150 },
      { name: "Crunchy Peanut Truffle", price: 150 },
      { name: "Masala Chai Truffle", price: 150 },
      { name: "Paan Truffle", price: 150 },
      { name: "Crunchy Almond Truffle", price: 150 },
      { name: "Rose Pistachio Truffle", price: 150 },
      { name: "Coffee Truffle", price: 150 },
      { name: "Bounty Truffle", price: 150 },
      { name: "Biscoff Truffle", price: 150 },
      { name: "Rasmalai Truffle", price: 150 },
      { name: "Red Velvet Truffle", price: 150 },
      { name: "Lavender Truffle", price: 150 },
      { name: "Pina Colada Truffle", price: 150 } // corrected spelling
    ]
  },

  {
    name: "Waffles",
    items: [
      { name: "Vanilla Waffle", price: 80 },
      { name: "Chocolate Waffle", price: 80 },
      { name: "Red Velvet Waffle", price: 80 },
      { name: "Coffee Waffle", price: 80 }
    ]
  },

  {
    name: "Dream Tin Cake",
    items: [
      { name: "Cherry Blossom Dream Tin", price: 600 },
      { name: "Ferrero Rocher Dream Tin", price: 600 },
      { name: "Rose Almond Dream Tin", price: 600 },
      { name: "Rasmalai Dream Tin", price: 600 },
      { name: "Snickers Dream Tin", price: 600 }, // Snicker → Snickers
      { name: "Fruit Dream Tin", price: 600 },
      { name: "Biscoff Dream Tin", price: 600 },
      { name: "Tiramisu Dream Tin", price: 600 },
      { name: "KitKat Dream Tin", price: 600 },
      { name: "Malai Kulfi Dream Tin", price: 600 },
      { name: "Red Velvet Dream Tin", price: 600 }
    ]
  },

  {
    name: "Pudding & Jelly",
    items: [
      { name: "Caramel Pudding", price: 250 },
      { name: "Bread Pudding", price: 250 },
      { name: "Malai Cake Pudding", price: 250 },
      { name: "Tiramisu Pudding", price: 300 },
      { name: "Chocolate Bread Pudding", price: 250 },
      { name: "Butterscotch Pudding", price: 250 },
      { name: "Broken Jelly Pudding", price: 300 },
      { name: "Coffee Pudding", price: 300 },
      { name: "Panna Cotta Pudding", price: 250 },
      { name: "Lemon Curd Tart Pudding", price: 250 },
      { name: "Chocolate Pudding", price: 250 },
      { name: "Coconut Milk Mango Pudding", price: 500 }
    ]
  },

  {
    name: "Tea Time Slice Cake",
    items: [
      { name: "Masala Chai Cake", price: 100 },
      { name: "Pineapple Slice Cake", price: 100 },
      { name: "Tutti Frutti Slice Cake", price: 100 }, // corrected Tuti futi
      { name: "Marble Slice Cake", price: 100 },
      { name: "Thai Butter Slice Cake", price: 100 }
    ]
  },

  {
    name: "Designer Chocolate",
    items: [
      { name: "Designer Chocolate", price: 200 }
    ]
  },

  {
    name: "Royal Chocolate",
    items: [
      { name: "Royal Rose", price: 200 },
      { name: "Raja Rajbhog", price: 200 },
      { name: "Special Rasmalai", price: 200 }
    ]
  },

  {
    name: "Sweetheart",
    items: [
      { name: "Rose", price: 100 },
      { name: "Rajbhog", price: 100 },
      { name: "Rasmalai", price: 100 },
      { name: "Dry Fruit", price: 100 },
      { name: "Mix Fruit", price: 100 },
      { name: "Cake Filling", price: 100 },
      { name: "Oreo Filling", price: 100 } // Oreo feeling → filling
    ]
  },

  {
    name: "Special Coffee Bar",
    items: [
      { name: "Dark Coffee", price: 200 },
      { name: "Milk Coffee", price: 200 },
      { name: "White Coffee", price: 200 }
    ]
  },

  {
    name: "Filling Chocolate",
    items: [
      { name: "Marshmallow", price: 120 },
      { name: "Mango", price: 120 },
      { name: "Strawberry", price: 120 },
      { name: "Pineapple", price: 120 },
      { name: "Coconut", price: 120 },
      { name: "Dry Fruit", price: 120 },
      { name: "Black Currant", price: 120 },
      { name: "Blueberry", price: 120 },
      { name: "Caramel", price: 120 },
      { name: "Orange", price: 120 },
      { name: "Mix Fruit", price: 120 }
    ]
  },

  {
    name: "Flavouring Chocolates",
    items: [
      { name: "Mix Fruit", price: 100 },
      { name: "Caramel", price: 100 },
      { name: "Paan Mints", price: 100 },
      { name: "Mango", price: 100 },
      { name: "Coconut", price: 100 },
      { name: "Butterscotch", price: 100 },
      { name: "Gulkand", price: 100 },
      { name: "Strawberry", price: 100 },
      { name: "Pineapple", price: 100 },
      { name: "Orange", price: 100 }
    ]
  },

  {
    name: "Homemade Ferrero",
    items: [
      { name: "Box Packing (6 Pieces)", price: 150, note: "Pack of 6" }
    ]
  },

  {
    name: "Milke Chocolate Bars",
    items: [
      { name: "Mini Bar", price: 20 },
      { name: "Medium Bar", price: 50 },
      { name: "Big Bar", price: 100 },
      { name: "Biger Bar", price: 200 }
    ]
  },

  {
    name: "Cream Cup Cake",
    items: [
      { name: "Pineapple Cup Cake", price: 50 },
      { name: "Chocolate Cup Cake", price: 50 },
      { name: "Black Forest Cup Cake", price: 50 },
      { name: "Strawberry Cup Cake", price: 50 }
    ]
  }
];



function debounce(fn, wait) {
  var timer = null;
  return function () {
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(null, args);
    }, wait);
  };
}

/* ====== Price formatting helper ====== */
function formatPrice(item) {
  if (item.price != null) {
    return '₹ ' + item.price;
  } else if (Array.isArray(item.prices)) {
    return '₹ ' + item.prices[0] + ' | ₹ ' + item.prices[1];
  } else {
    return '—';
  }
}

/* ========== DOM: Small factory functions ========== */
function createCategoryElement(name) {
  var h4 = document.createElement('h4');
  h4.textContent = name;
  h4.classList.add('category', 'great-vibes-regular');
  return h4;
}

function createItemCard(item) {
  var card = document.createElement('div');
  card.classList.add('card');

  var details = document.createElement('div');
  details.classList.add('details');

  var pName = document.createElement('p');
  pName.textContent = item.name;
  pName.classList.add('item-name', 'montserrat-p');

  var pPrice = document.createElement('p');
  pPrice.textContent = formatPrice(item);
  pPrice.classList.add('item-price', 'montserrat-p');

  details.appendChild(pName);
  details.appendChild(pPrice);

  // append note if present (optional and subtle)
  if (item.note) {
    var note = document.createElement('small');
    note.textContent = item.note;
    note.classList.add('item-note', 'montserrat-p');
    details.appendChild(note);
  }

  card.appendChild(details);
  return card;
}

/* ========== Render / Search logic ========== */
function renderCards(categories) {
  var searchResult = document.querySelector('#search-result');
  if (!searchResult) return;

  // Clear quickly
  searchResult.innerHTML = '';

  // If empty result (like '' or [])
  if (!categories || categories.length === 0) {
    var noRes = document.createElement('p');
    noRes.textContent = 'No Item Found';
    noRes.classList.add('no-result', 'montserrat-p');
    searchResult.appendChild(noRes);
    // refresh scroll triggers if available
    refreshScrollTriggersSafely();
    return;
  }

  // Build DOM with fragment to avoid multiple reflows
  var frag = document.createDocumentFragment();

  categories.forEach(function (category) {
    // If category has zero items, skip
    if (!category.items || category.items.length === 0) return;

    frag.appendChild(createCategoryElement(category.name));

    category.items.forEach(function (item) {
      frag.appendChild(createItemCard(item));
    });
  });

  searchResult.appendChild(frag);

  // Refresh scroll triggers after DOM update
  refreshScrollTriggersSafely();
}

/* Filter function that returns categories with matching items */
function filterMenuByText(text) {
  text = (text || '').trim().toLowerCase();

  if (text === '') {
    // return original menu (no filtering)
    return menuData;
  }

  // produce new list where each category contains only matching items
  var result = menuData.map(function (category) {
    var filteredItems = category.items.filter(function (item) {
      return item.name.toLowerCase().indexOf(text) !== -1;
    });

    return {
      name: category.name,
      items: filteredItems
    };
  }).filter(function (category) {
    return category.items.length > 0;
  });

  return result;
}

/* ========== ScrollTrigger / GSAP helpers ========== */
function refreshScrollTriggersSafely() {
  // If gsap or ScrollTrigger not present, skip quietly
  try {
    if (window.ScrollTrigger && window.gsap) {
      // refresh measurements
      window.ScrollTrigger.refresh();
      // ensure our animation is initialized (safe guard)
      initAnnScroll();
    }
  } catch (err) {
    // do nothing
    // console.warn('ScrollTrigger refresh skipped', err);
  }
}

function initAnnScroll() {
  // initialize once, double-check plugin exists
  if (!window.gsap || !window.ScrollTrigger) return;

  // register plugin once
  try {
    if (!gsap.utils) {
      gsap.registerPlugin(ScrollTrigger);
    }
  } catch (e) {
    // if already registered, ignore
  }

  // kill previous triggers to prevent duplicates
  if (ScrollTrigger.getAll) {
    ScrollTrigger.getAll().forEach(function (st) {
      try { st.kill(); } catch (e) {}
    });
  }

  // create the scroll animation for the announcement
  // guard so we don't throw if element missing
  var ann = document.querySelector('#ann h2');
  if (!ann) return;

  // create the animation
  try {
    gsap.to("#ann h2", {
      xPercent: -350,
      ease: "none",
      scrollTrigger: {
        trigger: "#ann",
        markers: false,
        start: "top 60%",
        end: "bottom 50%",
        scrub: 3.2,
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        anticipatePin: 0.5,
        invalidateOnRefresh: true
      }
    });
  } catch (err) {
    // safe fallback: do nothing if GSAP call fails
  }
}

/* ========== Buttons & small UI actions ======== */
function openWhatsApp() {
  window.open("https://wa.me/918286917860?text=Hi%20I%20want%20to%20know%20more!", "_blank");
}

function openChatbot() {
  window.open("chatbot.html", "_blank");
}

/* ====== Go to top button (self-contained) ====== */
(function initGoTopButton() {
  var SCROLL_THRESHOLD = 280;
  var btn = document.getElementById('goTopBtn');

  if (!btn) {
    btn = document.createElement('button');
    btn.id = 'goTopBtn';
    btn.setAttribute('aria-label', 'Go to top');
    btn.title = 'Go to top';
    btn.textContent = '↑';
    document.body.appendChild(btn);
  }

  // Show / hide on scroll
  window.addEventListener('scroll', function () {
    if (window.scrollY > SCROLL_THRESHOLD) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });

  // Click -> smooth scroll to top
  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    btn.classList.remove('show');
  });

  // Keyboard accessibility
  btn.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      btn.click();
    }
  });
})();

/* ========== Event wiring & startup ========== */
function registerEventListeners() {
  var callBtn = document.querySelector('#call');
  if (callBtn) {
    callBtn.addEventListener('click', openWhatsApp);
  }

  var waBtn = document.querySelector('#whatsappBtn');
  if (waBtn) {
    waBtn.addEventListener('click', openWhatsApp);
  }

  var chatBtn = document.querySelector('#chat-bot');
  if (chatBtn) {
    chatBtn.addEventListener('click', openChatbot);
  }

  // search input with debounce
  var searchInput = document.querySelector('#search');
  if (searchInput) {
    var onInput = debounce(function (e) {
      var q = e.target.value;
      var filtered = filterMenuByText(q);
      renderCards(filtered);
    }, 180); // 180ms delay - small and responsive

    searchInput.addEventListener('input', onInput);
  }
}

/* ========== Initialize page ======== */
function init() {
  // initial render
  renderCards(menuData);

  // wire events
  registerEventListeners();

  // initialize scroll animations if GSAP present
  initAnnScroll();
}

// run init on load (if script placed at end of body it's safe)
init();

