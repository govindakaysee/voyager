import { useEffect, useState } from 'react';
import firebase from 'firebase';
import { Link } from 'wouter';
import { firebaseConfig } from '../config/firebase';

export function LakeDis(){
    const [ lakes, setLakes ] = useState([]);

    useEffect(() => {
        // TODO: make this reusable from another file maybe
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }else {
            firebase.app(); // if already initialized, use that one
        }
        const db = firebase.firestore();
        db.collection("lakes").get().then((snapshot) => {
            const fetchedLakes = snapshot.docs.map(doc => doc.data());
            setLakes(fetchedLakes);
        }).catch(err => console.log(err))
    }, []);

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
            {eachLakeArr.length ? eachLakeArr : "No Lakes found." }
        </>
        
    );
}