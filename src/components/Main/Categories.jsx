import styled from 'styled-components';
import { categories } from '../../data';
import { media } from '../../responsive';
import CategoryItem from './CategoryItem';

const Container = styled.div`
  display: flex;
  padding: 60px;
  flex-wrap: wrap;
  justify-content: space-between;
  ${media({ padding: '30px', flexDirection: 'column' })}
`;

const Categories = () => {
  // 데이터를 보내줘야하지 않나유?
  return (
    <Container>
      {categories.map(item => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
