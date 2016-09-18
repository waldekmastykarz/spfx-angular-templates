declare interface IRequireTemplateStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'requireTemplateStrings' {
  const strings: IRequireTemplateStrings;
  export = strings;
}
