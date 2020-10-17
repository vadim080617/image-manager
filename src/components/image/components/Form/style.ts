import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core';

export default (theme: Theme) => (createStyles({
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  errorLabel: {
    color: 'red',
  },
}));
