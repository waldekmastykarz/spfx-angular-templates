import {
  BaseClientSideWebPart,
  IPropertyPaneSettings,
  IWebPartContext,
  PropertyPaneTextField
} from '@microsoft/sp-client-preview';

import styles from './AngularTemplate.module.scss';
import * as strings from 'angularTemplateStrings';
import { IAngularTemplateWebPartProps } from './IAngularTemplateWebPartProps';

import * as angular from 'angular';

export default class AngularTemplateWebPart extends BaseClientSideWebPart<IAngularTemplateWebPartProps> {
  get baseUrl(): string { return '$BASEURL$'; }

  public constructor(context: IWebPartContext) {
    super(context);
  }

  public render(): void {
    if (this.renderedOnce === false) {
      this.domElement.innerHTML = '<helloworld></helloworld>';
      const wp: AngularTemplateWebPart = this;

      angular.module('angularTemplateApp', [])
        .component('helloworld', {
          controller: function (): void {
            this.hello = wp.title;
            this.styles = styles;
          },
          controllerAs: 'vm',
          templateUrl: `${this.baseUrl}home-template.html`
        });
      angular.bootstrap(this.domElement, ['angularTemplateApp']);
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
