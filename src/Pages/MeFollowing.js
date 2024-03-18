import React,{useEffect, useState} from 'react'
import {  useSelector, useDispatch } from 'react-redux'
import { removeFromMyFollowing } from '../Store/FollowingUsersSlice';
import { NavLink } from 'react-router-dom';
import './CardLayout.css'

function MeFollowing() {

    const dispatch = useDispatch();
    const[userList, setUserList]= useState([]);
    
    const myFollowingRes = useSelector((state)=> state.PinstaUsers)

    useEffect(()=>{
        setUserList(myFollowingRes.FollowingUsersArr)
    },[myFollowingRes])

    function unfollowHandler(item){
        dispatch(removeFromMyFollowing(item))
       
        
    }
    
  return (
    <>


    <h1>Hi Dear user, You are following the below people on Pinstagram!!</h1>

    <div>
                <ul>
                    
                    <NavLink to="/">
                        Home
                    </NavLink>
                </ul>
            </div>
    <div className="card-container">
                {userList?.map((item,ind) => {
                    return (
                        <div className="card" key={ind}>
                            <h2>{item.name}</h2>
                            <p>Email: {item.email}</p>
                            <button onClick={()=>unfollowHandler(item)}>Un Follow</button>
                        </div>
                    )

                })}



            </div>
    </>
    

    
  )
}

export default MeFollowing