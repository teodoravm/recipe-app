# ♿ React Accessibility Toolkit

A lightweight React component library focused on improving web accessibility with minimal developer effort.

> Empowering developers to build more inclusive and accessible web applications, following WCAG standards.

---

## ✨ Features

- ✅ **Auto-generated `alt` text** for images using AI (BLIP-based image captioning)
- 🔊 **Screen reader-friendly alerts** with `aria-live` support
- 🎯 **Keyboard navigation management** with focus utilities
- 🚀 **"Skip to content"** functionality to improve navigation
- 🧑‍🦯 **Visual elements with screen reader support**

---

## 📦 Installation

```bash
npm install react-a11y-helper

## 🔧 Components

## AccessibleImage

The `AccessibleImage` component automatically generates alt text for images to improve accessibility. If no custom alt text is provided, it fetches a description of the image using an AI model.

### Props:
- `imageUrl` (required): The URL of the image.
- `customAlt` (optional): Custom alt text.
- `width` (optional): The width of the image.
- `height` (optional): The height of the image.
- `classes` (optional): Additional CSS classes for styling.

---

## AlertPlayer

The `AlertPlayer` component announces dynamic content updates to screen readers via ARIA live regions. It ensures important information is conveyed to users in real-time.

### Props:
- `message` (required): The message to be announced.
- `ariaLive` (optional): The announcement priority (`assertive` or `polite`).
- `ariaAtomic` (optional): Controls whether the entire region should be read.
- `delay` (optional): Delay before the message is announced.
- `className` (optional): Custom CSS classes.

---

## SkipToContent

The `SkipToContent` component renders a link that allows users to skip directly to the main content, improving navigation for keyboard and screen reader users.

### Props:
- `targetElementId` (required): The ID of the content to focus.
- `label` (optional): Text for the link.
- `classess` (optional): Custom CSS classes.

---

## SRVisual

The `SRVisual` component makes content visible only to screen readers. It provides extra descriptions or context that are hidden visually but still accessible for assistive technologies.

### Props:
- `description` (required): Text description for screen readers.
- `children` (optional): Optional content to be wrapped.

---

## FocusManager

The `FocusManager` component manages focus within a defined scope, improving keyboard navigation and accessibility. It automatically focuses on elements as required, and handles focus when navigating inside the component.

### Props:
- `children` (required): The content to be managed by the FocusManager.
- `fallbackElement` (required): The ID of the fallback element to focus.
- `focusRectStyle` (optional): Custom style for the focus rectangle.
- `classes` (optional): Additional CSS classes.

---

