import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import AddIcon from '@mui/icons-material/Add';

import folderImg from '../../images/folder.png';
import documents from '../../images/documents.png';
import {ListItemText ,ListItem} from '@mui/material';

import {useDispatch} from 'react-redux';
import * as actionTypes from '../../store/action/actionTypes';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';



const DetelsItem = ({folder,openModale}) => {

    const [openfile,setOpenFile] = useState(true)

    const dispatch = useDispatch()
    
const heandefileOrFolderDelete=(id)=>{
    dispatch({
        type:actionTypes.DELETE_FILE_OR_FOLDER,
        id
    })
}


const openFolderChildren =()=>{
  return  setOpenFile(!openfile)
}

const editFileOrfolder =(id)=>{
return
}
    return ( 
    <div> 
      {(folder.folderName || openfile) ?  <ListItem button  >
           {folder.folderName && <ExpandLessIcon onClick={openFolderChildren}/>}
            <img src = { folder.icon === 'documents' ? documents : folderImg }
            alt = { folder.icon === 'documents' ? documents : folderImg }
            className = 'folderImg' />
            <ListItemText primary = { folder.fileName || folder.folderName || folder.folders.folderName }/> 
            <AddIcon onClick = {() => openModale(folder.Uid || folder.folders.Uid, folder.fileName ? false : true) }/>
            <ModeEditIcon onClick={()=>editFileOrfolder(folder.Uid)}/>
            < DeleteIcon onClick={()=>heandefileOrFolderDelete(folder.Uid)}/>
        </ListItem>: null} 
       
    </div>
    );
};

export default DetelsItem;