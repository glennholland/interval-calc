import { Box, BoxProps } from '@mui/material';
import { deepCompareProps } from '@util/reactUtils';
import classnames from 'classnames';
import { forwardRef, memo } from 'react';

interface TableRowProps extends BoxProps {
  hidden?: boolean;
  hideBorders?: boolean;
  topBorder?: boolean;
  reverse?: boolean;
  expandable?: boolean;
}

const TableRow = forwardRef<HTMLElement, TableRowProps>(
  (
    { hidden, hideBorders, topBorder, reverse, children, expandable, ...props },
    ref
  ) => {
    return (
      <Box
        {...props}
        ref={ref}
        className={classnames(
          'table-row',
          {
            ['table-row-hidden']: hidden,
            ['table-row-no-border']: hideBorders,
            ['table-row-row-top-border']: topBorder,
            ['table-row-reverse']: reverse,
            ['table-row-expandable']: expandable,
          },
          props.className
        )}
      >
        {children}
      </Box>
    );
  }
);

export default memo(TableRow, deepCompareProps);
