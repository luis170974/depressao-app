import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alongamento',
  templateUrl: './alongamento.component.html',
})
export class AlongamentoComponent {

  constructor(private modalService: NgbModal) {

  }

  public async abrirModal(modal: TemplateRef<any>) {

      await this.modalService.open(modal).result;
  }
  

}
