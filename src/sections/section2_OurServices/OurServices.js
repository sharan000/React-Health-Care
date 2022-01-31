import "./OurServices.css";
import Card from "../Card";
import ImageFind from "../../images/find.png";
import ImageMedicine from "../../images/medicine.PNG";
import ImageConsult from "../../images/consult.PNG";
import ImageDetails from "../../images/details.PNG";
import ImageEmergency from "../../images/emergency.PNG";
import ImageTracking from "../../images/tracking list.PNG";

function OurServices(props) {
  return (
    <section>
      <div className="section2">
        <h5>Our Services</h5>
        <hr />
        <p>
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </p>
        <div className="sec2-row1">
          <Card
            image={ImageFind}
            title="Search doctor"
            description="Choose your doctor from thousands of specialist,
                        general, and trusted hospitals"
          />
          <Card
            image={ImageMedicine}
            title="Online pharmacy"
            description="Buy your medicines with our mobile application
            with a simple delivery system"
          />
          <Card
            image={ImageConsult}
            title="Consultation"
            description="Free consultation with our trusted doctors and
            get the best recomendations"
          />
        </div>
        <div className="sec2-row2">
          <Card
            image={ImageDetails}
            title="Details"
            description="Free consultation with our trusted doctors and get the best
              recomendations"
          />
          <Card
            image={ImageEmergency}
            title="Emergency care"
            description="Free consultation with our trusted doctors and get the best
              recomendations"
          />
          <Card
            image={ImageTracking}
            title="Tracking"
            description="Free consultation with our trusted doctors and get the best
              recomendations"
          />
        </div>
        <button>Learn more</button>
      </div>
    </section>
  );
}

export default OurServices;
