import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-aplicativos',
  templateUrl: './aplicativos.component.html',
  styleUrls: ['./aplicativos.component.css']

})
export class AplicativosComponent {

  constructor(private modalService: NgbModal) {

  }

  public async abrirModal(modal: TemplateRef<any>) {

      await this.modalService.open(modal).result;
  }


}
