import { Card, Typography } from '@mui/material';
function ConvertCard({
  title,
  multiplier,
  firstUnit,
  secondUnit,
  inputValue,
  checked,
}) {
  return (
    <Card
      elevation={0}
      sx={{
        backgroundColor: checked ? '' : '#4a4e69',
        mt: 3,
        pt: 3,
        pb: 3,
        mb: 3,
        ml: ' auto',
        mr: 'auto',
        textAlign: 'center',
        minWidth: '50%',
        maxWidth: '80%',
      }}
    >
      <Typography
        sx={{ color: checked ? '' : '#f0ebd8' }}
        variant='h6'
        component='div'
      >
        {title}({firstUnit} / {secondUnit})
      </Typography>
      <Typography
        sx={{ color: checked ? '' : '#f0ebd8', pt: 2 }}
        variant='body1'
        component='div'
      >
        {inputValue} {firstUnit} = {(inputValue * multiplier).toFixed(3)}{' '}
        {secondUnit} | {inputValue} {secondUnit} =
        {(inputValue / multiplier).toFixed(3)} {firstUnit}
      </Typography>
    </Card>
  );
}
export default ConvertCard;
