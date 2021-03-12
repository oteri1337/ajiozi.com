import React from "react";
import ContainerComponent from "../../components/tour/TourContainerComponent";

function IotPage() {
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
      label: "Deployments of IoTs and Consultancy"
    }
  ];

  return (
    <ContainerComponent bread={nav}>
      <section className="card-panel ajiozi-padding-ten">
        <div className="container">
          <i className="material-icons" style={{ fontSize: "10rem" }}>
            adb
          </i>
          <br />
          <h4>Deployments of IoTs and Consultancy</h4>
          <p>
            Internet of Things (IoT) solutions are quickly changing how
            businesses make decisions, thus creating new opportunities and a
            competitive advantage for companies of every size. Gaining access to
            and mining the vast volumes of data generated by IoT has the
            potential to transform business success—paving the way for richer
            insights, greater levels of efficiency, and enhanced productivity.
            Ajiozi leverages our skills and our rich network of IoT solution
            partners to help companies have a meaningful, positive impact on
            their business and customer experience. The right solution can
            create differentiation for your company and enable you compete more
            effectively.
          </p>
          <h5>We Make IoT Real: Consulting, Design, and Implementation</h5>
          <p>
            Ajiozi is uniquely equipped to help deploy IoT solutions… offering a
            range of consulting, design, configuration, integration, and field
            installation capabilities. Our team of engineers and network of
            certified technicians can deploy and implement network
            infrastructure and connected devices whether it’s for one location
            or 1,000,000.
          </p>
          <p>
            We partner with IoT OEMs, independent software vendors (ISVs), and
            device manufacturers to provide end-to-end solution capabilities.
            Our customers and partners can focus on what’s core to their
            business while we deliver the hardware, integration, deployment, and
            implementation capabilities to connect and optimize the solution
            benefits.
          </p>
          <h5>IoT Architecture & Infrastructure</h5>
          <p>
            Ajiozi leverages our experience architecting, integrating, and
            connecting different “things” (servers, storage, networks, access
            points, devices, and sensors) and our thorough knowledge of
            architecting solutions from the data centre to the edge of the
            network. Ajiozi’s expertise, combined with the strength of our
            partner ecosystem, extends across multiple vertical industries to
            help our customers use data more effectively to make better
            decisions, communicate, monitor operations, and automate business
            processes to make a difference for their business.
          </p>
          <p>
            Ajiozi has become the infrastructure and cabling installation
            partner trusted by enterprises for IoT network deployments in the
            field. We deliver vertical solutions to customers in a wide range of
            industries including telco, finance, transportation, retail, and
            hospitality. Partner with Ajiozi. We will make sure you are
            connected.
          </p>
        </div>
      </section>
    </ContainerComponent>
  );
}

export default IotPage;
