const ServiceCard = ({title,description})=>{
    return(
        <div className="ServiceCard">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
};
export default ServiceCard;