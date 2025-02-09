import { faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function HomeButton() {
    return(
        <div className="flex">
            <Link href={'/Main'} className="ml-auto mr-3 my-1">
                <span>Main page</span>
                <FontAwesomeIcon icon={faHome} size={'xl'}/>
            </Link>
        </div>
    )
}