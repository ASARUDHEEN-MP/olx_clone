import React, { Fragment } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { updateCreateForm } from '../../Actions/CreateFormAction';
import { useSelector,useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';


const Create = () => {
  const dispatch = useDispatch()
  const createForm = useSelector(state=>state.createForm)
  const firebase = useSelector(state=>state.firebase.firebase)
  const user = useSelector(state=>state.user.user)
  const date = new Date()
  const history = useHistory()

  const handleSubmit=(e)=>{
    e.prevenDefault()
    firebase.storage().ref(`/image/${createForm.image.name}`).put(createForm.image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        firebase.firestore().collection('products').add({
          name:createForm.name,
          category:createForm.category,
          price:createForm.price,
          url,
          userId:user.uid,
          createdAt:date.toDateString()
        })
        history.push('/')
      })
    })


  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form onSubmit={handleSubmit}>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={createForm.name}
              onChange={(e)=>dispatch(updateCreateForm(e.target.name,e.target.value))}
              name="name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={createForm.category}
              onChange={(e)=>dispatch(updateCreateForm(e.target.name,e.target.value))}
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input"
              type="number"
               id="fname"
               value={createForm.price}
               onChange={(e)=>dispatch(updateCreateForm(e.target.name,e.target.value))} 
                name="price" />
            <br />
          </form>
          <br />
          
          <img alt="Posts" width="200px" height="200px" src={createForm.image ? URL.createObjectURL(createForm.image) : ""}></img>
        

        
            <br />
            <input type="file" accept="image/*" name="image" onChange={(e)=>dispatch(updateCreateForm(e.target.name,e.target.files[0]))} />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
        
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
