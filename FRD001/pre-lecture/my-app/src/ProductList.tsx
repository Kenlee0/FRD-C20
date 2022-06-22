import productListStyles from './ProductList.module.css'
import { useState, useEffect } from 'react'; // 要直接更新text content 就要用useState //React Hook
import { Link } from 'react-router-dom'
import { Title } from './Title';
import { QuantityBtn } from './QuantityBtn';


export function ProductList() {

    // let [productList, setProductList] = useState([])
    let [input, setInput] = useState('')
    let productList =
        [
            { "id": 1, "name": "Apple", "price": 1, "image": "apple.jpeg" },
            { "id": 2, "name": "Orange", "price": 2, "image": "orange.jpeg" },
            { "id": 3, "name": "Banana", "price": 3, "image": "banana.jpeg" },
            { "id": 4, "name": "Mango", "price": 4, "image": "mango.jpeg" }
        ]

    //useEffect
    // useEffect(() => {
        //1. 如果淨係得第一個Params既話，情況如下
        //component每次Render都會觸發到useEffect呢個Callback Function. 即係第一次Load果個Page, 果個Component既state有所改變
        //i.e state有變，都會tracker useEffect

    //     fetch('https://github.com/Kenlee0/React/blob/main/github-basic-productList.json')
    //         .then(response => response.json())
    //         .then(data => console.log(data))

    //     console.log(productList)
    // }, []) 
    // 2. <-- 第2個Params 叫Dependency Array, 當Dependency Array係空既Array既時候：就會只係第一次網頁Render果時觸發
    
    // 3. 第3個情況，當Dependency Array有改變既時候，指定個array有改變，都會觸法useEffect
    // 當有有野既Array既時候，useEffect 會keep monitor 條Array咩情況，當有改變既時候就會Run {callback} function
    useEffect(() => {
        if(input.length > 3) 
            console.log('password length larger than 3 characters la')
        else
            console.log('password length smaller than 3 characters la, input more la ')
    }, [input])
    // let product = 'fruits'

    const [product, setProduct] = useState('fruits')
    // useState('起始值') -> return 一個Array比你 -> 用Array destructure -> const [] -> const ['variableName', function]
    // function naming conversions = setXXXXX 

    const [showProduct, setShowProduct] = useState(false)

    const handleClick = () => {
        setProduct('React Fruits')
        console.log(product)
        // you may find that console.log() is still showing the orginal name in the first time
        // 因為係React更新機制入邊，第一次Console.log()係會Run左先
    }

    return (
        <div>
            <input type="text" onChange={e=>setInput(e.target.value)}/>
            {product} <button onClick={handleClick}>Changed value</button>
            {!showProduct && <button onClick={() => { setShowProduct(true) }} >Show Product</button>}
            {showProduct && <button onClick={() => { setShowProduct(false) }}>Hide Product</button>}

            <Title mainTitle="Buy Product" subTitle="Discount Code Here" />

            <div>
                {
                    showProduct && productList.map((product) => {
                        return (
                            <div className={productListStyles.productBorder} key={product.id}>
                                {/*Why we need to use module.css?, 令佢成為成個網站唯一一個Class名, 因為多左module果Part, 
                                In Case, 又有多個className叫productBorder都唔會撞名 */}

                                {/*Loop 既野要加番條Unique Key比佢*/}
                                {product.name}<br />
                                {product.price}<br />
                                <Link to={'/product/' + product.id}>
                                    {/*點解要加process.env.PUBLIC_URL，因為React預你Depoly會係/後面果個位 Eg.kenlee.com/productlist/*/}
                                    <img src={process.env.PUBLIC_URL + '/fruit/' + product.image} /><br />
                                </Link>
                                <QuantityBtn productInfo={product.name}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
} 