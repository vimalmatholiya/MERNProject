import React, { useContext } from 'react'
import GroupContext from '../../contexts/GroupContext';


export default function GroupItem(props) {
    
    const { currentGroup } = useContext(GroupContext); 

    const findImageText = () => {
        let arr = props.groupName.split(" ");
        let imageText;
        if(arr.length === 1){
            imageText = arr[0][0];
        }
        else{
            imageText = arr[0][0] + arr[1][0];
        }
        return imageText.toUpperCase();

    }
    return (
        <>
            <div id={props.groupId} className={`h d-flex align-items-center ${currentGroup && currentGroup._id === props.groupId?'active-group':''}`}>
                <h5 className="group-img">{findImageText()}</h5>
                <h6 className="my-auto">{props.groupName}</h6>
            </div>
        </>
    )
}
