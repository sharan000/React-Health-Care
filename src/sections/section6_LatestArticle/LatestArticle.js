import './LatestArticle.css';
import ImageInjection from '../../images/image1.png';
import ImageTest from '../../images/image2.png';
import ImageTherapy from '../../images/image3.png';
import Card from '../Card';


function LatestArticle(){
    return (
        <section>
            <div className="section6">
                <h5>Check out our latest article</h5>
                <hr />
                <div className="sec6-row1">
                    <Card
                        image ={ImageInjection}
                        title="Disease detection, check up in the laboratory"
                        description="Choose your doctor from thousands of specialist,
                            general, and trusted hospitals"
                    />
                    <Card
                        image ={ImageTest}
                        title="Herbal medicines that are safe for consumption"
                        description="Buy your medicines with our mobile application
                        with a simple delivery system"
                    />
                    <Card
                        image ={ImageTherapy}
                        title="Natural care for healthy facial skin"
                        description="Free consultation with our trusted doctors and
                        get the best recomendations"
                    />
                </div>
                <button>Learn more</button>
            </div>
        </section>
    );
}

export default LatestArticle;