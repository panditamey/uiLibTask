
# Ammy UI

Progressive ui tailwind based library.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
  - [Card Examples](#card-examples)
  - [Button Examples](#button-examples)
  - [Form Component Examples](#form-component-examples)
  - [Modal Example](#modal-example)
  - [NavBar Example](#navbar-example)
  - [Text Example](#text-example)

## Installation 

```html
npm i @panditamey/ammyui
```

### Card Examples

#### Basic Card

```html
<Card
  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  title="Card Title"
/>
```

#### Featured Card

```html
<Card
  content="This card is featured with additional information."
  featured
  title="Featured Card"
/>
```


#### Custom Image Card

```html
<Card
  content="A card with a custom image."
  imageUrl="https://example.com/image.jpg"
  title="Image Card"
/>
```

### Button Examples


#### Solid Button

```html
<Button variant="solid">
  Button
</Button>
```

#### Outline Button

```html
<Button variant="outline">
  Button
</Button>
```

#### Ghost Button

```html
<Button variant="ghost">
  Button
</Button>
```

### Form Component Examples


#### Text Input

```html
<FormComponents
  placeholder="Insert text here"
  type="text"
/>
```

#### Password Input

```html
<FormComponents
  placeholder="Password"
  type="password"
/>
```

#### Number Input

```html
<FormComponents
  placeholder="Number"
  type="number"
/>
```

#### Date Input

```html
<FormComponents
  placeholder="Date"
  type="date"
/>
```

### Modal Example


#### Open Modal

```html
<>
  <button
    className="bg-blue-500 text-white px-4 py-2"
    onClick={() => {}}
  >
    Open Modal
  </button>
  <Modal
    onClose={() => {}}
    title="Example Modal"
  >
    <p>
      This is the content of the modal.
    </p>
  </Modal>
</>
```

### NavBar Example


#### My App NavBar

```html
<NavBar
  links={[
    {
      href: '/',
      label: 'Home'
    },
    {
      href: '/about',
      label: 'About'
    },
    {
      href: '/contact',
      label: 'Contact'
    }
  ]}
  title="My App"
/>
```

### Text Example


#### Custom Text Heading

```html
<Text as="h1">
  lorum ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
</Text>
```
### TextBox

```html
<TextBox
  onChange={() => {}}
  placeholder="Enter text..."
  value=""
/>
```