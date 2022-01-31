import './VertualHealthCare.css';

import header from '../../images/header-image.png';

function VertualHealthCare(){
    return (
        <section>
            <div className="section1">
            <div className="section1-left">
                <h6>Virtual healthcare for you</h6>
                <p>Trafalgar provides progressive, and affordable
                    healthcare, accessible on mobile and online
                    for everyone</p>
                <button>Consult Today</button>
            </div>
            <div className="section1-right">
                <img src={header} alt="healthcare" />
            </div>
        </div>
        </section>
    );
}

export default VertualHealthCare;