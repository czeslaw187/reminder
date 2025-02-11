import { Card, CardBody, NavItem, NavLink } from 'reactstrap'

export default function CatButton({id, el}) {
    return(
        <NavItem key={id}>
            <NavLink key={id} href={`/Main/${el.category}`}>
                <Card className="w-[45%] h-[30%] mx-4 my-2 text-lg hover:shadow-md hover:shadow-black">
                    <CardBody key={id} className="text-center">
                        {el.category}
                    </CardBody>
                </Card>
            </NavLink>
        </NavItem>
    )
}