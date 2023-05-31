export class ProjectNotFoundError extends Error {
  constructor(
    message = 'Beim Laden dieses Projektes ist ein Fehler aufgetreten.'
  ) {
    super(message);
    this.name = 'ProjectNotFoundError';
  }
}
