# NobodysFool
Tailwindcss practices.
This is the way we can use css framework "Tailwindcss" and really thinks that this would help you a lot.
Stay tuned!

1. First run "npm init -y" in project's terminal. This would generate an empty package.json file.
2. Run "npm install tailwindcss" in project terminal. This will install tailwindcss ( packages ) and put this in package.json file.
3. Add following to your css file

    @tailwind base;

    @tailwind components;

    @tailwind utilities;
    
4. Run "npx tailwindcss init" in project terminal.
5. Add the following with relative path to you project package.json file "scripts".

   "build:css": "tailwindcss build src/style.css -o dist/tailwind.css"
   
6. Run "yarn build:css". If worked that's cool. Else first run "yarn" then run "yarn build:css"

For scss use please visit: 
https://medium.com/@adebola.niran/how-to-setup-tailwindcss-with-create-react-app-and-s-b7243607c3e7
    
Thanks
