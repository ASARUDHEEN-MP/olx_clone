import React from 'react';
import { useEffect,useState } from 'react';
import './View.css';
import { useSelector } from 'react-redux';


function View() {

  const [userDetails,setUserDetails] = useState()
  const postDetails = useSelector(state=>state.postDetails.post)
  console.log(userDetails,'user DETAILS')
  const firebase = useSelector(state=>state.firebase.firebase)


  useEffect(()=>{
    const {userId}= postDetails
    firebase.firestore().collection("users").where('id','==',userId).get().then((response)=>{
      response.forEach((doc)=>{
        setUserDetails(doc.data())
      })
    })

  },[])

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price}</p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        {userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>
}
      </div>
    </div>
  );
}
export default View;
