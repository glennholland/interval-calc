import { Box, BoxProps } from '@mui/material';
import { deepCompareProps } from '@util/reactUtils';
import classnames from 'classnames';
import { FC, memo } from 'react';

const TableHead: FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box {...props} className={classnames('table-head', props.className)}>
      {children}
    </Box>
  );
};

export default memo(TableHead, deepCompareProps);
