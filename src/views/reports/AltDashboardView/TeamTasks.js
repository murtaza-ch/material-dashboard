import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tooltip,
  makeStyles
} from '@material-ui/core';
import React, { useState } from 'react';

import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import GetAppIcon from '@material-ui/icons/GetApp';
import LaunchIcon from '@material-ui/icons/Launch';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import moment from 'moment';
import { v4 as uuid } from 'uuid';

const data = [
  {
    id: uuid(),
    name: 'Update the API for the project',
    imageUrl: '/static/images/products/product_1.png',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'Redesign the landing page',
    imageUrl: '/static/images/products/product_2.png',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'Solve the bug for the showState',
    imageUrl: '/static/images/products/product_3.png',
    updatedAt: moment().subtract(3, 'hours')
  },
  {
    id: uuid(),
    name: 'Release v1.0 Beta',
    imageUrl: '/static/images/products/product_4.png',
    updatedAt: moment().subtract(5, 'hours')
  },
  {
    id: uuid(),
    name: 'GDPR Compliance',
    imageUrl: '/static/images/products/product_5.png',
    updatedAt: moment().subtract(9, 'hours')
  }
];

const useStyles = makeStyles({
  root: {
    height: '100%'
  },
  image: {
    height: 48,
    width: 48
  }
});

const TeamTasks = ({ className, ...rest }) => {
  const classes = useStyles();
  const [products] = useState(data);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader
        subtitle={`${products.length} in total`}
        title="Team Tasks"
        action={
          <>
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu id="long-menu" anchorEl={anchorEl} keepMounted open={open}>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <GetAppIcon fontSize="default" />
                </ListItemIcon>
                <Typography variant="inherit">Import</Typography>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <FileCopyIcon fontSize="default" />
                </ListItemIcon>
                <Typography variant="inherit">Copy</Typography>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <PictureAsPdfIcon fontSize="default" />
                </ListItemIcon>
                <Typography variant="inherit" noWrap color="textPrimary">
                  Export
                </Typography>
              </MenuItem>
            </Menu>
          </>
        }
      />
      <Divider />
      <List>
        {products.map((product, i) => (
          <ListItem divider={i < products.length - 1} key={product.id}>
            <ListItemText
              primary={product.name}
              secondary={`Updated ${product.updatedAt.fromNow()}`}
            />

            <AvatarGroup max={4}>
              <Avatar alt="Remy Sharp" src={product.imageUrl} />
              <Avatar alt="Travis Howard" src={product.imageUrl} />
              <Avatar alt="Cindy Baker" src={product.imageUrl} />
            </AvatarGroup>
            <Tooltip enterDelay={300} title="View Task">
              <IconButton edge="end" size="small">
                <LaunchIcon />
              </IconButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box display="flex" justifyContent="flex-end" p={2}>
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
  );
};

TeamTasks.propTypes = {
  className: PropTypes.string
};

export default TeamTasks;
