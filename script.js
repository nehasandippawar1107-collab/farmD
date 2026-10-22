/**
 * FarmDirect — Farmer-to-Customer Marketplace
 * Pure Vanilla JavaScript Client-Side Engine
 * Handles State Persistence (localStorage), Catalogs, Cart, Auth, Order Tracking, Farmer & Admin Portals
 */

// =====================================================================
// 1. DEFAULT DATASETS (Seed data stored in localStorage on first run)
// =====================================================================

const DEFAULT_PRODUCTS = [
  {
    id: "prod-1",
    name: "Organic Alphonso Mangoes",
    category: "fruits",
    categoryLabel: "Orchard Fruits",
    price: 450,
    unit: "per dozen",
    rating: 4.9,
    reviewsCount: 142,
    farmerName: "Ramesh Patel",
    farmName: "Ratnagiri Sun Orchards",
    location: "Ratnagiri, Maharashtra",
    harvestDate: "Harvested Yesterday",
    stock: 85,
    badge: "organic",
    badgeLabel: "100% Organic",
    featured: true,
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80",
    description: "GI-tagged authentic Ratnagiri Alphonso mangoes, hand-picked at optimum maturity with sweet golden pulp and rich aroma."
  },
  {
    id: "prod-2",
    name: "Vine-Ripened Desi Tomatoes",
    category: "vegetables",
    categoryLabel: "Fresh Vegetables",
    price: 45,
    unit: "per kg",
    rating: 4.8,
    reviewsCount: 98,
    farmerName: "Sunita Shinde",
    farmName: "Sahyadri Green Valley",
    location: "Nashik, Maharashtra",
    harvestDate: "Picked at 6:00 AM",
    stock: 220,
    badge: "fresh",
    badgeLabel: "Morning Harvest",
    featured: true,
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80",
    description: "Naturally sweet, acidic desi heirloom tomatoes grown without synthetic insecticides. Ideal for fresh salads and curries."
  },
  {
    id: "prod-3",
    name: "Crisp Himalayan Royal Gala Apples",
    category: "fruits",
    categoryLabel: "Orchard Fruits",
    price: 180,
    unit: "per kg",
    rating: 4.9,
    reviewsCount: 110,
    farmerName: "Vikram Singh",
    farmName: "Kotgarh Mountain Orchards",
    location: "Shimla, Himachal Pradesh",
    harvestDate: "Handpicked 2 Days Ago",
    stock: 140,
    badge: "bestseller",
    badgeLabel: "High Altitude",
    featured: true,
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80",
    description: "Grown at 7,500 ft elevation with glacier water. Incredibly crisp, sweet, and wax-free apples direct from the hills."
  },
  {
    id: "prod-4",
    name: "Fresh Baby Spinach (Palak)",
    category: "vegetables",
    categoryLabel: "Fresh Vegetables",
    price: 35,
    unit: "per bunch (350g)",
    rating: 4.7,
    reviewsCount: 64,
    farmerName: "Anita More",
    farmName: "Shri Krishna Hydro & Soil Farms",
    location: "Pune, Maharashtra",
    harvestDate: "Cut This Morning",
    stock: 95,
    badge: "organic",
    badgeLabel: "Hydro-Washed",
    featured: true,
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=600&q=80",
    description: "Tender, iron-rich baby spinach leaves harvested at daybreak and roots rinsed with purified water."
  },
  {
    id: "prod-5",
    name: "Sharbati Golden Wheat Grain",
    category: "grains",
    categoryLabel: "Grains & Flours",
    price: 65,
    unit: "per kg",
    rating: 4.9,
    reviewsCount: 205,
    farmerName: "Baldev Yadav",
    farmName: "Narmada Valley Bio-Farms",
    location: "Sehore, Madhya Pradesh",
    harvestDate: "Current Season Harvest",
    stock: 450,
    badge: "organic",
    badgeLabel: "Rainfed Heritage",
    featured: true,
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80",
    description: "The crown jewel of Indian wheat. Grown in the black soil of Sehore, making rotis softer, sweeter, and more nutritious."
  },
  {
    id: "prod-6",
    name: "Raw Unprocessed Wildflower Honey",
    category: "honey-oils",
    categoryLabel: "Raw Honey & Oils",
    price: 390,
    unit: "per jar (500g)",
    rating: 5.0,
    reviewsCount: 184,
    farmerName: "Meera Devi",
    farmName: "Western Ghats Apiary Collective",
    location: "Coorg, Karnataka",
    harvestDate: "Extracted This Week",
    stock: 60,
    badge: "bestseller",
    badgeLabel: "100% Pure & Raw",
    featured: true,
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80",
    description: "Unpasteurized, unheated wildflower forest honey straight from bee frames into sanitized glass jars with all enzymes preserved."
  },
  {
    id: "prod-7",
    name: "Cold-Pressed Mustard Oil (Kachi Ghani)",
    category: "honey-oils",
    categoryLabel: "Raw Honey & Oils",
    price: 210,
    unit: "per bottle (1 Liter)",
    rating: 4.8,
    reviewsCount: 77,
    farmerName: "Hoshiar Singh",
    farmName: "Braj Bhoomi Agro",
    location: "Bharatpur, Rajasthan",
    harvestDate: "Pressed 3 Days Ago",
    stock: 120,
    badge: "organic",
    badgeLabel: "Wood-Pressed",
    featured: true,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80",
    description: "Traditional wooden kolhu pressed yellow mustard seeds. Pungent, golden, rich in natural antioxidants and heart-healthy fats."
  },
  {
    id: "prod-8",
    name: "Farm Fresh Broccoli Florets",
    category: "vegetables",
    categoryLabel: "Fresh Vegetables",
    price: 90,
    unit: "per piece (450g)",
    rating: 4.7,
    reviewsCount: 52,
    farmerName: "David Raj",
    farmName: "Blue Mountain Nilgiri Hills",
    location: "Ooty, Tamil Nadu",
    harvestDate: "Cut Yesterday",
    stock: 75,
    badge: "fresh",
    badgeLabel: "Ooty High Grounds",
    featured: true,
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80",
    description: "Deep green, crunchy and tight broccoli heads nurtured with cool montane mist and chemical-free compost."
  },
  {
    id: "prod-9",
    name: "Organic Kashmiri Snow Walnuts",
    category: "grains",
    categoryLabel: "Grains & Flours",
    price: 750,
    unit: "per kg (In Shell)",
    rating: 4.9,
    reviewsCount: 92,
    farmerName: "Tariq Ahmad",
    farmName: "Chinar Valley Agro",
    location: "Anantnag, Jammu & Kashmir",
    harvestDate: "Sun-dried Last Week",
    stock: 55,
    badge: "organic",
    badgeLabel: "Kagzi Soft Shell",
    featured: false,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    description: "Easy-to-crack paper thin shell organic walnuts with high oil content and pale cream kernels from pristine valley trees."
  },
  {
    id: "prod-10",
    name: "Sweet Golden Corn Cobs",
    category: "vegetables",
    categoryLabel: "Fresh Vegetables",
    price: 40,
    unit: "per pack of 2",
    rating: 4.6,
    reviewsCount: 38,
    farmerName: "Chetan Gowda",
    farmName: "Cauvery Basin Farms",
    location: "Hassan, Karnataka",
    harvestDate: "Harvested Today",
    stock: 180,
    badge: "fresh",
    badgeLabel: "Super Sweet",
    featured: false,
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=600&q=80",
    description: "Juicy, milk-stage sweet corn that bursts with natural sweetness. Great for roasting, steaming, or soup bowls."
  },
  {
    id: "prod-11",
    name: "Red Country Onions (Lasalgaon)",
    category: "vegetables",
    categoryLabel: "Fresh Vegetables",
    price: 32,
    unit: "per kg",
    rating: 4.8,
    reviewsCount: 165,
    farmerName: "Suresh Jadhav",
    farmName: "Godavari Soil Producer Co.",
    location: "Lasalgaon, Maharashtra",
    harvestDate: "Cured & Graded 2 Days Ago",
    stock: 600,
    badge: "bestseller",
    badgeLabel: "High Pungency",
    featured: false,
    image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=600&q=80",
    description: "Firm, dry-skinned red onions with long shelf life directly from India's premier onion capital."
  },
  {
    id: "prod-12",
    name: "Traditional A2 Bilona Desi Cow Ghee",
    category: "honey-oils",
    categoryLabel: "Raw Honey & Oils",
    price: 850,
    unit: "per jar (500ml)",
    rating: 5.0,
    reviewsCount: 240,
    farmerName: "Kamla Gurjar",
    farmName: "Tharparkar Dairy Sanctuary",
    location: "Bikaner, Rajasthan",
    harvestDate: "Churned Yesterday",
    stock: 40,
    badge: "organic",
    badgeLabel: "Clay Pot Churned",
    featured: false,
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=600&q=80",
    description: "Handcrafted using the ancient curd-churning Bilona method from grass-fed indigenous Tharparkar cows."
  },
  {
    id: "prod-13",
    name: "Organic Turmeric Finger Roots",
    category: "vegetables",
    categoryLabel: "Fresh Vegetables",
    price: 80,
    unit: "per 500g",
    rating: 4.8,
    reviewsCount: 45,
    farmerName: "Murugan K.",
    farmName: "Bhavani River Permaculture",
    location: "Erode, Tamil Nadu",
    harvestDate: "Dug Yesterday",
    stock: 90,
    badge: "organic",
    badgeLabel: "High Curcumin",
    featured: false,
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
    description: "Fresh raw golden turmeric fingers with over 5.2% natural curcumin. Natural anti-inflammatory power."
  },
  {
    id: "prod-14",
    name: "Sweet Tender Ooty Carrots",
    category: "vegetables",
    categoryLabel: "Fresh Vegetables",
    price: 60,
    unit: "per kg",
    rating: 4.7,
    reviewsCount: 88,
    farmerName: "Vani Selvam",
    farmName: "Ketti Valley Terraced Farms",
    location: "Ooty, Tamil Nadu",
    harvestDate: "Uprooted 24 Hrs Ago",
    stock: 130,
    badge: "fresh",
    badgeLabel: "Mountain Grown",
    featured: false,
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=600&q=80",
    description: "Crisp, sweet, deep orange carrots cultivated in high-altitude volcanic loam without chemical accelerators."
  },
  {
    id: "prod-15",
    name: "Traditional Basmati Rice 1121 Extra Long",
    category: "grains",
    categoryLabel: "Grains & Flours",
    price: 130,
    unit: "per kg",
    rating: 4.9,
    reviewsCount: 178,
    farmerName: "Gurpreet Singh",
    farmName: "Yamuna Canal Fields",
    location: "Karnal, Haryana",
    harvestDate: "Aged 1 Year Naturally",
    stock: 350,
    badge: "bestseller",
    badgeLabel: "Extra Long Grain",
    featured: false,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    description: "Naturally aged, aromatic basmati rice grains that elongate up to 2.5x upon cooking with non-sticky fluffiness."
  },
  {
    id: "prod-16",
    name: "Naturally Ripened Cavendish Bananas",
    category: "fruits",
    categoryLabel: "Orchard Fruits",
    price: 55,
    unit: "per dozen",
    rating: 4.8,
    reviewsCount: 96,
    farmerName: "Nilesh Patil",
    farmName: "Tapi Valley Banana Estate",
    location: "Jalgaon, Maharashtra",
    harvestDate: "Cut Yesterday",
    stock: 110,
    badge: "organic",
    badgeLabel: "Carbide Free",
    featured: false,
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=600&q=80",
    description: "Ethylene-free naturally ripened sweet bananas from Jalgaon's rich black soils. Great potassium source."
  }
];

const DEFAULT_ORDERS = [
  {
    id: "FD-2026-8812",
    date: "2026-10-21 08:30 AM",
    customerName: "Aarav Sharma",
    phone: "+91 98201 12345",
    address: "Flat 402, Green Meadows, Bandra West, Mumbai 400050",
    items: [
      { id: "prod-1", name: "Organic Alphonso Mangoes", price: 450, unit: "per dozen", qty: 2, farmer: "Ramesh Patel" },
      { id: "prod-2", name: "Vine-Ripened Desi Tomatoes", price: 45, unit: "per kg", qty: 3, farmer: "Sunita Shinde" }
    ],
    subtotal: 1035,
    discount: 103.5,
    deliveryFee: 0,
    total: 931.5,
    paymentMethod: "UPI / QR Pay (Instant)",
    statusIndex: 3, // Out for Delivery
    statusLabel: "Out for Delivery",
    eta: "Today by 4:00 PM"
  },
  {
    id: "FD-2026-7490",
    date: "2026-10-20 02:15 PM",
    customerName: "Pooja Hegde",
    phone: "+91 98450 67890",
    address: "Villa 12, Palm Meadows, Whitefield, Bengaluru 560066",
    items: [
      { id: "prod-6", name: "Raw Unprocessed Wildflower Honey", price: 390, unit: "per jar", qty: 1, farmer: "Meera Devi" },
      { id: "prod-7", name: "Cold-Pressed Mustard Oil", price: 210, unit: "per bottle", qty: 2, farmer: "Hoshiar Singh" }
    ],
    subtotal: 810,
    discount: 0,
    deliveryFee: 0,
    total: 810,
    paymentMethod: "Credit/Debit Card",
    statusIndex: 4, // Delivered
    statusLabel: "Delivered to Doorstep",
    eta: "Delivered on 21 Oct, 11:20 AM"
  }
];

const DEFAULT_FARMERS = [
  {
    id: "farmer-1",
    name: "Ramesh Patel",
    email: "farmer.raj@farmdirect.com",
    farmName: "Ratnagiri Sun Orchards",
    location: "Ratnagiri, Maharashtra",
    crops: "Alphonso Mangoes, Cashews",
    acreage: "12 Acres",
    status: "approved",
    joinedDate: "12 Jan 2026"
  },
  {
    id: "farmer-2",
    name: "Sunita Shinde",
    email: "sunita.shinde@farmdirect.com",
    farmName: "Sahyadri Green Valley",
    location: "Nashik, Maharashtra",
    crops: "Tomatoes, Bell Peppers, Onions",
    acreage: "8 Acres",
    status: "approved",
    joinedDate: "03 Feb 2026"
  },
  {
    id: "farmer-3",
    name: "Devendra Mahajan",
    email: "devendra.m@kisanmail.in",
    farmName: "Khandesh Cotton & Papaya",
    location: "Dhule, Maharashtra",
    crops: "Organic Red Lady Papaya, Pulses",
    acreage: "15 Acres",
    status: "pending",
    joinedDate: "21 Oct 2026"
  },
  {
    id: "farmer-4",
    name: "Harbhajan Brar",
    email: "brar.farms@punjabagro.in",
    farmName: "Malwa Golden Fields",
    location: "Bathinda, Punjab",
    crops: "Basmati Rice, Organic Mustard",
    acreage: "24 Acres",
    status: "pending",
    joinedDate: "22 Oct 2026"
  }
];

// Fallback transparent inline SVG for image load errors
const FALLBACK_PRODUCE_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23d1fae5"/><text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" font-size="54">🌱</text><text x="50%" y="65%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="18" fill="%23065f46" font-weight="bold">FarmDirect Produce</text></svg>`;

// =====================================================================
// 2. STATE INITIALIZATION (Local Storage Bridge)
// =====================================================================

function getStoredProducts() {
  const data = localStorage.getItem("farmdirect_products");
  if (!data) {
    localStorage.setItem("farmdirect_products", JSON.stringify(DEFAULT_PRODUCTS));
    return DEFAULT_PRODUCTS;
  }
  return JSON.parse(data);
}

function saveProducts(products) {
  localStorage.setItem("farmdirect_products", JSON.stringify(products));
}

function getStoredCart() {
  const data = localStorage.getItem("farmdirect_cart");
  return data ? JSON.parse(data) : [];
}

function saveCart(cart) {
  localStorage.setItem("farmdirect_cart", JSON.stringify(cart));
  updateCartBadge();
}

function getStoredOrders() {
  const data = localStorage.getItem("farmdirect_orders");
  if (!data) {
    localStorage.setItem("farmdirect_orders", JSON.stringify(DEFAULT_ORDERS));
    return DEFAULT_ORDERS;
  }
  return JSON.parse(data);
}

function saveOrders(orders) {
  localStorage.setItem("farmdirect_orders", JSON.stringify(orders));
}

function getStoredFarmers() {
  const data = localStorage.getItem("farmdirect_farmers");
  if (!data) {
    localStorage.setItem("farmdirect_farmers", JSON.stringify(DEFAULT_FARMERS));
    return DEFAULT_FARMERS;
  }
  return JSON.parse(data);
}

function saveFarmers(farmers) {
  localStorage.setItem("farmdirect_farmers", JSON.stringify(farmers));
}

function getCurrentUser() {
  const data = localStorage.getItem("farmdirect_user");
  return data ? JSON.parse(data) : null;
}

function setCurrentUser(user) {
  if (user) {
    localStorage.setItem("farmdirect_user", JSON.stringify(user));
  } else {
    localStorage.removeItem("farmdirect_user");
  }
  updateAuthUI();
}

// =====================================================================
// 3. UI HELPERS & TOAST NOTIFICATIONS
// =====================================================================

function showToast(message, type = "success") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  const icon = type === "success" ? "✓" : type === "error" ? "⚠" : "ℹ";
  toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(50px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function updateCartBadge() {
  const cart = getStoredCart();
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badges = document.querySelectorAll(".cart-count");
  badges.forEach(b => {
    b.textContent = totalCount;
    b.style.display = totalCount > 0 ? "inline-block" : "inline-block";
  });
}

function updateAuthUI() {
  const user = getCurrentUser();
  const authContainers = document.querySelectorAll(".auth-nav-slot");

  authContainers.forEach(container => {
    if (user) {
      const roleClass = user.role.toLowerCase();
      let dashboardLink = "index.html";
      if (user.role === "farmer") dashboardLink = "farmer-dashboard.html";
      else if (user.role === "admin") dashboardLink = "admin-dashboard.html";
      else dashboardLink = "track-order.html";

      container.innerHTML = `
        <div class="user-menu">
          <a href="${dashboardLink}" class="user-avatar-badge" title="Go to ${user.role} workspace">
            <span class="avatar-icon">${user.name.charAt(0).toUpperCase()}</span>
            <span>${user.name.split(' ')[0]}</span>
            <span class="role-tag ${roleClass}">${user.role}</span>
          </a>
          <button onclick="handleLogout()" class="btn btn-sm btn-secondary" title="Log Out">Log Out</button>
        </div>
      `;
    } else {
      container.innerHTML = `
        <a href="login.html" class="btn btn-sm btn-secondary">Log In</a>
        <a href="register.html" class="btn btn-sm btn-primary">Register</a>
      `;
    }
  });
}

function handleLogout() {
  setCurrentUser(null);
  showToast("You have been logged out successfully.", "info");
  setTimeout(() => {
    window.location.href = "index.html";
  }, 800);
}

// Mobile navigation toggle
function setupMobileNav() {
  const toggle = document.querySelector(".mobile-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }
}

// =====================================================================
// 4. CART OPERATIONS
// =====================================================================

function addToCart(productId, qty = 1) {
  const products = getStoredProducts();
  const product = products.find(p => p.id === productId);
  if (!product) {
    showToast("Product not found!", "error");
    return;
  }

  const cart = getStoredCart();
  const existingIndex = cart.findIndex(item => item.id === productId);

  if (existingIndex > -1) {
    cart[existingIndex].quantity += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      unit: product.unit,
      image: product.image,
      farmerName: product.farmerName,
      quantity: qty
    });
  }

  saveCart(cart);
  showToast(`Added ${qty} ${product.unit} of "${product.name}" to cart!`, "success");
}

function updateCartQuantity(productId, delta) {
  let cart = getStoredCart();
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      cart = cart.filter(i => i.id !== productId);
      showToast(`Removed "${item.name}" from your basket.`, "info");
    }
    saveCart(cart);
    renderCartPage();
  }
}

function removeFromCart(productId) {
  let cart = getStoredCart();
  const item = cart.find(i => i.id === productId);
  if (item) {
    cart = cart.filter(i => i.id !== productId);
    saveCart(cart);
    showToast(`Removed "${item.name}" from cart.`, "info");
    renderCartPage();
  }
}

function clearCart() {
  saveCart([]);
  renderCartPage();
  showToast("Your shopping cart has been cleared.", "info");
}

let activeDiscountPercent = 0;

function applyDiscountCoupon(code) {
  const cleanCode = code.trim().toUpperCase();
  if (cleanCode === "FRESH10") {
    activeDiscountPercent = 10;
    showToast("Success! Coupon 'FRESH10' applied: 10% OFF your entire order!", "success");
    renderCartPage();
  } else if (cleanCode === "FARMLOVE") {
    activeDiscountPercent = 15;
    showToast("Success! Farmer Supporter Coupon 'FARMLOVE' applied: 15% OFF!", "success");
    renderCartPage();
  } else {
    showToast("Invalid coupon code. Try 'FRESH10' or 'FARMLOVE'.", "error");
  }
}

function renderCartPage() {
  const cartContainer = document.getElementById("cart-items-container");
  const summaryContainer = document.getElementById("cart-summary-container");
  if (!cartContainer || !summaryContainer) return;

  const cart = getStoredCart();

  if (cart.length === 0) {
    cartContainer.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🛒</div>
        <h3>Your Produce Basket is Empty</h3>
        <p>You haven't added any fresh harvests from our local farmers yet.</p>
        <a href="marketplace.html" class="btn btn-primary">Browse Fresh Marketplace</a>
      </div>
    `;
    summaryContainer.innerHTML = `
      <div class="cart-summary-card">
        <h3 class="summary-title">Harvest Summary</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem;">Add items to your basket to calculate delivery and discounts.</p>
      </div>
    `;
    return;
  }

  // Render items table
  let itemsHTML = `
    <div class="cart-table-head">
      <div>Harvest Item & Farmer</div>
      <div>Unit Price</div>
      <div>Quantity</div>
      <div>Subtotal</div>
      <div></div>
    </div>
  `;

  let subtotal = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    itemsHTML += `
      <div class="cart-item-row">
        <div class="cart-item-info">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.onerror=null; this.src='${FALLBACK_PRODUCE_SVG}';">
          <div class="cart-item-details">
            <h4>${item.name}</h4>
            <span class="cart-item-farmer">Harvested by ${item.farmerName}</span>
          </div>
        </div>
        <div>
          <strong>₹${item.price}</strong>
          <span style="font-size: 0.75rem; color: var(--text-muted); display: block;">${item.unit}</span>
        </div>
        <div>
          <div class="qty-control">
            <button class="qty-btn" onclick="updateCartQuantity('${item.id}', -1)">−</button>
            <span class="qty-input">${item.quantity}</span>
            <button class="qty-btn" onclick="updateCartQuantity('${item.id}', 1)">+</button>
          </div>
        </div>
        <div>
          <strong style="color: var(--primary-900); font-size: 1.05rem;">₹${itemTotal.toLocaleString('en-IN')}</strong>
        </div>
        <div>
          <button class="remove-btn" onclick="removeFromCart('${item.id}')" title="Remove item">✕</button>
        </div>
      </div>
    `;
  });

  cartContainer.innerHTML = itemsHTML;

  // Render Summary
  const discountAmount = Math.round((subtotal * activeDiscountPercent) / 100);
  const deliveryFee = subtotal >= 500 ? 0 : 49;
  const grandTotal = Math.max(0, subtotal - discountAmount + deliveryFee);

  summaryContainer.innerHTML = `
    <div class="cart-summary-card">
      <h3 class="summary-title">Harvest Summary</h3>

      <div class="summary-row">
        <span>Produce Subtotal:</span>
        <strong>₹${subtotal.toLocaleString('en-IN')}</strong>
      </div>

      ${activeDiscountPercent > 0 ? `
        <div class="summary-row" style="color: var(--success);">
          <span>Promo Discount (${activeDiscountPercent}%):</span>
          <strong>− ₹${discountAmount.toLocaleString('en-IN')}</strong>
        </div>
      ` : ''}

      <div class="summary-row">
        <span>Middleman Brokerage:</span>
        <strong style="color: var(--success); text-decoration: line-through;">₹150</strong> <span style="color: var(--success); font-weight: 700;">₹0 (Free)</span>
      </div>

      <div class="summary-row">
        <span>Eco-Cold Express Delivery:</span>
        <span>${deliveryFee === 0 ? '<strong style="color: var(--success);">FREE (Above ₹500)</strong>' : '₹49'}</span>
      </div>

      <div class="coupon-box">
        <input type="text" id="coupon-input" placeholder="Promo code (FRESH10)" value="${activeDiscountPercent ? 'FRESH10' : ''}">
        <button class="btn btn-sm btn-secondary" onclick="applyDiscountCoupon(document.getElementById('coupon-input').value)">Apply</button>
      </div>

      <div class="summary-row total">
        <span>Final Payable Amount:</span>
        <span>₹${grandTotal.toLocaleString('en-IN')}</span>
      </div>

      <button class="btn btn-primary btn-block btn-lg" style="margin-top: 1.25rem;" onclick="openPaymentModal(${grandTotal}, ${subtotal}, ${discountAmount}, ${deliveryFee})">
        Proceed to Secure Checkout
      </button>

      <div style="margin-top: 1rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem; font-size: 0.78rem; color: var(--text-muted);">
        <span>🛡️ 100% Direct Farmer Payment Protected</span>
      </div>
    </div>
  `;
}

// =====================================================================
// 5. PAYMENT & ORDER COMPLETION MODAL
// =====================================================================

let pendingOrderData = null;

function openPaymentModal(grandTotal, subtotal, discount, deliveryFee) {
  const cart = getStoredCart();
  if (cart.length === 0) {
    showToast("Your cart is empty!", "error");
    return;
  }

  const user = getCurrentUser();
  const modal = document.getElementById("checkout-modal");
  if (!modal) return;

  pendingOrderData = {
    cart,
    subtotal,
    discount,
    deliveryFee,
    grandTotal
  };

  const amountDisplay = document.getElementById("modal-total-amount");
  if (amountDisplay) amountDisplay.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;

  // Pre-fill user info if logged in
  if (user) {
    const nameInput = document.getElementById("checkout-name");
    const emailInput = document.getElementById("checkout-email");
    if (nameInput && !nameInput.value) nameInput.value = user.name;
    if (emailInput && !emailInput.value) emailInput.value = user.email;
  }

  modal.classList.add("open");
}

function closeCheckoutModal() {
  const modal = document.getElementById("checkout-modal");
  if (modal) modal.classList.remove("open");
}

function setPaymentMethodTab(tabName) {
  const buttons = document.querySelectorAll(".payment-tab-btn");
  buttons.forEach(btn => btn.classList.remove("active"));
  const activeBtn = document.querySelector(`[data-method="${tabName}"]`);
  if (activeBtn) activeBtn.classList.add("active");

  const methodSections = document.querySelectorAll(".payment-subform");
  methodSections.forEach(sec => sec.style.display = "none");
  const activeSec = document.getElementById(`subform-${tabName}`);
  if (activeSec) activeSec.style.display = "block";
}

function processOrderPlacement(event) {
  event.preventDefault();
  if (!pendingOrderData) return;

  const name = document.getElementById("checkout-name").value.trim();
  const phone = document.getElementById("checkout-phone").value.trim();
  const address = document.getElementById("checkout-address").value.trim();
  const city = document.getElementById("checkout-city").value.trim();
  const activeTab = document.querySelector(".payment-tab-btn.active");
  const paymentMethod = activeTab ? activeTab.getAttribute("data-label") : "Pay on Delivery";

  if (!name || !phone || !address || !city) {
    showToast("Please provide your full delivery name, phone, and address.", "error");
    return;
  }

  // Generate Unique Order ID
  const orderNumber = Math.floor(1000 + Math.random() * 9000);
  const newOrderId = `FD-2026-${orderNumber}`;

  const newOrder = {
    id: newOrderId,
    date: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
    customerName: name,
    phone: phone,
    address: `${address}, ${city}`,
    items: pendingOrderData.cart,
    subtotal: pendingOrderData.subtotal,
    discount: pendingOrderData.discount,
    deliveryFee: pendingOrderData.deliveryFee,
    total: pendingOrderData.grandTotal,
    paymentMethod: paymentMethod,
    statusIndex: 1, // Harvested by Farmer
    statusLabel: "Harvest Scheduled with Farmer",
    eta: "Tomorrow by 11:00 AM"
  };

  // Save to Orders database
  const orders = getStoredOrders();
  orders.unshift(newOrder);
  saveOrders(orders);

  // Clear cart
  saveCart([]);

  closeCheckoutModal();

  // Show Success Receipt & Redirect to Tracking
  const receiptModal = document.getElementById("receipt-modal");
  if (receiptModal) {
    document.getElementById("receipt-order-id").textContent = newOrderId;
    document.getElementById("receipt-amount").textContent = `₹${newOrder.total.toLocaleString('en-IN')}`;
    document.getElementById("receipt-method").textContent = paymentMethod;
    document.getElementById("receipt-address").textContent = newOrder.address;
    document.getElementById("receipt-track-btn").href = `track-order.html?orderId=${newOrderId}`;
    receiptModal.classList.add("open");
  } else {
    showToast(`Order #${newOrderId} placed successfully! Redirecting...`, "success");
    setTimeout(() => {
      window.location.href = `track-order.html?orderId=${newOrderId}`;
    }, 1200);
  }
}

// =====================================================================
// 6. ORDER TRACKING ENGINE
// =====================================================================

function initOrderTrackingPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const queryOrderId = urlParams.get("orderId");

  const searchInput = document.getElementById("track-order-input");
  if (queryOrderId && searchInput) {
    searchInput.value = queryOrderId;
    trackOrderById(queryOrderId);
  } else {
    // Show sample active order by default
    trackOrderById("FD-2026-8812");
  }

  const trackBtn = document.getElementById("track-search-btn");
  if (trackBtn && searchInput) {
    trackBtn.addEventListener("click", () => {
      const id = searchInput.value.trim();
      if (!id) {
        showToast("Please enter a valid FarmDirect Order ID (e.g. FD-2026-8812)", "error");
        return;
      }
      trackOrderById(id);
    });
  }
}

function trackOrderById(orderId) {
  const orders = getStoredOrders();
  const order = orders.find(o => o.id.toUpperCase() === orderId.toUpperCase().trim());
  const detailsContainer = document.getElementById("order-details-display");

  if (!detailsContainer) return;

  if (!order) {
    detailsContainer.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <h3>No Order Found for "${orderId}"</h3>
        <p>Double-check your Order Reference ID or try one of our live demo orders below.</p>
        <div style="display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; margin-top: 1rem;">
          <button class="btn btn-sm btn-secondary" onclick="trackOrderById('FD-2026-8812')">Demo: FD-2026-8812 (In Transit)</button>
          <button class="btn btn-sm btn-secondary" onclick="trackOrderById('FD-2026-7490')">Demo: FD-2026-7490 (Delivered)</button>
        </div>
      </div>
    `;
    return;
  }

  // Update Visual Progress Bar
  const steps = [
    { label: "Order Placed", sub: "Confirmed with direct farmer allotment" },
    { label: "Harvested at Sunrise", sub: "Freshly cut & hand-inspected" },
    { label: "Eco-Cold Packed", sub: "100% biodegradable zero-plastic carton" },
    { label: "Out for Delivery", sub: "Dispatched via direct cold-chain route" },
    { label: "Delivered to Doorstep", sub: "Direct from farm to your kitchen" }
  ];

  const currentIdx = order.statusIndex !== undefined ? order.statusIndex : 3;
  const progressPercent = Math.min(100, Math.max(0, (currentIdx / 4) * 100));

  let stepsHTML = `<div class="tracking-timeline-progress" style="width: ${progressPercent}%;"></div>`;

  steps.forEach((st, i) => {
    let stateClass = "";
    if (i < currentIdx) stateClass = "completed";
    else if (i === currentIdx) stateClass = "active";

    stepsHTML += `
      <div class="timeline-step ${stateClass}">
        <div class="step-circle">${i < currentIdx ? '✓' : i + 1}</div>
        <div class="step-label">${st.label}</div>
        <div class="step-subtext">${st.sub}</div>
      </div>
    `;
  });

  const timelineContainer = document.getElementById("timeline-steps-wrap");
  if (timelineContainer) timelineContainer.innerHTML = stepsHTML;

  // Order Info Card
  let itemsListHTML = "";
  order.items.forEach(it => {
    itemsListHTML += `
      <li style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px dashed var(--border-light); font-size: 0.9rem;">
        <span><strong>${it.quantity}x</strong> ${it.name} <em style="font-size: 0.8rem; color: var(--text-muted);">(Farmer: ${it.farmerName || 'Verified Producer'})</em></span>
        <strong>₹${(it.price * it.quantity).toLocaleString('en-IN')}</strong>
      </li>
    `;
  });

  detailsContainer.innerHTML = `
    <div style="background: var(--surface); border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 1.75rem; box-shadow: var(--shadow-sm);">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-light); padding-bottom: 1rem; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 0.5rem;">
        <div>
          <span class="badge-status info">Order Ref: ${order.id}</span>
          <h3 style="font-size: 1.25rem; margin-top: 0.35rem;">Status: <span style="color: var(--primary-700);">${order.statusLabel}</span></h3>
          <p style="font-size: 0.825rem; color: var(--text-muted);">Placed on: ${order.date} • Estimated Arrival: <strong>${order.eta}</strong></p>
        </div>
        <div>
          <button class="btn btn-sm btn-secondary" onclick="window.print()">🖨️ Print Receipt</button>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; margin-bottom: 1.5rem;">
        <div style="background: var(--surface-alt); padding: 1rem; border-radius: var(--radius-md);">
          <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.35rem;">Delivery Destination</h4>
          <p style="font-weight: 700; font-size: 0.95rem;">${order.customerName}</p>
          <p style="font-size: 0.85rem; color: var(--text-muted);">${order.address}</p>
          <p style="font-size: 0.85rem; color: var(--text-muted);">Phone: ${order.phone}</p>
        </div>

        <div style="background: var(--surface-alt); padding: 1rem; border-radius: var(--radius-md);">
          <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.35rem;">Payment & Billing</h4>
          <p style="font-weight: 700; font-size: 0.95rem;">Method: ${order.paymentMethod}</p>
          <p style="font-size: 0.85rem; color: var(--text-muted);">Farmer Direct Settlement: <strong>Verified</strong></p>
          <p style="font-size: 1.1rem; color: var(--primary-900); font-weight: 800; margin-top: 0.2rem;">Total: ₹${order.total.toLocaleString('en-IN')}</p>
        </div>
      </div>

      <h4 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.75rem;">Fresh Harvest Items in this Shipment:</h4>
      <ul style="list-style: none; margin-bottom: 1rem;">
        ${itemsListHTML}
      </ul>

      <div style="background: var(--primary-50); border: 1px solid var(--primary-200); border-radius: var(--radius-md); padding: 0.85rem; font-size: 0.85rem; color: var(--primary-900);">
        🌱 <strong>Direct Impact Guarantee:</strong> 100% of this produce was gathered directly from participating local farms without middleman depot markups.
      </div>
    </div>
  `;
}

// =====================================================================
// 7. FEATURED PRODUCE & MARKETPLACE LISTINGS
// =====================================================================

function renderProductCardHTML(p) {
  return `
    <div class="product-card" data-category="${p.category}" data-price="${p.price}" data-name="${p.name.toLowerCase()}">
      <div class="product-media">
        <img src="${p.image}" alt="${p.name}" class="product-img" onerror="this.onerror=null; this.src='${FALLBACK_PRODUCE_SVG}';">
        <span class="badge-tag ${p.badge}">${p.badgeLabel}</span>
        <span class="harvest-pill">${p.harvestDate}</span>
      </div>
      <div class="product-body">
        <span class="product-category">${p.categoryLabel}</span>
        <h3 class="product-title">${p.name}</h3>
        <div class="farmer-badge">
          <span class="farmer-icon">👨‍🌾</span>
          <span>By <strong>${p.farmerName}</strong> • ${p.location.split(',')[0]}</span>
        </div>
        <div class="product-rating">
          <span>★</span>
          <span class="rating-num">${p.rating}</span>
          <span class="rating-count">(${p.reviewsCount} reviews)</span>
        </div>
        <div class="product-footer">
          <div class="price-box">
            <span class="price-main">₹${p.price}</span>
            <span class="price-unit">${p.unit}</span>
          </div>
          <button class="add-cart-btn" onclick="addToCart('${p.id}', 1)">
            <span>+</span>
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

function initHomePageFeatured() {
  const container = document.getElementById("featured-products-grid");
  if (!container) return;

  const products = getStoredProducts();
  const featured = products.filter(p => p.featured).slice(0, 8);

  container.innerHTML = featured.map(renderProductCardHTML).join("");
}

function initMarketplacePage() {
  const grid = document.getElementById("marketplace-products-grid");
  if (!grid) return;

  const products = getStoredProducts();

  // Filter elements
  const searchInput = document.getElementById("market-search-input");
  const sortSelect = document.getElementById("market-sort-select");
  const priceRange = document.getElementById("price-range");
  const priceDisplay = document.getElementById("price-range-val");
  const categoryCheckboxes = document.querySelectorAll(".category-filter-checkbox");
  const locationCheckboxes = document.querySelectorAll(".location-filter-checkbox");
  const resultsCount = document.getElementById("results-count");

  function applyFilters() {
    let filtered = [...products];

    // Search query
    const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
    if (query) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.farmerName.toLowerCase().includes(query) ||
        p.location.toLowerCase().includes(query) ||
        p.categoryLabel.toLowerCase().includes(query)
      );
    }

    // Category filter
    const selectedCategories = Array.from(categoryCheckboxes || [])
      .filter(cb => cb.checked)
      .map(cb => cb.value);

    if (selectedCategories.length > 0 && !selectedCategories.includes("all")) {
      filtered = filtered.filter(p => selectedCategories.includes(p.category));
    }

    // Location filter
    const selectedLocations = Array.from(locationCheckboxes || [])
      .filter(cb => cb.checked)
      .map(cb => cb.value);

    if (selectedLocations.length > 0 && !selectedLocations.includes("all")) {
      filtered = filtered.filter(p => selectedLocations.some(loc => p.location.includes(loc)));
    }

    // Max Price
    if (priceRange) {
      const maxPrice = parseInt(priceRange.value, 10);
      filtered = filtered.filter(p => p.price <= maxPrice);
    }

    // Sorting
    const sortVal = sortSelect ? sortSelect.value : "featured";
    if (sortVal === "price-low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortVal === "price-high") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortVal === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortVal === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    // Render results
    if (resultsCount) {
      resultsCount.textContent = `Showing ${filtered.length} Fresh Produce Items`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <div class="empty-icon">🥬</div>
          <h3>No Produce Found Matching Criteria</h3>
          <p>Try clearing some filters or searching for terms like "Mango", "Tomato", or "Honey".</p>
          <button class="btn btn-secondary" onclick="resetMarketplaceFilters()">Reset All Filters</button>
        </div>
      `;
    } else {
      grid.innerHTML = filtered.map(renderProductCardHTML).join("");
    }
  }

  // Bind Events
  if (searchInput) searchInput.addEventListener("input", applyFilters);
  if (sortSelect) sortSelect.addEventListener("change", applyFilters);
  if (priceRange && priceDisplay) {
    priceRange.addEventListener("input", (e) => {
      priceDisplay.textContent = `₹${e.target.value}`;
      applyFilters();
    });
  }

  categoryCheckboxes.forEach(cb => cb.addEventListener("change", applyFilters));
  locationCheckboxes.forEach(cb => cb.addEventListener("change", applyFilters));

  // Check URL category parameter if arrived from Home category click (e.g. marketplace.html?cat=fruits)
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get("cat");
  if (catParam) {
    categoryCheckboxes.forEach(cb => {
      cb.checked = (cb.value === catParam);
    });
  }

  const searchParam = urlParams.get("search");
  if (searchParam && searchInput) {
    searchInput.value = searchParam;
  }

  applyFilters();
}

function resetMarketplaceFilters() {
  const searchInput = document.getElementById("market-search-input");
  if (searchInput) searchInput.value = "";

  const priceRange = document.getElementById("price-range");
  const priceDisplay = document.getElementById("price-range-val");
  if (priceRange && priceDisplay) {
    priceRange.value = 1000;
    priceDisplay.textContent = "₹1000";
  }

  const categoryCheckboxes = document.querySelectorAll(".category-filter-checkbox");
  categoryCheckboxes.forEach(cb => cb.checked = false);

  const locationCheckboxes = document.querySelectorAll(".location-filter-checkbox");
  locationCheckboxes.forEach(cb => cb.checked = false);

  const sortSelect = document.getElementById("market-sort-select");
  if (sortSelect) sortSelect.value = "featured";

  initMarketplacePage();
}

// =====================================================================
// 8. AUTHENTICATION (Customer / Farmer / Admin Demo Authentication)
// =====================================================================

function quickFillLogin(role) {
  const emailInput = document.getElementById("login-email");
  const passInput = document.getElementById("login-password");
  const roleTabs = document.querySelectorAll(".role-tab-btn");

  if (!emailInput || !passInput) return;

  roleTabs.forEach(t => t.classList.remove("active"));
  const activeTab = document.querySelector(`[data-auth-role="${role}"]`);
  if (activeTab) activeTab.classList.add("active");

  if (role === "customer") {
    emailInput.value = "customer@farmdirect.com";
    passInput.value = "pass123";
  } else if (role === "farmer") {
    emailInput.value = "farmer.raj@farmdirect.com";
    passInput.value = "pass123";
  } else if (role === "admin") {
    emailInput.value = "admin@farmdirect.com";
    passInput.value = "admin123";
  }
}

function handleLoginForm(event) {
  event.preventDefault();
  const email = document.getElementById("login-email").value.trim().toLowerCase();
  const password = document.getElementById("login-password").value.trim();
  const activeTab = document.querySelector(".role-tab-btn.active");
  const role = activeTab ? activeTab.getAttribute("data-auth-role") : "customer";

  if (!email || !password) {
    showToast("Please enter your email and password.", "error");
    return;
  }

  // Demo credential validation
  let loggedInUser = null;

  if (role === "admin") {
    if (email === "admin@farmdirect.com" && password === "admin123") {
      loggedInUser = {
        name: "Vikramaditya (Admin)",
        email: email,
        role: "admin"
      };
    } else {
      showToast("Invalid admin credentials. Use admin@farmdirect.com / admin123", "error");
      return;
    }
  } else if (role === "farmer") {
    loggedInUser = {
      name: "Ramesh Patel (Farmer)",
      email: email,
      farmName: "Ratnagiri Sun Orchards",
      role: "farmer"
    };
  } else {
    // Customer
    loggedInUser = {
      name: email.split('@')[0].replace('.', ' '),
      email: email,
      role: "customer"
    };
  }

  setCurrentUser(loggedInUser);
  showToast(`Welcome back, ${loggedInUser.name}! Logging in...`, "success");

  setTimeout(() => {
    if (loggedInUser.role === "farmer") {
      window.location.href = "farmer-dashboard.html";
    } else if (loggedInUser.role === "admin") {
      window.location.href = "admin-dashboard.html";
    } else {
      window.location.href = "marketplace.html";
    }
  }, 900);
}

function handleRegisterForm(event) {
  event.preventDefault();
  const activeTab = document.querySelector(".role-tab-btn.active");
  const role = activeTab ? activeTab.getAttribute("data-auth-role") : "customer";

  const name = document.getElementById("reg-name").value.trim();
  const email = document.getElementById("reg-email").value.trim();
  const phone = document.getElementById("reg-phone").value.trim();
  const password = document.getElementById("reg-password").value;

  if (!name || !email || !phone || !password) {
    showToast("Please fill in all required fields.", "error");
    return;
  }

  if (role === "farmer") {
    const farmName = document.getElementById("reg-farm-name").value.trim() || `${name}'s Farm`;
    const location = document.getElementById("reg-farm-location").value.trim() || "India";
    const crops = document.getElementById("reg-crops").value.trim() || "Seasonal Produce";

    const farmers = getStoredFarmers();
    const newFarmer = {
      id: `farmer-${Date.now()}`,
      name,
      email,
      farmName,
      location,
      crops,
      acreage: "10 Acres",
      status: "approved", // auto approved for prototype demo convenience
      joinedDate: new Date().toLocaleDateString('en-GB')
    };

    farmers.unshift(newFarmer);
    saveFarmers(farmers);

    const user = { name, email, role: "farmer", farmName };
    setCurrentUser(user);
    showToast("Farmer account registered successfully! Opening your dashboard...", "success");
    setTimeout(() => window.location.href = "farmer-dashboard.html", 1000);
  } else {
    // Customer account
    const user = { name, email, role: "customer" };
    setCurrentUser(user);
    showToast("Customer account created successfully! Welcome to FarmDirect.", "success");
    setTimeout(() => window.location.href = "marketplace.html", 1000);
  }
}

// =====================================================================
// 9. FARMER DASHBOARD OPERATIONS
// =====================================================================

function initFarmerDashboard() {
  const user = getCurrentUser();
  if (user && user.role !== "farmer") {
    showToast("Note: Switched to Farmer view mode.", "info");
  }

  renderFarmerStats();
  renderFarmerCropTable();
  renderFarmerOrders();
}

function renderFarmerStats() {
  const products = getStoredProducts();
  const orders = getStoredOrders();

  const totalCropsEl = document.getElementById("farmer-stat-crops");
  const activeOrdersEl = document.getElementById("farmer-stat-orders");
  const earningsEl = document.getElementById("farmer-stat-earnings");

  if (totalCropsEl) totalCropsEl.textContent = products.length;
  if (activeOrdersEl) activeOrdersEl.textContent = orders.length;
  if (earningsEl) {
    const totalRev = orders.reduce((sum, o) => sum + o.total, 0);
    earningsEl.textContent = `₹${totalRev.toLocaleString('en-IN')}`;
  }
}

function renderFarmerCropTable() {
  const container = document.getElementById("farmer-crop-table-body");
  if (!container) return;

  const products = getStoredProducts();

  let html = "";
  products.forEach(p => {
    html += `
      <tr>
        <td>
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <img src="${p.image}" alt="${p.name}" style="width: 44px; height: 44px; border-radius: var(--radius-sm); object-fit: cover;" onerror="this.onerror=null; this.src='${FALLBACK_PRODUCE_SVG}';">
            <div>
              <strong>${p.name}</strong>
              <span style="font-size: 0.75rem; color: var(--text-muted); display: block;">${p.categoryLabel}</span>
            </div>
          </div>
        </td>
        <td><strong>₹${p.price}</strong> / ${p.unit}</td>
        <td>
          <span class="badge-status ${p.stock > 20 ? 'success' : 'warning'}">${p.stock} units</span>
        </td>
        <td>${p.harvestDate}</td>
        <td>
          <button class="btn btn-sm btn-secondary" onclick="editProductPrompt('${p.id}')">Edit Price</button>
          <button class="btn btn-sm" style="color: var(--danger);" onclick="deleteFarmerProduct('${p.id}')">Delete</button>
        </td>
      </tr>
    `;
  });

  container.innerHTML = html;
}

function renderFarmerOrders() {
  const container = document.getElementById("farmer-orders-table-body");
  if (!container) return;

  const orders = getStoredOrders();

  let html = "";
  orders.forEach(o => {
    html += `
      <tr>
        <td><strong>${o.id}</strong></td>
        <td>${o.customerName}</td>
        <td>${o.items.map(it => `${it.quantity}x ${it.name}`).join(", ")}</td>
        <td><strong>₹${o.total.toLocaleString('en-IN')}</strong></td>
        <td><span class="badge-status info">${o.statusLabel}</span></td>
        <td>
          <select class="form-control" style="padding: 0.2rem 0.5rem; font-size: 0.8rem; width: auto;" onchange="updateFarmerOrderStatus('${o.id}', this.value)">
            <option value="1" ${o.statusIndex === 1 ? 'selected' : ''}>Harvest Scheduled</option>
            <option value="2" ${o.statusIndex === 2 ? 'selected' : ''}>Eco-Packed</option>
            <option value="3" ${o.statusIndex === 3 ? 'selected' : ''}>Dispatched Courier</option>
            <option value="4" ${o.statusIndex === 4 ? 'selected' : ''}>Delivered</option>
          </select>
        </td>
      </tr>
    `;
  });

  container.innerHTML = html;
}

function updateFarmerOrderStatus(orderId, newStatusIdx) {
  const orders = getStoredOrders();
  const order = orders.find(o => o.id === orderId);
  if (order) {
    order.statusIndex = parseInt(newStatusIdx, 10);
    const labels = ["Order Placed", "Harvest Scheduled", "Eco-Packed", "Dispatched Courier", "Delivered"];
    order.statusLabel = labels[order.statusIndex] || "In Progress";
    saveOrders(orders);
    showToast(`Order ${orderId} updated to: ${order.statusLabel}`, "success");
    renderFarmerOrders();
  }
}

function handleAddCropModal(event) {
  event.preventDefault();
  const name = document.getElementById("crop-name").value.trim();
  const category = document.getElementById("crop-category").value;
  const price = parseFloat(document.getElementById("crop-price").value);
  const unit = document.getElementById("crop-unit").value.trim();
  const stock = parseInt(document.getElementById("crop-stock").value, 10) || 50;
  const location = document.getElementById("crop-location").value.trim() || "Local Farm";
  const image = document.getElementById("crop-image").value.trim() || "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80";

  if (!name || isNaN(price)) {
    showToast("Please provide valid crop name and price.", "error");
    return;
  }

  const catLabels = {
    vegetables: "Fresh Vegetables",
    fruits: "Orchard Fruits",
    grains: "Grains & Flours",
    "honey-oils": "Raw Honey & Oils"
  };

  const newProduct = {
    id: `prod-${Date.now()}`,
    name,
    category,
    categoryLabel: catLabels[category] || "Fresh Harvest",
    price,
    unit: unit || "per kg",
    rating: 5.0,
    reviewsCount: 1,
    farmerName: "Ramesh Patel (Current Farmer)",
    farmName: "Ratnagiri Sun Orchards",
    location: location,
    harvestDate: "Fresh Harvest Today",
    stock,
    badge: "organic",
    badgeLabel: "Direct Harvest",
    featured: true,
    image,
    description: "Freshly listed directly from the farm on FarmDirect marketplace."
  };

  const products = getStoredProducts();
  products.unshift(newProduct);
  saveProducts(products);

  showToast(`Harvest "${name}" successfully listed on Marketplace!`, "success");
  closeAddCropModal();
  renderFarmerCropTable();
  renderFarmerStats();
}

function editProductPrompt(productId) {
  const products = getStoredProducts();
  const p = products.find(item => item.id === productId);
  if (!p) return;

  const newPrice = prompt(`Update direct price for "${p.name}" (Current: ₹${p.price}):`, p.price);
  if (newPrice !== null && !isNaN(parseFloat(newPrice)) && parseFloat(newPrice) > 0) {
    p.price = parseFloat(newPrice);
    saveProducts(products);
    showToast(`Updated price of ${p.name} to ₹${p.price}`, "success");
    renderFarmerCropTable();
  }
}

function deleteFarmerProduct(productId) {
  if (confirm("Are you sure you want to remove this crop from the live marketplace?")) {
    let products = getStoredProducts();
    products = products.filter(p => p.id !== productId);
    saveProducts(products);
    showToast("Product removed from catalog.", "info");
    renderFarmerCropTable();
    renderFarmerStats();
  }
}

function openAddCropModal() {
  const modal = document.getElementById("add-crop-modal");
  if (modal) modal.classList.add("open");
}

function closeAddCropModal() {
  const modal = document.getElementById("add-crop-modal");
  if (modal) modal.classList.remove("open");
}

// =====================================================================
// 10. ADMIN DASHBOARD OPERATIONS
// =====================================================================

function initAdminDashboard() {
  const user = getCurrentUser();
  if (user && user.role !== "admin") {
    showToast("Opening Admin Control Panel...", "info");
  }

  renderAdminOverview();
  renderAdminFarmers();
  renderAdminProducts();
  renderAdminOrders();
}

function renderAdminOverview() {
  const products = getStoredProducts();
  const orders = getStoredOrders();
  const farmers = getStoredFarmers();

  const totalRev = orders.reduce((sum, o) => sum + o.total, 0);

  const revEl = document.getElementById("admin-stat-revenue");
  const farmersEl = document.getElementById("admin-stat-farmers");
  const ordersEl = document.getElementById("admin-stat-orders");
  const pendingEl = document.getElementById("admin-stat-pending");

  if (revEl) revEl.textContent = `₹${totalRev.toLocaleString('en-IN')}`;
  if (farmersEl) farmersEl.textContent = farmers.length;
  if (ordersEl) ordersEl.textContent = orders.length;
  if (pendingEl) {
    const pendingCount = farmers.filter(f => f.status === "pending").length;
    pendingEl.textContent = pendingCount;
  }
}

function renderAdminFarmers() {
  const container = document.getElementById("admin-farmers-table-body");
  if (!container) return;

  const farmers = getStoredFarmers();

  let html = "";
  farmers.forEach(f => {
    html += `
      <tr>
        <td>
          <strong>${f.name}</strong>
          <span style="font-size: 0.75rem; color: var(--text-muted); display: block;">${f.email}</span>
        </td>
        <td>${f.farmName}</td>
        <td>${f.location}</td>
        <td>${f.crops}</td>
        <td>
          <span class="badge-status ${f.status === 'approved' ? 'success' : 'warning'}">${f.status.toUpperCase()}</span>
        </td>
        <td>
          ${f.status === 'pending' ? `
            <button class="btn btn-sm btn-primary" onclick="approveFarmer('${f.id}')">Approve</button>
            <button class="btn btn-sm" style="color: var(--danger);" onclick="rejectFarmer('${f.id}')">Reject</button>
          ` : `
            <span style="color: var(--success); font-size: 0.85rem; font-weight: 600;">✓ Verified</span>
          `}
        </td>
      </tr>
    `;
  });

  container.innerHTML = html;
}

function approveFarmer(farmerId) {
  const farmers = getStoredFarmers();
  const f = farmers.find(item => item.id === farmerId);
  if (f) {
    f.status = "approved";
    saveFarmers(farmers);
    showToast(`Farmer ${f.name} (${f.farmName}) has been approved!`, "success");
    renderAdminFarmers();
    renderAdminOverview();
  }
}

function rejectFarmer(farmerId) {
  let farmers = getStoredFarmers();
  farmers = farmers.filter(item => item.id !== farmerId);
  saveFarmers(farmers);
  showToast("Farmer application declined and archived.", "info");
  renderAdminFarmers();
  renderAdminOverview();
}

function renderAdminProducts() {
  const container = document.getElementById("admin-products-table-body");
  if (!container) return;

  const products = getStoredProducts();

  let html = "";
  products.slice(0, 8).forEach(p => {
    html += `
      <tr>
        <td>${p.name}</td>
        <td>${p.categoryLabel}</td>
        <td>₹${p.price} / ${p.unit}</td>
        <td>${p.farmerName}</td>
        <td>${p.stock}</td>
        <td>
          <button class="btn btn-sm btn-secondary" onclick="toggleFeaturedProduct('${p.id}')">
            ${p.featured ? '⭐ Featured' : 'Normal'}
          </button>
        </td>
      </tr>
    `;
  });

  container.innerHTML = html;
}

function toggleFeaturedProduct(productId) {
  const products = getStoredProducts();
  const p = products.find(item => item.id === productId);
  if (p) {
    p.featured = !p.featured;
    saveProducts(products);
    showToast(`Updated featured status for "${p.name}".`, "info");
    renderAdminProducts();
  }
}

function renderAdminOrders() {
  const container = document.getElementById("admin-orders-table-body");
  if (!container) return;

  const orders = getStoredOrders();

  let html = "";
  orders.forEach(o => {
    html += `
      <tr>
        <td><strong>${o.id}</strong></td>
        <td>${o.date}</td>
        <td>${o.customerName}</td>
        <td><strong>₹${o.total.toLocaleString('en-IN')}</strong></td>
        <td>${o.paymentMethod}</td>
        <td><span class="badge-status success">${o.statusLabel}</span></td>
      </tr>
    `;
  });

  container.innerHTML = html;
}

// =====================================================================
// 11. CONTACT & FAQ FORM HANDLING
// =====================================================================

function handleContactForm(event) {
  event.preventDefault();
  const name = document.getElementById("contact-name").value.trim();
  const email = document.getElementById("contact-email").value.trim();
  const subject = document.getElementById("contact-subject").value.trim();
  const message = document.getElementById("contact-message").value.trim();

  if (!name || !email || !message) {
    showToast("Please provide your name, email, and message.", "error");
    return;
  }

  showToast(`Thank you, ${name}! Your inquiry has been routed to our FarmDirect support desk.`, "success");
  event.target.reset();
}

// =====================================================================
// 12. DOM READY BOOTSTRAP
// =====================================================================

document.addEventListener("DOMContentLoaded", () => {
  // Ensure default data exists
  getStoredProducts();
  getStoredOrders();
  getStoredFarmers();

  // Setup navigation & UI badges
  setupMobileNav();
  updateCartBadge();
  updateAuthUI();

  // Identify current page by body ID or elements
  if (document.getElementById("featured-products-grid")) {
    initHomePageFeatured();
  }

  if (document.getElementById("marketplace-products-grid")) {
    initMarketplacePage();
  }

  if (document.getElementById("cart-items-container")) {
    renderCartPage();
  }

  if (document.getElementById("order-details-display")) {
    initOrderTrackingPage();
  }

  if (document.getElementById("farmer-crop-table-body")) {
    initFarmerDashboard();
  }

  if (document.getElementById("admin-farmers-table-body")) {
    initAdminDashboard();
  }

  // Bind close buttons for modals
  document.querySelectorAll(".modal-close").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("open"));
    });
  });
});
