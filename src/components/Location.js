export default function Location ({title, location, googleMapsUrl, startDate, endDate, description, imageUrl}) {
    return(
            <div className="card">
                
                <img 
                    className="card--image" 
                    src={require(`../images/${imageUrl}`)} 
                    alt="" 
                />
                
                <h2 className="card--title">{title}</h2>
                <p className="card--location">
                    <span className="card--prefecture">{location}</span>&nbsp;
                    <a href={googleMapsUrl} target="_blank">View on Google Maps</a>
                </p>
                <p className="card--dates">{startDate}{endDate && ` - ${endDate}`}</p>
                <div className="card--description"><p>{description}</p></div>
            </div>
    )
}