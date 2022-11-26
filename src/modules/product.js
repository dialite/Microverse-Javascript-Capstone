export default class Product {
  constructor(id, name, image, likes, comments = {}) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.likes = likes;
    this.comments = comments;
  }
}