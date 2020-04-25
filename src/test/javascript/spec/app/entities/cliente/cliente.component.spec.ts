import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { MitiendaTestModule } from '../../../test.module';
import { ClienteComponent } from 'app/entities/cliente/cliente.component';
import { ClienteService } from 'app/entities/cliente/cliente.service';
import { Cliente } from 'app/shared/model/cliente.model';

describe('Component Tests', () => {
  describe('Cliente Management Component', () => {
    let comp: ClienteComponent;
    let fixture: ComponentFixture<ClienteComponent>;
    let service: ClienteService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [MitiendaTestModule],
        declarations: [ClienteComponent]
      })
        .overrideTemplate(ClienteComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(ClienteComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(ClienteService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new Cliente(123)],
            headers
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.clientes && comp.clientes[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
