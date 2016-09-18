declare interface IInlineTemplateStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'inlineTemplateStrings' {
  const strings: IInlineTemplateStrings;
  export = strings;
}
