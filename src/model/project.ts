import { ProjectStatus } from "./project-status-enum.js";

export class Project {
	constructor(
		public id: string,
		public title: string,
		public description: string,
		public people: number,
		public status: ProjectStatus = ProjectStatus.Active
	) {}
}
