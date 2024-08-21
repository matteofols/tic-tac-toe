
"use client"
import { Post } from "@/components/Post";
import { Input } from "postcss";
import "./style.css"

import { useState, useEffect } from "react";




export default function Home() {
  // const [count, setCount] = useState(0)

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [content, setContent] = useState("")
    const [posts, setPosts] = useState([])

    function addPost(){
      const newPost = {
        title: title,
        author: author,
        content: content,
        following: false,
      }

      setPosts([...posts, newPost])
      setTitle("")
      setAuthor("")
      setContent("")
    }

  
    return (
      <div>
        <div>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title"/>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author"/>
          <input type="text" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content"/>
          <button onClick={addPost}>Add Post</button>
        </div>
        <div className="posts">
          {posts.map ((post, idx) => (
            <Post {...post} key ={idx + Math.random()}/>
          ))}
        </div>
      </div>
    )

  }
    // function onCount (){
    //   setCount(count + 1)
    // }
    // function smCount (){
    //   setCount(count - 1)
    // }

    
    // return (
    //    <>
    //     <p>{count}</p>
    //     <button onClick={onCount}>Count Up!</button>
    //     <button onClick={smCount}>Count Down!</button>
    //    </> 
    // )





  // const posts = [
  //   {
  //     title: "The New Age Software Engineer",
  //     author: "Matthew Folefac",
  //     content: "The Age Software engineer is someone who can harness the utiltiy of AI without make it eem like it is a competition",
  //     following: false,
  //   },
  //   {
  //     title: "Title 2",
  //     author: "Matthew Folefac",
  //     content: "The Age Software engineer is someone who can harness the utiltiy of AI without make it eem like it is a competition",
  //     following: true,
  //   },
  //   {
  //     title: "The New Age Software Engineer 5ivnofe['v",
  //     author: "Matthew Folefac",
  //     content: "The Age Software engineer is someone who can harness the utiltiy of AI without make it eem like it is a competition",
  //     following: false,
  //   },
    
  // ]
  //  return (
  //   <div>
  //     {posts.map((content, idx) => {
  //       return <Post {...content} key={idx + Math.random()}/>
  //     }
  //     )}
      {/* <Post 
      title="The New Age Software Engineer" 
      author="Matthew Folefac" 
      content="The Age Software engineer is someone who can harness the utiltiy of AI without make it eem like it is a competition" 
      following={true}/>

<Post 
      title="The New Age Software Engineer" 
      author="Matthew Folefac" 
      content="The Age Software engineer is someone who can harness the utiltiy of AI without make it eem like it is a competition" 
      following={false}/> */}
//     </div>
//     )

