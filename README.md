# 🚀 ngx-aespartal-ui

A professional, lightweight, and customizable Angular component library built with Atomic Design principles.

[![npm version](https://badge.fury.io/js/@aespartal%2Fmi-libreria.svg)](https://www.npmjs.com/package/@aespartal/mi-libreria)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Angular](https://img.shields.io/badge/Angular-21.0.0-dd0031.svg)](https://angular.io/)

## ✨ Features

- 🚀 **Standalone Components** - No NgModule required
- 🎨 **Fully Customizable** - CSS Variables for theming
- ⚛️ **Atomic Design** - Built from basic atoms to complex molecules
- ♿ **Accessible** - ARIA attributes included
- 📦 **Tree-shakeable** - Import only what you need
- 💪 **TypeScript** - Full type safety

---

## 📦 Installation

Install the library via npm:

```bash
npm install @aespartal/mi-libreria
```

---

## 🚀 Quick Start

### Using Standalone Components (Angular 14+)

Import the component directly in your component or standalone app:

```typescript
import { Component } from '@angular/core';
import { AtomButton } from '@aespartal/mi-libreria';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AtomButton],
  template: `
    <lib-atom-button 
      label="Click Me!" 
      (clicked)="handleClick($event)">
    </lib-atom-button>
  `
})
export class AppComponent {
  handleClick(event: MouseEvent) {
    console.log('Button clicked!', event);
  }
}
```

### Using with NgModule (Legacy)

```typescript
import { NgModule } from '@angular/core';
import { AtomButton } from '@aespartal/mi-libreria';

@NgModule({
  imports: [AtomButton],
  // ... rest of your module configuration
})
export class AppModule { }
```

---

## 📖 Usage Examples

### Basic Button

```html
<lib-atom-button label="Click Me"></lib-atom-button>
```

### Outline Variant

```html
<lib-atom-button 
  label="Outlined" 
  variant="outline">
</lib-atom-button>
```

### Disabled State

```html
<lib-atom-button 
  label="Disabled" 
  [disabled]="true">
</lib-atom-button>
```

### Submit Button

```html
<form (ngSubmit)="onSubmit()">
  <lib-atom-button 
    label="Submit Form" 
    type="submit">
  </lib-atom-button>
</form>
```

### Button with Left Icon

```html
<lib-atom-button label="Download">
  <svg leftIcon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
</lib-atom-button>
```

### Button with Right Icon

```html
<lib-atom-button label="Next">
  <svg rightIcon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
  </svg>
</lib-atom-button>
```

### Button with Both Icons

```html
<lib-atom-button label="Transfer">
  <svg leftIcon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
  </svg>
  <svg rightIcon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
</lib-atom-button>
```

### Complete Example with Event Handling

```typescript
import { Component } from '@angular/core';
import { AtomButton } from '@aespartal/mi-libreria';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [AtomButton],
  template: `
    <div class="button-group">
      <lib-atom-button 
        label="Save" 
        variant="solid"
        (clicked)="onSave($event)">
      </lib-atom-button>
      
      <lib-atom-button 
        label="Cancel" 
        variant="outline"
        (clicked)="onCancel($event)">
      </lib-atom-button>
    </div>
  `,
  styles: [`
    .button-group {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class DemoComponent {
  onSave(event: MouseEvent) {
    console.log('Saving...', event);
  }
  
  onCancel(event: MouseEvent) {
    console.log('Cancelled', event);
  }
}
```

---

## 📚 API Reference

### AtomButton Component

**Selector:** `lib-atom-button`

#### Inputs

| Property   | Type                           | Default    | Description                                  |
|------------|--------------------------------|------------|----------------------------------------------|
| `label`    | `string`                       | `'Button'` | Text to be displayed inside the button       |
| `variant`  | `'solid' \| 'outline'`         | `'solid'`  | Visual style variant of the button           |
| `disabled` | `boolean`                      | `false`    | Whether the button is disabled               |
| `type`     | `'button' \| 'submit' \| 'reset'` | `'button'` | Native HTML button type attribute            |

#### Outputs

| Event     | Type                  | Description                                |
|-----------|-----------------------|--------------------------------------------|
| `clicked` | `EventEmitter<MouseEvent>` | Emitted when the button is clicked (not emitted when disabled) |

#### Content Projection

| Selector     | Description                                    |
|--------------|------------------------------------------------|
| `[leftIcon]` | Content projected to the left of the label     |
| `[rightIcon]`| Content projected to the right of the label    |

**Example:**

```html
<lib-atom-button label="My Button">
  <i leftIcon class="icon-search"></i>
</lib-atom-button>
```

---

## 🎨 Theming

The `AtomButton` component is fully customizable through CSS Variables. This allows you to integrate it seamlessly into your design system.

### Available CSS Variables

| Variable              | Default Value | Description                    |
|-----------------------|---------------|--------------------------------|
| `--aes-primary-color` | `#3b82f6`     | Primary color for solid buttons|
| `--btn-bg`            | `var(--aes-primary-color)` | Button background color |
| `--btn-color`         | `#ffffff`     | Button text color              |
| `--btn-padding`       | `0.5rem 1rem` | Button padding                 |
| `--btn-radius`        | `4px`         | Button border radius           |

### Customization Examples

#### Global Theming

Set CSS Variables globally in your `styles.css` or `styles.scss`:

```css
:root {
  --aes-primary-color: #10b981;  /* Green theme */
}
```

#### Component-Level Theming

Override variables for specific instances:

```html
<lib-atom-button 
  label="Custom Button"
  style="--btn-bg: #ef4444; --btn-color: #ffffff; --btn-radius: 12px;">
</lib-atom-button>
```

#### Advanced Theming with CSS Classes

```css
.lib-atom-button.success {
  --btn-bg: #10b981;
}

.lib-atom-button.danger {
  --btn-bg: #ef4444;
}

.lib-atom-button.large {
  --btn-padding: 1rem 2rem;
}
```

```html
<lib-atom-button 
  label="Success" 
  class="success">
</lib-atom-button>

<lib-atom-button 
  label="Delete" 
  class="danger large">
</lib-atom-button>
```

#### Dark Mode Support

```css
@media (prefers-color-scheme: dark) {
  :root {
    --aes-primary-color: #60a5fa;
  }
}
```

---

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm 10+
- Angular CLI 21+

### Setup

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to the project
cd mi-libreria-workspace

# Install dependencies
npm install

# Build the library
npm run build

# Run Storybook for development
npm run storybook
```

### Building the Library

```bash
npm run build
```

The built library will be in the `dist/mi-libreria` folder.

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📞 Support

If you have any questions or need help, please open an issue in the GitHub repository.

---

## 🗺️ Roadmap

- [x] **AtomButton**: Versatile button with solid and outline variants, plus icon support.
- [x] **AtomBadge**: Stylish badge for notifications and labels.
- [ ] **AtomInput**: (Coming soon...)
- [ ] More button variants (ghost, link, etc.)
- [ ] Size variants (small, medium, large)
- [ ] Loading state support
- [ ] Full accessibility audit

---

**Made with ❤️ by Aespartal**
