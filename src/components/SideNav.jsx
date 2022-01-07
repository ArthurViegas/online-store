import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/sideNav.css';

class SideNav extends React.Component {
  render() {
    const { categories, onInputChange } = this.props;
    return (
      <form className="side-nav">
        <h4> Categorias: </h4>
        {
          categories
            .map((categorie) => (
              <div key={ categorie.id }>
                <input
                  type="radio"
                  id={ categorie.id }
                  name="categoryId"
                  value={ categorie.id }
                  data-testid="category"
                  onClick={ onInputChange }
                />
                <label htmlFor={ categorie.id }>{categorie.name}</label>
              </div>
            ))
        }
      </form>
    );
  }
}

SideNav.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default SideNav;
