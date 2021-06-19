import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DndModule } from 'ngx-drag-drop';
import { MGKanbanComponent } from './mg-kanban.component';


@NgModule({
  declarations: [
    MGKanbanComponent
  ],
  imports: [
    BrowserModule,
    DndModule,
  ],
  providers: [],
  bootstrap: [MGKanbanComponent]
})
export class AppModule { }
