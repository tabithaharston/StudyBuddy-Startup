"I love web programming"
## Startup React P2: Reactivity
- `useState` stores data. Calling the setter makes React re-render the page.
- Controlled inputs use `value={x}` and `onChange={(e) => setX(e.target.value)}`.
- `e.preventDefault()` stops a form from reloading the page.
- Make a new array (`[...list, newItem]`) instead of changing the old one, or React won't re-render.
- `.map()` builds a list of elements, and each one needs a unique `key`.
- `.filter()` makes a new list without certain items (used for Join and RSVP).
- `useEffect` with `[]` runs once when the component loads. Return a cleanup function to stop timers.
- Lifting state up: `userName` lives in `App` so the nav can change when someone logs in.
- JSX comments need curly braces: `{/* comment */}`.

## Simon React P2: Reactivity

- `useState` holds values. When they change, the component re-renders.
- `useEffect` runs code after render. With `[]` it runs once on load, which is good for fetching data.
- Lifting state up: login state lives in `App`. Login updates it through an `onAuthChange` callback.
- `{condition && <Component />}` shows a component only when the condition is true.
- Scores are saved in localStorage for now. Fake player scores come from a `setInterval` until WebSocket is added.
- Run with `npm run dev`, not Live Server. Stop it with Ctrl+C.
- Deploy: `./deployReact.sh -k <pem> -h <domain or IP> -s simon`. It builds with Vite and copies `dist` to the server.
- If the site times out, check that the EC2 instance is running and the DNS points to the right IP.
- If git push is rejected, run `git pull` first.

## React Phase 1: Routing
### What I learned
- React apps only have ONE HTML page. React swaps the content inside `<div id="root">`.
- The header and footer go in `app.jsx` once instead of on every page.
- Each page is its own component in its own folder with its own CSS.
- In React, `class` becomes `className` and `for` becomes `htmlFor`.
- `NavLink` replaces `<a href>` so pages switch without reloading.
### Things I ran into
- I had to run `npm install` before `npm run dev` would work.
- `node_modules` needs to be in `.gitignore`.
- If I typed `.html` in the URL, I saw my old page instead of the React one.
### Deploy command
`bash deployReact.sh -k /c/Users/tabby/Documents/production.pem -h startup.studybuddy.click -s startup`

## CSS
### What I learned
- `@import` for fonts must be the very first line in the CSS file, or the browser ignores it.
- CSS doesn't show errors. A typo or wrong bracket silently breaks the rules after it, so I use dev tools to check what's applied.
- Order matters: later rules win. My stylesheet goes after Bootstrap, and media queries go at the bottom of the file.
- Specificity goes element < class < ID.
- Selector types: element (`header`), class (`.dashboard`), ID (`#userName`), pseudo (`:hover`, `:nth-child`), attribute (`input[type="radio"]`).
- Combinators: space = any descendant, `>` = direct child, `+` = next sibling, `~` = any later sibling.
### Layout
- Flexbox page: `body { display: flex; flex-direction: column; min-height: 100vh; }` plus `main { flex: 1; }` keeps the footer at the bottom.
- Grid: `repeat(auto-fit, minmax(300px, 1fr))` makes cards wrap on their own as the window shrinks.
- Media queries like `@media (max-width: 600px) { ... }` apply CSS only on small screens.
- Test phone sizes in dev tools: F12, then the phone icon.
### Images
- `img { max-width: 100%; }` stops images from overflowing on phones.
- A `width="500"` in the HTML locks an image's size. Remove it and size the image in CSS instead.
- `width: 100%` plus `object-fit: cover` makes a full-width banner without squishing the photo.
### Deploying
- Saving only changes my laptop. `git push` updates GitHub. The deploy script updates the live site.
- `127.0.0.1:5500` is Live Server on my computer only. Never submit it.
- After deploying, hard-refresh with Ctrl + Shift + R.
- Run the deploy script from inside the project folder, since it copies everything in that folder.
- Deploy using `startup.studybuddy.click` as the host, because `studybuddy.click` alone doesn't resolve.
### Still to do
- [ ] Replace the random picsum photo with a real study photo
- [ ] Add Bootstrap classes to `index.html` and `session.html`
### Deploy command
```
./deployFiles.sh -k /c/Users/tabby/Documents/production.pem -h startup.studybuddy.click -s startup
```

## Deliverable Notes — Startup HTML
### What I did

- Made three pages: index.html, dashboard.html, and session.html, linked with a nav bar
- Used header, nav, main, section, and footer tags
- Added placeholders for login, database data, and realtime updates
- Added images and a link to my GitHub repo

### Things I learned

- Typing a file path wrong on GitHub can break things and cause git pull to fail
- Had to trust my folder in VS Code before Git would work
- I struggle with the syntaxing of HTML. I need to not procrastinate in order to have more time to complete the assignments and be sure that I am coding them correctly.

### Commands I want to remember
```
git pull
git add .
git commit -m "message"
git push
./deployFiles.sh -k <pemkey> -h studybuddy.click -s startup
```
