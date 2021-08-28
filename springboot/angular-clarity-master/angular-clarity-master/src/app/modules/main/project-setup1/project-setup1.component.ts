import { Component, OnInit } from '@angular/core';
import { NotificationService, NotificationType, Notification } from 'src/app/services/notification.service';
import { ProjectSetup } from 'src/app/models/Project_setup';
@Component({
  selector: 'app-project-setup1',
  templateUrl: './project-setup1.component.html',
  styleUrls: ['./project-setup1.component.scss']
})
export class ProjectSetup1Component implements OnInit {
  gridViewIsActive: boolean = true;
  apps: Array<ProjectSetup> = [];
  constructor(
    private notificationService: NotificationService,
  ) { }

  ngOnInit(): void {
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
}
