# Beach Haus Website

This website was built to advertise the businesses within the Beach Haus building. Built to be mobile friendly and responsive, with beer menus being pulled from the Untapped API for easy updating of rotating inventory. Embedded with a live store hosted on the Ecwid platform, management is able to easily market and sell merch and tickets to upcoming events. 

## Requirements

For development, you will only need Node.js installed on your environment.

### Node

[Node](http://nodejs.org/) is really easy to install & now includes [NPM](https://npmjs.org/). Node v18.17 or higher is required for this application.
You should be able to run the following commands after the installation procedure to check your node and npm versions. Please note that it is generally recommend to use a Node version manages, such as [NVM](https://github.com/nvm-sh/nvm), to instal and manage Node.

    $ node --version

    $ npm --version

#### Node installation on OS X

You can install Node from the downloads page on their website [here](https://nodejs.org/en)

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

---

## Install

    $ git clone https://github.com/StephenWilkens/BeachHaus.git
    $ cd BH_V8
    $ npm i

## Run Locally

    $ npm run dev

Open [http://localhost:3000](http://localhost:3000) within your browser to see the result.

## Simple build for production

    $ npm run build

## Update sources

Some packages usage might change so you should run `npm prune` & `npm install` often.
A common way to update is by doing

    $ git pull
    $ npm prune
    $ npm install

To run those 3 commands you can just do

    $ npm run pull

---

## Languages & tools

![JavaScript](https://img.shields.io/static/v1?style=for-the-badge&message=JavaScript&color=000000&logo=JavaScript&logoColor=F7DF1E&label=)


<a href="https://nextjs.org/" rel="nofollow">![Next.js](https://img.shields.io/static/v1?style=for-the-badge&message=Next.js&color=000000&logo=Next.js&logoColor=FFFFFF&label=)
</a>

<a href="https://aws.amazon.com/amplify/?gclid=CjwKCAiA2pyuBhBKEiwApLaIOznudnvPbgcoTO5nSdRUMTXg9arMKK4EgYxVeyAG0JNfrh4IJZYlJxoCo0kQAvD_BwE&trk=66d9071f-eec2-471d-9fc0-c374dbda114d&sc_channel=ps&ef_id=CjwKCAiA2pyuBhBKEiwApLaIOznudnvPbgcoTO5nSdRUMTXg9arMKK4EgYxVeyAG0JNfrh4IJZYlJxoCo0kQAvD_BwE:G:s&s_kwcid=AL!4422!3!646025317188!e!!g!!aws%20amplify!19610918335!148058249160" rel="nofollow">![AWS Amplify](https://img.shields.io/static/v1?style=for-the-badge&message=AWS+Amplify&color=000000&logo=AWS+Amplify&logoColor=FF9900&label=)
</a>

<a href="https://nodejs.org/en" rel="nofollow">![Node.js](https://img.shields.io/static/v1?style=for-the-badge&message=Node.js&color=000000&logo=Node.js&logoColor=FFFFFF&label=)
</a>

<a href="https://react.dev/" rel="nofollow">![React](https://img.shields.io/static/v1?style=for-the-badge&message=React&color=000000&logo=React&logoColor=61DAFB&label=)
</a>

<a href="https://eslint.org/" rel="nofollow">![ESLint](https://img.shields.io/static/v1?style=for-the-badge&message=ESLint&color=000000&logo=ESLint&logoColor=FFFFFF&label=)

</a>


<a href="https://prettier.io/" rel="nofollow">![Prettier](https://img.shields.io/static/v1?style=for-the-badge&message=Prettier&color=000000&logo=Prettier&logoColor=F7B93E&label=)
</a>

<a href="https://tailwindcss.com" rel="nofollow">![Tailwind CSS](https://img.shields.io/static/v1?style=for-the-badge&message=Tailwind+CSS&color=000000&logo=Tailwind+CSS&logoColor=06B6D4&label=)
</a>


