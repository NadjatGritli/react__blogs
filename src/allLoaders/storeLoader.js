export const indexLoader = async () => {
    const res = await fetch("http://localhost:8002/sections/")
    if (!res.ok) {
        console.log("error")
    }
    const data = res.json();
    return data
}
export const producLoader = async ({params}) =>{
    const {id}=params
    const res = await fetch("http://localhost:8002/product/"+id)
    if (!res.ok) {
        console.log("error when loading product details")
    }
    const data = res.json();
    return data
}