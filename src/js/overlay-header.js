/**
 * This is for the overlay header.
 */

'use strict';

import $ from 'jquery';

export default class BasisOverlayHeader {
  constructor(params) {
    this.params = $.extend({
      container   : '._l-container',
      header      : '._l-header',
      sticky      : 'data-bs-header-sticky',
      scrolled    : 'data-bs-header-scrolled'
    }, params);
    this.container = $(this.params.container);
    this.header    = $(this.params.header);
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

    if (scroll > 0) {
      this.header.attr(this.params.scrolled, 'true');
    } else {
      this.header.attr(this.params.scrolled, 'false');
    }
  }

  setSticky() {
    const scroll = this.getScrollTop();

    if ('true' !== this.header.attr(this.params.sticky)) {
      return;
    }

    const headerHeight = this.header.outerHeight();
    if (scroll > 0) {
      this.header.next().css('paddingTop', headerHeight + 'px');
    } else {
      this.header.next().css('paddingTop', '');
    }
  }

  getScrollTarget() {
    if (this.isDisableWindowScroll) {
      return this.container;
    } else {
      return $(window);
    }
  }

  getScrollTop() {
    const target = this.getScrollTarget();
    return target.scrollTop();
  }
}
