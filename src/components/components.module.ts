import { NgModule } from '@angular/core';
import { MessageDetailComponent } from './message-detail/message-detail';
import { NotificationDetailComponent } from './notification-detail/notification-detail';
@NgModule({
	declarations: [MessageDetailComponent,
    NotificationDetailComponent],
	imports: [],
	exports: [MessageDetailComponent,
    NotificationDetailComponent]
})
export class ComponentsModule {}
