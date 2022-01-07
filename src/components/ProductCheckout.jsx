import React from 'react';
import PropTypes from 'prop-types';

class ProductCheckout extends React.Component {
  render() {
    const { title, thumbnail, price, quantity } = this.props;
    return (
      <div>
        <img src={ thumbnail } alt="Product review" />
        <p>{ title }</p>
        <p>
          { price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
        </p>
        <p>
          Quantidade:
          {' '}
          { quantity }
        </p>
      </div>
    );
  }
}

ProductCheckout.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default ProductCheckout;
