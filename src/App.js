import "./App.css";
import Header from "./function-components/header/header";
import Content from "./function-components/content/content";
import Footer from "./function-components/footer/footer";

function App() {
  let productsDetails = [
    {
      img: "images/burger1.png",
      productName: "Chicken Zinger Burger - Classic with Cheese",
      productPrice: "224.05",
    },
    {
      img: "images/burger2.png",
      productName: "Mixed Chicken Zinger Burger Doubles",
      productPrice: "368.57",
    },
    {
      img: "images/burger3.png",
      productName: "Zinger Pro Burger",
      productPrice: "239.05",
    },
    {
      img: "images/bucket1.png",
      productName: "Hot & Crispy Chicken - 8 pcs",
      productPrice: "768.57",
    },
    {
      img: "images/bucket2.png",
      productName: "Smoky Red Grilled Chicken - 5 pc",
      productPrice: "528.57",
    },
    {
      img: "images/bucket3.png",
      productName: "Hot Chicken Wings - 4pc",
      productPrice: "179.05",
    },
    {
      img: "images/tin1.png",
      productName: "Pepsi Can 300 ml",
      productPrice: "57.14",
    },
    {
      img: "images/tin2.png",
      productName: "7UP Can 300 ml",
      productPrice: "57.14",
    },
    {
      img: "images/tin3.png",
      productName: "Fanta Can 300 ml",
      productPrice: "57.14",
    },
  ];
  return (
    <div className="App">
      <Header shopName={"KFC"} menuTitle={"Remberio Cafe"} />
      <Content productsDetails={productsDetails} />
      <Footer />
    </div>
  );
}

export default App;
