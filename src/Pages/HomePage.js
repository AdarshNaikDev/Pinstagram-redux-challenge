import React, { useEffect, useState } from 'react'
import './CardLayout.css'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import MeFollowing from './MeFollowing';
import { useDispatch, useSelector } from 'react-redux';
import { addToMyFollowing } from '../Store/FollowingUsersSlice';

function HomePage() {

    const dispatch = useDispatch();
    const [userCardData, setUserCardData] = useState([]);
    const [ myFollowing, setMyFollowing] = useState (0);
    const myFollowingList = useSelector((state)=>state.PinstaUsers)
        
      console.log(myFollowingList.FollowingUsersArr.length)

      useEffect(()=>{
        setMyFollowing(myFollowingList.FollowingUsersArr.length)
      },[userCardData])


    function FollowUserHandler(userData) {

     
        const idIncludes = userCardData.some(item=>item.id === userData.id)
        let copiedArr = [...userCardData];
        const idd =userCardData.indexOf(userData)
        const obj1 = userCardData[idd]
        obj1.btnName = "Following"
        copiedArr[idd] = obj1;
            
        setUserCardData (copiedArr)

        const userObj = {
            userID: userData.id,
            name: userData.name,
            email: userData.email,
            btnName: "Following"
        }

        dispatch(addToMyFollowing(userObj))
        const followNumber = myFollowingList.FollowingUsersArr.length ;
        
        setMyFollowing(followNumber)
        //obj.btnName = "Following";
        
      
        
       
    }
    const fetchUsers = async () => {
        // const res = await fetch("https://jsonplaceholder.typicode.com/users")
        // const usersResult = await res.json();

        const userData = await axios.get("https://jsonplaceholder.typicode.com/users");
        
        setUserCardData(userData.data)
       // console.log(userData.data)

    }
    useEffect(() => {
        //console.log("fetch data")
        fetchUsers();

    }, [])
    return (

        <>
            <div>
                <ul>
                    <li>
                        Home
                    </li>
                    <NavLink to="./Following">
                        Following
                    </NavLink>
                </ul>
                <h3>
                    Me Following : {myFollowing}
                </h3>
            </div>
            <div className="card-container">
                {userCardData.map((item) => {
                    return (
                        <div className="card" key={item.id}>
                            <h2>{item.name}</h2>
                            <p>Email: {item.email}</p>
                            <button onClick={() => FollowUserHandler(item)}>{item.btnName != undefined? item.btnName: "Follow"}</button>
                        </div>
                    )

                })}



            </div>
        </>

    )
}

export default HomePage