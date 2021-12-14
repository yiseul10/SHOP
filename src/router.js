import React from "react";
import styled from "styled-components";
import { Route, Switch, NavLink } from "react-router-dom";
import {
  Product,
  ProductList,
  Home,
  Cart,
  Review,
  customerService,
  CustomerCenter,
  EventNotice,
  QuestionOne,
  FAQ,
  ReviewInsert,
  MyPage,
  LoadingPage,
  Approval,
  Search,
  WishList,
  CheckOut,
  EmailCerified,
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

        <Route exact path="/search" component={Search} />
        <Route exact path="/products/:category" component={ProductList} />  
        <Route exact path="/checkout" component={CheckOut} />
        <Route exact path="/wish" component={WishList} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/:id" component={Product} />
        


        
        <Route exact path="/customerService/service" component={CustomerCenter} />
        <Route exact path="/customerService/FAQ" component={FAQ} />
        <Route
          exact
          path="/customerService/EventNotice"
          component={EventNotice}/>
        <Route
          exact
          path="/customerService/QuestionOne"
          component={QuestionOne}/>
        <Route exact path="/mypage/my" component={MyPage} />
        <Route exact path="/orderlist/order" component={OrderListPage} />
        <Route exact path="/orderreview/order" component={OrderReviewPage} />
        {/* <Route exact path="/review/re" component={Review} /> */}
        <Route exact path="/review/ReviewInsert" component={ReviewInsert} />
        {/* <Route exact path="*"component={ErrorPage} /> */}
      </Switch>
    </Content>
  );
}

const Content = styled.div``;
