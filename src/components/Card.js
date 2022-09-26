import './Card.css'

const Card = ({programmerName, programmerDescription, programmerImage}) => {
    return (
        <div className="card">
            <div className="imageContainer">
                <img className="image" src={`./images/${programmerImage}`} alt={programmerName}></img>
            </div>
            <h3 className='programmerName'>{programmerName}</h3>
            <p className='programmerDescription'>{programmerDescription}</p>
        </div>
    )
}

export default Card;