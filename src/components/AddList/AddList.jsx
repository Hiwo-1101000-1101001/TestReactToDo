import React, { useState } from 'react';
import List from '../List/List';
import Badge from '../Badge/Badge'

import './AddListButton.scss'
import closeSvg from '../../assets/img/close.svg';
  

const AddList = ({ colors }) => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [selectedColor, selectColor] = useState(colors[0].id);


    return (
        <div className="add-list">
            <List
                onClick={() => {
                    setVisiblePopup(true);
                }}
                items={[
                {
                    className: 'list__add-button',
                    icon: <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>,
                    name: 'Добавить папку',
                },
            ]}/>
            { visiblePopup && <div className="add-list-popup">
                <img onClick={() => setVisiblePopup(false)} src={ closeSvg } alt="close" className="close-popup"/>
                <input type="text" placeholder="Название задачи" className="field"></input>
                <div className="add-list-popup-colors">
                    <ul>  
                        {
                            colors.map(color => <Badge onClick={()=> selectColor(color.id)} className={selectedColor === color.id && 'active'} key={color.id} color={color.name} />)
                        }
                    </ul>
                </div>
                <button className="btn">Добавить</button>
            </div> }
        </div>
    );
};

export default AddList;
