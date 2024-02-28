import { CalendarViewDay, Create, Event, Image, Subscriptions } from '@mui/icons-material';
import React, {useEffect, useState} from 'react';
import './Feed.css';
import { db } from './firebase';
import InputOption from './InputOption';
import Posts from './Posts';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
            setPosts(
                snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        );
     }, []);

    const sendPost = e => {
        e.preventDefault();

        db.collection("posts").add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput("");
    };


    return (    
        <div className="feed">
            <div className="feedInput_container">

                <div className="feed_input">
                    <Create/>
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>

                </div> 
                
                <div className="feedInput_options">
                    <InputOption Icon={Image} title="Photo" color="blue"/>
                    <InputOption Icon={Subscriptions} title="Subs" color="#E7A33E"/>
                    <InputOption Icon={Event} title="Events" color="#C0CBCD"/>
                    <InputOption Icon={CalendarViewDay} title="Write  article" color="#7FC15E"/>
                </div>
                <img src="https://64.media.tumblr.com/e28ec92dea750c11082236b1ecfa8c5d/tumblr_mhnss1yk7o1rmxj8vo1_500.gif" alt='' className="rick_roll"/>

            </div>
            <FlipMove>

            {posts.map(({id, data: {name, description, message, photoUrl}}) => (
            <Posts
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
            />
            ))}
            </FlipMove>
        </div>
    )
}

export default Feed;
