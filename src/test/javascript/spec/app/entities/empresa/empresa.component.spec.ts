import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { MitiendaTestModule } from '../../../test.module';
import { EmpresaComponent } from 'app/entities/empresa/empresa.component';
import { EmpresaService } from 'app/entities/empresa/empresa.service';
import { Empresa } from 'app/shared/model/empresa.model';

describe('Component Tests', () => {
  describe('Empresa Management Component', () => {
    let comp: EmpresaComponent;
    let fixture: ComponentFixture<EmpresaComponent>;
    let service: EmpresaService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [MitiendaTestModule],
        declarations: [EmpresaComponent]
      })
        .overrideTemplate(EmpresaComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(EmpresaComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(EmpresaService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new Empresa(123)],
            headers
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.empresas && comp.empresas[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
