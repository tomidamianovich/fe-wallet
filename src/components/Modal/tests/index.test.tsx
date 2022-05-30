import { render } from '@testing-library/react';
import Modal from '../index';

const mockFn = () => {}

const buttons = [{
  label:"Test",
  ariaLabel:"test",
  handler: mockFn,
  backgroundColor:"test",
  color:"test"
},
{
  label:"Test 2",
  ariaLabel:"tes 2t",
  handler: mockFn,
  backgroundColor:"test 2",
  color:"test 2"
}]

test('renders Modal with 1 button', () => {
  
  const { asFragment } = render(
    <Modal 
      handleCloseButton={mockFn} 
      header="Header"
      content={ <div>Test</div> }
      actions={[buttons[0]]}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders Modal with 2 buttons', () => {
  
  const { asFragment } = render(
    <Modal 
      handleCloseButton={mockFn} 
      header="Header"
      content={ <div>Test</div> }
      actions={buttons}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders Modal without buttons', () => {
  
  const { asFragment } = render(
    <Modal 
      handleCloseButton={mockFn} 
      header="Header"
      content={ <div>Test</div> }
    />
  );
  expect(asFragment()).toMatchSnapshot();
});