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
} from "pages";
import { OrderListPage } from "pages/ordeListPage";
import { OrderReviewPage } from "pages/orderReviewPage";
//  page폴더 내의 index파일에 export할 페이지들을 한꺼번에 모아놓고 이 페이지들을 import해줄 때 한줄로 편하게 사용하기위함

export default function Router() {
  const user = true;

  return (
    <Content>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/products" component={ProductList} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/review" component={Review} />
        <Route exact path="/customerService" component={CustomerCenter} />
        <Route exact path="/customerService/FAQ" component={FAQ} />
        <Route exact path="/mypage" component={MyPage} />
        <Route exact path="/orderlist" component={OrderListPage} />
        <Route exact path="/orderreview" component={OrderReviewPage} />
        <Route
          exact
          path="/customerService/EventNotice"
          component={EventNotice}
        />
        <Route
          exact
          path="/customerService/QuestionOne"
          component={QuestionOne}
        />
        <Route exact path="/review/ReviewInsert" component={ReviewInsert} />
        <Route
          exact
          path="/review"
          component={user ? <NavLink to="/" /> : Review}
        />
        {/* <Route exact path="*" component={ErrorPage} /> */}
      </Switch>
    </Content>
  );
}

const Content = styled.div``;
