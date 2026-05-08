/**
 * The function fetches blog posts from an API and displays the titles of the first 10 posts in a
 * component called Blog.
 */
import Link from 'next/link'



async function getBlogs() {

  const Res=await fetch("https://jsonplaceholder.typicode.com/posts")
            const data=await Res.json()
            return data

  
}


export default async function Blog(){
  const Blogs=await getBlogs()

  return(

    <div>
      <h1>Blogs</h1>

      {Blogs.slice(0,10).map((blog)=>(

        <div key={blog.id}>

        <Link href={`/blogs/${blog.id}`}>
          <h2>{blog.title}</h2>
          </Link>

        </div>
      ))}



    </div>
  )
}




