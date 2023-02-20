import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TemplateComponent } from "./template/template.component";

@Component({
	selector: "app-ui",
	standalone: true,
	imports: [CommonModule, TemplateComponent],
	templateUrl: "./ui.component.html",
	styleUrls: ["./ui.component.scss"],
})
export class UiComponent {}
