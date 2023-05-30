
//do all of our imports
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ProductManagerForm from '../components/ProductManagerForm'
import ProductDisplay from '../components/ProductDisplay';

//your Main func which takes in props (from the app.js which is the parent)
export default function Main(props) {
    //make constants for the things you are storing in the db
    //and a constant for if they are showing or not (aka loaded)
    //which should be set to false as a default

    //*************************************************************************** old way**************************************** */
    //     const [product, setProduct] = useState("")
    //     const [loaded, setLoaded] = useState(false)

    //     //useEffect methods run at the start and will pull all of your data 
    //     //that is set to true (in this case, all the data will be set to true)
    //     useEffect(() => {
    //         axios.get('http://localhost:8000/api/productmanager')
    //             .then(response => {
    //                 setProduct(response.data)
    //                 setLoaded(true)
    //             })
    //     })

    //     const removeFromDom = productId => {
    //         setProduct(product.filter(product => product._id !== productId));
    //     }

    //     //return the form 
    //     //and return the display of the items from your db that
    //     //are set to true
    //     return (
    //         <div>
    //             <ProductManagerForm />
    //             <hr />
    //             {
    //                 loaded && <ProductDisplay product={product} removeFromDom={removeFromDom}/>
    //             }
    //         </div>
    //     )
    // }
    //****************************************************************************************************old way********************************* */
    const [errors, setErrors] = useState(null)
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/productmanager')
            .then(res => {
                setProducts(res.data)
                setLoaded(true);
            });
    }, [])
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }
    const createProduct = product => {
        axios.post('http://localhost:8000/api/productmanager', product)
            .then(res => {
                setProducts([...products, res.data]);
            })
            .catch(err=> {
                console.log(err.response?.data?.errors)
                setErrors(err.response?.data?.errors)
            })
    }
    return (
        <div>
            <ProductManagerForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription="" />
            <hr />
            {loaded && <ProductDisplay products={products} removeFromDom={removeFromDom} />}
        </div>
)}