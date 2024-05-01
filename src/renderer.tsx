import { render } from 'preact'
import WindowComponent from "./ui/window";

const root = document.getElementById('root');

console.log("test")
console.log(root);

if (root !== null) {
    render(<WindowComponent/>, root);
}