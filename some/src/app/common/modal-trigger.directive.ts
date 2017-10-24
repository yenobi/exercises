import {Directive, ElementRef, Inject, Input, OnInit} from '@angular/core';
import {JQ_TOKEN} from './jQuery.service';


@Directive({
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
  @Input('modal-trigger') public modalId: string;
  private el: HTMLElement;

  public constructor(
    @Inject(JQ_TOKEN) private $: any,
    public ref: ElementRef
  ) {
    this.el = this.ref.nativeElement;
  }

  public ngOnInit(): void {
    this.el.addEventListener('click', () => {
      this.$(`#${this.modalId}`).modal({});
    });
  }

}
