import { NgModule } from '@angular/core';

import { SkyAppConfig } from '@blackbaud/skyux-builder/runtime';

import { StacheModule, StacheConfigService } from '@blackbaud/stache';

import { BBAuth } from '@blackbaud/auth-client';
import { SkyAppBootstrapper } from '@blackbaud/skyux-builder/runtime';
const decode = require('jwt-decode');


// Specify entry components, module-level providers, etc. here.
@NgModule({
  imports: [
    StacheModule
  ],
  exports: [
    StacheModule
  ],
  providers: [
    {
      provide: StacheConfigService,
      useExisting: SkyAppConfig
    }
  ],
  entryComponents: []
})
export class AppExtrasModule { }

/* tslint:disable:max-line-length */

/* istanbul ignore next */
(SkyAppBootstrapper as any).processBootstrapConfig = () => {
  console.log('here inside boot');
  return BBAuth
    .getToken()
    .then((token: string) => {
      console.log('here 2');
      const emailDomainWhitelist: string[] = [
        'blackbaud.com',
        'blackbaud.me',
        'blackbaud.co.uk',
        'blackbaud.au',
        'microedge.com',
        'attentive.ly',
        'everydayhero.com'
      ];
      let parsedToken = decode(token);
      let domain = parsedToken.email.split('@')[1];

      if (emailDomainWhitelist.indexOf(domain) > -1) {
        console.log('exists');
        return Promise.resolve(true);
      }
      console.log('rejected');
      return false;
    });
};
/* tslint:enable:max-line-length */
