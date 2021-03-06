import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import {
  Product,
  ProductList,
  Home,
  Cart,
  EmailCerified,
  Review,
  PostMain,
  PostView,
  CustomerCenter,
  ReviewInsert,
  MyPage,
  LoadingPage,
  Approval,
  Search,
  WishList,
  CheckOut,
  Custom,
  Customer,
  Question,
} from "pages";
import { OrderListPage } from "pages/ordeListPage";
import { OrderReviewPage } from "pages/orderReviewPage";
import { PasswordSearchPage } from "pages/passwordSearchPage";
import { PasswordResetPage } from "pages/passwordResetPage";

//  page폴더 내의 index파일에 export할 페이지들을 한꺼번에 모아놓고 이 페이지들을 import해줄 때 한줄로 편하게 사용하기위함
import Axios from 'axios';

Axios.defaults.baseURL =
  'http://ec2-3-37-117-153.ap-northeast-2.compute.amazonaws.com:8080/shoppingmall/products';

export default function Router() {
  const user = true;

  return (
    <Content>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/email-cerified" component={EmailCerified} />
        <Route exact path="/loading" component={LoadingPage} />
        <Route exact path="/approval" component={Approval} />     
        <Route exact path="/passwordsearch" component={PasswordSearchPage} />
        <Route exact path="/passwordreset" component={PasswordResetPage} />

        <Route exact path="/custom" component={Custom} />

        <Route exact path="/search" component={Search} />
        <Route exact path="/products/:category" component={ProductList} />  
        <Route exact path="/checkout" component={CheckOut} />
        <Route exact path="/wish" component={WishList} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/:id" component={Product} />
        <Route exact path="/reviewinsert/:id" component={ReviewInsert} />        
       
        
        <Route exact path='/Customer/cs' component={Customer} />
        <Route exact path='/Customer/cs/Question' component={Question} />
        <Route exact path="/Customer/cs/CustomerCenter/NOTICE" component={CustomerCenter} />
        <Route exact path='/Customer/cs/CustomerCenter/custom/NOTICE/:no' component={PostView} />
        <Route exact path='/Customer/cs/CustomerCenter/NOTICE' component={PostMain} />
        
   
        <Route exact path="/mypage/my" component={MyPage} />
        <Route exact path="/orderlist/order" component={OrderListPage} />
        <Route exact path="/orderreview/order" component={OrderReviewPage} />

        
        <Route
          exact
          path='/customerService/service'
          component={CustomerCenter}
        />
        
        <Route exact path='/mypage/my' component={MyPage} />
        <Route exact path='/orderlist/order' component={OrderListPage} />
        <Route exact path='/orderreview/order' component={OrderReviewPage} />
        <Route exact path='/review/ReviewInsert' component={ReviewInsert} />
      </Switch>
    </Content>
  );
}

const Content = styled.div``;
