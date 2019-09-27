import * as React from 'react';
import { Range } from 'react-range';
import style from './CalculatorComponent.module.css';
class SuperSimple extends React.Component {
    super;
  state = { 
    values1: [50],
    values2: [50]
  };
 
  render() {
    let rezult = Number(this.state.values1) + Number(this.state.values2);
    return (
        <div className={style.RangeWraper}>
          <div className={style.Range1}>
      <Range
        step={0.1}
        min={0}
        max={100}
        values={this.state.values1}
        onChange={values1 => this.setState({ values1 })}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '6px',
              width: '100%',
              backgroundColor: '#ccc'
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '42px',
              width: '42px',
              backgroundColor: '#999'
            }}
          />
        )}
      />
      
      </div>
      <div>{this.state.values1}</div>
      <div className={style.Range1}>
      <Range
        step={0.1}
        min={0}
        max={100}
        values={this.state.values2}
        onChange={values2 => this.setState({ values2 })}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '6px',
              width: '100%',
              backgroundColor: '#ccc'
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '42px',
              width: '42px',
              backgroundColor: '#999'
            }}
          />
        )}
      />
      
      </div>
      <div>{this.state.values2}</div>
      <div>{rezult}</div>
      </div>
    );
  }
}

export default SuperSimple;