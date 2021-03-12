import React from "react";
import { useStoreRequest } from "../../../Routes";

const PaginationComponent = function(props) {
  let data = props.data || {};

  if (Object.keys(data).length === 0) {
    return <React.Fragment />;
  }

  const { state, onDone } = useStoreRequest(
    props.data.next_page_url,
    "GET",
    props.dispatch
  );

  const renderNextButton = () => {
    if (state.fetching) {
      return <p>Fetching data...</p>;
    }

    if (props.data.next_page_url !== null) {
      return (
        <i onClick={e => onDone(false)} className="material-icons notranslate">
          chevron_right
        </i>
      );
    }
  };

  return (
    <React.Fragment>
      <ul className="pagination">
        {renderNextButton()}
        {
          <li>
            ({props.data.current_page} / {props.data.last_page})
          </li>
        }
      </ul>
    </React.Fragment>
  );
};

export default PaginationComponent;
