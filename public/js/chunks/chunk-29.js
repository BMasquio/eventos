webpackJsonp([29], {
    '86jz': function(t, i, e) {
        ;(function(i) {
            var e
            ;(e = function() {
                'use strict'
                'undefined' != typeof window
                    ? window
                    : void 0 !== i || ('undefined' != typeof self && self)
                var t,
                    e = ((function(t, i) {
                        var e
                        ;(e = function() {
                            return {
                                drawImage: function(t, i, e, a, n, o) {
                                    if (!/^[1-8]$/.test(i))
                                        throw new Error(
                                            'orientation should be [1-8]',
                                        )
                                    null == e && (e = 0),
                                        null == a && (a = 0),
                                        null == n && (n = t.width),
                                        null == o && (o = t.height)
                                    var s = document.createElement('canvas'),
                                        r = s.getContext('2d')
                                    switch (
                                        ((s.width = n),
                                        (s.height = o),
                                        r.save(),
                                        +i)
                                    ) {
                                        case 1:
                                            break
                                        case 2:
                                            r.translate(n, 0), r.scale(-1, 1)
                                            break
                                        case 3:
                                            r.translate(n, o),
                                                r.rotate(1 * Math.PI)
                                            break
                                        case 4:
                                            r.translate(0, o), r.scale(1, -1)
                                            break
                                        case 5:
                                            ;(s.width = o),
                                                (s.height = n),
                                                r.rotate(0.5 * Math.PI),
                                                r.scale(1, -1)
                                            break
                                        case 6:
                                            ;(s.width = o),
                                                (s.height = n),
                                                r.rotate(0.5 * Math.PI),
                                                r.translate(0, -o)
                                            break
                                        case 7:
                                            ;(s.width = o),
                                                (s.height = n),
                                                r.rotate(1.5 * Math.PI),
                                                r.translate(-n, o),
                                                r.scale(1, -1)
                                            break
                                        case 8:
                                            ;(s.width = o),
                                                (s.height = n),
                                                r.translate(0, n),
                                                r.rotate(1.5 * Math.PI)
                                    }
                                    return (
                                        r.drawImage(t, e, a, n, o),
                                        r.restore(),
                                        s
                                    )
                                },
                            }
                        }),
                            (t.exports = e())
                    })((t = { exports: {} }), t.exports),
                    t.exports),
                    a = {
                        onePointCoord: function(t, i) {
                            var e = i.canvas,
                                a = i.quality,
                                n = e.getBoundingClientRect(),
                                o = t.clientX,
                                s = t.clientY
                            return { x: (o - n.left) * a, y: (s - n.top) * a }
                        },
                        getPointerCoords: function(t, i) {
                            var e = void 0
                            return (
                                (e =
                                    t.touches && t.touches[0]
                                        ? t.touches[0]
                                        : t.changedTouches &&
                                          t.changedTouches[0]
                                        ? t.changedTouches[0]
                                        : t),
                                this.onePointCoord(e, i)
                            )
                        },
                        getPinchDistance: function(t, i) {
                            var e = t.touches[0],
                                a = t.touches[1],
                                n = this.onePointCoord(e, i),
                                o = this.onePointCoord(a, i)
                            return Math.sqrt(
                                Math.pow(n.x - o.x, 2) + Math.pow(n.y - o.y, 2),
                            )
                        },
                        getPinchCenterCoord: function(t, i) {
                            var e = t.touches[0],
                                a = t.touches[1],
                                n = this.onePointCoord(e, i),
                                o = this.onePointCoord(a, i)
                            return { x: (n.x + o.x) / 2, y: (n.y + o.y) / 2 }
                        },
                        imageLoaded: function(t) {
                            return t.complete && 0 !== t.naturalWidth
                        },
                        rAFPolyfill: function() {
                            if (
                                'undefined' != typeof document &&
                                'undefined' != typeof window
                            ) {
                                for (
                                    var t = 0, i = ['webkit', 'moz'], e = 0;
                                    e < i.length &&
                                    !window.requestAnimationFrame;
                                    ++e
                                )
                                    (window.requestAnimationFrame =
                                        window[i[e] + 'RequestAnimationFrame']),
                                        (window.cancelAnimationFrame =
                                            window[
                                                i[e] + 'CancelAnimationFrame'
                                            ] ||
                                            window[
                                                i[e] +
                                                    'CancelRequestAnimationFrame'
                                            ])
                                window.requestAnimationFrame ||
                                    (window.requestAnimationFrame = function(
                                        i,
                                    ) {
                                        var e = new Date().getTime(),
                                            a = Math.max(0, 16.7 - (e - t)),
                                            n = window.setTimeout(function() {
                                                i(e + a)
                                            }, a)
                                        return (t = e + a), n
                                    }),
                                    window.cancelAnimationFrame ||
                                        (window.cancelAnimationFrame = function(
                                            t,
                                        ) {
                                            clearTimeout(t)
                                        }),
                                    (Array.isArray = function(t) {
                                        return (
                                            '[object Array]' ===
                                            Object.prototype.toString.call(t)
                                        )
                                    })
                            }
                        },
                        toBlobPolyfill: function() {
                            var t, i, e
                            'undefined' != typeof document &&
                                'undefined' != typeof window &&
                                HTMLCanvasElement &&
                                (HTMLCanvasElement.prototype.toBlob ||
                                    Object.defineProperty(
                                        HTMLCanvasElement.prototype,
                                        'toBlob',
                                        {
                                            value: function(a, n, o) {
                                                ;(t = atob(
                                                    this.toDataURL(n, o).split(
                                                        ',',
                                                    )[1],
                                                )),
                                                    (i = t.length),
                                                    (e = new Uint8Array(i))
                                                for (var s = 0; s < i; s++)
                                                    e[s] = t.charCodeAt(s)
                                                a(
                                                    new Blob([e], {
                                                        type: n || 'image/png',
                                                    }),
                                                )
                                            },
                                        },
                                    ))
                        },
                        eventHasFile: function(t) {
                            var i =
                                t.dataTransfer || t.originalEvent.dataTransfer
                            if (i.types)
                                for (var e = 0, a = i.types.length; e < a; e++)
                                    if ('Files' == i.types[e]) return !0
                            return !1
                        },
                        getFileOrientation: function(t) {
                            var i = new DataView(t)
                            if (65496 != i.getUint16(0, !1)) return -2
                            for (var e = i.byteLength, a = 2; a < e; ) {
                                var n = i.getUint16(a, !1)
                                if (((a += 2), 65505 == n)) {
                                    if (1165519206 != i.getUint32((a += 2), !1))
                                        return -1
                                    var o = 18761 == i.getUint16((a += 6), !1)
                                    a += i.getUint32(a + 4, o)
                                    var s = i.getUint16(a, o)
                                    a += 2
                                    for (var r = 0; r < s; r++)
                                        if (274 == i.getUint16(a + 12 * r, o))
                                            return i.getUint16(
                                                a + 12 * r + 8,
                                                o,
                                            )
                                } else {
                                    if (65280 != (65280 & n)) break
                                    a += i.getUint16(a, !1)
                                }
                            }
                            return -1
                        },
                        parseDataUrl: function(t) {
                            return /^data:([^;]+)?(;base64)?,(.*)/gim.exec(t)[3]
                        },
                        base64ToArrayBuffer: function(t) {
                            for (
                                var i = atob(t),
                                    e = i.length,
                                    a = new Uint8Array(e),
                                    n = 0;
                                n < e;
                                n++
                            )
                                a[n] = i.charCodeAt(n)
                            return a.buffer
                        },
                        getRotatedImage: function(t, i) {
                            var a = e.drawImage(t, i),
                                n = new Image()
                            return (n.src = a.toDataURL()), n
                        },
                        flipX: function(t) {
                            return t % 2 == 0 ? t - 1 : t + 1
                        },
                        flipY: function(t) {
                            return {
                                1: 4,
                                4: 1,
                                2: 3,
                                3: 2,
                                5: 8,
                                8: 5,
                                6: 7,
                                7: 6,
                            }[t]
                        },
                        rotate90: function(t) {
                            return {
                                1: 6,
                                2: 7,
                                3: 8,
                                4: 5,
                                5: 2,
                                6: 3,
                                7: 4,
                                8: 1,
                            }[t]
                        },
                        numberValid: function(t) {
                            return 'number' == typeof t && !isNaN(t)
                        },
                    }
                Number.isInteger =
                    Number.isInteger ||
                    function(t) {
                        return (
                            'number' == typeof t &&
                            isFinite(t) &&
                            Math.floor(t) === t
                        )
                    }
                var n = String
                'undefined' != typeof window &&
                    window.Image &&
                    (n = [String, Image])
                var o = {
                        value: Object,
                        width: {
                            type: Number,
                            default: 200,
                            validator: function(t) {
                                return t > 0
                            },
                        },
                        height: {
                            type: Number,
                            default: 200,
                            validator: function(t) {
                                return t > 0
                            },
                        },
                        placeholder: {
                            type: String,
                            default: 'Choose an image',
                        },
                        placeholderColor: { default: '#606060' },
                        placeholderFontSize: {
                            type: Number,
                            default: 0,
                            validator: function(t) {
                                return t >= 0
                            },
                        },
                        canvasColor: { default: 'transparent' },
                        quality: {
                            type: Number,
                            default: 2,
                            validator: function(t) {
                                return t > 0
                            },
                        },
                        zoomSpeed: {
                            default: 3,
                            type: Number,
                            validator: function(t) {
                                return t > 0
                            },
                        },
                        accept: String,
                        fileSizeLimit: {
                            type: Number,
                            default: 0,
                            validator: function(t) {
                                return t >= 0
                            },
                        },
                        disabled: Boolean,
                        disableDragAndDrop: Boolean,
                        disableClickToChoose: Boolean,
                        disableDragToMove: Boolean,
                        disableScrollToZoom: Boolean,
                        disablePinchToZoom: Boolean,
                        disableRotation: Boolean,
                        reverseScrollToZoom: Boolean,
                        preventWhiteSpace: Boolean,
                        showRemoveButton: { type: Boolean, default: !0 },
                        removeButtonColor: { type: String, default: 'red' },
                        removeButtonSize: { type: Number },
                        initialImage: n,
                        initialSize: {
                            type: String,
                            default: 'cover',
                            validator: function(t) {
                                return (
                                    'cover' === t ||
                                    'contain' === t ||
                                    'natural' === t
                                )
                            },
                        },
                        initialPosition: {
                            type: String,
                            default: 'center',
                            validator: function(t) {
                                var i = [
                                    'center',
                                    'top',
                                    'bottom',
                                    'left',
                                    'right',
                                ]
                                return (
                                    t.split(' ').every(function(t) {
                                        return i.indexOf(t) >= 0
                                    }) || /^-?\d+% -?\d+%$/.test(t)
                                )
                            },
                        },
                        inputAttrs: Object,
                        showLoading: Boolean,
                        loadingSize: { type: Number, default: 20 },
                        loadingColor: { type: String, default: '#606060' },
                        replaceDrop: Boolean,
                        passive: Boolean,
                        imageBorderRadius: {
                            type: [Number, String],
                            default: 0,
                        },
                        autoSizing: Boolean,
                        videoEnabled: Boolean,
                    },
                    s = 'init',
                    r = 'file-choose',
                    h = 'file-size-exceed',
                    l = 'file-type-mismatch',
                    u = 'new-image',
                    d = 'new-image-drawn',
                    c = 'image-remove',
                    g = 'move',
                    p = 'zoom',
                    f = 'draw',
                    m = 'initial-image-loaded',
                    v = 'loading-start',
                    w = 'loading-end',
                    b =
                        'function' == typeof Symbol &&
                        'symbol' == typeof Symbol.iterator
                            ? function(t) {
                                  return typeof t
                              }
                            : function(t) {
                                  return t &&
                                      'function' == typeof Symbol &&
                                      t.constructor === Symbol &&
                                      t !== Symbol.prototype
                                      ? 'symbol'
                                      : typeof t
                              },
                    y = [
                        'imgData',
                        'img',
                        'imgSet',
                        'originalImage',
                        'naturalHeight',
                        'naturalWidth',
                        'orientation',
                        'scaleRatio',
                    ],
                    D = {
                        render: function() {
                            var t = this,
                                i = t.$createElement,
                                e = t._self._c || i
                            return e(
                                'div',
                                {
                                    ref: 'wrapper',
                                    class:
                                        'croppa-container ' +
                                        (t.img ? 'croppa--has-target' : '') +
                                        ' ' +
                                        (t.passive ? 'croppa--passive' : '') +
                                        ' ' +
                                        (t.disabled ? 'croppa--disabled' : '') +
                                        ' ' +
                                        (t.disableClickToChoose
                                            ? 'croppa--disabled-cc'
                                            : '') +
                                        ' ' +
                                        (t.disableDragToMove &&
                                        t.disableScrollToZoom
                                            ? 'croppa--disabled-mz'
                                            : '') +
                                        ' ' +
                                        (t.fileDraggedOver
                                            ? 'croppa--dropzone'
                                            : ''),
                                    on: {
                                        dragenter: function(i) {
                                            return (
                                                i.stopPropagation(),
                                                i.preventDefault(),
                                                t._handleDragEnter(i)
                                            )
                                        },
                                        dragleave: function(i) {
                                            return (
                                                i.stopPropagation(),
                                                i.preventDefault(),
                                                t._handleDragLeave(i)
                                            )
                                        },
                                        dragover: function(i) {
                                            return (
                                                i.stopPropagation(),
                                                i.preventDefault(),
                                                t._handleDragOver(i)
                                            )
                                        },
                                        drop: function(i) {
                                            return (
                                                i.stopPropagation(),
                                                i.preventDefault(),
                                                t._handleDrop(i)
                                            )
                                        },
                                    },
                                },
                                [
                                    e(
                                        'input',
                                        t._b(
                                            {
                                                ref: 'fileInput',
                                                staticStyle: {
                                                    height: '1px',
                                                    width: '1px',
                                                    overflow: 'hidden',
                                                    'margin-left': '-99999px',
                                                    position: 'absolute',
                                                },
                                                attrs: {
                                                    type: 'file',
                                                    accept: t.accept,
                                                    disabled: t.disabled,
                                                },
                                                on: {
                                                    change:
                                                        t._handleInputChange,
                                                },
                                            },
                                            'input',
                                            t.inputAttrs,
                                            !1,
                                        ),
                                    ),
                                    t._v(' '),
                                    e(
                                        'div',
                                        {
                                            staticClass: 'slots',
                                            staticStyle: {
                                                width: '0',
                                                height: '0',
                                                visibility: 'hidden',
                                            },
                                        },
                                        [
                                            t._t('initial'),
                                            t._v(' '),
                                            t._t('placeholder'),
                                        ],
                                        2,
                                    ),
                                    t._v(' '),
                                    e('canvas', {
                                        ref: 'canvas',
                                        on: {
                                            click: function(i) {
                                                return (
                                                    i.stopPropagation(),
                                                    i.preventDefault(),
                                                    t._handleClick(i)
                                                )
                                            },
                                            dblclick: function(i) {
                                                return (
                                                    i.stopPropagation(),
                                                    i.preventDefault(),
                                                    t._handleDblClick(i)
                                                )
                                            },
                                            touchstart: function(i) {
                                                return (
                                                    i.stopPropagation(),
                                                    t._handlePointerStart(i)
                                                )
                                            },
                                            mousedown: function(i) {
                                                return (
                                                    i.stopPropagation(),
                                                    i.preventDefault(),
                                                    t._handlePointerStart(i)
                                                )
                                            },
                                            pointerstart: function(i) {
                                                return (
                                                    i.stopPropagation(),
                                                    i.preventDefault(),
                                                    t._handlePointerStart(i)
                                                )
                                            },
                                            touchend: function(i) {
                                                return (
                                                    i.stopPropagation(),
                                                    i.preventDefault(),
                                                    t._handlePointerEnd(i)
                                                )
                                            },
                                            touchcancel: function(i) {
                                                return (
                                                    i.stopPropagation(),
                                                    i.preventDefault(),
                                                    t._handlePointerEnd(i)
                                                )
                                            },
                                            mouseup: function(i) {
                                                return (
                                                    i.stopPropagation(),
                                                    i.preventDefault(),
                                                    t._handlePointerEnd(i)
                                                )
                                            },
                                            pointerend: function(i) {
                                                return (
                                                    i.stopPropagation(),
                                                    i.preventDefault(),
                                                    t._handlePointerEnd(i)
                                                )
                                            },
                                            pointercancel: function(i) {
                                                return (
                                                    i.stopPropagation(),
                                                    i.preventDefault(),
                                                    t._handlePointerEnd(i)
                                                )
                                            },
                                            touchmove: function(i) {
                                                return (
                                                    i.stopPropagation(),
                                                    t._handlePointerMove(i)
                                                )
                                            },
                                            mousemove: function(i) {
                                                return (
                                                    i.stopPropagation(),
                                                    i.preventDefault(),
                                                    t._handlePointerMove(i)
                                                )
                                            },
                                            pointermove: function(i) {
                                                return (
                                                    i.stopPropagation(),
                                                    i.preventDefault(),
                                                    t._handlePointerMove(i)
                                                )
                                            },
                                            pointerleave: function(i) {
                                                return (
                                                    i.stopPropagation(),
                                                    i.preventDefault(),
                                                    t._handlePointerLeave(i)
                                                )
                                            },
                                            DOMMouseScroll: function(i) {
                                                return (
                                                    i.stopPropagation(),
                                                    t._handleWheel(i)
                                                )
                                            },
                                            wheel: function(i) {
                                                return (
                                                    i.stopPropagation(),
                                                    t._handleWheel(i)
                                                )
                                            },
                                            mousewheel: function(i) {
                                                return (
                                                    i.stopPropagation(),
                                                    t._handleWheel(i)
                                                )
                                            },
                                        },
                                    }),
                                    t._v(' '),
                                    t.showRemoveButton && t.img && !t.passive
                                        ? e(
                                              'svg',
                                              {
                                                  staticClass:
                                                      'icon icon-remove',
                                                  style:
                                                      'top: -' +
                                                      t.height / 40 +
                                                      'px; right: -' +
                                                      t.width / 40 +
                                                      'px',
                                                  attrs: {
                                                      viewBox: '0 0 1024 1024',
                                                      version: '1.1',
                                                      xmlns:
                                                          'http://www.w3.org/2000/svg',
                                                      'xmlns:xlink':
                                                          'http://www.w3.org/1999/xlink',
                                                      width:
                                                          t.removeButtonSize ||
                                                          t.width / 10,
                                                      height:
                                                          t.removeButtonSize ||
                                                          t.width / 10,
                                                  },
                                                  on: { click: t.remove },
                                              },
                                              [
                                                  e('path', {
                                                      attrs: {
                                                          d:
                                                              'M511.921231 0C229.179077 0 0 229.257846 0 512 0 794.702769 229.179077 1024 511.921231 1024 794.781538 1024 1024 794.702769 1024 512 1024 229.257846 794.781538 0 511.921231 0ZM732.041846 650.633846 650.515692 732.081231C650.515692 732.081231 521.491692 593.683692 511.881846 593.683692 502.429538 593.683692 373.366154 732.081231 373.366154 732.081231L291.761231 650.633846C291.761231 650.633846 430.316308 523.500308 430.316308 512.196923 430.316308 500.696615 291.761231 373.523692 291.761231 373.523692L373.366154 291.918769C373.366154 291.918769 503.453538 430.395077 511.881846 430.395077 520.349538 430.395077 650.515692 291.918769 650.515692 291.918769L732.041846 373.523692C732.041846 373.523692 593.447385 502.547692 593.447385 512.196923 593.447385 521.412923 732.041846 650.633846 732.041846 650.633846Z',
                                                          fill:
                                                              t.removeButtonColor,
                                                      },
                                                  }),
                                              ],
                                          )
                                        : t._e(),
                                    t._v(' '),
                                    t.showLoading && t.loading
                                        ? e(
                                              'div',
                                              {
                                                  staticClass:
                                                      'sk-fading-circle',
                                                  style: t.loadingStyle,
                                              },
                                              t._l(12, function(i) {
                                                  return e(
                                                      'div',
                                                      {
                                                          key: i,
                                                          class:
                                                              'sk-circle' +
                                                              i +
                                                              ' sk-circle',
                                                      },
                                                      [
                                                          e('div', {
                                                              staticClass:
                                                                  'sk-circle-indicator',
                                                              style: {
                                                                  backgroundColor:
                                                                      t.loadingColor,
                                                              },
                                                          }),
                                                      ],
                                                  )
                                              }),
                                          )
                                        : t._e(),
                                    t._v(' '),
                                    t._t('default'),
                                ],
                                2,
                            )
                        },
                        staticRenderFns: [],
                        model: { prop: 'value', event: s },
                        props: o,
                        data: function() {
                            return {
                                canvas: null,
                                ctx: null,
                                originalImage: null,
                                img: null,
                                video: null,
                                dragging: !1,
                                lastMovingCoord: null,
                                imgData: {
                                    width: 0,
                                    height: 0,
                                    startX: 0,
                                    startY: 0,
                                },
                                fileDraggedOver: !1,
                                tabStart: 0,
                                scrolling: !1,
                                pinching: !1,
                                rotating: !1,
                                pinchDistance: 0,
                                supportTouch: !1,
                                pointerMoved: !1,
                                pointerStartCoord: null,
                                naturalWidth: 0,
                                naturalHeight: 0,
                                scaleRatio: null,
                                orientation: 1,
                                userMetadata: null,
                                imageSet: !1,
                                currentPointerCoord: null,
                                currentIsInitial: !1,
                                loading: !1,
                                realWidth: 0,
                                realHeight: 0,
                                chosenFile: null,
                                useAutoSizing: !1,
                            }
                        },
                        computed: {
                            outputWidth: function() {
                                return (
                                    (this.useAutoSizing
                                        ? this.realWidth
                                        : this.width) * this.quality
                                )
                            },
                            outputHeight: function() {
                                return (
                                    (this.useAutoSizing
                                        ? this.realHeight
                                        : this.height) * this.quality
                                )
                            },
                            computedPlaceholderFontSize: function() {
                                return this.placeholderFontSize * this.quality
                            },
                            aspectRatio: function() {
                                return this.naturalWidth / this.naturalHeight
                            },
                            loadingStyle: function() {
                                return {
                                    width: this.loadingSize + 'px',
                                    height: this.loadingSize + 'px',
                                    right: '15px',
                                    bottom: '10px',
                                }
                            },
                        },
                        mounted: function() {
                            var t = this
                            this._initialize(),
                                a.rAFPolyfill(),
                                a.toBlobPolyfill(),
                                this.supportDetection().basic ||
                                    console.warn(
                                        'Your browser does not support vue-croppa functionality.',
                                    ),
                                this.passive &&
                                    this.$watch(
                                        'value._data',
                                        function(i) {
                                            var e = !1
                                            if (i) {
                                                for (var a in i)
                                                    if (y.indexOf(a) >= 0) {
                                                        var n = i[a]
                                                        n !== t[a] &&
                                                            (t.$set(t, a, n),
                                                            (e = !0))
                                                    }
                                                e &&
                                                    (t.img
                                                        ? t.$nextTick(
                                                              function() {
                                                                  t._draw()
                                                              },
                                                          )
                                                        : t.remove())
                                            }
                                        },
                                        { deep: !0 },
                                    ),
                                (this.useAutoSizing = !!(
                                    this.autoSizing &&
                                    this.$refs.wrapper &&
                                    getComputedStyle
                                )),
                                this.useAutoSizing && this._autoSizingInit()
                        },
                        beforeDestroy: function() {
                            this.useAutoSizing && this._autoSizingRemove()
                        },
                        watch: {
                            outputWidth: function() {
                                this.onDimensionChange()
                            },
                            outputHeight: function() {
                                this.onDimensionChange()
                            },
                            canvasColor: function() {
                                this.img
                                    ? this._draw()
                                    : this._setPlaceholders()
                            },
                            imageBorderRadius: function() {
                                this.img && this._draw()
                            },
                            placeholder: function() {
                                this.img || this._setPlaceholders()
                            },
                            placeholderColor: function() {
                                this.img || this._setPlaceholders()
                            },
                            computedPlaceholderFontSize: function() {
                                this.img || this._setPlaceholders()
                            },
                            preventWhiteSpace: function(t) {
                                t && (this.imageSet = !1), this._placeImage()
                            },
                            scaleRatio: function(t, i) {
                                if (
                                    !this.passive &&
                                    this.img &&
                                    a.numberValid(t)
                                ) {
                                    var e = 1
                                    a.numberValid(i) && 0 !== i && (e = t / i)
                                    var n = this.currentPointerCoord || {
                                        x:
                                            this.imgData.startX +
                                            this.imgData.width / 2,
                                        y:
                                            this.imgData.startY +
                                            this.imgData.height / 2,
                                    }
                                    if (
                                        ((this.imgData.width =
                                            this.naturalWidth * t),
                                        (this.imgData.height =
                                            this.naturalHeight * t),
                                        !this.userMetadata &&
                                            this.imageSet &&
                                            !this.rotating)
                                    ) {
                                        var o =
                                                (e - 1) *
                                                (n.x - this.imgData.startX),
                                            s =
                                                (e - 1) *
                                                (n.y - this.imgData.startY)
                                        ;(this.imgData.startX =
                                            this.imgData.startX - o),
                                            (this.imgData.startY =
                                                this.imgData.startY - s)
                                    }
                                    this.preventWhiteSpace &&
                                        (this._preventZoomingToWhiteSpace(),
                                        this._preventMovingToWhiteSpace())
                                }
                            },
                            'imgData.width': function(t, i) {
                                a.numberValid(t) &&
                                    ((this.scaleRatio = t / this.naturalWidth),
                                    this.hasImage() &&
                                        Math.abs(t - i) > 1e-5 * t &&
                                        (this.emitEvent(p), this._draw()))
                            },
                            'imgData.height': function(t) {
                                a.numberValid(t) &&
                                    (this.scaleRatio = t / this.naturalHeight)
                            },
                            'imgData.startX': function(t) {
                                this.hasImage() && this.$nextTick(this._draw)
                            },
                            'imgData.startY': function(t) {
                                this.hasImage() && this.$nextTick(this._draw)
                            },
                            loading: function(t) {
                                this.passive ||
                                    (t ? this.emitEvent(v) : this.emitEvent(w))
                            },
                            autoSizing: function(t) {
                                ;(this.useAutoSizing = !!(
                                    this.autoSizing &&
                                    this.$refs.wrapper &&
                                    getComputedStyle
                                )),
                                    t
                                        ? this._autoSizingInit()
                                        : this._autoSizingRemove()
                            },
                        },
                        methods: {
                            emitEvent: function() {
                                this.$emit.apply(this, arguments)
                            },
                            getCanvas: function() {
                                return this.canvas
                            },
                            getContext: function() {
                                return this.ctx
                            },
                            getChosenFile: function() {
                                return (
                                    this.chosenFile ||
                                    this.$refs.fileInput.files[0]
                                )
                            },
                            move: function(t) {
                                if (t && !this.passive) {
                                    var i = this.imgData.startX,
                                        e = this.imgData.startY
                                    ;(this.imgData.startX += t.x),
                                        (this.imgData.startY += t.y),
                                        this.preventWhiteSpace &&
                                            this._preventMovingToWhiteSpace(),
                                        (this.imgData.startX === i &&
                                            this.imgData.startY === e) ||
                                            (this.emitEvent(g), this._draw())
                                }
                            },
                            moveUpwards: function() {
                                var t =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : 1
                                this.move({ x: 0, y: -t })
                            },
                            moveDownwards: function() {
                                var t =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : 1
                                this.move({ x: 0, y: t })
                            },
                            moveLeftwards: function() {
                                var t =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : 1
                                this.move({ x: -t, y: 0 })
                            },
                            moveRightwards: function() {
                                var t =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : 1
                                this.move({ x: t, y: 0 })
                            },
                            zoom: function() {
                                var t =
                                        !(
                                            arguments.length > 0 &&
                                            void 0 !== arguments[0]
                                        ) || arguments[0],
                                    i =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1]
                                            ? arguments[1]
                                            : 1
                                if (!this.passive) {
                                    var e = this.zoomSpeed * i,
                                        a = 1e-5 * this.outputWidth * e,
                                        n = 1
                                    t
                                        ? (n = 1 + a)
                                        : this.imgData.width > 10 &&
                                          (n = 1 - a),
                                        (this.scaleRatio *= n)
                                }
                            },
                            zoomIn: function() {
                                this.zoom(!0)
                            },
                            zoomOut: function() {
                                this.zoom(!1)
                            },
                            rotate: function() {
                                var t =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : 1
                                this.disableRotation ||
                                    this.disabled ||
                                    this.passive ||
                                    ((t = parseInt(t)),
                                    (isNaN(t) || t > 3 || t < -3) &&
                                        (console.warn(
                                            'Invalid argument for rotate() method. It should one of the integers from -3 to 3.',
                                        ),
                                        (t = 1)),
                                    this._rotateByStep(t))
                            },
                            flipX: function() {
                                this.disableRotation ||
                                    this.disabled ||
                                    this.passive ||
                                    this._setOrientation(2)
                            },
                            flipY: function() {
                                this.disableRotation ||
                                    this.disabled ||
                                    this.passive ||
                                    this._setOrientation(4)
                            },
                            refresh: function() {
                                this.$nextTick(this._initialize)
                            },
                            hasImage: function() {
                                return !!this.imageSet
                            },
                            applyMetadata: function(t) {
                                if (t && !this.passive) {
                                    this.userMetadata = t
                                    var i =
                                        t.orientation || this.orientation || 1
                                    this._setOrientation(i, !0)
                                }
                            },
                            generateDataUrl: function(t, i) {
                                return this.hasImage()
                                    ? this.canvas.toDataURL(t, i)
                                    : ''
                            },
                            generateBlob: function(t, i, e) {
                                this.hasImage()
                                    ? this.canvas.toBlob(t, i, e)
                                    : t(null)
                            },
                            promisedBlob: function() {
                                for (
                                    var t = this,
                                        i = arguments.length,
                                        e = Array(i),
                                        a = 0;
                                    a < i;
                                    a++
                                )
                                    e[a] = arguments[a]
                                if ('undefined' != typeof Promise)
                                    return new Promise(function(i, a) {
                                        try {
                                            t.generateBlob.apply(
                                                t,
                                                [
                                                    function(t) {
                                                        i(t)
                                                    },
                                                ].concat(e),
                                            )
                                        } catch (t) {
                                            a(t)
                                        }
                                    })
                                console.warn(
                                    'No Promise support. Please add Promise polyfill if you want to use this method.',
                                )
                            },
                            getMetadata: function() {
                                if (!this.hasImage()) return {}
                                var t = this.imgData
                                return {
                                    startX: t.startX,
                                    startY: t.startY,
                                    scale: this.scaleRatio,
                                    orientation: this.orientation,
                                }
                            },
                            supportDetection: function() {
                                if ('undefined' != typeof window) {
                                    var t = document.createElement('div')
                                    return {
                                        basic:
                                            window.requestAnimationFrame &&
                                            window.File &&
                                            window.FileReader &&
                                            window.FileList &&
                                            window.Blob,
                                        dnd:
                                            'ondragstart' in t && 'ondrop' in t,
                                    }
                                }
                            },
                            chooseFile: function() {
                                this.passive || this.$refs.fileInput.click()
                            },
                            remove: function() {
                                if (this.imageSet) {
                                    this._setPlaceholders()
                                    var t = null != this.img
                                    ;(this.originalImage = null),
                                        (this.img = null),
                                        (this.$refs.fileInput.value = ''),
                                        (this.imgData = {
                                            width: 0,
                                            height: 0,
                                            startX: 0,
                                            startY: 0,
                                        }),
                                        (this.orientation = 1),
                                        (this.scaleRatio = null),
                                        (this.userMetadata = null),
                                        (this.imageSet = !1),
                                        (this.chosenFile = null),
                                        this.video &&
                                            (this.video.pause(),
                                            (this.video = null)),
                                        t && this.emitEvent(c)
                                }
                            },
                            addClipPlugin: function(t) {
                                if (
                                    (this.clipPlugins ||
                                        (this.clipPlugins = []),
                                    !(
                                        'function' == typeof t &&
                                        this.clipPlugins.indexOf(t) < 0
                                    ))
                                )
                                    throw Error(
                                        'Clip plugins should be functions',
                                    )
                                this.clipPlugins.push(t)
                            },
                            emitNativeEvent: function(t) {
                                this.emitEvent(t.type, t)
                            },
                            _setContainerSize: function() {
                                this.useAutoSizing &&
                                    ((this.realWidth = +getComputedStyle(
                                        this.$refs.wrapper,
                                    ).width.slice(0, -2)),
                                    (this.realHeight = +getComputedStyle(
                                        this.$refs.wrapper,
                                    ).height.slice(0, -2)))
                            },
                            _autoSizingInit: function() {
                                this._setContainerSize(),
                                    window.addEventListener(
                                        'resize',
                                        this._setContainerSize,
                                    )
                            },
                            _autoSizingRemove: function() {
                                this._setContainerSize(),
                                    window.removeEventListener(
                                        'resize',
                                        this._setContainerSize,
                                    )
                            },
                            _initialize: function() {
                                ;(this.canvas = this.$refs.canvas),
                                    this._setSize(),
                                    (this.canvas.style.backgroundColor =
                                        this.canvasColor &&
                                        'default' != this.canvasColor
                                            ? 'string' ==
                                              typeof this.canvasColor
                                                ? this.canvasColor
                                                : ''
                                            : 'transparent'),
                                    (this.ctx = this.canvas.getContext('2d')),
                                    (this.ctx.imageSmoothingEnabled = !0),
                                    (this.ctx.imageSmoothingQuality = 'high'),
                                    (this.ctx.webkitImageSmoothingEnabled = !0),
                                    (this.ctx.msImageSmoothingEnabled = !0),
                                    (this.ctx.imageSmoothingEnabled = !0),
                                    (this.originalImage = null),
                                    (this.img = null),
                                    (this.$refs.fileInput.value = ''),
                                    (this.imageSet = !1),
                                    (this.chosenFile = null),
                                    this._setInitial(),
                                    this.passive || this.emitEvent(s, this)
                            },
                            _setSize: function() {
                                ;(this.canvas.width = this.outputWidth),
                                    (this.canvas.height = this.outputHeight),
                                    (this.canvas.style.width =
                                        (this.useAutoSizing
                                            ? this.realWidth
                                            : this.width) + 'px'),
                                    (this.canvas.style.height =
                                        (this.useAutoSizing
                                            ? this.realHeight
                                            : this.height) + 'px')
                            },
                            _rotateByStep: function(t) {
                                var i = 1
                                switch (t) {
                                    case 1:
                                        i = 6
                                        break
                                    case 2:
                                        i = 3
                                        break
                                    case 3:
                                    case -1:
                                        i = 8
                                        break
                                    case -2:
                                        i = 3
                                        break
                                    case -3:
                                        i = 6
                                }
                                this._setOrientation(i)
                            },
                            _setImagePlaceholder: function() {
                                var t = this,
                                    i = void 0
                                if (
                                    this.$slots.placeholder &&
                                    this.$slots.placeholder[0]
                                ) {
                                    var e = this.$slots.placeholder[0],
                                        n = e.tag,
                                        o = e.elm
                                    'img' == n && o && (i = o)
                                }
                                if (i) {
                                    var s = function() {
                                        t.ctx.drawImage(
                                            i,
                                            0,
                                            0,
                                            t.outputWidth,
                                            t.outputHeight,
                                        )
                                    }
                                    a.imageLoaded(i) ? s() : (i.onload = s)
                                }
                            },
                            _setTextPlaceholder: function() {
                                var t = this.ctx
                                ;(t.textBaseline = 'middle'),
                                    (t.textAlign = 'center')
                                var i =
                                        (this.outputWidth * (2 / 3)) /
                                        this.placeholder.length,
                                    e =
                                        this.computedPlaceholderFontSize &&
                                        0 != this.computedPlaceholderFontSize
                                            ? this.computedPlaceholderFontSize
                                            : i
                                ;(t.font = e + 'px sans-serif'),
                                    (t.fillStyle =
                                        this.placeholderColor &&
                                        'default' != this.placeholderColor
                                            ? this.placeholderColor
                                            : '#606060'),
                                    t.fillText(
                                        this.placeholder,
                                        this.outputWidth / 2,
                                        this.outputHeight / 2,
                                    )
                            },
                            _setPlaceholders: function() {
                                this._paintBackground(),
                                    this._setImagePlaceholder(),
                                    this._setTextPlaceholder()
                            },
                            _setInitial: function() {
                                var t = this,
                                    i = void 0,
                                    e = void 0
                                if (
                                    this.$slots.initial &&
                                    this.$slots.initial[0]
                                ) {
                                    var n = this.$slots.initial[0],
                                        o = n.tag,
                                        s = n.elm
                                    'img' == o && s && (e = s)
                                }
                                this.initialImage &&
                                'string' == typeof this.initialImage
                                    ? ((i = this.initialImage),
                                      (e = new Image()),
                                      /^data:/.test(i) ||
                                          /^blob:/.test(i) ||
                                          e.setAttribute(
                                              'crossOrigin',
                                              'anonymous',
                                          ),
                                      (e.src = i))
                                    : 'object' === b(this.initialImage) &&
                                      this.initialImage instanceof Image &&
                                      (e = this.initialImage),
                                    i || e
                                        ? ((this.currentIsInitial = !0),
                                          a.imageLoaded(e)
                                              ? this._onload(
                                                    e,
                                                    +e.dataset.exifOrientation,
                                                    !0,
                                                )
                                              : ((this.loading = !0),
                                                (e.onload = function() {
                                                    t._onload(
                                                        e,
                                                        +e.dataset
                                                            .exifOrientation,
                                                        !0,
                                                    )
                                                }),
                                                (e.onerror = function() {
                                                    t._setPlaceholders()
                                                })))
                                        : this._setPlaceholders()
                            },
                            _onload: function(t) {
                                var i =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1]
                                            ? arguments[1]
                                            : 1,
                                    e = arguments[2]
                                this.imageSet && this.remove(),
                                    (this.originalImage = t),
                                    (this.img = t),
                                    isNaN(i) && (i = 1),
                                    this._setOrientation(i),
                                    e && this.emitEvent(m)
                            },
                            _onVideoLoad: function(t, i) {
                                var e = this
                                this.video = t
                                var a = document.createElement('canvas'),
                                    n = t.videoWidth,
                                    o = t.videoHeight
                                ;(a.width = n), (a.height = o)
                                var s = a.getContext('2d')
                                this.loading = !1
                                var r = function(t) {
                                    if (e.video) {
                                        s.drawImage(e.video, 0, 0, n, o)
                                        var i = new Image()
                                        ;(i.src = a.toDataURL()),
                                            (i.onload = function() {
                                                ;(e.img = i),
                                                    t
                                                        ? e._placeImage()
                                                        : e._draw()
                                            })
                                    }
                                }
                                r(!0)
                                var h = function t() {
                                    e.$nextTick(function() {
                                        r(),
                                            !e.video ||
                                                e.video.ended ||
                                                e.video.paused ||
                                                requestAnimationFrame(t)
                                    })
                                }
                                this.video.addEventListener('play', function() {
                                    requestAnimationFrame(h)
                                })
                            },
                            _handleClick: function(t) {
                                this.emitNativeEvent(t),
                                    this.hasImage() ||
                                        this.disableClickToChoose ||
                                        this.disabled ||
                                        this.supportTouch ||
                                        this.passive ||
                                        this.chooseFile()
                            },
                            _handleDblClick: function(t) {
                                this.emitNativeEvent(t),
                                    this.videoEnabled &&
                                        this.video &&
                                        (this.video.paused || this.video.ended
                                            ? this.video.play()
                                            : this.video.pause())
                            },
                            _handleInputChange: function() {
                                var t = this.$refs.fileInput
                                if (t.files.length && !this.passive) {
                                    var i = t.files[0]
                                    this._onNewFileIn(i)
                                }
                            },
                            _onNewFileIn: function(t) {
                                var i = this
                                if (
                                    ((this.currentIsInitial = !1),
                                    (this.loading = !0),
                                    this.emitEvent(r, t),
                                    (this.chosenFile = t),
                                    !this._fileSizeIsValid(t))
                                )
                                    return (
                                        (this.loading = !1),
                                        this.emitEvent(h, t),
                                        !1
                                    )
                                if (!this._fileTypeIsValid(t)) {
                                    ;(this.loading = !1), this.emitEvent(l, t)
                                    t.type ||
                                        t.name
                                            .toLowerCase()
                                            .split('.')
                                            .pop()
                                    return !1
                                }
                                if (
                                    'undefined' != typeof window &&
                                    void 0 !== window.FileReader
                                ) {
                                    var e = new FileReader()
                                    ;(e.onload = function(e) {
                                        var n = e.target.result,
                                            o = a.parseDataUrl(n)
                                        if (/^video/.test(t.type)) {
                                            var s = document.createElement(
                                                'video',
                                            )
                                            ;(s.src = n),
                                                (n = null),
                                                s.readyState >=
                                                s.HAVE_FUTURE_DATA
                                                    ? i._onVideoLoad(s)
                                                    : s.addEventListener(
                                                          'canplay',
                                                          function() {
                                                              console.log(
                                                                  'can play event',
                                                              ),
                                                                  i._onVideoLoad(
                                                                      s,
                                                                  )
                                                          },
                                                          !1,
                                                      )
                                        } else {
                                            var r = 1
                                            try {
                                                r = a.getFileOrientation(
                                                    a.base64ToArrayBuffer(o),
                                                )
                                            } catch (t) {}
                                            r < 1 && (r = 1)
                                            var h = new Image()
                                            ;(h.src = n),
                                                (n = null),
                                                (h.onload = function() {
                                                    i._onload(h, r),
                                                        i.emitEvent(u)
                                                })
                                        }
                                    }),
                                        e.readAsDataURL(t)
                                }
                            },
                            _fileSizeIsValid: function(t) {
                                return (
                                    !!t &&
                                    (!this.fileSizeLimit ||
                                        0 == this.fileSizeLimit ||
                                        t.size < this.fileSizeLimit)
                                )
                            },
                            _fileTypeIsValid: function(t) {
                                if (
                                    !(
                                        (this.videoEnabled &&
                                            /^video/.test(t.type) &&
                                            document
                                                .createElement('video')
                                                .canPlayType(t.type)) ||
                                        /^image/.test(t.type)
                                    )
                                )
                                    return !1
                                if (!this.accept) return !0
                                for (
                                    var i = this.accept,
                                        e = i.replace(/\/.*$/, ''),
                                        a = i.split(','),
                                        n = 0,
                                        o = a.length;
                                    n < o;
                                    n++
                                ) {
                                    var s = a[n],
                                        r = s.trim()
                                    if ('.' == r.charAt(0)) {
                                        if (
                                            t.name
                                                .toLowerCase()
                                                .split('.')
                                                .pop() ===
                                            r.toLowerCase().slice(1)
                                        )
                                            return !0
                                    } else if (/\/\*$/.test(r)) {
                                        if (t.type.replace(/\/.*$/, '') === e)
                                            return !0
                                    } else if (t.type === s) return !0
                                }
                                return !1
                            },
                            _placeImage: function(t) {
                                if (this.img) {
                                    var i = this.imgData
                                    if (
                                        ((this.naturalWidth = this.img.naturalWidth),
                                        (this.naturalHeight = this.img.naturalHeight),
                                        (i.startX = a.numberValid(i.startX)
                                            ? i.startX
                                            : 0),
                                        (i.startY = a.numberValid(i.startY)
                                            ? i.startY
                                            : 0),
                                        this.preventWhiteSpace
                                            ? this._aspectFill()
                                            : this.imageSet
                                            ? ((this.imgData.width =
                                                  this.naturalWidth *
                                                  this.scaleRatio),
                                              (this.imgData.height =
                                                  this.naturalHeight *
                                                  this.scaleRatio))
                                            : 'contain' == this.initialSize
                                            ? this._aspectFit()
                                            : 'natural' == this.initialSize
                                            ? this._naturalSize()
                                            : this._aspectFill(),
                                        !this.imageSet &&
                                            (/top/.test(this.initialPosition)
                                                ? (i.startY = 0)
                                                : /bottom/.test(
                                                      this.initialPosition,
                                                  ) &&
                                                  (i.startY =
                                                      this.outputHeight -
                                                      i.height),
                                            /left/.test(this.initialPosition)
                                                ? (i.startX = 0)
                                                : /right/.test(
                                                      this.initialPosition,
                                                  ) &&
                                                  (i.startX =
                                                      this.outputWidth -
                                                      i.width),
                                            /^-?\d+% -?\d+%$/.test(
                                                this.initialPosition,
                                            )))
                                    ) {
                                        var e = /^(-?\d+)% (-?\d+)%$/.exec(
                                                this.initialPosition,
                                            ),
                                            n = +e[1] / 100,
                                            o = +e[2] / 100
                                        ;(i.startX =
                                            n * (this.outputWidth - i.width)),
                                            (i.startY =
                                                o *
                                                (this.outputHeight - i.height))
                                    }
                                    t && this._applyMetadata(),
                                        t && this.preventWhiteSpace
                                            ? this.zoom(!1, 0)
                                            : (this.move({ x: 0, y: 0 }),
                                              this._draw())
                                }
                            },
                            _aspectFill: function() {
                                var t = this.naturalWidth,
                                    i = this.naturalHeight,
                                    e = this.outputWidth / this.outputHeight,
                                    a = void 0
                                this.aspectRatio > e
                                    ? ((a = i / this.outputHeight),
                                      (this.imgData.width = t / a),
                                      (this.imgData.height = this.outputHeight),
                                      (this.imgData.startX =
                                          -(
                                              this.imgData.width -
                                              this.outputWidth
                                          ) / 2),
                                      (this.imgData.startY = 0))
                                    : ((a = t / this.outputWidth),
                                      (this.imgData.height = i / a),
                                      (this.imgData.width = this.outputWidth),
                                      (this.imgData.startY =
                                          -(
                                              this.imgData.height -
                                              this.outputHeight
                                          ) / 2),
                                      (this.imgData.startX = 0))
                            },
                            _aspectFit: function() {
                                var t = this.naturalWidth,
                                    i = this.naturalHeight,
                                    e = this.outputWidth / this.outputHeight,
                                    a = void 0
                                this.aspectRatio > e
                                    ? ((a = t / this.outputWidth),
                                      (this.imgData.height = i / a),
                                      (this.imgData.width = this.outputWidth),
                                      (this.imgData.startY =
                                          -(
                                              this.imgData.height -
                                              this.outputHeight
                                          ) / 2),
                                      (this.imgData.startX = 0))
                                    : ((a = i / this.outputHeight),
                                      (this.imgData.width = t / a),
                                      (this.imgData.height = this.outputHeight),
                                      (this.imgData.startX =
                                          -(
                                              this.imgData.width -
                                              this.outputWidth
                                          ) / 2),
                                      (this.imgData.startY = 0))
                            },
                            _naturalSize: function() {
                                var t = this.naturalWidth,
                                    i = this.naturalHeight
                                ;(this.imgData.width = t),
                                    (this.imgData.height = i),
                                    (this.imgData.startX =
                                        -(
                                            this.imgData.width -
                                            this.outputWidth
                                        ) / 2),
                                    (this.imgData.startY =
                                        -(
                                            this.imgData.height -
                                            this.outputHeight
                                        ) / 2)
                            },
                            _handlePointerStart: function(t) {
                                if ((this.emitNativeEvent(t), !this.passive)) {
                                    ;(this.supportTouch = !0),
                                        (this.pointerMoved = !1)
                                    var i = a.getPointerCoords(t, this)
                                    if (
                                        ((this.pointerStartCoord = i),
                                        !this.disabled)
                                    )
                                        if (
                                            this.hasImage() ||
                                            this.disableClickToChoose
                                        ) {
                                            if (!(t.which && t.which > 1)) {
                                                if (
                                                    !t.touches ||
                                                    1 === t.touches.length
                                                ) {
                                                    ;(this.dragging = !0),
                                                        (this.pinching = !1)
                                                    var e = a.getPointerCoords(
                                                        t,
                                                        this,
                                                    )
                                                    this.lastMovingCoord = e
                                                }
                                                t.touches &&
                                                    2 === t.touches.length &&
                                                    !this.disablePinchToZoom &&
                                                    ((this.dragging = !1),
                                                    (this.pinching = !0),
                                                    (this.pinchDistance = a.getPinchDistance(
                                                        t,
                                                        this,
                                                    )))
                                                for (
                                                    var n = [
                                                            'mouseup',
                                                            'touchend',
                                                            'touchcancel',
                                                            'pointerend',
                                                            'pointercancel',
                                                        ],
                                                        o = 0,
                                                        s = n.length;
                                                    o < s;
                                                    o++
                                                ) {
                                                    var r = n[o]
                                                    document.addEventListener(
                                                        r,
                                                        this._handlePointerEnd,
                                                    )
                                                }
                                            }
                                        } else
                                            this.tabStart = new Date().valueOf()
                                }
                            },
                            _handlePointerEnd: function(t) {
                                if ((this.emitNativeEvent(t), !this.passive)) {
                                    var i = 0
                                    if (this.pointerStartCoord) {
                                        var e = a.getPointerCoords(t, this)
                                        i =
                                            Math.sqrt(
                                                Math.pow(
                                                    e.x -
                                                        this.pointerStartCoord
                                                            .x,
                                                    2,
                                                ) +
                                                    Math.pow(
                                                        e.y -
                                                            this
                                                                .pointerStartCoord
                                                                .y,
                                                        2,
                                                    ),
                                            ) || 0
                                    }
                                    if (!this.disabled) {
                                        if (
                                            !this.hasImage() &&
                                            !this.disableClickToChoose
                                        ) {
                                            var n = new Date().valueOf()
                                            return (
                                                i < 100 &&
                                                    n - this.tabStart < 500 &&
                                                    this.supportTouch &&
                                                    this.chooseFile(),
                                                void (this.tabStart = 0)
                                            )
                                        }
                                        ;(this.dragging = !1),
                                            (this.pinching = !1),
                                            (this.pinchDistance = 0),
                                            (this.lastMovingCoord = null),
                                            (this.pointerMoved = !1),
                                            (this.pointerStartCoord = null)
                                    }
                                }
                            },
                            _handlePointerMove: function(t) {
                                if (
                                    (this.emitNativeEvent(t),
                                    !this.passive &&
                                        ((this.pointerMoved = !0),
                                        this.hasImage()))
                                ) {
                                    var i = a.getPointerCoords(t, this)
                                    if (
                                        ((this.currentPointerCoord = i),
                                        !this.disabled &&
                                            !this.disableDragToMove)
                                    ) {
                                        if (
                                            (t.preventDefault(),
                                            !t.touches ||
                                                1 === t.touches.length)
                                        ) {
                                            if (!this.dragging) return
                                            this.lastMovingCoord &&
                                                this.move({
                                                    x:
                                                        i.x -
                                                        this.lastMovingCoord.x,
                                                    y:
                                                        i.y -
                                                        this.lastMovingCoord.y,
                                                }),
                                                (this.lastMovingCoord = i)
                                        }
                                        if (
                                            t.touches &&
                                            2 === t.touches.length &&
                                            !this.disablePinchToZoom
                                        ) {
                                            if (!this.pinching) return
                                            var e = a.getPinchDistance(t, this),
                                                n = e - this.pinchDistance
                                            this.zoom(n > 0, 1),
                                                (this.pinchDistance = e)
                                        }
                                    }
                                }
                            },
                            _handlePointerLeave: function(t) {
                                this.emitNativeEvent(t),
                                    this.passive ||
                                        (this.currentPointerCoord = null)
                            },
                            _handleWheel: function(t) {
                                var i = this
                                this.emitNativeEvent(t),
                                    this.passive ||
                                        this.disabled ||
                                        this.disableScrollToZoom ||
                                        !this.hasImage() ||
                                        (t.preventDefault(),
                                        (this.scrolling = !0),
                                        t.wheelDelta < 0 ||
                                        t.deltaY > 0 ||
                                        t.detail > 0
                                            ? this.zoom(
                                                  this.reverseScrollToZoom,
                                              )
                                            : (t.wheelDelta > 0 ||
                                                  t.deltaY < 0 ||
                                                  t.detail < 0) &&
                                              this.zoom(
                                                  !this.reverseScrollToZoom,
                                              ),
                                        this.$nextTick(function() {
                                            i.scrolling = !1
                                        }))
                            },
                            _handleDragEnter: function(t) {
                                this.emitNativeEvent(t),
                                    this.passive ||
                                        this.disabled ||
                                        this.disableDragAndDrop ||
                                        !a.eventHasFile(t) ||
                                        (this.hasImage() &&
                                            !this.replaceDrop) ||
                                        (this.fileDraggedOver = !0)
                            },
                            _handleDragLeave: function(t) {
                                this.emitNativeEvent(t),
                                    this.passive ||
                                        (this.fileDraggedOver &&
                                            a.eventHasFile(t) &&
                                            (this.fileDraggedOver = !1))
                            },
                            _handleDragOver: function(t) {
                                this.emitNativeEvent(t)
                            },
                            _handleDrop: function(t) {
                                if (
                                    (this.emitNativeEvent(t),
                                    !this.passive &&
                                        this.fileDraggedOver &&
                                        a.eventHasFile(t) &&
                                        (!this.hasImage() || this.replaceDrop))
                                ) {
                                    this.fileDraggedOver = !1
                                    var i = void 0,
                                        e = t.dataTransfer
                                    if (e) {
                                        if (e.items)
                                            for (
                                                var n = 0, o = e.items.length;
                                                n < o;
                                                n++
                                            ) {
                                                var s = e.items[n]
                                                if ('file' == s.kind) {
                                                    i = s.getAsFile()
                                                    break
                                                }
                                            }
                                        else i = e.files[0]
                                        i && this._onNewFileIn(i)
                                    }
                                }
                            },
                            _preventMovingToWhiteSpace: function() {
                                this.imgData.startX > 0 &&
                                    (this.imgData.startX = 0),
                                    this.imgData.startY > 0 &&
                                        (this.imgData.startY = 0),
                                    this.outputWidth - this.imgData.startX >
                                        this.imgData.width &&
                                        (this.imgData.startX = -(
                                            this.imgData.width -
                                            this.outputWidth
                                        )),
                                    this.outputHeight - this.imgData.startY >
                                        this.imgData.height &&
                                        (this.imgData.startY = -(
                                            this.imgData.height -
                                            this.outputHeight
                                        ))
                            },
                            _preventZoomingToWhiteSpace: function() {
                                this.imgData.width < this.outputWidth &&
                                    (this.scaleRatio =
                                        this.outputWidth / this.naturalWidth),
                                    this.imgData.height < this.outputHeight &&
                                        (this.scaleRatio =
                                            this.outputHeight /
                                            this.naturalHeight)
                            },
                            _setOrientation: function() {
                                var t = this,
                                    i =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : 6,
                                    e = arguments[1],
                                    n = e
                                if (i > 1 || n) {
                                    if (!this.img) return
                                    this.rotating = !0
                                    var o = a.getRotatedImage(
                                        n ? this.originalImage : this.img,
                                        i,
                                    )
                                    o.onload = function() {
                                        ;(t.img = o), t._placeImage(e)
                                    }
                                } else this._placeImage(e)
                                ;(this.orientation =
                                    2 == i
                                        ? a.flipX(this.orientation)
                                        : 4 == i
                                        ? a.flipY(this.orientation)
                                        : 6 == i
                                        ? a.rotate90(this.orientation)
                                        : 3 == i
                                        ? a.rotate90(
                                              a.rotate90(this.orientation),
                                          )
                                        : 8 == i
                                        ? a.rotate90(
                                              a.rotate90(
                                                  a.rotate90(this.orientation),
                                              ),
                                          )
                                        : i),
                                    n && (this.orientation = i)
                            },
                            _paintBackground: function() {
                                var t =
                                    this.canvasColor &&
                                    'default' != this.canvasColor
                                        ? this.canvasColor
                                        : 'transparent'
                                ;(this.ctx.fillStyle = t),
                                    this.ctx.clearRect(
                                        0,
                                        0,
                                        this.outputWidth,
                                        this.outputHeight,
                                    ),
                                    this.ctx.fillRect(
                                        0,
                                        0,
                                        this.outputWidth,
                                        this.outputHeight,
                                    )
                            },
                            _draw: function() {
                                var t = this
                                this.$nextTick(function() {
                                    'undefined' != typeof window &&
                                    window.requestAnimationFrame
                                        ? requestAnimationFrame(t._drawFrame)
                                        : t._drawFrame()
                                })
                            },
                            _drawFrame: function() {
                                if (this.img) {
                                    this.loading = !1
                                    var t = this.ctx,
                                        i = this.imgData,
                                        e = i.startX,
                                        a = i.startY,
                                        n = i.width,
                                        o = i.height
                                    this._paintBackground(),
                                        t.drawImage(this.img, e, a, n, o),
                                        this.preventWhiteSpace &&
                                            this._clip(
                                                this._createContainerClipPath,
                                            ),
                                        this.emitEvent(f, t),
                                        this.imageSet ||
                                            ((this.imageSet = !0),
                                            this.emitEvent(d)),
                                        (this.rotating = !1)
                                }
                            },
                            _clipPathFactory: function(t, i, e, a) {
                                var n = this.ctx,
                                    o =
                                        'number' ==
                                        typeof this.imageBorderRadius
                                            ? this.imageBorderRadius
                                            : isNaN(
                                                  Number(
                                                      this.imageBorderRadius,
                                                  ),
                                              )
                                            ? 0
                                            : Number(this.imageBorderRadius)
                                n.beginPath(),
                                    n.moveTo(t + o, i),
                                    n.lineTo(t + e - o, i),
                                    n.quadraticCurveTo(t + e, i, t + e, i + o),
                                    n.lineTo(t + e, i + a - o),
                                    n.quadraticCurveTo(
                                        t + e,
                                        i + a,
                                        t + e - o,
                                        i + a,
                                    ),
                                    n.lineTo(t + o, i + a),
                                    n.quadraticCurveTo(t, i + a, t, i + a - o),
                                    n.lineTo(t, i + o),
                                    n.quadraticCurveTo(t, i, t + o, i),
                                    n.closePath()
                            },
                            _createContainerClipPath: function() {
                                var t = this
                                this._clipPathFactory(
                                    0,
                                    0,
                                    this.outputWidth,
                                    this.outputHeight,
                                ),
                                    this.clipPlugins &&
                                        this.clipPlugins.length &&
                                        this.clipPlugins.forEach(function(i) {
                                            i(
                                                t.ctx,
                                                0,
                                                0,
                                                t.outputWidth,
                                                t.outputHeight,
                                            )
                                        })
                            },
                            _clip: function(t) {
                                var i = this.ctx
                                i.save(),
                                    (i.fillStyle = '#fff'),
                                    (i.globalCompositeOperation =
                                        'destination-in'),
                                    t(),
                                    i.fill(),
                                    i.restore()
                            },
                            _applyMetadata: function() {
                                var t = this
                                if (this.userMetadata) {
                                    var i = this.userMetadata,
                                        e = i.startX,
                                        n = i.startY,
                                        o = i.scale
                                    a.numberValid(e) &&
                                        (this.imgData.startX = e),
                                        a.numberValid(n) &&
                                            (this.imgData.startY = n),
                                        a.numberValid(o) &&
                                            (this.scaleRatio = o),
                                        this.$nextTick(function() {
                                            t.userMetadata = null
                                        })
                                }
                            },
                            onDimensionChange: function() {
                                this.img
                                    ? (this.preventWhiteSpace &&
                                          (this.imageSet = !1),
                                      this._setSize(),
                                      this._placeImage())
                                    : this._initialize()
                            },
                        },
                    },
                    _ = Object.getOwnPropertySymbols,
                    S = Object.prototype.hasOwnProperty,
                    P = Object.prototype.propertyIsEnumerable
                var C = (function() {
                        try {
                            if (!Object.assign) return !1
                            var t = new String('abc')
                            if (
                                ((t[5] = 'de'),
                                '5' === Object.getOwnPropertyNames(t)[0])
                            )
                                return !1
                            for (var i = {}, e = 0; e < 10; e++)
                                i['_' + String.fromCharCode(e)] = e
                            if (
                                '0123456789' !==
                                Object.getOwnPropertyNames(i)
                                    .map(function(t) {
                                        return i[t]
                                    })
                                    .join('')
                            )
                                return !1
                            var a = {}
                            return (
                                'abcdefghijklmnopqrst'
                                    .split('')
                                    .forEach(function(t) {
                                        a[t] = t
                                    }),
                                'abcdefghijklmnopqrst' ===
                                    Object.keys(Object.assign({}, a)).join('')
                            )
                        } catch (t) {
                            return !1
                        }
                    })()
                        ? Object.assign
                        : function(t, i) {
                              for (
                                  var e,
                                      a,
                                      n = (function(t) {
                                          if (null === t || void 0 === t)
                                              throw new TypeError(
                                                  'Object.assign cannot be called with null or undefined',
                                              )
                                          return Object(t)
                                      })(t),
                                      o = 1;
                                  o < arguments.length;
                                  o++
                              ) {
                                  for (var s in (e = Object(arguments[o])))
                                      S.call(e, s) && (n[s] = e[s])
                                  if (_) {
                                      a = _(e)
                                      for (var r = 0; r < a.length; r++)
                                          P.call(e, a[r]) && (n[a[r]] = e[a[r]])
                                  }
                              }
                              return n
                          },
                    I = { componentName: 'croppa' }
                return {
                    install: function(t, i) {
                        i = C({}, I, i)
                        var e = Number(t.version.split('.')[0])
                        if (e < 2)
                            throw new Error(
                                'vue-croppa supports vue version 2.0 and above. You are using Vue@' +
                                    e +
                                    '. Please upgrade to the latest version of Vue.',
                            )
                        var a = i.componentName || 'croppa'
                        t.component(a, D)
                    },
                    component: D,
                }
            }),
                (t.exports = e())
        }.call(i, e('DuR2')))
    },
})
