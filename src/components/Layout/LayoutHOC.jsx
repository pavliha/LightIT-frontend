import React from 'react';
import {Container} from 'reactstrap';
import NavBarContainer from "./NavBarContainer"

export default function Layout(WrappedComponent) {
  return class extends React.Component {
    render() {
      return <div>
        <NavBarContainer/>
        <Container fluid className='mt-3'>
          <WrappedComponent {...this.props}/>
        </Container>
      </div>
    }
  }
}
