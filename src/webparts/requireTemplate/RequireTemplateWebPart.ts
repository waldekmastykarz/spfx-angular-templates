import {
  BaseClientSideWebPart,
  IPropertyPaneSettings,
  IWebPartContext,
  PropertyPaneTextField
} from '@microsoft/sp-client-preview';

import * as strings from 'requireTemplateStrings';
import { IRequireTemplateWebPartProps } from './IRequireTemplateWebPartProps';

import * as angular from 'angular';
import './RequireTemplate.module.css';

export default class RequireTemplateWebPart extends BaseClientSideWebPart<IRequireTemplateWebPartProps> {

  public constructor(context: IWebPartContext) {
    super(context);
  }

  public render(): void {
    if (this.renderedOnce === false) {
      this.domElement.innerHTML = require('./home-template.html');
      const wp: RequireTemplateWebPart = this;

      angular.module('requireTemplateApp', [])
        .controller('HomeController', function (): void {
          this.hello = wp.title;
        });
      angular.bootstrap(this.domElement, ['requireTemplateApp']);
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
