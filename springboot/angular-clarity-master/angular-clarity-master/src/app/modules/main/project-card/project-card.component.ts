import { Component, Input, OnInit } from '@angular/core';
import { NotificationType, Notification, NotificationService } from 'src/app/services/notification.service';
import { ProjectSetup} from 'src/app/models/Project_setup';
import { ProjectSetupService } from 'src/app/services/api/project-setup.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  rowSelected :any= {};

  @Input()
  apps: Array<ProjectSetup> = [];
projectsetup;
  constructor(
    private notificationService: NotificationService,
    private mainService: ProjectSetupService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.mainService.getAll().subscribe((data) => {
      console.log(data);
      this.projectsetup = data;
      this.projectsetup = data.items;

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
  goToAdd(row) {

    this.router.navigate(["../project/add"], { relativeTo: this.route });
  }
  goToModule(id: number) {
    this.router.navigate(["../module1"], { relativeTo: this.route, queryParams: { p_id: id } });
  }


}
