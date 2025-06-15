# Pluto - React E-commerce App

**Name**: Haroon Khan  
**Roll Number**: F23BDOCS1M01172  
**Section**: BSCS 4TH 3-M

## 📋 Project Overview

**Pluto** is a sleek, user-friendly e-commerce platform designed for seamless online shopping experiences. Built using React (Vite), CSS, and powered by JSON Server, Pluto supports user authentication, dynamic product listings, and a complete shopping cart system. It also includes an admin panel for inventory and product management.

## 🚀 Features

### 🔐 User Authentication

- Role-based login system (Admin/User)
- Secure login handled through `localStorage`

### 🛍 User Dashboard

- Home page with featured products
- Full product listings with images and details
- Category-based product filtering
- Add to Cart functionality
- View Cart and proceed to purchase

### 🛠 Admin Panel

- Add new products with full details
- Edit existing products
- Delete products from inventory
- Clean and responsive admin interface

### 💅 Modern & Responsive UI

- Responsive, mobile-first layout
- Designed with CSS and custom UI components
- Professional appearance for both users and admins

### 🔁 Routing

- Implemented using `React Router DOM` for smooth navigation

## 🛠 Technology Stack

- **Frontend**: React (Vite), React Router DOM, CSS
- **Backend**: JSON Server (Mock API)
- **Styling**: Custom CSS, Fonts, and Icons
- **Auth**: LocalStorage-based session management

## ▶ How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/haroonkhan/pluto-ecommerce.git
cd pluto-ecommerce
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Backend (JSON Server)

```bash
npm run server
```

### 4. Start the Frontend (React Vite)

```bash
npm run dev
```

### 5. Open the Application

Visit: http://localhost:5173

## 🎯 Business Constraints

### User Registration

- Unique usernames required

### Product Requirements

All products must include:

- Name
- Price (positive numeric)
- Category
- Image

### Cart Rules

- Duplicate items cannot be added to the cart

### Authentication

- Valid login credentials are required

### Admin Rights

- Create, edit, and delete products

### User Capabilities

- Browse and filter products
- Add items to the cart
- Make purchases

### Validation

- Frontend validation ensures all required fields are filled properly
