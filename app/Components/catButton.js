import { Card, CardBody, NavItem, NavLink } from 'reactstrap'
import { Playfair_Display, Delicious_Handrawn } from 'next/font/google'

const pDisp = Playfair_Display({
    subsets: ['latin'],
    weight: '400'
})
const delHand = Delicious_Handrawn({
    subsets: ['latin'],
    weight: '400'
})

export default function CatButton({id, el}) {
    return(
        <NavItem key={id} className='mx-auto md:m-5'>
            <NavLink key={id} href={`/Main/${el.category}`}>
                <Card className="w-[25rem] md:w-[20rem] m-2 text-lg transition-all duration-300 hover:shadow-md hover:shadow-black">
                    <CardBody key={id} className="flex justify-center h-[15rem]">
                        <span className={`my-auto text-5xl ${delHand.className}`}>{el.category}</span>
                    </CardBody>
                </Card>
            </NavLink>
        </NavItem>
    )
}