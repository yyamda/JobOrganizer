import React from "react";
import styled from 'styled-components'; 
import "./styles.css";
import Column from "./column";
import { DragDropContext } from "react-beautiful-dnd";
import initialdata from './initialdata';

const WholeContainer = styled.div`
  display: flex; 
  justify-content: space-evenly;
  padding-top: 20px;
`;

const Columncss = styled.div`
  width: 200px;
`

function Allcolumns() {

  let state = initialdata;

  return (  
    <WholeContainer> 
      
      <DragDropContext onDragEnd={() => console.log("yay")}>

        {state.columnOrder.map((columnId) => {       
          const column = state.columns[columnId];
          const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

          return <Columncss> <Column key={column.id} column={column} tasks={tasks} /> </Columncss>;
        })}

      </DragDropContext>

    </WholeContainer>
  );

}

export default Allcolumns;
