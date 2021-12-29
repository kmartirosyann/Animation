import React, { useEffect, useState } from 'react';

import folderImg from '../../images/folder.png';


import { useSelector,useDispatch } from 'react-redux';
import * as actionTypes from '../../store/action/actionTypes';

import { List,ListItemIcon,ListItemText ,ListItem,Divider,Toolbar} from '@mui/material';

import {_id} from '../utils/util'
import DetelsItem from './DetelsItem';

const BoxLeft = () => {
    const [folder,setFoldet]=useState([])
    const state = useSelector(state => state)

    const dispatch = useDispatch()
    const {openBoxLeft,Uid,folders} = state

   
    
const openShoosModale = (id) =>{
    dispatch({
      type : actionTypes.OPEN_CHOOS_MODAL,
      Uid : id
    })
}
const openModale = (id,act) =>{
  dispatch({
    type : act ? actionTypes.OPEN_CHOOS_MODAL : actionTypes.OPEN_FILE_MODALE ,
    Uid : id
  })
}



const functionArrrr = (folder) => {
  const arr = []

  const functionRender = (folderXX) => {
    if(folderXX.child?.length ){
      folderXX.child.forEach((child)=>{
        arr.push({...child, parentFolderName: false});
        functionRender(child)
      })
    }
  }

  functionRender(folder)

  return arr
}

const folderDetails = (item)=>{  
  const newItems = functionArrrr(item)

  const returndData = newItems.map((item)=>{
    return <DetelsItem folder={item} openModale={openModale} key={_id()} />
  })

  return returndData
}
    

   useEffect(()=>{
     const arr = folders.find(i=>Uid.includes(i.Uid)) 
     setFoldet(arr || [])
   },[folders,Uid])

    return (
        <div>
          {openBoxLeft && folder.length !==0 && Uid &&
          <ListItem button onClick={()=>openShoosModale(folder.Uid)} >
            <ListItemIcon>
                  <img src = {folderImg} alt='folder' className='folderImg'  />
                  <ListItemText primary={folder.folderName} />
           </ListItemIcon>            
          </ListItem>                  
            }
          <Toolbar />
          <Divider />   
          { openBoxLeft && folders && Uid &&  <List>
            {folders &&  folderDetails(folder)}
          </List>}
        </div>
    );
};

export default BoxLeft;