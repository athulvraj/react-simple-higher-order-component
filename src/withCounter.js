const withCounter = (Component) => {
  const CounterComponent = (props) => {
    return <Component {...props} />;
  };
  return CounterComponent;
};
export default withCounter;
