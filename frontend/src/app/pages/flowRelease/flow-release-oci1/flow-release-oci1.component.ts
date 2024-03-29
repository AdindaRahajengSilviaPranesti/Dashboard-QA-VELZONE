import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { FlowReleaseService } from 'src/app/services/flowRelease/flow-release.service';

@Component({
  selector: 'app-flow-release-oci1',
  templateUrl: './flow-release-oci1.component.html',
  styleUrls: ['./flow-release-oci1.component.css']
})
export class FlowReleaseOCI1Component {

  constructor(
    private appService: FlowReleaseService,
    private spinner: NgxSpinnerService
    ) { }

  dataOcI1: any = [];

  ngOnInit(){
    this.spinner.show();
    this.appService.getFlowReleaseOCI1().subscribe((res: any) => {
      console.log(res);
      
      this.dataOcI1 = res.data;
      console.log(this.dataOcI1);
      this.spinner.hide();

    });
  }

}
