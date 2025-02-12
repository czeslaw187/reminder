import Render from "./productItem";

export default async function Tapas({params}) {
    const slug = (await params).slug
    console.log(slug, 'slug')
    return(
        <Render cat={slug} />
    )
}