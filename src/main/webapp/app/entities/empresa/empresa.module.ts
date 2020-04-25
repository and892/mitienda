import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MitiendaSharedModule } from 'app/shared/shared.module';
import { EmpresaComponent } from './empresa.component';
import { EmpresaDetailComponent } from './empresa-detail.component';
import { EmpresaUpdateComponent } from './empresa-update.component';
import { EmpresaDeleteDialogComponent } from './empresa-delete-dialog.component';
import { empresaRoute } from './empresa.route';

@NgModule({
  imports: [MitiendaSharedModule, RouterModule.forChild(empresaRoute)],
  declarations: [EmpresaComponent, EmpresaDetailComponent, EmpresaUpdateComponent, EmpresaDeleteDialogComponent],
  entryComponents: [EmpresaDeleteDialogComponent]
})
export class MitiendaEmpresaModule {}
