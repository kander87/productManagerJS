
import React, { useState } from 'react'

export default function ProductManagerForm(props) {
    //keep track of what is being typed via useState hook
    // *************************************************** old way ******************************************
    // const [title, setTitle] = useState(""); 
    // const [price, setPrice] = useState(0);
    // const [description, setDescription] = useState("");

    // //handler when the form is submitted
    // const onSubmitHandler = e => {
    //     //prevent default behavior of the submit
    //     e.preventDefault();
    //     //make a post request to create a new prodct and taking in the 
    //     //data types you used in your model
    //     axios.post('http://localhost:8000/api/productManager', {
    //         title,
    //         price,
    //         description
    //     })
    //         .then(res=>console.log(res))
    //         .catch(err=>console.log(err))
    // }
        //onsubmit for the form that runs the method above
    //onChange for each individual input that uses the setX and the value of X
//     return (
//         <form onSubmit={onSubmitHandler}>
//             <p>
//                 <label>Title: </label><br/>
//                 <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
//             </p>
//             <p>
//                 <label>Price:</label><br/>
//                 <input type="number"  step="any" onChange={(e)=>setPrice(e.target.value)} value={price}/>
//             </p>
//             <p>
//                 <label>Description:</label><br/>
//                 <textarea onChange={(e)=>setDescription(e.target.value)} value={description}> </textarea>
//             </p>
//             <input type="submit"/>
//         </form>
//     )
// }
    //************************************************************************************************************ */



    //**************************************************new reuses way************************************************ */
const { initialTitle, initialPrice, initialDescription, onSubmitProp } = props;
const [title, setTitle] = useState(initialTitle);
const [price, setPrice] = useState(initialPrice);
const [description, setDescription] = useState(initialDescription);
const [errors, setErrors] = useState(null);


const onSubmitHandler = e => {
    e.preventDefault();
    onSubmitProp({title, price, description});
}
    
return (
    <form onSubmit={onSubmitHandler}>
        <p>
            <label>Title</label><br />
            <input 
                type="text" 
                name="title" 
                value={title} 
                onChange={(e) => { setTitle(e.target.value) }} />
        </p>
        {
            errors?.title &&(
                <span>{errors.title?.message}</span>
            )
        }
        <p>
            <label>Price</label><br />
            <input 
                type="number" 
                step="any"
                name="price" 
                value={price} 
                onChange={(e) => { setPrice(e.target.value) }} />
        </p>
        {
            errors?.price &&(
                <span>{errors.price?.message}</span>
            )
        }
        <p>
            <label>Description</label><br />
            <input 
                type="text" 
                name="description" 
                value={description} 
                onChange={(e) => { setDescription(e.target.value) }} />
        </p>
        {
            errors?.description &&(
                <span>{errors.description?.message}</span>
            )
        }
        <input type="submit" />
    </form>
)
}
