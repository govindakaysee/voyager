import React, { useCallback, useEffect, useState } from 'react';
import firebase from 'firebase';
import { AddComment } from './AddComment';

import "./comments.css";
import { EachComment } from './EachComment';
import { firebaseConfig } from '../../config/firebase';

export function Comments({ lakeId }) {
    const [ prevComments, setPrevComments ] = useState([]);

    const fetchFromFirebase = useCallback(() => {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }else {
            firebase.app(); // if already initialized, use that one
        }
        const db = firebase.firestore();
        db.collection("lakes").doc(lakeId).get().then((doc) => {
            if (doc.exists) {
                let cmts = doc.data().comments;
                if (cmts) {
                    setPrevComments(cmts);
                }
            } else {
                console.log("No such document!");
            }
        }).catch(err => console.log(err));
    }, [lakeId]);

    useEffect(() => {
       fetchFromFirebase(); 
    }, [fetchFromFirebase, lakeId]);

    return (
        <div className="comments-container">
            <h2>Comments</h2>
            <AddComment lakeId={lakeId} onAdded={fetchFromFirebase} />
            {
                prevComments.length ? prevComments.map(comm => {
                    return <EachComment comment={comm} key={comm.commentId} />;
                }) : <span>There are no comments.</span>
            }
        </div>
    );
}