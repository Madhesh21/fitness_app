import { Box } from '@mui/material'
import React from 'react'
import BodyPart from './BodyPart'



const HorizontalScrollBar = ({data, bodyPart, setBodyPart}) => {
  return (
    <div>
      {data.map((item) => (
        <Box
          m="0 40px"
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
        >
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </div>
  );
}

export default HorizontalScrollBar