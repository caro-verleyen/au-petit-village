import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, input, model, output, Output, } from '@angular/core';
import{FormsModule} from'@angular/forms'


@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule, CommonModule,],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
 search=model<string>('initial')

searchButtonClicked=output({alias:'submit'})
hero: any;
heros: any;
orderByPrix: "asc"|"desc"|undefined;
selectedProperty: any;
sortOrder: any;

searchClick(){
  this.searchButtonClicked.emit()
}

}
