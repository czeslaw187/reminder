
export async function POST(req) {
    const cont = await req.json()
    return new Response(JSON.stringify({
        cont
    }))
}