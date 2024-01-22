export const weatherSearch = async ({ request }) => {
    const key = "39dfc721bd6e48f0a1f73224241601"
    const data = await request.formData();
    const q = data.get('q');
    const res = await fetch('http://api.weatherapi.com/v1/current.json?key='+key+'&q='+q+'&aqi=no')
    if (!res.ok) {
        console.log("error")
    }
    console.log(res.json())
    return null
}
export const cities = async () => {
    const res = await fetch("http://localhost:8001/countrycities")
    const data = res.json()
    return data
}