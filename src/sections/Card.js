
import './Card.css';

function Card(props) {
    return (
        <div className="column">
            <img src={props.image} alt="find" />
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    );
}

export default Card;