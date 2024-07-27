import { renderWithRouter, screen } from '@/utils/routerTest';

import Breadcrumb from './Breadcrumb';

test('renders breadcrumb with correct page name and link', () => {
  const pageName = 'Settings';

  renderWithRouter(<Breadcrumb pageName={pageName} />);

  const breadcrumb = screen.getByTestId('breadcrumb');
  expect(breadcrumb).toBeInTheDocument();
  expect(breadcrumb).toHaveTextContent(pageName);
});
