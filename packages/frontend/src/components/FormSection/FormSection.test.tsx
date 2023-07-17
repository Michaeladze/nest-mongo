import React from 'react';

import { render } from '@testing-library/react';

import { FormSection } from './FormSection';

describe('Test FormSection component', () => {

  it('should render FormSection component', () => {
    const { container } = render(<FormSection>
      <div/>
    </FormSection>);
  });

});
