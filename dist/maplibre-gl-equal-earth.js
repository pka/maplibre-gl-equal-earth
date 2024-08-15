import { LngLat as ra } from "maplibre-gl";
function Ka(t) {
  t("EPSG:4326", "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"), t("EPSG:4269", "+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"), t("EPSG:3857", "+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs"), t.WGS84 = t["EPSG:4326"], t["EPSG:3785"] = t["EPSG:3857"], t.GOOGLE = t["EPSG:3857"], t["EPSG:900913"] = t["EPSG:3857"], t["EPSG:102113"] = t["EPSG:3857"];
}
var st = 1, it = 2, lt = 3, Ja = 4, Kt = 5, na = 6378137, Va = 6356752314e-3, oa = 0.0066943799901413165, _t = 484813681109536e-20, d = Math.PI / 2, Za = 0.16666666666666666, Ya = 0.04722222222222222, ts = 0.022156084656084655, _ = 1e-10, L = 0.017453292519943295, W = 57.29577951308232, S = Math.PI / 4, Et = Math.PI * 2, R = 3.14159265359, p = {};
p.greenwich = 0;
p.lisbon = -9.131906111111;
p.paris = 2.337229166667;
p.bogota = -74.080916666667;
p.madrid = -3.687938888889;
p.rome = 12.452333333333;
p.bern = 7.439583333333;
p.jakarta = 106.807719444444;
p.ferro = -17.666666666667;
p.brussels = 4.367975;
p.stockholm = 18.058277777778;
p.athens = 23.7163375;
p.oslo = 10.722916666667;
const as = {
  ft: { to_meter: 0.3048 },
  "us-ft": { to_meter: 1200 / 3937 }
};
var la = /[\s_\-\/\(\)]/g;
function V(t, a) {
  if (t[a])
    return t[a];
  for (var s = Object.keys(t), h = a.toLowerCase().replace(la, ""), i = -1, e, n; ++i < s.length; )
    if (e = s[i], n = e.toLowerCase().replace(la, ""), n === h)
      return t[e];
}
function Jt(t) {
  var a = {}, s = t.split("+").map(function(r) {
    return r.trim();
  }).filter(function(r) {
    return r;
  }).reduce(function(r, o) {
    var l = o.split("=");
    return l.push(!0), r[l[0].toLowerCase()] = l[1], r;
  }, {}), h, i, e, n = {
    proj: "projName",
    datum: "datumCode",
    rf: function(r) {
      a.rf = parseFloat(r);
    },
    lat_0: function(r) {
      a.lat0 = r * L;
    },
    lat_1: function(r) {
      a.lat1 = r * L;
    },
    lat_2: function(r) {
      a.lat2 = r * L;
    },
    lat_ts: function(r) {
      a.lat_ts = r * L;
    },
    lon_0: function(r) {
      a.long0 = r * L;
    },
    lon_1: function(r) {
      a.long1 = r * L;
    },
    lon_2: function(r) {
      a.long2 = r * L;
    },
    alpha: function(r) {
      a.alpha = parseFloat(r) * L;
    },
    gamma: function(r) {
      a.rectified_grid_angle = parseFloat(r);
    },
    lonc: function(r) {
      a.longc = r * L;
    },
    x_0: function(r) {
      a.x0 = parseFloat(r);
    },
    y_0: function(r) {
      a.y0 = parseFloat(r);
    },
    k_0: function(r) {
      a.k0 = parseFloat(r);
    },
    k: function(r) {
      a.k0 = parseFloat(r);
    },
    a: function(r) {
      a.a = parseFloat(r);
    },
    b: function(r) {
      a.b = parseFloat(r);
    },
    r: function(r) {
      a.a = a.b = parseFloat(r);
    },
    r_a: function() {
      a.R_A = !0;
    },
    zone: function(r) {
      a.zone = parseInt(r, 10);
    },
    south: function() {
      a.utmSouth = !0;
    },
    towgs84: function(r) {
      a.datum_params = r.split(",").map(function(o) {
        return parseFloat(o);
      });
    },
    to_meter: function(r) {
      a.to_meter = parseFloat(r);
    },
    units: function(r) {
      a.units = r;
      var o = V(as, r);
      o && (a.to_meter = o.to_meter);
    },
    from_greenwich: function(r) {
      a.from_greenwich = r * L;
    },
    pm: function(r) {
      var o = V(p, r);
      a.from_greenwich = (o || parseFloat(r)) * L;
    },
    nadgrids: function(r) {
      r === "@null" ? a.datumCode = "none" : a.nadgrids = r;
    },
    axis: function(r) {
      var o = "ewnsud";
      r.length === 3 && o.indexOf(r.substr(0, 1)) !== -1 && o.indexOf(r.substr(1, 1)) !== -1 && o.indexOf(r.substr(2, 1)) !== -1 && (a.axis = r);
    },
    approx: function() {
      a.approx = !0;
    }
  };
  for (h in s)
    i = s[h], h in n ? (e = n[h], typeof e == "function" ? e(i) : a[e] = i) : a[h] = i;
  return typeof a.datumCode == "string" && a.datumCode !== "WGS84" && (a.datumCode = a.datumCode.toLowerCase()), a;
}
var At = 1, Ca = 2, Sa = 3, kt = 4, wa = 5, Yt = -1, ss = /\s/, is = /[A-Za-z]/, hs = /[A-Za-z84_]/, Qt = /[,\]]/, Pa = /[\d\.E\-\+]/;
function K(t) {
  if (typeof t != "string")
    throw new Error("not a string");
  this.text = t.trim(), this.level = 0, this.place = 0, this.root = null, this.stack = [], this.currentObject = null, this.state = At;
}
K.prototype.readCharicter = function() {
  var t = this.text[this.place++];
  if (this.state !== kt)
    for (; ss.test(t); ) {
      if (this.place >= this.text.length)
        return;
      t = this.text[this.place++];
    }
  switch (this.state) {
    case At:
      return this.neutral(t);
    case Ca:
      return this.keyword(t);
    case kt:
      return this.quoted(t);
    case wa:
      return this.afterquote(t);
    case Sa:
      return this.number(t);
    case Yt:
      return;
  }
};
K.prototype.afterquote = function(t) {
  if (t === '"') {
    this.word += '"', this.state = kt;
    return;
  }
  if (Qt.test(t)) {
    this.word = this.word.trim(), this.afterItem(t);
    return;
  }
  throw new Error(`havn't handled "` + t + '" in afterquote yet, index ' + this.place);
};
K.prototype.afterItem = function(t) {
  if (t === ",") {
    this.word !== null && this.currentObject.push(this.word), this.word = null, this.state = At;
    return;
  }
  if (t === "]") {
    this.level--, this.word !== null && (this.currentObject.push(this.word), this.word = null), this.state = At, this.currentObject = this.stack.pop(), this.currentObject || (this.state = Yt);
    return;
  }
};
K.prototype.number = function(t) {
  if (Pa.test(t)) {
    this.word += t;
    return;
  }
  if (Qt.test(t)) {
    this.word = parseFloat(this.word), this.afterItem(t);
    return;
  }
  throw new Error(`havn't handled "` + t + '" in number yet, index ' + this.place);
};
K.prototype.quoted = function(t) {
  if (t === '"') {
    this.state = wa;
    return;
  }
  this.word += t;
};
K.prototype.keyword = function(t) {
  if (hs.test(t)) {
    this.word += t;
    return;
  }
  if (t === "[") {
    var a = [];
    a.push(this.word), this.level++, this.root === null ? this.root = a : this.currentObject.push(a), this.stack.push(this.currentObject), this.currentObject = a, this.state = At;
    return;
  }
  if (Qt.test(t)) {
    this.afterItem(t);
    return;
  }
  throw new Error(`havn't handled "` + t + '" in keyword yet, index ' + this.place);
};
K.prototype.neutral = function(t) {
  if (is.test(t)) {
    this.word = t, this.state = Ca;
    return;
  }
  if (t === '"') {
    this.word = "", this.state = kt;
    return;
  }
  if (Pa.test(t)) {
    this.word = t, this.state = Sa;
    return;
  }
  if (Qt.test(t)) {
    this.afterItem(t);
    return;
  }
  throw new Error(`havn't handled "` + t + '" in neutral yet, index ' + this.place);
};
K.prototype.output = function() {
  for (; this.place < this.text.length; )
    this.readCharicter();
  if (this.state === Yt)
    return this.root;
  throw new Error('unable to parse string "' + this.text + '". State is ' + this.state);
};
function es(t) {
  var a = new K(t);
  return a.output();
}
function fa(t, a, s) {
  Array.isArray(a) && (s.unshift(a), a = null);
  var h = a ? {} : t, i = s.reduce(function(e, n) {
    return et(n, e), e;
  }, h);
  a && (t[a] = i);
}
function et(t, a) {
  if (!Array.isArray(t)) {
    a[t] = !0;
    return;
  }
  var s = t.shift();
  if (s === "PARAMETER" && (s = t.shift()), t.length === 1) {
    if (Array.isArray(t[0])) {
      a[s] = {}, et(t[0], a[s]);
      return;
    }
    a[s] = t[0];
    return;
  }
  if (!t.length) {
    a[s] = !0;
    return;
  }
  if (s === "TOWGS84") {
    a[s] = t;
    return;
  }
  if (s === "AXIS") {
    s in a || (a[s] = []), a[s].push(t);
    return;
  }
  Array.isArray(s) || (a[s] = {});
  var h;
  switch (s) {
    case "UNIT":
    case "PRIMEM":
    case "VERT_DATUM":
      a[s] = {
        name: t[0].toLowerCase(),
        convert: t[1]
      }, t.length === 3 && et(t[2], a[s]);
      return;
    case "SPHEROID":
    case "ELLIPSOID":
      a[s] = {
        name: t[0],
        a: t[1],
        rf: t[2]
      }, t.length === 4 && et(t[3], a[s]);
      return;
    case "PROJECTEDCRS":
    case "PROJCRS":
    case "GEOGCS":
    case "GEOCCS":
    case "PROJCS":
    case "LOCAL_CS":
    case "GEODCRS":
    case "GEODETICCRS":
    case "GEODETICDATUM":
    case "EDATUM":
    case "ENGINEERINGDATUM":
    case "VERT_CS":
    case "VERTCRS":
    case "VERTICALCRS":
    case "COMPD_CS":
    case "COMPOUNDCRS":
    case "ENGINEERINGCRS":
    case "ENGCRS":
    case "FITTED_CS":
    case "LOCAL_DATUM":
    case "DATUM":
      t[0] = ["name", t[0]], fa(a, s, t);
      return;
    default:
      for (h = -1; ++h < t.length; )
        if (!Array.isArray(t[h]))
          return et(t, a[s]);
      return fa(a, s, t);
  }
}
var rs = 0.017453292519943295;
function ns(t, a) {
  var s = a[0], h = a[1];
  !(s in t) && h in t && (t[s] = t[h], a.length === 3 && (t[s] = a[2](t[s])));
}
function Q(t) {
  return t * rs;
}
function os(t) {
  if (t.type === "GEOGCS" ? t.projName = "longlat" : t.type === "LOCAL_CS" ? (t.projName = "identity", t.local = !0) : typeof t.PROJECTION == "object" ? t.projName = Object.keys(t.PROJECTION)[0] : t.projName = t.PROJECTION, t.AXIS) {
    for (var a = "", s = 0, h = t.AXIS.length; s < h; ++s) {
      var i = [t.AXIS[s][0].toLowerCase(), t.AXIS[s][1].toLowerCase()];
      i[0].indexOf("north") !== -1 || (i[0] === "y" || i[0] === "lat") && i[1] === "north" ? a += "n" : i[0].indexOf("south") !== -1 || (i[0] === "y" || i[0] === "lat") && i[1] === "south" ? a += "s" : i[0].indexOf("east") !== -1 || (i[0] === "x" || i[0] === "lon") && i[1] === "east" ? a += "e" : (i[0].indexOf("west") !== -1 || (i[0] === "x" || i[0] === "lon") && i[1] === "west") && (a += "w");
    }
    a.length === 2 && (a += "u"), a.length === 3 && (t.axis = a);
  }
  t.UNIT && (t.units = t.UNIT.name.toLowerCase(), t.units === "metre" && (t.units = "meter"), t.UNIT.convert && (t.type === "GEOGCS" ? t.DATUM && t.DATUM.SPHEROID && (t.to_meter = t.UNIT.convert * t.DATUM.SPHEROID.a) : t.to_meter = t.UNIT.convert));
  var e = t.GEOGCS;
  t.type === "GEOGCS" && (e = t), e && (e.DATUM ? t.datumCode = e.DATUM.name.toLowerCase() : t.datumCode = e.name.toLowerCase(), t.datumCode.slice(0, 2) === "d_" && (t.datumCode = t.datumCode.slice(2)), (t.datumCode === "new_zealand_geodetic_datum_1949" || t.datumCode === "new_zealand_1949") && (t.datumCode = "nzgd49"), (t.datumCode === "wgs_1984" || t.datumCode === "world_geodetic_system_1984") && (t.PROJECTION === "Mercator_Auxiliary_Sphere" && (t.sphere = !0), t.datumCode = "wgs84"), t.datumCode.slice(-6) === "_ferro" && (t.datumCode = t.datumCode.slice(0, -6)), t.datumCode.slice(-8) === "_jakarta" && (t.datumCode = t.datumCode.slice(0, -8)), ~t.datumCode.indexOf("belge") && (t.datumCode = "rnb72"), e.DATUM && e.DATUM.SPHEROID && (t.ellps = e.DATUM.SPHEROID.name.replace("_19", "").replace(/[Cc]larke\_18/, "clrk"), t.ellps.toLowerCase().slice(0, 13) === "international" && (t.ellps = "intl"), t.a = e.DATUM.SPHEROID.a, t.rf = parseFloat(e.DATUM.SPHEROID.rf, 10)), e.DATUM && e.DATUM.TOWGS84 && (t.datum_params = e.DATUM.TOWGS84), ~t.datumCode.indexOf("osgb_1936") && (t.datumCode = "osgb36"), ~t.datumCode.indexOf("osni_1952") && (t.datumCode = "osni52"), (~t.datumCode.indexOf("tm65") || ~t.datumCode.indexOf("geodetic_datum_of_1965")) && (t.datumCode = "ire65"), t.datumCode === "ch1903+" && (t.datumCode = "ch1903"), ~t.datumCode.indexOf("israel") && (t.datumCode = "isr93")), t.b && !isFinite(t.b) && (t.b = t.a);
  function n(l) {
    var u = t.to_meter || 1;
    return l * u;
  }
  var r = function(l) {
    return ns(t, l);
  }, o = [
    ["standard_parallel_1", "Standard_Parallel_1"],
    ["standard_parallel_1", "Latitude of 1st standard parallel"],
    ["standard_parallel_2", "Standard_Parallel_2"],
    ["standard_parallel_2", "Latitude of 2nd standard parallel"],
    ["false_easting", "False_Easting"],
    ["false_easting", "False easting"],
    ["false-easting", "Easting at false origin"],
    ["false_northing", "False_Northing"],
    ["false_northing", "False northing"],
    ["false_northing", "Northing at false origin"],
    ["central_meridian", "Central_Meridian"],
    ["central_meridian", "Longitude of natural origin"],
    ["central_meridian", "Longitude of false origin"],
    ["latitude_of_origin", "Latitude_Of_Origin"],
    ["latitude_of_origin", "Central_Parallel"],
    ["latitude_of_origin", "Latitude of natural origin"],
    ["latitude_of_origin", "Latitude of false origin"],
    ["scale_factor", "Scale_Factor"],
    ["k0", "scale_factor"],
    ["latitude_of_center", "Latitude_Of_Center"],
    ["latitude_of_center", "Latitude_of_center"],
    ["lat0", "latitude_of_center", Q],
    ["longitude_of_center", "Longitude_Of_Center"],
    ["longitude_of_center", "Longitude_of_center"],
    ["longc", "longitude_of_center", Q],
    ["x0", "false_easting", n],
    ["y0", "false_northing", n],
    ["long0", "central_meridian", Q],
    ["lat0", "latitude_of_origin", Q],
    ["lat0", "standard_parallel_1", Q],
    ["lat1", "standard_parallel_1", Q],
    ["lat2", "standard_parallel_2", Q],
    ["azimuth", "Azimuth"],
    ["alpha", "azimuth", Q],
    ["srsCode", "name"]
  ];
  o.forEach(r), !t.long0 && t.longc && (t.projName === "Albers_Conic_Equal_Area" || t.projName === "Lambert_Azimuthal_Equal_Area") && (t.long0 = t.longc), !t.lat_ts && t.lat1 && (t.projName === "Stereographic_South_Pole" || t.projName === "Polar Stereographic (variant B)") ? (t.lat0 = Q(t.lat1 > 0 ? 90 : -90), t.lat_ts = t.lat1) : !t.lat_ts && t.lat0 && t.projName === "Polar_Stereographic" && (t.lat_ts = t.lat0, t.lat0 = Q(t.lat0 > 0 ? 90 : -90));
}
function Ia(t) {
  var a = es(t), s = a.shift(), h = a.shift();
  a.unshift(["name", h]), a.unshift(["type", s]);
  var i = {};
  return et(a, i), os(i), i;
}
function z(t) {
  var a = this;
  if (arguments.length === 2) {
    var s = arguments[1];
    typeof s == "string" ? s.charAt(0) === "+" ? z[t] = Jt(arguments[1]) : z[t] = Ia(arguments[1]) : z[t] = s;
  } else if (arguments.length === 1) {
    if (Array.isArray(t))
      return t.map(function(h) {
        Array.isArray(h) ? z.apply(a, h) : z(h);
      });
    if (typeof t == "string") {
      if (t in z)
        return z[t];
    } else "EPSG" in t ? z["EPSG:" + t.EPSG] = t : "ESRI" in t ? z["ESRI:" + t.ESRI] = t : "IAU2000" in t ? z["IAU2000:" + t.IAU2000] = t : console.log(t);
    return;
  }
}
Ka(z);
function ls(t) {
  return typeof t == "string";
}
function fs(t) {
  return t in z;
}
var us = ["PROJECTEDCRS", "PROJCRS", "GEOGCS", "GEOCCS", "PROJCS", "LOCAL_CS", "GEODCRS", "GEODETICCRS", "GEODETICDATUM", "ENGCRS", "ENGINEERINGCRS"];
function cs(t) {
  return us.some(function(a) {
    return t.indexOf(a) > -1;
  });
}
var Ms = ["3857", "900913", "3785", "102113"];
function vs(t) {
  var a = V(t, "authority");
  if (a) {
    var s = V(a, "epsg");
    return s && Ms.indexOf(s) > -1;
  }
}
function ds(t) {
  var a = V(t, "extension");
  if (a)
    return V(a, "proj4");
}
function ms(t) {
  return t[0] === "+";
}
function ys(t) {
  if (ls(t)) {
    if (fs(t))
      return z[t];
    if (cs(t)) {
      var a = Ia(t);
      if (vs(a))
        return z["EPSG:3857"];
      var s = ds(a);
      return s ? Jt(s) : a;
    }
    if (ms(t))
      return Jt(t);
  } else
    return t;
}
function ua(t, a) {
  t = t || {};
  var s, h;
  if (!a)
    return t;
  for (h in a)
    s = a[h], s !== void 0 && (t[h] = s);
  return t;
}
function H(t, a, s) {
  var h = t * a;
  return s / Math.sqrt(1 - h * h);
}
function wt(t) {
  return t < 0 ? -1 : 1;
}
function g(t) {
  return Math.abs(t) <= R ? t : t - wt(t) * Et;
}
function F(t, a, s) {
  var h = t * s, i = 0.5 * t;
  return h = Math.pow((1 - h) / (1 + h), i), Math.tan(0.5 * (d - a)) / h;
}
function Ct(t, a) {
  for (var s = 0.5 * t, h, i, e = d - 2 * Math.atan(a), n = 0; n <= 15; n++)
    if (h = t * Math.sin(e), i = d - 2 * Math.atan(a * Math.pow((1 - h) / (1 + h), s)) - e, e += i, Math.abs(i) <= 1e-10)
      return e;
  return -9999;
}
function _s() {
  var t = this.b / this.a;
  this.es = 1 - t * t, "x0" in this || (this.x0 = 0), "y0" in this || (this.y0 = 0), this.e = Math.sqrt(this.es), this.lat_ts ? this.sphere ? this.k0 = Math.cos(this.lat_ts) : this.k0 = H(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) : this.k0 || (this.k ? this.k0 = this.k : this.k0 = 1);
}
function gs(t) {
  var a = t.x, s = t.y;
  if (s * W > 90 && s * W < -90 && a * W > 180 && a * W < -180)
    return null;
  var h, i;
  if (Math.abs(Math.abs(s) - d) <= _)
    return null;
  if (this.sphere)
    h = this.x0 + this.a * this.k0 * g(a - this.long0), i = this.y0 + this.a * this.k0 * Math.log(Math.tan(S + 0.5 * s));
  else {
    var e = Math.sin(s), n = F(this.e, s, e);
    h = this.x0 + this.a * this.k0 * g(a - this.long0), i = this.y0 - this.a * this.k0 * Math.log(n);
  }
  return t.x = h, t.y = i, t;
}
function xs(t) {
  var a = t.x - this.x0, s = t.y - this.y0, h, i;
  if (this.sphere)
    i = d - 2 * Math.atan(Math.exp(-s / (this.a * this.k0)));
  else {
    var e = Math.exp(-s / (this.a * this.k0));
    if (i = Ct(this.e, e), i === -9999)
      return null;
  }
  return h = g(this.long0 + a / (this.a * this.k0)), t.x = h, t.y = i, t;
}
var bs = ["Mercator", "Popular Visualisation Pseudo Mercator", "Mercator_1SP", "Mercator_Auxiliary_Sphere", "merc"];
const Ns = {
  init: _s,
  forward: gs,
  inverse: xs,
  names: bs
};
function Es() {
}
function ca(t) {
  return t;
}
var As = ["longlat", "identity"];
const Cs = {
  init: Es,
  forward: ca,
  inverse: ca,
  names: As
};
var Ss = [Ns, Cs], Gt = {}, Bt = [];
function Oa(t, a) {
  var s = Bt.length;
  return t.names ? (Bt[s] = t, t.names.forEach(function(h) {
    Gt[h.toLowerCase()] = s;
  }), this) : (console.log(a), !0);
}
function ws(t) {
  if (!t)
    return !1;
  var a = t.toLowerCase();
  if (typeof Gt[a] < "u" && Bt[Gt[a]])
    return Bt[Gt[a]];
}
function Ps() {
  Ss.forEach(Oa);
}
const Is = {
  start: Ps,
  add: Oa,
  get: ws
};
var N = {};
N.MERIT = {
  a: 6378137,
  rf: 298.257,
  ellipseName: "MERIT 1983"
};
N.SGS85 = {
  a: 6378136,
  rf: 298.257,
  ellipseName: "Soviet Geodetic System 85"
};
N.GRS80 = {
  a: 6378137,
  rf: 298.257222101,
  ellipseName: "GRS 1980(IUGG, 1980)"
};
N.IAU76 = {
  a: 6378140,
  rf: 298.257,
  ellipseName: "IAU 1976"
};
N.airy = {
  a: 6377563396e-3,
  b: 635625691e-2,
  ellipseName: "Airy 1830"
};
N.APL4 = {
  a: 6378137,
  rf: 298.25,
  ellipseName: "Appl. Physics. 1965"
};
N.NWL9D = {
  a: 6378145,
  rf: 298.25,
  ellipseName: "Naval Weapons Lab., 1965"
};
N.mod_airy = {
  a: 6377340189e-3,
  b: 6356034446e-3,
  ellipseName: "Modified Airy"
};
N.andrae = {
  a: 637710443e-2,
  rf: 300,
  ellipseName: "Andrae 1876 (Den., Iclnd.)"
};
N.aust_SA = {
  a: 6378160,
  rf: 298.25,
  ellipseName: "Australian Natl & S. Amer. 1969"
};
N.GRS67 = {
  a: 6378160,
  rf: 298.247167427,
  ellipseName: "GRS 67(IUGG 1967)"
};
N.bessel = {
  a: 6377397155e-3,
  rf: 299.1528128,
  ellipseName: "Bessel 1841"
};
N.bess_nam = {
  a: 6377483865e-3,
  rf: 299.1528128,
  ellipseName: "Bessel 1841 (Namibia)"
};
N.clrk66 = {
  a: 63782064e-1,
  b: 63565838e-1,
  ellipseName: "Clarke 1866"
};
N.clrk80 = {
  a: 6378249145e-3,
  rf: 293.4663,
  ellipseName: "Clarke 1880 mod."
};
N.clrk80ign = {
  a: 63782492e-1,
  b: 6356515,
  rf: 293.4660213,
  ellipseName: "Clarke 1880 (IGN)"
};
N.clrk58 = {
  a: 6378293645208759e-9,
  rf: 294.2606763692654,
  ellipseName: "Clarke 1858"
};
N.CPM = {
  a: 63757387e-1,
  rf: 334.29,
  ellipseName: "Comm. des Poids et Mesures 1799"
};
N.delmbr = {
  a: 6376428,
  rf: 311.5,
  ellipseName: "Delambre 1810 (Belgium)"
};
N.engelis = {
  a: 637813605e-2,
  rf: 298.2566,
  ellipseName: "Engelis 1985"
};
N.evrst30 = {
  a: 6377276345e-3,
  rf: 300.8017,
  ellipseName: "Everest 1830"
};
N.evrst48 = {
  a: 6377304063e-3,
  rf: 300.8017,
  ellipseName: "Everest 1948"
};
N.evrst56 = {
  a: 6377301243e-3,
  rf: 300.8017,
  ellipseName: "Everest 1956"
};
N.evrst69 = {
  a: 6377295664e-3,
  rf: 300.8017,
  ellipseName: "Everest 1969"
};
N.evrstSS = {
  a: 6377298556e-3,
  rf: 300.8017,
  ellipseName: "Everest (Sabah & Sarawak)"
};
N.fschr60 = {
  a: 6378166,
  rf: 298.3,
  ellipseName: "Fischer (Mercury Datum) 1960"
};
N.fschr60m = {
  a: 6378155,
  rf: 298.3,
  ellipseName: "Fischer 1960"
};
N.fschr68 = {
  a: 6378150,
  rf: 298.3,
  ellipseName: "Fischer 1968"
};
N.helmert = {
  a: 6378200,
  rf: 298.3,
  ellipseName: "Helmert 1906"
};
N.hough = {
  a: 6378270,
  rf: 297,
  ellipseName: "Hough"
};
N.intl = {
  a: 6378388,
  rf: 297,
  ellipseName: "International 1909 (Hayford)"
};
N.kaula = {
  a: 6378163,
  rf: 298.24,
  ellipseName: "Kaula 1961"
};
N.lerch = {
  a: 6378139,
  rf: 298.257,
  ellipseName: "Lerch 1979"
};
N.mprts = {
  a: 6397300,
  rf: 191,
  ellipseName: "Maupertius 1738"
};
N.new_intl = {
  a: 63781575e-1,
  b: 63567722e-1,
  ellipseName: "New International 1967"
};
N.plessis = {
  a: 6376523,
  rf: 6355863,
  ellipseName: "Plessis 1817 (France)"
};
N.krass = {
  a: 6378245,
  rf: 298.3,
  ellipseName: "Krassovsky, 1942"
};
N.SEasia = {
  a: 6378155,
  b: 63567733205e-4,
  ellipseName: "Southeast Asia"
};
N.walbeck = {
  a: 6376896,
  b: 63558348467e-4,
  ellipseName: "Walbeck"
};
N.WGS60 = {
  a: 6378165,
  rf: 298.3,
  ellipseName: "WGS 60"
};
N.WGS66 = {
  a: 6378145,
  rf: 298.25,
  ellipseName: "WGS 66"
};
N.WGS7 = {
  a: 6378135,
  rf: 298.26,
  ellipseName: "WGS 72"
};
var Os = N.WGS84 = {
  a: 6378137,
  rf: 298.257223563,
  ellipseName: "WGS 84"
};
N.sphere = {
  a: 6370997,
  b: 6370997,
  ellipseName: "Normal Sphere (r=6370997)"
};
function Rs(t, a, s, h) {
  var i = t * t, e = a * a, n = (i - e) / i, r = 0;
  h ? (t *= 1 - n * (Za + n * (Ya + n * ts)), i = t * t, n = 0) : r = Math.sqrt(n);
  var o = (i - e) / e;
  return {
    es: n,
    e: r,
    ep2: o
  };
}
function qs(t, a, s, h, i) {
  if (!t) {
    var e = V(N, h);
    e || (e = Os), t = e.a, a = e.b, s = e.rf;
  }
  return s && !a && (a = (1 - 1 / s) * t), (s === 0 || Math.abs(t - a) < _) && (i = !0, a = t), {
    a: t,
    b: a,
    rf: s,
    sphere: i
  };
}
var T = {};
T.wgs84 = {
  towgs84: "0,0,0",
  ellipse: "WGS84",
  datumName: "WGS84"
};
T.ch1903 = {
  towgs84: "674.374,15.056,405.346",
  ellipse: "bessel",
  datumName: "swiss"
};
T.ggrs87 = {
  towgs84: "-199.87,74.79,246.62",
  ellipse: "GRS80",
  datumName: "Greek_Geodetic_Reference_System_1987"
};
T.nad83 = {
  towgs84: "0,0,0",
  ellipse: "GRS80",
  datumName: "North_American_Datum_1983"
};
T.nad27 = {
  nadgrids: "@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",
  ellipse: "clrk66",
  datumName: "North_American_Datum_1927"
};
T.potsdam = {
  towgs84: "598.1,73.7,418.2,0.202,0.045,-2.455,6.7",
  ellipse: "bessel",
  datumName: "Potsdam Rauenberg 1950 DHDN"
};
T.carthage = {
  towgs84: "-263.0,6.0,431.0",
  ellipse: "clark80",
  datumName: "Carthage 1934 Tunisia"
};
T.hermannskogel = {
  towgs84: "577.326,90.129,463.919,5.137,1.474,5.297,2.4232",
  ellipse: "bessel",
  datumName: "Hermannskogel"
};
T.militargeographische_institut = {
  towgs84: "577.326,90.129,463.919,5.137,1.474,5.297,2.4232",
  ellipse: "bessel",
  datumName: "Militar-Geographische Institut"
};
T.osni52 = {
  towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",
  ellipse: "airy",
  datumName: "Irish National"
};
T.ire65 = {
  towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",
  ellipse: "mod_airy",
  datumName: "Ireland 1965"
};
T.rassadiran = {
  towgs84: "-133.63,-157.5,-158.62",
  ellipse: "intl",
  datumName: "Rassadiran"
};
T.nzgd49 = {
  towgs84: "59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",
  ellipse: "intl",
  datumName: "New Zealand Geodetic Datum 1949"
};
T.osgb36 = {
  towgs84: "446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",
  ellipse: "airy",
  datumName: "Airy 1830"
};
T.s_jtsk = {
  towgs84: "589,76,480",
  ellipse: "bessel",
  datumName: "S-JTSK (Ferro)"
};
T.beduaram = {
  towgs84: "-106,-87,188",
  ellipse: "clrk80",
  datumName: "Beduaram"
};
T.gunung_segara = {
  towgs84: "-403,684,41",
  ellipse: "bessel",
  datumName: "Gunung Segara Jakarta"
};
T.rnb72 = {
  towgs84: "106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",
  ellipse: "intl",
  datumName: "Reseau National Belge 1972"
};
function Ts(t, a, s, h, i, e, n) {
  var r = {};
  return t === void 0 || t === "none" ? r.datum_type = Kt : r.datum_type = Ja, a && (r.datum_params = a.map(parseFloat), (r.datum_params[0] !== 0 || r.datum_params[1] !== 0 || r.datum_params[2] !== 0) && (r.datum_type = st), r.datum_params.length > 3 && (r.datum_params[3] !== 0 || r.datum_params[4] !== 0 || r.datum_params[5] !== 0 || r.datum_params[6] !== 0) && (r.datum_type = it, r.datum_params[3] *= _t, r.datum_params[4] *= _t, r.datum_params[5] *= _t, r.datum_params[6] = r.datum_params[6] / 1e6 + 1)), n && (r.datum_type = lt, r.grids = n), r.a = s, r.b = h, r.es = i, r.ep2 = e, r;
}
var Ra = {};
function Ls(t, a) {
  var s = new DataView(a), h = zs(s), i = ks(s, h), e = Bs(s, i, h), n = { header: i, subgrids: e };
  return Ra[t] = n, n;
}
function Gs(t) {
  if (t === void 0)
    return null;
  var a = t.split(",");
  return a.map($s);
}
function $s(t) {
  if (t.length === 0)
    return null;
  var a = t[0] === "@";
  return a && (t = t.slice(1)), t === "null" ? { name: "null", mandatory: !a, grid: null, isNull: !0 } : {
    name: t,
    mandatory: !a,
    grid: Ra[t] || null,
    isNull: !1
  };
}
function rt(t) {
  return t / 3600 * Math.PI / 180;
}
function zs(t) {
  var a = t.getInt32(8, !1);
  return a === 11 ? !1 : (a = t.getInt32(8, !0), a !== 11 && console.warn("Failed to detect nadgrid endian-ness, defaulting to little-endian"), !0);
}
function ks(t, a) {
  return {
    nFields: t.getInt32(8, a),
    nSubgridFields: t.getInt32(24, a),
    nSubgrids: t.getInt32(40, a),
    shiftType: Vt(t, 56, 64).trim(),
    fromSemiMajorAxis: t.getFloat64(120, a),
    fromSemiMinorAxis: t.getFloat64(136, a),
    toSemiMajorAxis: t.getFloat64(152, a),
    toSemiMinorAxis: t.getFloat64(168, a)
  };
}
function Vt(t, a, s) {
  return String.fromCharCode.apply(null, new Uint8Array(t.buffer.slice(a, s)));
}
function Bs(t, a, s) {
  for (var h = 176, i = [], e = 0; e < a.nSubgrids; e++) {
    var n = ps(t, h, s), r = Us(t, h, n, s), o = Math.round(
      1 + (n.upperLongitude - n.lowerLongitude) / n.longitudeInterval
    ), l = Math.round(
      1 + (n.upperLatitude - n.lowerLatitude) / n.latitudeInterval
    );
    i.push({
      ll: [rt(n.lowerLongitude), rt(n.lowerLatitude)],
      del: [rt(n.longitudeInterval), rt(n.latitudeInterval)],
      lim: [o, l],
      count: n.gridNodeCount,
      cvs: Ds(r)
    }), h += 176 + n.gridNodeCount * 16;
  }
  return i;
}
function Ds(t) {
  return t.map(function(a) {
    return [rt(a.longitudeShift), rt(a.latitudeShift)];
  });
}
function ps(t, a, s) {
  return {
    name: Vt(t, a + 8, a + 16).trim(),
    parent: Vt(t, a + 24, a + 24 + 8).trim(),
    lowerLatitude: t.getFloat64(a + 72, s),
    upperLatitude: t.getFloat64(a + 88, s),
    lowerLongitude: t.getFloat64(a + 104, s),
    upperLongitude: t.getFloat64(a + 120, s),
    latitudeInterval: t.getFloat64(a + 136, s),
    longitudeInterval: t.getFloat64(a + 152, s),
    gridNodeCount: t.getInt32(a + 168, s)
  };
}
function Us(t, a, s, h) {
  for (var i = a + 176, e = 16, n = [], r = 0; r < s.gridNodeCount; r++) {
    var o = {
      latitudeShift: t.getFloat32(i + r * e, h),
      longitudeShift: t.getFloat32(i + r * e + 4, h),
      latitudeAccuracy: t.getFloat32(i + r * e + 8, h),
      longitudeAccuracy: t.getFloat32(i + r * e + 12, h)
    };
    n.push(o);
  }
  return n;
}
function X(t, a) {
  if (!(this instanceof X))
    return new X(t);
  a = a || function(l) {
    if (l)
      throw l;
  };
  var s = ys(t);
  if (typeof s != "object") {
    a("Could not parse to valid json: " + t);
    return;
  }
  var h = X.projections.get(s.projName);
  if (!h) {
    a("Could not get projection name from: " + t);
    return;
  }
  if (s.datumCode && s.datumCode !== "none") {
    var i = V(T, s.datumCode);
    i && (s.datum_params = s.datum_params || (i.towgs84 ? i.towgs84.split(",") : null), s.ellps = i.ellipse, s.datumName = i.datumName ? i.datumName : s.datumCode);
  }
  s.k0 = s.k0 || 1, s.axis = s.axis || "enu", s.ellps = s.ellps || "wgs84", s.lat1 = s.lat1 || s.lat0;
  var e = qs(s.a, s.b, s.rf, s.ellps, s.sphere), n = Rs(e.a, e.b, e.rf, s.R_A), r = Gs(s.nadgrids), o = s.datum || Ts(
    s.datumCode,
    s.datum_params,
    e.a,
    e.b,
    n.es,
    n.ep2,
    r
  );
  ua(this, s), ua(this, h), this.a = e.a, this.b = e.b, this.rf = e.rf, this.sphere = e.sphere, this.es = n.es, this.e = n.e, this.ep2 = n.ep2, this.datum = o, this.init(), a(null, this);
}
X.projections = Is;
X.projections.start();
function Fs(t, a) {
  return t.datum_type !== a.datum_type || t.a !== a.a || Math.abs(t.es - a.es) > 5e-11 ? !1 : t.datum_type === st ? t.datum_params[0] === a.datum_params[0] && t.datum_params[1] === a.datum_params[1] && t.datum_params[2] === a.datum_params[2] : t.datum_type === it ? t.datum_params[0] === a.datum_params[0] && t.datum_params[1] === a.datum_params[1] && t.datum_params[2] === a.datum_params[2] && t.datum_params[3] === a.datum_params[3] && t.datum_params[4] === a.datum_params[4] && t.datum_params[5] === a.datum_params[5] && t.datum_params[6] === a.datum_params[6] : !0;
}
function qa(t, a, s) {
  var h = t.x, i = t.y, e = t.z ? t.z : 0, n, r, o, l;
  if (i < -d && i > -1.001 * d)
    i = -d;
  else if (i > d && i < 1.001 * d)
    i = d;
  else {
    if (i < -d)
      return { x: -1 / 0, y: -1 / 0, z: t.z };
    if (i > d)
      return { x: 1 / 0, y: 1 / 0, z: t.z };
  }
  return h > Math.PI && (h -= 2 * Math.PI), r = Math.sin(i), l = Math.cos(i), o = r * r, n = s / Math.sqrt(1 - a * o), {
    x: (n + e) * l * Math.cos(h),
    y: (n + e) * l * Math.sin(h),
    z: (n * (1 - a) + e) * r
  };
}
function Ta(t, a, s, h) {
  var i = 1e-12, e = i * i, n = 30, r, o, l, u, f, c, v, M, m, y, x, b, E, P = t.x, A = t.y, C = t.z ? t.z : 0, G, O, j;
  if (r = Math.sqrt(P * P + A * A), o = Math.sqrt(P * P + A * A + C * C), r / s < i) {
    if (G = 0, o / s < i)
      return O = d, j = -h, {
        x: t.x,
        y: t.y,
        z: t.z
      };
  } else
    G = Math.atan2(A, P);
  l = C / o, u = r / o, f = 1 / Math.sqrt(1 - a * (2 - a) * u * u), M = u * (1 - a) * f, m = l * f, E = 0;
  do
    E++, v = s / Math.sqrt(1 - a * m * m), j = r * M + C * m - v * (1 - a * m * m), c = a * v / (v + j), f = 1 / Math.sqrt(1 - c * (2 - c) * u * u), y = u * (1 - c) * f, x = l * f, b = x * M - y * m, M = y, m = x;
  while (b * b > e && E < n);
  return O = Math.atan(x / Math.abs(y)), {
    x: G,
    y: O,
    z: j
  };
}
function js(t, a, s) {
  if (a === st)
    return {
      x: t.x + s[0],
      y: t.y + s[1],
      z: t.z + s[2]
    };
  if (a === it) {
    var h = s[0], i = s[1], e = s[2], n = s[3], r = s[4], o = s[5], l = s[6];
    return {
      x: l * (t.x - o * t.y + r * t.z) + h,
      y: l * (o * t.x + t.y - n * t.z) + i,
      z: l * (-r * t.x + n * t.y + t.z) + e
    };
  }
}
function Qs(t, a, s) {
  if (a === st)
    return {
      x: t.x - s[0],
      y: t.y - s[1],
      z: t.z - s[2]
    };
  if (a === it) {
    var h = s[0], i = s[1], e = s[2], n = s[3], r = s[4], o = s[5], l = s[6], u = (t.x - h) / l, f = (t.y - i) / l, c = (t.z - e) / l;
    return {
      x: u + o * f - r * c,
      y: -o * u + f + n * c,
      z: r * u - n * f + c
    };
  }
}
function Tt(t) {
  return t === st || t === it;
}
function Ws(t, a, s) {
  if (Fs(t, a) || t.datum_type === Kt || a.datum_type === Kt)
    return s;
  var h = t.a, i = t.es;
  if (t.datum_type === lt) {
    var e = Ma(t, !1, s);
    if (e !== 0)
      return;
    h = na, i = oa;
  }
  var n = a.a, r = a.b, o = a.es;
  if (a.datum_type === lt && (n = na, r = Va, o = oa), i === o && h === n && !Tt(t.datum_type) && !Tt(a.datum_type))
    return s;
  if (s = qa(s, i, h), Tt(t.datum_type) && (s = js(s, t.datum_type, t.datum_params)), Tt(a.datum_type) && (s = Qs(s, a.datum_type, a.datum_params)), s = Ta(s, o, n, r), a.datum_type === lt) {
    var l = Ma(a, !0, s);
    if (l !== 0)
      return;
  }
  return s;
}
function Ma(t, a, s) {
  if (t.grids === null || t.grids.length === 0)
    return console.log("Grid shift grids not found"), -1;
  var h = { x: -s.x, y: s.y }, i = { x: Number.NaN, y: Number.NaN }, e = [];
  t:
    for (var n = 0; n < t.grids.length; n++) {
      var r = t.grids[n];
      if (e.push(r.name), r.isNull) {
        i = h;
        break;
      }
      if (r.mandatory, r.grid === null) {
        if (r.mandatory)
          return console.log("Unable to find mandatory grid '" + r.name + "'"), -1;
        continue;
      }
      for (var o = r.grid.subgrids, l = 0, u = o.length; l < u; l++) {
        var f = o[l], c = (Math.abs(f.del[1]) + Math.abs(f.del[0])) / 1e4, v = f.ll[0] - c, M = f.ll[1] - c, m = f.ll[0] + (f.lim[0] - 1) * f.del[0] + c, y = f.ll[1] + (f.lim[1] - 1) * f.del[1] + c;
        if (!(M > h.y || v > h.x || y < h.y || m < h.x) && (i = Xs(h, a, f), !isNaN(i.x)))
          break t;
      }
    }
  return isNaN(i.x) ? (console.log("Failed to find a grid shift table for location '" + -h.x * W + " " + h.y * W + " tried: '" + e + "'"), -1) : (s.x = -i.x, s.y = i.y, 0);
}
function Xs(t, a, s) {
  var h = { x: Number.NaN, y: Number.NaN };
  if (isNaN(t.x))
    return h;
  var i = { x: t.x, y: t.y };
  i.x -= s.ll[0], i.y -= s.ll[1], i.x = g(i.x - Math.PI) + Math.PI;
  var e = va(i, s);
  if (a) {
    if (isNaN(e.x))
      return h;
    e.x = i.x - e.x, e.y = i.y - e.y;
    var n = 9, r = 1e-12, o, l;
    do {
      if (l = va(e, s), isNaN(l.x)) {
        console.log("Inverse grid shift iteration failed, presumably at grid edge.  Using first approximation.");
        break;
      }
      o = { x: i.x - (l.x + e.x), y: i.y - (l.y + e.y) }, e.x += o.x, e.y += o.y;
    } while (n-- && Math.abs(o.x) > r && Math.abs(o.y) > r);
    if (n < 0)
      return console.log("Inverse grid shift iterator failed to converge."), h;
    h.x = g(e.x + s.ll[0]), h.y = e.y + s.ll[1];
  } else
    isNaN(e.x) || (h.x = t.x + e.x, h.y = t.y + e.y);
  return h;
}
function va(t, a) {
  var s = { x: t.x / a.del[0], y: t.y / a.del[1] }, h = { x: Math.floor(s.x), y: Math.floor(s.y) }, i = { x: s.x - 1 * h.x, y: s.y - 1 * h.y }, e = { x: Number.NaN, y: Number.NaN }, n;
  if (h.x < 0 || h.x >= a.lim[0] || h.y < 0 || h.y >= a.lim[1])
    return e;
  n = h.y * a.lim[0] + h.x;
  var r = { x: a.cvs[n][0], y: a.cvs[n][1] };
  n++;
  var o = { x: a.cvs[n][0], y: a.cvs[n][1] };
  n += a.lim[0];
  var l = { x: a.cvs[n][0], y: a.cvs[n][1] };
  n--;
  var u = { x: a.cvs[n][0], y: a.cvs[n][1] }, f = i.x * i.y, c = i.x * (1 - i.y), v = (1 - i.x) * (1 - i.y), M = (1 - i.x) * i.y;
  return e.x = v * r.x + c * o.x + M * u.x + f * l.x, e.y = v * r.y + c * o.y + M * u.y + f * l.y, e;
}
function da(t, a, s) {
  var h = s.x, i = s.y, e = s.z || 0, n, r, o, l = {};
  for (o = 0; o < 3; o++)
    if (!(a && o === 2 && s.z === void 0))
      switch (o === 0 ? (n = h, "ew".indexOf(t.axis[o]) !== -1 ? r = "x" : r = "y") : o === 1 ? (n = i, "ns".indexOf(t.axis[o]) !== -1 ? r = "y" : r = "x") : (n = e, r = "z"), t.axis[o]) {
        case "e":
          l[r] = n;
          break;
        case "w":
          l[r] = -n;
          break;
        case "n":
          l[r] = n;
          break;
        case "s":
          l[r] = -n;
          break;
        case "u":
          s[r] !== void 0 && (l.z = n);
          break;
        case "d":
          s[r] !== void 0 && (l.z = -n);
          break;
        default:
          return null;
      }
  return l;
}
function La(t) {
  var a = {
    x: t[0],
    y: t[1]
  };
  return t.length > 2 && (a.z = t[2]), t.length > 3 && (a.m = t[3]), a;
}
function Hs(t) {
  ma(t.x), ma(t.y);
}
function ma(t) {
  if (typeof Number.isFinite == "function") {
    if (Number.isFinite(t))
      return;
    throw new TypeError("coordinates must be finite numbers");
  }
  if (typeof t != "number" || t !== t || !isFinite(t))
    throw new TypeError("coordinates must be finite numbers");
}
function Ks(t, a) {
  return (t.datum.datum_type === st || t.datum.datum_type === it || t.datum.datum_type === lt) && a.datumCode !== "WGS84" || (a.datum.datum_type === st || a.datum.datum_type === it || a.datum.datum_type === lt) && t.datumCode !== "WGS84";
}
function Dt(t, a, s, h) {
  var i;
  Array.isArray(s) ? s = La(s) : s = {
    x: s.x,
    y: s.y,
    z: s.z,
    m: s.m
  };
  var e = s.z !== void 0;
  if (Hs(s), t.datum && a.datum && Ks(t, a) && (i = new X("WGS84"), s = Dt(t, i, s, h), t = i), h && t.axis !== "enu" && (s = da(t, !1, s)), t.projName === "longlat")
    s = {
      x: s.x * L,
      y: s.y * L,
      z: s.z || 0
    };
  else if (t.to_meter && (s = {
    x: s.x * t.to_meter,
    y: s.y * t.to_meter,
    z: s.z || 0
  }), s = t.inverse(s), !s)
    return;
  if (t.from_greenwich && (s.x += t.from_greenwich), s = Ws(t.datum, a.datum, s), !!s)
    return a.from_greenwich && (s = {
      x: s.x - a.from_greenwich,
      y: s.y,
      z: s.z || 0
    }), a.projName === "longlat" ? s = {
      x: s.x * W,
      y: s.y * W,
      z: s.z || 0
    } : (s = a.forward(s), a.to_meter && (s = {
      x: s.x / a.to_meter,
      y: s.y / a.to_meter,
      z: s.z || 0
    })), h && a.axis !== "enu" ? da(a, !0, s) : (s && !e && delete s.z, s);
}
var ya = X("WGS84");
function Xt(t, a, s, h) {
  var i, e, n;
  return Array.isArray(s) ? (i = Dt(t, a, s, h) || { x: NaN, y: NaN }, s.length > 2 ? typeof t.name < "u" && t.name === "geocent" || typeof a.name < "u" && a.name === "geocent" ? typeof i.z == "number" ? [i.x, i.y, i.z].concat(s.splice(3)) : [i.x, i.y, s[2]].concat(s.splice(3)) : [i.x, i.y].concat(s.splice(2)) : [i.x, i.y]) : (e = Dt(t, a, s, h), n = Object.keys(s), n.length === 2 || n.forEach(function(r) {
    if (typeof t.name < "u" && t.name === "geocent" || typeof a.name < "u" && a.name === "geocent") {
      if (r === "x" || r === "y" || r === "z")
        return;
    } else if (r === "x" || r === "y")
      return;
    e[r] = s[r];
  }), e);
}
function _a(t) {
  return t instanceof X ? t : t.oProj ? t.oProj : X(t);
}
function q(t, a, s) {
  t = _a(t);
  var h = !1, i;
  return typeof a > "u" ? (a = t, t = ya, h = !0) : (typeof a.x < "u" || Array.isArray(a)) && (s = a, a = t, t = ya, h = !0), a = _a(a), s ? Xt(t, a, s) : (i = {
    forward: function(e, n) {
      return Xt(t, a, e, n);
    },
    inverse: function(e, n) {
      return Xt(a, t, e, n);
    }
  }, h && (i.oProj = a), i);
}
var ga = 6, Ga = "AJSAJS", $a = "AFAFAF", nt = 65, B = 73, U = 79, dt = 86, mt = 90;
const Js = {
  forward: za,
  inverse: Vs,
  toPoint: ka
};
function za(t, a) {
  return a = a || 5, ti(Zs({
    lat: t[1],
    lon: t[0]
  }), a);
}
function Vs(t) {
  var a = ta(Da(t.toUpperCase()));
  return a.lat && a.lon ? [a.lon, a.lat, a.lon, a.lat] : [a.left, a.bottom, a.right, a.top];
}
function ka(t) {
  var a = ta(Da(t.toUpperCase()));
  return a.lat && a.lon ? [a.lon, a.lat] : [(a.left + a.right) / 2, (a.top + a.bottom) / 2];
}
function Ht(t) {
  return t * (Math.PI / 180);
}
function xa(t) {
  return 180 * (t / Math.PI);
}
function Zs(t) {
  var a = t.lat, s = t.lon, h = 6378137, i = 669438e-8, e = 0.9996, n, r, o, l, u, f, c, v = Ht(a), M = Ht(s), m, y;
  y = Math.floor((s + 180) / 6) + 1, s === 180 && (y = 60), a >= 56 && a < 64 && s >= 3 && s < 12 && (y = 32), a >= 72 && a < 84 && (s >= 0 && s < 9 ? y = 31 : s >= 9 && s < 21 ? y = 33 : s >= 21 && s < 33 ? y = 35 : s >= 33 && s < 42 && (y = 37)), n = (y - 1) * 6 - 180 + 3, m = Ht(n), r = i / (1 - i), o = h / Math.sqrt(1 - i * Math.sin(v) * Math.sin(v)), l = Math.tan(v) * Math.tan(v), u = r * Math.cos(v) * Math.cos(v), f = Math.cos(v) * (M - m), c = h * ((1 - i / 4 - 3 * i * i / 64 - 5 * i * i * i / 256) * v - (3 * i / 8 + 3 * i * i / 32 + 45 * i * i * i / 1024) * Math.sin(2 * v) + (15 * i * i / 256 + 45 * i * i * i / 1024) * Math.sin(4 * v) - 35 * i * i * i / 3072 * Math.sin(6 * v));
  var x = e * o * (f + (1 - l + u) * f * f * f / 6 + (5 - 18 * l + l * l + 72 * u - 58 * r) * f * f * f * f * f / 120) + 5e5, b = e * (c + o * Math.tan(v) * (f * f / 2 + (5 - l + 9 * u + 4 * u * u) * f * f * f * f / 24 + (61 - 58 * l + l * l + 600 * u - 330 * r) * f * f * f * f * f * f / 720));
  return a < 0 && (b += 1e7), {
    northing: Math.round(b),
    easting: Math.round(x),
    zoneNumber: y,
    zoneLetter: Ys(a)
  };
}
function ta(t) {
  var a = t.northing, s = t.easting, h = t.zoneLetter, i = t.zoneNumber;
  if (i < 0 || i > 60)
    return null;
  var e = 0.9996, n = 6378137, r = 669438e-8, o, l = (1 - Math.sqrt(1 - r)) / (1 + Math.sqrt(1 - r)), u, f, c, v, M, m, y, x, b, E = s - 5e5, P = a;
  h < "N" && (P -= 1e7), y = (i - 1) * 6 - 180 + 3, o = r / (1 - r), m = P / e, x = m / (n * (1 - r / 4 - 3 * r * r / 64 - 5 * r * r * r / 256)), b = x + (3 * l / 2 - 27 * l * l * l / 32) * Math.sin(2 * x) + (21 * l * l / 16 - 55 * l * l * l * l / 32) * Math.sin(4 * x) + 151 * l * l * l / 96 * Math.sin(6 * x), u = n / Math.sqrt(1 - r * Math.sin(b) * Math.sin(b)), f = Math.tan(b) * Math.tan(b), c = o * Math.cos(b) * Math.cos(b), v = n * (1 - r) / Math.pow(1 - r * Math.sin(b) * Math.sin(b), 1.5), M = E / (u * e);
  var A = b - u * Math.tan(b) / v * (M * M / 2 - (5 + 3 * f + 10 * c - 4 * c * c - 9 * o) * M * M * M * M / 24 + (61 + 90 * f + 298 * c + 45 * f * f - 252 * o - 3 * c * c) * M * M * M * M * M * M / 720);
  A = xa(A);
  var C = (M - (1 + 2 * f + c) * M * M * M / 6 + (5 - 2 * c + 28 * f - 3 * c * c + 8 * o + 24 * f * f) * M * M * M * M * M / 120) / Math.cos(b);
  C = y + xa(C);
  var G;
  if (t.accuracy) {
    var O = ta({
      northing: t.northing + t.accuracy,
      easting: t.easting + t.accuracy,
      zoneLetter: t.zoneLetter,
      zoneNumber: t.zoneNumber
    });
    G = {
      top: O.lat,
      right: O.lon,
      bottom: A,
      left: C
    };
  } else
    G = {
      lat: A,
      lon: C
    };
  return G;
}
function Ys(t) {
  var a = "Z";
  return 84 >= t && t >= 72 ? a = "X" : 72 > t && t >= 64 ? a = "W" : 64 > t && t >= 56 ? a = "V" : 56 > t && t >= 48 ? a = "U" : 48 > t && t >= 40 ? a = "T" : 40 > t && t >= 32 ? a = "S" : 32 > t && t >= 24 ? a = "R" : 24 > t && t >= 16 ? a = "Q" : 16 > t && t >= 8 ? a = "P" : 8 > t && t >= 0 ? a = "N" : 0 > t && t >= -8 ? a = "M" : -8 > t && t >= -16 ? a = "L" : -16 > t && t >= -24 ? a = "K" : -24 > t && t >= -32 ? a = "J" : -32 > t && t >= -40 ? a = "H" : -40 > t && t >= -48 ? a = "G" : -48 > t && t >= -56 ? a = "F" : -56 > t && t >= -64 ? a = "E" : -64 > t && t >= -72 ? a = "D" : -72 > t && t >= -80 && (a = "C"), a;
}
function ti(t, a) {
  var s = "00000" + t.easting, h = "00000" + t.northing;
  return t.zoneNumber + t.zoneLetter + ai(t.easting, t.northing, t.zoneNumber) + s.substr(s.length - 5, a) + h.substr(h.length - 5, a);
}
function ai(t, a, s) {
  var h = Ba(s), i = Math.floor(t / 1e5), e = Math.floor(a / 1e5) % 20;
  return si(i, e, h);
}
function Ba(t) {
  var a = t % ga;
  return a === 0 && (a = ga), a;
}
function si(t, a, s) {
  var h = s - 1, i = Ga.charCodeAt(h), e = $a.charCodeAt(h), n = i + t - 1, r = e + a, o = !1;
  n > mt && (n = n - mt + nt - 1, o = !0), (n === B || i < B && n > B || (n > B || i < B) && o) && n++, (n === U || i < U && n > U || (n > U || i < U) && o) && (n++, n === B && n++), n > mt && (n = n - mt + nt - 1), r > dt ? (r = r - dt + nt - 1, o = !0) : o = !1, (r === B || e < B && r > B || (r > B || e < B) && o) && r++, (r === U || e < U && r > U || (r > U || e < U) && o) && (r++, r === B && r++), r > dt && (r = r - dt + nt - 1);
  var l = String.fromCharCode(n) + String.fromCharCode(r);
  return l;
}
function Da(t) {
  if (t && t.length === 0)
    throw "MGRSPoint coverting from nothing";
  for (var a = t.length, s = null, h = "", i, e = 0; !/[A-Z]/.test(i = t.charAt(e)); ) {
    if (e >= 2)
      throw "MGRSPoint bad conversion from: " + t;
    h += i, e++;
  }
  var n = parseInt(h, 10);
  if (e === 0 || e + 3 > a)
    throw "MGRSPoint bad conversion from: " + t;
  var r = t.charAt(e++);
  if (r <= "A" || r === "B" || r === "Y" || r >= "Z" || r === "I" || r === "O")
    throw "MGRSPoint zone letter " + r + " not handled: " + t;
  s = t.substring(e, e += 2);
  for (var o = Ba(n), l = ii(s.charAt(0), o), u = hi(s.charAt(1), o); u < ei(r); )
    u += 2e6;
  var f = a - e;
  if (f % 2 !== 0)
    throw `MGRSPoint has to have an even number 
of digits after the zone letter and two 100km letters - front 
half for easting meters, second half for 
northing meters` + t;
  var c = f / 2, v = 0, M = 0, m, y, x, b, E;
  return c > 0 && (m = 1e5 / Math.pow(10, c), y = t.substring(e, e + c), v = parseFloat(y) * m, x = t.substring(e + c), M = parseFloat(x) * m), b = v + l, E = M + u, {
    easting: b,
    northing: E,
    zoneLetter: r,
    zoneNumber: n,
    accuracy: m
  };
}
function ii(t, a) {
  for (var s = Ga.charCodeAt(a - 1), h = 1e5, i = !1; s !== t.charCodeAt(0); ) {
    if (s++, s === B && s++, s === U && s++, s > mt) {
      if (i)
        throw "Bad character: " + t;
      s = nt, i = !0;
    }
    h += 1e5;
  }
  return h;
}
function hi(t, a) {
  if (t > "V")
    throw "MGRSPoint given invalid Northing " + t;
  for (var s = $a.charCodeAt(a - 1), h = 0, i = !1; s !== t.charCodeAt(0); ) {
    if (s++, s === B && s++, s === U && s++, s > dt) {
      if (i)
        throw "Bad character: " + t;
      s = nt, i = !0;
    }
    h += 1e5;
  }
  return h;
}
function ei(t) {
  var a;
  switch (t) {
    case "C":
      a = 11e5;
      break;
    case "D":
      a = 2e6;
      break;
    case "E":
      a = 28e5;
      break;
    case "F":
      a = 37e5;
      break;
    case "G":
      a = 46e5;
      break;
    case "H":
      a = 55e5;
      break;
    case "J":
      a = 64e5;
      break;
    case "K":
      a = 73e5;
      break;
    case "L":
      a = 82e5;
      break;
    case "M":
      a = 91e5;
      break;
    case "N":
      a = 0;
      break;
    case "P":
      a = 8e5;
      break;
    case "Q":
      a = 17e5;
      break;
    case "R":
      a = 26e5;
      break;
    case "S":
      a = 35e5;
      break;
    case "T":
      a = 44e5;
      break;
    case "U":
      a = 53e5;
      break;
    case "V":
      a = 62e5;
      break;
    case "W":
      a = 7e6;
      break;
    case "X":
      a = 79e5;
      break;
    default:
      a = -1;
  }
  if (a >= 0)
    return a;
  throw "Invalid zone letter: " + t;
}
function ut(t, a, s) {
  if (!(this instanceof ut))
    return new ut(t, a, s);
  if (Array.isArray(t))
    this.x = t[0], this.y = t[1], this.z = t[2] || 0;
  else if (typeof t == "object")
    this.x = t.x, this.y = t.y, this.z = t.z || 0;
  else if (typeof t == "string" && typeof a > "u") {
    var h = t.split(",");
    this.x = parseFloat(h[0], 10), this.y = parseFloat(h[1], 10), this.z = parseFloat(h[2], 10) || 0;
  } else
    this.x = t, this.y = a, this.z = s || 0;
  console.warn("proj4.Point will be removed in version 3, use proj4.toPoint");
}
ut.fromMGRS = function(t) {
  return new ut(ka(t));
};
ut.prototype.toMGRS = function(t) {
  return za([this.x, this.y], t);
};
var ri = 1, ni = 0.25, ba = 0.046875, Na = 0.01953125, Ea = 0.01068115234375, oi = 0.75, li = 0.46875, fi = 0.013020833333333334, ui = 0.007120768229166667, ci = 0.3645833333333333, Mi = 0.005696614583333333, vi = 0.3076171875;
function aa(t) {
  var a = [];
  a[0] = ri - t * (ni + t * (ba + t * (Na + t * Ea))), a[1] = t * (oi - t * (ba + t * (Na + t * Ea)));
  var s = t * t;
  return a[2] = s * (li - t * (fi + t * ui)), s *= t, a[3] = s * (ci - t * Mi), a[4] = s * t * vi, a;
}
function Mt(t, a, s, h) {
  return s *= a, a *= a, h[0] * t - s * (h[1] + a * (h[2] + a * (h[3] + a * h[4])));
}
var di = 20;
function sa(t, a, s) {
  for (var h = 1 / (1 - a), i = t, e = di; e; --e) {
    var n = Math.sin(i), r = 1 - a * n * n;
    if (r = (Mt(i, n, Math.cos(i), s) - t) * (r * Math.sqrt(r)) * h, i -= r, Math.abs(r) < _)
      return i;
  }
  return i;
}
function mi() {
  this.x0 = this.x0 !== void 0 ? this.x0 : 0, this.y0 = this.y0 !== void 0 ? this.y0 : 0, this.long0 = this.long0 !== void 0 ? this.long0 : 0, this.lat0 = this.lat0 !== void 0 ? this.lat0 : 0, this.es && (this.en = aa(this.es), this.ml0 = Mt(this.lat0, Math.sin(this.lat0), Math.cos(this.lat0), this.en));
}
function yi(t) {
  var a = t.x, s = t.y, h = g(a - this.long0), i, e, n, r = Math.sin(s), o = Math.cos(s);
  if (this.es) {
    var u = o * h, f = Math.pow(u, 2), c = this.ep2 * Math.pow(o, 2), v = Math.pow(c, 2), M = Math.abs(o) > _ ? Math.tan(s) : 0, m = Math.pow(M, 2), y = Math.pow(m, 2);
    i = 1 - this.es * Math.pow(r, 2), u = u / Math.sqrt(i);
    var x = Mt(s, r, o, this.en);
    e = this.a * (this.k0 * u * (1 + f / 6 * (1 - m + c + f / 20 * (5 - 18 * m + y + 14 * c - 58 * m * c + f / 42 * (61 + 179 * y - y * m - 479 * m))))) + this.x0, n = this.a * (this.k0 * (x - this.ml0 + r * h * u / 2 * (1 + f / 12 * (5 - m + 9 * c + 4 * v + f / 30 * (61 + y - 58 * m + 270 * c - 330 * m * c + f / 56 * (1385 + 543 * y - y * m - 3111 * m)))))) + this.y0;
  } else {
    var l = o * Math.sin(h);
    if (Math.abs(Math.abs(l) - 1) < _)
      return 93;
    if (e = 0.5 * this.a * this.k0 * Math.log((1 + l) / (1 - l)) + this.x0, n = o * Math.cos(h) / Math.sqrt(1 - Math.pow(l, 2)), l = Math.abs(n), l >= 1) {
      if (l - 1 > _)
        return 93;
      n = 0;
    } else
      n = Math.acos(n);
    s < 0 && (n = -n), n = this.a * this.k0 * (n - this.lat0) + this.y0;
  }
  return t.x = e, t.y = n, t;
}
function _i(t) {
  var a, s, h, i, e = (t.x - this.x0) * (1 / this.a), n = (t.y - this.y0) * (1 / this.a);
  if (this.es)
    if (a = this.ml0 + n / this.k0, s = sa(a, this.es, this.en), Math.abs(s) < d) {
      var f = Math.sin(s), c = Math.cos(s), v = Math.abs(c) > _ ? Math.tan(s) : 0, M = this.ep2 * Math.pow(c, 2), m = Math.pow(M, 2), y = Math.pow(v, 2), x = Math.pow(y, 2);
      a = 1 - this.es * Math.pow(f, 2);
      var b = e * Math.sqrt(a) / this.k0, E = Math.pow(b, 2);
      a = a * v, h = s - a * E / (1 - this.es) * 0.5 * (1 - E / 12 * (5 + 3 * y - 9 * M * y + M - 4 * m - E / 30 * (61 + 90 * y - 252 * M * y + 45 * x + 46 * M - E / 56 * (1385 + 3633 * y + 4095 * x + 1574 * x * y)))), i = g(this.long0 + b * (1 - E / 6 * (1 + 2 * y + M - E / 20 * (5 + 28 * y + 24 * x + 8 * M * y + 6 * M - E / 42 * (61 + 662 * y + 1320 * x + 720 * x * y)))) / c);
    } else
      h = d * wt(n), i = 0;
  else {
    var r = Math.exp(e / this.k0), o = 0.5 * (r - 1 / r), l = this.lat0 + n / this.k0, u = Math.cos(l);
    a = Math.sqrt((1 - Math.pow(u, 2)) / (1 + Math.pow(o, 2))), h = Math.asin(a), n < 0 && (h = -h), o === 0 && u === 0 ? i = 0 : i = g(Math.atan2(o, u) + this.long0);
  }
  return t.x = i, t.y = h, t;
}
var gi = ["Fast_Transverse_Mercator", "Fast Transverse Mercator"];
const $t = {
  init: mi,
  forward: yi,
  inverse: _i,
  names: gi
};
function pa(t) {
  var a = Math.exp(t);
  return a = (a - 1 / a) / 2, a;
}
function D(t, a) {
  t = Math.abs(t), a = Math.abs(a);
  var s = Math.max(t, a), h = Math.min(t, a) / (s || 1);
  return s * Math.sqrt(1 + Math.pow(h, 2));
}
function xi(t) {
  var a = 1 + t, s = a - 1;
  return s === 0 ? t : t * Math.log(a) / s;
}
function bi(t) {
  var a = Math.abs(t);
  return a = xi(a * (1 + a / (D(1, a) + 1))), t < 0 ? -a : a;
}
function ia(t, a) {
  for (var s = 2 * Math.cos(2 * a), h = t.length - 1, i = t[h], e = 0, n; --h >= 0; )
    n = -e + s * i + t[h], e = i, i = n;
  return a + n * Math.sin(2 * a);
}
function Ni(t, a) {
  for (var s = 2 * Math.cos(a), h = t.length - 1, i = t[h], e = 0, n; --h >= 0; )
    n = -e + s * i + t[h], e = i, i = n;
  return Math.sin(a) * n;
}
function Ei(t) {
  var a = Math.exp(t);
  return a = (a + 1 / a) / 2, a;
}
function Ua(t, a, s) {
  for (var h = Math.sin(a), i = Math.cos(a), e = pa(s), n = Ei(s), r = 2 * i * n, o = -2 * h * e, l = t.length - 1, u = t[l], f = 0, c = 0, v = 0, M, m; --l >= 0; )
    M = c, m = f, c = u, f = v, u = -M + r * c - o * f + t[l], v = -m + o * c + r * f;
  return r = h * n, o = i * e, [r * u - o * v, r * v + o * u];
}
function Ai() {
  if (!this.approx && (isNaN(this.es) || this.es <= 0))
    throw new Error('Incorrect elliptical usage. Try using the +approx option in the proj string, or PROJECTION["Fast_Transverse_Mercator"] in the WKT.');
  this.approx && ($t.init.apply(this), this.forward = $t.forward, this.inverse = $t.inverse), this.x0 = this.x0 !== void 0 ? this.x0 : 0, this.y0 = this.y0 !== void 0 ? this.y0 : 0, this.long0 = this.long0 !== void 0 ? this.long0 : 0, this.lat0 = this.lat0 !== void 0 ? this.lat0 : 0, this.cgb = [], this.cbg = [], this.utg = [], this.gtu = [];
  var t = this.es / (1 + Math.sqrt(1 - this.es)), a = t / (2 - t), s = a;
  this.cgb[0] = a * (2 + a * (-2 / 3 + a * (-2 + a * (116 / 45 + a * (26 / 45 + a * (-2854 / 675)))))), this.cbg[0] = a * (-2 + a * (2 / 3 + a * (4 / 3 + a * (-82 / 45 + a * (32 / 45 + a * (4642 / 4725)))))), s = s * a, this.cgb[1] = s * (7 / 3 + a * (-8 / 5 + a * (-227 / 45 + a * (2704 / 315 + a * (2323 / 945))))), this.cbg[1] = s * (5 / 3 + a * (-16 / 15 + a * (-13 / 9 + a * (904 / 315 + a * (-1522 / 945))))), s = s * a, this.cgb[2] = s * (56 / 15 + a * (-136 / 35 + a * (-1262 / 105 + a * (73814 / 2835)))), this.cbg[2] = s * (-26 / 15 + a * (34 / 21 + a * (8 / 5 + a * (-12686 / 2835)))), s = s * a, this.cgb[3] = s * (4279 / 630 + a * (-332 / 35 + a * (-399572 / 14175))), this.cbg[3] = s * (1237 / 630 + a * (-12 / 5 + a * (-24832 / 14175))), s = s * a, this.cgb[4] = s * (4174 / 315 + a * (-144838 / 6237)), this.cbg[4] = s * (-734 / 315 + a * (109598 / 31185)), s = s * a, this.cgb[5] = s * (601676 / 22275), this.cbg[5] = s * (444337 / 155925), s = Math.pow(a, 2), this.Qn = this.k0 / (1 + a) * (1 + s * (1 / 4 + s * (1 / 64 + s / 256))), this.utg[0] = a * (-0.5 + a * (2 / 3 + a * (-37 / 96 + a * (1 / 360 + a * (81 / 512 + a * (-96199 / 604800)))))), this.gtu[0] = a * (0.5 + a * (-2 / 3 + a * (5 / 16 + a * (41 / 180 + a * (-127 / 288 + a * (7891 / 37800)))))), this.utg[1] = s * (-1 / 48 + a * (-1 / 15 + a * (437 / 1440 + a * (-46 / 105 + a * (1118711 / 3870720))))), this.gtu[1] = s * (13 / 48 + a * (-3 / 5 + a * (557 / 1440 + a * (281 / 630 + a * (-1983433 / 1935360))))), s = s * a, this.utg[2] = s * (-17 / 480 + a * (37 / 840 + a * (209 / 4480 + a * (-5569 / 90720)))), this.gtu[2] = s * (61 / 240 + a * (-103 / 140 + a * (15061 / 26880 + a * (167603 / 181440)))), s = s * a, this.utg[3] = s * (-4397 / 161280 + a * (11 / 504 + a * (830251 / 7257600))), this.gtu[3] = s * (49561 / 161280 + a * (-179 / 168 + a * (6601661 / 7257600))), s = s * a, this.utg[4] = s * (-4583 / 161280 + a * (108847 / 3991680)), this.gtu[4] = s * (34729 / 80640 + a * (-3418889 / 1995840)), s = s * a, this.utg[5] = s * (-20648693 / 638668800), this.gtu[5] = s * (212378941 / 319334400);
  var h = ia(this.cbg, this.lat0);
  this.Zb = -this.Qn * (h + Ni(this.gtu, 2 * h));
}
function Ci(t) {
  var a = g(t.x - this.long0), s = t.y;
  s = ia(this.cbg, s);
  var h = Math.sin(s), i = Math.cos(s), e = Math.sin(a), n = Math.cos(a);
  s = Math.atan2(h, n * i), a = Math.atan2(e * i, D(h, i * n)), a = bi(Math.tan(a));
  var r = Ua(this.gtu, 2 * s, 2 * a);
  s = s + r[0], a = a + r[1];
  var o, l;
  return Math.abs(a) <= 2.623395162778 ? (o = this.a * (this.Qn * a) + this.x0, l = this.a * (this.Qn * s + this.Zb) + this.y0) : (o = 1 / 0, l = 1 / 0), t.x = o, t.y = l, t;
}
function Si(t) {
  var a = (t.x - this.x0) * (1 / this.a), s = (t.y - this.y0) * (1 / this.a);
  s = (s - this.Zb) / this.Qn, a = a / this.Qn;
  var h, i;
  if (Math.abs(a) <= 2.623395162778) {
    var e = Ua(this.utg, 2 * s, 2 * a);
    s = s + e[0], a = a + e[1], a = Math.atan(pa(a));
    var n = Math.sin(s), r = Math.cos(s), o = Math.sin(a), l = Math.cos(a);
    s = Math.atan2(n * l, D(o, l * r)), a = Math.atan2(o, l * r), h = g(a + this.long0), i = ia(this.cgb, s);
  } else
    h = 1 / 0, i = 1 / 0;
  return t.x = h, t.y = i, t;
}
var wi = ["Extended_Transverse_Mercator", "Extended Transverse Mercator", "etmerc", "Transverse_Mercator", "Transverse Mercator", "Gauss Kruger", "Gauss_Kruger", "tmerc"];
const zt = {
  init: Ai,
  forward: Ci,
  inverse: Si,
  names: wi
};
function Pi(t, a) {
  if (t === void 0) {
    if (t = Math.floor((g(a) + Math.PI) * 30 / Math.PI) + 1, t < 0)
      return 0;
    if (t > 60)
      return 60;
  }
  return t;
}
var Ii = "etmerc";
function Oi() {
  var t = Pi(this.zone, this.long0);
  if (t === void 0)
    throw new Error("unknown utm zone");
  this.lat0 = 0, this.long0 = (6 * Math.abs(t) - 183) * L, this.x0 = 5e5, this.y0 = this.utmSouth ? 1e7 : 0, this.k0 = 0.9996, zt.init.apply(this), this.forward = zt.forward, this.inverse = zt.inverse;
}
var Ri = ["Universal Transverse Mercator System", "utm"];
const qi = {
  init: Oi,
  names: Ri,
  dependsOn: Ii
};
function ha(t, a) {
  return Math.pow((1 - t) / (1 + t), a);
}
var Ti = 20;
function Li() {
  var t = Math.sin(this.lat0), a = Math.cos(this.lat0);
  a *= a, this.rc = Math.sqrt(1 - this.es) / (1 - this.es * t * t), this.C = Math.sqrt(1 + this.es * a * a / (1 - this.es)), this.phic0 = Math.asin(t / this.C), this.ratexp = 0.5 * this.C * this.e, this.K = Math.tan(0.5 * this.phic0 + S) / (Math.pow(Math.tan(0.5 * this.lat0 + S), this.C) * ha(this.e * t, this.ratexp));
}
function Gi(t) {
  var a = t.x, s = t.y;
  return t.y = 2 * Math.atan(this.K * Math.pow(Math.tan(0.5 * s + S), this.C) * ha(this.e * Math.sin(s), this.ratexp)) - d, t.x = this.C * a, t;
}
function $i(t) {
  for (var a = 1e-14, s = t.x / this.C, h = t.y, i = Math.pow(Math.tan(0.5 * h + S) / this.K, 1 / this.C), e = Ti; e > 0 && (h = 2 * Math.atan(i * ha(this.e * Math.sin(t.y), -0.5 * this.e)) - d, !(Math.abs(h - t.y) < a)); --e)
    t.y = h;
  return e ? (t.x = s, t.y = h, t) : null;
}
var zi = ["gauss"];
const ea = {
  init: Li,
  forward: Gi,
  inverse: $i,
  names: zi
};
function ki() {
  ea.init.apply(this), this.rc && (this.sinc0 = Math.sin(this.phic0), this.cosc0 = Math.cos(this.phic0), this.R2 = 2 * this.rc, this.title || (this.title = "Oblique Stereographic Alternative"));
}
function Bi(t) {
  var a, s, h, i;
  return t.x = g(t.x - this.long0), ea.forward.apply(this, [t]), a = Math.sin(t.y), s = Math.cos(t.y), h = Math.cos(t.x), i = this.k0 * this.R2 / (1 + this.sinc0 * a + this.cosc0 * s * h), t.x = i * s * Math.sin(t.x), t.y = i * (this.cosc0 * a - this.sinc0 * s * h), t.x = this.a * t.x + this.x0, t.y = this.a * t.y + this.y0, t;
}
function Di(t) {
  var a, s, h, i, e;
  if (t.x = (t.x - this.x0) / this.a, t.y = (t.y - this.y0) / this.a, t.x /= this.k0, t.y /= this.k0, e = D(t.x, t.y)) {
    var n = 2 * Math.atan2(e, this.R2);
    a = Math.sin(n), s = Math.cos(n), i = Math.asin(s * this.sinc0 + t.y * a * this.cosc0 / e), h = Math.atan2(t.x * a, e * this.cosc0 * s - t.y * this.sinc0 * a);
  } else
    i = this.phic0, h = 0;
  return t.x = h, t.y = i, ea.inverse.apply(this, [t]), t.x = g(t.x + this.long0), t;
}
var pi = ["Stereographic_North_Pole", "Oblique_Stereographic", "sterea", "Oblique Stereographic Alternative", "Double_Stereographic"];
const Ui = {
  init: ki,
  forward: Bi,
  inverse: Di,
  names: pi
};
function Fi(t, a, s) {
  return a *= s, Math.tan(0.5 * (d + t)) * Math.pow((1 - a) / (1 + a), 0.5 * s);
}
function ji() {
  this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.coslat0 = Math.cos(this.lat0), this.sinlat0 = Math.sin(this.lat0), this.sphere ? this.k0 === 1 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= _ && (this.k0 = 0.5 * (1 + wt(this.lat0) * Math.sin(this.lat_ts))) : (Math.abs(this.coslat0) <= _ && (this.lat0 > 0 ? this.con = 1 : this.con = -1), this.cons = Math.sqrt(Math.pow(1 + this.e, 1 + this.e) * Math.pow(1 - this.e, 1 - this.e)), this.k0 === 1 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= _ && Math.abs(Math.cos(this.lat_ts)) > _ && (this.k0 = 0.5 * this.cons * H(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) / F(this.e, this.con * this.lat_ts, this.con * Math.sin(this.lat_ts))), this.ms1 = H(this.e, this.sinlat0, this.coslat0), this.X0 = 2 * Math.atan(this.ssfn_(this.lat0, this.sinlat0, this.e)) - d, this.cosX0 = Math.cos(this.X0), this.sinX0 = Math.sin(this.X0));
}
function Qi(t) {
  var a = t.x, s = t.y, h = Math.sin(s), i = Math.cos(s), e, n, r, o, l, u, f = g(a - this.long0);
  return Math.abs(Math.abs(a - this.long0) - Math.PI) <= _ && Math.abs(s + this.lat0) <= _ ? (t.x = NaN, t.y = NaN, t) : this.sphere ? (e = 2 * this.k0 / (1 + this.sinlat0 * h + this.coslat0 * i * Math.cos(f)), t.x = this.a * e * i * Math.sin(f) + this.x0, t.y = this.a * e * (this.coslat0 * h - this.sinlat0 * i * Math.cos(f)) + this.y0, t) : (n = 2 * Math.atan(this.ssfn_(s, h, this.e)) - d, o = Math.cos(n), r = Math.sin(n), Math.abs(this.coslat0) <= _ ? (l = F(this.e, s * this.con, this.con * h), u = 2 * this.a * this.k0 * l / this.cons, t.x = this.x0 + u * Math.sin(a - this.long0), t.y = this.y0 - this.con * u * Math.cos(a - this.long0), t) : (Math.abs(this.sinlat0) < _ ? (e = 2 * this.a * this.k0 / (1 + o * Math.cos(f)), t.y = e * r) : (e = 2 * this.a * this.k0 * this.ms1 / (this.cosX0 * (1 + this.sinX0 * r + this.cosX0 * o * Math.cos(f))), t.y = e * (this.cosX0 * r - this.sinX0 * o * Math.cos(f)) + this.y0), t.x = e * o * Math.sin(f) + this.x0, t));
}
function Wi(t) {
  t.x -= this.x0, t.y -= this.y0;
  var a, s, h, i, e, n = Math.sqrt(t.x * t.x + t.y * t.y);
  if (this.sphere) {
    var r = 2 * Math.atan(n / (2 * this.a * this.k0));
    return a = this.long0, s = this.lat0, n <= _ ? (t.x = a, t.y = s, t) : (s = Math.asin(Math.cos(r) * this.sinlat0 + t.y * Math.sin(r) * this.coslat0 / n), Math.abs(this.coslat0) < _ ? this.lat0 > 0 ? a = g(this.long0 + Math.atan2(t.x, -1 * t.y)) : a = g(this.long0 + Math.atan2(t.x, t.y)) : a = g(this.long0 + Math.atan2(t.x * Math.sin(r), n * this.coslat0 * Math.cos(r) - t.y * this.sinlat0 * Math.sin(r))), t.x = a, t.y = s, t);
  } else if (Math.abs(this.coslat0) <= _) {
    if (n <= _)
      return s = this.lat0, a = this.long0, t.x = a, t.y = s, t;
    t.x *= this.con, t.y *= this.con, h = n * this.cons / (2 * this.a * this.k0), s = this.con * Ct(this.e, h), a = this.con * g(this.con * this.long0 + Math.atan2(t.x, -1 * t.y));
  } else
    i = 2 * Math.atan(n * this.cosX0 / (2 * this.a * this.k0 * this.ms1)), a = this.long0, n <= _ ? e = this.X0 : (e = Math.asin(Math.cos(i) * this.sinX0 + t.y * Math.sin(i) * this.cosX0 / n), a = g(this.long0 + Math.atan2(t.x * Math.sin(i), n * this.cosX0 * Math.cos(i) - t.y * this.sinX0 * Math.sin(i)))), s = -1 * Ct(this.e, Math.tan(0.5 * (d + e)));
  return t.x = a, t.y = s, t;
}
var Xi = ["stere", "Stereographic_South_Pole", "Polar Stereographic (variant B)", "Polar_Stereographic"];
const Hi = {
  init: ji,
  forward: Qi,
  inverse: Wi,
  names: Xi,
  ssfn_: Fi
};
function Ki() {
  var t = this.lat0;
  this.lambda0 = this.long0;
  var a = Math.sin(t), s = this.a, h = this.rf, i = 1 / h, e = 2 * i - Math.pow(i, 2), n = this.e = Math.sqrt(e);
  this.R = this.k0 * s * Math.sqrt(1 - e) / (1 - e * Math.pow(a, 2)), this.alpha = Math.sqrt(1 + e / (1 - e) * Math.pow(Math.cos(t), 4)), this.b0 = Math.asin(a / this.alpha);
  var r = Math.log(Math.tan(Math.PI / 4 + this.b0 / 2)), o = Math.log(Math.tan(Math.PI / 4 + t / 2)), l = Math.log((1 + n * a) / (1 - n * a));
  this.K = r - this.alpha * o + this.alpha * n / 2 * l;
}
function Ji(t) {
  var a = Math.log(Math.tan(Math.PI / 4 - t.y / 2)), s = this.e / 2 * Math.log((1 + this.e * Math.sin(t.y)) / (1 - this.e * Math.sin(t.y))), h = -this.alpha * (a + s) + this.K, i = 2 * (Math.atan(Math.exp(h)) - Math.PI / 4), e = this.alpha * (t.x - this.lambda0), n = Math.atan(Math.sin(e) / (Math.sin(this.b0) * Math.tan(i) + Math.cos(this.b0) * Math.cos(e))), r = Math.asin(Math.cos(this.b0) * Math.sin(i) - Math.sin(this.b0) * Math.cos(i) * Math.cos(e));
  return t.y = this.R / 2 * Math.log((1 + Math.sin(r)) / (1 - Math.sin(r))) + this.y0, t.x = this.R * n + this.x0, t;
}
function Vi(t) {
  for (var a = t.x - this.x0, s = t.y - this.y0, h = a / this.R, i = 2 * (Math.atan(Math.exp(s / this.R)) - Math.PI / 4), e = Math.asin(Math.cos(this.b0) * Math.sin(i) + Math.sin(this.b0) * Math.cos(i) * Math.cos(h)), n = Math.atan(Math.sin(h) / (Math.cos(this.b0) * Math.cos(h) - Math.sin(this.b0) * Math.tan(i))), r = this.lambda0 + n / this.alpha, o = 0, l = e, u = -1e3, f = 0; Math.abs(l - u) > 1e-7; ) {
    if (++f > 20)
      return;
    o = 1 / this.alpha * (Math.log(Math.tan(Math.PI / 4 + e / 2)) - this.K) + this.e * Math.log(Math.tan(Math.PI / 4 + Math.asin(this.e * Math.sin(l)) / 2)), u = l, l = 2 * Math.atan(Math.exp(o)) - Math.PI / 2;
  }
  return t.x = r, t.y = l, t;
}
var Zi = ["somerc"];
const Yi = {
  init: Ki,
  forward: Ji,
  inverse: Vi,
  names: Zi
};
var ht = 1e-7;
function th(t) {
  var a = ["Hotine_Oblique_Mercator", "Hotine_Oblique_Mercator_Azimuth_Natural_Origin"], s = typeof t.PROJECTION == "object" ? Object.keys(t.PROJECTION)[0] : t.PROJECTION;
  return "no_uoff" in t || "no_off" in t || a.indexOf(s) !== -1;
}
function ah() {
  var t, a, s, h, i, e, n, r, o, l, u = 0, f, c = 0, v = 0, M = 0, m = 0, y = 0, x = 0;
  this.no_off = th(this), this.no_rot = "no_rot" in this;
  var b = !1;
  "alpha" in this && (b = !0);
  var E = !1;
  if ("rectified_grid_angle" in this && (E = !0), b && (x = this.alpha), E && (u = this.rectified_grid_angle * L), b || E)
    c = this.longc;
  else if (v = this.long1, m = this.lat1, M = this.long2, y = this.lat2, Math.abs(m - y) <= ht || (t = Math.abs(m)) <= ht || Math.abs(t - d) <= ht || Math.abs(Math.abs(this.lat0) - d) <= ht || Math.abs(Math.abs(y) - d) <= ht)
    throw new Error();
  var P = 1 - this.es;
  a = Math.sqrt(P), Math.abs(this.lat0) > _ ? (r = Math.sin(this.lat0), s = Math.cos(this.lat0), t = 1 - this.es * r * r, this.B = s * s, this.B = Math.sqrt(1 + this.es * this.B * this.B / P), this.A = this.B * this.k0 * a / t, h = this.B * a / (s * Math.sqrt(t)), i = h * h - 1, i <= 0 ? i = 0 : (i = Math.sqrt(i), this.lat0 < 0 && (i = -i)), this.E = i += h, this.E *= Math.pow(F(this.e, this.lat0, r), this.B)) : (this.B = 1 / a, this.A = this.k0, this.E = h = i = 1), b || E ? (b ? (f = Math.asin(Math.sin(x) / h), E || (u = x)) : (f = u, x = Math.asin(h * Math.sin(f))), this.lam0 = c - Math.asin(0.5 * (i - 1 / i) * Math.tan(f)) / this.B) : (e = Math.pow(F(this.e, m, Math.sin(m)), this.B), n = Math.pow(F(this.e, y, Math.sin(y)), this.B), i = this.E / e, o = (n - e) / (n + e), l = this.E * this.E, l = (l - n * e) / (l + n * e), t = v - M, t < -Math.pi ? M -= Et : t > Math.pi && (M += Et), this.lam0 = g(0.5 * (v + M) - Math.atan(l * Math.tan(0.5 * this.B * (v - M)) / o) / this.B), f = Math.atan(2 * Math.sin(this.B * g(v - this.lam0)) / (i - 1 / i)), u = x = Math.asin(h * Math.sin(f))), this.singam = Math.sin(f), this.cosgam = Math.cos(f), this.sinrot = Math.sin(u), this.cosrot = Math.cos(u), this.rB = 1 / this.B, this.ArB = this.A * this.rB, this.BrA = 1 / this.ArB, this.A * this.B, this.no_off ? this.u_0 = 0 : (this.u_0 = Math.abs(this.ArB * Math.atan(Math.sqrt(h * h - 1) / Math.cos(x))), this.lat0 < 0 && (this.u_0 = -this.u_0)), i = 0.5 * f, this.v_pole_n = this.ArB * Math.log(Math.tan(S - i)), this.v_pole_s = this.ArB * Math.log(Math.tan(S + i));
}
function sh(t) {
  var a = {}, s, h, i, e, n, r, o, l;
  if (t.x = t.x - this.lam0, Math.abs(Math.abs(t.y) - d) > _) {
    if (n = this.E / Math.pow(F(this.e, t.y, Math.sin(t.y)), this.B), r = 1 / n, s = 0.5 * (n - r), h = 0.5 * (n + r), e = Math.sin(this.B * t.x), i = (s * this.singam - e * this.cosgam) / h, Math.abs(Math.abs(i) - 1) < _)
      throw new Error();
    l = 0.5 * this.ArB * Math.log((1 - i) / (1 + i)), r = Math.cos(this.B * t.x), Math.abs(r) < ht ? o = this.A * t.x : o = this.ArB * Math.atan2(s * this.cosgam + e * this.singam, r);
  } else
    l = t.y > 0 ? this.v_pole_n : this.v_pole_s, o = this.ArB * t.y;
  return this.no_rot ? (a.x = o, a.y = l) : (o -= this.u_0, a.x = l * this.cosrot + o * this.sinrot, a.y = o * this.cosrot - l * this.sinrot), a.x = this.a * a.x + this.x0, a.y = this.a * a.y + this.y0, a;
}
function ih(t) {
  var a, s, h, i, e, n, r, o = {};
  if (t.x = (t.x - this.x0) * (1 / this.a), t.y = (t.y - this.y0) * (1 / this.a), this.no_rot ? (s = t.y, a = t.x) : (s = t.x * this.cosrot - t.y * this.sinrot, a = t.y * this.cosrot + t.x * this.sinrot + this.u_0), h = Math.exp(-this.BrA * s), i = 0.5 * (h - 1 / h), e = 0.5 * (h + 1 / h), n = Math.sin(this.BrA * a), r = (n * this.cosgam + i * this.singam) / e, Math.abs(Math.abs(r) - 1) < _)
    o.x = 0, o.y = r < 0 ? -d : d;
  else {
    if (o.y = this.E / Math.sqrt((1 + r) / (1 - r)), o.y = Ct(this.e, Math.pow(o.y, 1 / this.B)), o.y === 1 / 0)
      throw new Error();
    o.x = -this.rB * Math.atan2(i * this.cosgam - n * this.singam, Math.cos(this.BrA * a));
  }
  return o.x += this.lam0, o;
}
var hh = ["Hotine_Oblique_Mercator", "Hotine Oblique Mercator", "Hotine_Oblique_Mercator_Azimuth_Natural_Origin", "Hotine_Oblique_Mercator_Two_Point_Natural_Origin", "Hotine_Oblique_Mercator_Azimuth_Center", "Oblique_Mercator", "omerc"];
const eh = {
  init: ah,
  forward: sh,
  inverse: ih,
  names: hh
};
function rh() {
  if (this.lat2 || (this.lat2 = this.lat1), this.k0 || (this.k0 = 1), this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, !(Math.abs(this.lat1 + this.lat2) < _)) {
    var t = this.b / this.a;
    this.e = Math.sqrt(1 - t * t);
    var a = Math.sin(this.lat1), s = Math.cos(this.lat1), h = H(this.e, a, s), i = F(this.e, this.lat1, a), e = Math.sin(this.lat2), n = Math.cos(this.lat2), r = H(this.e, e, n), o = F(this.e, this.lat2, e), l = F(this.e, this.lat0, Math.sin(this.lat0));
    Math.abs(this.lat1 - this.lat2) > _ ? this.ns = Math.log(h / r) / Math.log(i / o) : this.ns = a, isNaN(this.ns) && (this.ns = a), this.f0 = h / (this.ns * Math.pow(i, this.ns)), this.rh = this.a * this.f0 * Math.pow(l, this.ns), this.title || (this.title = "Lambert Conformal Conic");
  }
}
function nh(t) {
  var a = t.x, s = t.y;
  Math.abs(2 * Math.abs(s) - Math.PI) <= _ && (s = wt(s) * (d - 2 * _));
  var h = Math.abs(Math.abs(s) - d), i, e;
  if (h > _)
    i = F(this.e, s, Math.sin(s)), e = this.a * this.f0 * Math.pow(i, this.ns);
  else {
    if (h = s * this.ns, h <= 0)
      return null;
    e = 0;
  }
  var n = this.ns * g(a - this.long0);
  return t.x = this.k0 * (e * Math.sin(n)) + this.x0, t.y = this.k0 * (this.rh - e * Math.cos(n)) + this.y0, t;
}
function oh(t) {
  var a, s, h, i, e, n = (t.x - this.x0) / this.k0, r = this.rh - (t.y - this.y0) / this.k0;
  this.ns > 0 ? (a = Math.sqrt(n * n + r * r), s = 1) : (a = -Math.sqrt(n * n + r * r), s = -1);
  var o = 0;
  if (a !== 0 && (o = Math.atan2(s * n, s * r)), a !== 0 || this.ns > 0) {
    if (s = 1 / this.ns, h = Math.pow(a / (this.a * this.f0), s), i = Ct(this.e, h), i === -9999)
      return null;
  } else
    i = -d;
  return e = g(o / this.ns + this.long0), t.x = e, t.y = i, t;
}
var lh = [
  "Lambert Tangential Conformal Conic Projection",
  "Lambert_Conformal_Conic",
  "Lambert_Conformal_Conic_1SP",
  "Lambert_Conformal_Conic_2SP",
  "lcc",
  "Lambert Conic Conformal (1SP)",
  "Lambert Conic Conformal (2SP)"
];
const fh = {
  init: rh,
  forward: nh,
  inverse: oh,
  names: lh
};
function uh() {
  this.a = 6377397155e-3, this.es = 0.006674372230614, this.e = Math.sqrt(this.es), this.lat0 || (this.lat0 = 0.863937979737193), this.long0 || (this.long0 = 0.7417649320975901 - 0.308341501185665), this.k0 || (this.k0 = 0.9999), this.s45 = 0.785398163397448, this.s90 = 2 * this.s45, this.fi0 = this.lat0, this.e2 = this.es, this.e = Math.sqrt(this.e2), this.alfa = Math.sqrt(1 + this.e2 * Math.pow(Math.cos(this.fi0), 4) / (1 - this.e2)), this.uq = 1.04216856380474, this.u0 = Math.asin(Math.sin(this.fi0) / this.alfa), this.g = Math.pow((1 + this.e * Math.sin(this.fi0)) / (1 - this.e * Math.sin(this.fi0)), this.alfa * this.e / 2), this.k = Math.tan(this.u0 / 2 + this.s45) / Math.pow(Math.tan(this.fi0 / 2 + this.s45), this.alfa) * this.g, this.k1 = this.k0, this.n0 = this.a * Math.sqrt(1 - this.e2) / (1 - this.e2 * Math.pow(Math.sin(this.fi0), 2)), this.s0 = 1.37008346281555, this.n = Math.sin(this.s0), this.ro0 = this.k1 * this.n0 / Math.tan(this.s0), this.ad = this.s90 - this.uq;
}
function ch(t) {
  var a, s, h, i, e, n, r, o = t.x, l = t.y, u = g(o - this.long0);
  return a = Math.pow((1 + this.e * Math.sin(l)) / (1 - this.e * Math.sin(l)), this.alfa * this.e / 2), s = 2 * (Math.atan(this.k * Math.pow(Math.tan(l / 2 + this.s45), this.alfa) / a) - this.s45), h = -u * this.alfa, i = Math.asin(Math.cos(this.ad) * Math.sin(s) + Math.sin(this.ad) * Math.cos(s) * Math.cos(h)), e = Math.asin(Math.cos(s) * Math.sin(h) / Math.cos(i)), n = this.n * e, r = this.ro0 * Math.pow(Math.tan(this.s0 / 2 + this.s45), this.n) / Math.pow(Math.tan(i / 2 + this.s45), this.n), t.y = r * Math.cos(n) / 1, t.x = r * Math.sin(n) / 1, this.czech || (t.y *= -1, t.x *= -1), t;
}
function Mh(t) {
  var a, s, h, i, e, n, r, o, l = t.x;
  t.x = t.y, t.y = l, this.czech || (t.y *= -1, t.x *= -1), n = Math.sqrt(t.x * t.x + t.y * t.y), e = Math.atan2(t.y, t.x), i = e / Math.sin(this.s0), h = 2 * (Math.atan(Math.pow(this.ro0 / n, 1 / this.n) * Math.tan(this.s0 / 2 + this.s45)) - this.s45), a = Math.asin(Math.cos(this.ad) * Math.sin(h) - Math.sin(this.ad) * Math.cos(h) * Math.cos(i)), s = Math.asin(Math.cos(h) * Math.sin(i) / Math.cos(a)), t.x = this.long0 - s / this.alfa, r = a, o = 0;
  var u = 0;
  do
    t.y = 2 * (Math.atan(Math.pow(this.k, -1 / this.alfa) * Math.pow(Math.tan(a / 2 + this.s45), 1 / this.alfa) * Math.pow((1 + this.e * Math.sin(r)) / (1 - this.e * Math.sin(r)), this.e / 2)) - this.s45), Math.abs(r - t.y) < 1e-10 && (o = 1), r = t.y, u += 1;
  while (o === 0 && u < 15);
  return u >= 15 ? null : t;
}
var vh = ["Krovak", "krovak"];
const dh = {
  init: uh,
  forward: ch,
  inverse: Mh,
  names: vh
};
function k(t, a, s, h, i) {
  return t * i - a * Math.sin(2 * i) + s * Math.sin(4 * i) - h * Math.sin(6 * i);
}
function Pt(t) {
  return 1 - 0.25 * t * (1 + t / 16 * (3 + 1.25 * t));
}
function It(t) {
  return 0.375 * t * (1 + 0.25 * t * (1 + 0.46875 * t));
}
function Ot(t) {
  return 0.05859375 * t * t * (1 + 0.75 * t);
}
function Rt(t) {
  return t * t * t * (35 / 3072);
}
function ct(t, a, s) {
  var h = a * s;
  return t / Math.sqrt(1 - h * h);
}
function Y(t) {
  return Math.abs(t) < d ? t : t - wt(t) * Math.PI;
}
function pt(t, a, s, h, i) {
  var e, n;
  e = t / a;
  for (var r = 0; r < 15; r++)
    if (n = (t - (a * e - s * Math.sin(2 * e) + h * Math.sin(4 * e) - i * Math.sin(6 * e))) / (a - 2 * s * Math.cos(2 * e) + 4 * h * Math.cos(4 * e) - 6 * i * Math.cos(6 * e)), e += n, Math.abs(n) <= 1e-10)
      return e;
  return NaN;
}
function mh() {
  this.sphere || (this.e0 = Pt(this.es), this.e1 = It(this.es), this.e2 = Ot(this.es), this.e3 = Rt(this.es), this.ml0 = this.a * k(this.e0, this.e1, this.e2, this.e3, this.lat0));
}
function yh(t) {
  var a, s, h = t.x, i = t.y;
  if (h = g(h - this.long0), this.sphere)
    a = this.a * Math.asin(Math.cos(i) * Math.sin(h)), s = this.a * (Math.atan2(Math.tan(i), Math.cos(h)) - this.lat0);
  else {
    var e = Math.sin(i), n = Math.cos(i), r = ct(this.a, this.e, e), o = Math.tan(i) * Math.tan(i), l = h * Math.cos(i), u = l * l, f = this.es * n * n / (1 - this.es), c = this.a * k(this.e0, this.e1, this.e2, this.e3, i);
    a = r * l * (1 - u * o * (1 / 6 - (8 - o + 8 * f) * u / 120)), s = c - this.ml0 + r * e / n * u * (0.5 + (5 - o + 6 * f) * u / 24);
  }
  return t.x = a + this.x0, t.y = s + this.y0, t;
}
function _h(t) {
  t.x -= this.x0, t.y -= this.y0;
  var a = t.x / this.a, s = t.y / this.a, h, i;
  if (this.sphere) {
    var e = s + this.lat0;
    h = Math.asin(Math.sin(e) * Math.cos(a)), i = Math.atan2(Math.tan(a), Math.cos(e));
  } else {
    var n = this.ml0 / this.a + s, r = pt(n, this.e0, this.e1, this.e2, this.e3);
    if (Math.abs(Math.abs(r) - d) <= _)
      return t.x = this.long0, t.y = d, s < 0 && (t.y *= -1), t;
    var o = ct(this.a, this.e, Math.sin(r)), l = o * o * o / this.a / this.a * (1 - this.es), u = Math.pow(Math.tan(r), 2), f = a * this.a / o, c = f * f;
    h = r - o * Math.tan(r) / l * f * f * (0.5 - (1 + 3 * u) * f * f / 24), i = f * (1 - c * (u / 3 + (1 + 3 * u) * u * c / 15)) / Math.cos(r);
  }
  return t.x = g(i + this.long0), t.y = Y(h), t;
}
var gh = ["Cassini", "Cassini_Soldner", "cass"];
const xh = {
  init: mh,
  forward: yh,
  inverse: _h,
  names: gh
};
function J(t, a) {
  var s;
  return t > 1e-7 ? (s = t * a, (1 - t * t) * (a / (1 - s * s) - 0.5 / t * Math.log((1 - s) / (1 + s)))) : 2 * a;
}
var bh = 1, Nh = 2, Eh = 3, Ah = 4;
function Ch() {
  var t = Math.abs(this.lat0);
  if (Math.abs(t - d) < _ ? this.mode = this.lat0 < 0 ? this.S_POLE : this.N_POLE : Math.abs(t) < _ ? this.mode = this.EQUIT : this.mode = this.OBLIQ, this.es > 0) {
    var a;
    switch (this.qp = J(this.e, 1), this.mmf = 0.5 / (1 - this.es), this.apa = Lh(this.es), this.mode) {
      case this.N_POLE:
        this.dd = 1;
        break;
      case this.S_POLE:
        this.dd = 1;
        break;
      case this.EQUIT:
        this.rq = Math.sqrt(0.5 * this.qp), this.dd = 1 / this.rq, this.xmf = 1, this.ymf = 0.5 * this.qp;
        break;
      case this.OBLIQ:
        this.rq = Math.sqrt(0.5 * this.qp), a = Math.sin(this.lat0), this.sinb1 = J(this.e, a) / this.qp, this.cosb1 = Math.sqrt(1 - this.sinb1 * this.sinb1), this.dd = Math.cos(this.lat0) / (Math.sqrt(1 - this.es * a * a) * this.rq * this.cosb1), this.ymf = (this.xmf = this.rq) / this.dd, this.xmf *= this.dd;
        break;
    }
  } else
    this.mode === this.OBLIQ && (this.sinph0 = Math.sin(this.lat0), this.cosph0 = Math.cos(this.lat0));
}
function Sh(t) {
  var a, s, h, i, e, n, r, o, l, u, f = t.x, c = t.y;
  if (f = g(f - this.long0), this.sphere) {
    if (e = Math.sin(c), u = Math.cos(c), h = Math.cos(f), this.mode === this.OBLIQ || this.mode === this.EQUIT) {
      if (s = this.mode === this.EQUIT ? 1 + u * h : 1 + this.sinph0 * e + this.cosph0 * u * h, s <= _)
        return null;
      s = Math.sqrt(2 / s), a = s * u * Math.sin(f), s *= this.mode === this.EQUIT ? e : this.cosph0 * e - this.sinph0 * u * h;
    } else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
      if (this.mode === this.N_POLE && (h = -h), Math.abs(c + this.lat0) < _)
        return null;
      s = S - c * 0.5, s = 2 * (this.mode === this.S_POLE ? Math.cos(s) : Math.sin(s)), a = s * Math.sin(f), s *= h;
    }
  } else {
    switch (r = 0, o = 0, l = 0, h = Math.cos(f), i = Math.sin(f), e = Math.sin(c), n = J(this.e, e), (this.mode === this.OBLIQ || this.mode === this.EQUIT) && (r = n / this.qp, o = Math.sqrt(1 - r * r)), this.mode) {
      case this.OBLIQ:
        l = 1 + this.sinb1 * r + this.cosb1 * o * h;
        break;
      case this.EQUIT:
        l = 1 + o * h;
        break;
      case this.N_POLE:
        l = d + c, n = this.qp - n;
        break;
      case this.S_POLE:
        l = c - d, n = this.qp + n;
        break;
    }
    if (Math.abs(l) < _)
      return null;
    switch (this.mode) {
      case this.OBLIQ:
      case this.EQUIT:
        l = Math.sqrt(2 / l), this.mode === this.OBLIQ ? s = this.ymf * l * (this.cosb1 * r - this.sinb1 * o * h) : s = (l = Math.sqrt(2 / (1 + o * h))) * r * this.ymf, a = this.xmf * l * o * i;
        break;
      case this.N_POLE:
      case this.S_POLE:
        n >= 0 ? (a = (l = Math.sqrt(n)) * i, s = h * (this.mode === this.S_POLE ? l : -l)) : a = s = 0;
        break;
    }
  }
  return t.x = this.a * a + this.x0, t.y = this.a * s + this.y0, t;
}
function wh(t) {
  t.x -= this.x0, t.y -= this.y0;
  var a = t.x / this.a, s = t.y / this.a, h, i, e, n, r, o, l;
  if (this.sphere) {
    var u = 0, f, c = 0;
    if (f = Math.sqrt(a * a + s * s), i = f * 0.5, i > 1)
      return null;
    switch (i = 2 * Math.asin(i), (this.mode === this.OBLIQ || this.mode === this.EQUIT) && (c = Math.sin(i), u = Math.cos(i)), this.mode) {
      case this.EQUIT:
        i = Math.abs(f) <= _ ? 0 : Math.asin(s * c / f), a *= c, s = u * f;
        break;
      case this.OBLIQ:
        i = Math.abs(f) <= _ ? this.lat0 : Math.asin(u * this.sinph0 + s * c * this.cosph0 / f), a *= c * this.cosph0, s = (u - Math.sin(i) * this.sinph0) * f;
        break;
      case this.N_POLE:
        s = -s, i = d - i;
        break;
      case this.S_POLE:
        i -= d;
        break;
    }
    h = s === 0 && (this.mode === this.EQUIT || this.mode === this.OBLIQ) ? 0 : Math.atan2(a, s);
  } else {
    if (l = 0, this.mode === this.OBLIQ || this.mode === this.EQUIT) {
      if (a /= this.dd, s *= this.dd, o = Math.sqrt(a * a + s * s), o < _)
        return t.x = this.long0, t.y = this.lat0, t;
      n = 2 * Math.asin(0.5 * o / this.rq), e = Math.cos(n), a *= n = Math.sin(n), this.mode === this.OBLIQ ? (l = e * this.sinb1 + s * n * this.cosb1 / o, r = this.qp * l, s = o * this.cosb1 * e - s * this.sinb1 * n) : (l = s * n / o, r = this.qp * l, s = o * e);
    } else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
      if (this.mode === this.N_POLE && (s = -s), r = a * a + s * s, !r)
        return t.x = this.long0, t.y = this.lat0, t;
      l = 1 - r / this.qp, this.mode === this.S_POLE && (l = -l);
    }
    h = Math.atan2(a, s), i = Gh(Math.asin(l), this.apa);
  }
  return t.x = g(this.long0 + h), t.y = i, t;
}
var Ph = 0.3333333333333333, Ih = 0.17222222222222222, Oh = 0.10257936507936508, Rh = 0.06388888888888888, qh = 0.0664021164021164, Th = 0.016415012942191543;
function Lh(t) {
  var a, s = [];
  return s[0] = t * Ph, a = t * t, s[0] += a * Ih, s[1] = a * Rh, a *= t, s[0] += a * Oh, s[1] += a * qh, s[2] = a * Th, s;
}
function Gh(t, a) {
  var s = t + t;
  return t + a[0] * Math.sin(s) + a[1] * Math.sin(s + s) + a[2] * Math.sin(s + s + s);
}
var $h = ["Lambert Azimuthal Equal Area", "Lambert_Azimuthal_Equal_Area", "laea"];
const zh = {
  init: Ch,
  forward: Sh,
  inverse: wh,
  names: $h,
  S_POLE: bh,
  N_POLE: Nh,
  EQUIT: Eh,
  OBLIQ: Ah
};
function Z(t) {
  return Math.abs(t) > 1 && (t = t > 1 ? 1 : -1), Math.asin(t);
}
function kh() {
  Math.abs(this.lat1 + this.lat2) < _ || (this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e3 = Math.sqrt(this.es), this.sin_po = Math.sin(this.lat1), this.cos_po = Math.cos(this.lat1), this.t1 = this.sin_po, this.con = this.sin_po, this.ms1 = H(this.e3, this.sin_po, this.cos_po), this.qs1 = J(this.e3, this.sin_po), this.sin_po = Math.sin(this.lat2), this.cos_po = Math.cos(this.lat2), this.t2 = this.sin_po, this.ms2 = H(this.e3, this.sin_po, this.cos_po), this.qs2 = J(this.e3, this.sin_po), this.sin_po = Math.sin(this.lat0), this.cos_po = Math.cos(this.lat0), this.t3 = this.sin_po, this.qs0 = J(this.e3, this.sin_po), Math.abs(this.lat1 - this.lat2) > _ ? this.ns0 = (this.ms1 * this.ms1 - this.ms2 * this.ms2) / (this.qs2 - this.qs1) : this.ns0 = this.con, this.c = this.ms1 * this.ms1 + this.ns0 * this.qs1, this.rh = this.a * Math.sqrt(this.c - this.ns0 * this.qs0) / this.ns0);
}
function Bh(t) {
  var a = t.x, s = t.y;
  this.sin_phi = Math.sin(s), this.cos_phi = Math.cos(s);
  var h = J(this.e3, this.sin_phi), i = this.a * Math.sqrt(this.c - this.ns0 * h) / this.ns0, e = this.ns0 * g(a - this.long0), n = i * Math.sin(e) + this.x0, r = this.rh - i * Math.cos(e) + this.y0;
  return t.x = n, t.y = r, t;
}
function Dh(t) {
  var a, s, h, i, e, n;
  return t.x -= this.x0, t.y = this.rh - t.y + this.y0, this.ns0 >= 0 ? (a = Math.sqrt(t.x * t.x + t.y * t.y), h = 1) : (a = -Math.sqrt(t.x * t.x + t.y * t.y), h = -1), i = 0, a !== 0 && (i = Math.atan2(h * t.x, h * t.y)), h = a * this.ns0 / this.a, this.sphere ? n = Math.asin((this.c - h * h) / (2 * this.ns0)) : (s = (this.c - h * h) / this.ns0, n = this.phi1z(this.e3, s)), e = g(i / this.ns0 + this.long0), t.x = e, t.y = n, t;
}
function ph(t, a) {
  var s, h, i, e, n, r = Z(0.5 * a);
  if (t < _)
    return r;
  for (var o = t * t, l = 1; l <= 25; l++)
    if (s = Math.sin(r), h = Math.cos(r), i = t * s, e = 1 - i * i, n = 0.5 * e * e / h * (a / (1 - o) - s / e + 0.5 / t * Math.log((1 - i) / (1 + i))), r = r + n, Math.abs(n) <= 1e-7)
      return r;
  return null;
}
var Uh = ["Albers_Conic_Equal_Area", "Albers", "aea"];
const Fh = {
  init: kh,
  forward: Bh,
  inverse: Dh,
  names: Uh,
  phi1z: ph
};
function jh() {
  this.sin_p14 = Math.sin(this.lat0), this.cos_p14 = Math.cos(this.lat0), this.infinity_dist = 1e3 * this.a, this.rc = 1;
}
function Qh(t) {
  var a, s, h, i, e, n, r, o, l = t.x, u = t.y;
  return h = g(l - this.long0), a = Math.sin(u), s = Math.cos(u), i = Math.cos(h), n = this.sin_p14 * a + this.cos_p14 * s * i, e = 1, n > 0 || Math.abs(n) <= _ ? (r = this.x0 + this.a * e * s * Math.sin(h) / n, o = this.y0 + this.a * e * (this.cos_p14 * a - this.sin_p14 * s * i) / n) : (r = this.x0 + this.infinity_dist * s * Math.sin(h), o = this.y0 + this.infinity_dist * (this.cos_p14 * a - this.sin_p14 * s * i)), t.x = r, t.y = o, t;
}
function Wh(t) {
  var a, s, h, i, e, n;
  return t.x = (t.x - this.x0) / this.a, t.y = (t.y - this.y0) / this.a, t.x /= this.k0, t.y /= this.k0, (a = Math.sqrt(t.x * t.x + t.y * t.y)) ? (i = Math.atan2(a, this.rc), s = Math.sin(i), h = Math.cos(i), n = Z(h * this.sin_p14 + t.y * s * this.cos_p14 / a), e = Math.atan2(t.x * s, a * this.cos_p14 * h - t.y * this.sin_p14 * s), e = g(this.long0 + e)) : (n = this.phic0, e = 0), t.x = e, t.y = n, t;
}
var Xh = ["gnom"];
const Hh = {
  init: jh,
  forward: Qh,
  inverse: Wh,
  names: Xh
};
function Kh(t, a) {
  var s = 1 - (1 - t * t) / (2 * t) * Math.log((1 - t) / (1 + t));
  if (Math.abs(Math.abs(a) - s) < 1e-6)
    return a < 0 ? -1 * d : d;
  for (var h = Math.asin(0.5 * a), i, e, n, r, o = 0; o < 30; o++)
    if (e = Math.sin(h), n = Math.cos(h), r = t * e, i = Math.pow(1 - r * r, 2) / (2 * n) * (a / (1 - t * t) - e / (1 - r * r) + 0.5 / t * Math.log((1 - r) / (1 + r))), h += i, Math.abs(i) <= 1e-10)
      return h;
  return NaN;
}
function Jh() {
  this.sphere || (this.k0 = H(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)));
}
function Vh(t) {
  var a = t.x, s = t.y, h, i, e = g(a - this.long0);
  if (this.sphere)
    h = this.x0 + this.a * e * Math.cos(this.lat_ts), i = this.y0 + this.a * Math.sin(s) / Math.cos(this.lat_ts);
  else {
    var n = J(this.e, Math.sin(s));
    h = this.x0 + this.a * this.k0 * e, i = this.y0 + this.a * n * 0.5 / this.k0;
  }
  return t.x = h, t.y = i, t;
}
function Zh(t) {
  t.x -= this.x0, t.y -= this.y0;
  var a, s;
  return this.sphere ? (a = g(this.long0 + t.x / this.a / Math.cos(this.lat_ts)), s = Math.asin(t.y / this.a * Math.cos(this.lat_ts))) : (s = Kh(this.e, 2 * t.y * this.k0 / this.a), a = g(this.long0 + t.x / (this.a * this.k0))), t.x = a, t.y = s, t;
}
var Yh = ["cea"];
const te = {
  init: Jh,
  forward: Vh,
  inverse: Zh,
  names: Yh
};
function ae() {
  this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.lat_ts = this.lat_ts || 0, this.title = this.title || "Equidistant Cylindrical (Plate Carre)", this.rc = Math.cos(this.lat_ts);
}
function se(t) {
  var a = t.x, s = t.y, h = g(a - this.long0), i = Y(s - this.lat0);
  return t.x = this.x0 + this.a * h * this.rc, t.y = this.y0 + this.a * i, t;
}
function ie(t) {
  var a = t.x, s = t.y;
  return t.x = g(this.long0 + (a - this.x0) / (this.a * this.rc)), t.y = Y(this.lat0 + (s - this.y0) / this.a), t;
}
var he = ["Equirectangular", "Equidistant_Cylindrical", "eqc"];
const ee = {
  init: ae,
  forward: se,
  inverse: ie,
  names: he
};
var Aa = 20;
function re() {
  this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e = Math.sqrt(this.es), this.e0 = Pt(this.es), this.e1 = It(this.es), this.e2 = Ot(this.es), this.e3 = Rt(this.es), this.ml0 = this.a * k(this.e0, this.e1, this.e2, this.e3, this.lat0);
}
function ne(t) {
  var a = t.x, s = t.y, h, i, e, n = g(a - this.long0);
  if (e = n * Math.sin(s), this.sphere)
    Math.abs(s) <= _ ? (h = this.a * n, i = -1 * this.a * this.lat0) : (h = this.a * Math.sin(e) / Math.tan(s), i = this.a * (Y(s - this.lat0) + (1 - Math.cos(e)) / Math.tan(s)));
  else if (Math.abs(s) <= _)
    h = this.a * n, i = -1 * this.ml0;
  else {
    var r = ct(this.a, this.e, Math.sin(s)) / Math.tan(s);
    h = r * Math.sin(e), i = this.a * k(this.e0, this.e1, this.e2, this.e3, s) - this.ml0 + r * (1 - Math.cos(e));
  }
  return t.x = h + this.x0, t.y = i + this.y0, t;
}
function oe(t) {
  var a, s, h, i, e, n, r, o, l;
  if (h = t.x - this.x0, i = t.y - this.y0, this.sphere)
    if (Math.abs(i + this.a * this.lat0) <= _)
      a = g(h / this.a + this.long0), s = 0;
    else {
      n = this.lat0 + i / this.a, r = h * h / this.a / this.a + n * n, o = n;
      var u;
      for (e = Aa; e; --e)
        if (u = Math.tan(o), l = -1 * (n * (o * u + 1) - o - 0.5 * (o * o + r) * u) / ((o - n) / u - 1), o += l, Math.abs(l) <= _) {
          s = o;
          break;
        }
      a = g(this.long0 + Math.asin(h * Math.tan(o) / this.a) / Math.sin(s));
    }
  else if (Math.abs(i + this.ml0) <= _)
    s = 0, a = g(this.long0 + h / this.a);
  else {
    n = (this.ml0 + i) / this.a, r = h * h / this.a / this.a + n * n, o = n;
    var f, c, v, M, m;
    for (e = Aa; e; --e)
      if (m = this.e * Math.sin(o), f = Math.sqrt(1 - m * m) * Math.tan(o), c = this.a * k(this.e0, this.e1, this.e2, this.e3, o), v = this.e0 - 2 * this.e1 * Math.cos(2 * o) + 4 * this.e2 * Math.cos(4 * o) - 6 * this.e3 * Math.cos(6 * o), M = c / this.a, l = (n * (f * M + 1) - M - 0.5 * f * (M * M + r)) / (this.es * Math.sin(2 * o) * (M * M + r - 2 * n * M) / (4 * f) + (n - M) * (f * v - 2 / Math.sin(2 * o)) - v), o -= l, Math.abs(l) <= _) {
        s = o;
        break;
      }
    f = Math.sqrt(1 - this.es * Math.pow(Math.sin(s), 2)) * Math.tan(s), a = g(this.long0 + Math.asin(h * f / this.a) / Math.sin(s));
  }
  return t.x = a, t.y = s, t;
}
var le = ["Polyconic", "poly"];
const fe = {
  init: re,
  forward: ne,
  inverse: oe,
  names: le
};
function ue() {
  this.A = [], this.A[1] = 0.6399175073, this.A[2] = -0.1358797613, this.A[3] = 0.063294409, this.A[4] = -0.02526853, this.A[5] = 0.0117879, this.A[6] = -55161e-7, this.A[7] = 26906e-7, this.A[8] = -1333e-6, this.A[9] = 67e-5, this.A[10] = -34e-5, this.B_re = [], this.B_im = [], this.B_re[1] = 0.7557853228, this.B_im[1] = 0, this.B_re[2] = 0.249204646, this.B_im[2] = 3371507e-9, this.B_re[3] = -1541739e-9, this.B_im[3] = 0.04105856, this.B_re[4] = -0.10162907, this.B_im[4] = 0.01727609, this.B_re[5] = -0.26623489, this.B_im[5] = -0.36249218, this.B_re[6] = -0.6870983, this.B_im[6] = -1.1651967, this.C_re = [], this.C_im = [], this.C_re[1] = 1.3231270439, this.C_im[1] = 0, this.C_re[2] = -0.577245789, this.C_im[2] = -7809598e-9, this.C_re[3] = 0.508307513, this.C_im[3] = -0.112208952, this.C_re[4] = -0.15094762, this.C_im[4] = 0.18200602, this.C_re[5] = 1.01418179, this.C_im[5] = 1.64497696, this.C_re[6] = 1.9660549, this.C_im[6] = 2.5127645, this.D = [], this.D[1] = 1.5627014243, this.D[2] = 0.5185406398, this.D[3] = -0.03333098, this.D[4] = -0.1052906, this.D[5] = -0.0368594, this.D[6] = 7317e-6, this.D[7] = 0.0122, this.D[8] = 394e-5, this.D[9] = -13e-4;
}
function ce(t) {
  var a, s = t.x, h = t.y, i = h - this.lat0, e = s - this.long0, n = i / _t * 1e-5, r = e, o = 1, l = 0;
  for (a = 1; a <= 10; a++)
    o = o * n, l = l + this.A[a] * o;
  var u = l, f = r, c = 1, v = 0, M, m, y = 0, x = 0;
  for (a = 1; a <= 6; a++)
    M = c * u - v * f, m = v * u + c * f, c = M, v = m, y = y + this.B_re[a] * c - this.B_im[a] * v, x = x + this.B_im[a] * c + this.B_re[a] * v;
  return t.x = x * this.a + this.x0, t.y = y * this.a + this.y0, t;
}
function Me(t) {
  var a, s = t.x, h = t.y, i = s - this.x0, e = h - this.y0, n = e / this.a, r = i / this.a, o = 1, l = 0, u, f, c = 0, v = 0;
  for (a = 1; a <= 6; a++)
    u = o * n - l * r, f = l * n + o * r, o = u, l = f, c = c + this.C_re[a] * o - this.C_im[a] * l, v = v + this.C_im[a] * o + this.C_re[a] * l;
  for (var M = 0; M < this.iterations; M++) {
    var m = c, y = v, x, b, E = n, P = r;
    for (a = 2; a <= 6; a++)
      x = m * c - y * v, b = y * c + m * v, m = x, y = b, E = E + (a - 1) * (this.B_re[a] * m - this.B_im[a] * y), P = P + (a - 1) * (this.B_im[a] * m + this.B_re[a] * y);
    m = 1, y = 0;
    var A = this.B_re[1], C = this.B_im[1];
    for (a = 2; a <= 6; a++)
      x = m * c - y * v, b = y * c + m * v, m = x, y = b, A = A + a * (this.B_re[a] * m - this.B_im[a] * y), C = C + a * (this.B_im[a] * m + this.B_re[a] * y);
    var G = A * A + C * C;
    c = (E * A + P * C) / G, v = (P * A - E * C) / G;
  }
  var O = c, j = v, tt = 1, at = 0;
  for (a = 1; a <= 9; a++)
    tt = tt * O, at = at + this.D[a] * tt;
  var qt = this.lat0 + at * _t * 1e5, Ha = this.long0 + j;
  return t.x = Ha, t.y = qt, t;
}
var ve = ["New_Zealand_Map_Grid", "nzmg"];
const de = {
  init: ue,
  forward: ce,
  inverse: Me,
  names: ve
};
function me() {
}
function ye(t) {
  var a = t.x, s = t.y, h = g(a - this.long0), i = this.x0 + this.a * h, e = this.y0 + this.a * Math.log(Math.tan(Math.PI / 4 + s / 2.5)) * 1.25;
  return t.x = i, t.y = e, t;
}
function _e(t) {
  t.x -= this.x0, t.y -= this.y0;
  var a = g(this.long0 + t.x / this.a), s = 2.5 * (Math.atan(Math.exp(0.8 * t.y / this.a)) - Math.PI / 4);
  return t.x = a, t.y = s, t;
}
var ge = ["Miller_Cylindrical", "mill"];
const xe = {
  init: me,
  forward: ye,
  inverse: _e,
  names: ge
};
var be = 20;
function Ne() {
  this.sphere ? (this.n = 1, this.m = 0, this.es = 0, this.C_y = Math.sqrt((this.m + 1) / this.n), this.C_x = this.C_y / (this.m + 1)) : this.en = aa(this.es);
}
function Ee(t) {
  var a, s, h = t.x, i = t.y;
  if (h = g(h - this.long0), this.sphere) {
    if (!this.m)
      i = this.n !== 1 ? Math.asin(this.n * Math.sin(i)) : i;
    else
      for (var e = this.n * Math.sin(i), n = be; n; --n) {
        var r = (this.m * i + Math.sin(i) - e) / (this.m + Math.cos(i));
        if (i -= r, Math.abs(r) < _)
          break;
      }
    a = this.a * this.C_x * h * (this.m + Math.cos(i)), s = this.a * this.C_y * i;
  } else {
    var o = Math.sin(i), l = Math.cos(i);
    s = this.a * Mt(i, o, l, this.en), a = this.a * h * l / Math.sqrt(1 - this.es * o * o);
  }
  return t.x = a, t.y = s, t;
}
function Ae(t) {
  var a, s, h, i;
  return t.x -= this.x0, h = t.x / this.a, t.y -= this.y0, a = t.y / this.a, this.sphere ? (a /= this.C_y, h = h / (this.C_x * (this.m + Math.cos(a))), this.m ? a = Z((this.m * a + Math.sin(a)) / this.n) : this.n !== 1 && (a = Z(Math.sin(a) / this.n)), h = g(h + this.long0), a = Y(a)) : (a = sa(t.y / this.a, this.es, this.en), i = Math.abs(a), i < d ? (i = Math.sin(a), s = this.long0 + t.x * Math.sqrt(1 - this.es * i * i) / (this.a * Math.cos(a)), h = g(s)) : i - _ < d && (h = this.long0)), t.x = h, t.y = a, t;
}
var Ce = ["Sinusoidal", "sinu"];
const Se = {
  init: Ne,
  forward: Ee,
  inverse: Ae,
  names: Ce
};
function we() {
}
function Pe(t) {
  for (var a = t.x, s = t.y, h = g(a - this.long0), i = s, e = Math.PI * Math.sin(s); ; ) {
    var n = -(i + Math.sin(i) - e) / (1 + Math.cos(i));
    if (i += n, Math.abs(n) < _)
      break;
  }
  i /= 2, Math.PI / 2 - Math.abs(s) < _ && (h = 0);
  var r = 0.900316316158 * this.a * h * Math.cos(i) + this.x0, o = 1.4142135623731 * this.a * Math.sin(i) + this.y0;
  return t.x = r, t.y = o, t;
}
function Ie(t) {
  var a, s;
  t.x -= this.x0, t.y -= this.y0, s = t.y / (1.4142135623731 * this.a), Math.abs(s) > 0.999999999999 && (s = 0.999999999999), a = Math.asin(s);
  var h = g(this.long0 + t.x / (0.900316316158 * this.a * Math.cos(a)));
  h < -Math.PI && (h = -Math.PI), h > Math.PI && (h = Math.PI), s = (2 * a + Math.sin(2 * a)) / Math.PI, Math.abs(s) > 1 && (s = 1);
  var i = Math.asin(s);
  return t.x = h, t.y = i, t;
}
var Oe = ["Mollweide", "moll"];
const Re = {
  init: we,
  forward: Pe,
  inverse: Ie,
  names: Oe
};
function qe() {
  Math.abs(this.lat1 + this.lat2) < _ || (this.lat2 = this.lat2 || this.lat1, this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e = Math.sqrt(this.es), this.e0 = Pt(this.es), this.e1 = It(this.es), this.e2 = Ot(this.es), this.e3 = Rt(this.es), this.sinphi = Math.sin(this.lat1), this.cosphi = Math.cos(this.lat1), this.ms1 = H(this.e, this.sinphi, this.cosphi), this.ml1 = k(this.e0, this.e1, this.e2, this.e3, this.lat1), Math.abs(this.lat1 - this.lat2) < _ ? this.ns = this.sinphi : (this.sinphi = Math.sin(this.lat2), this.cosphi = Math.cos(this.lat2), this.ms2 = H(this.e, this.sinphi, this.cosphi), this.ml2 = k(this.e0, this.e1, this.e2, this.e3, this.lat2), this.ns = (this.ms1 - this.ms2) / (this.ml2 - this.ml1)), this.g = this.ml1 + this.ms1 / this.ns, this.ml0 = k(this.e0, this.e1, this.e2, this.e3, this.lat0), this.rh = this.a * (this.g - this.ml0));
}
function Te(t) {
  var a = t.x, s = t.y, h;
  if (this.sphere)
    h = this.a * (this.g - s);
  else {
    var i = k(this.e0, this.e1, this.e2, this.e3, s);
    h = this.a * (this.g - i);
  }
  var e = this.ns * g(a - this.long0), n = this.x0 + h * Math.sin(e), r = this.y0 + this.rh - h * Math.cos(e);
  return t.x = n, t.y = r, t;
}
function Le(t) {
  t.x -= this.x0, t.y = this.rh - t.y + this.y0;
  var a, s, h, i;
  this.ns >= 0 ? (s = Math.sqrt(t.x * t.x + t.y * t.y), a = 1) : (s = -Math.sqrt(t.x * t.x + t.y * t.y), a = -1);
  var e = 0;
  if (s !== 0 && (e = Math.atan2(a * t.x, a * t.y)), this.sphere)
    return i = g(this.long0 + e / this.ns), h = Y(this.g - s / this.a), t.x = i, t.y = h, t;
  var n = this.g - s / this.a;
  return h = pt(n, this.e0, this.e1, this.e2, this.e3), i = g(this.long0 + e / this.ns), t.x = i, t.y = h, t;
}
var Ge = ["Equidistant_Conic", "eqdc"];
const $e = {
  init: qe,
  forward: Te,
  inverse: Le,
  names: Ge
};
function ze() {
  this.R = this.a;
}
function ke(t) {
  var a = t.x, s = t.y, h = g(a - this.long0), i, e;
  Math.abs(s) <= _ && (i = this.x0 + this.R * h, e = this.y0);
  var n = Z(2 * Math.abs(s / Math.PI));
  (Math.abs(h) <= _ || Math.abs(Math.abs(s) - d) <= _) && (i = this.x0, s >= 0 ? e = this.y0 + Math.PI * this.R * Math.tan(0.5 * n) : e = this.y0 + Math.PI * this.R * -Math.tan(0.5 * n));
  var r = 0.5 * Math.abs(Math.PI / h - h / Math.PI), o = r * r, l = Math.sin(n), u = Math.cos(n), f = u / (l + u - 1), c = f * f, v = f * (2 / l - 1), M = v * v, m = Math.PI * this.R * (r * (f - M) + Math.sqrt(o * (f - M) * (f - M) - (M + o) * (c - M))) / (M + o);
  h < 0 && (m = -m), i = this.x0 + m;
  var y = o + f;
  return m = Math.PI * this.R * (v * y - r * Math.sqrt((M + o) * (o + 1) - y * y)) / (M + o), s >= 0 ? e = this.y0 + m : e = this.y0 - m, t.x = i, t.y = e, t;
}
function Be(t) {
  var a, s, h, i, e, n, r, o, l, u, f, c, v;
  return t.x -= this.x0, t.y -= this.y0, f = Math.PI * this.R, h = t.x / f, i = t.y / f, e = h * h + i * i, n = -Math.abs(i) * (1 + e), r = n - 2 * i * i + h * h, o = -2 * n + 1 + 2 * i * i + e * e, v = i * i / o + (2 * r * r * r / o / o / o - 9 * n * r / o / o) / 27, l = (n - r * r / 3 / o) / o, u = 2 * Math.sqrt(-l / 3), f = 3 * v / l / u, Math.abs(f) > 1 && (f >= 0 ? f = 1 : f = -1), c = Math.acos(f) / 3, t.y >= 0 ? s = (-u * Math.cos(c + Math.PI / 3) - r / 3 / o) * Math.PI : s = -(-u * Math.cos(c + Math.PI / 3) - r / 3 / o) * Math.PI, Math.abs(h) < _ ? a = this.long0 : a = g(this.long0 + Math.PI * (e - 1 + Math.sqrt(1 + 2 * (h * h - i * i) + e * e)) / 2 / h), t.x = a, t.y = s, t;
}
var De = ["Van_der_Grinten_I", "VanDerGrinten", "vandg"];
const pe = {
  init: ze,
  forward: ke,
  inverse: Be,
  names: De
};
function Ue() {
  this.sin_p12 = Math.sin(this.lat0), this.cos_p12 = Math.cos(this.lat0);
}
function Fe(t) {
  var a = t.x, s = t.y, h = Math.sin(t.y), i = Math.cos(t.y), e = g(a - this.long0), n, r, o, l, u, f, c, v, M, m, y, x, b, E, P, A, C, G, O, j, tt, at, qt;
  return this.sphere ? Math.abs(this.sin_p12 - 1) <= _ ? (t.x = this.x0 + this.a * (d - s) * Math.sin(e), t.y = this.y0 - this.a * (d - s) * Math.cos(e), t) : Math.abs(this.sin_p12 + 1) <= _ ? (t.x = this.x0 + this.a * (d + s) * Math.sin(e), t.y = this.y0 + this.a * (d + s) * Math.cos(e), t) : (G = this.sin_p12 * h + this.cos_p12 * i * Math.cos(e), A = Math.acos(G), C = A ? A / Math.sin(A) : 1, t.x = this.x0 + this.a * C * i * Math.sin(e), t.y = this.y0 + this.a * C * (this.cos_p12 * h - this.sin_p12 * i * Math.cos(e)), t) : (n = Pt(this.es), r = It(this.es), o = Ot(this.es), l = Rt(this.es), Math.abs(this.sin_p12 - 1) <= _ ? (u = this.a * k(n, r, o, l, d), f = this.a * k(n, r, o, l, s), t.x = this.x0 + (u - f) * Math.sin(e), t.y = this.y0 - (u - f) * Math.cos(e), t) : Math.abs(this.sin_p12 + 1) <= _ ? (u = this.a * k(n, r, o, l, d), f = this.a * k(n, r, o, l, s), t.x = this.x0 + (u + f) * Math.sin(e), t.y = this.y0 + (u + f) * Math.cos(e), t) : (c = h / i, v = ct(this.a, this.e, this.sin_p12), M = ct(this.a, this.e, h), m = Math.atan((1 - this.es) * c + this.es * v * this.sin_p12 / (M * i)), y = Math.atan2(Math.sin(e), this.cos_p12 * Math.tan(m) - this.sin_p12 * Math.cos(e)), y === 0 ? O = Math.asin(this.cos_p12 * Math.sin(m) - this.sin_p12 * Math.cos(m)) : Math.abs(Math.abs(y) - Math.PI) <= _ ? O = -Math.asin(this.cos_p12 * Math.sin(m) - this.sin_p12 * Math.cos(m)) : O = Math.asin(Math.sin(e) * Math.cos(m) / Math.sin(y)), x = this.e * this.sin_p12 / Math.sqrt(1 - this.es), b = this.e * this.cos_p12 * Math.cos(y) / Math.sqrt(1 - this.es), E = x * b, P = b * b, j = O * O, tt = j * O, at = tt * O, qt = at * O, A = v * O * (1 - j * P * (1 - P) / 6 + tt / 8 * E * (1 - 2 * P) + at / 120 * (P * (4 - 7 * P) - 3 * x * x * (1 - 7 * P)) - qt / 48 * E), t.x = this.x0 + A * Math.sin(y), t.y = this.y0 + A * Math.cos(y), t));
}
function je(t) {
  t.x -= this.x0, t.y -= this.y0;
  var a, s, h, i, e, n, r, o, l, u, f, c, v, M, m, y, x, b, E, P, A, C, G, O;
  return this.sphere ? (a = Math.sqrt(t.x * t.x + t.y * t.y), a > 2 * d * this.a ? void 0 : (s = a / this.a, h = Math.sin(s), i = Math.cos(s), e = this.long0, Math.abs(a) <= _ ? n = this.lat0 : (n = Z(i * this.sin_p12 + t.y * h * this.cos_p12 / a), r = Math.abs(this.lat0) - d, Math.abs(r) <= _ ? this.lat0 >= 0 ? e = g(this.long0 + Math.atan2(t.x, -t.y)) : e = g(this.long0 - Math.atan2(-t.x, t.y)) : e = g(this.long0 + Math.atan2(t.x * h, a * this.cos_p12 * i - t.y * this.sin_p12 * h))), t.x = e, t.y = n, t)) : (o = Pt(this.es), l = It(this.es), u = Ot(this.es), f = Rt(this.es), Math.abs(this.sin_p12 - 1) <= _ ? (c = this.a * k(o, l, u, f, d), a = Math.sqrt(t.x * t.x + t.y * t.y), v = c - a, n = pt(v / this.a, o, l, u, f), e = g(this.long0 + Math.atan2(t.x, -1 * t.y)), t.x = e, t.y = n, t) : Math.abs(this.sin_p12 + 1) <= _ ? (c = this.a * k(o, l, u, f, d), a = Math.sqrt(t.x * t.x + t.y * t.y), v = a - c, n = pt(v / this.a, o, l, u, f), e = g(this.long0 + Math.atan2(t.x, t.y)), t.x = e, t.y = n, t) : (a = Math.sqrt(t.x * t.x + t.y * t.y), y = Math.atan2(t.x, t.y), M = ct(this.a, this.e, this.sin_p12), x = Math.cos(y), b = this.e * this.cos_p12 * x, E = -b * b / (1 - this.es), P = 3 * this.es * (1 - E) * this.sin_p12 * this.cos_p12 * x / (1 - this.es), A = a / M, C = A - E * (1 + E) * Math.pow(A, 3) / 6 - P * (1 + 3 * E) * Math.pow(A, 4) / 24, G = 1 - E * C * C / 2 - A * C * C * C / 6, m = Math.asin(this.sin_p12 * Math.cos(C) + this.cos_p12 * Math.sin(C) * x), e = g(this.long0 + Math.asin(Math.sin(y) * Math.sin(C) / Math.cos(m))), O = Math.sin(m), n = Math.atan2((O - this.es * G * this.sin_p12) * Math.tan(m), O * (1 - this.es)), t.x = e, t.y = n, t));
}
var Qe = ["Azimuthal_Equidistant", "aeqd"];
const We = {
  init: Ue,
  forward: Fe,
  inverse: je,
  names: Qe
};
function Xe() {
  this.sin_p14 = Math.sin(this.lat0), this.cos_p14 = Math.cos(this.lat0);
}
function He(t) {
  var a, s, h, i, e, n, r, o, l = t.x, u = t.y;
  return h = g(l - this.long0), a = Math.sin(u), s = Math.cos(u), i = Math.cos(h), n = this.sin_p14 * a + this.cos_p14 * s * i, e = 1, (n > 0 || Math.abs(n) <= _) && (r = this.a * e * s * Math.sin(h), o = this.y0 + this.a * e * (this.cos_p14 * a - this.sin_p14 * s * i)), t.x = r, t.y = o, t;
}
function Ke(t) {
  var a, s, h, i, e, n, r;
  return t.x -= this.x0, t.y -= this.y0, a = Math.sqrt(t.x * t.x + t.y * t.y), s = Z(a / this.a), h = Math.sin(s), i = Math.cos(s), n = this.long0, Math.abs(a) <= _ ? (r = this.lat0, t.x = n, t.y = r, t) : (r = Z(i * this.sin_p14 + t.y * h * this.cos_p14 / a), e = Math.abs(this.lat0) - d, Math.abs(e) <= _ ? (this.lat0 >= 0 ? n = g(this.long0 + Math.atan2(t.x, -t.y)) : n = g(this.long0 - Math.atan2(-t.x, t.y)), t.x = n, t.y = r, t) : (n = g(this.long0 + Math.atan2(t.x * h, a * this.cos_p14 * i - t.y * this.sin_p14 * h)), t.x = n, t.y = r, t));
}
var Je = ["ortho"];
const Ve = {
  init: Xe,
  forward: He,
  inverse: Ke,
  names: Je
};
var I = {
  FRONT: 1,
  RIGHT: 2,
  BACK: 3,
  LEFT: 4,
  TOP: 5,
  BOTTOM: 6
}, w = {
  AREA_0: 1,
  AREA_1: 2,
  AREA_2: 3,
  AREA_3: 4
};
function Ze() {
  this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.lat_ts = this.lat_ts || 0, this.title = this.title || "Quadrilateralized Spherical Cube", this.lat0 >= d - S / 2 ? this.face = I.TOP : this.lat0 <= -(d - S / 2) ? this.face = I.BOTTOM : Math.abs(this.long0) <= S ? this.face = I.FRONT : Math.abs(this.long0) <= d + S ? this.face = this.long0 > 0 ? I.RIGHT : I.LEFT : this.face = I.BACK, this.es !== 0 && (this.one_minus_f = 1 - (this.a - this.b) / this.a, this.one_minus_f_squared = this.one_minus_f * this.one_minus_f);
}
function Ye(t) {
  var a = { x: 0, y: 0 }, s, h, i, e, n, r, o = { value: 0 };
  if (t.x -= this.long0, this.es !== 0 ? s = Math.atan(this.one_minus_f_squared * Math.tan(t.y)) : s = t.y, h = t.x, this.face === I.TOP)
    e = d - s, h >= S && h <= d + S ? (o.value = w.AREA_0, i = h - d) : h > d + S || h <= -(d + S) ? (o.value = w.AREA_1, i = h > 0 ? h - R : h + R) : h > -(d + S) && h <= -S ? (o.value = w.AREA_2, i = h + d) : (o.value = w.AREA_3, i = h);
  else if (this.face === I.BOTTOM)
    e = d + s, h >= S && h <= d + S ? (o.value = w.AREA_0, i = -h + d) : h < S && h >= -S ? (o.value = w.AREA_1, i = -h) : h < -S && h >= -(d + S) ? (o.value = w.AREA_2, i = -h - d) : (o.value = w.AREA_3, i = h > 0 ? -h + R : -h - R);
  else {
    var l, u, f, c, v, M, m;
    this.face === I.RIGHT ? h = ft(h, +d) : this.face === I.BACK ? h = ft(h, +R) : this.face === I.LEFT && (h = ft(h, -d)), c = Math.sin(s), v = Math.cos(s), M = Math.sin(h), m = Math.cos(h), l = v * m, u = v * M, f = c, this.face === I.FRONT ? (e = Math.acos(l), i = Lt(e, f, u, o)) : this.face === I.RIGHT ? (e = Math.acos(u), i = Lt(e, f, -l, o)) : this.face === I.BACK ? (e = Math.acos(-l), i = Lt(e, f, -u, o)) : this.face === I.LEFT ? (e = Math.acos(-u), i = Lt(e, f, l, o)) : (e = i = 0, o.value = w.AREA_0);
  }
  return r = Math.atan(12 / R * (i + Math.acos(Math.sin(i) * Math.cos(S)) - d)), n = Math.sqrt((1 - Math.cos(e)) / (Math.cos(r) * Math.cos(r)) / (1 - Math.cos(Math.atan(1 / Math.cos(i))))), o.value === w.AREA_1 ? r += d : o.value === w.AREA_2 ? r += R : o.value === w.AREA_3 && (r += 1.5 * R), a.x = n * Math.cos(r), a.y = n * Math.sin(r), a.x = a.x * this.a + this.x0, a.y = a.y * this.a + this.y0, t.x = a.x, t.y = a.y, t;
}
function tr(t) {
  var a = { lam: 0, phi: 0 }, s, h, i, e, n, r, o, l, u, f = { value: 0 };
  if (t.x = (t.x - this.x0) / this.a, t.y = (t.y - this.y0) / this.a, h = Math.atan(Math.sqrt(t.x * t.x + t.y * t.y)), s = Math.atan2(t.y, t.x), t.x >= 0 && t.x >= Math.abs(t.y) ? f.value = w.AREA_0 : t.y >= 0 && t.y >= Math.abs(t.x) ? (f.value = w.AREA_1, s -= d) : t.x < 0 && -t.x >= Math.abs(t.y) ? (f.value = w.AREA_2, s = s < 0 ? s + R : s - R) : (f.value = w.AREA_3, s += d), u = R / 12 * Math.tan(s), n = Math.sin(u) / (Math.cos(u) - 1 / Math.sqrt(2)), r = Math.atan(n), i = Math.cos(s), e = Math.tan(h), o = 1 - i * i * e * e * (1 - Math.cos(Math.atan(1 / Math.cos(r)))), o < -1 ? o = -1 : o > 1 && (o = 1), this.face === I.TOP)
    l = Math.acos(o), a.phi = d - l, f.value === w.AREA_0 ? a.lam = r + d : f.value === w.AREA_1 ? a.lam = r < 0 ? r + R : r - R : f.value === w.AREA_2 ? a.lam = r - d : a.lam = r;
  else if (this.face === I.BOTTOM)
    l = Math.acos(o), a.phi = l - d, f.value === w.AREA_0 ? a.lam = -r + d : f.value === w.AREA_1 ? a.lam = -r : f.value === w.AREA_2 ? a.lam = -r - d : a.lam = r < 0 ? -r - R : -r + R;
  else {
    var c, v, M;
    c = o, u = c * c, u >= 1 ? M = 0 : M = Math.sqrt(1 - u) * Math.sin(r), u += M * M, u >= 1 ? v = 0 : v = Math.sqrt(1 - u), f.value === w.AREA_1 ? (u = v, v = -M, M = u) : f.value === w.AREA_2 ? (v = -v, M = -M) : f.value === w.AREA_3 && (u = v, v = M, M = -u), this.face === I.RIGHT ? (u = c, c = -v, v = u) : this.face === I.BACK ? (c = -c, v = -v) : this.face === I.LEFT && (u = c, c = v, v = -u), a.phi = Math.acos(-M) - d, a.lam = Math.atan2(v, c), this.face === I.RIGHT ? a.lam = ft(a.lam, -d) : this.face === I.BACK ? a.lam = ft(a.lam, -R) : this.face === I.LEFT && (a.lam = ft(a.lam, +d));
  }
  if (this.es !== 0) {
    var m, y, x;
    m = a.phi < 0 ? 1 : 0, y = Math.tan(a.phi), x = this.b / Math.sqrt(y * y + this.one_minus_f_squared), a.phi = Math.atan(Math.sqrt(this.a * this.a - x * x) / (this.one_minus_f * x)), m && (a.phi = -a.phi);
  }
  return a.lam += this.long0, t.x = a.lam, t.y = a.phi, t;
}
function Lt(t, a, s, h) {
  var i;
  return t < _ ? (h.value = w.AREA_0, i = 0) : (i = Math.atan2(a, s), Math.abs(i) <= S ? h.value = w.AREA_0 : i > S && i <= d + S ? (h.value = w.AREA_1, i -= d) : i > d + S || i <= -(d + S) ? (h.value = w.AREA_2, i = i >= 0 ? i - R : i + R) : (h.value = w.AREA_3, i += d)), i;
}
function ft(t, a) {
  var s = t + a;
  return s < -R ? s += Et : s > +R && (s -= Et), s;
}
var ar = ["Quadrilateralized Spherical Cube", "Quadrilateralized_Spherical_Cube", "qsc"];
const sr = {
  init: Ze,
  forward: Ye,
  inverse: tr,
  names: ar
};
var Zt = [
  [1, 22199e-21, -715515e-10, 31103e-10],
  [0.9986, -482243e-9, -24897e-9, -13309e-10],
  [0.9954, -83103e-8, -448605e-10, -986701e-12],
  [0.99, -135364e-8, -59661e-9, 36777e-10],
  [0.9822, -167442e-8, -449547e-11, -572411e-11],
  [0.973, -214868e-8, -903571e-10, 18736e-12],
  [0.96, -305085e-8, -900761e-10, 164917e-11],
  [0.9427, -382792e-8, -653386e-10, -26154e-10],
  [0.9216, -467746e-8, -10457e-8, 481243e-11],
  [0.8962, -536223e-8, -323831e-10, -543432e-11],
  [0.8679, -609363e-8, -113898e-9, 332484e-11],
  [0.835, -698325e-8, -640253e-10, 934959e-12],
  [0.7986, -755338e-8, -500009e-10, 935324e-12],
  [0.7597, -798324e-8, -35971e-9, -227626e-11],
  [0.7186, -851367e-8, -701149e-10, -86303e-10],
  [0.6732, -986209e-8, -199569e-9, 191974e-10],
  [0.6213, -0.010418, 883923e-10, 624051e-11],
  [0.5722, -906601e-8, 182e-6, 624051e-11],
  [0.5322, -677797e-8, 275608e-9, 624051e-11]
], yt = [
  [-520417e-23, 0.0124, 121431e-23, -845284e-16],
  [0.062, 0.0124, -126793e-14, 422642e-15],
  [0.124, 0.0124, 507171e-14, -160604e-14],
  [0.186, 0.0123999, -190189e-13, 600152e-14],
  [0.248, 0.0124002, 710039e-13, -224e-10],
  [0.31, 0.0123992, -264997e-12, 835986e-13],
  [0.372, 0.0124029, 988983e-12, -311994e-12],
  [0.434, 0.0123893, -369093e-11, -435621e-12],
  [0.4958, 0.0123198, -102252e-10, -345523e-12],
  [0.5571, 0.0121916, -154081e-10, -582288e-12],
  [0.6176, 0.0119938, -241424e-10, -525327e-12],
  [0.6769, 0.011713, -320223e-10, -516405e-12],
  [0.7346, 0.0113541, -397684e-10, -609052e-12],
  [0.7903, 0.0109107, -489042e-10, -104739e-11],
  [0.8435, 0.0103431, -64615e-9, -140374e-14],
  [0.8936, 969686e-8, -64636e-9, -8547e-9],
  [0.9394, 840947e-8, -192841e-9, -42106e-10],
  [0.9761, 616527e-8, -256e-6, -42106e-10],
  [1, 328947e-8, -319159e-9, -42106e-10]
], Fa = 0.8487, ja = 1.3523, Qa = W / 5, ir = 1 / Qa, ot = 18, Ut = function(t, a) {
  return t[0] + a * (t[1] + a * (t[2] + a * t[3]));
}, hr = function(t, a) {
  return t[1] + a * (2 * t[2] + a * 3 * t[3]);
};
function er(t, a, s, h) {
  for (var i = a; h; --h) {
    var e = t(i);
    if (i -= e, Math.abs(e) < s)
      break;
  }
  return i;
}
function rr() {
  this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.long0 = this.long0 || 0, this.es = 0, this.title = this.title || "Robinson";
}
function nr(t) {
  var a = g(t.x - this.long0), s = Math.abs(t.y), h = Math.floor(s * Qa);
  h < 0 ? h = 0 : h >= ot && (h = ot - 1), s = W * (s - ir * h);
  var i = {
    x: Ut(Zt[h], s) * a,
    y: Ut(yt[h], s)
  };
  return t.y < 0 && (i.y = -i.y), i.x = i.x * this.a * Fa + this.x0, i.y = i.y * this.a * ja + this.y0, i;
}
function or(t) {
  var a = {
    x: (t.x - this.x0) / (this.a * Fa),
    y: Math.abs(t.y - this.y0) / (this.a * ja)
  };
  if (a.y >= 1)
    a.x /= Zt[ot][0], a.y = t.y < 0 ? -d : d;
  else {
    var s = Math.floor(a.y * ot);
    for (s < 0 ? s = 0 : s >= ot && (s = ot - 1); ; )
      if (yt[s][0] > a.y)
        --s;
      else if (yt[s + 1][0] <= a.y)
        ++s;
      else
        break;
    var h = yt[s], i = 5 * (a.y - h[0]) / (yt[s + 1][0] - h[0]);
    i = er(function(e) {
      return (Ut(h, e) - a.y) / hr(h, e);
    }, i, _, 100), a.x /= Ut(Zt[s], i), a.y = (5 * s + i) * L, t.y < 0 && (a.y = -a.y);
  }
  return a.x = g(a.x + this.long0), a;
}
var lr = ["Robinson", "robin"];
const fr = {
  init: rr,
  forward: nr,
  inverse: or,
  names: lr
};
function ur() {
  this.name = "geocent";
}
function cr(t) {
  var a = qa(t, this.es, this.a);
  return a;
}
function Mr(t) {
  var a = Ta(t, this.es, this.a, this.b);
  return a;
}
var vr = ["Geocentric", "geocentric", "geocent", "Geocent"];
const dr = {
  init: ur,
  forward: cr,
  inverse: Mr,
  names: vr
};
var $ = {
  N_POLE: 0,
  S_POLE: 1,
  EQUIT: 2,
  OBLIQ: 3
}, vt = {
  h: { def: 1e5, num: !0 },
  // default is Karman line, no default in PROJ.7
  azi: { def: 0, num: !0, degrees: !0 },
  // default is North
  tilt: { def: 0, num: !0, degrees: !0 },
  // default is Nadir
  long0: { def: 0, num: !0 },
  // default is Greenwich, conversion to rad is automatic
  lat0: { def: 0, num: !0 }
  // default is Equator, conversion to rad is automatic
};
function mr() {
  if (Object.keys(vt).forEach((function(s) {
    if (typeof this[s] > "u")
      this[s] = vt[s].def;
    else {
      if (vt[s].num && isNaN(this[s]))
        throw new Error("Invalid parameter value, must be numeric " + s + " = " + this[s]);
      vt[s].num && (this[s] = parseFloat(this[s]));
    }
    vt[s].degrees && (this[s] = this[s] * L);
  }).bind(this)), Math.abs(Math.abs(this.lat0) - d) < _ ? this.mode = this.lat0 < 0 ? $.S_POLE : $.N_POLE : Math.abs(this.lat0) < _ ? this.mode = $.EQUIT : (this.mode = $.OBLIQ, this.sinph0 = Math.sin(this.lat0), this.cosph0 = Math.cos(this.lat0)), this.pn1 = this.h / this.a, this.pn1 <= 0 || this.pn1 > 1e10)
    throw new Error("Invalid height");
  this.p = 1 + this.pn1, this.rp = 1 / this.p, this.h1 = 1 / this.pn1, this.pfact = (this.p + 1) * this.h1, this.es = 0;
  var t = this.tilt, a = this.azi;
  this.cg = Math.cos(a), this.sg = Math.sin(a), this.cw = Math.cos(t), this.sw = Math.sin(t);
}
function yr(t) {
  t.x -= this.long0;
  var a = Math.sin(t.y), s = Math.cos(t.y), h = Math.cos(t.x), i, e;
  switch (this.mode) {
    case $.OBLIQ:
      e = this.sinph0 * a + this.cosph0 * s * h;
      break;
    case $.EQUIT:
      e = s * h;
      break;
    case $.S_POLE:
      e = -a;
      break;
    case $.N_POLE:
      e = a;
      break;
  }
  switch (e = this.pn1 / (this.p - e), i = e * s * Math.sin(t.x), this.mode) {
    case $.OBLIQ:
      e *= this.cosph0 * a - this.sinph0 * s * h;
      break;
    case $.EQUIT:
      e *= a;
      break;
    case $.N_POLE:
      e *= -(s * h);
      break;
    case $.S_POLE:
      e *= s * h;
      break;
  }
  var n, r;
  return n = e * this.cg + i * this.sg, r = 1 / (n * this.sw * this.h1 + this.cw), i = (i * this.cg - e * this.sg) * this.cw * r, e = n * r, t.x = i * this.a, t.y = e * this.a, t;
}
function _r(t) {
  t.x /= this.a, t.y /= this.a;
  var a = { x: t.x, y: t.y }, s, h, i;
  i = 1 / (this.pn1 - t.y * this.sw), s = this.pn1 * t.x * i, h = this.pn1 * t.y * this.cw * i, t.x = s * this.cg + h * this.sg, t.y = h * this.cg - s * this.sg;
  var e = D(t.x, t.y);
  if (Math.abs(e) < _)
    a.x = 0, a.y = t.y;
  else {
    var n, r;
    switch (r = 1 - e * e * this.pfact, r = (this.p - Math.sqrt(r)) / (this.pn1 / e + e / this.pn1), n = Math.sqrt(1 - r * r), this.mode) {
      case $.OBLIQ:
        a.y = Math.asin(n * this.sinph0 + t.y * r * this.cosph0 / e), t.y = (n - this.sinph0 * Math.sin(a.y)) * e, t.x *= r * this.cosph0;
        break;
      case $.EQUIT:
        a.y = Math.asin(t.y * r / e), t.y = n * e, t.x *= r;
        break;
      case $.N_POLE:
        a.y = Math.asin(n), t.y = -t.y;
        break;
      case $.S_POLE:
        a.y = -Math.asin(n);
        break;
    }
    a.x = Math.atan2(t.x, t.y);
  }
  return t.x = a.x + this.long0, t.y = a.y, t;
}
var gr = ["Tilted_Perspective", "tpers"];
const xr = {
  init: mr,
  forward: yr,
  inverse: _r,
  names: gr
};
function br() {
  if (this.flip_axis = this.sweep === "x" ? 1 : 0, this.h = Number(this.h), this.radius_g_1 = this.h / this.a, this.radius_g_1 <= 0 || this.radius_g_1 > 1e10)
    throw new Error();
  if (this.radius_g = 1 + this.radius_g_1, this.C = this.radius_g * this.radius_g - 1, this.es !== 0) {
    var t = 1 - this.es, a = 1 / t;
    this.radius_p = Math.sqrt(t), this.radius_p2 = t, this.radius_p_inv2 = a, this.shape = "ellipse";
  } else
    this.radius_p = 1, this.radius_p2 = 1, this.radius_p_inv2 = 1, this.shape = "sphere";
  this.title || (this.title = "Geostationary Satellite View");
}
function Nr(t) {
  var a = t.x, s = t.y, h, i, e, n;
  if (a = a - this.long0, this.shape === "ellipse") {
    s = Math.atan(this.radius_p2 * Math.tan(s));
    var r = this.radius_p / D(this.radius_p * Math.cos(s), Math.sin(s));
    if (i = r * Math.cos(a) * Math.cos(s), e = r * Math.sin(a) * Math.cos(s), n = r * Math.sin(s), (this.radius_g - i) * i - e * e - n * n * this.radius_p_inv2 < 0)
      return t.x = Number.NaN, t.y = Number.NaN, t;
    h = this.radius_g - i, this.flip_axis ? (t.x = this.radius_g_1 * Math.atan(e / D(n, h)), t.y = this.radius_g_1 * Math.atan(n / h)) : (t.x = this.radius_g_1 * Math.atan(e / h), t.y = this.radius_g_1 * Math.atan(n / D(e, h)));
  } else this.shape === "sphere" && (h = Math.cos(s), i = Math.cos(a) * h, e = Math.sin(a) * h, n = Math.sin(s), h = this.radius_g - i, this.flip_axis ? (t.x = this.radius_g_1 * Math.atan(e / D(n, h)), t.y = this.radius_g_1 * Math.atan(n / h)) : (t.x = this.radius_g_1 * Math.atan(e / h), t.y = this.radius_g_1 * Math.atan(n / D(e, h))));
  return t.x = t.x * this.a, t.y = t.y * this.a, t;
}
function Er(t) {
  var a = -1, s = 0, h = 0, i, e, n, r;
  if (t.x = t.x / this.a, t.y = t.y / this.a, this.shape === "ellipse") {
    this.flip_axis ? (h = Math.tan(t.y / this.radius_g_1), s = Math.tan(t.x / this.radius_g_1) * D(1, h)) : (s = Math.tan(t.x / this.radius_g_1), h = Math.tan(t.y / this.radius_g_1) * D(1, s));
    var o = h / this.radius_p;
    if (i = s * s + o * o + a * a, e = 2 * this.radius_g * a, n = e * e - 4 * i * this.C, n < 0)
      return t.x = Number.NaN, t.y = Number.NaN, t;
    r = (-e - Math.sqrt(n)) / (2 * i), a = this.radius_g + r * a, s *= r, h *= r, t.x = Math.atan2(s, a), t.y = Math.atan(h * Math.cos(t.x) / a), t.y = Math.atan(this.radius_p_inv2 * Math.tan(t.y));
  } else if (this.shape === "sphere") {
    if (this.flip_axis ? (h = Math.tan(t.y / this.radius_g_1), s = Math.tan(t.x / this.radius_g_1) * Math.sqrt(1 + h * h)) : (s = Math.tan(t.x / this.radius_g_1), h = Math.tan(t.y / this.radius_g_1) * Math.sqrt(1 + s * s)), i = s * s + h * h + a * a, e = 2 * this.radius_g * a, n = e * e - 4 * i * this.C, n < 0)
      return t.x = Number.NaN, t.y = Number.NaN, t;
    r = (-e - Math.sqrt(n)) / (2 * i), a = this.radius_g + r * a, s *= r, h *= r, t.x = Math.atan2(s, a), t.y = Math.atan(h * Math.cos(t.x) / a);
  }
  return t.x = t.x + this.long0, t;
}
var Ar = ["Geostationary Satellite View", "Geostationary_Satellite", "geos"];
const Cr = {
  init: br,
  forward: Nr,
  inverse: Er,
  names: Ar
};
var gt = 1.340264, xt = -0.081106, bt = 893e-6, Nt = 3796e-6, Ft = Math.sqrt(3) / 2;
function Sr() {
  this.es = 0, this.long0 = this.long0 !== void 0 ? this.long0 : 0;
}
function wr(t) {
  var a = g(t.x - this.long0), s = t.y, h = Math.asin(Ft * Math.sin(s)), i = h * h, e = i * i * i;
  return t.x = a * Math.cos(h) / (Ft * (gt + 3 * xt * i + e * (7 * bt + 9 * Nt * i))), t.y = h * (gt + xt * i + e * (bt + Nt * i)), t.x = this.a * t.x + this.x0, t.y = this.a * t.y + this.y0, t;
}
function Pr(t) {
  t.x = (t.x - this.x0) / this.a, t.y = (t.y - this.y0) / this.a;
  var a = 1e-9, s = 12, h = t.y, i, e, n, r, o, l;
  for (l = 0; l < s && (i = h * h, e = i * i * i, n = h * (gt + xt * i + e * (bt + Nt * i)) - t.y, r = gt + 3 * xt * i + e * (7 * bt + 9 * Nt * i), h -= o = n / r, !(Math.abs(o) < a)); ++l)
    ;
  return i = h * h, e = i * i * i, t.x = Ft * t.x * (gt + 3 * xt * i + e * (7 * bt + 9 * Nt * i)) / Math.cos(h), t.y = Math.asin(Math.sin(h) / Ft), t.x = g(t.x + this.long0), t;
}
var Ir = ["eqearth", "Equal Earth", "Equal_Earth"];
const Or = {
  init: Sr,
  forward: wr,
  inverse: Pr,
  names: Ir
};
var St = 1e-10;
function Rr() {
  var t;
  if (this.phi1 = this.lat1, Math.abs(this.phi1) < St)
    throw new Error();
  this.es ? (this.en = aa(this.es), this.m1 = Mt(
    this.phi1,
    this.am1 = Math.sin(this.phi1),
    t = Math.cos(this.phi1),
    this.en
  ), this.am1 = t / (Math.sqrt(1 - this.es * this.am1 * this.am1) * this.am1), this.inverse = Tr, this.forward = qr) : (Math.abs(this.phi1) + St >= d ? this.cphi1 = 0 : this.cphi1 = 1 / Math.tan(this.phi1), this.inverse = Gr, this.forward = Lr);
}
function qr(t) {
  var a = g(t.x - (this.long0 || 0)), s = t.y, h, i, e;
  return h = this.am1 + this.m1 - Mt(s, i = Math.sin(s), e = Math.cos(s), this.en), i = e * a / (h * Math.sqrt(1 - this.es * i * i)), t.x = h * Math.sin(i), t.y = this.am1 - h * Math.cos(i), t.x = this.a * t.x + (this.x0 || 0), t.y = this.a * t.y + (this.y0 || 0), t;
}
function Tr(t) {
  t.x = (t.x - (this.x0 || 0)) / this.a, t.y = (t.y - (this.y0 || 0)) / this.a;
  var a, s, h, i;
  if (s = D(t.x, t.y = this.am1 - t.y), i = sa(this.am1 + this.m1 - s, this.es, this.en), (a = Math.abs(i)) < d)
    a = Math.sin(i), h = s * Math.atan2(t.x, t.y) * Math.sqrt(1 - this.es * a * a) / Math.cos(i);
  else if (Math.abs(a - d) <= St)
    h = 0;
  else
    throw new Error();
  return t.x = g(h + (this.long0 || 0)), t.y = Y(i), t;
}
function Lr(t) {
  var a = g(t.x - (this.long0 || 0)), s = t.y, h, i;
  return i = this.cphi1 + this.phi1 - s, Math.abs(i) > St ? (t.x = i * Math.sin(h = a * Math.cos(s) / i), t.y = this.cphi1 - i * Math.cos(h)) : t.x = t.y = 0, t.x = this.a * t.x + (this.x0 || 0), t.y = this.a * t.y + (this.y0 || 0), t;
}
function Gr(t) {
  t.x = (t.x - (this.x0 || 0)) / this.a, t.y = (t.y - (this.y0 || 0)) / this.a;
  var a, s, h = D(t.x, t.y = this.cphi1 - t.y);
  if (s = this.cphi1 + this.phi1 - h, Math.abs(s) > d)
    throw new Error();
  return Math.abs(Math.abs(s) - d) <= St ? a = 0 : a = h * Math.atan2(t.x, t.y) / Math.cos(s), t.x = g(a + (this.long0 || 0)), t.y = Y(s), t;
}
var $r = ["bonne", "Bonne (Werner lat_1=90)"];
const zr = {
  init: Rr,
  names: $r
};
function kr(t) {
  t.Proj.projections.add($t), t.Proj.projections.add(zt), t.Proj.projections.add(qi), t.Proj.projections.add(Ui), t.Proj.projections.add(Hi), t.Proj.projections.add(Yi), t.Proj.projections.add(eh), t.Proj.projections.add(fh), t.Proj.projections.add(dh), t.Proj.projections.add(xh), t.Proj.projections.add(zh), t.Proj.projections.add(Fh), t.Proj.projections.add(Hh), t.Proj.projections.add(te), t.Proj.projections.add(ee), t.Proj.projections.add(fe), t.Proj.projections.add(de), t.Proj.projections.add(xe), t.Proj.projections.add(Se), t.Proj.projections.add(Re), t.Proj.projections.add($e), t.Proj.projections.add(pe), t.Proj.projections.add(We), t.Proj.projections.add(Ve), t.Proj.projections.add(sr), t.Proj.projections.add(fr), t.Proj.projections.add(dr), t.Proj.projections.add(xr), t.Proj.projections.add(Cr), t.Proj.projections.add(Or), t.Proj.projections.add(zr);
}
q.defaultDatum = "WGS84";
q.Proj = X;
q.WGS84 = new q.Proj("WGS84");
q.Point = ut;
q.toPoint = La;
q.defs = z;
q.nadgrid = Ls;
q.transform = Dt;
q.mgrs = Js;
q.version = "__VERSION__";
kr(q);
q.defs("EPSG:8857", "+proj=eqearth +lon_0=0 +x_0=0 +y_0=0 +R=6371008.7714 +units=m +no_defs +type=crs");
const Wt = q("EPSG:4326"), Wa = q("EPSG:3857"), Xa = q("EPSG:8857"), jt = 200375083427892e-7 / 1724395906e-2;
function Br(t) {
  return q(Wt, Xa, t);
}
function Dr(t) {
  return q(Xa, Wt, t);
}
function pr(t) {
  const a = Br(t), s = [a[0] * jt, a[1] * jt];
  return q(Wa, Wt, s);
}
function Ur(t) {
  const a = q(Wt, Wa, t), s = [a[0] / jt, a[1] / jt];
  return Dr(s);
}
class jr {
  constructor(a, s) {
    this._map = a, this._zoomswitch = s, a.on("movestart", () => {
      this._zoomstart = this._map.getZoom();
    }), a.on("moveend", () => {
      this._zoomstart = this._map.getZoom();
    }), a.transformCameraUpdate = this.cameraTransform.bind(this);
  }
  cameraTransform(a) {
    if (this._zoomstart < this._zoomswitch && a.zoom >= this._zoomswitch) {
      let s = Ur([a.center.lng, a.center.lat]);
      !isNaN(s[0]) && !isNaN(s[1]) && (a.center = new ra(s[0], s[1]));
    } else if (this._zoomstart >= this._zoomswitch && a.zoom < this._zoomswitch) {
      let s = pr([a.center.lng, a.center.lat]);
      !isNaN(s[0]) && !isNaN(s[1]) && (a.center = new ra(s[0], s[1]));
    }
    return a;
  }
}
export {
  jr as EqualEarthCoordTransform,
  Dr as eq_to_LonLat,
  pr as geogLonLat_to_eqmercLonLat,
  Br as lonLat_to_eq,
  Ur as mercLonLat_to_eqmercLonLat
};
