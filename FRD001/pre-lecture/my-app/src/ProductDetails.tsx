import {useParams, Link} from "react-router-dom"
import { Title } from "./Title"
import { QuantityBtn } from "./QuantityBtn";

export function ProductDetail () {

    let params = useParams()
    return (
        <div>
            <Title mainTitle={params.id + "Product Information"}/>
            {/* #{params.id} Product Information  */}
            {/* params.XX, XX係睇番App.tsx，你比左咩params比佢，即係 path=":id" -> 改左id就要params.id */}
            <QuantityBtn/>
            <Link to="/">HomePage</Link>
        </div>
    )
}