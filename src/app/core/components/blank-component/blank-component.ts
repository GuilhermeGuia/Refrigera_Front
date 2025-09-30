import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@Component({
  selector: 'app-blank-component',
  imports: [RouterOutlet, NzLayoutModule],
  templateUrl: './blank-component.html',
  styleUrl: './blank-component.scss'
})
export class BlankComponent {

}
