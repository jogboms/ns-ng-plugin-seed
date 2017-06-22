import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { TestComponent } from './src/test.component';

@NgModule({
  declarations: [TestComponent],
  imports: [NativeScriptModule],
  exports: [TestComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class NSNgTestModule {
}
