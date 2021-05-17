import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

interface Storage {
  name: string,
  path: string,
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // Encapsulation has to be disabled in order for the
  // component style to apply to the select panel.
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'multiline-mat-select';
  selectedStorage = new FormControl('');
  storageList: Storage[] = [
    {
      name: 'C drive',
      path: 'path/to/c-drive',
    },
    {
      name: 'D drive',
      path: 'path/to/d-drive',
    },
    {
      name: 'E drive',
      path: 'path/to/e-drive/too/long/long/long/long/long/long/long/long/path',
    },
  ]
}
