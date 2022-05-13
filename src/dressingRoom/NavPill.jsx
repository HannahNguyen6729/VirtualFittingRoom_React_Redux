import React from 'react';
import {useSelector} from 'react-redux';

export default function NavPill() {
    const {data} = useSelector(state => state.DressingRoomReducer);

    const renderNavPills = ()=> {
      return data.navPills.map((item, index)=> {
        let flag= '';
        if(index === 0) {
           flag = 'active  btn-default';
        };
          return (
                <li key={index} className="nav-item" >
                     <a className= {`nav-link ${flag}`} data-toggle="pill" href={`#${item.tabName}`}>{item.showName}</a>
                </li>
          )
      })
    }
  return (
    <ul className="nav nav-pills">
      {renderNavPills()}
    </ul>
  )
}
