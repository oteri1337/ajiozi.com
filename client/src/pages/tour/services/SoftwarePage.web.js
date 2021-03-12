import React from "react";
import ContainerComponent from "../../components/tour/TourContainerComponent";

function SoftwarePage() {
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
      label: "Cyber Security & Software Engineering"
    }
  ];

  return (
    <ContainerComponent bread={nav}>
      <section className="card-panel ajiozi-padding-ten">
        <div className="container">
          <div className="row">
            <div className="col l3">
              <i className="material-icons" style={{ fontSize: "10rem" }}>
                devices_other
              </i>
            </div>
            <div className="col l3">
              <i className="material-icons" style={{ fontSize: "10rem" }}>
                dns
              </i>
            </div>
          </div>
          <h4>Cyber Security & Software Engineering</h4>
          <p>
            Organisations are subject to increasing amounts of legislative,
            corporate and regulatory requirements to show that they are managing
            and protecting their information appropriately. Simultaneously, the
            threats from cyber criminals and hacktivists are growing in scale
            and sophistication.
          </p>
          <p>
            Organisations are increasingly vulnerable as a result of
            technological advances and changing business practices including the
            internet of things, wearable technology, big data, cloud computing,
            services on demand and mobile technology.
          </p>
          <h5>How we can help</h5>
          <p>
            Ajiozi’s Cyber Security Framework illustrates both the
            organizational components and the iterative process required to help
            assure customers, shareholders and employees that cyber risks are
            being managed
          </p>
          <h5>Our cyber services are aim to:</h5>
          <ul>
            <li>Identify the cyber threats our client face</li>
            <li>
              Identify the gaps that may lead to a successful cyber attack
            </li>
            <li>Help implement control to reduce the identified GAP</li>
            <li>
              Remediate the root cause issue driving the right behavior to
              achieve sustainable solutions
            </li>
          </ul>
        </div>
      </section>
    </ContainerComponent>
  );
}

export default SoftwarePage;
