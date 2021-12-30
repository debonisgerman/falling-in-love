import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import ShopScreen from "./screens/ShopScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import HomeScreen from "./screens/HomeScreen";
import AboutUsScreen from "./screens/AboutUsScreen";
import FindUsScreen from "./screens/FindUsScreen";
import BannerEditScreen from "./screens/BannerEditScreen";
import BannerListScreen from "./screens/BannerListScreen";
import CategoryEditScreen from "./screens/CategoryEditScreen";
import CategoryListScreen from "./screens/CategoryListScreen";
import MaterialEditScreen from "./screens/MaterialEditScreen";
import MaterialListScreen from "./screens/MaterialListScreen";
import SectionEditScreen from "./screens/SectionEditScreen";
import SectionListScreen from "./screens/SectionListScreen";
import ColorEditScreen from "./screens/ColorEditScreen";
import ColorListScreen from "./screens/ColorListScreen";
import SizeEditScreen from "./screens/SizeEditScreen";
import SizeListScreen from "./screens/SizeListScreen";
import SubHeaderEditScreen from "./screens/SubHeaderEditScreen";
import SubHeaderListScreen from "./screens/SubHeaderListScreen";


class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (window.location.origin.indexOf("www") === -1)
    {
      window.location.href = "https://www." + window.location.host + window.location.pathname + window.location.search
    }
  }

  render() {
    return (
      <Router>
        <Header />
        <SubHeader />
        <main className="pb-3 w-100">
          <Route path="/admin/material/:id/edit" component={MaterialEditScreen} />
          <Route path="/admin/materiallist" component={MaterialListScreen} />
          <Route path="/admin/subheader/:id/edit" component={SubHeaderEditScreen} />
          <Route path="/admin/subheaderlist" component={SubHeaderListScreen} />
          <Route path="/admin/size/:id/edit" component={SizeEditScreen} />
          <Route path="/admin/sizelist" component={SizeListScreen} />
          <Route path="/admin/color/:id/edit" component={ColorEditScreen} />
          <Route path="/admin/colorlist" component={ColorListScreen} />
          <Route path="/admin/section/:id/edit" component={SectionEditScreen} />
          <Route path="/admin/sectionlist" component={SectionListScreen} />
          <Route path="/admin/category/:id/edit" component={CategoryEditScreen} />
          <Route path="/admin/categorylist" component={CategoryListScreen} />
          <Route path="/admin/banner/:id/edit" component={BannerEditScreen} />
          <Route path="/admin/bannerlist" component={BannerListScreen} />
          <Route path="/admin/orderlist" component={OrderListScreen} />
          <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
          <Route
            path="/admin/productlist/:pageNumber"
            component={ProductListScreen}
            exact
          />
          <Route path="/admin/productlist" component={ProductListScreen} exact />
          <Route path="/admin/user/:id/edit" component={UserEditScreen} />
          <Route path="/admin/userlist" component={UserListScreen} />
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/about-us" component={AboutUsScreen} exact />
          <Route path="/find-us" component={FindUsScreen} exact />
          <Route path="/find-us/:map" component={FindUsScreen} exact />
          <Route path="/shop/search/:keyword" component={ShopScreen} exact />
          <Route path="/shop/page/:pageNumber" component={ShopScreen} exact />
          <Route
            path="/shop/search/:keyword/page/:pageNumber"
            component={ShopScreen}
            exact
          />
          <Route path="/shop" component={ShopScreen} exact />
          <Route path="/" component={HomeScreen} exact />
        </main>
        <Footer />
      </Router>
    )
  }
}

export default App;
