import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
	selector: 'app-workitem',
	templateUrl: './workitem.component.html',
	styleUrls: ['./workitem.component.css']
})
export class WorkitemComponent implements OnInit {

	workItems = ['Item1','Item2','Item3','Item4','Item5'];
	
	constructor(private ActivatedRouter: ActivatedRoute,
				private Route: Route) { }

	ngOnInit() {
	}

	onSelectItem() {
		
	}

}
