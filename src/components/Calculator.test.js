import renderer from 'react-test-renderer';
import Calculator from './Calculator';

it('Quote renders correctly', () => {
  const tree = renderer
    .create(<Calculator />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});