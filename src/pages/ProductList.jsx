import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Notice from "../components/Notice";
import Products from "../components/Products";

const Container = styled.div``;

const Title = styled.div`
  margin: 20px;
  text-align: center;
  font-size: 15px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  font-size: 12px;
`;
const FilterText = styled.span`
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 8px;
  margin-right: 20px;
  border: none;
  font-size: 11px;
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Notice />
      <Navbar />
      <Title>COAT</Title>
      <FilterContainer>
        <Filter>
          <FilterText>
            전체 카테고리
            <Select>
              <Option disabled selected>
                Color
              </Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>Yellow</Option>
              <Option>Green</Option>
            </Select>
            <Select>
              <Option disabled selected>
                Size
              </Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </FilterText>
        </Filter>
        <Filter>
          <FilterText>
            정렬
            <Select>
              <Option selected>신상품</Option>
              <Option>낮은 가격순</Option>
              <Option>높은 가격순</Option>
            </Select>
          </FilterText>
        </Filter>
      </FilterContainer>
      <Products />
      <Footer />
    </Container>
  );
};

export default ProductList;
