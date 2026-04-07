# AGA Shopping 🛍️

Frontend e-commerce web application built with React.js. Users can browse products by category, view details, manage cart, switch themes, and use login/signup UI.

### ✨ Features
- **Home Page** - Landing page with featured products
- **Category Page** - Browse and filter products by category
- **Product Details** - View images, price, description for each product
- **Shopping Cart** - Add/remove items, update quantity, live total
- **Cart Context** - Global cart state using `CartContext.js`
- **Theme Context** - Light/Dark mode toggle using `ThemeContext.js`
- **Authentication UI** - Login and Signup pages (frontend only)
- **React Router** - Navigation between all pages
- **Responsive Design** - Mobile, tablet, and desktop friendly

### 🛠️ Tech Stack
- **Frontend:** React.js, React Router DOM
- **Styling:** CSS3 - `Home.css`, `ProductDetail.css`, `App.css`, `index.css`
- **State Management:** React Context API - `CartContext`, `ThemeContext`
- **Data:** Static/Local data
- **Icons:** React Icons

### 📂 Project Structure
ecommerce/
├── public/
│   └── index.html
├── src/
│   ├── Context/
│   │   ├── CartContext.js      # Cart state management
│   │   └── ThemeContext.js     # Light/Dark theme toggle
│   ├── Pages/
│   │   ├── Home.js             # Landing page
│   │   ├── Home.css
│   │   ├── Category.js         # Category filter page
│   │   ├── ProductDetail.js    # Single product view
│   │   ├── ProductDetail.css
│   │   ├── Cart.js             # Shopping cart page
│   │   ├── Login.js            # Login UI
│   │   └── Signup.js           # Signup UI
│   ├── App.js                  # Routes setup
│   ├── App.css
│   ├── index.js                # Entry point
│   └── index.css               # Global styles
├── package.json
└── README.md

### 🚀 How to Run
1. **Clone the repository**
2. **Install dependencies**
3. **Start the development server**

4. **View in browser**  
   Open `http://localhost:3000`

### 📝 Important Note
This is a **frontend-only academic project**. Login/Signup pages are UI only with no backend authentication. All product and cart data is handled client-side using Context API. Checkout does not process real payments.

### 🔮 Future Enhancements
- [ ] Backend with Node.js + Express
- [ ] MongoDB for products and user data
- [ ] JWT authentication for Login/Signup
- [ ] Payment gateway integration
- [ ] Order tracking page

### 🎯 About
Academic project built to practice React.js concepts like Context API, React Router, component reusability, and responsive design. Developed as part of coursework.

### 👨‍💻 Author
**Ajay A**  
GitHub: [@nsajayag-source](https://github.com/nsajayag-source)

---
**Academic Project** | React.js | Frontend Only
