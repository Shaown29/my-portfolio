import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../../data';

const Details = () => {
    const { Id } = useParams();
    
    return (
        <div >
            
            {
            (ProjectList?.find(item=> item.id===Number(Id))) 
            }
            
            
        </div>
    );
};

export default Details;