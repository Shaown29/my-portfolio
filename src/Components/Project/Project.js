import React from 'react';
import ProductList from '../ProductList/ProductList';
import './Project.css';
import {ProjectList} from '../../data';

const Project = () => {
    // console.log("ProjectList", ProjectList);

    return (
        <div id='project' className='pl'>
            <div className='pl-texts'>
                <h1 className='pl-title'>Project</h1>
                <p className='pl desc'>
                    Here, I gave the five best projects what I have been finished.
                </p>
            </div>
            <div className='pl-list'>
                
                {/* <ProductList key={item.id} img={item.img[0]} name={item.name} id={item.id}/> */}
                {ProjectList?.map(item => (
                    <div key={item.id}>
                        <ProductList data={item}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;