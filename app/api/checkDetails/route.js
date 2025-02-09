
export async function POST(req) {
    const cont = await req.json()
    const {name, password} = cont.form
    try {
        if (name === process.env.MY_LOGGIN && password === process.env.MY_PASSWORD) {
            return new Response(JSON.stringify({
                loggin: true
            }))
        } else {
            return new Response(JSON.stringify({
                loggin: false
            }))
        }

    } catch (error) {
        return new Response(JSON.stringify(error.message))
    }
}