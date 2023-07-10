import React, { useContext } from 'react';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { Link } from 'react-router-dom';
import FirebaseContext from '../../store/FirebaseContext';
import AuthUserContext from '../../store/AuthUserContext';

function Header() {
  const firebase = useContext(FirebaseContext)
  const history = useHistory()
  const{user}=useContext(AuthUserContext)
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <Link to="/login"><span>{user?`Welcome ${user.displayName}`:'Login'}</span></Link>
          <hr />
        </div>
        {user && <span onClick={
          ()=>{
            firebase.auth().signOut()
            history.push('/login')
          }
          }>Logout</span>}
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <Link to='/create'>SELL</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;