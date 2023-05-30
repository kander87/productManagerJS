import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom' //this is new
import DeleteButton from './DeleteButton'

const ProductDisplay = (props) => {


  //************************************************************old way************************************ */
  //   const { removeFromDom } = props;

  //   const deleteProduct = (id) => {
  //     axios.delete('http://localhost:8000/api/productManager/' + id)
  //       .then(res => {
  //         removeFromDom(id)
  //       })
  //       .catch(err => console.error(err));
  //   }

  //   return (
  //     <div>
  //       <h1>Product List</h1>
  //       {
  //         props.product.map((product, i) =>
  //           //this line below has been updated to add the link to view functionality
  //           <p key={i} ><Link to={`/${product._id}`}> {product.title}</Link>
  //             |
  //             <button onClick={(e) => { deleteProduct(product._id) }}>
  //               Delete
  //             </button></p>

  //         )
  //       }
  //     </div>
  //   )
  // }
  //************************************************************old way************************************ */

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/productmanager')
      .then(res => setProducts(res.data));
  }, [])

  const removeFromDom = productId => {
    setProducts(products.filter(product => product._id !== productId))
  }

  return (
    <div>
      {products.map((product, idx) => {
        return (
          <p key={idx}>
            <Link to={"/" + product._id}>
              {product.title}, {product.price}, {product.description}
            </Link>
            |
            <Link to={"/productmanager/" + product._id + "/edit"}>
              Edit
            </Link>
            |
            <DeleteButton productId={product._id} successCallback={() => removeFromDom(product._id)} />
          </p>
        )
      })}
    </div>
  );
}

export default ProductDisplay
