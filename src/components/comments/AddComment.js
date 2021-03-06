import React,{useContext, useState} from "react";
import firebase from "firebase";
import { AppContext } from "../../AppContext";
import { firebaseConfig } from "../../config/firebase";
import Popup from "./Popup";
import addFile from "./addFile";

var addfile = new addFile();

export function  AddComment({ lakeId, onAdded }) {
    var onformsubmit = addfile.onFormSubmit;
    var onchange = addfile.onChange;
    const [ comment, setComment ] = useState ('');
    const { username } = useContext(AppContext);
    const [buttonPopup, setButtonPopup] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();
        // store in firestore
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        } else {
            firebase.app(); // if already initialized, use that one
        }
        const db = firebase.firestore();

        db.collection("lakes").doc(lakeId).get().then((doc) => {
            if (doc.exists) {
                let cmts = doc.data().comments || [];
                let newCommentsArray = [...cmts];
                newCommentsArray.push({
                    username,
                    date: Date.now(),
                    text: comment,
                    commentId: `${Date.now()}_comment`
                });
                db.collection("lakes").doc(lakeId).update({ comments: newCommentsArray })
                    .then(() => onAdded())
                    .catch(err => console.log(err));
            } else {
                console.log("No such document!");
            }
        }).catch(err => console.log(err));

        setComment("");
    };

    return(
        <form className="add-comment-form" onSubmit={handleSubmit}>
            <div className ="add-comment-body">
                <textarea
                    name="comment"
                    placeholder="Add a Comment"
                    onChange={event => setComment(event.target.value)}
                    value ={comment}
                ></textarea>
            </div>
            <div className="add-comment-footer">
                <button className="add-comment-btn" type="submit" onClick={() => setButtonPopup(true)}>Add Comment</button>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <form onSubmit={onformsubmit}>
                    <h1>File Upload</h1>
                        <input type="file" onChange={onchange} />
                    <button type="submit" >Upload</button>
                    </form>

                </Popup>
            </div>
        </form>
    )

    
}