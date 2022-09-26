import clsx from 'clsx';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import AppLink from '../AppLink';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content',
  },
  avatar: {
    width: 64,
    height: 64,
    fontSize: '3rem',
  },
  name: {
    marginTop: theme.spacing(1),
  },
}));

interface UserInfoProps {
  className?: string;
  showAvatar?: boolean;
  user?: any;
}

const UserInfo = ({ className, showAvatar = false, user, ...restOfProps }: UserInfoProps) => {
  const classes = useStyles();
  return (
    <div {...restOfProps} className={clsx(classes.root, className)}>
      <Typography className={classes.name} variant="h6">
        Bookr.co
      </Typography>
    </div>
  );
};

export default UserInfo;
