import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const PostList = () =>{
    const [post, setPosts] = useState([])

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/photos').then(response =>{
            response.json().then(data => {
                setPosts(data);
            })
        })
    },[] )

    return(
        <Container>
            <div >
                {post.map(post => <img key={post.id} src={post.url} alt="." width="80" height="80"></img> )}               
            </div>  
        </Container>
    )
};

export default PostList