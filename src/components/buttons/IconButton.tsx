import { Button, ButtonProps, Tooltip } from '@mui/material';

interface IconButtonProps extends ButtonProps {
  icon: React.ReactNode;
  tooltip?: string;
}

const IconButton = ({ icon, tooltip, ...props }: IconButtonProps) => {
  return (
    <Tooltip title={tooltip}>
      <Button
        variant="outlined"
        color="inherit"
        {...props}
        sx={{
          padding: '5px',
          minWidth: 'unset',
          '& > span': { margin: 0 },
          ...(props.size === 'small' && {
            padding: '2px',
            '& svg': {
              height: 14,
              width: 14,
            },
          }),
          ...props.sx,
        }}
        startIcon={icon}
      />
    </Tooltip>
  );
};

export default IconButton;
