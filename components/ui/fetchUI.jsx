async function getData() {
    const res = await fetch('http://192.168.101.101:3000/sensorData')


    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Page() {
    const data = await getData()

    return <main></main>
}