import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//initialstate의 타입지정
interface FavoritesState {
  favorites: string[]; //'즐겨찾기' 리스트를 배열로 관리
}

//initialState: 초기상태 정의 => favorites라는 배열을 만들고, 처음에는 비어있게 설정
const initialState: FavoritesState = {
  favorites: [],
};

//createSlice를 사용하여 Redux 상태와 변경 함수(reducer)정의
const favoritesSlice = createSlice({
  name: "favorites", //slice의 이름 (Redux store에서 사용할 key)
  initialState, //초기상태 설정
  reducers: {
    //상태를 변경하는 함수들 (Reducer)
    addFavorite: (state, action: PayloadAction<string>) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter((id) => id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
