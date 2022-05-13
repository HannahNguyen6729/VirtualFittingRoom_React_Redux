import { GET_DRESSED } from "../types/Type";
import data from "./Data.json";

const initialState = {
  data,
  clothesList: [
    {
      id: "hairstyle_2",
      type: "hairstyle",
      name: "Hairstyle 2",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/hairstyle/hairstyle2_show.jpg",
      imgSrc_png: "../assets/images/hairstyle/hairstyle2.png",
    },
    {
      id: "necklace_1",
      type: "necklaces",
      name: "Necklace 1",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/necklaces/necklace1_show.jpg",
      imgSrc_png: "../assets/images/necklaces/necklace1.png",
    },
    {
      id: "topcloth_6",
      type: "topclothes",
      name: "Top Cloth 6",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/clothes/topcloth6_show.jpg",
      imgSrc_png: "../assets/images/clothes/topcloth6.png",
    },
    {
      id: "botcloth_1",
      type: "botclothes",
      name: "Bot Cloth 1",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/clothes/botcloth1_show.jpg",
      imgSrc_png: "../assets/images/clothes/botcloth1.png",
    },
    {
      id: "handbag_2",
      type: "handbags",
      name: "Handbag 2",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/handbags/handbag2_show.jpg",
      imgSrc_png: "../assets/images/handbags/handbag2.png",
    },
    {
      id: "shoes_1",
      type: "shoes",
      name: "Shoes 1",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/shoes/shoes1_show.jpg",
      imgSrc_png: "../assets/images/shoes/shoes1.png",
    },
    {
      id: "background_2",
      type: "background",
      name: "Background 2",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/background/background2_show.jpg",
      imgSrc_png: "../assets/images/background/background2.jpg",
    },
  ],
};

export const DressingRoomReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRESSED: {
      let newList = [...state.clothesList];
      let index = newList.findIndex(
        (item) => item.type === action.payload.type
      );
      if (index !== -1) {
        newList[index] = action.payload;
      } else {
        newList = [...newList, action.payload];
      }
      return { ...state, clothesList: newList };
    }
    default:
      return { ...state };
  }
};
