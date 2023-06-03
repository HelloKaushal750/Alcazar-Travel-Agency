import "./App.css";
import Login from "./Components/Login/Login";
import ProductDetailsPage from "./Components/ProductDetailsPage/ProductDetailsPage";
import { Footer } from "./Components/footer/Footer";
import { SignUp } from "./Components/signup/SignUp";
import Navbar from "./Navbar/Navbar";
import { AllRoutes } from "./Routes/AllRoutes";


function App() {
  return <div className="App">
<AllRoutes/>
  </div>;
}

export default App;
  