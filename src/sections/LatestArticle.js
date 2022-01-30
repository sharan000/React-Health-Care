import './LatestArticle.css';
import ImageInjection from '../images/image1.png';
import ImageTest from '../images/image2.png';
import ImageTherapy from '../images/image3.png';

function LatestArticle(){
    return (
        <section>
            <div class="section6">
                <h5>Check out our latest article</h5>
                <hr />
                <div class="sec6-row1">
                    <div class="column">
                        <img src={ImageInjection} alt="injection" />
                        <h2>Disease detection, check up in the laboratory</h2>
                        <p>Choose your doctor from thousands of specialist,
                            general, and trusted hospitals</p>
                    </div>
                    <div class="column">
                        <img src={ImageTest} alt="test" />
                        <h2>Herbal medicines that are safe for consumption</h2>
                        <p>Buy your medicines with our mobile application
                            with a simple delivery system</p>
                    </div>
                    <div class="column">
                        <img src={ImageTherapy} alt="therapy" />
                        <h2>Natural care for healthy facial skin</h2>
                        <p>Free consultation with our trusted doctors and
                            get the best recomendations</p>
                    </div>
                </div>
                <button>Learn more</button>
            </div>
        </section>
    );
}

export default LatestArticle;