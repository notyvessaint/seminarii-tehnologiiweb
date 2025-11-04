class Software {
  constructor(nume) {
    this.nume = nume;
  }

  run() {
    console.log(`${this.nume} running`);
  }
}

class Browser extends Software {
  constructor(nume) {
    super(nume);
    this.pluginuri = [];
  }

  adaugaPlugin(plugin) {
    this.pluginuri.push(plugin);
    console.log(`Pluginul "${plugin.nume}" a fost instalat în ${this.nume}.`);
  }

  run() {
    console.log(`${this.nume} | ${this.pluginuri.length}`);
    this.pluginuri.forEach(p => console.log(` - ${p.nume}`));
  }
}

class Plugin {
  constructor(nume) {
    this.nume = nume;
  }
}

const chrome = new Browser("Google Chrome");
const adBlock = new Plugin("AdBlock");
const darkMode = new Plugin("Dark Mode");

chrome.adaugaPlugin(adBlock);
chrome.adaugaPlugin(darkMode);

chrome.run();