export const getData = (id?: string) => {
  const idPrefix = id ?? '0';
  if (idPrefix.split('-').length > 3) {
    return [];
  }
  const list = [];
  for (let index = 0; index < 45; index++) {
    list.push({
      id: `${idPrefix}-${index}`,
      lable: `我是${idPrefix.split('-').length}级标题${index}`,
    });
  }
  return list;
};
