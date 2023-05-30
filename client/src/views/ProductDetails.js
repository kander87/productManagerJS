import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom'

const ProductDetails = (props) => {

    const { id } = useParams()
    const [productDetails, setProductDetails] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/productmanager/${id}`)
            .then(response => {
                setProductDetails(response.data)
            })
    }, [id]) //this [] basically tells the useEffect function to run every time the id changes


    const deleteProduct = (id) => {
        axios.delete('http://localhost:8000/api/productManager/' + id)
            .then(res => {console.log(res)})
            .catch(err => console.error(err));
        navigate("/")
    }

    return (
        <div>
            <h1>Product Details</h1>
            <p> Title: {productDetails.title}</p>
            <p>Price: ${productDetails.price}</p>
            <p>Details: {productDetails.description}</p>
            <Link to={"/productmanager/" + productDetails._id + "/edit"}>Edit</Link>
            |
            <button onClick={(e) => { deleteProduct(productDetails._id) }}>
                Delete
            </button>
        </div>
    )
}

export default ProductDetails


