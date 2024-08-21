import "./post.css"




export function Post({title, author, content, following}) {
    return (
        <div className="card">
            <h1> {title} </h1>
            <h3> By : {author} </h3>
            <p> {content} </p>
            <button className="followbtn"> {following ? "Unfollow" : "Follow"}</button>
        </div>
    )
}