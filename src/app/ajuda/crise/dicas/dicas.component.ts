import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dicas',
  templateUrl: './dicas.component.html',
  styleUrls: ['./dicas.component.css']

})
export class DicasComponent {

  constructor(private modalService: NgbModal) {

  }

  public async abrirModal(modal: TemplateRef<any>) {

      await this.modalService.open(modal).result;
  }


}
