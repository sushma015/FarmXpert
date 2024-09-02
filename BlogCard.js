function BlogCard(p)
{
    return (<div className="card">
            <h2>{p.title}</h2>
            <div><img alt="blog-picture" id="blog-pic" src="https://plus.unsplash.com/premium_photo-1661962692059-55d5a4319814?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWdyaWN1bHR1cmV8ZW58MHx8MHx8fDA%3D" ></img></div>
            <h5>{p.content}</h5>
            <a href="self">Read Blog</a>
            <h6>{p.date}</h6>
    </div>);
}
export default BlogCard;