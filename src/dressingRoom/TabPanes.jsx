import React from "react";
import { useSelector } from "react-redux";
import TabPane from "./TabPane";

export default function TabPanes() {
  const { data } = useSelector((state) => state.DressingRoomReducer);
  return (
    <div className="tab-content">
      {data.navPills.map((item, index) => {
          let flag= 'fade';
          if(index === 0){
              flag='active';
          };
            return (
                <div className={`tab-pane container ${flag}`}  id={item.tabName} key={index}>
                  <div className="container">
                    <div className="row">
                        <TabPane type={item.type}/>
                    </div>
                  </div>
                </div>
              )
        })
      }
    </div>
  );

  //   return (
  //     <div className="tab-content">
  //           <div className="tab-pane container active" id="tabTopClothes">
  //             <div className="container">
  //               <div className="row">
  //                 {renderTopClothes()}
  //               </div>
  //             </div>
  //           </div>
  //           <div className="tab-pane container fade" id="tabBotClothes">
  //             tabBotClothes
  //           </div>
  //           <div className="tab-pane container fade" id="tabShoes">tabShoes</div>
  //           <div className="tab-pane container fade" id="tabHandBags">
  //             tabHandBags
  //           </div>
  //           <div className="tab-pane container fade" id="tabNecklaces">
  //             tabNecklaces
  //           </div>
  //           <div className="tab-pane container fade" id="tabHairStyle">
  //             tabHairStyle
  //           </div>
  //           <div className="tab-pane container fade" id="tabBackground">
  //             tabBackground
  //           </div>
  //     </div>
  //   )
}
