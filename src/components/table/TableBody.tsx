import { Box, BoxProps } from '@mui/material';

import { deepCompareProps } from '@util/reactUtils';
import classnames from 'classnames';
import { FC, memo } from 'react';

const TableBody: FC<BoxProps & { alternatingRows?: boolean }> = ({
  children,
  alternatingRows,
  ...props
}) => {
  return (
    <Box
      {...props}
      className={classnames(
        'table-body',
        { ['table-body-alternate-rows']: alternatingRows },
        props.className
      )}
    >
      {children}
    </Box>
  );
};

export default memo(TableBody, deepCompareProps);
