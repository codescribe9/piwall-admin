import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-pimaster',
  styleUrls: ['./pimaster.component.scss'],
  templateUrl: './pimaster.component.html',
})
export class PimasterComponent implements OnDestroy {

  volume = 32;
  volumeOff = false;
  volumeMode = 'cool';

  colors: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      this.colors = config.variables;
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
