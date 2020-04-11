export async function fetchData(url, method, body) {
    const req = fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application-json'
        },
        body: body,
    })

    const res = await req

    if (res.ok) {
        return res.json()
    } else {
        throw new Error(`Error fetching data: ${res.status}`)
    }
}