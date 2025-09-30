import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-full-component',
  imports: [NzLayoutModule, NzIconModule, RouterOutlet, NzMenuModule],
  templateUrl: './full-component.html',
  styleUrl: './full-component.scss'
})
export class FullComponent {
  isCollapsed = false;
}
