import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';


export default function(props) {
  return (
    <div>
      <Sparklines data={props.data} width={props.width} height={props.height}>
        <SparklinesLine color={props.color}/>
      </Sparklines>
    </div>
  );
}
