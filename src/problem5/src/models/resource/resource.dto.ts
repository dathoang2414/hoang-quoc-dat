export class ResourceDTO {
  id?: number;
  name: string;
  createdAt: Date;
  description?: string;

  constructor({ id, name, createdAt, description }: ResourceDTO) {
    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
    this.description = description;
  }
}
