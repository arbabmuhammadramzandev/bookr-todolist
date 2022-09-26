import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../redux/store';
import { todoSlice } from '../../redux/slice/todo';
import ColumnLayout from '../ColumnLayout';
// import {getTodoLists} from '../../redux/slice/customSlice'
import { useEffect } from 'react';

export function ToDoColumn() {
  const dispatch = useDispatch<any>();
  const { todo } = useSelector((state: StoreState) => state);
  // const getLists = useSelector((state: StoreState) => state);
  const {
    actions: { completeStatus, remove, add, updateTextShowed },
  } = todoSlice;
// useEffect(() => {
//   dispatch(getTodoLists());
// }, [])
  return (
    <>
      <Typography mb={3}>All todo tasks: {todo.length}</Typography>
      <ColumnLayout
        droppableId='todo'
        labelText="Type 'to do' item"
        completedHandler={completeStatus}
        removeHandler={remove}
        addHandler={add}
        selectorState={todo}
        updateTextShowed={updateTextShowed}
      />
    </>
  );
}
