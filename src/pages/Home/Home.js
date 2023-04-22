import React from 'react'
import NavBar from '../../components/Navigation/NavBar'
import LeftPane from '../../components/LeftPane/LeftPane'
import RightPane from '../../components/RightPane/RightPane'
import PostPane from '../../components/PostPane/PostPane'

export default function Home() {
  return (

    <div className="bottomContainer">
    <NavBar/>
    <LeftPane/>
    <RightPane/>
    <PostPane/>
    </div>
    
  )
}
