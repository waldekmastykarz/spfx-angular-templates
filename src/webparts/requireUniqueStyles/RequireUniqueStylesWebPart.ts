import {
  BaseClientSideWebPart,
  IPropertyPaneSettings,
  IWebPartContext,
  PropertyPaneTextField
} from '@microsoft/sp-client-preview';

import styles from './RequireUniqueStyles.module.scss';
import * as strings from 'requireUniqueStylesStrings';
import { IRequireUniqueStylesWebPartProps } from './IRequireUniqueStylesWebPartProps';

import * as angular from 'angular';

export default class RequireUniqueStylesWebPart extends BaseClientSideWebPart<IRequireUniqueStylesWebPartProps> {

  public constructor(context: IWebPartContext) {
    super(context);
  }

  public render(): void {
    if (this.renderedOnce === false) {
      this.domElement.innerHTML = require('./home-template.html');
      const wp: RequireUniqueStylesWebPart = this;

      angular.module('requireUniqueStylesApp', [])
        .controller('HomeController', function (): void {
          this.hello = wp.title;
          this.styles = styles;
        });
      angular.bootstrap(this.domElement, ['requireUniqueStylesApp']);
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
