import React from "react";
import { Link } from "react-router-dom";

class ProductsDropdown extends React.Component {
  render = () => {
    return (
      <React.Fragment>
        <ul id="products" className="dropdown-content">
          {/* {this.renderProducts()} */}
        </ul>
      </React.Fragment>
    );
  };

  renderProducts = () => {
    if (this.props.context.categories.length !== 0) {
      return this.props.context.categories.map(cat => {
        return (
          <li key={cat.id}>
            <Link to={`/products/categories/${cat.slug}`} className="blue-text">
              {cat.title}
            </Link>
          </li>
        );
      });
    }
  };
}

export default ProductsDropdown;
