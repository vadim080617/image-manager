import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core';

export default (theme: Theme) => (createStyles({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  cardButtonsGroup: {
    marginLeft: 'auto',
  }
}));
