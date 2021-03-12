import "./App.css";
import CartHeader from "./components/CartHeader";
import CartFooter from "./components/CartFooter";
import CartItems from "./components/CartItems";

function App() {
  return (
    <div className="App">
      <CartHeader />
      <CartItems />
      <CartFooter copyright="2016" />
    </div>
  );
}

export default App;
