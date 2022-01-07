import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

export default class ProductSection extends Component {
  render() {
    const { resultsSearch, handleItemsCart } = this.props;

    return (
      <div className="cards-container">
        { resultsSearch.map((item) => (
          <ProductCard
            key={ item.id }
            { ...item }
            handleItemsCart={ handleItemsCart }
          />
        )) }
      </div>
    );
  }
}

ProductSection.propTypes = {
  resultsSearch: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleItemsCart: PropTypes.func.isRequired,
};
