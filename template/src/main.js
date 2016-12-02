import { compose, lifecycle, withHandlers, withProps } from 'recompose';
import { connect } from 'react-redux';

import { actions, rootSelector } from './reducer';

import Main from './components/main';

const enhance = compose(
  connect(
    // Our mapstate to props built by reselect
    rootSelector,
    actions
  ),
  lifecycle({
    componentDidMount() {
      // You can add lifecycle hooks here without messing with the stateless nature of the underlying component
    }
  }),
  withProps(props => ({
    // You can alter/add props
  })),
  withHandlers({
    // Here you can create handlers based on props to be used inside the stateless function
    // example:
    //
    // toggleProp: props => e => {
    //   e && e.preventDefault();
    //   props.setProp(!props.value);
    // }
    //
    // this is nice because it keeps a lot of logic out of our presentational components
    updateText: props => e => {
      e.preventDefault();
      props.setInput(e.target.value);
    }
  })
);

export default enhance(Main);
