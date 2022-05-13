import React, { Fragment } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getDressed } from '../redux/actions/Actions';
export default function TabPane(props) {
    const { data } = useSelector((state) => state.DressingRoomReducer);
    const dispatch = useDispatch();

    const renderItem = () => {
        return data.tabPanes
          .filter((item) => item.type === props.type)
          .map((item, index) => (
            <div className="col-md-3" key={index}>
              <div className="card text-center">
                <img src={item.imgSrc_jpg} alt={item.name} />
                <h4><b>{item.name}</b></h4>
                <button className='btn btn-info' 
                        onClick={()=>{dispatch(getDressed(item))}}>
                    Chose items
                </button>
              </div>
            </div>
          ));
    }
  return (
    <Fragment>
        {renderItem()}
    </Fragment>
  )
}


