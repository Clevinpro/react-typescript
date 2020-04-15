import * as React from 'react';
import { connect, ConnectedProps } from 'react-redux';


interface RootState {
  count: number;
}

interface HomeProps {
  count: number;
  increment(): void;
  decrement(): void;
}


const mapStateToProps = (state: RootState): any => ({
  count: state.count,
});



const mapDispatchToProps = {
  increment: (): {} => ({
    type: 'INCREMENT'
  }),
  decrement: (): {} => ({
    type: 'DECREMENT'
  }),
};

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>




const Home: React.FC<PropsFromRedux> = ({ count, increment, decrement }: PropsFromRedux) => {
  return (
    <div>
      <button type="button" onClick={decrement}>-</button>
      <span>{count}</span>
      <button type="button" onClick={increment}>+</button>
    </div>
  );
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
