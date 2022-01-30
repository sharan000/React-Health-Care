import './CustomerSaying.css';

import ImageCustomerProfile from '../images/profile-image.jpg';

function CustomerSaying(){
    return (
        <section>
            <article className="section5">
                <h5>What our customer are saying</h5>
                <hr />
                <div className="sec5-row1">
                    <div className="column1">
                        <img src={ImageCustomerProfile} alt="Customer Profile" />
                    </div>
                    <div className="column2">
                        <h3>Edward Newgate</h3>
                        <p>Founder Circle</p>
                    </div>
                    <div className="column3">
                        <p>“Our dedicated patient engagement app and
                            web portal allow you to access information instantaneously (no tedeous form, long calls,
                            or administrative hassle) and securely”</p>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default CustomerSaying;