import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import tileData from './tileData';
import image from '../logo.png';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    overflow: 'hidden',
    alignItems: 'center',
    justify: 'center',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1200,
    height: 1000,
  },
  
});

function TitlebarGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
          <ListSubheader component="div" align= "left" >Day 1</ListSubheader>
          <ListSubheader component="div" align= "center" >Day 2</ListSubheader>
          <ListSubheader component="div" align= "right" >Day 3</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile xs = {6} key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar 
              title={tile.title}
              subtitle={<span> {tile.author}</span>}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);