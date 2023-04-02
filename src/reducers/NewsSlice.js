import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    news : [{
        id: nanoid(),
        category: "",
        newsTitle: "",
        imgUrl: "",
        newsContent: [],
        location: ""
    } ]

}

const NewsSlice = createSlice({
    name: "new",
    initialState,
    reducers:{
     addNews:{
      reducer(state,action){
        state.news.push(action.payload)
      
      },
      prepare(newsTitle, newsContent, imgUrl,category ,location ){
       return{
        payload: {
            id: nanoid(),
            category,
            newsTitle,
            newsContent,
            imgUrl,
            location
        }
       }
      }


     }}
})

export const addNewsToLocalStorage = (news) => {
    const existingNews = JSON.parse(localStorage.getItem("news")) || [];
    const updatedNews = [...existingNews, news];
    localStorage.setItem("news", JSON.stringify(updatedNews));
  };
  

  export const getNewsFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("news")) || [];
  };



export const {addNews} = NewsSlice.actions
export default NewsSlice.reducer