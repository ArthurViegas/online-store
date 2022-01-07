import React from 'react';
import { Link } from 'react-router-dom';
import ProductCart from '../components/ProductCart';
import Header from '../components/Header';
import '../assets/css/cartPage.css';

class CartPage extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
    };

    this.loadCartItems = this.loadCartItems.bind(this);
    this.removeItemCart = this.removeItemCart.bind(this);
    this.handleQntItemCart = this.handleQntItemCart.bind(this);
    this.addCartToStorage = this.addCartToStorage.bind(this);
  }

  componentDidMount() {
    this.loadCartItems();
  }

  handleQntItemCart({ target }) {
    const { cartItems } = this.state;
    // id do span
    const { id } = target;

    const idButton = target.closest('button').id;
    const cartItem = cartItems.find((item) => item.id === idButton);
    const cartItemIndex = cartItems.indexOf(cartItem);

    const copyCartItems = [...cartItems];
    const itemCart = { ...copyCartItems[cartItemIndex] };

    if (id === 'increase') itemCart.quantity += 1;
    else itemCart.quantity -= 1;

    copyCartItems[cartItemIndex] = itemCart;

    this.setState({
      cartItems: [...copyCartItems],
    }, () => { this.addCartToStorage(); });
  }

  setCartQuantity() {
    const { cartItems } = this.state;
    let minorQuantity = 0;
    cartItems.forEach((item) => {
      minorQuantity += item.quantity;
    });
    return minorQuantity;
  }

  loadCartItems() {
    if (localStorage.getItem('cartItems')) {
      const cartItems = JSON.parse(localStorage.getItem('cartItems'));
      this.setState({
        cartItems,
      });
    }
  }

  addCartToStorage() {
    const { cartItems } = this.state;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  removeItemCart({ target }) {
    const { id } = target.closest('button');
    const { cartItems } = this.state;
    const filteredCart = cartItems.filter((item) => item.id !== id);
    localStorage.setItem('cartItems', JSON.stringify(filteredCart));
    this.loadCartItems();
  }

  render() {
    const { cartItems } = this.state;
    const actualQuantity = this.setCartQuantity();
    let fullPrice = 0;

    return (
      <div>
        <Header actualQuantity={ actualQuantity } />
        <div>
          <div className="main-div">
            <section className="carts-container">
              <div className="cart-title">
                <svg width="25" height="25" viewBox="0 0 20 20" size="24">
                  <path d="M18.3335 7.50676H14.3418L10.6835 2.03529C10.6073 1.92192 10.5043 1.82904 10.3837 1.76481C10.2631 1.70058 10.1285 1.66699 9.99183 1.66699C9.85516 1.66699 9.72059 1.70058 9.59997 1.76481C9.47935 1.82904 9.37639 1.92192 9.30016 2.03529L5.64183 7.50676H1.66683C1.2085 7.50676 0.833496 7.88152 0.833496 8.33956C0.833496 8.41451 0.841829 8.48946 0.866829 8.56441L2.9835 16.2844C3.17516 16.984 3.81683 17.5003 4.5835 17.5003H15.4168C16.1835 17.5003 16.8252 16.984 17.0252 16.2844L19.1418 8.56441L19.1668 8.33956C19.1668 7.88152 18.7918 7.50676 18.3335 7.50676ZM9.99183 4.00069L12.3335 7.50676H7.65016L9.99183 4.00069ZM10.0002 14.1691C9.0835 14.1691 8.3335 13.4196 8.3335 12.5035C8.3335 11.5875 9.0835 10.8379 10.0002 10.8379C10.9168 10.8379 11.6668 11.5875 11.6668 12.5035C11.6668 13.4196 10.9168 14.1691 10.0002 14.1691Z" fill="#E35214" />
                </svg>
                <h3>PRODUTOS</h3>
              </div>
              {
                cartItems.length === 0
                  ? <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
                  : cartItems.map((item) => {
                    fullPrice += (item.price * item.quantity);
                    return (
                      <ProductCart
                        key={ item.id }
                        price={ item.price }
                        quantity={ item.quantity }
                        thumbnail={ item.thumbnail }
                        title={ item.title }
                        id={ item.id }
                        removeItemCart={ this.removeItemCart }
                        handleQntItemCart={ this.handleQntItemCart }
                      />
                    );
                  })
              }
            </section>
            <section className="checkout-menu">
              <div className="checkout-header">
                <svg width="24" viewBox="0 0 24 24">
                  <path d="M22.5 24H6C5.57812 24 5.22266 23.8556 4.93359 23.5668C4.64453 23.278 4.5 22.9229 4.5 22.5015V20.6049C3.17188 20.121 2.08984 19.3015 1.25391 18.1463C0.417969 16.9912 0 15.6878 0 14.2361C0 12.7844 0.417969 11.481 1.25391 10.3259C2.08984 9.17073 3.17188 8.35902 4.5 7.89073V1.52195C4.5 1.1161 4.64453 0.764878 4.93359 0.468293C5.22266 0.171707 5.57812 0.0234146 6 0.0234146H15V8.26537C15 8.46829 15.0742 8.6439 15.2227 8.7922C15.3711 8.94049 15.5469 9.01463 15.75 9.01463H23.9766L24 9.03805V22.5015C24 22.9073 23.8516 23.2585 23.5547 23.5551C23.2578 23.8517 22.9062 24 22.5 24ZM14.8125 20.3707L11.2734 16.8585C11.7578 16.0312 12 15.1571 12 14.2361C12 12.8 11.4883 11.5668 10.4648 10.5366C9.44141 9.50634 8.20312 8.99122 6.75 8.99122C5.29688 8.99122 4.05859 9.50244 3.03516 10.5249C2.01172 11.5473 1.5 12.7844 1.5 14.2361C1.5 15.6878 2.01172 16.9249 3.03516 17.9473C4.05859 18.9698 5.29688 19.481 6.75 19.481C7.65625 19.481 8.53125 19.239 9.375 18.7551L12.8906 22.2907C13.0156 22.4156 13.1719 22.478 13.3594 22.478C13.5469 22.478 13.7109 22.4156 13.8516 22.2907L14.8125 21.3307C14.9375 21.2059 15 21.0498 15 20.8624C15 20.6751 14.9375 20.5112 14.8125 20.3707ZM6.75 17.9824C5.71875 17.9824 4.83594 17.6195 4.10156 16.8937C3.36719 16.1678 3 15.2859 3 14.2478C3 13.2098 3.36719 12.3239 4.10156 11.5902C4.83594 10.8566 5.71875 10.4898 6.75 10.4898C7.78125 10.4898 8.66406 10.8566 9.39844 11.5902C10.1328 12.3239 10.5 13.2098 10.5 14.2478C10.5 15.2859 10.1328 16.1678 9.39844 16.8937C8.66406 17.6195 7.78125 17.9824 6.75 17.9824ZM16.5 0C16.9062 0.0156098 17.25 0.163902 17.5312 0.444878L23.5547 6.46244C23.8516 6.75902 23.9922 7.11024 23.9766 7.5161H16.5V0Z" />
                </svg>
                <h2>RESUMO</h2>
              </div>
              <div className="checkout-body">
                <p>
                  { 'Valor dos Produtos: ' }
                  <strong>
                    { fullPrice
                      .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
                  </strong>
                </p>
              </div>
              <div className="checkout-footer">
                <Link className="checkout-button" to="/checkout" data-testid="checkout-products">FINALIZAR COMPRA</Link>
                <Link className="return-button" to="/" >CONTINUAR COMPRANDO</Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default CartPage;
