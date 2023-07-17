import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { catchError, of } from 'rxjs';
var fakeDataUrl =
  'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  initLoading = true; // bug
  loadingMore = false;
  data: any[] = [];
  list: Array<{ loading: boolean; name: any }> = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getData((res: any) => {
      this.data = res.results;
      this.list = res.results;
      this.initLoading = false;
    });
  }

  getData(callback: (res: any) => void): void {
    this.http
      .get(fakeDataUrl)
      .pipe(catchError(() => of({ results: [] })))
      .subscribe((res: any) => callback(res));
  }

  edit(item: any): void {
    // this.msg.success(item.email);
  }
}
