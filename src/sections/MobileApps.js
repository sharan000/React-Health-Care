import './MobileApps.css';

import ImageDownloadApp from'../images/application.png';
import ImageArrow from '../images/Arrow.png';

function MobileApps(){
    return (
        <section>
            <div className="section4">
                <div className="section4-left">
                    <h5>Download our mobile apps</h5>
                    <p>Our dedicated patient engagement app and
                        web portal allow you to access information instantaneously
                        (no tedeous form, long calls,
                        or administrative hassle) and securely</p>
                    <button>
                        <div>Download</div>
                        <img src={ImageArrow} alt="Arrow" />
                    </button>
                </div>
                <div className="section4-right">
                    <img src={ImageDownloadApp} alt="download-App" />
                </div>
            </div>
         </section>
    );
}

export default MobileApps;