import * as React from 'react';
import styled from 'styled-components';
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

const Button = styled.button`
  padding: 5px 10px;
`

const Count = styled.span`
  padding: 5px 10px;
  display: inline-block;
  color: yellowgreen;
  font-weight: 700;
  font-size: 30px;
`


const Home: React.FC<PropsFromRedux> = ({ count, increment, decrement }: PropsFromRedux) => {
  return (
    <div>
      <Button type="button" onClick={decrement}>-</Button>
      <Count>{count}</Count>
      <Button type="button" onClick={increment}>+</Button>
    </div>
  );
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
