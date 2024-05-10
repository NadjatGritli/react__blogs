export const blogDetailsLoader = async ({ params }) => {
    const { id } = params
    const res = await fetch("http://localhost:8001/blogs/" + id)
    if (!res.ok) {
        console.log("error")
    }
    const data = res.json();
    return data
}