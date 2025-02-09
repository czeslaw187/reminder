// const Client = require('pg')

import {Client} from 'pg'

export async function GET(req) {
    const client = new Client(process.env.DB_URL)
    await client.connect()
    try {
        const response = await client.query(
            "SELECT * FROM products"
        )
        console.log(response.rows,'server')
        return new Response(JSON.stringify(response.fields))
    } catch (error) {
        return new Response(JSON.stringify({
            message:error.message
        }))
    } finally {
        client.end()
    }
}