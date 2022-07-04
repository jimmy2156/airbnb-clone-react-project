
import Star from '../images/Star 1.png';


function Card1(props) {
    return (
        <div className="Card1">
           <div className="katiecard"><img src={props.img} className="cardimg"/>
            <div className="topleft"> <span className="cardword">{props.tag}</span></div> </div> 
            <div className="star"><img src={Star} className='startag' /> <span className="rating1">{props.rating1}</span><span className='rating2'>({props.rating2}) . USA</span></div>
            <div className="cardp">{props.para}</div>
            <div className="pricing"><span className="pricing1">From {props.pricing}</span> <span className="pricing2">/ person</span></div>


        </div>
    )
}
export default Card1