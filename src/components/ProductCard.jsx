import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../assets/css/productCard.css';

export default class ProductCard extends Component {
  render() {
    const {
      price,
      thumbnail,
      title,
      id,
      handleItemsCart,
      category_id: categoryId } = this.props;

    return (
      <div data-testid="product" className="product-card">
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: '/product-page',
            state: {
              productInfos: [categoryId, id],
            },
          } }
        >
          <header>
            <h5>{ title }</h5>
          </header>
          <section>
            <img
              src={ thumbnail }
              alt={ title }
            />
            <p>
              { price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
            </p>
          </section>
        </Link>

        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => handleItemsCart(price, thumbnail, title, id) }
        >
          <span role="img" aria-label="Cart emoji">🛒 Comprar</span>
        </button>
      </div>
    );
  }
}

ProductCard.defaultProps = {
  category_id: '',
  handleItemsCart: () => {},
  id: '0000',
};

ProductCard.propTypes = {
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category_id: PropTypes.string,
  handleItemsCart: PropTypes.func,
  id: PropTypes.string,
};
