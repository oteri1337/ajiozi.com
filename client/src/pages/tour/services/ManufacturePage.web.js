import React from "react";
import ContainerComponent from "../../components/tour/TourContainerComponent";

function ManufacturePage() {
  const nav = [
    {
      label: "Home",
      link: "/"
    },
    {
      label: "Services",
      link: "/services.html"
    },
    {
      label: "Manufacture of Security Systems"
    }
  ];

  return (
    <ContainerComponent bread={nav}>
      <section className="card-panel ajiozi-padding-ten">
        <div className="container">
          <i className="material-icons" style={{ fontSize: "10rem" }}>
            payment
          </i>
          <br />
          <h4>Manufacture of Security System</h4>
          <p>
            Ajiozi is a Technology base company that specialises in design and
            production of high level security systems and automated devices for
            residence, co-operate organisation, industries, public/private
            schools as well as government parastatals. Ajiozi mission is to
            create socio-economic relevance through tight security measure and
            improve on societal value via systematic and cognitive protection
            for lives and property.
          </p>
          <h5>Supplies of Camera and Biometric System</h5>
          <p>
            Through an integrated network of partners specialised in the design
            and manufacture of standard cameras and biometrics systems, Ajiozi
            is posited to supplies, install and maintain same to creating a more
            robust society. The Cameras and Biometric come in various standard
            and specification that meets clients’ needs.
          </p>
        </div>
      </section>
    </ContainerComponent>
  );
}

export default ManufacturePage;
