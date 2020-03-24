import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AlertSrvice } from '../../services/alert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {

  @Input() delay = 5000;
  public text: string;
  public type = 'success';
  alertSub: Subscription;

  constructor(private alertService: AlertSrvice) { }
  ngOnDestroy(): void {
    if (this.alertSub) {
      this.alertSub.unsubscribe();
    }
  }

  ngOnInit() {
    this.alertSub = this.alertService.alert$.subscribe( alert => {
      this.text = alert.text;
      this.type = alert.type;

      const timeout = setTimeout(() => {
         clearTimeout(timeout);
         this.text = '';
      }, this.delay);
    });
  }

}
