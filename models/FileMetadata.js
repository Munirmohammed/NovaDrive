class FileMetadata {
  constructor(id, name, size, url) {
    this.id = id;
    this.name = name;
    this.size = size;
    this.url = url;
    this.uploadedAt = new Date();
  }
}
module.exports = FileMetadata;