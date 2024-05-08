import React, { useState, useEffect } from 'react'
import BlogList from './BlogList';


const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'The React JS Tutorial', body: 'Welcome to the best tutorial on React JS.', author: 'Prashant', id: 1 },
        { title: 'Welcome party', body: 'We are organising a  new year party at the hotel.', author: 'Yashai', id: 2 },
        { title: 'Learn css tricks', body: 'This is the article where yiu will learn the tricks related to css', author: 'Prashant', id: 3 }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(()=>{
       
    })

    return (
        <div className="home">

            {/* {blogs.map((blog) => (
                <div className='blog-preview' key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p> Written by{blog.author}</p>
                </div>
            ))} */}
            <BlogList blogs={blogs} title="All New Blogs !!" handleDelete={handleDelete} />
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='Prashant')} title="Prashant's Blog are here!!" /> */}
        </div>
    );
};

export default Home