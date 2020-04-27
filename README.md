<p align="center">
    <img width="500" src="./sbc-logo-500.png" alt="Logo" />
</p>

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

If you've found an issue or you have feature request - <a href="https://github.com/storyblok-components/storyblok-components/issues/new">open an issue</a> or look if it was <a href="https://github.com/storyblok-components/components/issues/">already created</a>.

## Contents

- [How to contribute](#how-to-contribute)
  - [Roadmap](#roadmap)

---

# How to contribute

1. Clone repository:
```
git clone git@github.com:storyblok-components/components.git
```
2. Install dependencies by running `yarn`
3. Install `sb-mig` CLI globally
```
npm install --global sb-mig@latest
```
4. Install `create-component` plugin for `sb-mig`
```
sb-mig plugin:install create-component
```
5. Run
```
sb-mig create-component name-of-the-component
```
6. It will create folder `name-of-the-component` inside `@storyblok-components` folder. Content of the folder: 
```
content
...
```

---

1. When React and Storyblok Schema part are created, and ready to release:
- a. `git checkout -b name-of-branch` to create branch
- a. run `git commit -m ""`
- b. it will prompt couple question to be compliant with conventional commits rules
- c. 
```
git push
```
- d. wait for code review

---

After successfull code review and merge to master, it will be automatically build and deploy to npm. You can install your new component in other projects like:
```
npm install @storyblok-components/name-of-the-component
```
or with yarn
```
yarn add @storyblok-components/name-of-the-component
```




## Roadmap

- [ ] ?


## Contibutors
- Special thanks to Pedro Sousa for lerna magic.
