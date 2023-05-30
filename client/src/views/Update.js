import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'
import ProductManagerForm from '../components/ProductManagerForm';
import DeleteButton from '../components/DeleteButton';

const Update = (props) => {
    const navigate = useNavigate() //not here before
    const { id } = useParams()
    const [product, setProduct]= useState();
    const [loaded, setLoaded]=useState(false)
    
    
    //***************************************************************************************old way******************************************* */
    // const [title, setTitle] = useState('');
    // const [price, setPrice] = useState(0);
    // const [description, setDescription] = useState('');
    // const navigate = useNavigate()
    // **************************************************************************see above changes in constnats as well for id
    //     useEffect(() => {
    //         axios.get('http://localhost:8000/api/productmanager/' + id)
    //             .then(res => {
    //                 setTitle(res.data.title);
    //                 setPrice(res.data.price);
    //                 setDescription(res.data.description);
    //             })
    //     }, [id]);

    //     const updateProduct = e => {
    //         e.preventDefault()
    //         axios.put('http://localhost:8000/api/' + id + '/edit/', {
    //             title,
    //             price,
    //             description
    //         })
    //             .then(res => console.log(res))
    //             .catch(err => console.error(err));        
    //         navigate("/")    
    //     }

    //     return (
    //         <div>
    //             <h1>Update This Product!</h1>
    //             <form onSubmit={updateProduct}>
    //                 <p>
    //                     <label>Title: </label><br />
    //                     <input type="text" 
    //                     name="title" 
    //                     value={title} 
    //                     onChange={(e) => { setTitle(e.target.value) }} />
    //                 </p>
    //                 <p>
    //                     <label>Price: </label><br />
    //                     <input type="number" 
    //                     name="price"
    //                     step="any"
    //                     value={price} 
    //                     onChange={(e) => { setPrice(e.target.value) }} />
    //                 </p>
    //                 <p>
    //                     <label>Description: </label><br />
    //                     <input type="textarea" 
    //                     name="description"
    //                     value={description} 
    //                     onChange={(e) => { setDescription(e.target.value) }} />
    //                 </p>
    //                 <input type="submit" />
    //             </form>
    //         </div>
    //     )
    // }
    //***************************************************************************************old way******************************************* */

    useEffect(() => {
        axios.get('http://localhost:8000/api/productmanager/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, [id])

    const updateProduct = product => {
        axios.put('http://localhost:8000/api/' + id+ '/edit', product)
            .then(res => console.log(res));
            navigate('/')
    }
    return (
        <div>
            <h1>Update a Product</h1>

            {loaded && (
            <>
            <ProductManagerForm
                onSubmitProp={updateProduct}
                initialTitle={product.title}
                initialPrice={product.price}
                initialDescription={product.description}
            />
            <DeleteButton personId={product._id} successCallback={() => navigate("/")} />
                </>
            )}
        </div>
)
}


export default Update;

