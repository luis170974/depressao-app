import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-depressao-sobre',
  templateUrl: './depressao.component.html',
  styleUrls: ['./depressao.component.css']

})
export class DepressaoComponent {

  constructor(private modalService: NgbModal) {

  }

  public async abrirModal(modal: TemplateRef<any>) {

      await this.modalService.open(modal).result;
  }


}
