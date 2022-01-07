import React from 'react';
import { Redirect } from 'react-router-dom';
import ProductCheckout from '../components/ProductCheckout';

class Checkout extends React.Component {
  constructor() {
    super();

    this.loadCartItems = this.loadCartItems.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      cartItems: [],
      redirect: false,
    };
  }

  componentDidMount() {
    this.loadCartItems();
  }

  onSubmit(event) {
    event.preventDefault();
    console.log('Alou');
    this.setState({
      redirect: true,
    });
  }

  loadCartItems() {
    if (localStorage.getItem('cartItems')) {
      const cartItems = JSON.parse(localStorage.getItem('cartItems'));
      this.setState({
        cartItems,
      });
    }
  }

  render() {
    const { cartItems, redirect } = this.state;
    let fullPrice = 0;
    return (
      <div>
        <div>
          {
            cartItems.map((item) => {
              fullPrice += (item.price * item.quantity);
              return (
                <ProductCheckout
                  key={ item.id }
                  thumbnail={ item.thumbnail }
                  price={ item.price }
                  title={ item.title }
                  quantity={ item.quantity }
                />
              );
            })
          }
          <p>
            Valor total:
            {' '}
            { fullPrice
              .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
          </p>
        </div>
        <form onSubmit={ this.onSubmit }>
          <div>
            <label htmlFor="full-name">
              Nome Completo:
              <input
                data-testid="checkout-fullname"
                type="text"
                name="full-name"
                id="full-name"
                required
              />
            </label>
            <label htmlFor="email-input">
              Email:
              <input
                data-testid="checkout-email"
                type="email"
                name=""
                id="email-input"
                required
              />
            </label>
            <label htmlFor="cpf">
              CPF:
              <input
                data-testid="checkout-cpf"
                type="text"
                name=""
                id="cpf"
                required
              />
            </label>
            <label htmlFor="celphone">
              Telefone:
              <input
                data-testid="checkout-phone"
                type="text"
                name=""
                id="celphone"
                required
              />
            </label>
            <label htmlFor="cep">
              CEP:
              <input
                data-testid="checkout-cep"
                type="text"
                name=""
                id="cep"
                required
              />
            </label>
            <label htmlFor="adress">
              Endereço:
              <input
                data-testid="checkout-address"
                type="text"
                name=""
                id="adress"
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="boleto">
              Boleto:
              {' '}
              <span role="img" aria-label="Money emoji">💵</span>
              <input type="radio" name="payment" id="boleto" required />
            </label>
            <label htmlFor="visa">
              Visa:
              {' '}
              <span role="img" aria-label="Credit card emoji">💳</span>
              <input type="radio" name="payment" id="visa" />
            </label>
            <label htmlFor="master-card">
              MasterCard:
              {' '}
              <span role="img" aria-label="Credit card emoji">💳</span>
              <input type="radio" name="payment" id="master-card" />
            </label>
            <label htmlFor="elo">
              Elo:
              {' '}
              <span role="img" aria-label="Credit card emoji">💳</span>
              <input type="radio" name="payment" id="elo" />
            </label>
          </div>
          <button type="submit">Comprar</button>
        </form>
        {
          redirect === true && <Redirect to="/" />
        }
      </div>
    );
  }
}

export default Checkout;
