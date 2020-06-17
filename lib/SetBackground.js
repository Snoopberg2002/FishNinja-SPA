import { capitalize, round } from "lodash";

export default function SetBackground(target) {
    let images = ["https://i.imgur.com/j6E0P1g.jpg", "https://i.imgur.com/bYXej7p.jpg", "https://i.imgur.com/AWmoshp.jpg", "https://i.imgur.com/oWbFIt6.jpg", "https://i.imgur.com/4dzPl4l.jpg", "https://i.imgur.com/KZtqtGw.jpg", "https://i.imgur.com/tY03gIZ.jpg", "https://i.imgur.com/vmAIoEI.jpg", "https://i.imgur.com/oWp6zGO.jpg", "https://i.imgur.com/OYgioQA.jpg", "https://i.imgur.com/EnllYv2.jpg"]

    let i = round(Math.random() * 14) % 12;
    target.style.backgroundImage = `url("${images[i]}")`;
}