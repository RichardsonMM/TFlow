import React from "react";
import { Draggable } from "react-beautiful-dnd";
import {useState} from 'react';
import BasicModal from "./Modal";
import Button from '@mui/material/Button';


function CardItem({ key, data, index }){

    const [editMode, setEditMode] = useState(false);

    const handleClick = () => {
      setEditMode(true);
    };



  return (
 
    <Draggable index={index} draggableId={data.id.toString()}>
      {(provided) => (

        <div>
        {!editMode ? (
        <div onClick={handleClick}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className=" flex inline-block  bg-white rounded-md p-3 m-3 mt-2 "
        >
          <h5 className="text-md my-3 text-lg leading-6">{data.title}</h5>
          {/* <Button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 0 10" strokeWidth={1} stroke="gray" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg></Button> */}

          

        </div>
        ) : (
          <BasicModal colId={data.idboard} bIndex={index} id={key} titulo={data.title} descricao={data.description} prioridade={data.priority}>
           
          </BasicModal>
          
      )}
      </div>
      )}
    </Draggable>
    
  );
}

export default CardItem;
