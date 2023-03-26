import Intro from '@/components/view/Intro';
import { render, screen } from '@testing-library/react';

describe('Intro page Test', () => {
  beforeEach(() => {
    render(<Intro />);
  });

  it('should display title, content, picture', () => {
    expect(screen.getByTestId('intro-content')).toHaveTextContent('');
  });
});
