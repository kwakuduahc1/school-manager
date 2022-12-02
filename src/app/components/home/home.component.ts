import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { TeacherClasses } from '../../class-subscriptions/model';
import { SubscriptionsHttpService } from '../../class-subscriptions/subscription-http-service';
import { Programs, TeacherAssignedCourses } from '../../dtos/model';
import { ActivityProvider } from '../../providers/ActivityProvider';
import { ConfirmDialogService } from '../../providers/confirmation-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  courses: TeacherAssignedCourses[];

  constructor(
    title: Title,
    route: ActivatedRoute,
    public act: ActivityProvider,
    private toast: ToastrService,
    private http: SubscriptionsHttpService,
    private conf: ConfirmDialogService) {
    title.setTitle('Home');
    this.courses = route.snapshot.data.courses;
  }

  ngOnInit(): void { }

  // unsus(tcl: TeacherClasses) {
  //   this.conf.confirm('You would have to re-suscribe to the class').subscribe((ans: boolean) => {
  //     if (ans) {
  //       this.http.remove(tcl).subscribe(() => {
  //         this.toast.success('You unsuscribed from the class');
  //         tcl.isActive = !tcl.isActive;
  //       });
  //     }
  //   });
  // }
}
