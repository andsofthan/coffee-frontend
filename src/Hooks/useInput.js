import React from 'react';

export default (defaultValue) => {
 const [value, setValue] = React.useState(defaultValue);

 const onChange = e => {
     const { target: { value}} = e;
     setValue(value);
 };

 return { value, onChange};
};