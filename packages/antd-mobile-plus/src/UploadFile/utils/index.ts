import { FileType } from '../PropsType';

const mimeType = {
  doc: [
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    'application/vnd.ms-word.document.macroEnabled.12',
    'application/vnd.ms-word.template.macroEnabled.12',
    'application/vnd.ms-works',
  ],
  excel: [
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.ms-excel.sheet.macroEnabled.12',
    'application/vnd.ms-excel.template.macroEnabled.12',
    'application/vnd.ms-excel.addin.macroEnabled.12',
    'application/vnd.ms-excel.sheet.binary.macroEnabled.12',
  ],
  ppt: [
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.presentationml.template',
    'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    'application/vnd.ms-powerpoint.addin.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.slideshow.macroEnabled.12',
  ],
  pdf: ['application/pdf'],
};

export const getTypeWithFileName = (file: File): FileType => {
  const { type } = file;
  if (/^image\//.test(type)) {
    return 'image';
  } else if (mimeType.doc.includes(type)) {
    return 'doc';
  } else if (mimeType.excel.includes(type)) {
    return 'excel';
  } else if (mimeType.ppt.includes(type)) {
    return 'ppt';
  } else if (mimeType.pdf.includes(type)) {
    return 'pdf';
  }
  return 'other';
};
