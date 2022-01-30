import "./LeadingHealthCareProvider.css";

import ImageHealthCareProvider from '../images/heathcareProvider.png';

function LeadingHealthCareProvider() {
    return (
        <section>
            <div className="section3">
                <div className="section3-left">
                    <img src={ImageHealthCareProvider} alt="healthcare-provider" />
                </div>
                <div className="section3-right">
                    <h5>Leading healthcare providers</h5>
                    <hr />
                    <p>
                        Trafalgar provides progressive, and affordable healthcare,
                        accessible on mobile and online for everyone. To us, it’s not just
                        work. We take pride in the solutions we deliver
                    </p>
                    <button>Learn more</button>
                </div>
            </div>
        </section>
    );
}

export default LeadingHealthCareProvider;
