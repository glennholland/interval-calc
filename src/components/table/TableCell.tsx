import { ArrowDownward, ArrowUpward, Clear } from '@mui/icons-material';
import { Box, BoxProps } from '@mui/system';
import classnames from 'classnames';
import { forwardRef, memo } from 'react';
import IconButton from '../buttons/IconButton';
import './Table.css';

export interface TableCellProps extends BoxProps {
  alignContent?: 'left' | 'center' | 'right';
  isPad?: boolean;
  sortable?: boolean;
  sortDirection?: 'asc' | 'desc' | null;
  toggleSort?: () => void;
}

const TableCell = forwardRef<HTMLDivElement, TableCellProps>(
  (
    {
      alignContent,
      isPad,
      sortable,
      sortDirection,
      toggleSort,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Box
        {...props}
        ref={ref}
        className={classnames(
          'table-cell',
          {
            // Position Augmentation
            'table-cell-align-left': alignContent === 'left',
            'table-cell-align-center': alignContent === 'center',
            'table-cell-align-right': alignContent === 'right',
            'table-cell-pad': isPad,
          },
          props.className
        )}
      >
        {children}
        {sortable && (
          <div
            className={'sort-button'}
            style={{
              display: 'none',
              position: 'absolute',
              right: 0,
              top: 0,
            }}
          >
            <IconButton
              size="small"
              onClick={toggleSort}
              icon={
                !sortDirection ? (
                  <ArrowUpward />
                ) : sortDirection === 'asc' ? (
                  <ArrowDownward />
                ) : (
                  <Clear />
                )
              }
            />
          </div>
        )}
      </Box>
    );
  }
);

export default memo(TableCell);
