import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostService } from "src/app/services/models/post/post.service";

@Component({
	selector: "app-feed",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./feed.component.html",
	styleUrls: ["./feed.component.scss"],
})
export class FeedComponent implements OnInit {
	constructor(private postService: PostService) {}

	async ngOnInit(): Promise<void> {
		await this.postService.getPostsByProfileId("");
	}
}
