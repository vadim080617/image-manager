import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core';

export default (theme: Theme) =>
  createStyles({
    icon: {
        marginRight: theme.spacing(2),
      },
      heroContent: {
        backgroundColor: theme.palette.background.paper,
      },
      heroButtons: {
        marginTop: theme.spacing(4),
      },
      footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
      },
      link: {
        color: 'white',
        textDecoration: 'none',
      },
  });
