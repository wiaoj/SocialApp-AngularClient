import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { Post } from "src/app/common/models/post/postModel";

@Component({
	selector: "app-post",
	standalone: true,
	imports: [CommonModule, MatCardModule],
	templateUrl: "./post.component.html",
	styleUrls: ["./post.component.scss"],
})
export class PostComponent {
	@Input() post!: Post;

	constructor() {}
}
