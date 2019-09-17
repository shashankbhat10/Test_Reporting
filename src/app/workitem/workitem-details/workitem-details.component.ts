import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-workitem-details',
	templateUrl: './workitem-details.component.html',
	styleUrls: ['./workitem-details.component.css']
})
export class WorkitemDetailsComponent implements OnInit {

	@Input() index: String;
	constructor() { }

	ngOnInit() {
	}

}
