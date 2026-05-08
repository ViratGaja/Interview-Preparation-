async function getSingleId(id) {

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    )

    return response.json()
}

export default async function BlogPage({ params }) {
    const {id}=await params

    const pageSingle = await getSingleId(id)

    return (
        <div>
            <h1>{pageSingle.title}</h1>
            <h6>{pageSingle.body}</h6>
        </div>
    )
}