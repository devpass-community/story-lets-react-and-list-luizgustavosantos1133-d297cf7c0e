import products from './products.json';

import Container from './components/Container';

const Item = ({ item }) => {
  return (
    <li className='item' data-testid='product-item'>
      <img src={item.thumbnail} alt={item.title} />
      <h4>{item.title}</h4>
      <p>{item.description}</p>
      <span>{item.brand}</span>
      <span>{item.price}</span>
    </li>
  );
};

function App() {
  const filteredProducts = products.filter(
    (item) => item.category === 'smartphones'
  );

  return (
    <Container>
      <ul className='list' data-testid='product-list'>
        {filteredProducts.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </Container>
  );
}

export default App;
