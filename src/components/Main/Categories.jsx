import styled from 'styled-components';
import { media } from '../../responsive';
import { categories } from '../../data';
import CategoryItem from './CategoryItem';

const Container = styled.div`
  display: flex;
  padding: 60px;
  flex-wrap: wrap;
  justify-content: space-between;
  ${media({ padding: '30px', flexDirection: 'column' })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map(item => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
