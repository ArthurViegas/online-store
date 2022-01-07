import React from 'react';
import ProductSection from '../components/ProductSection';
import { getProductsFromCategoryAndQuery, getCategories } from '../services/api';
import SideNav from '../components/SideNav';
import '../assets/css/main.css';
import MainHeader from '../components/MainHeader';

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      typedValue: '',
      categories: [],
      categoryId: '',
      resultsSearch: [],
      cartItems: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.load = this.load.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.handleItemsCart = this.handleItemsCart.bind(this);
    this.addCartToStorage = this.addCartToStorage.bind(this);
    this.loadCartItems = this.loadCartItems.bind(this);
    this.setCartQuantity = this.setCartQuantity.bind(this);
  }

  componentDidMount() {
    this.load();
    this.loadCartItems();
  }

  componentDidUpdate(_prevProps, prevState) {
    const { categoryId } = this.state;
    if (prevState.categoryId !== categoryId) {
      this.filterByCategoryAndQuery();
    }
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

  handleInputChange = () => {
    const inputValue = document.getElementById('input-search').value;
    this.setState({
      typedValue: inputValue,
    }, this.filterByCategoryAndQuery);
  };

  onInputChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  setCartQuantity() {
    const { cartItems } = this.state;
    let minorQuantity = 0;
    cartItems.forEach((item) => {
      minorQuantity += item.quantity;
    });
    return minorQuantity;
  }

  filterByCategoryAndQuery = async () => {
    const { categoryId, typedValue } = this.state;
    const returnValue = await getProductsFromCategoryAndQuery(categoryId, typedValue);
    this.setState({ resultsSearch: [...returnValue.results] });
  }

  addCartToStorage() {
    const { cartItems } = this.state;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  load() {
    getCategories().then((response) => {
      this.setState({
        categories: response,
      });
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
    const { resultsSearch, categories } = this.state;
    const actualQuantity = this.setCartQuantity();
    return (
      <div className="main-container">
        <MainHeader
          actualQuantity={ actualQuantity }
          handleInputChange={ this.handleInputChange }
        />
        <div className="side-nav-and-results">
          <SideNav categories={ categories } onInputChange={ this.onInputChange } />

          <ProductSection
            resultsSearch={ resultsSearch }
            handleItemsCart={ this.handleItemsCart }
          />
        </div>
      </div>
    );
  }
}

export default Main;
