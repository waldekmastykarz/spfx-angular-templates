import {
  BaseClientSideWebPart,
  IPropertyPaneSettings,
  IWebPartContext,
  PropertyPaneTextField
} from '@microsoft/sp-client-preview';

import * as strings from 'importTemplateStrings';
import { IImportTemplateWebPartProps } from './IImportTemplateWebPartProps';

import * as angular from 'angular';
import template from './home-template';

export default class ImportTemplateWebPart extends BaseClientSideWebPart<IImportTemplateWebPartProps> {

  public constructor(context: IWebPartContext) {
    super(context);
  }

  public render(): void {
    if (this.renderedOnce === false) {
      this.domElement.innerHTML = template;
      const wp: ImportTemplateWebPart = this;

      angular.module('importTemplateApp', [])
        .controller('HomeController', function (): void {
          this.hello = wp.title;
        });
      angular.bootstrap(this.domElement, ['importTemplateApp']);
    }
  }

  protected get propertyPaneSettings(): IPropertyPaneSettings {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
