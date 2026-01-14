# 🚀 ngx-aespartal-ui

A professional, lightweight, and customizable Angular component library built with Atomic Design principles.

[![npm version](https://badge.fury.io/js/@aespartal%2Fmi-libreria.svg)](https://www.npmjs.com/package/@aespartal/mi-libreria)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features
- **Atomic Design**: Built from basic atoms to complex molecules.
- **Customizable**: Easy theming using CSS Variables.
- **Standalone**: Ready for modern Angular (v17+).
- **Accessible**: Built with accessibility in mind.

## 📦 Installation

```bash
npm install @aespartal/mi-libreria
```

## 🛠 Usage

### 1. Import the component

In your standalone component or module:

```typescript
import { AtomButton } from '@aespartal/mi-libreria';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AtomButton],
  template: `
    <lib-atom-button 
      label="Click Me" 
      variant="solid" 
      (clicked)="handleEvent($event)">
    </lib-atom-button>
  `
})
export class AppComponent { }
```

### 2. Theming (Custom Colors)

You can easily change the primary color of the library by overriding the CSS variables in your `styles.css`:

```css
:root {
  --aes-primary-color: #ff5722; /* Your brand color */
}
```

## 🎨 Components Available

- [x] **AtomButton**: Versatile button with solid and outline variants, plus icon support.
- [x] **AtomBadge**: Stylish badge for notifications and labels. 
- [ ] **AtomInput**: (Coming soon...)

## 📄 License

MIT © Aespartal
