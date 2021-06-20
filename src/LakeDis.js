import {lakes} from "./data/lakes";

export function LakeDis(){
    const eachLakeArr = lakes.map(function InfoLake(lake){
        return(  
            <div className = "eachLake" key = {lake.id}>
                <h1>{lake.name}</h1>
                <h2>{lake.location}</h2>
                <img src={lake.profileImage} alt={lake.name} />
                <p>{lake.description}</p>
            </div>
        );
    });

    return (
        <div className = "main-content container">
        {eachLakeArr}
        </div>
        
    );
}