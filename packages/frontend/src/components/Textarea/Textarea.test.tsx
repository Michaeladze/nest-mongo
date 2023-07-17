import React from 'react';

import { render } from '@testing-library/react';

import { Textarea } from './Textarea';

describe('Test Textarea component', () => {

  it('should render Textarea component', () => {
    const { container } = render(<Textarea />);
  });

});
