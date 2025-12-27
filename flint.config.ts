import { defineConfig } from "flint";
import {ts} from "@flint.fyi/ts"
import { browser } from "@flint.fyi/plugin-browser";

export default defineConfig({
    use: [
        {
            files: [ts.files.all],
            rules:[ts.presets.logical, browser.presets.logical]
        }
    ]
})
