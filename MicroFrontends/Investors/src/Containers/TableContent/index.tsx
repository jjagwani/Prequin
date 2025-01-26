import React from "react";
import { Table, TableCell, TableBody, TableContainer, TableHead, TableRow, Paper, tableCellClasses } from "@mui/material";
import { useStyles } from "./styles";
import { styled } from '@mui/material/styles';
import { getHeaderName, formatNumber } from "../../Helpers";
import { TableContentProps, DataTableProps } from "../../Types";


const TableContent: React.FC<TableContentProps> = ({ data = [], isDataAvailable, handleRowClick }) => {
  const classes = useStyles();

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.info.light,
      color: theme.palette.common.white,
    },
  }));

  const DataTable: React.FC<DataTableProps> = ({ tableData, onRowClick }) => {
    return (
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {Object.keys(tableData[0]).map((key) => (
                <StyledTableCell key={key}>{getHeaderName(key)}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                hover
                onClick={() => onRowClick(row)}
                className={classes.cursorPointer}
              >
                {Object.entries(row).map(([key, value]: any) => (
                  <TableCell key={`${rowIndex}-${key}`}>{isNaN(value)? value : formatNumber(value)}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  return (
    <div className={classes.paddingTop}>
      {isDataAvailable && <DataTable tableData={data} onRowClick={handleRowClick} />}
    </div>
  );
};

export default TableContent;
