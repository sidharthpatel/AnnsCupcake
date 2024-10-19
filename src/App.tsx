import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Cupcakes from "./components/Cupcakes/cupcakes";
import About from "./components/About/about";
import NewArrivals from "./components/NewArrivals/newArrivals";
import Contact from "./components/Contact/contact";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" Component={Cupcakes} />
				<Route path="/about" Component={About} />
				<Route path="/cupcakes" Component={Cupcakes} />
				<Route path="/new-arrivals" Component={NewArrivals} />
				<Route path="/contact" Component={Contact} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
