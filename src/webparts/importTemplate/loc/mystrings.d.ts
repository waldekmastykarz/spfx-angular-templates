declare interface IImportTemplateStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'importTemplateStrings' {
  const strings: IImportTemplateStrings;
  export = strings;
}
