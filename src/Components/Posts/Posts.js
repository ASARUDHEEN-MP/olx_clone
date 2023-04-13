import React, { useContext } from 'react';
import { useEffect } from 'react';
import Heart from '../../assets/Heart';
import './Post.css';
import { useDispatch, useSelector } from 'react-redux';
import { productUpdate } from '../../Actions/poductAction';
import { PostUpdate } from '../../Actions/PostAction';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import FirebaseContext from '../../store/FirebaseContext';
import PostDetailsContext from '../../store/PostDetailsContext';



function Posts() {
  const {post,setPost} = useContext(PostDetailsContext)
  const firebase = useContext(FirebaseContext)
  const products = useSelector(state=>state.product.product)
  const dispatch = useDispatch()
  const postdetails = useSelector(state=>state.postDetails)
  const history = useHistory()
useEffect(()=>{
  firebase.firestore().collection('products').get().then((snapshot)=>{
    const allPost = snapshot.docs.map((product)=>{

      return{
        ...product.data(),
        id:product.id,
        
      }
    })
    dispatch(productUpdate(allPost))

  })
},[])
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">


        { 
          products.map((product)=>{
            return<div
            className="card"
            onClick={()=>{

              console.log(product,'this is product post page')

              dispatch(PostUpdate(product))
              history.push('/view')


            }}
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name">{product.name}</p>
            </div>
            <div className="date">
              <span>{product.createdAt}</span>
            </div>
          </div>
          })
        }
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">


         
        <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Posts;
