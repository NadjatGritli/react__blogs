import { redirect } from "react-router-dom";

export const blogsLoader = async () => {
    const res = await fetch("http://localhost:8001/blogs")
    return res.json();
}

export const blogDetailsLoader = async ({ params }) => {
    const { id } = params
    const res = await fetch("http://localhost:8001/blogs/" + id)
    if (!res.ok) {
        console.log("error")
    }
    const data = res.json();
    return data
}
export const deleteBlog = async ({ request }) => {
    const data = await request.formData()
    const id = data.get('id')
    fetch("http://localhost:8001/blogs/" + id, {
        method: "DELETE"
    })
    return redirect('/blogs/')
}
export const EditLoader = async ({ request }) => {
    const data = await request.formData();
    const tagsArray = data.get('tags').split(',');
    const blog = {
        title: data.get('title'),
        author: data.get('author'),
        content: data.get('content'),
        date: data.get('date'),
        tags: tagsArray
    }
    const res = await fetch("http://localhost:8001/blogs/" + data.get('id'), {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body:JSON.stringify(blog)
    })
    if(!res.ok){
        console.log("error")
    }
    return redirect("/blogs/"+data.get('id'))
}
export const tagsLoader = async () => {
    const res = await fetch("http://localhost:8001/tags");
    const data = res.json()
    return data;
}
export const authorLoader = async () => {
    const res = await fetch("http://localhost:8001/authors")
    const data = res.json();
    return data;
}

export const authorLoaderDetails = async (param) => {
    const res = await fetch("http://localhost:8001/authors/"+param.id)
    const data = res.json();
    return data;
    
}