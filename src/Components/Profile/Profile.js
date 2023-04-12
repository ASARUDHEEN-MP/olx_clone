import Header from '../Header/Header'
import './Profile.css'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfile } from '../../Actions/ProfileAction'
import { useEffect, useState } from 'react'


const Profile =()=>{
    const user = useSelector(state=>state.user.user)
    const [uploadimg,setUploadimg] = useState("")
    console.log(user,user.uid,'...........................................')

    const firebase = useSelector(state=>state.firebase.firebase)
    const dispatch = useDispatch()
    const profile = useSelector(state=>state.profile)

    useEffect(()=>{
        user&&firebase.firestore().collection('users').where('id', '==', user.uid).get().then((snapshot)=>{
            snapshot.forEach((doc)=>{
                const imageURL = doc.data().img_url;
                dispatch(updateProfile(imageURL))
                console.log(imageURL,'...........snap..............')
            })
        })
    },[user,firebase])

    const handleSubmit = (e)=>{
        e.preventDefault()
        firebase.storage().ref(`/profile/${uploadimg.name}`).put(uploadimg).then(({ref})=>{
            ref.getDownloadURL().then((url)=>{
                firebase.firestore().collection('users').where('id', '==', user.uid).get().then((snapshot)=>{
                    snapshot.forEach((doc)=>{
                        doc.ref.update({img_url:url}).then(()=>{
                            alert("image successfully updated")
                        })
                    })
                })
            })
        })
    }
    return(
        <>
           <div className="profile-container">
      <div className="profile-header">
        <h2>Profile</h2>
      </div>
      <div className="profile-info">
        <div className="profile-picture">
            {
          uploadimg?<img src={uploadimg?URL.createObjectURL(uploadimg):""} alt="Profile Picture" />:
          <img src={profile.image} alt="Profile" />
            }


          <input onChange={
            
            (e)=>{
                setUploadimg(e.target.files[0])
            }
            
          } type='file' accept='image/*' className='img-upload'></input>
        </div>
        <div className="profile-details">
          <h3>{user.displayName}</h3>
          <p>{user.email}</p>
          <button onClick={
              handleSubmit
          }
    
      className="edit-btn">Update Profile</button>
        </div>
      </div>
      <div className="profile-listings">
        <h3>My Listings</h3>
        <ul>
          <li>Listing 1</li>
          <li>Listing 2</li>
          <li>Listing 3</li>
        </ul>
      </div>
    </div>
        
        </>
    )
}


export default Profile