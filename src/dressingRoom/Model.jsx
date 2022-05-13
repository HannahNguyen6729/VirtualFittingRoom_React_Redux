import React from 'react';
import {useSelector} from 'react-redux';

export default function Model() {
    const {clothesList}= useSelector(state => state.DressingRoomReducer);

    const renderStyle = (typeName) => {
        let item = clothesList.find(curr => curr.type === typeName);
        if(item !== undefined){
            return (`url(${item.imgSrc_png})`);
        }else{
            return (`url('')`);
        }
    }
    
  return (
    <div className="contain">
        <div className="body" />
        <div className="model" />
        <div className="hairstyle" style={{width: 1000, height: 1000, backgroundImage:`${renderStyle('hairstyle')}`, position: 'absolute', top: '-75%', right: '-57%', transform: 'scale(0.15)', zIndex: 4}} />
        <div className="necklace" style={{width: 500, height: 1000, background:`${renderStyle('necklaces')}` , position: 'absolute', bottom: '-40%', right: '-3.5%', transform: 'scale(0.5)', zIndex: 4}} />
        <div className="bikinitop" style={{width: 500, height: 500, background:`${renderStyle('topclothes')}` , position: 'absolute', top: '-9%', left: '-5%', zIndex: 3, transform: 'scale(0.5)'}} />
        <div className="bikinibottom" style={{width: 500, height: 1000, background:`${renderStyle('botclothes')}` , position: 'absolute', top: '-30%', left: '-5%', zIndex: 2, transform: 'scale(0.5)'}} />
        <div className="handbag" style={{width: 500, height: 1000, background:`${renderStyle('handbags')}`, position: 'absolute', bottom: '-40%', right: '-3.5%', transform: 'scale(0.5)', zIndex: 4}} />
        <div className="feet" style={{width: 500, height: 1000, background: `${renderStyle('shoes')}`, position: 'absolute', bottom: '-37%', right: '-3.5%', transform: 'scale(0.5)', zIndex: 1}} />
        <div className="background" style={{backgroundImage: `${renderStyle('background')}`}} />
      </div>
  )
}