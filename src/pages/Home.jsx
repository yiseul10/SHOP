import MainSlide from '../components/Main/MainSlide';
import Newsletter from '../components/Main/Newsletter';
import Categories from '../components/Main/Categories';
import Products from '../components/Products/Products';
import ProductList from './ProductList';

const Home = () => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <MainSlide />
      <Categories />
    </div>
  );
};

export default Home;
