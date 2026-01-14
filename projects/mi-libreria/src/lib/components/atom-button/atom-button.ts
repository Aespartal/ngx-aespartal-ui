import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-atom-button',
  imports: [CommonModule],
  templateUrl: './atom-button.html',
  styleUrl: './atom-button.css',
})
export class AtomButton {
  /** Text to be displayed inside the button */
  @Input() label: string = 'Button';

  /** Visual variant: 'solid' | 'outline' */
  @Input() variant: 'solid' | 'outline' = 'solid';

  /** Is the button disabled? */
  @Input() disabled: boolean = false;

  /** Native type of the button */
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  /** Event emitted when clicked */
  @Output() clicked = new EventEmitter<MouseEvent>();

  onBtnClick(event: MouseEvent): void {
    if (!this.disabled) {
      this.clicked.emit(event);
    }
  }
}
