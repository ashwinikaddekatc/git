import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rn_Fb_Header } from 'src/app/models/Rn_Fb_Header';
import { ModulesetupService } from 'src/app/services/api/modulesetup.service';
import { WireframeService } from 'src/app/services/api/wireframe.service';
import { ExcelService } from 'src/app/services/excel.service';
@Component({
  selector: 'app-wireframe-card',
  templateUrl: './wireframe-card.component.html',
  styleUrls: ['./wireframe-card.component.scss']
})
export class WireframeCardComponent implements OnInit {
  moduleId: number;
  wireFrames: Rn_Fb_Header[];
  isLoading: boolean = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private excel: ExcelService,
    private moduleService: ModulesetupService,
    private wireframeService: WireframeService,
  ) { }

  ngOnInit(): void {
    this.moduleId = this.wireframeService.getModuleId(); // get from session storage
    console.log(this.moduleId);

    this.getModuleWireframes(this.moduleId);
  }
  getModuleWireframes(id: number) {
    this.isLoading = true;
    //this.moduleService.getById(id).subscribe((data) => {
      this.wireframeService.getAll(id).subscribe((data) => {
      this.isLoading = false;
      console.log(data);
      //this.wireFrames = data.rn_fb_headers;
      this.wireFrames = data.items;
      console.log('wireframes: ', this.wireFrames);

    });
  }
  goToAdd() {

    this.router.navigate(["../project/modules/wireframe/types"], { relativeTo: this.route });


  }
}
