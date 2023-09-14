import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-meditacao',
  templateUrl: './meditacao.component.html',
})
export class MeditacaoComponent {

  constructor(private modalService: NgbModal) {

  }

  public async abrirModal(modal: TemplateRef<any>) {

    await this.modalService.open(modal).result;
    
  }

}
