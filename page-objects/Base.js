class Base {

    pauseShort() {
      browser.pause(3000);
    }

    pauseMedium() {
      browser.pause(5000);
    }

    pauseLong() {
      browser.pause(10000);
    }
}

export default Base