import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  productDetailsReducer,
  productDeleteReducer,
  productCreateReducer,
  productUpdateReducer,
  productTopRatedReducer,
  productRelatedReducer,
  productFilterReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from "./reducers/userReducers";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderListMyReducer,
  orderListReducer,
  orderDeliverReducer,
  orderPricedReducer,
  orderShippedReducer,
} from "./reducers/orderReducers";
import {
  bannerCreateReducer,
  bannerDeleteReducer,
  bannerDetailsReducer,
  bannerListReducer,
  bannerUpdateReducer,
} from "./reducers/bannerReducers";
import {
  categoryCreateReducer,
  categoryDeleteReducer,
  categoryDetailsReducer,
  categoryListReducer,
  categoryUpdateReducer,
} from "./reducers/categoryReducers";
import {
  materialCreateReducer,
  materialDeleteReducer,
  materialDetailsReducer,
  materialListReducer,
  materialUpdateReducer,
} from "./reducers/materialReducers";
import {
  sectionCreateReducer,
  sectionDeleteReducer,
  sectionDetailsReducer,
  sectionListReducer,
  sectionUpdateReducer,
} from "./reducers/sectionReducers";
import {
  colorCreateReducer,
  colorDeleteReducer,
  colorDetailsReducer,
  colorListReducer,
  colorUpdateReducer,
} from "./reducers/colorReducers";
import {
  sizeCreateReducer,
  sizeDeleteReducer,
  sizeDetailsReducer,
  sizeListReducer,
  sizeUpdateReducer,
} from "./reducers/sizeReducers";
import {
  departmentListReducer,
} from "./reducers/departmentReducers";
import {
  subHeaderCreateReducer,
  subHeaderDeleteReducer,
  subHeaderDetailsReducer,
  subHeaderListReducer,
  subHeaderUpdateReducer,
} from "./reducers/subHeaderReducers";
import {
  profileCreateReducer,
  profileDeleteReducer,
  profileDetailsReducer,
  profileListReducer,
  profileUpdateReducer,
} from "./reducers/profileReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productTopRated: productTopRatedReducer,
  productRelated: productRelatedReducer,
  productFilter: productFilterReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderDeliver: orderDeliverReducer,
  orderPriced: orderPricedReducer,
  orderShipped: orderShippedReducer,
  orderListMy: orderListMyReducer,
  orderList: orderListReducer,
  bannerCreate: bannerCreateReducer,
  bannerDelete: bannerDeleteReducer,
  bannerDetails: bannerDetailsReducer,
  bannerList: bannerListReducer,
  bannerUpdate: bannerUpdateReducer,
  categoryCreate: categoryCreateReducer,
  categoryDelete: categoryDeleteReducer,
  categoryDetails: categoryDetailsReducer,
  categoryList: categoryListReducer,
  categoryUpdate: categoryUpdateReducer,
  materialCreate: materialCreateReducer,
  materialDelete: materialDeleteReducer,
  materialDetails: materialDetailsReducer,
  materialList: materialListReducer,
  materialUpdate: materialUpdateReducer,
  sectionCreate: sectionCreateReducer,
  sectionDelete: sectionDeleteReducer,
  sectionDetails: sectionDetailsReducer,
  sectionList: sectionListReducer,
  sectionUpdate: sectionUpdateReducer,
  colorCreate: colorCreateReducer,
  colorDelete: colorDeleteReducer,
  colorDetails: colorDetailsReducer,
  colorList: colorListReducer,
  colorUpdate: colorUpdateReducer,
  sizeCreate: sizeCreateReducer,
  sizeDelete: sizeDeleteReducer,
  sizeDetails: sizeDetailsReducer,
  sizeList: sizeListReducer,
  sizeUpdate: sizeUpdateReducer,
  departmentList: departmentListReducer,
  subHeaderCreate: subHeaderCreateReducer,
  subHeaderDelete: subHeaderDeleteReducer,
  subHeaderDetails: subHeaderDetailsReducer,
  subHeaderList: subHeaderListReducer,
  subHeaderUpdate: subHeaderUpdateReducer,
  profileCreate: profileCreateReducer,
  profileDelete: profileDeleteReducer,
  profileDetails: profileDetailsReducer,
  profileList: profileListReducer,
  profileUpdate: profileUpdateReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
