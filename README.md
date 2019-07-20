# Takahiro Yoshioka's Portfolio

## Welcome!!

This is my personal portfolio for showing front and back-end development skills.

Here is the website 👉 https://friendly-keller-883efa.netlify.com

## Tech Stacks

- HTML5
- CSS3
- [SASS](https://sass-lang.com/)
  - Actually I use SCSS
- JavaScript
  - Using ES6 syntax
- [TypeScript](https://www.typescriptlang.org/index.html)
- [Babel](https://babeljs.io/)
- [Vue.js](https://vuejs.org/)
- [Nuxt.js](https://nuxtjs.org/)
  - Including Webpack Configuration

## Applications and Tools

- VS Code
- Adobe XD
- [Netlify](https://www.netlify.com/)
  - For hosting

## Development Process

### 1. Design

#### Wireframe

I would like to use a pen and a paper to write wireframes, because it can make prototypes in insanely fast speed.

#### Mockup

Used Adobe XD because it'S free personally.

### 2. Development

#### Nuxt.js

Nuxt.js is the most suitable tool for creating a portfolio website. Why I think is the following facts.

- It can generate a SEO friendly website.
- Developers can write in Vue.js which I would love (because comparison with React and Angular, its size is much lighter and easier to use!).

#### TypeScript

Reasons why I used TypeScript is not only for learning, but also it can raise these aspects.

- **Readability**: Reduce the amount of code by [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator) collaboration.
- **Integrity**: It comes from static type checking in compiling.
- **Reliability**: Same as the reason for Integrity, the static type checking makes debugging much easier than without TypeScript.

### 3. Deployment

#### Netlify

This hosting service makes deploying static websites generated by Nuxt.js in public fastly, easily, and simply. What all I need are integrating Github repository with my account, and running `nuxt generate`. So that I chose.

### 4. Performance Optimization

- **Images**: Converted .png to .jpg file to minimize file size.
- **CSS**: Delegate execution to Nuxt.js which bundles necessary css files to one html file.
- **JS**: Delegate execution to Nuxt.js which bundles necessary js files to one html file.

## If you want to do something with this...

The way is simple.

1. Get this repo by cloning

```
git clone git@github.com:Shantti-Y/Shantti-Y.github.io.git
```

2. Get all necessary dependencies

```
yarn install
```

3. Activate Nuxt.js

```
yarn dev
```