import { Component } from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';

@Component({
  selector: 'app-mg-kanban',
  templateUrl: './mg-kanban.component.html',
  styleUrls: ['./mg-kanban.component.scss']
})
export class MGKanbanComponent {


  taskBoards = [
     {
      title : 'progress',
      id: 'tb1',
      color : '#888',
      stories : [
        {
          id: 'st',
          title : 'story1',
          tasks : [
            {
              title  : 'task1',
              story : 'st',
    
            },
            {
              title : 'task2',
              story : 'st',
    
            },
          ]
        }
      ]
    },
    {
      title : 'Done',
      id: 'tb2',
      color : '#690',
      stories : [
        
        {
          id: 'st',
          title : 'story1',
          tasks : [
            {
              title  : 'task3',
              story : 'st',
    
            },
            {
              title : 'task4',
              story : 'st',
    
            },
          ]
        },
        {
          id: 'st2',
          title : 'story2',
          tasks : [
            {
              title  : 'task1',
              story : 'st2',
    
            },
            {
              title  : 'task2',
              story : 'st2',
    
            },
         
          ]
        },
      ]
    },
    
  ]
  



  onDragged( item:any, boardIndex:number, storyIndx: number ) {

    const index = this.taskBoards[boardIndex].stories[storyIndx].tasks.indexOf( item );
    this.taskBoards[boardIndex].stories[storyIndx].tasks.splice( index, 1 );

  }
  
  onDrop( event:DndDropEvent, boardIndex:number, storyIndx: number ) {
    
    let index = event.index;
    
    if( typeof index === "undefined" ) {
      
      index = this.taskBoards[boardIndex].stories[storyIndx].tasks.length;
     

    }

    this.taskBoards[boardIndex].stories[storyIndx].tasks.splice( index, 0, event.data );
    console.log('to board: ' , this.taskBoards[boardIndex].id)  
  }

  addNewTask(){
    
  }

}
