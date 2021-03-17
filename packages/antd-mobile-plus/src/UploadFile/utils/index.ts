import { FileType } from '../PropsType'
export const getTypeWithFileName = (file: File): FileType => {
    const { type } = file;
    if (/^[image\/]*$/.test(type)) {
      return 'image';
    } else if (/^[application\/]*$/.test(type)) {
      if (type.indexOf('xlsx') !== -1 || type.indexOf('xls') !== -1) {
        return 'excel';
      } else if (type.indexOf('doc') !== -1 || type.indexOf('docx') !== -1) {
        return 'doc';
      } else if (type.indexOf('ppt') !== -1 || type.indexOf('pptx') !== -1) {
        return 'ppt';
      }
    }
    return 'other';
  };