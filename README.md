# primereact-enhanced-components
Enhanced and reusable PrimeReact components for building consistent, scalable React forms using TypeScript, TailwindCSS, and SCSS.

A clean and flexible collection of custom-wrapped form inputs built on top of PrimeReact’s powerful UI components.
This library provides standardized, enterprise-quality form controls with:

✔ Unified labels

✔ Required indicators

✔ Error state styling

✔ Helper text

✔ TailwindCSS styling support

✔ Strong TypeScript typings

✔ Flexible props passthrough

✔ SCSS theming compatibility

Ideal for teams who want consistent and maintainable form UI without rewriting boilerplate for every input component.

----------------------------------------------------------------------------------------------------------------------

✨ Features

🚀 Fully typed React + TypeScript components

🎨 TailwindCSS + SCSS styling for fast customization

🔄 Complete passthrough of PrimeReact props

🔌 Drop-in replacements for native PrimeReact inputs

♻️ Reusable and scalable component architecture

⚡ Optimized for enterprise-quality React forms

📦 Components Included

This library currently includes wrapped versions of commonly used PrimeReact input components:

| Component          | PrimeReact Base | Description                                 |
|--------------------|------------------|---------------------------------------------|
| **TextInput**      | InputText        | Text field with label, errors, helper text  |
| **TextareaInput**  | InputTextarea    | Multiline text area with resize support     |
| **NumberInput**    | InputNumber      | Numeric input with formatting support       |
| **DropdownInput**  | Dropdown         | Select dropdown with label + validation     |
| **MultiSelectInput** | MultiSelect    | Multi-value selection control               |
| **AutoCompleteInput** | AutoComplete  | Autocomplete field with async search        |
| **CalendarInput**  | Calendar         | Date picker input with label + error UI     |


More components coming soon: PasswordInput, ToggleInput, RadioGroupInput, CheckboxInput, FileUploadInput…

-----------------------------------------------------------------------------------------

## 📁 Folder Structure

Example recommended structure:

```
src/
└── components/
    ├── TextInput/
    │   ├── TextInput.tsx
    │   └── text-input.scss
    ├── TextareaInput/
    │   └── TextareaInput.tsx
    ├── NumberInput/
    │   └── NumberInput.tsx
    ├── DropdownInput/
    │   └── DropdownInput.tsx
    ├── MultiSelectInput/
    │   └── MultiSelectInput.tsx
    ├── AutoCompleteInput/
    │   └── AutoCompleteInput.tsx
    └── CalendarInput/
        └── CalendarInput.tsx
```


--------------------------------------

📦 Installation

Since this library is not published as an npm package yet, you can install it manually by copying the components into your project.

1️⃣ Copy the Components

Clone or download the repository:

git clone https://github.com/<your-username>/primereact-enhanced-components


Then copy the components you need into your project:

your-project/
└── src/
    └── components/
        └── <copied-components-here>


Each custom component comes with its own .tsx file and optional .scss styling.
Make sure to copy both the component and its SCSS file.

2️⃣ Install Required Dependencies

Your project must have the following packages installed:

PrimeReact + PrimeIcons
npm install primereact primeicons

3️⃣ Include a PrimeReact Theme

PrimeReact requires a theme CSS file.
Choose one from PrimeReact (e.g., Lara, Material, etc.):

Example (Lara Light):

import "primereact/resources/themes/lara-light-blue/theme.css";


You should also include core styles:

import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

4️⃣ Make Sure TailwindCSS Is Installed

If your project uses TailwindCSS:

npm install -D tailwindcss postcss autoprefixer


Initialize Tailwind (if not already):

npx tailwindcss init -p


Ensure Tailwind directives exist in your global CSS:

@tailwind base;
@tailwind components;
@tailwind utilities;

5️⃣ Enable SCSS Support

These components use .scss files for styling.

If your project does not support Sass yet:

npm install sass

6️⃣ Import Your Copied Components

Example:

import TextInput from "@/components/TextInput/TextInput";
import DropdownInput from "@/components/DropdownInput/DropdownInput";


Use them like any standard form input component.

✔️ You're Ready to Use the Components!

Once dependencies and styles are set up, the components work instantly in your React + TypeScript app.
---------------------------------------------------------

🚀 Usage Example
TextInput Example
import React, { useState } from "react";
import TextInput from "./components/TextInput/TextInput";

const Example = () => {
  const [value, setValue] = useState("");

  return (
    <TextInput
      id="name"
      label="Name"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Enter your name"
      required
      helperText="This field is required"
    />
  );
};

export default Example;

---------------------------------------

🧩 Consistent Props Across All Inputs

Each component supports:

label

required

helperText

error

containerClassName

labelClassName

helperClassName

Full passthrough of PrimeReact props

--------------------------------------------

🎨 Styling
TailwindCSS

Every component uses Tailwind classes for spacing, layout, and error colors.

SCSS

Custom styling is added through:

text-input.scss


You can override theme variables:

.input-text__label {
  color: var(--color-text-input-label);
}

-------------------------------------------

🛠 Development

Run the development server (if using Vite):

npm run dev


Build components:

npm run build

----------------------------

🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to open a PR or issue.

--------------------------------------

📝 License

This repository is licensed under the MIT License.
