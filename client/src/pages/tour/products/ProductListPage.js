import React from "react";
import { Link } from "react-router-dom";
import { useStoreRequest } from "../../../Routes";
import ContainerComponent from "../../components/tour/TourContainerComponent";
import AddToCartComponent from "../../components/shop/CartButtonComponent";
import UtilSearchComponent from "../../components/utilities/UtilSearchComponent";
import UtilPaginationComponent from "../../components/utilities/UtilPaginationComponent";

function ProductsListPage(props) {
  const { state, onDone, store } = useStoreRequest(
    "/api/products",
    "GET",
    "UPDATE_PRODUCTS"
  );

  React.useEffect(() => {
    onDone(false);
  }, []);

  const products = store.state.products || { data: [] };

  const nav = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Products",
      link: "/products/list.html",
    },
    {
      label: "Categories",
      link: "products/categories.html",
    },
    {
      label: "All Products",
    },
  ];

  const renderList = () => {
    if (products.data?.length) {
      return products.data?.map((row) => {
        return (
          <React.Fragment key={row.id}>
            <div className="col l4 m4 s12">
              <div className="card large">
                <div className="card-image">{renderImageOne(row)}</div>
                <div className="card-content">
                  <Link to={`/products/${row.slug}`}>{row.title}</Link>
                  <p>
                    <s>N</s> {row.price_string}
                  </p>
                  <br />
                  <br />
                  <p dangerouslySetInnerHTML={{ __html: row.description }} />
                </div>
                <div className="card-action" style={{ fontSize: "1rem" }}>
                  <AddToCartComponent id={row.id} {...props} />
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      });
    }
  };

  const renderImageOne = (row) => {
    let image_one = "";

    if (row.image_one !== "") {
      image_one = (
        <img src={row.image_one} alt={row.title} className="responsive-img" />
      );
    } else {
      image_one = (
        <img
          src="/images/products/default.jpg"
          alt="Default Image"
          className="responsive-img"
        />
      );
    }

    return image_one;
  };

  return (
    <ContainerComponent bread={nav}>
      <div className="row">
        <UtilSearchComponent
          endpoint="/api/products/search"
          dispatch="UPDATE_PRODUCTS"
        />
        {renderList()}
        <UtilPaginationComponent
          data={products}
          dispatch="UPDATE_PRODUCTS_PAGE"
        />
      </div>
    </ContainerComponent>
  );
}

export default ProductsListPage;
