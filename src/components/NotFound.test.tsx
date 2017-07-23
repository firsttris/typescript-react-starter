import * as enzyme from 'enzyme';
import * as React from 'react';
import NotFound from './NotFound';

it('renders the correct text when no enthusiasm level is given', () => {
    const NotFoundComponent = enzyme.shallow(<NotFound />);
    expect(NotFoundComponent.find('h2').text()).toEqual('Looks like something went wrong!');
});
