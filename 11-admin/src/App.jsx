import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";
import "./styles/global.scss";
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App=()=> {
 const Layout = () => {
 return (
   <div className="main">
     <Navbar />
     <div className="container">
       <div className="menuContainer">
         <Menu />
       </div>
       <div className="contentContainer">
         <QueryClientProvider client={queryClient}>
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/users" element={<Users />} />
             <Route path="/products" element={<Products />} />
             <Route path="/users/:id" element={<User />} />
             <Route path="/products/:id" element={<Product />} />
           </Routes>
         </QueryClientProvider>
       </div>
     </div>
   </div>
 )};

 return (
 <Router>
   <Routes>
     <Route path="/*" element={<Layout />} />
     <Route path="/login" element={<Login />} />
   </Routes>
 </Router>
 );
}

export default App;