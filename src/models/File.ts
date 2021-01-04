interface FileModel {
  id: string,
  name: string;
  size: number;
  contentType: string;
  folderId?: string;
  creationDate: Date,
  updateDate: Date
}

export default FileModel;