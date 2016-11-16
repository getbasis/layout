/**
 * This is for the sticky header.
 */

'use strict';

import $ from 'jquery';

export default class BasisStickyHeader {
  constructor() {
    this.container = $('[data-bs-layout="container"]');
    this.header    = $('[data-bs-layout="header"]');
    this.contents  = $('[data-bs-layout="contents"]');
    this.isDisableWindowScroll = $('html').hasClass('_disable-window-scroll');

    this.setScroll();
    this.setSticky();
    this.setListener();
  }

  setListener() {
    const target = this.getScrollTarget();

    target.on('scroll resize', (event) => {
      this.setScroll();
      this.setSticky();
    });
  }

  setScroll() {
    const scroll = this.getScrollTop();
    let scrolled = 'false';

    if (scroll > 0) {
      scrolled = 'true';
    }
    this.header.attr('data-bs-header-scrolled', scrolled);
  }

  setSticky() {
    if ('sticky' !== this.header.attr('data-bs-header-layout')) {
      return;
    }

    const scroll = this.getScrollTop();
    let paddingTop = '';

    if (scroll > 0) {
      const headerHeight = this.header.outerHeight();
      paddingTop = `${headerHeight}px`;
    }
    this.contents.css('paddingTop', paddingTop);
  }

  getScrollTarget() {
    if (this.isDisableWindowScroll) {
      return this.container;
    } else {
      return $(window);
    }
  }

  getScrollTop() {
    return this.getScrollTarget().scrollTop();
  }
}
