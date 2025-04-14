import { Box } from '@mui/material';
import { BoxProps } from '@mui/system';
import { deepCompareProps } from '@util/reactUtils';
import classnames from 'classnames';
import { FC, memo } from 'react';

const Table: FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box className={classnames('table', props.className)} {...props}>
      {children}
    </Box>
  );
};

export default memo(Table, deepCompareProps);
