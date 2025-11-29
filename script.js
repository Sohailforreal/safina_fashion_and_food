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
      { name: "Pistachio Kunafa Bait", price: null },
      { name: "Nutella Kunafa Bait", price: null },
      { name: "Caramel Kunafa Bait", price: null },
      { name: "Coffee Kunafa Bait", price: null }, // 
      { name: "Biscoff Kunafa Bait", price: null }
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


document.querySelector("#call").addEventListener("click", function () {
  window.open("https://wa.me/918286917860?text=Hi%20I%20want%20to%20know%20more!", "_blank");
});


document.querySelector("#whatsappBtn").addEventListener("click", function () {
  window.open("https://wa.me/918286917860?text=Hi%20I%20want%20to%20know%20more!", "_blank");
});

document.querySelector("#chat-bot").addEventListener("click", function () {
  window.open("chatbot.html", "_blank");
});






function initAnnScroll() {
  // make sure GSAP plugin is registered once
  if (!gsap || !ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  // kill all previous ScrollTriggers to avoid duplicates
  ScrollTrigger.getAll().forEach(st => st.kill());

  // create the scroll animation for the announcement
  gsap.to("#ann h2", {
    xPercent: -350,
    ease: "none",
    scrollTrigger: {
      trigger: "#ann",
      markers:false,
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

  // refresh measurements
  ScrollTrigger.refresh();
}

// call once at startup
initAnnScroll();



function renderCards(arr){
const search_result= document.querySelector("#search-result")
    search_result.innerHTML = "" 

if(arr == '')  {
  
  const noRes = document.createElement("p")
  noRes.textContent = "No Item Found"
  noRes.classList.add("no-result")
  noRes.classList.add("montserrat-p")
  search_result.appendChild(noRes)
  
}
 else{
   arr.forEach(function(dets){
    
    
    
const category = document.createElement('h4')
    
  category.textContent = dets.name
  
  category.classList.add("category")
  category.classList.add("great-vibes-regular")
   search_result.appendChild(category) 
  
    
    
    
  dets.items.forEach(function(val){
    const card = document.createElement("div")
    card.classList.add("card")
    
    const details = document.createElement("div")
    
    details.classList.add("details")
    




  
  
  const p = document.createElement("p")
  p.textContent = val.name
  p.classList.add("item-name")   
  p.classList.add("montserrat-p")
  
  const p2 = document.createElement("p")
  p2.classList.add("montserrat-p")
  p2.classList.add("item-price")
  if (val.price != null) {
  // single price
  p2.textContent = `₹ ${val.price}`;
} 
else if (Array.isArray(val.prices)) {
  // two prices
p2.textContent = `₹ ${val.prices[0]} | ₹ ${val.prices[1]}`;
} 

else {
  // nothing available
  p2.textContent = "—";
}
  
  
  
  details.append(p,p2)
  card.append(details)
  
  search_result.appendChild(card)
    
    
  })
      
  

  })
 }
 

  setTimeout(() => {
    // debug: see if multiple #ann exist
    const annCount = document.querySelectorAll('#ann').length;
    if (annCount > 1) {
      console.warn('Multiple #ann elements found:', annCount);
    }

    // refresh measurements then re-init the scroll trigger
    ScrollTrigger.refresh();
    initAnnScroll();
  }, 50);
 
 
  
}

renderCards(menuData)



//input par event listener lagao
//user ka keystroke nikalo
//menu data ko filter karo on the basis of key stroke
//filter ko render karo
document.querySelector("#search").addEventListener("input", function(e){

  let searchText = e.target.value.toLowerCase();

  let result = menuData.filter(function(item){
    return item.name.toLowerCase().includes(searchText);
  });

  renderCards(result); // filtered items

});


// ===== Go to top button =====
(function() {
  const SCROLL_THRESHOLD = 280; // show button after px scrolled
  const goTopBtn = document.getElementById('goTopBtn');

  // If button not found (safety), create it dynamically
  if (!goTopBtn) {
    const btn = document.createElement('button');
    btn.id = 'goTopBtn';
    btn.setAttribute('aria-label', 'Go to top');
    btn.title = 'Go to top';
    btn.textContent = '↑';
    document.body.appendChild(btn);
  }

  const btnEl = document.getElementById('goTopBtn');

  // Show / hide on scroll
  window.addEventListener('scroll', function() {
    if (window.scrollY > SCROLL_THRESHOLD) {
      btnEl.classList.add('show');
    } else {
      btnEl.classList.remove('show');
    }
  });

  // Click -> smooth scroll to top
  btnEl.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Optionally hide the button right away:
    btnEl.classList.remove('show');
  });

  // Keyboard accessibility: Enter / Space also trigger click
  btnEl.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      btnEl.click();
    }
  });
})();











