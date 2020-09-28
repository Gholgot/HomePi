interface File {
  name: string;
  size: number;
  blob: ArrayBuffer;
  updateDate?: Date;
}

export default File;