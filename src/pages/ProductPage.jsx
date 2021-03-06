import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import '../assets/css/ProductPage.css';
import Header from '../components/Header';

export default class ProductPage extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      price: '',
      image: '',
      shippingFee: false,
      id: '',
      cartItems: [],
      loading: false,
    };

    this.handleItemsCart = this.handleItemsCart.bind(this);
    this.loadCartItems = this.loadCartItems.bind(this);
    this.setCartQuantity = this.setCartQuantity.bind(this);
  }

  componentDidMount() {
    this.findProduct();
    this.loadCartItems();
  }

  componentDidUpdate() {
    this.setCartQuantity();
  }

  handleItemsCart(price, thumbnail, title, id) {
    const { cartItems } = this.state;
    const quantity = 1;
    const checkItem = cartItems.find((item) => item.id === id);
    const itemIndex = cartItems.indexOf(checkItem);

    if (checkItem) {
      const copyCartItems = [...cartItems];
      const item = { ...copyCartItems[itemIndex] };
      item.quantity += 1;
      copyCartItems[itemIndex] = item;
      this.setState({
        cartItems: [...copyCartItems],
      }, () => { this.addCartToStorage(); });
    } else {
      this.setState({
        cartItems: [
          ...cartItems,
          {
            price,
            thumbnail,
            title,
            id,
            quantity,
          },
        ],
      }, () => { this.addCartToStorage(); });
    }
  }

  setCartQuantity() {
    const { cartItems } = this.state;
    let minorQuantity = 0;
    cartItems.forEach((item) => {
      minorQuantity += item.quantity;
    });
    return minorQuantity;
  }

  async findProduct() {
    const { location: { state: { productInfos } } } = this.props;
    const prodTitle = '';
    const categoryId = productInfos[0];
    const productId = productInfos[1];
    this.setState({ loading: true });
    const allProducts = await getProductsFromCategoryAndQuery(categoryId, prodTitle);

    const selectedProd = allProducts.results.find((product) => product.id === productId);
    console.log(selectedProd);
    this.setState({
      title: selectedProd.title,
      price: selectedProd.price,
      image: selectedProd.thumbnail,
      shippingFee: selectedProd.shipping.free_shipping,
      id: selectedProd.id,
    }, () => { this.setState({ loading: false }); });
  }

  addCartToStorage() {
    const { cartItems } = this.state;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
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
    const { title, price, image, id, loading, shippingFee } = this.state;
    const actualQuantity = this.setCartQuantity();

    if (!loading) {
      return (
        <>
          <Header actualQuantity={ actualQuantity } />
            <div className="product-section">
            <div className="product-container">
              <h3 data-testid="product-detail-name">{ title }</h3>
              <div>
                <div>
                  <img src={ image } alt={ title } />
                </div>
                <div className="description">
                  <div className="text-container">
                    <p>
                      { `Pre??o: ${price
                        .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}` }
                    </p>
                    <p>{`Frete Gr??tis: ${shippingFee ? 'Sim' : 'N??o'}`}</p>
                  </div>
                  <button
                  className="add-button"
                  data-testid="product-detail-add-to-cart"
                  type="button"
                  onClick={ () => this.handleItemsCart(price, image, title, id) }
                  >
                    Comprar
                  </button>
                    </div>
              </div>
            </div>
            </div>
          <div className="form-container">
            <form
              onSubmit={ (event) => {
                event.preventDefault();
              } }
              >
              <h3>Deixe uma avalia????o</h3>
              <div className="email-and-rate">
                <label htmlFor="input-email">
                  <input
                    id="input-email"
                    placeholder="Email"
                    type="email"
                    required
                  />
                </label>
                <div className="radios-btn">
                  <input name="input-rate" type="radio" value="1" />
                  <input name="input-rate" type="radio" value="2" />
                  <input name="input-rate" type="radio" value="3" />
                  <input name="input-rate" type="radio" value="4" />
                  <input name="input-rate" type="radio" value="5" />
                </div>

                <textarea
                  data-testid="product-detail-evaluation"
                  placeholder="Mensagem (Opcional)"
                  name="input-msg"
                  id="input-msg"
                  cols="30"
                  rows="10"
                />
              </div>

              <button
                type="submit"
                onClick={() => alert('Essa se????o ?? apenas demonstrativa, sua funcionalidade n??o foi implementada! :D')}
              >Enviar</button>
            </form>
          </div>
        </>
      );
    }
    return (
      <div>
        <Header actualQuantity={ actualQuantity } />
        <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="Loading" />
      </div>
    );
  }
}

ProductPage.propTypes = {
  location: PropTypes.objectOf(Object).isRequired,
};
