import { Component, Input, Output, EventEmitter, ElementRef, contentChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-atom-button',
  standalone: true,
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

  /** Size of the button */
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  /** Event emitted when clicked */
  @Output() clicked = new EventEmitter<MouseEvent>();

  /** Template reference for left icon */
  readonly leftIcon = contentChild<ElementRef>('leftIcon');

  /** Template reference for right icon */
  readonly rightIcon = contentChild<ElementRef>('rightIcon');

  onBtnClick(event: MouseEvent): void {
    if (!this.disabled) {
      this.clicked.emit(event);
    }
  }
}
