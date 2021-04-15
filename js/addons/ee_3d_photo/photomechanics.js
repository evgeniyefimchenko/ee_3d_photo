! function(t) {
	var e = {};

	function n(o) {
		if(e[o]) return e[o].exports;
		var r = e[o] = {
			i: o,
			l: !1,
			exports: {}
		};
		return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
	}
	n.m = t, n.c = e, n.d = function(t, e, o) {
		n.o(t, e) || Object.defineProperty(t, e, {
			enumerable: !0,
			get: o
		})
	}, n.r = function(t) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, n.t = function(t, e) {
		if(1 & e && (t = n(t)), 8 & e) return t;
		if(4 & e && "object" == typeof t && t && t.__esModule) return t;
		var o = Object.create(null);
		if(n.r(o), Object.defineProperty(o, "default", {
				enumerable: !0,
				value: t
			}), 2 & e && "string" != typeof t)
			for(var r in t) n.d(o, r, function(e) {
				return t[e]
			}.bind(null, r));
		return o
	}, n.n = function(t) {
		var e = t && t.__esModule ? function() {
			return t.default
		} : function() {
			return t
		};
		return n.d(e, "a", e), e
	}, n.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, n.p = "", n(n.s = 19)
}([function(t, e, n) {
	"use strict";
	n.d(e, "b", function() {
		return o
	}), n.d(e, "c", function() {
		return r
	}), n.d(e, "d", function() {
		return i
	}), n.d(e, "a", function() {
		return s
	});
	var o = function() {
			return {
				attribute: "photomechanics",
				className: "photomechanics",
				zoomLevels: [100],
				defaultLogicalZoomStep: .1,
				minZoomStepBaseRelative: .1,
				frames: 60,
				yframes: 1,
				firstFrameX: 1,
				firstFrameY: 1,
				startImmediately: !0,
				autoPlay: !1,
				debug: !1,
				color: "#fff",
				speed: 5,
				yspeed: 1,
				reverse: !1,
				yreverse: !1,
				helperTimeout: 5,
				helperBgColor: "rgba(255,255,255,0.9)",
				helperText: "Просто крутите<br/> в разные стороны",
				helperTextColor: "#7b7b7b",
				helperIconColor: "#000",
				helperCloseIconBgColor: "#fff",
				helperCloseIconColor: "#000",
				menuBar: !1,
				menuBarPosition: "left",
				menuPosition: "left",
				menuBgColor: "#fff",
				menuIconColor: "#000",
				menuBorderType: "shadow",
				menuBorderColor: "#ddd",
				menuBorderWidth: 3,
				inControlHeight: 53,
				inMenuHeight: 85,
				disableScrollOnTouch: !0,
				delayXMouseRotate: 0,
				delayYMouseRotate: 60,
				fullscreenOnDblClick: !0,
				playOnClick: !0
			}
		},
		r = function() {
			return void 0 !== (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement)
		},
		i = function(t) {
			t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.msRequestFullscreen && t.msRequestFullscreen()
		},
		s = function() {
			document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen()
		}
}, function(t, e) {
	t.exports = function(t) {
		var e = typeof t;
		return null != t && ("object" == e || "function" == e)
	}
}, function(t, e, n) {
	t.exports = n(22)
}, function(t, e, n) {
	var o = n(10),
		r = n(28),
		i = n(29),
		s = "[object Null]",
		a = "[object Undefined]",
		c = o ? o.toStringTag : void 0;
	t.exports = function(t) {
		return null == t ? void 0 === t ? a : s : c && c in Object(t) ? r(t) : i(t)
	}
}, function(t, e, n) {
	var o = n(11),
		r = "object" == typeof self && self && self.Object === Object && self,
		i = o || r || Function("return this")();
	t.exports = i
}, function(t, e) {
	t.exports = function(t) {
		return null != t && "object" == typeof t
	}
}, function(t, e, n) {
	var o;

	! function(r, i, s, a) {
		"use strict";
		var c, u = ["", "webkit", "Moz", "MS", "ms", "o"],
			l = i.createElement("div"),
			h = "function",
			f = Math.round,
			p = Math.abs,
			m = Date.now;

		function d(t, e, n) {
			return setTimeout(_(t, n), e)
		}

		function v(t, e, n) {
			return !!Array.isArray(t) && (y(t, n[e], n), !0)
		}

		function y(t, e, n) {
			var o;
			if(t)
				if(t.forEach) t.forEach(e, n);
				else if(t.length !== a)
				for(o = 0; o < t.length;) e.call(n, t[o], o, t), o++;
			else
				for(o in t) t.hasOwnProperty(o) && e.call(n, t[o], o, t)
		}

		function g(t, e, n) {
			var o = "DEPRECATED METHOD: " + e + "\n" + n + " AT \n";
			return function() {
				var e = new Error("get-stack-trace"),
					n = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
					i = r.console && (r.console.warn || r.console.log);
				return i && i.call(r.console, o, n), t.apply(this, arguments)
			}
		}
		c = "function" != typeof Object.assign ? function(t) {
			if(t === a || null === t) throw new TypeError("Cannot convert undefined or null to object");
			for(var e = Object(t), n = 1; n < arguments.length; n++) {
				var o = arguments[n];
				if(o !== a && null !== o)
					for(var r in o) o.hasOwnProperty(r) && (e[r] = o[r])
			}
			return e
		} : Object.assign;
		var b = g(function(t, e, n) {
				for(var o = Object.keys(e), r = 0; r < o.length;)(!n || n && t[o[r]] === a) && (t[o[r]] = e[o[r]]), r++;
				return t
			}, "extend", "Use `assign`."),
			w = g(function(t, e) {
				return b(t, e, !0)
			}, "merge", "Use `assign`.");

		function x(t, e, n) {
			var o, r = e.prototype;
			(o = t.prototype = Object.create(r)).constructor = t, o._super = r, n && c(o, n)
		}

		function _(t, e) {
			return function() {
				return t.apply(e, arguments)
			}
		}

		function P(t, e) {
			return typeof t == h ? t.apply(e && e[0] || a, e) : t
		}

		function O(t, e) {
			return t === a ? e : t
		}

		function T(t, e, n) {
			y(S(e), function(e) {
				t.addEventListener(e, n, !1)
			})
		}

		function E(t, e, n) {
			y(S(e), function(e) {
				t.removeEventListener(e, n, !1)
			})
		}

		function k(t, e) {
			for(; t;) {
				if(t == e) return !0;
				t = t.parentNode
			}
			return !1
		}

		function $(t, e) {
			return t.indexOf(e) > -1
		}

		function S(t) {
			return t.trim().split(/\s+/g)
		}

		function j(t, e, n) {
			if(t.indexOf && !n) return t.indexOf(e);
			for(var o = 0; o < t.length;) {
				if(n && t[o][n] == e || !n && t[o] === e) return o;
				o++
			}
			return -1
		}

		function R(t) {
			return Array.prototype.slice.call(t, 0)
		}

		function C(t, e, n) {
			for(var o = [], r = [], i = 0; i < t.length;) {
				var s = e ? t[i][e] : t[i];
				j(r, s) < 0 && o.push(t[i]), r[i] = s, i++
			}
			return n && (o = e ? o.sort(function(t, n) {
				return t[e] > n[e]
			}) : o.sort()), o
		}

		function F(t, e) {
			for(var n, o, r = e[0].toUpperCase() + e.slice(1), i = 0; i < u.length;) {
				if((o = (n = u[i]) ? n + r : e) in t) return o;
				i++
			}
			return a
		}
		var M = 1;

		function A(t) {
			var e = t.ownerDocument || t;
			return e.defaultView || e.parentWindow || r
		}
		var D = "ontouchstart" in r,
			L = F(r, "PointerEvent") !== a,
			I = D && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
			N = 25,
			z = 1,
			Z = 2,
			H = 4,
			B = 8,
			U = 1,
			W = 2,
			Y = 4,
			X = 8,
			q = 16,
			V = W | Y,
			G = X | q,
			K = V | G,
			J = ["x", "y"],
			Q = ["clientX", "clientY"];

		function tt(t, e) {
			var n = this;
			this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
				P(t.options.enable, [t]) && n.handler(e)
			}, this.init()
		}

		function et(t, e, n) {
			var o = n.pointers.length,
				r = n.changedPointers.length,
				i = e & z && o - r == 0,
				s = e & (H | B) && o - r == 0;
			n.isFirst = !!i, n.isFinal = !!s, i && (t.session = {}), n.eventType = e,
				function(t, e) {
					var n = t.session,
						o = e.pointers,
						r = o.length;
					n.firstInput || (n.firstInput = nt(e));
					r > 1 && !n.firstMultiple ? n.firstMultiple = nt(e) : 1 === r && (n.firstMultiple = !1);
					var i = n.firstInput,
						s = n.firstMultiple,
						c = s ? s.center : i.center,
						u = e.center = ot(o);
					e.timeStamp = m(), e.deltaTime = e.timeStamp - i.timeStamp, e.angle = at(c, u), e.distance = st(c, u),
						function(t, e) {
							var n = e.center,
								o = t.offsetDelta || {},
								r = t.prevDelta || {},
								i = t.prevInput || {};
							e.eventType !== z && i.eventType !== H || (r = t.prevDelta = {
								x: i.deltaX || 0,
								y: i.deltaY || 0
							}, o = t.offsetDelta = {
								x: n.x,
								y: n.y
							});
							e.deltaX = r.x + (n.x - o.x), e.deltaY = r.y + (n.y - o.y)
						}(n, e), e.offsetDirection = it(e.deltaX, e.deltaY);
					var l = rt(e.deltaTime, e.deltaX, e.deltaY);
					e.overallVelocityX = l.x, e.overallVelocityY = l.y, e.overallVelocity = p(l.x) > p(l.y) ? l.x : l.y, e.scale = s ? (h = s.pointers, f = o, st(f[0], f[1], Q) / st(h[0], h[1], Q)) : 1, e.rotation = s ? function(t, e) {
							return at(e[1], e[0], Q) + at(t[1], t[0], Q)
						}(s.pointers, o) : 0, e.maxPointers = n.prevInput ? e.pointers.length > n.prevInput.maxPointers ? e.pointers.length : n.prevInput.maxPointers : e.pointers.length,
						function(t, e) {
							var n, o, r, i, s = t.lastInterval || e,
								c = e.timeStamp - s.timeStamp;
							if(e.eventType != B && (c > N || s.velocity === a)) {
								var u = e.deltaX - s.deltaX,
									l = e.deltaY - s.deltaY,
									h = rt(c, u, l);
								o = h.x, r = h.y, n = p(h.x) > p(h.y) ? h.x : h.y, i = it(u, l), t.lastInterval = e
							} else n = s.velocity, o = s.velocityX, r = s.velocityY, i = s.direction;
							e.velocity = n, e.velocityX = o, e.velocityY = r, e.direction = i
						}(n, e);
					var h, f;
					var d = t.element;
					k(e.srcEvent.target, d) && (d = e.srcEvent.target);
					e.target = d
				}(t, n), t.emit("hammer.input", n), t.recognize(n), t.session.prevInput = n
		}

		function nt(t) {
			for(var e = [], n = 0; n < t.pointers.length;) e[n] = {
				clientX: f(t.pointers[n].clientX),
				clientY: f(t.pointers[n].clientY)
			}, n++;
			return {
				timeStamp: m(),
				pointers: e,
				center: ot(e),
				deltaX: t.deltaX,
				deltaY: t.deltaY
			}
		}

		function ot(t) {
			var e = t.length;
			if(1 === e) return {
				x: f(t[0].clientX),
				y: f(t[0].clientY)
			};
			for(var n = 0, o = 0, r = 0; r < e;) n += t[r].clientX, o += t[r].clientY, r++;
			return {
				x: f(n / e),
				y: f(o / e)
			}
		}

		function rt(t, e, n) {
			return {
				x: e / t || 0,
				y: n / t || 0
			}
		}

		function it(t, e) {
			return t === e ? U : p(t) >= p(e) ? t < 0 ? W : Y : e < 0 ? X : q
		}

		function st(t, e, n) {
			n || (n = J);
			var o = e[n[0]] - t[n[0]],
				r = e[n[1]] - t[n[1]];
			return Math.sqrt(o * o + r * r)
		}

		function at(t, e, n) {
			n || (n = J);
			var o = e[n[0]] - t[n[0]],
				r = e[n[1]] - t[n[1]];
			return 180 * Math.atan2(r, o) / Math.PI
		}
		tt.prototype = {
			handler: function() {},
			init: function() {
				this.evEl && T(this.element, this.evEl, this.domHandler), this.evTarget && T(this.target, this.evTarget, this.domHandler), this.evWin && T(A(this.element), this.evWin, this.domHandler)
			},
			destroy: function() {
				this.evEl && E(this.element, this.evEl, this.domHandler), this.evTarget && E(this.target, this.evTarget, this.domHandler), this.evWin && E(A(this.element), this.evWin, this.domHandler)
			}
		};
		var ct = {
				mousedown: z,
				mousemove: Z,
				mouseup: H
			},
			ut = "mousedown",
			lt = "mousemove mouseup";

		function ht() {
			this.evEl = ut, this.evWin = lt, this.pressed = !1, tt.apply(this, arguments)
		}
		x(ht, tt, {
			handler: function(t) {
				var e = ct[t.type];
				e & z && 0 === t.button && (this.pressed = !0), e & Z && 1 !== t.which && (e = H), this.pressed && (e & H && (this.pressed = !1), this.callback(this.manager, e, {
					pointers: [t],
					changedPointers: [t],
					pointerType: "mouse",
					srcEvent: t
				}))
			}
		});
		var ft = {
				pointerdown: z,
				pointermove: Z,
				pointerup: H,
				pointercancel: B,
				pointerout: B
			},
			pt = {
				2: "touch",
				3: "pen",
				4: "mouse",
				5: "kinect"
			},
			mt = "pointerdown",
			dt = "pointermove pointerup pointercancel";

		function vt() {
			this.evEl = mt, this.evWin = dt, tt.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
		}
		r.MSPointerEvent && !r.PointerEvent && (mt = "MSPointerDown", dt = "MSPointerMove MSPointerUp MSPointerCancel"), x(vt, tt, {
			handler: function(t) {
				var e = this.store,
					n = !1,
					o = t.type.toLowerCase().replace("ms", ""),
					r = ft[o],
					i = pt[t.pointerType] || t.pointerType,
					s = "touch" == i,
					a = j(e, t.pointerId, "pointerId");
				r & z && (0 === t.button || s) ? a < 0 && (e.push(t), a = e.length - 1) : r & (H | B) && (n = !0), a < 0 || (e[a] = t, this.callback(this.manager, r, {
					pointers: e,
					changedPointers: [t],
					pointerType: i,
					srcEvent: t
				}), n && e.splice(a, 1))
			}
		});
		var yt = {
				touchstart: z,
				touchmove: Z,
				touchend: H,
				touchcancel: B
			},
			gt = "touchstart",
			bt = "touchstart touchmove touchend touchcancel";

		function wt() {
			this.evTarget = gt, this.evWin = bt, this.started = !1, tt.apply(this, arguments)
		}
		x(wt, tt, {
			handler: function(t) {
				var e = yt[t.type];
				if(e === z && (this.started = !0), this.started) {
					var n = function(t, e) {
						var n = R(t.touches),
							o = R(t.changedTouches);
						e & (H | B) && (n = C(n.concat(o), "identifier", !0));
						return [n, o]
					}.call(this, t, e);
					e & (H | B) && n[0].length - n[1].length == 0 && (this.started = !1), this.callback(this.manager, e, {
						pointers: n[0],
						changedPointers: n[1],
						pointerType: "touch",
						srcEvent: t
					})
				}
			}
		});
		var xt = {
				touchstart: z,
				touchmove: Z,
				touchend: H,
				touchcancel: B
			},
			_t = "touchstart touchmove touchend touchcancel";

		function Pt() {
			this.evTarget = _t, this.targetIds = {}, tt.apply(this, arguments)
		}
		x(Pt, tt, {
			handler: function(t) {
				var e = xt[t.type],
					n = function(t, e) {
						var n = R(t.touches),
							o = this.targetIds;
						if(e & (z | Z) && 1 === n.length) return o[n[0].identifier] = !0, [n, n];
						var r, i, s = R(t.changedTouches),
							a = [],
							c = this.target;
						if(i = n.filter(function(t) {
								return k(t.target, c)
							}), e === z)
							for(r = 0; r < i.length;) o[i[r].identifier] = !0, r++;
						r = 0;
						for(; r < s.length;) o[s[r].identifier] && a.push(s[r]), e & (H | B) && delete o[s[r].identifier], r++;
						if(!a.length) return;
						return [C(i.concat(a), "identifier", !0), a]
					}.call(this, t, e);
				n && this.callback(this.manager, e, {
					pointers: n[0],
					changedPointers: n[1],
					pointerType: "touch",
					srcEvent: t
				})
			}
		});
		var Ot = 2500,
			Tt = 25;

		function Et() {
			tt.apply(this, arguments);
			var t = _(this.handler, this);
			this.touch = new Pt(this.manager, t), this.mouse = new ht(this.manager, t), this.primaryTouch = null, this.lastTouches = []
		}

		function kt(t) {
			var e = t.changedPointers[0];
			if(e.identifier === this.primaryTouch) {
				var n = {
					x: e.clientX,
					y: e.clientY
				};
				this.lastTouches.push(n);
				var o = this.lastTouches;
				setTimeout(function() {
					var t = o.indexOf(n);
					t > -1 && o.splice(t, 1)
				}, Ot)
			}
		}
		x(Et, tt, {
			handler: function(t, e, n) {
				var o = "touch" == n.pointerType,
					r = "mouse" == n.pointerType;
				if(!(r && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
					if(o)(function(t, e) {
						t & z ? (this.primaryTouch = e.changedPointers[0].identifier, kt.call(this, e)) : t & (H | B) && kt.call(this, e)
					}).call(this, e, n);
					else if(r && function(t) {
							for(var e = t.srcEvent.clientX, n = t.srcEvent.clientY, o = 0; o < this.lastTouches.length; o++) {
								var r = this.lastTouches[o],
									i = Math.abs(e - r.x),
									s = Math.abs(n - r.y);
								if(i <= Tt && s <= Tt) return !0
							}
							return !1
						}.call(this, n)) return;
					this.callback(t, e, n)
				}
			},
			destroy: function() {
				this.touch.destroy(), this.mouse.destroy()
			}
		});
		var $t = F(l.style, "touchAction"),
			St = $t !== a,
			jt = "auto",
			Rt = "manipulation",
			Ct = "none",
			Ft = "pan-x",
			Mt = "pan-y",
			At = function() {
				if(!St) return !1;
				var t = {},
					e = r.CSS && r.CSS.supports;
				return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(n) {
					t[n] = !e || r.CSS.supports("touch-action", n)
				}), t
			}();

		function Dt(t, e) {
			this.manager = t, this.set(e)
		}
		Dt.prototype = {
			set: function(t) {
				"compute" == t && (t = this.compute()), St && this.manager.element.style && At[t] && (this.manager.element.style[$t] = t), this.actions = t.toLowerCase().trim()
			},
			update: function() {
				this.set(this.manager.options.touchAction)
			},
			compute: function() {
				var t = [];
				return y(this.manager.recognizers, function(e) {
						P(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
					}),
					function(t) {
						if($(t, Ct)) return Ct;
						var e = $(t, Ft),
							n = $(t, Mt);
						if(e && n) return Ct;
						if(e || n) return e ? Ft : Mt;
						if($(t, Rt)) return Rt;
						return jt
					}(t.join(" "))
			},
			preventDefaults: function(t) {
				var e = t.srcEvent,
					n = t.offsetDirection;
				if(this.manager.session.prevented) e.preventDefault();
				else {
					var o = this.actions,
						r = $(o, Ct) && !At[Ct],
						i = $(o, Mt) && !At[Mt],
						s = $(o, Ft) && !At[Ft];
					if(r) {
						var a = 1 === t.pointers.length,
							c = t.distance < 2,
							u = t.deltaTime < 250;
						if(a && c && u) return
					}
					if(!s || !i) return r || i && n & V || s && n & G ? this.preventSrc(e) : void 0
				}
			},
			preventSrc: function(t) {
				this.manager.session.prevented = !0, t.preventDefault()
			}
		};
		var Lt = 1,
			It = 2,
			Nt = 4,
			zt = 8,
			Zt = zt,
			Ht = 16;

		function Bt(t) {
			this.options = c({}, this.defaults, t || {}), this.id = M++, this.manager = null, this.options.enable = O(this.options.enable, !0), this.state = Lt, this.simultaneous = {}, this.requireFail = []
		}

		function Ut(t) {
			return t & Ht ? "cancel" : t & zt ? "end" : t & Nt ? "move" : t & It ? "start" : ""
		}

		function Wt(t) {
			return t == q ? "down" : t == X ? "up" : t == W ? "left" : t == Y ? "right" : ""
		}

		function Yt(t, e) {
			var n = e.manager;
			return n ? n.get(t) : t
		}

		function Xt() {
			Bt.apply(this, arguments)
		}

		function qt() {
			Xt.apply(this, arguments), this.pX = null, this.pY = null
		}

		function Vt() {
			Xt.apply(this, arguments)
		}

		function Gt() {
			Bt.apply(this, arguments), this._timer = null, this._input = null
		}

		function Kt() {
			Xt.apply(this, arguments)
		}

		function Jt() {
			Xt.apply(this, arguments)
		}

		function Qt() {
			Bt.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
		}

		function te(t, e) {
			return(e = e || {}).recognizers = O(e.recognizers, te.defaults.preset), new ee(t, e)
		}
		Bt.prototype = {
			defaults: {},
			set: function(t) {
				return c(this.options, t), this.manager && this.manager.touchAction.update(), this
			},
			recognizeWith: function(t) {
				if(v(t, "recognizeWith", this)) return this;
				var e = this.simultaneous;
				return e[(t = Yt(t, this)).id] || (e[t.id] = t, t.recognizeWith(this)), this
			},
			dropRecognizeWith: function(t) {
				return v(t, "dropRecognizeWith", this) ? this : (t = Yt(t, this), delete this.simultaneous[t.id], this)
			},
			requireFailure: function(t) {
				if(v(t, "requireFailure", this)) return this;
				var e = this.requireFail;
				return -1 === j(e, t = Yt(t, this)) && (e.push(t), t.requireFailure(this)), this
			},
			dropRequireFailure: function(t) {
				if(v(t, "dropRequireFailure", this)) return this;
				t = Yt(t, this);
				var e = j(this.requireFail, t);
				return e > -1 && this.requireFail.splice(e, 1), this
			},
			hasRequireFailures: function() {
				return this.requireFail.length > 0
			},
			canRecognizeWith: function(t) {
				return !!this.simultaneous[t.id]
			},
			emit: function(t) {
				var e = this,
					n = this.state;

				function o(n) {
					e.manager.emit(n, t)
				}
				n < zt && o(e.options.event + Ut(n)), o(e.options.event), t.additionalEvent && o(t.additionalEvent), n >= zt && o(e.options.event + Ut(n))
			},
			tryEmit: function(t) {
				if(this.canEmit()) return this.emit(t);
				this.state = 32
			},
			canEmit: function() {
				for(var t = 0; t < this.requireFail.length;) {
					if(!(this.requireFail[t].state & (32 | Lt))) return !1;
					t++
				}
				return !0
			},
			recognize: function(t) {
				var e = c({}, t);
				if(!P(this.options.enable, [this, e])) return this.reset(), void(this.state = 32);
				this.state & (Zt | Ht | 32) && (this.state = Lt), this.state = this.process(e), this.state & (It | Nt | zt | Ht) && this.tryEmit(e)
			},
			process: function(t) {},
			getTouchAction: function() {},
			reset: function() {}
		}, x(Xt, Bt, {
			defaults: {
				pointers: 1
			},
			attrTest: function(t) {
				var e = this.options.pointers;
				return 0 === e || t.pointers.length === e
			},
			process: function(t) {
				var e = this.state,
					n = t.eventType,
					o = e & (It | Nt),
					r = this.attrTest(t);
				return o && (n & B || !r) ? e | Ht : o || r ? n & H ? e | zt : e & It ? e | Nt : It : 32
			}
		}), x(qt, Xt, {
			defaults: {
				event: "pan",
				threshold: 10,
				pointers: 1,
				direction: K
			},
			getTouchAction: function() {
				var t = this.options.direction,
					e = [];
				return t & V && e.push(Mt), t & G && e.push(Ft), e
			},
			directionTest: function(t) {
				var e = this.options,
					n = !0,
					o = t.distance,
					r = t.direction,
					i = t.deltaX,
					s = t.deltaY;
				return r & e.direction || (e.direction & V ? (r = 0 === i ? U : i < 0 ? W : Y, n = i != this.pX, o = Math.abs(t.deltaX)) : (r = 0 === s ? U : s < 0 ? X : q, n = s != this.pY, o = Math.abs(t.deltaY))), t.direction = r, n && o > e.threshold && r & e.direction
			},
			attrTest: function(t) {
				return Xt.prototype.attrTest.call(this, t) && (this.state & It || !(this.state & It) && this.directionTest(t))
			},
			emit: function(t) {
				this.pX = t.deltaX, this.pY = t.deltaY;
				var e = Wt(t.direction);
				e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
			}
		}), x(Vt, Xt, {
			defaults: {
				event: "pinch",
				threshold: 0,
				pointers: 2
			},
			getTouchAction: function() {
				return [Ct]
			},
			attrTest: function(t) {
				return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & It)
			},
			emit: function(t) {
				if(1 !== t.scale) {
					var e = t.scale < 1 ? "in" : "out";
					t.additionalEvent = this.options.event + e
				}
				this._super.emit.call(this, t)
			}
		}), x(Gt, Bt, {
			defaults: {
				event: "press",
				pointers: 1,
				time: 251,
				threshold: 9
			},
			getTouchAction: function() {
				return [jt]
			},
			process: function(t) {
				var e = this.options,
					n = t.pointers.length === e.pointers,
					o = t.distance < e.threshold,
					r = t.deltaTime > e.time;
				if(this._input = t, !o || !n || t.eventType & (H | B) && !r) this.reset();
				else if(t.eventType & z) this.reset(), this._timer = d(function() {
					this.state = Zt, this.tryEmit()
				}, e.time, this);
				else if(t.eventType & H) return Zt;
				return 32
			},
			reset: function() {
				clearTimeout(this._timer)
			},
			emit: function(t) {
				this.state === Zt && (t && t.eventType & H ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = m(), this.manager.emit(this.options.event, this._input)))
			}
		}), x(Kt, Xt, {
			defaults: {
				event: "rotate",
				threshold: 0,
				pointers: 2
			},
			getTouchAction: function() {
				return [Ct]
			},
			attrTest: function(t) {
				return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & It)
			}
		}), x(Jt, Xt, {
			defaults: {
				event: "swipe",
				threshold: 10,
				velocity: .3,
				direction: V | G,
				pointers: 1
			},
			getTouchAction: function() {
				return qt.prototype.getTouchAction.call(this)
			},
			attrTest: function(t) {
				var e, n = this.options.direction;
				return n & (V | G) ? e = t.overallVelocity : n & V ? e = t.overallVelocityX : n & G && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && n & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && p(e) > this.options.velocity && t.eventType & H
			},
			emit: function(t) {
				var e = Wt(t.offsetDirection);
				e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
			}
		}), x(Qt, Bt, {
			defaults: {
				event: "tap",
				pointers: 1,
				taps: 1,
				interval: 300,
				time: 250,
				threshold: 9,
				posThreshold: 10
			},
			getTouchAction: function() {
				return [Rt]
			},
			process: function(t) {
				var e = this.options,
					n = t.pointers.length === e.pointers,
					o = t.distance < e.threshold,
					r = t.deltaTime < e.time;
				if(this.reset(), t.eventType & z && 0 === this.count) return this.failTimeout();
				if(o && r && n) {
					if(t.eventType != H) return this.failTimeout();
					var i = !this.pTime || t.timeStamp - this.pTime < e.interval,
						s = !this.pCenter || st(this.pCenter, t.center) < e.posThreshold;
					if(this.pTime = t.timeStamp, this.pCenter = t.center, s && i ? this.count += 1 : this.count = 1, this._input = t, 0 === this.count % e.taps) return this.hasRequireFailures() ? (this._timer = d(function() {
						this.state = Zt, this.tryEmit()
					}, e.interval, this), It) : Zt
				}
				return 32
			},
			failTimeout: function() {
				return this._timer = d(function() {
					this.state = 32
				}, this.options.interval, this), 32
			},
			reset: function() {
				clearTimeout(this._timer)
			},
			emit: function() {
				this.state == Zt && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
			}
		}), te.VERSION = "2.0.7", te.defaults = {
			domEvents: !1,
			touchAction: "compute",
			enable: !0,
			inputTarget: null,
			inputClass: null,
			preset: [
				[Kt, {
					enable: !1
				}],
				[Vt, {
						enable: !1
					},
					["rotate"]
				],
				[Jt, {
					direction: V
				}],
				[qt, {
						direction: V
					},
					["swipe"]
				],
				[Qt],
				[Qt, {
						event: "doubletap",
						taps: 2
					},
					["tap"]
				],
				[Gt]
			],
			cssProps: {
				userSelect: "none",
				touchSelect: "none",
				touchCallout: "none",
				contentZooming: "none",
				userDrag: "none",
				tapHighlightColor: "rgba(0,0,0,0)"
			}
		};

		function ee(t, e) {
			var n;
			this.options = c({}, te.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = new((n = this).options.inputClass || (L ? vt : I ? Pt : D ? Et : ht))(n, et), this.touchAction = new Dt(this, this.options.touchAction), ne(this, !0), y(this.options.recognizers, function(t) {
				var e = this.add(new t[0](t[1]));
				t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
			}, this)
		}

		function ne(t, e) {
			var n, o = t.element;
			o.style && (y(t.options.cssProps, function(r, i) {
				n = F(o.style, i), e ? (t.oldCssProps[n] = o.style[n], o.style[n] = r) : o.style[n] = t.oldCssProps[n] || ""
			}), e || (t.oldCssProps = {}))
		}
		ee.prototype = {
			set: function(t) {
				return c(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
			},
			stop: function(t) {
				this.session.stopped = t ? 2 : 1
			},
			recognize: function(t) {
				var e = this.session;
				if(!e.stopped) {
					var n;
					this.touchAction.preventDefaults(t);
					var o = this.recognizers,
						r = e.curRecognizer;
					(!r || r && r.state & Zt) && (r = e.curRecognizer = null);
					for(var i = 0; i < o.length;) n = o[i], 2 === e.stopped || r && n != r && !n.canRecognizeWith(r) ? n.reset() : n.recognize(t), !r && n.state & (It | Nt | zt) && (r = e.curRecognizer = n), i++
				}
			},
			get: function(t) {
				if(t instanceof Bt) return t;
				for(var e = this.recognizers, n = 0; n < e.length; n++)
					if(e[n].options.event == t) return e[n];
				return null
			},
			add: function(t) {
				if(v(t, "add", this)) return this;
				var e = this.get(t.options.event);
				return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
			},
			remove: function(t) {
				if(v(t, "remove", this)) return this;
				if(t = this.get(t)) {
					var e = this.recognizers,
						n = j(e, t); - 1 !== n && (e.splice(n, 1), this.touchAction.update())
				}
				return this
			},
			on: function(t, e) {
				if(t !== a && e !== a) {
					var n = this.handlers;
					return y(S(t), function(t) {
						n[t] = n[t] || [], n[t].push(e)
					}), this
				}
			},
			off: function(t, e) {
				if(t !== a) {
					var n = this.handlers;
					return y(S(t), function(t) {
						e ? n[t] && n[t].splice(j(n[t], e), 1) : delete n[t]
					}), this
				}
			},
			emit: function(t, e) {
				this.options.domEvents && function(t, e) {
					var n = i.createEvent("Event");
					n.initEvent(t, !0, !0), n.gesture = e, e.target.dispatchEvent(n)
				}(t, e);
				var n = this.handlers[t] && this.handlers[t].slice();
				if(n && n.length) {
					e.type = t, e.preventDefault = function() {
						e.srcEvent.preventDefault()
					};
					for(var o = 0; o < n.length;) n[o](e), o++
				}
			},
			destroy: function() {
				this.element && ne(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
			}
		}, c(te, {
			INPUT_START: z,
			INPUT_MOVE: Z,
			INPUT_END: H,
			INPUT_CANCEL: B,
			STATE_POSSIBLE: Lt,
			STATE_BEGAN: It,
			STATE_CHANGED: Nt,
			STATE_ENDED: zt,
			STATE_RECOGNIZED: Zt,
			STATE_CANCELLED: Ht,
			STATE_FAILED: 32,
			DIRECTION_NONE: U,
			DIRECTION_LEFT: W,
			DIRECTION_RIGHT: Y,
			DIRECTION_UP: X,
			DIRECTION_DOWN: q,
			DIRECTION_HORIZONTAL: V,
			DIRECTION_VERTICAL: G,
			DIRECTION_ALL: K,
			Manager: ee,
			Input: tt,
			TouchAction: Dt,
			TouchInput: Pt,
			MouseInput: ht,
			PointerEventInput: vt,
			TouchMouseInput: Et,
			SingleTouchInput: wt,
			Recognizer: Bt,
			AttrRecognizer: Xt,
			Tap: Qt,
			Pan: qt,
			Swipe: Jt,
			Pinch: Vt,
			Rotate: Kt,
			Press: Gt,
			on: T,
			off: E,
			each: y,
			merge: w,
			extend: b,
			assign: c,
			inherit: x,
			bindFn: _,
			prefixed: F
		}), (void 0 !== r ? r : "undefined" != typeof self ? self : {}).Hammer = te, (o = function() {
			return te
		}.call(e, n, e, t)) === a || (t.exports = o)
	}(window, document)
}, function(t, e, n) {
	var o = n(8);
	t.exports = function(t, e, n) {
		"__proto__" == e && o ? o(t, e, {
			configurable: !0,
			enumerable: !0,
			value: n,
			writable: !0
		}) : t[e] = n
	}
}, function(t, e, n) {
	var o = n(25),
		r = function() {
			try {
				var t = o(Object, "defineProperty");
				return t({}, "", {}), t
			} catch(t) {}
		}();
	t.exports = r
}, function(t, e, n) {
	var o = n(3),
		r = n(1),
		i = "[object AsyncFunction]",
		s = "[object Function]",
		a = "[object GeneratorFunction]",
		c = "[object Proxy]";
	t.exports = function(t) {
		if(!r(t)) return !1;
		var e = o(t);
		return e == s || e == a || e == i || e == c
	}
}, function(t, e, n) {
	var o = n(4).Symbol;
	t.exports = o
}, function(t, e, n) {
	(function(e) {
		var n = "object" == typeof e && e && e.Object === Object && e;
		t.exports = n
	}).call(this, n(27))
}, function(t, e) {
	t.exports = function(t, e) {
		return t === e || t != t && e != e
	}
}, function(t, e) {
	t.exports = function(t) {
		return t
	}
}, function(t, e, n) {
	var o = n(9),
		r = n(15);
	t.exports = function(t) {
		return null != t && r(t.length) && !o(t)
	}
}, function(t, e) {
	var n = 9007199254740991;
	t.exports = function(t) {
		return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n
	}
}, function(t, e) {
	var n = 9007199254740991,
		o = /^(?:0|[1-9]\d*)$/;
	t.exports = function(t, e) {
		var r = typeof t;
		return !!(e = null == e ? n : e) && ("number" == r || "symbol" != r && o.test(t)) && t > -1 && t % 1 == 0 && t < e
	}
}, function(t, e) {
	t.exports = function(t) {
		return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
			enumerable: !0,
			get: function() {
				return t.l
			}
		}), Object.defineProperty(t, "id", {
			enumerable: !0,
			get: function() {
				return t.i
			}
		}), t.webpackPolyfill = 1), t
	}
}, function(t, e, n) {
	"use strict";

	function o(t, e) {
		for(var n = 0; n < e.length; n++) {
			var o = e[n];
			o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
		}
	}

	function r(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}
	var i, s, a, c, u = function() {
			function t(e, n, o, i) {
				var s = this;
				! function(t, e) {
					if(!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, t), r(this, "x", void 0), r(this, "y", void 0), r(this, "zoom", void 0), r(this, "loaded", !1), r(this, "progress", 0), r(this, "el", void 0), r(this, "url", void 0), r(this, "req", void 0), r(this, "onload", void 0), r(this, "onprogress", void 0), r(this, "onerror", void 0), this.x = e, this.y = n, this.zoom = o, this.url = i;
				var a = new Image;
				a.onload = function(t) {
					s.loaded = !0, s.onload && s.onload.call(s, t)
				}, this.el = a
			}
			var e, n, i;
			return e = t, (n = [{
				key: "load",
				value: function() {
					this.el.src = this.url
				}
			}, {
				key: "loadSingle",
				value: function() {
					this.el.src = this.url
				}
			}, {
				key: "loadSingleOld",
				value: function() {
					var t = this,
						e = new XMLHttpRequest;
					e.open("GET", this.url, !0), e.responseType = "arraybuffer", e.onload = function(n) {
						var o = e.getAllResponseHeaders().match(/^Content-Type\:\s*(.*?)$/im),
							r = o ? o[1] : "image/jpeg",
							i = new Blob([e.response], {
								type: r
							});
						t.el.src = window.URL.createObjectURL(i)
					}, e.onprogress = function(e) {
						t.progress = e.loaded / e.total * 100, t.onprogress && t.onprogress.call(t, e)
					}, e.onloadstart = function() {}, e.onerror = function(e) {
						t.onerror && t.onerror.call(t, e)
					}, this.req = e, this.req.send()
				}
			}, {
				key: "name",
				get: function() {
					return "X:".concat(this.x, " / Y:").concat(this.y, " / Zoom:").concat(this.zoom, "%")
				}
			}]) && o(e.prototype, n), i && o(e, i), t
		}(),
		l = n(0);
	! function(t) {
		t.Menu = "menu", t.Fullscreen = "fullscreen", t.Play = "play", t.Forward = "forward", t.Backward = "backward", t.Down = "down", t.Up = "up", t.ZoomIn = "zoom-in", t.ZoomOut = "zoom-out"
	}(i || (i = {})),
	function(t) {
		t.X = "x", t.Y = "y"
	}(s || (s = {})),
	function(t) {
		t.Play = "PLAY", t.PlayReverse = "PLAY_REVERSE", t.Stop = "STOP", t.Loading = "LOADING", t.ZoomIn = "ZOOM_IN", t.ZoomOut = "ZOOM_OUT", t.StatusZoomIn = "STATUS_ZOOM_IN", t.StatusZoomOut = "STATUS_ZOOM_OUT", t.ToggleMenu = "TOGGLE_MENU", t.CloseHelper = "CLOSE_HELPER", t.PlayStatus = "PLAY_STATUS", t.ActiveStatus = "ACTIVE_STATUS", t.Up = "UP", t.Down = "DOWN", t.Update = "UPDATE", t.ZoomReset = "ZOOM_RESET", t.HideHelper = "HIDE_HELPER", t.Preloader = "PRELOADER", t.StartLoading = "START_LOADING", t.FullscreenChanged = "FULLSCREEN_CHANGED", t.StatusMove = "STATUS_MOVE", t.DisablePlay = "DISABLE_PLAY", t.DisableY = "DisableY"
	}(a || (a = {})),
	function(t) {
		t[t.Forward = 0] = "Forward", t[t.Backward = 1] = "Backward", t[t.Stopped = 2] = "Stopped"
	}(c || (c = {}));
	var h = n(6),
		f = n.n(h);

	function p(t, e, n, o, r, i, s) {
		try {
			var a = t[i](s),
				c = a.value
		} catch(t) {
			return void n(t)
		}
		a.done ? e(c) : Promise.resolve(c).then(o, r)
	}

	function m(t) {
		return function() {
			var e = this,
				n = arguments;
			return new Promise(function(o, r) {
				var i = t.apply(e, n);

				function s(t) {
					p(i, o, r, s, a, "next", t)
				}

				function a(t) {
					p(i, o, r, s, a, "throw", t)
				}
				s(void 0)
			})
		}
	}
	var d = Vue.extend({
			template: '<canvas :class="options.className + \'__canvas\'" :style="style" :width="width" :height="height"\n        @mousedown="onMouseDown" @mouseup="onLocalMouseUp"\n        @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd" @touchcancel="clearMouseVars"\n        @mousewheel="onMouseWheel"></canvas>',
			data: function() {
				return {
					width: 300,
					height: 150,
					path: "",
					filename: "",
					firstStarted: !1,
					fullscreen: !1,
					mouseDown: !1,
					reverse: !1,
					started: !1,
					shouldPlayOnMouseUp: !0,
					loading: !1,
					preloading: !1,
					progress: -1,
					showProgress: !1,
					loadedLevels: {},
					zoomSizes: {},
					baseZoom: 0,
					logicalZoom: 0,
					currentZoomStep: .1,
					zoomBaseRelative: 1,
					movePosition: {
						x: 0,
						y: 0
					},
					mousePosition: {
						x: 0,
						y: 0
					},
					direction: s.X,
					parentMovePercent: 0,
					frameNumbers: {
						x: 0,
						y: 0
					},
					frames: {},
					debugColors: {
						25: "green",
						50: "yellow",
						100: "red",
						200: "blue",
						300: "orange",
						400: "gray"
					},
					lastMove: 0,
					lastClick: 0
				}
			},
			computed: {
				style: function() {
					var t = "position: absolute; width: auto; height: auto; top: 0px; left: 0px;";
					return this.move && (t += "cursor: move;"), t
				},
				options: function() {
					return this.$root.options
				},
				canvas: function() {
					return this.$el
				},
				context: function() {
					var t = this.canvas.getContext("2d");
					if(!t) throw new Error("2D Context not exists");
					return t
				},
				move: function() {
					return this.logicalZoom > 0
				},
				y: function() {
					return this.options.yframes > 1
				},
				maxZoom: function() {
					return this.options.zoomLevels[this.options.zoomLevels.length - 1]
				},
				maxZoomBaseRelative: function() {
					return Math.ceil(this.maxZoom / this.baseZoom)
				},
				canZoom: function() {
					return isFinite(this.currentZoomStep)
				},
				currentZoom: function() {
					var t = this;
					if(this.fullscreen) {
						var e = this.baseZoom;
						if(Object.keys(this.zoomSizes).length < this.options.zoomLevels.length) m(regeneratorRuntime.mark(function e() {
							return regeneratorRuntime.wrap(function(e) {
								for(;;) switch(e.prev = e.next) {
									case 0:
										return e.next = 2, t.fetchFramesForFullscreenZoom();
									case 2:
										return e.next = 4, t.drawCurrentFrame();
									case 4:
									case "end":
										return e.stop()
								}
							}, e)
						}))(), e = this.maxZoom;
						else {
							var n = {};
							for(var o in this.zoomSizes) {
								var r = this.zoomSizes[o];
								n[Math.abs(r - window.innerWidth)] = Number(o)
							}
							var i = Object.keys(n).sort(function(t, e) {
								return Number(t) - Number(e)
							})[0];
							e = n[Number(i)]
						}
						if(this.zoomBaseRelative > 1) {
							var s = e / 100 - 1;
							(e = this.options.zoomLevels.filter(function(e) {
								return e >= 100 * (t.zoomBaseRelative + s)
							})[0]) || (e = this.maxZoom)
						}
						return e < 100 && this.options.zoomLevels.indexOf(100) > -1 ? 100 : e
					}
					if(this.zoomBaseRelative > 1) {
						var a = this.options.zoomLevels.filter(function(e) {
							return e >= 100 * t.zoomBaseRelative
						})[0];
						return a || (a = this.maxZoom), a
					}
					return this.baseZoom
				}
			},
			created: function() {
				this.frameNumbers.x = this.options.firstFrameX - 1, this.frameNumbers.y = this.options.firstFrameY - 1, this.path = this.$root.image.src.replace(".jpg", ".3d");
				var t = this.path.split("/");
				this.filename = t[t.length - 1], this.baseZoom = this.options.zoomLevels.filter(function(t) {
					return t >= 100
				})[0] || this.options.zoomLevels[0]
			},
			mounted: function() {
				var t = m(regeneratorRuntime.mark(function t() {
					var e, n = this;
					return regeneratorRuntime.wrap(function(t) {
						for(;;) switch(t.prev = t.next) {
							case 0:
								return this.$root.debug("mounted"), this.updateYStatus(this.frameNumbers.y), t.next = 4, this.adjustSize();
							case 4:
								return t.next = 6, this.drawCurrentFrame();
							case 6:
								if(window.addEventListener("resize", this.onWindowResize), document.addEventListener("webkitfullscreenchange", this.onFullscreenChanged), document.addEventListener("mozfullscreenchange", this.onFullscreenChanged), document.addEventListener("fullscreenchange", this.onFullscreenChanged), this.$root.$on(a.ZoomIn, function(t) {
										if(1 !== n.logicalZoom && n.canZoom) {
											var e = parseFloat((n.logicalZoom + n.currentZoomStep).toPrecision(8));
											e > 1 && (e = 1), n.logicalZoom = e
										}
									}), this.$root.$on(a.ZoomOut, function(t) {
										if(0 !== n.logicalZoom && n.canZoom) {
											var e = parseFloat((n.logicalZoom - n.currentZoomStep).toPrecision(8));
											e < 0 && (e = 0), n.logicalZoom = e
										}
									}), this.$root.$on(a.ZoomReset, function(t) {
										n.logicalZoom = 0, n.$root.debug("zoom reset")
									}), this.$root.$on(a.StartLoading, m(regeneratorRuntime.mark(function t() {
										return regeneratorRuntime.wrap(function(t) {
											for(;;) switch(t.prev = t.next) {
												case 0:
													if(!n.loading) {
														t.next = 2;
														break
													}
													return t.abrupt("return");
												case 2:
													if(n.firstStarted = !0, n.options.startImmediately) {
														t.next = 7;
														break
													}
													return t.next = 6, n.preloadThumbs();
												case 6:
													n.$root.$emit(a.DisablePlay, !1);
												case 7:
												case "end":
													return t.stop()
											}
										}, t)
									}))), this.$root.$on(a.Stop, function(t) {
										n.$root.debug("stop"), n.started = !1
									}), this.$root.$on(a.Play, function() {
										var t = m(regeneratorRuntime.mark(function t(e, o) {
											return regeneratorRuntime.wrap(function(t) {
												for(;;) switch(t.prev = t.next) {
													case 0:
														if(n.$root.debug(o ? "forward" : "play"), n.direction = s.X, n.reverse = !1, !o) {
															t.next = 13;
															break
														}
														if(!n.options.reverse) {
															t.next = 9;
															break
														}
														return t.next = 7, n.drawPrevFrame();
													case 7:
														t.next = 11;
														break;
													case 9:
														return t.next = 11, n.drawNextFrame();
													case 11:
														t.next = 14;
														break;
													case 13:
														n.play();
													case 14:
													case "end":
														return t.stop()
												}
											}, t)
										}));
										return function(e, n) {
											return t.apply(this, arguments)
										}
									}()), this.$root.$on(a.PlayReverse, function() {
										var t = m(regeneratorRuntime.mark(function t(e, o) {
											return regeneratorRuntime.wrap(function(t) {
												for(;;) switch(t.prev = t.next) {
													case 0:
														if(!n.loading) {
															t.next = 2;
															break
														}
														return t.abrupt("return");
													case 2:
														if(n.$root.debug(o ? "backward" : "play reverse"), n.direction = s.X, !o) {
															t.next = 14;
															break
														}
														if(!n.options.reverse) {
															t.next = 10;
															break
														}
														return t.next = 8, n.drawNextFrame();
													case 8:
														t.next = 12;
														break;
													case 10:
														return t.next = 12, n.drawPrevFrame();
													case 12:
														t.next = 16;
														break;
													case 14:
														n.reverse = !0, n.play();
													case 16:
													case "end":
														return t.stop()
												}
											}, t)
										}));
										return function(e, n) {
											return t.apply(this, arguments)
										}
									}()), this.$root.$on(a.Up, function() {
										var t = m(regeneratorRuntime.mark(function t(e, o) {
											return regeneratorRuntime.wrap(function(t) {
												for(;;) switch(t.prev = t.next) {
													case 0:
														if(!n.loading) {
															t.next = 2;
															break
														}
														return t.abrupt("return");
													case 2:
														if(n.$root.debug("up"), n.direction = s.Y, n.reverse = !1, !o) {
															t.next = 10;
															break
														}
														return t.next = 8, n.drawPrevFrame();
													case 8:
														t.next = 11;
														break;
													case 10:
														n.play();
													case 11:
													case "end":
														return t.stop()
												}
											}, t)
										}));
										return function(e, n) {
											return t.apply(this, arguments)
										}
									}()), this.$root.$on(a.Down, function() {
										var t = m(regeneratorRuntime.mark(function t(e, o) {
											return regeneratorRuntime.wrap(function(t) {
												for(;;) switch(t.prev = t.next) {
													case 0:
														if(!n.loading) {
															t.next = 2;
															break
														}
														return t.abrupt("return");
													case 2:
														if(n.$root.debug("down"), n.direction = s.Y, n.reverse = !1, !o) {
															t.next = 10;
															break
														}
														return t.next = 8, n.drawNextFrame();
													case 8:
														t.next = 11;
														break;
													case 10:
														n.play();
													case 11:
													case "end":
														return t.stop()
												}
											}, t)
										}));
										return function(e, n) {
											return t.apply(this, arguments)
										}
									}()), this.$root.$on(a.FullscreenChanged, function(t, e) {
										e ? (n.fullscreen = t, n.$root.debug("fullscreen open")) : (!t && n.fullscreen && n.$root.debug("fullscreen close"), n.fullscreen = t)
									}), this.$root.$emit(a.DisablePlay, !0), !this.options.startImmediately) {
									t.next = 26;
									break
								}
								return this.firstStarted = !0, t.next = 25, this.preloadThumbs();
							case 25:
								this.$root.$emit(a.DisablePlay, !1);
							case 26:
								document.addEventListener("mousemove", function(t) {
									n.onMouseMove(t)
								}), document.addEventListener("mouseup", function(t) {
									n.clearMouseVars(t)
								}), delete f.a.defaults.cssProps.userSelect, (e = new f.a(this.$el)).get("pinch").set({
									enable: !0
								}), e.on("pinch", function(t) {
									n.onPinch(t)
								});
							case 32:
							case "end":
								return t.stop()
						}
					}, t, this)
				}));
				return function() {
					return t.apply(this, arguments)
				}
			}(),
			watch: {
				loading: function(t) {
					this.$root.$emit(a.Loading, t)
				},
				showProgress: function(t) {
					this.progress = t ? 0 : -1
				},
				progress: function(t) {
					this.$root.$emit(a.Preloader, t), 100 === t && (this.showProgress = !1, this.$root.$emit(a.Preloader, -1))
				},
				logicalZoom: function() {
					var t = m(regeneratorRuntime.mark(function t(e) {
						return regeneratorRuntime.wrap(function(t) {
							for(;;) switch(t.prev = t.next) {
								case 0:
									return 0 === e && (this.movePosition = {
										x: 0,
										y: 0
									}), this.$root.$emit(a.Stop), this.$root.$emit(a.DisablePlay, e > 0 && !this.fullscreen), t.next = 5, this.drawCurrentFrame();
								case 5:
								case "end":
									return t.stop()
							}
						}, t, this)
					}));
					return function(e) {
						return t.apply(this, arguments)
					}
				}(),
				fullscreen: function() {
					var t = m(regeneratorRuntime.mark(function t(e) {
						return regeneratorRuntime.wrap(function(t) {
							for(;;) switch(t.prev = t.next) {
								case 0:
									return e || (this.logicalZoom = 0), t.next = 3, this.adjustSize();
								case 3:
									return t.next = 5, this.drawCurrentFrame();
								case 5:
									this.firstStarted && !this.loading && this.$root.$emit(a.DisablePlay, this.zoomBaseRelative > 1 && !e);
								case 6:
								case "end":
									return t.stop()
							}
						}, t, this)
					}));
					return function(e) {
						return t.apply(this, arguments)
					}
				}(),
				currentZoom: function() {
					var t = m(regeneratorRuntime.mark(function t(e) {
						return regeneratorRuntime.wrap(function(t) {
							for(;;) switch(t.prev = t.next) {
								case 0:
									if(!this.fullscreen) {
										t.next = 3;
										break
									}
									return t.next = 3, this.preloadNextPrevFrames(e);
								case 3:
								case "end":
									return t.stop()
							}
						}, t, this)
					}));
					return function(e) {
						return t.apply(this, arguments)
					}
				}(),
				"frameNumbers.y": function(t) {
					this.updateYStatus(t)
				}
			},
			methods: {
				probeChangeFullscreenMode: function(t) {
					if(this.options.fullscreenOnDblClick)
						if(0 === this.lastClick) this.lastClick = Date.now();
						else if(Date.now() - this.lastClick < 500) {
						var e = this.$root.getAction(i.Fullscreen);
						e && e.execute(), this.lastClick = 0
					} else this.lastClick = Date.now()
				},
				stopPropagation: function(t) {
					this.options.disableScrollOnTouch && (t.preventDefault(), t.stopPropagation())
				},
				updateYStatus: function(t) {
					0 !== t ? t !== this.options.yframes - 1 ? this.$root.$emit(a.DisableY, void 0) : this.$root.$emit(a.DisableY, "last") : this.$root.$emit(a.DisableY, "first")
				},
				fetchFramesForFullscreenZoom: function() {
					var t = m(regeneratorRuntime.mark(function t() {
						var e, n, o;
						return regeneratorRuntime.wrap(function(t) {
							for(;;) switch(t.prev = t.next) {
								case 0:
									e = this.options.zoomLevels.length - 1;
								case 1:
									if(!(e > -1)) {
										t.next = 11;
										break
									}
									if(n = this.options.zoomLevels[e], this.zoomSizes[n]) {
										t.next = 8;
										break
									}
									return t.next = 6, this.loadFrame(!1, !0, this.frameNumbers.x, this.frameNumbers.y, n);
								case 6:
									o = t.sent, this.zoomSizes[n] = o.el.naturalWidth;
								case 8:
									e--, t.next = 1;
									break;
								case 11:
								case "end":
									return t.stop()
							}
						}, t, this)
					}));
					return function() {
						return t.apply(this, arguments)
					}
				}(),
				onFullscreenChanged: function() {
					var t = m(regeneratorRuntime.mark(function t(e) {
						var n;
						return regeneratorRuntime.wrap(function(t) {
							for(;;) switch(t.prev = t.next) {
								case 0:
									n = Object(l.c)(), this.$root.$emit(a.FullscreenChanged, n);
								case 2:
								case "end":
									return t.stop()
							}
						}, t, this)
					}));
					return function(e) {
						return t.apply(this, arguments)
					}
				}(),
				onWindowResize: function() {
					var t = m(regeneratorRuntime.mark(function t() {
						return regeneratorRuntime.wrap(function(t) {
							for(;;) switch(t.prev = t.next) {
								case 0:
									return t.next = 2, this.adjustSize();
								case 2:
									return t.next = 4, this.drawCurrentFrame();
								case 4:
								case "end":
									return t.stop()
							}
						}, t, this)
					}));
					return function() {
						return t.apply(this, arguments)
					}
				}(),
				onLocalMouseUp: function(t) {
					this.options.playOnClick && this.shouldPlayOnMouseUp && this.$root.$emit(a.Play, t)
				},
				onMouseDown: function(t) {
					this.loading || (this.probeChangeFullscreenMode(t), this.mousePosition = {
						x: t.pageX,
						y: t.pageY
					}, this.shouldPlayOnMouseUp &= !this.started, this.$root.$emit(a.Stop, t), this.mouseDown = !0)
				},
				onMouseMove: function(t) {
					this.loading || this.onMove({
						x: t.pageX,
						y: t.pageY
					})
				},
				onMouseWheel: function(t) {
					if(!this.loading) {
						t.preventDefault();
						var e = t.wheelDelta > 0 ? a.ZoomIn : a.ZoomOut;
						this.$root.$emit(e, t)
					}
				},
				onPinch: function(t) {
					if(!this.loading) {
						var e = t.scale > 1 ? a.ZoomIn : a.ZoomOut;
						this.$root.$emit(e)
					}
				},
				onTouchStart: function(t) {
					this.loading || (this.stopPropagation(t), t.touches.length > 0 && (this.mousePosition = {
						x: t.touches[0].pageX,
						y: t.touches[0].pageY
					}, this.shouldPlayOnMouseUp &= !this.started, this.$root.$emit(a.Stop, t), this.mouseDown = !0))
				},
				onTouchMove: function(t) {
					this.loading || (this.stopPropagation(t), t.touches.length > 0 && this.onMove({
						x: t.touches[0].pageX,
						y: t.touches[0].pageY
					}))
				},
				onTouchEnd: function(t) {
					this.onLocalMouseUp(t), this.clearMouseVars(t)
				},
				onMove: function() {
					var t = m(regeneratorRuntime.mark(function t(e) {
						var n, o;
						return regeneratorRuntime.wrap(function(t) {
							for(;;) switch(t.prev = t.next) {
								case 0:
									if(this.mouseDown) {
										t.next = 2;
										break
									}
									return t.abrupt("return");
								case 2:
									if(this.shouldPlayOnMouseUp = !1, n = e.x - this.mousePosition.x, o = e.y - this.mousePosition.y, !this.move) {
										t.next = 9;
										break
									}
									this.moveFrame(n, o), t.next = 18;
									break;
								case 9:
									if(!(Math.abs(n) >= Math.abs(o))) {
										t.next = 15;
										break
									}
									return this.direction = s.X, t.next = 13, this.rotate(n);
								case 13:
									t.next = 18;
									break;
								case 15:
									return this.direction = s.Y, t.next = 18, this.rotate(o);
								case 18:
									this.mousePosition = {
										x: e.x,
										y: e.y
									};
								case 19:
								case "end":
									return t.stop()
							}
						}, t, this)
					}));
					return function(e) {
						return t.apply(this, arguments)
					}
				}(),
				clearMouseVars: function(t) {
					this.stopPropagation(t), this.mouseDown = !1, this.shouldPlayOnMouseUp = !0, this.parentMovePercent = 0
				},
				play: function() {
					var t = m(regeneratorRuntime.mark(function t() {
						var e, n;
						return regeneratorRuntime.wrap(function(t) {
							for(;;) switch(t.prev = t.next) {
								case 0:
									if(!this.started) {
										t.next = 2;
										break
									}
									return t.abrupt("return");
								case 2:
									return this.started = !0, t.next = 5, this.getDrawMethod(this.reverse);
								case 5:
									e = t.sent, n = this.calculateDelay();
								case 7:
									if(!this.started) {
										t.next = 14;
										break
									}
									return t.next = 10, new Promise(function(t) {
										return setTimeout(t, n)
									});
								case 10:
									return t.next = 12, e();
								case 12:
									t.next = 7;
									break;
								case 14:
								case "end":
									return t.stop()
							}
						}, t, this)
					}));
					return function() {
						return t.apply(this, arguments)
					}
				}(),
				moveFrame: function() {
					var t = m(regeneratorRuntime.mark(function t(e, n) {
						return regeneratorRuntime.wrap(function(t) {
							for(;;) switch(t.prev = t.next) {
								case 0:
									return this.movePosition[s.X] -= e, this.movePosition[s.Y] -= n, t.next = 4, this.drawCurrentFrame();
								case 4:
								case "end":
									return t.stop()
							}
						}, t, this)
					}));
					return function(e, n) {
						return t.apply(this, arguments)
					}
				}(),
				rotate: function() {
					var t = m(regeneratorRuntime.mark(function t(e) {
						var n, o, r, i, a, c, u;
						return regeneratorRuntime.wrap(function(t) {
							for(;;) switch(t.prev = t.next) {
								case 0:
									if(this.direction === s.X && (this.reverse = e < 0), n = this.calculateDelay(), o = this.direction === s.X ? this.options.delayXMouseRotate : this.options.delayYMouseRotate, !(Date.now() - this.lastMove < o)) {
										t.next = 5;
										break
									}
									return t.abrupt("return");
								case 5:
									if(this.lastMove = Date.now(), r = Math.abs(e) / (this.direction === s.X ? this.width : this.height) * 100, 0 !== (i = Math.ceil(Math.abs(r - this.parentMovePercent)))) {
										t.next = 10;
										break
									}
									return t.abrupt("return");
								case 10:
									for(a = this.direction === s.X ? 1.6 : 3.5, c = this.getDrawMethod(e < 0), u = 0; u < i / a; u++) setTimeout(m(regeneratorRuntime.mark(function t() {
										return regeneratorRuntime.wrap(function(t) {
											for(;;) switch(t.prev = t.next) {
												case 0:
													return t.next = 2, c();
												case 2:
												case "end":
													return t.stop()
											}
										}, t)
									})), 1e3 * u / n);
								case 13:
								case "end":
									return t.stop()
							}
						}, t, this)
					}));
					return function(e) {
						return t.apply(this, arguments)
					}
				}(),
				calculatePosition: function(t, e) {
					return {
						x: (this.width - t.el.naturalWidth * e) / 2,
						y: (this.height - t.el.naturalHeight * e) / 2
					}
				},
				getMinZoomBaseRelative: function(t) {
					var e = Math.min(this.$root.$el.clientWidth / t.el.naturalWidth, this.$root.$el.clientHeight / t.el.naturalHeight, this.baseZoom * this.maxZoomBaseRelative / t.zoom);
					return t.zoom * e / 100
				},
				calculateDelay: function() {
					var t = this.direction === s.X ? this.options.frames : this.options.yframes;
					return 1e3 * this.options.speed / t
				},
				adjustSize: function() {
					var t = m(regeneratorRuntime.mark(function t(e) {
						var n, o;
						return regeneratorRuntime.wrap(function(t) {
							for(;;) switch(t.prev = t.next) {
								case 0:
									if(void 0 !== e) {
										t.next = 4;
										break
									}
									return t.next = 3, this.getCurrentFrame();
								case 3:
									e = t.sent;
								case 4:
									n = this.$root.$el, this.fullscreen ? (n.style.width = "".concat(window.innerWidth, "px"), n.style.height = "".concat(window.innerHeight, "px"), this.width = window.innerWidth, this.height = window.innerHeight) : (n.style.width = "100%", n.style.height = "100%", o = Math.min(this.$root.$el.clientWidth / e.el.naturalWidth, this.$root.$el.clientHeight / e.el.naturalHeight), this.width = e.el.naturalWidth * o, this.height = e.el.naturalHeight * o), this.$root.$emit(a.Update);
								case 7:
								case "end":
									return t.stop()
							}
						}, t, this)
					}));
					return function(e) {
						return t.apply(this, arguments)
					}
				}(),
				drawNextFrame: function() {
					var t = m(regeneratorRuntime.mark(function t() {
						return regeneratorRuntime.wrap(function(t) {
							for(;;) switch(t.prev = t.next) {
								case 0:
									return this.frameNumbers[this.direction] ++, this.direction === s.X ? this.frameNumbers[this.direction] === this.options.frames && (this.frameNumbers[this.direction] = 0) : this.frameNumbers[this.direction] === this.options.yframes && (this.frameNumbers[this.direction] = this.options.yframes - 1), t.next = 4, this.drawCurrentFrame();
								case 4:
								case "end":
									return t.stop()
							}
						}, t, this)
					}));
					return function() {
						return t.apply(this, arguments)
					}
				}(),
				drawPrevFrame: function() {
					var t = m(regeneratorRuntime.mark(function t() {
						return regeneratorRuntime.wrap(function(t) {
							for(;;) switch(t.prev = t.next) {
								case 0:
									return this.frameNumbers[this.direction] --, this.direction === s.X ? -1 === this.frameNumbers[this.direction] && (this.frameNumbers[this.direction] = this.options.frames - 1) : -1 === this.frameNumbers[this.direction] && (this.frameNumbers[this.direction] = 0), t.next = 4, this.drawCurrentFrame();
								case 4:
								case "end":
									return t.stop()
							}
						}, t, this)
					}));
					return function() {
						return t.apply(this, arguments)
					}
				}(),
				drawCurrentFrame: function() {
					var t = m(regeneratorRuntime.mark(function t(e) {
						var n, o, r, i, s, c, u, l, h;
						return regeneratorRuntime.wrap(function(t) {
							for(;;) switch(t.prev = t.next) {
								case 0:
									if(e) {
										t.next = 4;
										break
									}
									return t.next = 3, this.getCurrentFrame();
								case 3:
									e = t.sent;
								case 4:
									if(n = function(t, e, n) {
											return t + (e - t) * (n = (n = n < 0 ? 0 : n) > 1 ? 1 : n)
										}, o = this.getMinZoomBaseRelative(e), r = this.maxZoomBaseRelative, i = r - o, s = this.options.minZoomStepBaseRelative / i, this.currentZoomStep = Math.max(this.options.defaultLogicalZoomStep, s), this.$root.$emit(a.StatusZoomOut, this.canZoom && this.logicalZoom > 0), this.$root.$emit(a.StatusZoomIn, this.canZoom && this.logicalZoom < 1), 0 == this.logicalZoom || this.canZoom) {
										t.next = 15;
										break
									}
									return this.logicalZoom = 0, t.abrupt("return");
								case 15:
									this.zoomBaseRelative = n(o, r, this.logicalZoom), c = 100 * this.zoomBaseRelative / e.zoom, u = this.calculatePosition(e, c), this.context.fillStyle = this.options.color, this.context.fillRect(0, 0, this.width, this.height), (l = this.movePosition.x / c) < u.x / c && (l = u.x / c), l + u.x / c > 0 && (l = -u.x / c), this.fullscreen && this.width - e.el.naturalWidth * c > 0 && (l = 0), (h = this.movePosition.y / c) < u.y / c && (h = u.y / c), h + u.y / c > 0 && (h = -u.y / c), this.fullscreen && this.height - e.el.naturalHeight * c > 0 && (h = 0), this.context.drawImage(e.el, l, h, e.el.naturalWidth, e.el.naturalHeight, u.x, u.y, e.el.naturalWidth * c, e.el.naturalHeight * c), this.$root.debug("draw frame", e.name, "/ Ratio: ".concat(c.toFixed(2))), this.options.debug && this.drawDebugRect(e, c, l, h, u);
								case 31:
								case "end":
									return t.stop()
							}
						}, t, this)
					}));
					return function(e) {
						return t.apply(this, arguments)
					}
				}(),
				getCurrentFrame: function() {
					var t = m(regeneratorRuntime.mark(function t() {
						return regeneratorRuntime.wrap(function(t) {
							for(;;) switch(t.prev = t.next) {
								case 0:
									return t.next = 2, this.loadFrame(!0, !0, this.frameNumbers.x, this.frameNumbers.y, this.currentZoom);
								case 2:
									return t.abrupt("return", t.sent);
								case 3:
								case "end":
									return t.stop()
							}
						}, t, this)
					}));
					return function() {
						return t.apply(this, arguments)
					}
				}(),
				preloadNextPrevFrames: function() {
					var t = m(regeneratorRuntime.mark(function t(e, n, o) {
						var r, i, s, a, c, u, l, h, f, p, d;
						return regeneratorRuntime.wrap(function(t) {
							for(;;) switch(t.prev = t.next) {
								case 0:
									if(this.firstStarted && !this.loadedLevels[e]) {
										t.next = 2;
										break
									}
									return t.abrupt("return");
								case 2:
									if(r = 0, i = new Date, s = this.options.frames, a = this.options.frames * this.options.yframes, c = 0, u = this.frameNumbers.x, l = e, h = [], o || (this.showProgress = !0), !(n || l === this.currentZoom && this.fullscreen)) {
										t.next = 26;
										break
									}
									f = function() {
										var t = m(regeneratorRuntime.mark(function t(n) {
											var i, s, l, f, p, m;
											return regeneratorRuntime.wrap(function(t) {
												for(;;) switch(t.prev = t.next) {
													case 0:
														(i = u + r) > n.options.frames - 1 && (i = Math.abs(n.options.frames - i)), (s = u - r) < 0 && (s = Math.abs(n.options.frames - s)), s > n.options.frames - 1 && (s = Math.abs(n.options.frames - s)), l = 0;
													case 6:
														if(!(l < n.options.yframes)) {
															t.next = 25;
															break
														}
														if(f = 0, p = "".concat(i, "-").concat(l), m = "".concat(s, "-").concat(l), !(i < n.options.frames && -1 === h.indexOf(p))) {
															t.next = 15;
															break
														}
														return t.next = 13, n.loadFrame(!1, !1, i, l, e);
													case 13:
														h.push(p), f++;
													case 15:
														if(!(s < n.options.frames && -1 === h.indexOf(m))) {
															t.next = 20;
															break
														}
														return t.next = 18, n.loadFrame(!1, !1, s, l, e);
													case 18:
														h.push(m), f++;
													case 20:
														o ? f && o.call(n, f) : n.progress = c / a * 100, c++;
													case 22:
														l++, t.next = 6;
														break;
													case 25:
													case "end":
														return t.stop()
												}
											}, t)
										}));
										return function(e) {
											return t.apply(this, arguments)
										}
									}(), p = [], d = 64;
								case 15:
									if(!(r < s)) {
										t.next = 24;
										break
									}
									if(p.push(f(this)), !(p.length >= d)) {
										t.next = 21;
										break
									}
									return t.next = 20, Promise.all(p);
								case 20:
									p = [];
								case 21:
									r++, t.next = 15;
									break;
								case 24:
									return t.next = 26, Promise.all(p);
								case 26:
									r === s && (this.loadedLevels[e] = !0), o || (this.progress = 100, this.showProgress = !1), this.$root.debug("Loading took ", new Date - i, "ms");
								case 29:
								case "end":
									return t.stop()
							}
						}, t, this)
					}));
					return function(e, n, o) {
						return t.apply(this, arguments)
					}
				}(),
				preloadThumbs: function() {
					var t = m(regeneratorRuntime.mark(function t() {
						var e, n, o, r, i, s = this;
						return regeneratorRuntime.wrap(function(t) {
							for(;;) switch(t.prev = t.next) {
								case 0:
									e = this.options.zoomLevels.filter(function(t) {
										return t < 100
									}), n = this.options.zoomLevels.filter(function(t) {
										return 100 === t
									}).length > 0, o = (e.length + (n ? 1 : 0)) * this.options.frames * this.options.yframes, this.loading = !0, this.showProgress = !0, r = 0, i = 0;
								case 7:
									if(!(i < e.length)) {
										t.next = 14;
										break
									}
									return t.next = 10, this.preloadNextPrevFrames(e[i], !0, function(t) {
										r += t, s.progress = r / o * 100
									});
								case 10:
									this.loading = !1;
								case 11:
									i++, t.next = 7;
									break;
								case 14:
									return e.length > 0 && (this.$root.$emit(a.HideHelper), this.preloading = !0), t.next = 17, this.preloadNextPrevFrames(100, !0, function(t) {
										r += t, s.progress = r / o * 100
									});
								case 17:
									this.$root.$emit(a.HideHelper), this.showProgress = !1, this.loading = !1, this.preloading = !1, this.fetchFramesForFullscreenZoom();
								case 22:
								case "end":
									return t.stop()
							}
						}, t, this)
					}));
					return function() {
						return t.apply(this, arguments)
					}
				}(),
				loadFrame: function(t, e, n, o, r) {
					var i = this;
					return new Promise(function(s, a) {
						void 0 === r && (r = i.currentZoom);
						var c = i.getImageFilename(n, o, r),
							l = i.getImageURL(n, o, r),
							h = null,
							f = function() {
								(h = i.getFistExistsFrame(n, o, r)) && s(h)
							};
						if(i.frames[c]) i.frames[c].loaded ? s(i.frames[c]) : f();
						else {
							t && f();
							var p = new u(n, o, r, l);
							i.frames[c] = p, p.onload = function() {
								var e = m(regeneratorRuntime.mark(function e(a) {
									return regeneratorRuntime.wrap(function(e) {
										for(;;) switch(e.prev = e.next) {
											case 0:
												if(i.$root.debug("loaded frame", p.name), !t || !h || i.frameNumbers.x !== n || i.frameNumbers.y !== o || r !== i.currentZoom) {
													e.next = 4;
													break
												}
												return e.next = 4, i.drawCurrentFrame(p);
											case 4:
												i.zoomSizes[r] || (i.zoomSizes[r] = p.el.naturalWidth), s(p);
											case 6:
											case "end":
												return e.stop()
										}
									}, e)
								}));
								return function(t) {
									return e.apply(this, arguments)
								}
							}(), p.onprogress = function(n) {
								!i.preloading && !i.loading && t && e && (i.progress = p.progress)
							}, p.onerror = function(t) {
								a(t)
							}, e ? p.loadSingle() : p.load()
						}
					})
				},
				getDrawMethod: function(t) {
					return(this.direction === s.X ? this.options.reverse : this.options.yreverse) ? t ? this.drawNextFrame : this.drawPrevFrame : t ? this.drawPrevFrame : this.drawNextFrame
				},
				getFistExistsFrame: function(t, e, n) {
					if(!n) return null;
					var o = this.options.zoomLevels.indexOf(n);
					if(0 === o) return null;
					var r = this.options.zoomLevels[o - 1],
						i = this.getImageFilename(t, e, r);
					return this.frames[i] && this.frames[i].loaded ? this.frames[i] : this.getFistExistsFrame(t, e, r)
				},
				getImageURL: function(t, e, n) {
					return "".concat(this.path, "/").concat(this.getImageFilename(t, e, n))
				},
				getImageFilename: function(t, e, n) {
					return this.y ? "".concat(this.filename, ".").concat(n, ".").concat(t, ".").concat(e, ".jpg") : "".concat(this.filename, ".").concat(n, ".").concat(t, ".jpg")
				},
				drawDebugRect: function(t, e, n, o, r) {
					this.context.fillStyle = this.debugColors[t.zoom] || "black", this.context.fillRect(this.width - 130, 10, 120, 115), this.context.fillStyle = "white", this.context.fillRect(this.width - 125, 15, 110, 105), this.context.fillStyle = "black", this.context.font = "11px Roboto, tahoma, arial, serif", this.context.fillText("logical zoom: ".concat(this.logicalZoom), this.width - 122, 25, 115), this.context.fillText("zoom file: ".concat(t.zoom, "%"), this.width - 122, 40, 115), this.context.fillText("real zoom: ".concat((t.zoom * e).toFixed(), "%"), this.width - 122, 55, 115), this.context.fillText("zoom ratio: ".concat(e.toFixed(2)), this.width - 122, 70, 115), this.context.fillText("frame: X:".concat(t.x, " / Y:").concat(t.y), this.width - 122, 85, 115), this.context.fillText("mv: X:".concat(n.toFixed(), " / Y:").concat(o.toFixed()), this.width - 122, 100, 115), this.context.fillText("pos: X:".concat(r.x.toFixed(), " / Y:").concat(r.y.toFixed()), this.width - 122, 115, 115)
				}
			}
		}),
		v = Vue.extend({
			template: '<img :src="src" alt="" :class="$parent.options.className + \'__image\'" style="visibility: hidden !important" />',
			props: ["src"],
			mounted: function() {
				this.$parent.$props.element.style.display = "none"
			}
		}),
		y = Vue.extend({
			template: '<div :class="options.className + \'__loader\'">\n<svg viewBox="0 0 50 50">\n    <circle :class="options.className + \'__loader_ring\'" cx="25" cy="25" r="22.5" />\n    <circle :class="options.className + \'__loader_line\'" cx="25" cy="25" r="22.5" />\n</svg>\n</div>',
			computed: {
				options: function() {
					return this.$parent.options
				}
			}
		}),
		g = Vue.extend({
			template: '<div :class="options.className + \'__line-loader\'"><span :style="lineStyle"></span></div>',
			props: {
				percentage: {
					type: Number,
					default: 0
				}
			},
			computed: {
				options: function() {
					return this.$parent.options
				},
				lineStyle: function() {
					return "width: ".concat(this.percentage, "%")
				}
			}
		}),
		b = Vue.extend({
			template: '<div :class="className" @mousedown="hide">\n    <div :class="options.className + \'__helper-content\'" :style="\'background: \'+ options.helperBgColor">\n        <div :class="options.className + \'__helper-icon\'" :style="\'background: \'+ options.helperIconColor"></div>\n        <div :class="options.className + \'__helper-text\'" v-html="options.helperText" :style="\'color: \'+ options.helperTextColor"></div>\n        <div :class="options.className + \'__helper-close\'" :style="\'background-color: \'+ options.helperCloseIconBgColor">\n            <span :style="\'background-color: \'+ options.helperCloseIconColor"></span>\n        </div>\n    </div>\n</div>',
			data: function() {
				return {
					closed: !1,
					hidden: !1
				}
			},
			computed: {
				options: function() {
					return this.$parent.options
				},
				className: function() {
					var t = ["".concat(this.options.className, "__helper")];
					return this.closed && t.push("".concat(this.options.className, "__helper--closed")), this.hidden && t.push("".concat(this.options.className, "__helper--hidden")), t.join(" ")
				}
			},
			created: function() {
				var t = this;
				this.$root.$on(a.CloseHelper, function() {
					t.closed || t.hide()
				})
			},
			methods: {
				hide: function(t) {
					var e = this;
					this.closed = !0, this.options.startImmediately || this.$root.$emit(a.StartLoading), setTimeout(function() {
						e.hidden = !0, e.$root.$emit(a.HideHelper)
					}, 400)
				}
			}
		});

	function w(t, e) {
		for(var n = 0; n < e.length; n++) {
			var o = e[n];
			o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
		}
	}

	function x(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}
	var _ = function() {
		function t(e) {
			! function(t, e) {
				if(!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}(this, t), x(this, "component", void 0), x(this, "action", void 0), x(this, "actions", void 0), x(this, "enabled", !0), x(this, "enabledTwo", !0), x(this, "_active", !1), x(this, "delay", void 0), this.component = e, this.action = e.$props.control, e.options.actions && e.options.actions[this.action] && (this.actions = e.options.actions[this.action]), this.delay = 1e3 * e.options.speed / e.options.frames
		}
		var e, n, o;
		return e = t, (n = [{
			key: "execute",
			value: function(t) {
				throw new Error("".concat(this.action, " action not implemented"))
			}
		}, {
			key: "created",
			value: function() {}
		}, {
			key: "mounted",
			value: function() {}
		}, {
			key: "run",
			value: function(t) {
				var e = {
					originalEvent: t,
					cancel: !1
				};
				if(this.actions) {
					if(!this.actions.beforeAction || (this.actions.beforeAction.call(this, e), !e.cancel)) {
						if(this.actions.action) {
							if(this.actions.action.call(this, e), e.cancel) return
						} else this.execute(t);
						this.actions.afterAction && this.actions.afterAction.call(this, e)
					}
				} else this.execute(t)
			}
		}, {
			key: "active",
			get: function() {
				return this._active
			},
			set: function(t) {
				this._active = t, this.component.$emit(a.ActiveStatus, t)
			}
		}]) && w(e.prototype, n), o && w(e, o), t
	}();

	function P(t) {
		return(P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function O(t, e) {
		for(var n = 0; n < e.length; n++) {
			var o = e[n];
			o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
		}
	}

	function T(t) {
		return(T = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}

	function E(t) {
		if(void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t
	}

	function k(t, e) {
		return(k = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function $(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}
	var S = function(t) {
		function e() {
			var t, n, o, r;
			! function(t, e) {
				if(!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}(this, e);
			for(var i = arguments.length, s = new Array(i), a = 0; a < i; a++) s[a] = arguments[a];
			return o = this, n = !(r = (t = T(e)).call.apply(t, [this].concat(s))) || "object" !== P(r) && "function" != typeof r ? E(o) : r, $(E(n), "interval", 0), $(E(n), "play", !1), n
		}
		var n, o, r;
		return function(t, e) {
			if("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), e && k(t, e)
		}(e, _), n = e, (o = [{
			key: "mounted",
			value: function() {
				var t = this;
				this.component.$el.addEventListener("mouseup", function(e) {
					return t.stop(e)
				}), this.component.$el.addEventListener("mouseout", function(e) {
					return t.stop(e)
				}), this.component.$el.addEventListener("mousedown", function(e) {
					t.play = !0, t.component.$root.$emit(a.Stop, e, !0), t.component.$root.$emit(a.Play, e, !0), setTimeout(function() {
						t.interval = setInterval(function() {
							t.play ? t.component.$root.$emit(a.Play, e, !0) : clearInterval(t.interval)
						}, t.delay)
					}, 150)
				})
			}
		}, {
			key: "created",
			value: function() {
				var t = this;
				this.component.$root.$on(a.DisablePlay, function(e) {
					t.enabled = !e
				})
			}
		}, {
			key: "stop",
			value: function(t) {
				this.play = !1, clearInterval(this.interval)
			}
		}, {
			key: "execute",
			value: function(t) {}
		}]) && O(n.prototype, o), r && O(n, r), e
	}();

	function j(t) {
		return(j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function R(t, e) {
		for(var n = 0; n < e.length; n++) {
			var o = e[n];
			o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
		}
	}

	function C(t) {
		return(C = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}

	function F(t) {
		if(void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t
	}

	function M(t, e) {
		return(M = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function A(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}
	var D = function(t) {
		function e() {
			var t, n, o, r;
			! function(t, e) {
				if(!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}(this, e);
			for(var i = arguments.length, s = new Array(i), a = 0; a < i; a++) s[a] = arguments[a];
			return o = this, n = !(r = (t = C(e)).call.apply(t, [this].concat(s))) || "object" !== j(r) && "function" != typeof r ? F(o) : r, A(F(n), "interval", 0), A(F(n), "play", !1), n
		}
		var n, o, r;
		return function(t, e) {
			if("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), e && M(t, e)
		}(e, _), n = e, (o = [{
			key: "mounted",
			value: function() {
				var t = this;
				this.component.$el.addEventListener("mouseup", function(e) {
					return t.stop(e)
				}), this.component.$el.addEventListener("mouseout", function(e) {
					return t.stop(e)
				}), this.component.$el.addEventListener("mousedown", function(e) {
					t.play = !0, t.component.$root.$emit(a.Stop, e, !0), t.component.$root.$emit(a.PlayReverse, e, !0), setTimeout(function() {
						t.interval = setInterval(function() {
							t.play ? t.component.$root.$emit(a.PlayReverse, e, !0) : clearInterval(t.interval)
						}, t.delay)
					}, 150)
				})
			}
		}, {
			key: "created",
			value: function() {
				var t = this;
				this.component.$root.$on(a.DisablePlay, function(e) {
					t.enabled = !e
				})
			}
		}, {
			key: "stop",
			value: function(t) {
				this.play = !1, clearInterval(this.interval)
			}
		}, {
			key: "execute",
			value: function(t) {}
		}]) && R(n.prototype, o), r && R(n, r), e
	}();

	function L(t) {
		return(L = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function I(t, e) {
		for(var n = 0; n < e.length; n++) {
			var o = e[n];
			o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
		}
	}

	function N(t, e) {
		return !e || "object" !== L(e) && "function" != typeof e ? function(t) {
			if(void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}(t) : e
	}

	function z(t) {
		return(z = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}

	function Z(t, e) {
		return(Z = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}
	var H = function(t) {
		function e() {
			return function(t, e) {
				if(!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}(this, e), N(this, z(e).apply(this, arguments))
		}
		var n, o, r;
		return function(t, e) {
			if("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), e && Z(t, e)
		}(e, _), n = e, (o = [{
			key: "execute",
			value: function(t) {
				this.component.$root.$emit(this.active ? a.Stop : a.Play, t)
			}
		}, {
			key: "created",
			value: function() {
				var t = this;
				this.component.$root.$on(a.Play, function(e, n) {
					n || (t.active = !0)
				}), this.component.$root.$on(a.DisablePlay, function(e) {
					t.enabled = !e
				}), this.component.$root.$on(a.Stop, function(e) {
					t.active = !1
				})
			}
		}]) && I(n.prototype, o), r && I(n, r), e
	}();

	function B(t) {
		return(B = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function U(t, e) {
		for(var n = 0; n < e.length; n++) {
			var o = e[n];
			o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
		}
	}

	function W(t, e) {
		return !e || "object" !== B(e) && "function" != typeof e ? function(t) {
			if(void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}(t) : e
	}

	function Y(t) {
		return(Y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}

	function X(t, e) {
		return(X = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}
	var q = function(t) {
		function e() {
			return function(t, e) {
				if(!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}(this, e), W(this, Y(e).apply(this, arguments))
		}
		var n, o, r;
		return function(t, e) {
			if("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), e && X(t, e)
		}(e, _), n = e, (o = [{
			key: "created",
			value: function() {
				var t = this;
				this.component.$root.$on(a.FullscreenChanged, function(e) {
					t.active = e
				})
			}
		}, {
			key: "execute",
			value: function(t) {
				this.active ? this.close() : this.open()
			}
		}, {
			key: "open",
			value: function() {
				this.component.$root.$emit(a.FullscreenChanged, !0, !0), Object(l.d)(this.component.$root.$el), this.component.$root.$el.focus()
			}
		}, {
			key: "close",
			value: function() {
				Object(l.a)()
			}
		}]) && U(n.prototype, o), r && U(n, r), e
	}();

	function V(t) {
		return(V = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function G(t, e) {
		for(var n = 0; n < e.length; n++) {
			var o = e[n];
			o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
		}
	}

	function K(t, e) {
		return !e || "object" !== V(e) && "function" != typeof e ? function(t) {
			if(void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}(t) : e
	}

	function J(t) {
		return(J = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}

	function Q(t, e) {
		return(Q = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}
	var tt = function(t) {
		function e() {
			return function(t, e) {
				if(!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}(this, e), K(this, J(e).apply(this, arguments))
		}
		var n, o, r;
		return function(t, e) {
			if("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), e && Q(t, e)
		}(e, _), n = e, (o = [{
			key: "execute",
			value: function(t) {
				this.component.$root.$emit(a.Stop, t), this.component.$root.$emit(a.Up, t, !0)
			}
		}, {
			key: "created",
			value: function() {
				var t = this;
				this.component.$root.$on(a.DisablePlay, function(e) {
					t.enabled = !e
				}), this.component.$root.$on(a.DisableY, function(e) {
					switch(e) {
						case "first":
							t.enabledTwo = !1;
							break;
						default:
							t.enabledTwo = !0
					}
				})
			}
		}]) && G(n.prototype, o), r && G(n, r), e
	}();

	function et(t) {
		return(et = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function nt(t, e) {
		for(var n = 0; n < e.length; n++) {
			var o = e[n];
			o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
		}
	}

	function ot(t, e) {
		return !e || "object" !== et(e) && "function" != typeof e ? function(t) {
			if(void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}(t) : e
	}

	function rt(t) {
		return(rt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}

	function it(t, e) {
		return(it = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}
	var st = function(t) {
		function e() {
			return function(t, e) {
				if(!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}(this, e), ot(this, rt(e).apply(this, arguments))
		}
		var n, o, r;
		return function(t, e) {
			if("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), e && it(t, e)
		}(e, _), n = e, (o = [{
			key: "execute",
			value: function(t) {
				this.component.$root.$emit(a.Stop, t), this.component.$root.$emit(a.Down, t, !0)
			}
		}, {
			key: "created",
			value: function() {
				var t = this;
				this.component.$root.$on(a.DisablePlay, function(e) {
					t.enabled = !e
				}), this.component.$root.$on(a.DisableY, function(e) {
					switch(e) {
						case "last":
							t.enabledTwo = !1;
							break;
						default:
							t.enabledTwo = !0
					}
				})
			}
		}]) && nt(n.prototype, o), r && nt(n, r), e
	}();

	function at(t) {
		return(at = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function ct(t, e) {
		for(var n = 0; n < e.length; n++) {
			var o = e[n];
			o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
		}
	}

	function ut(t) {
		return(ut = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}

	function lt(t) {
		if(void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t
	}

	function ht(t, e) {
		return(ht = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function ft(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}
	var pt = function(t) {
		function e() {
			var t, n, o, r;
			! function(t, e) {
				if(!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}(this, e);
			for(var i = arguments.length, s = new Array(i), a = 0; a < i; a++) s[a] = arguments[a];
			return o = this, n = !(r = (t = ut(e)).call.apply(t, [this].concat(s))) || "object" !== at(r) && "function" != typeof r ? lt(o) : r, ft(lt(n), "interval", 0), ft(lt(n), "zoom", !1), n
		}
		var n, o, r;
		return function(t, e) {
			if("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), e && ht(t, e)
		}(e, _), n = e, (o = [{
			key: "created",
			value: function() {
				var t = this;
				this.component.$root.$on(a.StatusZoomIn, function(e) {
					t.enabled = e
				})
			}
		}, {
			key: "mounted",
			value: function() {
				var t = this;
				this.component.$el.addEventListener("mouseup", function(e) {
					return t.stop(e)
				}), this.component.$el.addEventListener("mouseout", function(e) {
					return t.stop(e)
				}), this.component.$el.addEventListener("mousedown", function(e) {
					t.zoom = !0, t.component.$root.$emit(a.Stop, e, !0), t.component.$root.$emit(a.ZoomIn, e, !0), setTimeout(function() {
						t.interval = setInterval(function() {
							t.zoom ? t.component.$root.$emit(a.ZoomIn, e, !0) : clearInterval(t.interval)
						}, 100)
					}, 150)
				})
			}
		}, {
			key: "stop",
			value: function(t) {
				this.zoom = !1, clearInterval(this.interval)
			}
		}, {
			key: "execute",
			value: function(t) {}
		}]) && ct(n.prototype, o), r && ct(n, r), e
	}();

	function mt(t) {
		return(mt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function dt(t, e) {
		for(var n = 0; n < e.length; n++) {
			var o = e[n];
			o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
		}
	}

	function vt(t) {
		return(vt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}

	function yt(t) {
		if(void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t
	}

	function gt(t, e) {
		return(gt = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function bt(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}
	var wt = function(t) {
			function e() {
				var t, n, o, r;
				! function(t, e) {
					if(!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, e);
				for(var i = arguments.length, s = new Array(i), a = 0; a < i; a++) s[a] = arguments[a];
				return o = this, n = !(r = (t = vt(e)).call.apply(t, [this].concat(s))) || "object" !== mt(r) && "function" != typeof r ? yt(o) : r, bt(yt(n), "interval", 0), bt(yt(n), "zoom", !1), bt(yt(n), "enabled", !1), n
			}
			var n, o, r;
			return function(t, e) {
				if("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						writable: !0,
						configurable: !0
					}
				}), e && gt(t, e)
			}(e, _), n = e, (o = [{
				key: "created",
				value: function() {
					var t = this;
					this.component.$root.$on(a.StatusZoomOut, function(e) {
						t.enabled = e
					})
				}
			}, {
				key: "mounted",
				value: function() {
					var t = this;
					this.component.$el.addEventListener("mouseup", function(e) {
						return t.stop(e)
					}), this.component.$el.addEventListener("mouseout", function(e) {
						return t.stop(e)
					}), this.component.$el.addEventListener("mousedown", function(e) {
						t.zoom = !0, t.component.$root.$emit(a.Stop, e, !0), t.component.$root.$emit(a.ZoomOut, e, !0), setTimeout(function() {
							t.interval = setInterval(function() {
								t.zoom ? t.component.$root.$emit(a.ZoomOut, e, !0) : clearInterval(t.interval)
							}, 100)
						}, 150)
					})
				}
			}, {
				key: "stop",
				value: function(t) {
					this.zoom = !1, clearInterval(this.interval)
				}
			}, {
				key: "execute",
				value: function(t) {}
			}]) && dt(n.prototype, o), r && dt(n, r), e
		}(),
		xt = Vue.extend({
			template: '<a :class="className" @click="execute" href="#"><span></span></a>',
			props: ["control"],
			data: function() {
				return {
					controlAction: null,
					function: null,
					active: !1,
					visible: !1,
					alwaysHidden: !1
				}
			},
			computed: {
				options: function() {
					return this.$parent.options
				},
				className: function() {
					var t = ["".concat(this.options.className, "__control"), "".concat(this.options.className, "__control-").concat(this.control)];
					return this.active && t.push("".concat(this.options.className, "__control--active")), this.enabled || t.push("".concat(this.options.className, "__control--disabled")), this.visible && !this.alwaysHidden && t.push("".concat(this.options.className, "__control--visible")), t.join(" ")
				},
				enabled: function() {
					return !this.controlAction || this.controlAction.enabled && this.controlAction.enabledTwo
				}
			},
			methods: {
				execute: function(t) {
					t.preventDefault(), this.function ? this.function.call(this, t) : this.controlAction.run(t)
				}
			},
			created: function() {
				var t = this;
				switch(this.control) {
					case i.Forward:
						this.controlAction = new S(this);
						break;
					case i.Backward:
						this.controlAction = new D(this);
						break;
					case i.Play:
						this.controlAction = new H(this);
						break;
					case i.Fullscreen:
						this.controlAction = new q(this);
						break;
					case i.Up:
						this.controlAction = new tt(this);
						break;
					case i.Down:
						this.controlAction = new st(this);
						break;
					case i.ZoomIn:
						this.controlAction = new pt(this);
						break;
					case i.ZoomOut:
						this.controlAction = new wt(this);
						break;
					default:
						if(!this.options.actions || !this.options.actions[this.control] || "function" != typeof this.options.actions[this.control]) throw new Error("".concat(this.control, " action not implemented"));
						this.function = this.options.actions[this.control]
				}
				this.controlAction && this.controlAction.created(), this.$on(a.ActiveStatus, function(e) {
					t.active = e
				})
			},
			mounted: function() {
				this.controlAction && this.controlAction.mounted()
			}
		});

	function _t(t, e, n, o, r, i, s) {
		try {
			var a = t[i](s),
				c = a.value
		} catch(t) {
			return void n(t)
		}
		a.done ? e(c) : Promise.resolve(c).then(o, r)
	}
	var Pt = Vue.extend({
		template: '<div :class="controlsMenuClassName">\n    <div :class="className" :style="style" @click="toggleMenu" v-if="!options.menuBar">\n        <div>\n            <span :style="\'background-color: \'+ options.menuIconColor"></span>\n            <span :style="\'background-color: \'+ options.menuIconColor"></span>\n        </div>\n    </div>\n    <div :class="controlsClassName" :style="controlsStyle">\n        <widget-control v-for="(control, index) in controls" :key="index" :control="control" ref="controls"/>\n    </div>\n</div>',
		components: {
			WidgetControl: xt
		},
		data: function() {
			return {
				active: !1
			}
		},
		computed: {
			controls: function() {
				var t = [];
				return this.options.menuBar ? (t.push(i.Backward), this.options.yframes > 1 && t.push(i.Up), t.push(i.Fullscreen, i.Play), this.options.yframes > 1 && t.push(i.Down), t.push(i.Forward, i.ZoomIn, i.ZoomOut)) : (t.push(i.Fullscreen, i.Play, i.Forward, i.Backward), this.options.yframes > 1 && t.push(i.Up, i.Down), t.push(i.ZoomIn, i.ZoomOut)), t
			},
			options: function() {
				return this.$parent.options
			},
			className: function() {
				var t = ["".concat(this.options.className, "__menu")];
				return "border" === this.options.menuBorderType && t.push("".concat(this.options.className, "__menu--border")), this.active && t.push("".concat(this.options.className, "__menu--active")), t.join(" ")
			},
			controlsClassName: function() {
				var t = ["".concat(this.options.className, "__controls"), "".concat(this.options.className, "__controls--position-").concat(this.options.menuPosition)];
				return this.options.menuBar && t.push("".concat(this.options.className, "__controls--always")), t.join(" ")
			},
			controlsMenuClassName: function() {
				return ["".concat(this.options.className, "__controls-menu")].join(" ")
			},
			style: function() {
				var t = ["background: ".concat(this.options.menuBgColor)];
				return "border" === this.options.menuBorderType && (t.push("border-width: ".concat(this.options.menuBorderWidth, "px")), t.push("border-color: ".concat(this.options.menuBorderColor))), t.join(";")
			},
			controlsStyle: function() {
				var t = [];
				return this.options.menuBar && t.push("background: ".concat(this.options.menuBgColor)), t.join(";")
			}
		},
		watch: {
			active: function() {
				var t, e = (t = regeneratorRuntime.mark(function t(e) {
					var n, o, r, i;
					return regeneratorRuntime.wrap(function(t) {
						for(;;) switch(t.prev = t.next) {
							case 0:
								if(n = this.$refs.controls, o = function() {
										return new Promise(function(t) {
											return setTimeout(t, 65)
										})
									}, !e) {
									t.next = 14;
									break
								}
								r = 0;
							case 4:
								if(!(r < n.length)) {
									t.next = 12;
									break
								}
								return n[r].visible = !0, r === n.length - 1 && (n[r].$el.style.marginBottom = "8px"), t.next = 9, o();
							case 9:
								r++, t.next = 4;
								break;
							case 12:
								t.next = 23;
								break;
							case 14:
								i = n.length - 1;
							case 15:
								if(!(i > -1)) {
									t.next = 23;
									break
								}
								if(n[i].alwaysHidden) {
									t.next = 19;
									break
								}
								return t.next = 19, o();
							case 19:
								n[i].visible = !1;
							case 20:
								i--, t.next = 15;
								break;
							case 23:
							case "end":
								return t.stop()
						}
					}, t, this)
				}), function() {
					var e = this,
						n = arguments;
					return new Promise(function(o, r) {
						var i = t.apply(e, n);

						function s(t) {
							_t(i, o, r, s, a, "next", t)
						}

						function a(t) {
							_t(i, o, r, s, a, "throw", t)
						}
						s(void 0)
					})
				});
				return function(t) {
					return e.apply(this, arguments)
				}
			}()
		},
		methods: {
			toggleMenu: function(t) {
				this.active = !this.active, this.showHideControls()
			},
			setControlVisible: function(t) {
				t.alwaysHidden = !1
			},
			showHideControls: function(t) {
				var e = this,
					n = this.$refs.controls,
					o = n.length * this.options.inControlHeight + this.options.inMenuHeight,
					r = this.$root.$el.clientHeight,
					i = n.filter(function(t) {
						return ["zoom-in", "zoom-out"].indexOf(t.control) > -1
					}),
					s = n.filter(function(t) {
						return ["up", "down"].indexOf(t.control) > -1
					}),
					a = n.filter(function(t) {
						return ["forward", "backward"].indexOf(t.control) > -1
					});
				if(o > r) {
					i.map(function(t) {
						return t.alwaysHidden = !0
					});
					var c = o - r;
					c > 2 * this.options.inControlHeight ? this.options.yframes > 1 ? (s.map(function(t) {
						return t.alwaysHidden = !0
					}), c > 4 * this.options.inControlHeight ? a.map(function(t) {
						return t.alwaysHidden = !0
					}) : a.map(function(t) {
						return e.setControlVisible(t)
					})) : a.map(function(t) {
						return t.alwaysHidden = !0
					}) : (this.options.yframes > 1 && s.map(function(t) {
						return e.setControlVisible(t)
					}), a.map(function(t) {
						return e.setControlVisible(t)
					}))
				} else n.map(function(t) {
					return e.setControlVisible(t)
				})
			}
		},
		mounted: function() {
			this.showHideControls(), window.addEventListener("resize", this.showHideControls), this.$root.$on(a.Update, this.showHideControls)
		},
		beforeDestroy: function() {
			window.removeEventListener("resize", this.showHideControls), this.$root.$off(a.Update, this.showHideControls)
		}
	});
	e.a = Vue.extend({
		template: '<div :class="options.className" :style="style" @mouseover="onMouseOver" @mouseleave="onMouseLeave">\n    <widget-image :src="element.src" ref="image"></widget-image>\n    <widget-canvas ref="canvas"></widget-canvas>\n    <widget-line-loader v-show="preloader" :percentage="preloaderPercentage" />\n    <widget-loader v-show="loading && !helper"/>    \n    <widget-menu ref="menu"/>    \n    <widget-helper />\n</div>',
		props: ["config", "element", "id"],
		components: {
			WidgetCanvas: d,
			WidgetImage: v,
			WidgetLoader: y,
			WidgetLineLoader: g,
			WidgetHelper: b,
			WidgetMenu: Pt
		},
		data: function() {
			return {
				style: "background-color: ".concat(this.config.color),
				loading: !1,
				hover: !1,
				preloader: !1,
				helper: !0,
				preloaderPercentage: 0,
				mountedTime: 0
			}
		},
		computed: {
			image: function() {
				return this.$refs.image.$el
			},
			options: function() {
				return this.$props.config
			}
		},
		created: function() {
			var t = this;
			this.$on(a.Loading, function(e) {
				t.loading = e, !e && t.options.autoPlay && t.$root.$emit(a.Play, !1)
			}), this.$on(a.Preloader, function(e) {
				if(-1 === e) return t.preloaderPercentage = 0, void(t.preloader = !1);
				t.preloader = !0, t.preloaderPercentage = e
			}), this.$on(a.HideHelper, function(e) {
				if(t.helper = !1, e) t.hideHelper();
				else {
					var n = Date.now() - t.mountedTime;
					n >= 1e3 * t.options.helperTimeout ? t.hideHelper() : setTimeout(function() {
						t.hideHelper()
					}, 1e3 * t.options.helperTimeout - n)
				}
			})
		},
		mounted: function() {
			this.mountedTime = Date.now(), this.options.onInit && this.options.onInit.call(this)
		},
		methods: {
			onMouseOver: function(t) {
				this.hover = !0
			},
			onMouseLeave: function(t) {
				this.hover = !1
			},
			hideHelper: function() {
				this.helper = !1, this.$emit(a.CloseHelper)
			},
			debug: function() {
				if(this.options.debug) {
					for(var t, e = arguments.length, n = new Array(e), o = 0; o < e; o++) n[o] = arguments[o];
					(t = console).log.apply(t, ["DEBUG [Widget ".concat(this.id, "]:")].concat(n))
				}
			},
			getAction: function(t) {
				var e = this.$refs.menu.$refs.controls;
				for(var n in e) {
					var o = e[n];
					if(o.control === t) return o.controlAction
				}
			}
		}
	})
}, function(t, e, n) {
	n(20), t.exports = n(21)
}, function(t, e) {
	! function(e) {
		"use strict";
		var n, o = Object.prototype,
			r = o.hasOwnProperty,
			i = "function" == typeof Symbol ? Symbol : {},
			s = i.iterator || "@@iterator",
			a = i.asyncIterator || "@@asyncIterator",
			c = i.toStringTag || "@@toStringTag",
			u = "object" == typeof t,
			l = e.regeneratorRuntime;
		if(l) u && (t.exports = l);
		else {
			(l = e.regeneratorRuntime = u ? t.exports : {}).wrap = w;
			var h = "suspendedStart",
				f = "suspendedYield",
				p = "executing",
				m = "completed",
				d = {},
				v = {};
			v[s] = function() {
				return this
			};
			var y = Object.getPrototypeOf,
				g = y && y(y(R([])));
			g && g !== o && r.call(g, s) && (v = g);
			var b = O.prototype = _.prototype = Object.create(v);
			P.prototype = b.constructor = O, O.constructor = P, O[c] = P.displayName = "GeneratorFunction", l.isGeneratorFunction = function(t) {
				var e = "function" == typeof t && t.constructor;
				return !!e && (e === P || "GeneratorFunction" === (e.displayName || e.name))
			}, l.mark = function(t) {
				return Object.setPrototypeOf ? Object.setPrototypeOf(t, O) : (t.__proto__ = O, c in t || (t[c] = "GeneratorFunction")), t.prototype = Object.create(b), t
			}, l.awrap = function(t) {
				return {
					__await: t
				}
			}, T(E.prototype), E.prototype[a] = function() {
				return this
			}, l.AsyncIterator = E, l.async = function(t, e, n, o) {
				var r = new E(w(t, e, n, o));
				return l.isGeneratorFunction(e) ? r : r.next().then(function(t) {
					return t.done ? t.value : r.next()
				})
			}, T(b), b[c] = "Generator", b[s] = function() {
				return this
			}, b.toString = function() {
				return "[object Generator]"
			}, l.keys = function(t) {
				var e = [];
				for(var n in t) e.push(n);
				return e.reverse(),
					function n() {
						for(; e.length;) {
							var o = e.pop();
							if(o in t) return n.value = o, n.done = !1, n
						}
						return n.done = !0, n
					}
			}, l.values = R, j.prototype = {
				constructor: j,
				reset: function(t) {
					if(this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", this.arg = n, this.tryEntries.forEach(S), !t)
						for(var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = n)
				},
				stop: function() {
					this.done = !0;
					var t = this.tryEntries[0].completion;
					if("throw" === t.type) throw t.arg;
					return this.rval
				},
				dispatchException: function(t) {
					if(this.done) throw t;
					var e = this;

					function o(o, r) {
						return a.type = "throw", a.arg = t, e.next = o, r && (e.method = "next", e.arg = n), !!r
					}
					for(var i = this.tryEntries.length - 1; i >= 0; --i) {
						var s = this.tryEntries[i],
							a = s.completion;
						if("root" === s.tryLoc) return o("end");
						if(s.tryLoc <= this.prev) {
							var c = r.call(s, "catchLoc"),
								u = r.call(s, "finallyLoc");
							if(c && u) {
								if(this.prev < s.catchLoc) return o(s.catchLoc, !0);
								if(this.prev < s.finallyLoc) return o(s.finallyLoc)
							} else if(c) {
								if(this.prev < s.catchLoc) return o(s.catchLoc, !0)
							} else {
								if(!u) throw new Error("try statement without catch or finally");
								if(this.prev < s.finallyLoc) return o(s.finallyLoc)
							}
						}
					}
				},
				abrupt: function(t, e) {
					for(var n = this.tryEntries.length - 1; n >= 0; --n) {
						var o = this.tryEntries[n];
						if(o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
							var i = o;
							break
						}
					}
					i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
					var s = i ? i.completion : {};
					return s.type = t, s.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, d) : this.complete(s)
				},
				complete: function(t, e) {
					if("throw" === t.type) throw t.arg;
					return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), d
				},
				finish: function(t) {
					for(var e = this.tryEntries.length - 1; e >= 0; --e) {
						var n = this.tryEntries[e];
						if(n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), S(n), d
					}
				},
				catch: function(t) {
					for(var e = this.tryEntries.length - 1; e >= 0; --e) {
						var n = this.tryEntries[e];
						if(n.tryLoc === t) {
							var o = n.completion;
							if("throw" === o.type) {
								var r = o.arg;
								S(n)
							}
							return r
						}
					}
					throw new Error("illegal catch attempt")
				},
				delegateYield: function(t, e, o) {
					return this.delegate = {
						iterator: R(t),
						resultName: e,
						nextLoc: o
					}, "next" === this.method && (this.arg = n), d
				}
			}
		}

		function w(t, e, n, o) {
			var r = e && e.prototype instanceof _ ? e : _,
				i = Object.create(r.prototype),
				s = new j(o || []);
			return i._invoke = function(t, e, n) {
				var o = h;
				return function(r, i) {
					if(o === p) throw new Error("Generator is already running");
					if(o === m) {
						if("throw" === r) throw i;
						return C()
					}
					for(n.method = r, n.arg = i;;) {
						var s = n.delegate;
						if(s) {
							var a = k(s, n);
							if(a) {
								if(a === d) continue;
								return a
							}
						}
						if("next" === n.method) n.sent = n._sent = n.arg;
						else if("throw" === n.method) {
							if(o === h) throw o = m, n.arg;
							n.dispatchException(n.arg)
						} else "return" === n.method && n.abrupt("return", n.arg);
						o = p;
						var c = x(t, e, n);
						if("normal" === c.type) {
							if(o = n.done ? m : f, c.arg === d) continue;
							return {
								value: c.arg,
								done: n.done
							}
						}
						"throw" === c.type && (o = m, n.method = "throw", n.arg = c.arg)
					}
				}
			}(t, n, s), i
		}

		function x(t, e, n) {
			try {
				return {
					type: "normal",
					arg: t.call(e, n)
				}
			} catch(t) {
				return {
					type: "throw",
					arg: t
				}
			}
		}

		function _() {}

		function P() {}

		function O() {}

		function T(t) {
			["next", "throw", "return"].forEach(function(e) {
				t[e] = function(t) {
					return this._invoke(e, t)
				}
			})
		}

		function E(t) {
			var e;
			this._invoke = function(n, o) {
				function i() {
					return new Promise(function(e, i) {
						! function e(n, o, i, s) {
							var a = x(t[n], t, o);
							if("throw" !== a.type) {
								var c = a.arg,
									u = c.value;
								return u && "object" == typeof u && r.call(u, "__await") ? Promise.resolve(u.__await).then(function(t) {
									e("next", t, i, s)
								}, function(t) {
									e("throw", t, i, s)
								}) : Promise.resolve(u).then(function(t) {
									c.value = t, i(c)
								}, function(t) {
									return e("throw", t, i, s)
								})
							}
							s(a.arg)
						}(n, o, e, i)
					})
				}
				return e = e ? e.then(i, i) : i()
			}
		}

		function k(t, e) {
			var o = t.iterator[e.method];
			if(o === n) {
				if(e.delegate = null, "throw" === e.method) {
					if(t.iterator.return && (e.method = "return", e.arg = n, k(t, e), "throw" === e.method)) return d;
					e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
				}
				return d
			}
			var r = x(o, t.iterator, e.arg);
			if("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, d;
			var i = r.arg;
			return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = n), e.delegate = null, d) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, d)
		}

		function $(t) {
			var e = {
				tryLoc: t[0]
			};
			1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
		}

		function S(t) {
			var e = t.completion || {};
			e.type = "normal", delete e.arg, t.completion = e
		}

		function j(t) {
			this.tryEntries = [{
				tryLoc: "root"
			}], t.forEach($, this), this.reset(!0)
		}

		function R(t) {
			if(t) {
				var e = t[s];
				if(e) return e.call(t);
				if("function" == typeof t.next) return t;
				if(!isNaN(t.length)) {
					var o = -1,
						i = function e() {
							for(; ++o < t.length;)
								if(r.call(t, o)) return e.value = t[o], e.done = !1, e;
							return e.value = n, e.done = !0, e
						};
					return i.next = i
				}
			}
			return {
				next: C
			}
		}

		function C() {
			return {
				value: n,
				done: !0
			}
		}
	}(function() {
		return this || "object" == typeof self && self
	}() || Function("return this")())
}, function(module, __webpack_exports__, __webpack_require__) {
	"use strict";
	__webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, "Photomechanics", function() {
		return Photomechanics
	});
	var lodash_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2),
		lodash_extend__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_0__),
		_components_widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18),
		_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);

	function _classCallCheck(t, e) {
		if(!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function _defineProperties(t, e) {
		for(var n = 0; n < e.length; n++) {
			var o = e[n];
			o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
		}
	}

	function _createClass(t, e, n) {
		return e && _defineProperties(t.prototype, e), n && _defineProperties(t, n), t
	}

	function _defineProperty(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}
	var Photomechanics = function() {
		function Photomechanics(t) {
			_classCallCheck(this, Photomechanics), _defineProperty(this, "options", void 0), _defineProperty(this, "widgets", {}), this.options = lodash_extend__WEBPACK_IMPORTED_MODULE_0___default()(Object(_utils__WEBPACK_IMPORTED_MODULE_2__.b)(), t || {}), this.createWidgets()
		}
		return _createClass(Photomechanics, [{
			key: "createWidgets",
			value: function createWidgets() {
				for(var attribute = "data-".concat(this.options.attribute), selector = "[".concat(attribute, "]"), elements = document.querySelectorAll(selector) || [], i = 0; i < elements.length; i++) {
					var element = elements[i],
						config = lodash_extend__WEBPACK_IMPORTED_MODULE_0___default()(Object(_utils__WEBPACK_IMPORTED_MODULE_2__.b)(), this.options),
						params = element.getAttribute(attribute) || "({})";
					try {
						config = lodash_extend__WEBPACK_IMPORTED_MODULE_0___default()(config, eval(params)), config.zoomLevels.sort(function(t, e) {
							return t - e
						})
					} catch(t) {
						console.log(t)
					}
					var _id = element.id || i.toString(),
						widget = new _components_widget__WEBPACK_IMPORTED_MODULE_1__.a({
							propsData: {
								config: config,
								element: element,
								id: _id
							}
						});
					widget.$mount(element.parentElement.appendChild(document.createElement("div"))), this.widgets[_id] = widget
				}
			}
		}]), Photomechanics
	}();
	window.Photomechanics = Photomechanics
}, function(t, e, n) {
	var o = n(23),
		r = n(34),
		i = n(43),
		s = r(function(t, e) {
			o(e, i(e), t)
		});
	t.exports = s
}, function(t, e, n) {
	var o = n(24),
		r = n(7);
	t.exports = function(t, e, n, i) {
		var s = !n;
		n || (n = {});
		for(var a = -1, c = e.length; ++a < c;) {
			var u = e[a],
				l = i ? i(n[u], t[u], u, n, t) : void 0;
			void 0 === l && (l = t[u]), s ? r(n, u, l) : o(n, u, l)
		}
		return n
	}
}, function(t, e, n) {
	var o = n(7),
		r = n(12),
		i = Object.prototype.hasOwnProperty;
	t.exports = function(t, e, n) {
		var s = t[e];
		i.call(t, e) && r(s, n) && (void 0 !== n || e in t) || o(t, e, n)
	}
}, function(t, e, n) {
	var o = n(26),
		r = n(33);
	t.exports = function(t, e) {
		var n = r(t, e);
		return o(n) ? n : void 0
	}
}, function(t, e, n) {
	var o = n(9),
		r = n(30),
		i = n(1),
		s = n(32),
		a = /^\[object .+?Constructor\]$/,
		c = Function.prototype,
		u = Object.prototype,
		l = c.toString,
		h = u.hasOwnProperty,
		f = RegExp("^" + l.call(h).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
	t.exports = function(t) {
		return !(!i(t) || r(t)) && (o(t) ? f : a).test(s(t))
	}
}, function(t, e) {
	var n;
	n = function() {
		return this
	}();
	try {
		n = n || new Function("return this")()
	} catch(t) {
		"object" == typeof window && (n = window)
	}
	t.exports = n
}, function(t, e, n) {
	var o = n(10),
		r = Object.prototype,
		i = r.hasOwnProperty,
		s = r.toString,
		a = o ? o.toStringTag : void 0;
	t.exports = function(t) {
		var e = i.call(t, a),
			n = t[a];
		try {
			t[a] = void 0;
			var o = !0
		} catch(t) {}
		var r = s.call(t);
		return o && (e ? t[a] = n : delete t[a]), r
	}
}, function(t, e) {
	var n = Object.prototype.toString;
	t.exports = function(t) {
		return n.call(t)
	}
}, function(t, e, n) {
	var o, r = n(31),
		i = (o = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "")) ? "Symbol(src)_1." + o : "";
	t.exports = function(t) {
		return !!i && i in t
	}
}, function(t, e, n) {
	var o = n(4)["__core-js_shared__"];
	t.exports = o
}, function(t, e) {
	var n = Function.prototype.toString;
	t.exports = function(t) {
		if(null != t) {
			try {
				return n.call(t)
			} catch(t) {}
			try {
				return t + ""
			} catch(t) {}
		}
		return ""
	}
}, function(t, e) {
	t.exports = function(t, e) {
		return null == t ? void 0 : t[e]
	}
}, function(t, e, n) {
	var o = n(35),
		r = n(42);
	t.exports = function(t) {
		return o(function(e, n) {
			var o = -1,
				i = n.length,
				s = i > 1 ? n[i - 1] : void 0,
				a = i > 2 ? n[2] : void 0;
			for(s = t.length > 3 && "function" == typeof s ? (i--, s) : void 0, a && r(n[0], n[1], a) && (s = i < 3 ? void 0 : s, i = 1), e = Object(e); ++o < i;) {
				var c = n[o];
				c && t(e, c, o, s)
			}
			return e
		})
	}
}, function(t, e, n) {
	var o = n(13),
		r = n(36),
		i = n(38);
	t.exports = function(t, e) {
		return i(r(t, e, o), t + "")
	}
}, function(t, e, n) {
	var o = n(37),
		r = Math.max;
	t.exports = function(t, e, n) {
		return e = r(void 0 === e ? t.length - 1 : e, 0),
			function() {
				for(var i = arguments, s = -1, a = r(i.length - e, 0), c = Array(a); ++s < a;) c[s] = i[e + s];
				s = -1;
				for(var u = Array(e + 1); ++s < e;) u[s] = i[s];
				return u[e] = n(c), o(t, this, u)
			}
	}
}, function(t, e) {
	t.exports = function(t, e, n) {
		switch(n.length) {
			case 0:
				return t.call(e);
			case 1:
				return t.call(e, n[0]);
			case 2:
				return t.call(e, n[0], n[1]);
			case 3:
				return t.call(e, n[0], n[1], n[2])
		}
		return t.apply(e, n)
	}
}, function(t, e, n) {
	var o = n(39),
		r = n(41)(o);
	t.exports = r
}, function(t, e, n) {
	var o = n(40),
		r = n(8),
		i = n(13),
		s = r ? function(t, e) {
			return r(t, "toString", {
				configurable: !0,
				enumerable: !1,
				value: o(e),
				writable: !0
			})
		} : i;
	t.exports = s
}, function(t, e) {
	t.exports = function(t) {
		return function() {
			return t
		}
	}
}, function(t, e) {
	var n = 800,
		o = 16,
		r = Date.now;
	t.exports = function(t) {
		var e = 0,
			i = 0;
		return function() {
			var s = r(),
				a = o - (s - i);
			if(i = s, a > 0) {
				if(++e >= n) return arguments[0]
			} else e = 0;
			return t.apply(void 0, arguments)
		}
	}
}, function(t, e, n) {
	var o = n(12),
		r = n(14),
		i = n(16),
		s = n(1);
	t.exports = function(t, e, n) {
		if(!s(n)) return !1;
		var a = typeof e;
		return !!("number" == a ? r(n) && i(e, n.length) : "string" == a && e in n) && o(n[e], t)
	}
}, function(t, e, n) {
	var o = n(44),
		r = n(55),
		i = n(14);
	t.exports = function(t) {
		return i(t) ? o(t, !0) : r(t)
	}
}, function(t, e, n) {
	var o = n(45),
		r = n(46),
		i = n(48),
		s = n(49),
		a = n(16),
		c = n(51),
		u = Object.prototype.hasOwnProperty;
	t.exports = function(t, e) {
		var n = i(t),
			l = !n && r(t),
			h = !n && !l && s(t),
			f = !n && !l && !h && c(t),
			p = n || l || h || f,
			m = p ? o(t.length, String) : [],
			d = m.length;
		for(var v in t) !e && !u.call(t, v) || p && ("length" == v || h && ("offset" == v || "parent" == v) || f && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || a(v, d)) || m.push(v);
		return m
	}
}, function(t, e) {
	t.exports = function(t, e) {
		for(var n = -1, o = Array(t); ++n < t;) o[n] = e(n);
		return o
	}
}, function(t, e, n) {
	var o = n(47),
		r = n(5),
		i = Object.prototype,
		s = i.hasOwnProperty,
		a = i.propertyIsEnumerable,
		c = o(function() {
			return arguments
		}()) ? o : function(t) {
			return r(t) && s.call(t, "callee") && !a.call(t, "callee")
		};
	t.exports = c
}, function(t, e, n) {
	var o = n(3),
		r = n(5),
		i = "[object Arguments]";
	t.exports = function(t) {
		return r(t) && o(t) == i
	}
}, function(t, e) {
	var n = Array.isArray;
	t.exports = n
}, function(t, e, n) {
	(function(t) {
		var o = n(4),
			r = n(50),
			i = e && !e.nodeType && e,
			s = i && "object" == typeof t && t && !t.nodeType && t,
			a = s && s.exports === i ? o.Buffer : void 0,
			c = (a ? a.isBuffer : void 0) || r;
		t.exports = c
	}).call(this, n(17)(t))
}, function(t, e) {
	t.exports = function() {
		return !1
	}
}, function(t, e, n) {
	var o = n(52),
		r = n(53),
		i = n(54),
		s = i && i.isTypedArray,
		a = s ? r(s) : o;
	t.exports = a
}, function(t, e, n) {
	var o = n(3),
		r = n(15),
		i = n(5),
		s = {};
	s["[object Float32Array]"] = s["[object Float64Array]"] = s["[object Int8Array]"] = s["[object Int16Array]"] = s["[object Int32Array]"] = s["[object Uint8Array]"] = s["[object Uint8ClampedArray]"] = s["[object Uint16Array]"] = s["[object Uint32Array]"] = !0, s["[object Arguments]"] = s["[object Array]"] = s["[object ArrayBuffer]"] = s["[object Boolean]"] = s["[object DataView]"] = s["[object Date]"] = s["[object Error]"] = s["[object Function]"] = s["[object Map]"] = s["[object Number]"] = s["[object Object]"] = s["[object RegExp]"] = s["[object Set]"] = s["[object String]"] = s["[object WeakMap]"] = !1, t.exports = function(t) {
		return i(t) && r(t.length) && !!s[o(t)]
	}
}, function(t, e) {
	t.exports = function(t) {
		return function(e) {
			return t(e)
		}
	}
}, function(t, e, n) {
	(function(t) {
		var o = n(11),
			r = e && !e.nodeType && e,
			i = r && "object" == typeof t && t && !t.nodeType && t,
			s = i && i.exports === r && o.process,
			a = function() {
				try {
					var t = i && i.require && i.require("util").types;
					return t || s && s.binding && s.binding("util")
				} catch(t) {}
			}();
		t.exports = a
	}).call(this, n(17)(t))
}, function(t, e, n) {
	var o = n(1),
		r = n(56),
		i = n(57),
		s = Object.prototype.hasOwnProperty;
	t.exports = function(t) {
		if(!o(t)) return i(t);
		var e = r(t),
			n = [];
		for(var a in t)("constructor" != a || !e && s.call(t, a)) && n.push(a);
		return n
	}
}, function(t, e) {
	var n = Object.prototype;
	t.exports = function(t) {
		var e = t && t.constructor;
		return t === ("function" == typeof e && e.prototype || n)
	}
}, function(t, e) {
	t.exports = function(t) {
		var e = [];
		if(null != t)
			for(var n in Object(t)) e.push(n);
		return e
	}
}]);