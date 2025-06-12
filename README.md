LetsShop ~ https://swampshop.netlify.app/shop

LetsShop is a single-page e-commerce React application that demonstrates core frontend development concepts including routing, state management, API integration, component-based architecture, and testing.

  Tech Stack 
  
	•	React (with Vite)
	•	React Router DOM (for SPA routing)
	•	CSS Modules (for scoped styling)
	•	FakeStore API (for mock product data)
	•	React Testing Library + Vitest (for unit and component testing)


  Features 
  
	•	Home Page - Contains static content and a responsive layout showcasing app branding.
	•	Shop Page - Fetches product data from FakeStore API and displays them in a grid of ItemCards. Each card allows:
	•	Title and price display
	•	Add to Cart functionality with spinner feedback
	•	Cart Page
	•	Displays items added to cart with quantity and subtotal
	•	Remove buttons to delete individual items
	•	Checkout summary (total items, total price)
	•	Navigation Bar
	•	Includes logo, Home, Shop, and Cart links

⸻

  State Management

	Global cart state is managed using useContext via a shared CartContext. This avoids prop drilling and allows components such as NavBar, Shop, and Cart to read/write from the same state source.



Setup & Run Locally

	# Clone the repository
	git clone https://github.com/samiam120/lets-shop.git
	cd lets-shop
	
	# Install dependencies
	npm install
	
	# Start development server
	npm run dev
	
	# Run tests
	npm run test
