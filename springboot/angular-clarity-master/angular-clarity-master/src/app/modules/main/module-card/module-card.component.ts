import { Component, Input, OnInit } from '@angular/core';
import { NotificationType, Notification, NotificationService } from 'src/app/services/notification.service';
import {ModuleSetup} from 'src/app/models/Module_Setup';
import { ModulesetupService } from 'src/app/services/api/modulesetup.service';
import { ToastrService } from 'ngx-toastr';
import { WireframeService } from 'src/app/services/api/wireframe.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-module-card',
  templateUrl: './module-card.component.html',
  styleUrls: ['./module-card.component.scss']
})
export class ModuleCardComponent implements OnInit {
  rowSelected :any= {};

  @Input()
  apps: Array<ModuleSetup> = [];
modulesetup;
isLoading: boolean = false;
modules: ModuleSetup[];
projectId: number;
  constructor(
    private notificationService: NotificationService,
    private mainService: ModulesetupService,
    private wireframeService: WireframeService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.wireframeService.removeModuleId();
    this.route.queryParams.subscribe(params => {
      this.projectId = +params['p_id'];
    });

    //this.initCopyRuleForm();
    this.getProjectModules(this.projectId);

  }
  getProjectModules(id: number) {
    this.isLoading = true;
    this.mainService.getProjectModules(id).subscribe((data) => {
      this.isLoading = false;
      console.log(data);
      this.modules = data.items;

    });
  }
  getData() {
    this.mainService.getAll().subscribe((data) => {
      console.log(data);
      this.modulesetup = data;
      this.modulesetup = data.items;

    });
  }
  showNotification(message: string, messageDetails: string) {
    this.notificationService.add(
      new Notification(
        NotificationType.Info,
        message,
        messageDetails
      )
    )
  }
  goToAdd() {
    this.router.navigate(["../project/modules/add"], { relativeTo: this.route, queryParams: { p_id: this.projectId } });
  }
  goToAction(id: number) {
    this.router.navigate(["../actions"], { relativeTo: this.route, queryParams: { m_id: id } });
  }
}
