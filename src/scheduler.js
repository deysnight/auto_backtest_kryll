//import sleep from './utils/sleep'
import { sleep, toFixedNumber, randomInt } from './utils/utils'
import Storage from './utils/storage'
import url from "url"
import fs from "fs"

export default class Scheduler {
    constructor(browser) {
        this.browser = browser
        this.runtime = false
        this.storage = new Storage()
        //this.data = {... this.storage.emptydata}
        //this.config = {... this.storage.emptyconfig}
    }

    /*save_state = async () => {
        fs.writeFile(process.env.DATAFILE, JSON.stringify(this.data), function writeJSON(err) {
            if (err) return console.log(err);
        });
    }

    update_config = (new_config) => {
        this.config = {... new_config}
        fs.writeFile(process.env.CONFFILE, JSON.stringify(new_config), function writeJSON(err) {
            if (err) return console.log(err);
        });
    }

    switch_state = (new_state) => {
        if (new_state === 'true') {
            this.runtime = true
        }
        else {
            this.runtime = false
        }
    }*/

    startup = async () => {
        
        /*if (fs.existsSync(process.env.DATAFILE) === false) {
            fs.writeFileSync(process.env.DATAFILE, JSON.stringify(this.data));
        }
        else {
            this.data = { ... JSON.parse(fs.readFileSync(process.env.DATAFILE)) };
            for (const currency of this.storage.ff_currencies) {
                this.storage.ff_data[currency].lastDone = this.data.freefaucet[currency].lastDone
            }
        }

        if (fs.existsSync(process.env.CONFFILE) === false) {
            fs.writeFileSync(process.env.CONFFILE, JSON.stringify(this.config));
        }
        else {
            this.config = { ... JSON.parse(fs.readFileSync(process.env.CONFFILE)) };
        }*/


        while (1) {
            console.log("runtime: ", this.runtime)
            if (this.runtime === true) {

                


               
                await sleep(5000)
            } else if (this.runtime === false) {
                await sleep(5000)
            }
        }
    }
}
