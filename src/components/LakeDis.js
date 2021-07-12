import {lakes} from "../data/lakes";

import { Link } from 'wouter';

export function LakeDis(){
    const eachLakeArr = lakes.map(function InfoLake(lake){
        return(  
            <div className = "eachLake" key = {lake.id}>
                <div className="lake-header">
                    <Link href={`/explore/${lake.id}`}><h3>{lake.name}</h3></Link>
                    <p>{lake.location}</p>
                </div>
                <div className="lake-body">
                    <div className="lake-image-container">
                        <img className="lake-image" src={lake.profileImage} alt={lake.name} />
                    </div>
                    <p>{lake.description}</p>
                </div>
                <div className="lake-footer">
                    <Link href={`/explore/${lake.id}`}>
                        <button className="lake-explore-btn">Explore &gt;&gt;</button>
                    </Link>
                </div>
            </div>
        );
    });

    return (
        <>
            {eachLakeArr}
        </>
        
    );
}