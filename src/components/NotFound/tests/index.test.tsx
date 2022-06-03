import { render } from '@testing-library/react';
import NotFound from '../';

jest.mock('react-i18next', () => ({
  withTranslation: () => (Component: any) => {
    Component.defaultProps = {...Component.defaultProps, t: (translation: string) => translation};
    return Component;
  }
}));


test('renders Exchange main page', () => {
  const { asFragment } = render(<NotFound />);
  expect(asFragment()).toMatchSnapshot();
});