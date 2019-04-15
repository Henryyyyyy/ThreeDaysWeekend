import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.blue,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(name, first, second, third ) {
  id += 1;
  return { name, first, second, third };
}

const rows = [
  createData('Breakfast', 159, 6.0, 24),
  createData('Morning', 237, 9.0, 37),
  createData('Lunch', 262, 16.0, 24),
  createData('Afternoon', 305, 3.7, 67),
  createData('Dinner', 356, 16.0, 49),
];

function CustomizedTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Dessert (100g serving)</CustomTableCell>
            <CustomTableCell align="right">First</CustomTableCell>
            <CustomTableCell align="right">Second</CustomTableCell>
            <CustomTableCell align="right">Third</CustomTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow className={classes.row} key={row.id}>
              <CustomTableCell component="th" scope="row">
                {row.name}
              </CustomTableCell>
              <CustomTableCell align="right">{row.first}</CustomTableCell>
              <CustomTableCell align="right">{row.second}</CustomTableCell>
              <CustomTableCell align="right">{row.third}</CustomTableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);


