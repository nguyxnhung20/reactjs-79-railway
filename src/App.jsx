import './App.css'
import ProductForm from "./components/ProductForm.jsx";
import { useState } from "react";

const Product = ({ name, company, amount, price, isEvenLine }) => {
  const [upAmount, setUpAmount] = useState(amount);
  const [upPrice, setUpPrice] = useState(price);

  const increasePrice = () => {
    setUpPrice(upPrice + 1);
  };


  const increaseQuantity = () => {
    setUpAmount(upAmount + 1);
  };

  const totalPrice = upPrice * upAmount;

  return (
      <tr style={{ backgroundColor: isEvenLine ? 'blue' : 'red' }}>
        <td>{name}</td>
        <td>{company}</td>
        <td>{upAmount}</td>
        <td>{upPrice}</td>
        <td>{totalPrice}</td>
        <td>
          <button onClick={increasePrice}>Tăng giá tiền</button>
          <button onClick={increaseQuantity}>Tăng số lượng</button>
        </td>
      </tr>
  );
}

function App() {
  const [products, setProducts] = useState([]);

  function saveProduct(newProduct) {
    setProducts([...products, newProduct]);
  }

  console.log(products);

  return (
      <div className="container">
        <ProductForm saveProduct={saveProduct} />
        <p>Danh sách sản phẩm</p>
        <table>
          <thead>
          <tr>
            <th>Tên</th>
            <th>Nhãn hàng</th>
            <th>Số lượng</th>
            <th>Giá tiền</th>
            <th>Tổng số tiền</th>
          </tr>
          </thead>
          <tbody>
          {products.map((item, index) => (
              <Product
                  key={index}
                  isEvenLine={index % 2 === 1}
                  name={item.name}
                  price={item.price}
                  amount={item.amount}
                  company={item.company}
              />
          ))}
          </tbody>
        </table>
      </div>
  );
}

export default App;
