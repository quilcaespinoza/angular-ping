import { Component, OnInit } from '@angular/core';
import {PingService} from './shared/ping.service';
import {Eping} from './shared/models/eping';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  eping: Eping;
  ping = [];

    padding: any = { left: 20, top: 5, right: 20, bottom: 5 };

    titlePadding: any = { left: 90, top: 0, right: 0, bottom: 10 };

    xAxis: any =
        {
            dataField: 'Google',
            gridLines: { visible: true },
            flip: false
        };

    valueAxis: any =
        {
            flip: true,
            labels: {
                visible: true,
                formatFunction: (value: string) => {
                    return parseInt(value) / 1000000;
                }
            }
        };

    seriesGroups: any[] =
        [
            {
                type: 'column',
                orientation: 'horizontal',
                columnsGapPercent: 50,
                toolTipFormatSettings: { thousandsSeparator: ',' },
                series: [
                    { dataField: 'ms', displayText: 'ms/s' }
                ]
            }
        ];
sampleData;
    constructor(private pingApi: PingService) {}
  ngOnInit() {
    setInterval( () => {
      this.getPing();
    }, 100);
  }
  private getPing() {
    this.pingApi.getPing()
        .subscribe(data => {
          // const arr = data.ping.split('=',data.ping);
          this.eping = data;
            this.sampleData =
                [
                    { Google: 'Ping', ms: this.eping.ping}
                ];

            // this.ping.push(this.eping.ping);
          console.log(this.eping.ping);
        });
  }
}
