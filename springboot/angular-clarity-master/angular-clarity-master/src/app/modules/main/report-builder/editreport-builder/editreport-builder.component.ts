import { Component, OnInit } from '@angular/core';
import { ValidationError } from 'src/app/models/ValidationError';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ReportBuilderService } from 'src/app/services/api/report-builder.service';
import { ReportBuilder } from 'src/app/models/ReportBuilder';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-editreport-builder',
  templateUrl: './editreport-builder.component.html',
  styleUrls: ['./editreport-builder.component.scss']
})
export class EditreportBuilderComponent implements OnInit {
  id:number;
  project:ReportBuilder;
  entryForm: FormGroup;
  updated = false;

  constructor(
    private reportBuilderService: ReportBuilderService,
    private _fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.project = new ReportBuilder();
    this.entryForm = this._fb.group({
      report_name: [null],
      description: [null],
      report_tags: [null],
   });
   this.getById(this.id);
  }
  getById(id: number) {
    this.reportBuilderService.getById(id).subscribe(
      (data) => {
        this.project = data;
        console.log("reportdata",data );

      },
      (err) => {
        console.log(err);
      }
    );
  }
onsubmit(){
  this.updated = true;
  this.update();
}
update() {
  this.reportBuilderService.update(this.id, this.project).subscribe(
    (data) => {
      console.log(data);
      this.router.navigate(["../../all"], { relativeTo: this.route });
    },

  );

}
  buildReport(){
    console.log("id in build report:",this.id);
    this.reportBuilderService.buildReport(this.id).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );

  }
}
