# 🌱 FarmDirect — Farmer-to-Customer Marketplace

> **"Farm Fresh Harvest, Zero Middlemen."**

**FarmDirect** is a modern, responsive, and ethical agricultural marketplace that directly connects smallholder family farmers with urban households. By eliminating unfair commission agents, mandi brokers, and speculative wholesalers, FarmDirect ensures growers earn 85%–95% of retail value while families receive fresh produce harvested at sunrise within 24 hours.

Built from scratch using **pure HTML5, CSS3, and vanilla JavaScript**, FarmDirect is 100% serverless, runs instantly by opening `index.html`, and deploys seamlessly to **GitHub Pages** without any build step, npm modules, or backend servers.

---

## 🌟 Key Features

### 1. 🏡 Modern Homepage (`index.html`)
- **Deep Forest-Green Hero Section:** Eye-catching gradient hero with the core motto: *"Farm Fresh Harvest, Zero Middlemen."*
- **Live Search & Tags:** Quick-search bar with popular harvest tags (*Alphonso Mango, Desi Tomatoes, Wild Honey, Sharbati Wheat*).
- **Produce Categories:** Fresh Vegetables, Orchard Fruits, Grains & Flours, and Raw Honey & Oils.
- **Featured Produce Grid:** High-resolution produce cards with farmer badges, ratings, harvest dates, and instant "Add to Cart" with toast notifications.
- **Supply Chain Comparison:** Infographic contrasting the predatory Traditional Mandi Chain with FarmDirect's 24-hr Direct Model.
- **Key Impact Statistics:** 12,500+ verified growers, ₹18.4 Cr direct payouts, 48,000+ households.

### 2. 🥬 Product Marketplace (`marketplace.html`)
- **16+ Rich Produce Items:** Verified GI-tagged mangoes, heirloom tomatoes, Himalayan apples, baby greens, cold-pressed oils, and mountain walnuts.
- **Interactive Search & Filter:** Filter produce by keywords, produce categories, maximum price slider, and geographical farm origin (*Maharashtra, Punjab, Himachal, Karnataka, Rajasthan, etc.*).
- **Dynamic Sorting:** Sort by Featured, Price (Low to High, High to Low), Customer Rating, or Alphabetical.
- **Persistent Shopping Cart:** Fully synchronized with `localStorage`.

### 3. 🛒 Shopping Basket & Multi-Option Checkout (`cart.html`)
- **Dynamic Item Management:** Increment/decrement quantities, remove items, live subtotal updates.
- **Farmer Support Coupons:** Apply `FRESH10` for 10% off or `FARMLOVE` for 15% off.
- **Payment Options (Requirement 11):**
  - **UPI / QR Pay:** Instant QR code settlement simulation.
  - **Credit / Debit Cards:** Test card prefilled details with instant validation.
  - **Pay on Harvest Delivery (COD):** Inspect produce at your doorstep before paying.
  - **Net Banking:** Supported across all major banks.
- **Order Receipt Modal:** Generates an official tracking reference ID (*e.g., `FD-2026-8812`*) and links directly to live tracking.

### 4. 🚚 Real-Time Order Tracking (`track-order.html`)
- **Visual Animated Stepper:**
  1. *Order Placed & Allotted to Farmer*
  2. *Harvested at Sunrise*
  3. *Eco-Cold Packed (Plastic-Free)*
  4. *Out for Delivery with Cold-Chain Courier*
  5. *Delivered to Doorstep*
- **Order Inspector:** View itemized produce, farm origins, delivery address, driver status, and printable receipts.
- **Pre-Loaded Demos:** One-click demo buttons for immediate evaluation.

### 5. 👨‍🌾 Farmer Dashboard (`farmer-dashboard.html`)
- **Grower Control Center:** View total listed crops, active customer orders, and accumulated payouts.
- **List New Produce Modal:** Add new crops with name, category, direct price, unit, stock, and photo.
- **Inventory Price Management:** Update selling prices per kg or unit with instant client-side persistence.
- **Order Fulfillment:** Advance fulfillment statuses (*Harvest Scheduled → Eco-Packed → Dispatched → Delivered*) to update customer tracking in real time.

### 6. 🛡️ Admin Operations Desk (`admin-dashboard.html`)
- **Marketplace Health KPIs:** Platform sales volume, verified farmers count, and pending approvals.
- **Farmer Verification Desk:** 1-click **Approve** or **Reject** actions for new grower applications.
- **Catalog Curation:** Toggle featured crop status (*⭐ Featured vs Normal*).
- **Platform Ledger:** Full audit trail of orders, customer details, and settlement statuses.

### 7. 🔐 Authentication (`login.html` & `register.html`)
- **Dedicated Role Switchers:** Seamless interfaces for **Customer**, **Farmer**, and **Admin**.
- **1-Click Prototype Demo Logins:** Instant auto-fill buttons on the login screen for testing.
- **Farmer Signup with Agronomy Details:** Collects farm name, acreage, crop specialties, and certification status.

### 8. 📖 About Us & 📞 Contact (`about.html` & `contact.html`)
- Detailed breakdown of middleman markups and farmer poverty cycles.
- Stories and photos of our real rural farmer champions.
- Responsive contact form with client-side input validation and feedback toasts.
- Interactive FAQ accordion for returns, quality guarantees, and payment questions.

---

## 🗂️ Project File Structure

Every file is located directly in the root directory for maximum portability and effortless deployment:

```text
cep2/
├── index.html              # Homepage with hero, categories, featured crops & how it works
├── marketplace.html        # Product marketplace with search, filters, and produce cards
├── cart.html               # Shopping basket, coupon engine, and payment checkout modal
├── track-order.html        # Live visual order tracking timeline with sample order lookups
├── about.html              # FarmDirect mission, middleman breakdown & farmer stories
├── contact.html            # Contact helpdesk, farmer inquiry form & interactive FAQs
├── login.html              # Role-based login interface with 1-click test credentials
├── register.html           # Customer and farmer onboarding with farm details form
├── farmer-dashboard.html   # Farmer inventory management, crop listing & order status
├── admin-dashboard.html    # Admin analytics, farmer approvals & catalog curation
├── style.css               # Clean green-and-white design system, variables & responsiveness
├── script.js               # Client-side data engine, localStorage persistence & UI events
└── README.md               # Setup instructions, architecture & GitHub Pages guide
```

---

## ⚡ Quick Test Credentials

On [login.html](login.html), you can click any of the **1-Click Prototype Demo** buttons or use these credentials:

| Role | Email | Password | Destination |
| :--- | :--- | :--- | :--- |
| **Customer** | `customer@farmdirect.com` | `pass123` | [marketplace.html](marketplace.html) |
| **Farmer** | `farmer.raj@farmdirect.com` | `pass123` | [farmer-dashboard.html](farmer-dashboard.html) |
| **Admin** | `admin@farmdirect.com` | `admin123` | [admin-dashboard.html](admin-dashboard.html) |

---

## 💻 How to Run the Project Locally in VS Code

Because FarmDirect uses **pure standard HTML5, CSS3, and JavaScript**, no installation, terminal commands, or build steps are required.

### Method 1: Direct File Launch (Simplest)
1. Open your project folder in File Explorer.
2. Double-click `index.html`.
3. It will immediately open and run smoothly in Chrome, Edge, Firefox, or Safari.

### Method 2: In Visual Studio Code with Live Server
1. Open **Visual Studio Code**.
2. Click **File > Open Folder...** and select the `cep2` folder.
3. Install the popular **Live Server** extension (by *Ritwick Dey*) from the VS Code Extensions tab (`Ctrl+Shift+X` or `Cmd+Shift+X`).
4. Right-click on `index.html` in the file tree and select **"Open with Live Server"**.
5. Your default browser will launch at `http://127.0.0.1:5500/index.html`.

---

## 🚀 How to Upload to GitHub & Deploy to GitHub Pages

Follow these step-by-step instructions to publish FarmDirect live on the internet for free:

### Step 1: Initialize Git and Commit Your Files
Open your terminal or PowerShell inside the project directory:

```bash
git init
git add .
git commit -m "Initial commit: FarmDirect Farmer-to-Customer Marketplace"
```

### Step 2: Create a New Repository on GitHub
1. Go to [github.com/new](https://github.com/new).
2. Enter the Repository name: `farmdirect` (or any name you prefer).
3. Set the visibility to **Public**.
4. Leave *"Initialize this repository with a README"* **unchecked** (we already created one).
5. Click **Create repository**.

### Step 3: Push Your Code to GitHub
Copy and run the commands shown on GitHub:

```bash
git branch -M main
git remote add origin https://github.com/<your-username>/farmdirect.git
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. On your GitHub repository page, click **Settings** (top right tab).
2. In the left sidebar, click **Pages** (under the "Code and automation" section).
3. Under **Build and deployment**:
   - **Source:** Select `Deploy from a branch`.
   - **Branch:** Select `main` from the dropdown and leave the folder as `/ (root)`.
4. Click **Save**.

### Step 5: View Your Live Website!
Within 1–2 minutes, GitHub Pages will deploy your site. Your live website URL will be:

```text
https://<your-username>.github.io/farmdirect/
```

> **Why It Works Seamlessly on GitHub Pages:**
> All asset and page links in FarmDirect are **relative** (`style.css`, `script.js`, `marketplace.html`, etc.) rather than absolute root paths (`/style.css`). This guarantees the website renders correctly whether hosted on a custom root domain or a GitHub Pages subpath (`/<repo-name>/`).

---

## 🎨 Design System & Colors

- **Primary Forest Greens:** `#064e3b`, `#065f46`, `#047857`, `#10b981`
- **Soft Harvest Backgrounds:** `#ecfdf5`, `#f8fafc`, `#ffffff`
- **Harvest Gold Accents:** `#f59e0b`, `#d97706`
- **Typography:** Inter, clean sans-serif system stack
- **Responsive Layouts:** Mobile-first fluid grid (Breakpoints at `1024px`, `768px`, and `480px`)

---

## 📄 License & Fair Trade Pledge

This project is open-source and created for educational and community empowerment purposes. Dedicated to supporting smallholder farmers and promoting sustainable agro-ecology.
