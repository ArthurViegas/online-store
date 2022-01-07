import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../assets/css/productCart.css';

export default class ProductCart extends Component {
  render() {
    const {
      price,
      thumbnail,
      title,
      id,
      removeItemCart,
      handleQntItemCart,
      quantity } = this.props;

    return (
      <div className="product-cart">
        <div className="product-infos">
          <img
            src={ thumbnail }
            alt={ title }
          />
          <div className="item-description">
            <h5 data-testid="shopping-cart-product-name">{ title }</h5>
          </div>
        </div>
        <section className="quantity-section">
          <p> Quant: </p>
          <div className="quantity-buttons">
            <button
              id={ id }
              onClick={ handleQntItemCart }
              type="button"
            >
              <svg
                width="10"
                height="14"
                viewBox="0 0 10 14"
                id="decrease"
                data-testid="product-decrease-quantity"
              >
                <path d="M7.91673 14L9.18945 12.7273L3.46218 7L9.18945 1.27273L7.91673 0L0.916725 7L7.91673 14Z" />
              </svg>
            </button>

            <p data-testid="shopping-cart-product-quantity">{quantity}</p>

            <button
              id={ id }
              onClick={ handleQntItemCart }
              type="button"
            >
              <svg
                width="10"
                height="14"
                viewBox="0 0 10 14"
                id="increase"
                data-testid="product-increase-quantity"
              >
                <path d="M2.18972 14L0.916992 12.7273L6.64427 7L0.916992 1.27273L2.18972 0L9.18972 7L2.18972 14Z" />
              </svg>
            </button>
          </div>
          <button
            id={ id }
            type="button"
            onClick={ removeItemCart }
            className="remove-item-button"
          >
            <svg width="10" viewBox="0 0 24 32">
              <path
                d="M16.6154 4H22.1538C23.2615 4 24 4.8 24 6V8H0V6C0 4.8 0.923077 4 1.84615 4H7.38462C7.75385 1.8 9.78461 0 12 0C14.2154 0 16.2462 1.8 16.6154 4ZM9.23077 4H14.7692C14.4 2.8 13.1077 2 12 2C10.8923 2 9.6 2.8 9.23077 4ZM1.84615 10H22.1538L20.4923 30.2C20.4923 31.2 19.5692 32 18.6462 32H5.35385C4.43077 32 3.69231 31.2 3.50769 30.2L1.84615 10Z"
                fill="#e72626"
              />
            </svg>
            REMOVER
          </button>
        </section>
        <section className="cart-item-price">
          <p> Preço à vista: </p>
          <span>
            { price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
          </span>
        </section>
      </div>
    );
  }
}

ProductCart.propTypes = {
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  removeItemCart: PropTypes.func.isRequired,
  handleQntItemCart: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
