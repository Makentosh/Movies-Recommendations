import { FormattedMessage } from "react-intl";
import { Button } from '@mui/material';

export const SubmitField = () => {
  return (
    <Button variant="contained" type="submit" size="large">
      <FormattedMessage id='filters.submit'/>
    </Button>
  )
}
