// pages/FramesPage.js
class FramesPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("/frames");
  }

  async gotoNestedFrames() {
    await this.page.goto("/nested_frames");
  }

  async gotoIframe() {
    await this.page.goto("/iframe");
  }

  getIframeEditor() {
    return this.page.frameLocator("#mce_0_ifr").locator("body");
  }

  async setIframeContent(text) {
    const editor = this.getIframeEditor();
    await editor.click();
    await editor.fill(text);
  }

  async getIframeContent() {
    const editor = this.getIframeEditor();
    return await editor.textContent();
  }

  getTopFrame() {
    return this.page.frameLocator("frame[name='frame-top']");
  }

  getLeftFrame() {
    return this.getTopFrame().frameLocator("frame[name='frame-left']");
  }

  getMiddleFrame() {
    return this.getTopFrame().frameLocator("frame[name='frame-middle']");
  }

  getRightFrame() {
    return this.getTopFrame().frameLocator("frame[name='frame-right']");
  }

  getBottomFrame() {
    return this.page.frameLocator("frame[name='frame-bottom']");
  }

  async getLeftFrameContent() {
    const leftContent = this.getLeftFrame().locator("body");
    return await leftContent.textContent();
  }

  async getMiddleFrameContent() {
    const middleContent = this.getMiddleFrame().locator("#content");
    return await middleContent.textContent();
  }

  async getBottomFrameContent() {
    const bottomContent = this.getBottomFrame().locator("body");
    return await bottomContent.textContent();
  }
}

module.exports = FramesPage;

