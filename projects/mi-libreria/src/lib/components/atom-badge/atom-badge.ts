import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-atom-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span [class]="['lib-badge', 'lib-badge-' + variant(), 'lib-badge-' + size()]">
      <ng-content></ng-content>
    </span>
  `,
  styleUrl: './atom-badge.css'
})
export class AtomBadge {
  variant = input<'success' | 'warning' | 'error' | 'info'>('info');
  size = input<'sm' | 'md'>('md');
}
